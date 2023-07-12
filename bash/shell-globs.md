# Shell globs

## Wildcards

```bash
*             # Matches any characters
?             # Matches any single character
```

## Ranges

```bash
[characters]  # Matches any character that is a member of the set characters
[!characters] # Matches any character that is not a member of the set characters
[[:class:]]   # Matches any character that is a member of the specified class
[:alnum:]     # Matches any alphanumeric character
[:alpha:]     # Matches any alphabetic character
[:digit:]     # Matches any numeral
[:space:]     # Matches any whitespace character
[:lower:]     # Matches any lowercase letter
[:upper:]     # Matches any uppercase letter
```

## Examples

```bash
*             # All files
g*            # Any file beginning with “g”
b*.txt        # Any file beginning with “b” followed by any characters and ending with “.txt”
*.[ch]        # Any string ending with '.c' or '.h'
Data???       # Any file beginning with “Data” followed by exactly three characters
[abc]*        # Any file beginning with either “a”, “b” or “c”
[a-c]*        # The same as above
[!aeiouAEIOU] # Matches any character except a, e, i, o, u and their uppercase counterparts
BACKUP.[0-9][0-9][0-9]  # Any file beginning with “BACKUP.” followed by exactly three numerals
[[:upper:]]*  # Any file beginning with an uppercase letter
[![:digit:]]* # Any file not beginning with a numeral
*[[:lower:]123]         # Any file ending with a lowercase letter or the numerals
```

Even if a file contains internal whitespace, the expansion of a glob that matches that file will still preserve each filename as a single word. For example:

```bash
# This is safe even if a filename contains whitespace:
for f in *.tar; do
    tar tvf "$f"
done
```

Globs are also used to match patterns in a few places in Bash. The most traditional is in the case command:

```bash
case "$input" in
    [Yy]|'') confirm=1;;
    [Nn]*) confirm=0;;
    *) echo "I don't understand.  Please try again.";;
esac
```

Bash also allows globs to appear on the right-hand side of a comparison inside a `[[` command:

```bash
if [[ $output = *[Ee]rror* ]]; then ...
```

## Extended pattern matching

In addition to the traditional globs (supported by all Bourne-family shells) that we've seen so far, Bash (and Korn Shell) offers _extended globs_, which have the expressive power of regular expressions. Korn shell enables these by default; in Bash, you must run the command

`shopt -s extglob`

```bash
shopt -s extglob

if [[ "$FN" == *.@(jpg|jpeg) ]]; then
    do_something
fi
```

Grouping | Meaning
--- | ---
`@(...)` | Only one occurrence
`*(...)` | Zero or more occurrences
`+(...)` | One or more occurrences
`?(...)` | Zero or one occurrences
`!(...)` | Not these occurrences, but anything else

Extended globs allow you to solve a number of problems which otherwise require
a rather surprising amount of ugly hacking. For example:

```bash
# To remove all the files except ones matching *.jpg:
rm !(*.jpg)
# All except *.jpg and *.gif and *.png:
rm !(*.jpg|*.gif|*.png)
# To copy all the MP3 songs except one to your device
cp !(04*).mp3 /mnt
```

Extended glob patterns can be nested, too.

```bash
[[ $fruit = @(ba*(na)|a+(p)le) ]] && echo "Nice fruit"
```

### Portability

"null globbing" is not specified by POSIX. In portable scripts, you must explicitly check that a glob match was successful by checking that the files actually exist.

```bash
# POSIX

for x in *; do
    [ -e "$x" ] || break
    ...
done

f() {
    [ -e "$1" ] || return 1

    for x do
        ...
    done
}

f * || echo "No files found"
```

---

More information about globs: <https://mywiki.wooledge.org/glob>

