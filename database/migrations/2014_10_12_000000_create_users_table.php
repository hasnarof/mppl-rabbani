<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone_number')->nullable();
            $table->string('avatar')->nullable();
            $table->enum('role', ['user','admin'])->default('user');
            $table->string('resipient_name')->nullable();
            $table->string('resipient_phone_number')->nullable();
            $table->string('resipient_email')->nullable();
            $table->string('resipient_address')->nullable();
            $table->string('resipient_country')->nullable();
            $table->string('resipient_province')->nullable();
            $table->unsignedInteger('resipient_city_id')->nullable();
            $table->string('resipient_city')->nullable();
            $table->string('resipient_postal_code')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
