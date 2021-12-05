<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Notifications\NewUserNotification;
use Illuminate\Support\Facades\Notification;

class NotificationController extends Controller
{
    public function testNotify()
    {
        // $id = 2;
        $user = User::find(2);
        Notification::send($user, new NewUserNotification());
    }

    public function viewUserNotifications()
    {
        $notifications = auth()->user()->unreadNotifications;
        return Inertia::render('Notification/Notifications', [
            'notifications'=>$notifications,
        ]);
    }

    public function readNotification(Request $request)
    {
        $id = $request['notificationId'];
        $id = $request->input('notificationId');
        // echo $id;
        // error_log($id);
        auth()->user()
            ->unreadNotifications
            ->when($id, function ($query) use ($id) {
                return $query->where('id', $id);
            })
            ->markAsRead();

        // $notifications = auth()->user()->unreadNotifications;
        return response()->noContent();
        // return json_encode($notifications);
    }
}
