# Capo

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

Routing can be done in two ways:

1. You can use the `routes.php` file to define routes and controllers [Laravel Docs](https://laravel.com/docs/10.x/routing).
2. You can use the `pages` directory to define routes and pages using [Laravel Folio](https://github.com/laravel/folio).

```bash
/pages
├── index.blade.php
├── about.blade.php
├── about (nested index also works)
│   └── index.blade.php
```

## Dynamic Data during static site generation

When generating the static site, you can use the ExportPaths attribute to define which routes should be generated. This is useful when you have dynamic data that you want to generate static pages for. For example, if you have a blog and you want to generate static pages for each blog post, you can use the ExportPaths attribute to define which routes should be generated. The rest of your logic can be handled as if it was a normal Laravel application.

```php
// routes.php
Route::get('/blog/{post}', [BlogController::class, 'show']);

// app/Http/Controllers/BlogController.php
use Capo\Attributes\ExportPaths;

class BlogController
{
    #[ExportPaths(BlogPostPaths::class)]
    public function show(string $name)
    {}
}

class BlogPostPaths implements \Capo\Services\Export\Interfaces\ExportPaths
{
    public function paths(): array
    {
        return [
            '/blog/first-post',
            '/blog/second-post',
        ];
    }
}
```
