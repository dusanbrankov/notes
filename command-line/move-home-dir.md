# Move home directory to new partition

**1. List the filesystem usage**

```sh
df -hl
```

**2. Unmount /home**

To unmount _/home_, first create a temporary directory and then change the
home directory manually in the _/etc/passwd_ file.

> Note: _sdaX_ needs to be replaced with the actual device name.
Run `sudo fdisk -l` to list all block devices.

```sh
# temporary home dir
sudo mkdir /house
sudo chown USER:USER /house

# search for USER (dbran) and change the home path to '/house'
sudo vim /etc/passwd

# save changes and reboot
reboot
```

After system reboot, unmount _/home_ and _/house_, and then mount the new
partition to _/home_.

(Example device: **sdcX**)

```sh
sudo umount /home  # or sudo umount /dev/sdbX
sudo umount /house
sudo mount /dev/sdcX
```

