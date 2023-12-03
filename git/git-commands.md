# Git commands

##  create git project

```sh
git init
git add .
git status
git commit -m "Initial commit"
```

##  git remote

```sh
git branch -M main
git remote add origin git@github.com:dusan-b/<project-name>.git
git push -u origin main
git push
```

##  change git remote origin (ssh)

```sh
git remote set-url <remote_name> <ssh_remote_url>
# example: git remote set-url origin git@github.com:dusanbrankov/dotfiles.git
```

##  switch to another exisitng branch or create a new one (same command)

```sh
git checkout <branch>
```

##  check if local branch is behind remote branch

```sh
git fetch
git status
```

##  update local branch with commits from remote branch

```sh
git pull --rebase && git push
```

`--rebase` rewrites history, so any local commits occur after all new commits
coming from the remote, avoiding a merge commit.

Or run `git fetch` first if you expect conflicts, then run `git merge`.

##  create new branch

**1. create new branch**

```sh
git branch <branch-name>
```

**2. use new branch**

```sh
git checkout <branch-name>
```

**(1.) shorter way of doing this**

```sh
git checkout -b <branch-name>
```

**3. merge new branch**

```sh
git checkout main
git branch --merged
git merge <branch-name>
```

**4. delete new branch**

```sh
git branch -d <branch-name>
git push origin --delete <branch-name>
```

##  change last commit message (this also changes the hash/id of the commit)

```sh
git commit --amend -m "commit msg"
```

Don't use when already pushed to remote branch.

##  add only modified and deleted files

```sh
git add -u # optional: <path/to/folder>
```

##  commit with no message

```sh
git commit --allow-empty-message -m ''
```

##  add file to last commit

```sh
git add the_left_out_file
git commit --amend --no-edit
# to apply changes to the remote repository, run:
git push --force
```

##  remove files/directories from .gitignore from repository

```sh
git rm -rf --cached <file>
git add .
git push
```

If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it. From your terminal, untrack the file.

```sh
git rm --cached FILENAME
```

## undo last commit

git reset --soft HEAD~1

##  undo pushed commits

```sh
git log # to get/choose ommit-hash
git reset --hard <commit-hash>
git push -f
```

##  move commit to another branch

```sh
git checkout <branch>
git cherry-pick <commit-hash>
```

##  remove untracked [f]iles/[d]irectories in working directory

```sh
git clean -fd
```

##  using git worktree to deploy github pages

```sh
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init"
git checkout main
rm -rf dist/ # only if it already exists
git worktree add dist gh-pages
# compile files to dist/ folder
cd dist/
git add --all
git commit -m "deploy updates"
git push origin gh-pages
git worktree remove dist/
```

## look at an old commit without modifying the current branch

go back one commit:

```
git checkout HEAD^
```

**go back n commits:**

```
git checkout HEAD~n
```

**or select commit by its hash:**

```
git checkout <hash>
```
