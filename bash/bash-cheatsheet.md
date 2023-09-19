# Bash Cheatsheet

## exit if command starts with a dash '-'

```bash
if [[ "$input_loc" == \-* ]]; then
    echo "no dashes"
    exit
fi
```

## STRING MANIPULATION

### Convert var to lowercase

`${var,,}`

### Parameter expansion

only the first match is replaced

`${parameter/pattern/string}`

all matches of pattern are replaced with string

`${parameter//pattern/string}`

it must match at the beginning of the expanded value of parameter

`${parameter/#pattern/string}`

match at the end of the expanded value of parameter

`${parameter/%pattern/string}`

#### Examples

**remove starting './' from '$file'**

instead of: `file=$(echo "$file" | sed 's|^\./||g')`

`file="${file/#.\//}"`

**replace all spaces with backslash space '\ '**

instead of: `file=$(echo "$file" | sed 's! !\\ !g')`

`file="${file// /\\ }"`

**remove last two 'g' characters in var**

`var="Too longgg"`

`echo ${var%gg} # var becomes "Too long"`

**replace 'hello' width 'goodbye'**

`a="Hello World!"`

`$ echo Goodbye${a#Hello} # becomes 'Goodbye World!'`

#### Other examples (a bit more advanced)

`var=/tmp/my.dir/filename.tar.gz`

`foo=/tmp/my.dir/filename.tar.gz`

We can use these expressions:

`path = ${foo%/*}`

To get: /tmp/my.dir (like dirname)

`file = ${foo##*/}`

To get: filename.tar.gz (like basename)

`base = ${file%%.*}`

To get: filename

`ext = ${file#*.}`

To get: tar.gz

**remove everything till first '.'**

`${var#*.} # dir/filename.tar.gz`

**remove everything including the last '/' (like 'basename')**

`${var##*.} # filename.tar.gz`

**remove everything from last '/'**

`echo ${foo%/*} # /tmp/my.dir`
