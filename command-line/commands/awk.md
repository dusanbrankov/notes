# awk

`awk '1'` is a shortcut for `awk '{print $0}'`.

You can also just use `print` instead of `print $0` as `$0` is the default string: `awk {print}`


```sh
ls -la | awk '\
    /[DP].+s$/ \
    {if ($5 > 5000) print "filename: " $NF "\nsize: " $5\}'
```


```sh
ls -la | awk '\
    /[DP].+s$/ \
    {if ($5 > 5000) printf ("%s: %dK\n", $NF, $5)}'
```


```sh
ls -la | awk '\
    BEGIN {printf "Filename (filesize)\n\n"} \
    {if (NR > 3) printf ("%s (%dK)\n", $NF, $5)} \
    END {print "\nNumber of files: ", NR-3}'
```

```sh
awk -F':' '!/nologin/ && !/false/ {print $1, $7}' /etc/passwd
```

```sh
awk -F':' '/sudoers/ && !/dusan/ {print}' /var/log/auth.log
```
