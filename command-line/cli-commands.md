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

# 💡️ system related 

# Print information about OS and host

`$ cat /etc/issue`

`$ hostnamectl`
