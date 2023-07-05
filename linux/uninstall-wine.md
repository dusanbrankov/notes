make a backup

## list all installed packages with the word 'wine' in it
`apt list --installed "*wine*"`

## list files installed to your system from package-name
`dpkg-query --listfiles package-name`

`mkdir wine-files`

## redirect stdout to file
`dpkg-query --listfiles <package-name> > wine-files/"${_}"-files.txt`


purge
Note that this does not affect any data or configuration stored in your home directory.

`sudo apt purge "*wine*"`

The following packages will be REMOVED:
  fonts-wine* libwine* wine-desktop-files* wine-stable* wine-stable-amd64*


`find . -iname '*wine*'`

./.local/share/mime/packages/x-wine-extension-idml.xml

Don't forget that the find command line is evaluated as an ex‐
              pression, so putting -delete first will make find try  to  delete  every‐
              thing  below the starting points you specified.  When testing a find com‐
              mand line that you later intend to use with -delete, you  should  explic‐
              itly  specify  -depth in order to avoid later surprises. 
              
              
              find ~/.local/share/mime/packages/ -depth -iname '*wine*' -delete
              

while IFS= read -r i; do [[ -e "${i}" ]] && echo "${i} still exists"; done < libwine-files.txt 
/usr/lib/x86_64-linux-gnu still exists
/usr/share still exists
/usr/share/bug still exists
/usr/share/doc still exists
/usr/share/lintian still exists
/usr/share/lintian/overrides still exists

