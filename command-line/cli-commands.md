# 💡️ apt

## To find packages matching `<phrase>`:
`apt search <phrase>`

## To show information on a package:
apt show <package>

## To fetch package list:
apt update

## To download and install the updates and (UNLIKE apt-get) install new necessary packages:
apt upgrade

## To download and install the updates AND install new necessary packages
AND remove packages that stand in the way of the upgrade - use with caution!
apt dist-upgrade

## To perform a full system upgrade:
apt update && apt upgrade # use dist-upgrade carefully if needed

## To install package(s):
apt install <package>...

## To uninstall package(s):
apt remove <package>...

## To remove automatically all unused packages:
apt autoremove

## To list dependencies of a package:
apt depends <package>...

## To remove packages and delete their config files:
apt purge <package>...

## To list all packages installed
apt list --installed

---

# 💡️ mkdir

## To create nested directories:
mkdir -p foo/bar/baz

## To create foo/bar and foo/baz directories:
mkdir -p foo/{bar,baz}

## To create the foo/bar, foo/baz, foo/baz/zip and foo/baz/zap directories:
mkdir -p foo/{bar,baz/{zip,zap}}

---

# 💡️ touch

## Create multiple files:
touch path/to/file-{1,2,3}.txt

---

## 💡️ pushd / popd

# To pushes your current directory to the top of a stack while changing to the specified directory:
pushd <directory>

# To return use popd:
popd

---

## 💡️ environment variables

# list all environment variables
printenv

---

## 💡️ system related 

### Print information about OS and host

`$ cat /etc/issue`

`$ hostnamectl`

### OS, hardware vendor/model and more

```sh
$ hostnamectl
...
Operating System: Linux Mint 21.1
          Kernel: Linux 5.15.0-75-generic
    Architecture: x86-64
 Hardware Vendor: ASUSTeK Computer Inc.
  Hardware Model: K53SC
```

### CPU information

```sh
$ lscpu
```

### Memory usage

```sh
$ free -h --si
               total        used        free      shared  buff/cache   available
Mem:            7,8G        4,2G        240M         72M        3,4G        3,3G
Swap:           2,0G        1,1G        972M
```

`-h` = human readable

`--si` = Use kilo, mega, giga etc (power of 1000) instead of kibi, mebi, gibi (power of 1024).

### Disk information

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
