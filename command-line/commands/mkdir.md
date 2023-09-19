# `mkdir` command

**Create nested directories:**

```sh
mkdir -p foo/bar/baz
```

**Create foo/bar and foo/baz directories:**

```sh
mkdir -p foo/{bar,baz}
```

**Create the foo/bar, foo/baz, foo/baz/zip and foo/baz/zap directories:**

```sh
mkdir -p foo/{bar,baz/{zip,zap}}
```
