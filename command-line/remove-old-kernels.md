# Remove old kernels

**Show currently installed kernel:**

```sh
uname -sr
```

**List all installed kernel versions:**

```sh
dpkg -l | grep 'linux-image' | awk '{print $2}'
```

**Remove old kernel versions:**

```sh
sudo apt remove --purge KERNEL
```

**Update boot config file and reboot:**

```sh
sudo update-grub2
sudo reboot
```

