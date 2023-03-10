<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @section('seo')
        <title></title>
        <meta name="description" content="">
    @show
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    {{-- {{ config('app.name') }} --}}
    {{ $slot }}
</body>
</html>
