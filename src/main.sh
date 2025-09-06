#!/bin/bash

export LD_PRELOAD="@LAYER_SHELL_PREFIX@/lib/libgtk4-layer-shell.so"

exec -a salopbar "@GJS@" -m "@INDEX@" "$@"