import { createBinding, For } from "ags"
import { Astal, Gdk, Gtk } from "ags/gtk4";
import app from "ags/gtk4/app";
import AstalTray from "gi://AstalTray?version=0.1"

const tray = AstalTray.get_default()
const items = createBinding(tray, "items")

const init = (btn: Gtk.MenuButton, item: AstalTray.TrayItem) => {
  btn.menuModel = item.menuModel
  btn.insert_action_group("dbusmenu", item.actionGroup)
  item.connect("notify::action-group", () => {
    btn.insert_action_group("dbusmenu", item.actionGroup)
  })
}

export default function Tray(gdkmonitor: Gdk.Monitor) {
  const { BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;
  
  return (
  <window
    visible
    name="Tray"
    class="tray"
    gdkmonitor={gdkmonitor}
    //exclusivity= Astal.Exclusivity.EXCLUSIVE
    anchor={BOTTOM}
    halign={Gtk.Align.CENTER}
    marginBottom={2}
    heightRequest={40}
    application={app}
    >
    <box class="tray-apps" orientation={Gtk.Orientation.HORIZONTAL}>
      <For each={items}>
        {(item) => (
          <menubutton $={(self) => init(self, item)}>
            <image gicon={createBinding(item, "gicon")} />
          </menubutton>
        )}
      </For>
    </box>
  </window>
  )
}