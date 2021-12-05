<?php

use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\Admin\AdminTransactionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/test_react', function () {
//     return view('welcome');
// });

Route::get('raja_ongkir', [HomeController::class, 'rajaOngkir']);

Route::get('/',[HomeController::class, 'landingPage']);
Route::get('test_react',[HomeController::class, 'testReact']);

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::view('home', 'home')->name('home');

    Route::get('home',[HomeController::class, 'landingPage']);

    Route::get('products',[ProductController::class, 'products']);
    Route::get('product/{id}',[ProductController::class, 'productDetail']);

    Route::get('cart', [TransactionController::class, 'cart']);
    Route::post('checkout', [TransactionController::class, 'checkout']);

    Route::get('transactions', [TransactionController::class, 'transactions']);
    Route::get('transaction/{id}', [TransactionController::class, 'transactionDetail'])->name('transaction');
    Route::post('transaction/upload_payment_proof', [TransactionController::class, 'uploadPaymentProof']);
    Route::post('transaction/receive_order/', [TransactionController::class, 'receiveOrder']);

    Route::get('product/{product_id}/reviews', [ReviewController::class, 'reviews']);
    Route::post('products/filter', [ProductController::class, 'filter']);
    Route::get('create_review/{product_id}', [ReviewController::class, 'create']);
    Route::post('create_review/{product_id}', [ReviewController::class, 'store']);

    Route::get('test_notify', [NotificationController::class, 'testNotify']);
    Route::get('notifications', [NotificationController::class, 'viewUserNotifications']);
    Route::post('/read_notification', [NotificationController::class, 'readNotification']);


});

    Route::get('cek_ongkir/{kota_pembeli}/{kurir}', [TransactionController::class, 'cekOngkir']);

    Route::get('admin/transactions', [AdminTransactionController::class, 'transactions']);
    // Route::get('admin/confirm_payment/{transaction_id}', [AdminTransactionController::class, 'confirmPayment']);
    Route::post('admin/confirm_payment/', [AdminTransactionController::class, 'confirmPayment']);

    Route::get('admin/products', [AdminProductController::class, 'products']);
    Route::get('admin/create_product', [AdminProductController::class, 'create']);
    Route::post('admin/create_product', [AdminProductController::class, 'store']);
    Route::get('admin/edit_product/{product_id}', [AdminProductController::class, 'store']);
    Route::post('admin/edit_product', [AdminProductController::class, 'update']);
    Route::post('admin/product/destroy', [AdminProductController::class, 'destroy']);
