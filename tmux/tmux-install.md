# tmux installation guide

```sh
$ git clone https://github.com/tmux/tmux.git && cd tmux
$ sudo apt update && sudo apt install automake libtool libevent-dev ncurses-dev
$ sh autogen.sh && ./configure && make
$ make && sudo make install
```
