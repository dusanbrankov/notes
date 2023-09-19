# `apt` command

**Find packages matching `<phrase>`**

```sh
$ apt-cache search <phrase>
```

**Show information on `<package>`**

```sh
$ apt show <package>
```

**Fetch package list**

```sh
$ apt update
```

**Download and install the updates and (UNLIKE apt-get) install new necessary packages:**

```sh
$ apt upgrade
```

**Download and install the updates AND install new necessary packages AND remove packages that stand in the way of the upgrade - use with caution!**

```sh
$ apt dist-upgrade
```

**Perform a full system upgrade:**

```sh
$ apt update && apt upgrade  # use dist-upgrade carefully if needed
```

**Install package(s):**

```sh
$ apt install <package>...
```

**Uninstall package(s):**

```sh
$ apt remove <package>...
```

**Remove automatically all unused packages:**

```sh
$ apt autoremove
```

**List dependencies of a package:**

```sh
$ apt depends <package>...
```

**Remove packages and delete their config files:**

```sh
$ apt purge <package>...
```

**List all packages installed**

```sh
$ apt list --installed
```
