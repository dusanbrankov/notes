# SSH

### How to

1. [Login to a remote system](#login)
2. [Copy files](#copy)

-----

<a name="login" />

#### Login to a remote system:

```sh
ssh USERNAME@IP_ADDRESS
```

**Examples**

Login to a local computer

```sh
ssh john@192.168.24.107
```


Login to a server

```sh
ssh admin@example.com
```

<a name="copy" />

#### Copy files

```sh
scp SOURCE DEST  # same as cp
```

### Options

```sh
scp command:
        -P - Specify remote host SSH port
        -p - Preserve files modification and access times
        -q - suppress the progress meter and non-error messages
        -C - Compress the data as it is sent to the destination machine
        -r - This option tells scp to copy directories recursively.
```

**Examples**

Copy a file to a remote system

```sh
scp some_file john@192.168.24.107:~/target_dir
```

Copy a directory from a remote system

```sh
scp -r john@192.168.1.5:~/notes Documents/notes
```
