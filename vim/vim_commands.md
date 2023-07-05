# Vim Commands

## Normal Mode

**move cursor to the beginning/end of the current line and switch to 'insert mode'**

`I` / `A`

**delete to the beginning/end of the line**

`d0` / `d$`

**go to older/newer position**

`<ctrl-o>` / `<ctrl-i>`

**toggle tabs**

`gt`

---

## Command Mode

**open file explorer**

`:Explorer` (rename/delete with `r` / `d`)

**substitute**

To change every occurrence of a character string between two lines,

`:#,#s/old/new/g`

where `#,#` are the line numbers of the range of lines where the substitution
is to be done.

`:%s/old/new/g`

to change every occurrence in the whole file.

`:%s/old/new/gc`

to find every occurrence in the whole file, with a prompt whether to substitute
or not.

**comment/uncomment (after highlighting lines in visual mode)**

`:s/^/# /` / `:s/^#//`

**open another file in a new tab**

`:tabnew [filename]`

**set filetype**

`:set filetype=python`

**add text from file**

`:r ~/snippets/while`

**read and yank stdout to file**

`:r !ls`

**save selected text to _filename_**

1. select text with `V`
2. type `:w filename` to save selected text to _filename_

-----

### Useful Help Sections

**Overview of pattern items**

`:help pattern-overview`
