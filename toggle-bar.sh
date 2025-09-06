#!/bin/bash

# Application ID for salopbar
APP_ID="dev.heleno.salopbar"

# D-Bus object path, derived from the App ID by replacing dots with slashes
OBJ_PATH="/${APP_ID//./\/}"

# Check if the D-Bus service is registered
if busctl --user list | grep -q "$APP_ID"; then
    # If it is, politely ask the application to quit via its D-Bus interface.
    # This is the graceful shutdown method.
    gdbus call --session \
               --dest "$APP_ID" \
               --object-path "$OBJ_PATH" \
               --method "$APP_ID.App.Quit"
else
    # If it's not running, start the application in the background.
    salopbar &
fi
