<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->longText('detail');
            // $table->enum('kategori_pakaian', ['Atasan', 'Bawahan', 'Dress', 'Kerudung', 'Mukena','Clothing']);
            $table->string('kategori_pakaian');
            $table->enum('kategori_gender', ['Women', 'Men', 'Universal']);
            $table->boolean('is_best_seller')->default(0);
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
        Schema::dropIfExists('products');
    }
}
