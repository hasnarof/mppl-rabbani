<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionDetailResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product_detail' => new ProductDetailResource($this->whenLoaded('productDetail')),
            'jumlah_produk' => $this->jumlah_produk,
            'harga_per_produk' => $this->harga_per_produk,
            'ukuran_produk' => $this->ukuran_produk,
            'variasi_warna' => $this->variasi_warna,
            'created_at' => $this->updated_at ? $this->created_at->diffForHumans() : NULL,
			'updated_at' => $this->updated_at ? $this->updated_at->diffForHumans() : NULL,
        ];
    }
}
