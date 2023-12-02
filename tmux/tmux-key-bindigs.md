# tmux key bindigs

## Windows

```
C-a c          Create a new window
C-a ,          Rename current window

Alt-a arrow   Switch windows
```


## Panes

```
Ctrl-a |       Split window vertically
Ctrl-a -       Split window horizontally

Ctrl-Arrow     Switch panes

C-a Arrow      Resize the pane

C-a M-1        Set the even-horizontal layout
C-a M-2        Set the even-vertical layout
```


## Config file

```
Ctrl-a s       Reload (source) config file
```

-----

## Key bindings

From the tmux man page:

>  tmux allows a command to be bound to most keys, with or without a prefix key.  When specifying keys, most represent themselves (for example ‘A’ to ‘Z’).  Ctrl keys may be prefixed with ‘C-’ or ‘^’, Shift keys with ‘S-’ and Alt (meta) with ‘M-’.  In addition, the following special key names are accepted: Up, Down, Left, Right, BSpace, BTab, DC (Delete), End, Enter, Escape, F1 to F12, Home, IC (Insert), NPage/PageDown/PgDn, PPage/PageUp/PgUp, Space, and Tab.
