#!/bin/bash

# Script toggle para usar com hyprland

# Dê privilégio de execução para o script, com: 

# sudo chmod +x .config/hypr/toggle-bar.sh

# Em .config/hypr/hyprland.conf:

# bind = $mainMod, Space, exec, toggle-bar.sh

APP_ID="dev.heleno.salopbar"
OBJ_PATH="/${APP_ID//./\/}"

if busctl --user list | grep -q "$APP_ID"; then
    gdbus call --session \
               --dest "$APP_ID" \
               --object-path "$OBJ_PATH" \
               --method "$APP_ID.App.Quit"
else
    salopbar &
fi