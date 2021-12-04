<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'total_harga' => $this->total_harga,
            'status_transaksi' => $this->status_transaksi,
            'bukti_pembayaran' => $this->bukti_pembayaran,
            'kode_voucher' => $this->kode_voucher,
            'kurir' => $this->kurir,
            'jenis_pengiriman' => $this->jenis_pengiriman,
            'jenis_pembayaran' => $this->jenis_pembayaran,
            'transaction_details' => TransactionDetailResource::collection($this->whenLoaded('transactionDetails')),
            'created_at' => $this->updated_at ? $this->created_at->diffForHumans() : NULL,
			'updated_at' => $this->updated_at ? $this->updated_at->diffForHumans() : NULL,
        ];
    }
}
