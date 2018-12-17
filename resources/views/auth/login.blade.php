@extends('layouts.app')

@section('content')
<div class="cat__pages__login--fullscreen" style="background-image: url(img/login/1.jpg)">
    <div class="cat__pages__login__block">
        <div class="row">
            <div class="col-xl-12">
                <div class="cat__pages__login__block__promo text-white text-center">
                    <h1 class="mb-3">
                        <strong></strong>
                    </h1>
                    <p></p>
                </div>
                <div class="cat__pages__login__block__inner">
                    <div class="cat__pages__login__block__form">
                        <h4 class="text-uppercase">
                            <strong>{{ __('Login') }}</strong>
                        </h4>
                        <br />
                        <form id="form-validation" name="form-validation" class="form-signin" method="post" action="{{ route('login') }}" >            
                           @csrf
                            <div class="form-group">
                               <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>
                               <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>
                               @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                               <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                                        @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                                <div class="checkbox chkbox_intl">
                                    <label>
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary mr-3">{{ __('Login') }}</button>
                                <span class="register-link">
                                    <a href="" class="cat__core__link--blue cat__core__link--underlined">Register</a> if you don't have account
                                </span>
                            </div>
                            <div class="form-group">
                                <span>
                                    Use another service to Log In
                                </span>
                                <div class="mt-2">
                                    <a href="javascript: void(0);" class="btn btn-icon">
                                        <i class="icmn-facebook"></i>
                                    </a>
                                    <a href="javascript: void(0);" class="btn btn-icon">
                                        <i class="icmn-google"></i>
                                    </a>
                                    <a href="javascript: void(0);" class="btn btn-icon">
                                        <i class="icmn-windows"></i>
                                    </a>
                                    <a href="javascript: void(0);" class="btn btn-icon">
                                        <i class="icmn-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
