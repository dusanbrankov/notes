# Bash Manual

## What is Bash?

Bash is the shell, or command language interpreter, for the GNU operating system. Bash is an acronym for ‘Bourne-Again SHell’. The Bourne shell is the traditional Unix shell originally written by Stephen Bourne. All of the Bourne shell builtin commands are available in Bash.

While the GNU operating system provides other shells, including a version of csh, Bash is the default shell. Like other GNU software, Bash is quite portable. It currently runs on nearly every version of Unix and a few other operating systems - independently-supported ports exist for MS-DOS, OS/2, and Windows platforms.

## What is a shell?

A Unix shell is both a command interpreter and a programming language. As a command interpreter, the shell provides the user interface to the rich set of GNU utilities. The programming language features allow these utilities to be combined. Files containing commands can be created, and become commands themselves. These new commands have the same status as system commands in directories such as /bin, allowing users or groups to establish custom environments to automate their common tasks.

Shells also provide a small set of built-in commands (builtins) implementing functionality impossible or inconvenient to obtain via separate utilities. For example, `cd`, `break`, `continue`, and `exec` cannot be implemented outside of the shell because they directly manipulate the shell itself.

While executing commands is essential, most of the power (and complexity) of shells is due to their embedded programming languages. Like any high-level language, the shell provides variables, flow control constructs, quoting, and functions.

## Definitions

Source: <https://www.gnu.org/software/bash/manual/html_node/Definitions.html>

**POSIX**

A family of open system standards based on Unix. Bash is primarily concerned with the Shell and Utilities portion of the POSIX 1003.1 standard.

**builtin**

A command that is implemented internally by the shell itself, rather than by an executable program somewhere in the file system.

**control operator**

A **token** that performs a control function. It is a newline or one of the following: ‘||’, ‘&&’, ‘&’, ‘;’, ‘;;’, ‘;&’, ‘;;&’, ‘|’, ‘|&’, ‘(’, or ‘)’.

**exit status**

The value returned by a command to its caller. The value is restricted to eight bits, so the maximum value is 255. Also referred to as `return status`.

**job**

A set of processes comprising a pipeline, and any processes descended from it, that are all in the same process group.

**job control**

A mechanism by which users can selectively stop (suspend) and restart (resume) execution of processes.

**metacharacter**

A character that, when unquoted, separates words. A metacharacter is a `space`, `tab`, `newline`, or one of the following characters: ‘|’, ‘&’, ‘;’, ‘(’, ‘)’, ‘<’, or ‘>’.

**name**

A word consisting solely of letters, numbers, and underscores, and beginning with a letter or underscore. Names are used as shell variable and function names. Also referred to as an `identifier`.

**operator**

