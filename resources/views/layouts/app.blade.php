<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Scripts -->
        <script src="{{ asset('assets/vendors/by_bower/bootstrap-show-password/bootstrap-show-password.min.js') }}" defer></script>
        <script src="{{ asset('assets/vendors/by_bower/html5-form-validation/dist/jquery.validation.min.js') }}" defer></script>
        <script src="{{ asset('assets/vendors/by_bower/bootstrap/dist/js/bootstrap.min.js') }}" defer></script>
        <script src="{{ asset('assets/vendors/by_bower/jquery/dist/jquery.min.js') }}" defer></script>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="{{ asset('assets/vendors/by_hands/font-icomoon/style.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/modules/vendors/common/vendors.cleanui.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/modules/core/common/core.cleanui.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/vendors/by_hands/font-linearicons/style.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/vendors/by_hands/font-icomoon/style.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/vendors/by_hands/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/vendors/by_bower/bootstrap-show-password/assets/bootstrap-v3/css/bootstrap-theme.min.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/vendors/by_bower/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/modules/pages/common/pages.cleanui.css') }}" rel="stylesheet">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    </head>       
    <body>
        @yield('content')
    </body>
</html>
