#!/bin/bash

TARGET="../words"
LANGUAGES=("es" "en")

for LANG in "${LANGUAGES[@]}"; do
  FILE_PATH=$TARGET/$LANG.txt
  echo $LANG
  aspell -d $LANG dump master | aspell -l $LANG expand >$FILE_PATH #>>/dev/null
done
