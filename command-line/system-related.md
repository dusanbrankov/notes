# System related commands

**Print information about OS and host**

```sh
$ cat /etc/issue
```

```sh
$ hostnamectl
```

## OS, hardware vendor/model and more

```sh
$ hostnamectl
...
Operating System: Linux Mint 21.1
          Kernel: Linux 5.15.0-75-generic
    Architecture: x86-64
 Hardware Vendor: ASUSTeK Computer Inc.
  Hardware Model: K53SC
```

**CPU information**

```sh
$ lscpu
```

**Memory usage**

```sh
$ free -h --si
               total        used        free      shared  buff/cache   available
Mem:            7,8G        4,2G        240M         72M        3,4G        3,3G
Swap:           2,0G        1,1G        972M
```

`-h` = human readable

`--si` = Use kilo, mega, giga etc (power of 1000) instead of kibi, mebi, gibi (power of 1024).

**Disk information**

```sh
$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 223,6G  0 disk
├─sda1   8:1    0   512M  0 part /boot/efi
├─sda2   8:2    0     1K  0 part
└─sda5   8:5    0 223,1G  0 part /
sdb      8:16   1  28,8G  0 disk
└─sdb1   8:17   1  28,8G  0 part /media/dusan/KINGSTON
sr0     11:0    1  1024M  0 rom
```

**Find and kill process**

```bash
pidof timeshift  # shows process id
sudo kill 17810
```
