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

You can also use routes and controllers like a regular Laravel app. When generating the static site, you can use the ExportPaths attribute to define which routes should be generated.

```php
// routes/web.php
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
