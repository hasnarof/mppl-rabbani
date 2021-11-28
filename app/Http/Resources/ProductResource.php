<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nama' => $this->nama,
            'detail' => $this->detail,
            'kategori_pakaian' => $this->kategori_pakaian,
            'kategori_gender' => $this->kategori_gender,
            'is_best_seller' => $this->is_best_seller,
            'product_details_id' => $this->productDetails->first()->id,
            'image' => $this->productDetails->first()->image,
            'harga' => $this->productDetails->first()->harga,
        ];
    }
}
