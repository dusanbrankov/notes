# Vim Cheat Sheet

## Cursor

| Key                             | Moves the cursor                                                         |
|:------------------------------- |:------------------------------------------------------------------------ |
| **0**                           | To the beginning of the current line                                     |
| **$**                           | To the end of the current line.                                          |
| **^**                           | Move the cursor to the first non-empty character of the line.            |
| **w (W)**                       | To the beginning of the next word (ignoring punctuation characters).     |
| **e (B)**                       | To the end of the next word (ignoring punctuation characters).           |
| **b (B)**                       | To the beginning of the previous word (ignoring punctuation characters). |
| **Ctrl-f** or **Page Down**     | Down one page                                                            |
| **Ctrl-b** or **Page Up**       | Up one page.                                                             |
| ***number*G** or ***number*gg** | To line number. For example, **1G** moves to the first line of the file. |
| **Ctrl-g**                      | Shows your location in the file and the file status.                     |
| **gg**                          | To the first line of the file.                                           |
| **G**                           | To the last line of the file.                                            |
| **Ctrl-o**                      | Back to older positions.                                                 |
| **Ctrl-i**                      | To newer positions.                                                      |
| **}** / **{**                   | jump to next/previous paragraph (or function/block)                      |

Typing  `%`  while the cursor is on a (, ), [, ], {, or } goes to its match.

## Open

| Command | Opens                           |
|:------- |:------------------------------- |
| **o**   | The line below the current line |
| **O**   | The line above the current line |

## Delete (cut)

| Command         | Deletes                                                                                                                                                                                                                                                                                              |
|:--------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **x**           | The current character                                                                                                                                                                                                                                                                                |
| **dd**          | The current line                                                                                                                                                                                                                                                                                     |
| **D**           | The content of the current line                                                                                                                                                                                                                                                                      |
| **5dd**         | The current line and the next four lines                                                                                                                                                                                                                                                             |
| **:3,5d**       | delete lines starting from 3 to 5<br/>Tip You can also use the following characters to specify the range:<br/>`:.,$d` - From the current line to the end of the file<br/>`:.,1d` - From the current line to the beginning of the file<br/>`:10,$d` - From the 10th line to the beginning of the file |
| **dw**          | From the current cursor position to the beginning of the next word                                                                                                                                                                                                                                   |
| **diw**         | Word under the cursor                                                                                                                                                                                                                                                                                |
| **daw**         | Word under the cursor and the space after or before it                                                                                                                                                                                                                                               |
| **d2w**         | The next two words from the current cursor position to the beginning of the next word.                                                                                                                                                                                                               |
| **d$** or **D** | From the current cursor location to the end of the current line                                                                                                                                                                                                                                      |
| **d0**          | From the current cursor location to the beginning of the line                                                                                                                                                                                                                                        |
| **dG**          | From the current line to the end of the file                                                                                                                                                                                                                                                         |
| **cc**          | The current line and changes to Insert mode (`c` can be combined just like with `d`)                                                                                                                                                                                                                 |
| **dt***         | From the current cursor location to the first `*` on the current line                                                                                                                                                                                                                                |
| **s**           | delete character and substitute text                                                                                                                                                                                                                                                                 |

## Copy (yank)

| Command         | Copies                                                             |
|:--------------- |:------------------------------------------------------------------ |
| **yy** or **Y** | The current line                                                   |
| **5yy**         | The current line and the next four lines                           |
| **yW**          | From the current cursor position to the beginning of the next word |
| **y$**          | From the current cursor location to the end of the current line    |
| **y0**          | From the current cursor location to the beginning of the line      |
| **yG**          | From the current line to the end of the file                       |

## Paste

| Command | Puts                              |
|:------- |:--------------------------------- |
| **p**   | The copied line below the cursor. |
| **P**   | The copied line above the cursor. |

## Search and Replace

Search for 'word'; **n** and **N** for previous and next search string:

```
/word
```

`vi` uses an ex command to perform search-and-replace operations (called *substitution* in `vi`) over a range of lines or the entire file. To **change the word Line to line** for the entire file, we would enter the following command:

```
:%s/Line/line/g
```

To change all occurrences in the current line:

```
:s/Line/line/g
```

To change all occurrences within a range of lines:

```
:5,10s/Line/line/g
:5,$s/Line/line/g
```

| Item            | Meaning                                                                                                                                                                                                                                                                                                                                                                |
|:--------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **:**           | The colon character starts an ex command.                                                                                                                                                                                                                                                                                                                              |
| **%**           | This specifies the range of lines for the operation. % is a shortcut meaning from the first line to the last line. Alternately, the range could have been specified `1,5` (since our file is five lines long) or `1,$`, which means “from line 1 to the last line in the file.” If the range of lines is omitted, the operation is performed only on the current line. |
| **s**           | This specifies the operation. In this case, it’s substitution (search-and-replace).                                                                                                                                                                                                                                                                                    |
| **/Line/line/** | This specifies the search pattern and the replacement text.                                                                                                                                                                                                                                                                                                            |
| **g**           | This means “global” in the sense that the search-and-replace is performed on every instance of the search string in the line. If omitted, only the first instance of the search string on each line is replaced.                                                                                                                                                       |

We can also specify a substitution command with **user confirmation**. This is done by
adding a `c` to the end of the command. Here’s an example:

```
:%s/line/Line/gc
```

### Delete all lines containing pattern

`:g/{pattern}/d`

### Replace a single character

Type  `rx`  to replace the character at the cursor with  x.

The change operator allows you to change from the cursor to where the motion takes you.  eg. Type  `ce`  to change from the cursor to the end of the word,  `c$`  or `C` to change to the end of a line.

`R` followed by any input replaces any existing character.

## Set option

Typing `:set xxx` sets the option "xxx".  Some options are:

- `ic` / `ignorecase`  (ignore upper/lower case when searching)

- `is` / `incsearch`  (show partial matches for a search phrase)

- `hls` / `hlsearch` (highlight all matching phrases)

### Replace pattern

Replace multiple characters at once:

`Ctrl+v`, `arrow down`, `c`, 'replaced text', `esc`

## Convert text

Convert all text to lowercase:

```
ggVGu
```

Convert all text to uppercase:

```
ggVGU
```

## Other useful commands

`.` = repeat last command

## Plugins

```
:source $MYVIMRC | PackerSync
```
