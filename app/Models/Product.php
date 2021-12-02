<?php

namespace App\Models;

use App\Utilities\FilterBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    public function productDetails()
    {
        return $this->hasMany(ProductDetail::class);
    }

    public function scopeFilterBy($query, $filters) {
        $namespace = 'App\Utilities\ProductFilters';
        $filter = new FilterBuilder($query, $filters, $namespace);

        return $filter->apply();
    }
}
