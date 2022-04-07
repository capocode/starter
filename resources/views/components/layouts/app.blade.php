<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @section('seo')
        <title></title>
        <meta name="description" content="">
    @show
    <link rel="stylesheet" href="{{ mix('/_assets/app.css') }}">
    <script src="{{ mix('/_assets/app.js')}}" defer></script>
</head>
<body>
    {{ $slot }}
</body>
</html>
