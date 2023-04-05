# Capo Starter

**_Under heavy construction and might change at any time._**

Capo has the goal of making it easy to build websites with the power of Laravel but the simplicity of modern Javascript frameworks like Next.js or Nuxt.js.

Capo can be run as a standard server based application or as a static site generator.

## Getting Started

```bash
composer create-project capocode/starter [name]

npm i

npm run dev

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
