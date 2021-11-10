@extends('layouts.app')

@section('content')
    <div class="container">
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif
    </div>

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
                @foreach($products as $key => $product)
                <tr>
                    <td>{{$product->name}}</td>
                    <td>
                        <img src="{{url('storage/'.$product->image)}}" alt="" width=200>
                    </td>
                    <td>{{$product->harga_produk}}</td>
                    <td>
                        <a href="" class="btn btn-primary">Detail</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <h2>Our Products</h2>
        <table class="table">
            <tbody>
                @foreach($products as $key => $product)
                <tr>
                    <td>{{$product->name}}</td>
                    <td>
                        <img src="{{url('storage/'.$product->image)}}" alt="" width=200>
                    </td>
                    <td>{{$product->harga_produk}}</td>
                    <td>
                        <a href="" class="btn btn-primary">Detail</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
