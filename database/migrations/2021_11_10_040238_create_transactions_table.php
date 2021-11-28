<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->decimal('total_harga')->nullable();
            $table->decimal('ongkir')->nullable();
            $table->decimal('total_bersama_ongkir')->nullable();
            $table->enum('status_transaksi', ['To Pay','To Payment Confirm','To Ship','To Receive','Completed','Cancelled'])
                ->default('To Pay');
            $table->string('bukti_pembayaran')->nullable();
            $table->string('kode_voucher')->nullable();
            $table->string('kurir')->nullable();
            $table->string('jenis_pengiriman')->nullable(); // masih ngawang
            $table->string('jenis_pembayaran')->nullable(); // masih ngawang
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
