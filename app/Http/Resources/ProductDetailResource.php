<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductDetailResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product_id' => $this->product_id,
            'nama' => $this->nama,
            'image' => $this->image,
            'warna' => $this->warna,
            'ukuran' => $this->ukuran,
            'ketersediaan' => $this->ketersediaan,
            'harga' => $this->harga,
            'created_at' => $this->updated_at ? $this->created_at->diffForHumans() : NULL,
			'updated_at' => $this->updated_at ? $this->updated_at->diffForHumans() : NULL,
        ];
    }
}
