# Bash: How to...

## Determine filetype

```bash
$ file <file>
```

## Display file status

```bash
$ stat bash_how_to.md
File: bash_how_to.md
Size: 68        	Blocks: 8          IO Block: 4096   regular file
Device: 805h/2053d	Inode: 4730515     Links: 1
Access: (0664/-rw-rw-r--)  Uid: ( 1000/   dusan)   Gid: ( 1000/   dusan)
Access: 2023-06-29 18:24:10.348915159 +0200
Modify: 2023-06-29 18:18:56.291046142 +0200
Change: 2023-06-29 18:18:56.291046142 +0200
 Birth: 2023-06-29 18:18:56.291046142 +0200
 ```

## Show only hidden (dot) files

```bash
$ ls -d .[!.]*
```

## List all current shell option flags

```bash
$ echo $-
himBHs
```

> `.[!.]*` is a filename expansion pattern where `[]` denotes a list of
characters to match, but the leading `!` negates the list. So we are looking
for a dot, followed by any character that is not a dot, followed by any number
of any characters. You may also use `^` to negate a character class, but `!` is
specified in the POSIX standard and thus is more portable.

## Using shell quoting

Unquoted text and even text enclosed in double quotes is subject to **shell
expansion** and **substitution**.

```bash
$ echo A coffee is $5?!
A coffee is ?!
$ echo "A coffee is $5?!"
-bash: !": event not found
$ echo 'A coffee is $5?!'
A coffee is $5?!
```

`!"` is treated as a history substitution, which fails in this case because it
doesn't match anything in the history.

To mix some shell expansions with some literal strings you may use the shell
escape character `\` or change your quoting. The exclamation point is a special case because the preceding backslash escape character is not removed. You can
work around that by using single quotes or a trailing space as shown here.

```bash
$ echo 'A coffee is $5 for' "$USER" '?!'
A coffee is $5 for jp ?!
$ echo "A coffee is \$5 for $USER?\!"
A coffee is $5 for jp?\!
$ echo "A coffee is \$5 for $USER?! "
A coffee is $5 for jp?!
```

Also, you can't embed a single quote inside single quotes, even if using a
backslash, since **nothing** (not even the backslash) is interpolated inside
single quotes.

```bash
# WRONG
$ echo "$USER won't pay $5 for coffee."
jp won't pay for coffee.
# Works
$ echo "$USER won't pay \$5 for coffee."
jp won't pay $5 for coffee.
# Also works
$ echo 'I won'\''t pay $5 for coffee.'
I won't pay $5 for coffee.
```

## Show usage reminder for built-in commands

One problem with built-in commands is that you generally can't use a `-h` or
`--help` option to get usage reminders, and if a manpage exists it's often just
a pointer to the large bash manpage. That's where the help command, which is
itself a built-in, comes in handy. `help` displays help about shell built-ins.

```bash
$ help cd
```

When you need to redefine a built-in you use the `builtin` command to avoid
loops.

```bash
cd() {
    builtin cd "$@"
    echo "$OLDPWD --> $PWD"
}
```

## Assign file content to a variable

```bash
var=$(< file.txt)
```

It works better/faster than the external `cat` command.

## Skipping a header in a file

```bash
$ $ tail -n +2 file
```
`tail+1 file` gives you the entire file, the same as `cat`. `+2` skips the
first line, and so on.

## Using output as input

```bash
$ cat foo.txt
b
a
d
c
$ sort < foo.txt
a
b
c
d
$ tr 'a-z' 'A-Z' < foo.txt
B
A
D
C
```

You could redirect the output from the first program into a temporary file,
then use that file as input to the second program.

```bash
$ cat one.file another.file > /tmp/cat.out
$ sort < /tmp/cat.out
...
$ rm /tmp/cat.out
```

Or you could do all of that in one step by sending the output directly to the
next program by using the pipe symbol `|` to connect them.

```bash
$ cat one.file another.file | sort
```

By using the pipe symbol we don't have to invent a temporary filename, remember
it, and remember to delete it.

Programs like sort can take input from standard in (redirected via the `<`
symbol) but they can also take input as a filename.

```bash
$ sort /tmp/cat.out
```

Rather than redirecting the input into sort:

```bash
$ sort < /tmp/cat.out
```

## Debug a string of pipes

```bash
$ ... uniq | tee /tmp/x.x | awk -f transform.awk ...
```

The `tee` command writes the output to the filename specified as its parameter
and also write that same output to standard out. In our example, that sends a
copy to _/tmp/x.x_ and also sends the same data to `awk`, the command to which
the output of `tee` is connected via the `|` pipe symbol.

## Save stdout to a file while also printing on the screen

```bash
$ find / -name '*.c' -print | tee /tmp/all.my.sources
```

Notice that in this example we did not redirect standard error at all. This
means that any errors, like you might expect from `find`, will be printed to
the screen but won't show up in the `tee` file. We could have added a `2>&1` to
the `find` command:

```bash
$ find / -name '*.c' -print 2>&1 | tee /tmp/all.my.sources
```

to include the error output in the `tee` file. It won't be neatly separated,
but it will be captured.

## Connecting two programs by using output as arguments

```bash
$ rm $(find . -name '*.class')
```

The `$()` encloses a command that is run in a subshell. The output from that
command is substituted in place of the `$()` phrase. Newlines in the output are
replaced with a space character (actually it uses the first character of
`$IFS`, which is a space by default, during word splitting), so several lines
of output become several parameters on the command line.

In our example, the output from `find`, typically a list of names, will become
the arguments to the `rm` command.

## Prevent interpolation in a here-document

```bash
grep $1 <<'EOF'  # or <<\EOF
pete $100
joe $200
sam $ 25
bill $ 9
EOF
```

> Trailing whitespace (even just a single blank space) on your closing `EOF`
marker will cause it not to be recognized as the closing marker. Bash will
swallow up the rest of your script, treating it as input too, and looking for
that `EOF`. Be sure there are no extra characters (especially blanks or tabs)
after the `EOF`.

## Extended pattern matching

```bash
shopt -s extglob