A control operator or a redirection operator. See [Redirections](https://www.gnu.org/software/bash/manual/html_node/Redirections.html), for a list of redirection operators. Operators contain at least one unquoted `metacharacter`.

**reserved word**

A word that has a special meaning to the shell. Most reserved words introduce shell flow control constructs, such as `for` and `while`.

**signal**

A mechanism by which a process may be notified by the kernel of an event occurring in the system.

**special builtin**

A shell builtin command that has been classified as special by the POSIX standard.

**token**

A sequence of characters considered a single unit by the shell. It is either a `word` or an `operator`.

**word**

A sequence of characters treated as a unit by the shell. Words may not include unquoted `metacharacters`.

## Quoting

Quoting is used to remove the special meaning of certain characters or words to the shell. Quoting can be used to disable special treatment for special characters, to prevent reserved words from being recognized as such, and to prevent parameter expansion.

Each of the shell metacharacters (see [Definitions](https://www.gnu.org/software/bash/manual/html_node/Definitions.html)) has special meaning to the shell and must be quoted if it is to represent itself.

### Escape Character

A non-quoted backslash ‘\’ is the Bash escape character. It preserves the literal value of the next character that follows, with the exception of newline. If a \newline pair appears, and the backslash itself is not quoted, the \newline is treated as a line continuation (that is, it is removed from the input stream and effectively ignored).

## Abstract

Check if _command_ is a shell builtin:

```bash
$ type <command>
```

List all environment variables:

```bash
$ printenv
```

## Bash Conditional Expressions

Source: <https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html>

Conditional expressions are used by the `[[` compound command (see [Conditional Constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html)) and the `test` and `[` builtin commands (see [Bourne Shell Builtins](https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html)).

When used with `[[`, the `<` and `>` operators sort lexicographically using the current locale. The `test` command uses ASCII ordering.

Unless otherwise specified, primaries that operate on files follow symbolic links and operate on the target of the link, rather than the link itself.

### `-e file`

True if _file_ exists.

### `-d file`

True if _file_ exists and is a directory.

### `-f file`

True if _file_ exists and is a regular file.

### `-r file`

True if _file_ exists and is readable.

### `-w file`

True if _file_ exists and is writable.

### `-x file`

True if _file_ exists and is executable.

### `-s file`

True if _file_ exists and has a size greater than zero.

### `-N file`

True if _file_ exists and has been modified since it was last read.

### `-z string`

True if the length of _string_ is zero.

### `-n string` or `string`

True if the length of _string_ is non-zero.

### `string1 = string2` or `string1 == string2`

True if the strings are equal. When used with the `[[` command, this performs pattern matching (see [Conditional Constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html)).

`=` should be used with the `test` command for POSIX conformance.

### `string1 != string2`

True if the strings are not equal.

### `arg1 OP arg2`

`OP` is one of `-eq`, `-ne`, `-lt`, `-le`, `-gt`, or `-ge`. These arithmetic binary operators return true if _arg1_ is equal to, not equal to, less than, less than or equal to, greater than, or greater than or equal to _arg2_, respectively. _Arg1_ and _arg2_ may be positive or negative integers. When used with the `[[` command, _Arg1_ and _Arg2_ are evaluated as arithmetic expressions (see [Shell Arithmetic](https://www.gnu.org/software/bash/manual/html_node/Shell-Arithmetic.html)).

## [Shell Arithmetic](https://www.gnu.org/software/bash/manual/html_node/Shell-Arithmetic.html)

The shell allows arithmetic expressions to be evaluated, as one of the shell expansions or by using the `((` compound command, the `let` builtin, or the `-i` option to the `declare` builtin.

### `id++` `id--`

variable post-increment and post-decrement

### `* / %`

multiplication, division, remainder

### `+ -`

addition, subtraction

### `<= >= < >`

comparison

### `== !=`

equality and inequality

### `&&`

logical AND

### `||`

logical OR

### `expr ? expr : expr`

conditional operator

---

Shell variables are allowed as operands; parameter expansion is performed before the expression is evaluated. Within an expression, shell variables may also be referenced by name without using the parameter expansion syntax.

```bash
foo=42
echo $(( foo + 8 ))
# Output: 50
```

A shell variable that is null or unset evaluates to 0 when referenced by name without using the parameter expansion syntax. The value of a variable is evaluated as an arithmetic expression when it is referenced, or when a variable which has been given the integer attribute using `declare -i` is assigned a value. A null value evaluates to 0. A shell variable need not have its integer attribute turned on to be used in an expression.

```bash
echo $(( unset_var + 10 ))
# Output: 10
```

## [Arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html)

Bash provides one-dimensional indexed and associative array variables. Any variable may be used as an indexed array; the `declare` builtin will explicitly declare an array.

An indexed array is created automatically if any variable is assigned to using the syntax

`name[subscript]=value`

The _subscript_ is treated as an arithmetic expression that must evaluate to a number.

Any element of an array may be referenced using `${name[subscript]}`. The braces are required to avoid conflicts with the shell’s filename expansion operators. If the subscript is `@` or `*`, the word expands to all members of the array name. These subscripts differ only when the word appears within double quotes. If the word is double-quoted, `${name[*]}` expands to a single word with the value of each array member separated by the first character of the `IFS` variable, and `${name[@]}` expands each element of name to a separate word.

The `declare`, `local`, and `readonly` builtins each accept a `-a` option to specify an indexed array and a `-A` option to specify an associative array. The `read` builtin accepts a `-a` option to assign a list of words read from the standard input to an array, and can read values from the standard input into individual array elements.

**Explicitly declare an array:**

`declare -a name`

**Arrays are assigned to using compound assignments of the form**

`name=(value1 value2 … )`

**Append to an array variable:**

```bash
foo=('value 1' 'value 2' 'value 3')
foo+=('value 4')

echo "${foo[@]}"
# Output: value 1 value 2 value 3 value 4
```

**Get the length of an array:**

```bash
echo ${#foo[@]}
# Output: 4
```

**Delete array elements**

```bash
unset foo[1]

echo "${foo[@]}"
# Output: value 1 value 3 value 4
```

## [The Directory Stack](https://www.gnu.org/software/bash/manual/html_node/The-Directory-Stack.html)

The directory stack is a list of recently-visited directories. The `pushd` builtin adds directories to the stack as it changes the current directory, and the `popd` builtin removes specified directories from the stack and changes the current directory to the directory removed. The `dirs` builtin displays the contents of the directory stack. The current directory is always the "top" of the directory stack.

The contents of the directory stack are also visible as the value of the `DIRSTACK` shell variable.

## Creating temporary files

Create a temporary file in `/tmp` using the `mktemp` command; `/tmp` is world writable, so everyone can write and delete files to it.

`mktemp -t tmp.XXXXX`
