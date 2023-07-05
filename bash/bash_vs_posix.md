# Bash vs. POSIX

In the late 1980s, the Unix community decided standardization was a good thing,
and the POSIX working groups (organized by the IEEE) were formed. POSIX
standardized the Unix libraries and utilities, including the shell. The
standard shell was primarily based on the 1988 version of the Korn Shell, with
some C shell features and a bit of invention to fill in the gaps. bash was begun as part of the GNU project's effort to produce a complete POSIX system,
which naturally needed a POSIX shell.

bash provided the programming features that shell programmers needed, plus the conveniences that command-line users liked. It was originally conceived as an
alternative to the Korn shell, but as the free software movement became more
important, and as Linux became more popular, bash quickly overshadowed ksh.

As a result, bash is the default user shell on every Linux distribution we know
about (there are a few hundred Linux distros, so there are probably a few with
some oddball default shell), as well as Mac OS X. It's also available for just
about every other Unix operating system, including BSD Unix and Solaris.

| Bash              | POSIX             |
| ----------------- | ----------------- |
| `source`          | `.`               |
| `.[^.]*`          | `.[!.]*`          |
| `[ "$a" == "$b"  ]` | `[ "$a" = "$b"  ]` |
