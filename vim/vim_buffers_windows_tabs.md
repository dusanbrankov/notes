# Buffers, Windows and Tabs

> **Note**
> Make sure you have the `set hidden` option in vimrc. Without it, whenever you switch buffers and your current buffer is not saved, Vim will prompt you to save the file (you don't want that if you want to move quickly).

## Buffers

```
:buffers | :ls | :files
    List all buffers
:bn[ext]
    Go to next buffer
:bp[revious]
    Go to previous buffer
:bd[elete] [FILENAME | N]
    Delete buffer (without args, current buffer will be deleted)
:buffer FILENAME | N
    Autocomplete FILENAME with <Tab>
```

Jump to the older position in jump list with `Ctrl-O` and to the newer position with `Ctrl-I`. These are not buffer specific methods, but they can be used to jump between different buffers.

If you have multiple buffers opened, you can close all of them with:

```
:qall
:qall!
:wqall
```

## Window

```
:sp[lit] [FILENAME]
    Split window horizontally
:vs[plit] [FILENAME]
    Split window vertically
:new [FILENAME]
    Create new window
```

For more, check out `:h window`.

Here are some useful normal-mode window commands:

```
Ctrl-W V    Opens a new vertical split
Ctrl-W S    Opens a new horizontal split
Ctrl-W C    Closes a window
Ctrl-W O    Makes the current window the only one on screen and closes other windows
Ctrl-W H    Moves the cursor to the left window
Ctrl-W J    Moves the cursor to the window below
Ctrl-W K    Moves the cursor to the window upper
Ctrl-W L    Moves the cursor to the right window
```

## Tabs

A tab is a collection of windows. Think of it like a layout for windows. In most modern text editors (and modern internet browsers), a tab means an open file / page and when you close it, that file / page goes away. In Vim, a tab does not represent an open file. When you close a tab in Vim, you are not closing a file. You are only closing the layout. The data for those files are stored in-memory in buffers. The buffers are still there.

```
:tabnew file.txt    Open file.txt in a new tab
:tabclose           Close the current tab
:tabnext            Go to next tab
:tabprevious        Go to previous tab
:tablast            Go to last tab
:tabfirst           Go to first tab
```

**Tip:** You can also run `gt` to go to next tab page (you can go to previous tab with `gT`). You can pass count as argument to `gt`, where count is tab number. To go to the third tab, do `3gt`.

To start Vim with multiple tabs, you can do this from the terminal:

```
vim -p file1.js file2.js file3.js
```

---

Source: <https://learnvim.irian.to/basics/buffers_windows_tabs>
