#!/bin/bash

reduceFileSize() {
  TARGET=$1

  mapfile -t <$TARGET

  mv $TARGET ${TARGET%.*}-pre-reducer.${TARGET##*.}

  for LINE in "${MAPFILE[@]}"; do
    echo $LINE | cut -f1 -d " " >>$TARGET
  done
}
