<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @section('seo')
        <title></title>
        <meta name="description" content="">
    @show
    <link rel="stylesheet" href="{{ manifest('app.css') }}">
    <script src="{{ manifest('app.js')}}" defer></script>
</head>
<body>
    {{ $slot }}
</body>
</html>
