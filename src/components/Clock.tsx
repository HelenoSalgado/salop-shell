import { createPoll } from "ags/time"
import GLib from "gi://GLib?version=2.0"
import Gtk from "gi://Gtk?version=4.0"

export default function Clock({ format = "%H:%M" }) {
  const time = createPoll("", 1000, () => {
    return GLib.DateTime.new_now_local().format(format)!
  })

  return (
    <menubutton class="clock">
      <label label={time} />
      <popover>
        <Gtk.Calendar />
      </popover>
    </menubutton>
  )
}