if [[ "$FN" == *.@(jpg|jpeg) ]]; then
    do_sonething
fi
```

Grouping | Meaning
--- | ---
`@(...)` | Only one occurrence
`*(...)` | Zero or more occurrences
`+(...)` | One or more occurrences
`?(...)` | Zero or one occurrences
`!(...)` | Not these occurrences, but anything else

## Loop n times with `seq`

```bash
for i in $(seq 10); do
    echo "Number $i"
done
```

Or by using shell's built-in arithmetic:

```bash
for (( f = 1; f <= END; f++)); do
    printf '%s ' "Number $f"
done
```

Or even better and faster:

```bash
n=10
seq -f 'Number %g' $n
# seq per default starts at 1
```

More `seq` features:

`$ seq 0.0 0.1 1.0` returns `0.0 0.1 ... 1.0`

`$ seq 1 2 10` returns `1 2 4 ... 10`

`$ seq -w 10` returns `01 02 ... 10`

## Case statement

```bash
case $FN in
    *.gif) gif2png $FN ;;
    *.png) pngOK $FN ;;
    *.jpg) jpg2gif $FN ;;
    *.tif|*.TIFF) tif2jpg $FN ;;
    *) printf "File not supported: %s" $FN ;;
esac
```

Is equivalent to:

```bash
if [[ $FN == *.gif ]]; then
    gif2png $FN
elif [[ $FN == *.png ]]; then
    pngOK $FN
elif [[ $FN == *.jpg ]]; then
    jpg2gif $FN
elif [[ $FN == *.tif || $FN == *.TIFF ]]; then
    tif2jpg $FN
else
    printf "File not supported: %s" $FN
fi
```

## Get command/program name

Strip off any leading path part:

```bash
PROG="$(basename $0)"
```

Or use parameter expansion:

```bash
PROG="${0##*/}"
```

So when running `./prog` or `path/to/prog`, you'll always get `prog`.

## Select menu

```bash
PS3='Choose a file: '

select F in *; do
    echo "You chose $REPLY, processing '$F'"
    break
done
```

## Grep repition mechanism

Search for **exactly three** 'a' letters:

```bash
$ grep 'a\{3\}' file
```

Search for **three or more** 'a' letters:

```bash
$ grep 'a\{3,\}' file
```

Search for **three to five** 'a' letters:

```bash
$ grep 'a\{3,5\}' file
```
