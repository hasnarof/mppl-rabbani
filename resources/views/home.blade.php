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
        <h1>Best Seller</h1>
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
