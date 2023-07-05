# Bash Style Guide

When to use Bash:

- If you’re mostly calling other utilities and are doing relatively little data manipulation, shell is an acceptable choice for the task.
- If performance matters, use something other than shell.
- If you are writing a script that is more than 100 lines long, or that uses non-straightforward control flow logic, you should rewrite it in a more structured language now. Bear in mind that scripts grow. Rewrite your script early to avoid a more time-consuming rewrite at a later date.
- When assessing the complexity of your code (e.g. to decide whether to switch languages) consider whether the code is easily maintainable by people other than its author.

## File Extensions

Executables should have no extension (strongly preferred) or a .sh extension. Libraries must have a .sh extension and should not be executable.

## STDOUT vs STDERR

All error messages should go to STDERR.

This makes it easier to separate normal status from actual issues.

A function to print out error messages along with other status information is recommended.

```bash
err() {
    echo "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $*" >&2
}

if ! do_something; then
    err "Unable to do_something"
    exit 1
fi
```

## File Header

Start each file with a description of its contents.

Every file must have a top-level comment including a brief overview of its contents. A copyright notice and author information are optional.

Example:

```bash
#!/bin/bash
#
# Perform hot backups of Oracle databases.
```

