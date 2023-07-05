# How to format disk partitions

## Checking the paritions

List all block devices to see which device to format.

`lsblk`

To also display file system information, run:

`lsblk -f`

Lets say we want to format the device **sdaX**.

If the device is mounted, we first need to unmount it.

`sudo umount /dev/sdaX`

## Formatting disk partiton

Delete partitions if needed:

`sudo fdisk /dev/sda`

Run the same command to add a new partition. Type `m` to see all options.

To verify that a new partition has been created, run:

`sudo fdisk -l`

Format disk partition with the format **ext4**.

`sudo mkfs -t ext4 /dev/sdaX`

Now we need to mount the newly created partition.

`sudo mount /dev/sdaX /media/diskX`

To make the changes permanent, we need to edit the _/etc/fstab_ file.

<https://linuxconfig.org/how-fstab-works-introduction-to-the-etc-fstab-file-on-linux>

