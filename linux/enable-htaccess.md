# Enable .htaccess

```sh
$ sudo vim /etc/apache2/apache2.conf
```

Replace `AllowOverride None` with `AllowOverride All`:

```
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</Directory>
```

And then run:

```sh
$ sudo a2enmod rewrite
$ sudo systemctl restart apache2
```
