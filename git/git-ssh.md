# Git SSH

## 👉️ GitHub auth login

```sh
ssh-keygen -t ed25519 -C "du.bran@protonmail.com"
eval "$(ssh-agent -s)"
ls -al ~/.ssh
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub
ssh -T git@github.com
```

## 👉️ Change ssh passphrase

```sh
ssh-keygen -p -f ~/.ssh/id_ed25519
```
