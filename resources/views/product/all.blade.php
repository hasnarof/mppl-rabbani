@extends('layouts.app')

@section('title')
All Products
@endsection

@section('content')

<div class="container">
    <form action="">
        <div class="mb-3">
            <label for="search_product" class="form-label">Search product</label>
            <input type="email" class="form-control" id="search_product" placeholder="">
        </div>
        <button>Search</button>
    </form>
    <h1>New Arrival</h1>
    <table class="table">
        <tbody>
            @foreach($new_arrivals as $key => $product)
            <tr>
                <td>{{$product->nama}}</td>
                <td>
                    <img src="{{url('storage/'.$product->image)}}" alt="" width=200>
                </td>
                <td>Rp{{number_format($product->harga, 2)}}</td>
                <td>
                    <a href="{{url('product/'.$product->id)}}" class="btn btn-primary">Detail</a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <h2>Our Products</h2>
    <table class="table">
        <tbody>
            @foreach($all_products as $key => $product)
            <tr>
                <td>{{$product->nama}}</td>
                <td>
                    <img src="{{url('storage/'.$product->image)}}" alt="" width=200>
                </td>
                <td>Rp{{number_format($product->harga, 2)}}</td>
                <td>
                    <a href="{{url('product/'.$product->id)}}" class="btn btn-primary">Detail</a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>

@endsection
