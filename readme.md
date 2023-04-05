# Capo Starter

This is under heavy construction and might change at any time.

Site can be run via server or generated to static site.

## Getting Started

```bash
composer create-project capocode/starter [name]

npm i

npm run dev

// to build the site
composer run build
```

## Routing

Routes will be generated based on the structure of your `blade.php` in the `pages` directory.

```bash
resources/views/pages
├── index.blade.php
├── about
│   └── index.blade.php
```

You can also use routes and controllers like a regular Laravel app

```php
use Capo\Attributes\ExportPaths;

class SomeController
{
    #[ExportPaths(SomeClassWithPathsMethod::class)]
    public function show(string $name)
    {}
}

class SomeClassWithPathsMethod
{
    public function paths(): array
    {
        return [
            'path1',
            'path2',
        ];
    }
}
```
