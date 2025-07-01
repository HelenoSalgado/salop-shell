import { createPoll } from "ags/time"
import GLib from "gi://GLib?version=2.0"
import Gtk from "gi://Gtk?version=4.0"

export default function Clock({ format = "%H:%M" }) {
  const time = createPoll("", 1000, () => {
    return GLib.DateTime.new_now_local().format(format)!
  })

  return (
    <menubutton class="clock">
      <box>
        <image iconName="preferences-system-time-symbolic"/>
        <label label={time} />
      </box>
      <popover>
        <Gtk.Calendar />
      </popover>
    </menubutton>
  )
}