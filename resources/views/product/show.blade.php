@extends('layouts.app')

@section('title')
{{$product->nama}}
@endsection

@section('content')

<div class="container">
    <h1>{{$product->nama}}</h1>
    @foreach($product->colors as $color)
    <img src="{{url('storage/'.$color->image)}}" alt="" width=200>
    @endforeach
    <h3>Detail Produk</h3>
    <p>{!!$product->detail!!}</p>
    <h3>Choose Color</h3>
    @foreach($product->colors as $color)
    <a class="btn btn-secondary">{{$color->warna}}</a>
    @endforeach
    <h3>Choose Size</h3>
    @foreach($product->sizes as $size)
    <a href="" class="btn btn-info">{{$size->ukuran}}</a>
    @endforeach
    <br><br>
    <a href="" class="btn btn-primary">Add to Cart</a>
    <h2>Testimonial</h2>
    <a href="" class="btn btn-primary">See All</a>
</div>

@endsection
