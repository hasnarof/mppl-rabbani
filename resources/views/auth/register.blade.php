@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Register') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="username" class="col-md-4 col-form-label text-md-right">{{ __('Username') }}</label>

                                <div class="col-md-6">
                                    <input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="username" autofocus>

                                    @error('username')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>

                            <h5>Resipient Address</h5>

                            <div class="form-group row">
                                <label for="resipient_name" class="col-md-4 col-form-label text-md-right">{{ __('resipient_name') }}</label>

                                <div class="col-md-6">
                                    <input id="resipient_name" type="text" class="form-control @error('resipient_name') is-invalid @enderror" name="resipient_name" value="{{ old('resipient_name') }}" required autocomplete="resipient_name" autofocus>

                                    @error('resipient_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="resipient_phone_number" class="col-md-4 col-form-label text-md-right">{{ __('resipient_phone_number') }}</label>

                                <div class="col-md-6">
                                    <input id="resipient_phone_number" type="text" class="form-control @error('resipient_phone_number') is-invalid @enderror" name="resipient_phone_number" value="{{ old('resipient_phone_number') }}" required autocomplete="resipient_phone_number" autofocus>

                                    @error('resipient_phone_number')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="resipient_email" class="col-md-4 col-form-label text-md-right">{{ __('resipient_email') }}</label>

                                <div class="col-md-6">
                                    <input id="resipient_email" type="text" class="form-control @error('resipient_email') is-invalid @enderror" name="resipient_email" value="{{ old('resipient_email') }}" required autocomplete="resipient_email" autofocus>

                                    @error('resipient_email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="resipient_country" class="col-md-4 col-form-label text-md-right">{{ __('resipient_country') }}</label>

                                <div class="col-md-6">
                                    <input id="resipient_country" type="text" class="form-control @error('resipient_country') is-invalid @enderror" name="resipient_country" value="{{ old('resipient_country') }}" required autocomplete="resipient_country" autofocus>

                                    @error('resipient_country')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="resipient_province" class="col-md-4 col-form-label text-md-right">{{ __('resipient_province') }}</label>

                                <div class="col-md-6">
                                    <input id="resipient_province" type="text" class="form-control @error('resipient_province') is-invalid @enderror" name="resipient_province" value="{{ old('resipient_province') }}" required autocomplete="resipient_province" autofocus>

                                    @error('resipient_province')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="resipient_address" class="col-md-4 col-form-label text-md-right">{{ __('resipient_address') }}</label>

                                <div class="col-md-6">
                                    <input id="resipient_address" type="text" class="form-control @error('resipient_address') is-invalid @enderror" name="resipient_address" value="{{ old('resipient_address') }}" required autocomplete="resipient_address" autofocus>

                                    @error('resipient_address')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="resipient_postal_code" class="col-md-4 col-form-label text-md-right">{{ __('resipient_postal_code') }}</label>

                                <div class="col-md-6">
                                    <input id="resipient_postal_code" type="text" class="form-control @error('resipient_postal_code') is-invalid @enderror" name="resipient_postal_code" value="{{ old('resipient_postal_code') }}" required autocomplete="resipient_postal_code" autofocus>

                                    @error('resipient_postal_code')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Register') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
