# Laravel setup

Install Laravel:

```sh
composer global require laravel/installer
```

Add composer bin to `PATH` in `.profile`:

```sh
composer="$HOME/.config/composer/vendor/bin"
[ -d "$composer" ] && PATH="$composer:$PATH"
```

