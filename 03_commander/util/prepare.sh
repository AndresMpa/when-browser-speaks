#!/bin/bash

source ./reducer.sh

TARGET="../words"
LANGUAGES=("es" "en")

for LANG in "${LANGUAGES[@]}"; do
  FILE_PATH=$TARGET/$LANG.txt
  aspell -d $LANG dump master | aspell -l $LANG expand >$FILE_PATH #>>/dev/null

  if [[ $(wc -m $FILE_PATH | cut -f1 -d " ") -lt 5200000 ]]; then
    reduceFileSize $FILE_PATH && notify-send "$LANG.txt reduced success fully" "To see changes check $TARGET/$LANG.txt file"
  fi
done
