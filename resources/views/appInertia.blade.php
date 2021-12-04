<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <!-- <link rel="stylesheet" href="/node_modules/react-star-rating/dist/css/react-star-rating.min.css"> -->
  </head>
  <body>
    @routes
    @inertia
  </body>
</html>
