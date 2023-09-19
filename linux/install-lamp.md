# Install Lamp

```sh
sudo apt-get update
sudo apt-get upgrade
sudo reboot
```


```sh
sudo apt-get install lamp-server^
sudo systemctl status apache2
```

add: `<?php phpinfo(); ?>`

```sh
sudo nano /var/www/html/info.php
```

If it doesn't work, make sure that you have disabled the mpm_event Apache module and enabled the mpm_prefork and php8.1 modules.

```sh
sudo a2dismod mpm_event
sudo a2enmod mpm_prefork
sudo a2enmod php8.1
sudo systemctl restart apache2
```


```sh
sudo mysql

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nemesis504';
Query OK, 0 rows affected (0,02 sec)

mysql> quit
```

```sh
sudo apt-get install phpmyadmin
```

1. select 'apache2' with the space key and hit enter
2. Configure database for phpmyadmin with dbconfig-common? -> Yes
3. Enter mysql password

login at http://localhost/phpmyadmin/ (root, mysql-pw)


```sh
# add user to group 'www-data'
sudo gpasswd -a $USER www-data

# create symlink
sudo ln -sT ~/dev/play/php/ /var/www/html/play
[https://askubuntu.com/a/46371]

sudo vim /etc/php/8.1/apache2/php.ini
```

```
; This directive controls whether or not and where PHP will output errors,
; notices and warnings too. Error output is very useful during development, but
; it could be very dangerous in production environments. Depending on the code
; which is triggering the error, sensitive information could potentially leak
; out of your application such as database usernames and passwords or worse.
; For production environments, we recommend logging errors rather than
; sending them to STDOUT.
; Possible Values:
;   Off = Do not display any errors
;   stderr = Display errors to STDERR (affects only CGI/CLI binaries!)
;   On or stdout = Display errors to STDOUT
; Default Value: On
; Development Value: On
; Production Value: Off
; https://php.net/display-errors
display_errors = On
```

```sh
sudo systemctl restart apache2
```

---

_OLD_

```sh
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade

sudo reboot

sudo apt-get install lamp-server^

sudo systemctl status apache2

sudo nano /var/www/html/info.php
add: <?php phpinfo(); ?>

sudo systemctl restart apache2

sudo mysql_secure_installation

sudo apt-get install phpmyadmin

sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'enterpassword';
mysql -u root -p
```

---

**Sources:**

https://techviewleo.com/how-to-install-lamp-stack-on-linux-mint/

https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04

https://phoenixnap.com/kb/access-denied-for-user-root-localhost

https://askubuntu.com/questions/450603/correct-permissions-for-sudo-lamp-var-www-directory
