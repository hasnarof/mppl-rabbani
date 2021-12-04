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
}
