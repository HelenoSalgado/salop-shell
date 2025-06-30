import { bind, Variable } from "astal";
import { App, Astal, Gdk, Gtk } from "astal/gtk4";
import Trayy from "gi://AstalTray?version=0.1";

const { BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;
const tray = Trayy.get_default();
const items: Variable<Trayy.TrayItem[]> = Variable(tray.get_items());

for(const item of items.get()){
  print(item.title)
}

export default function Tray(gdkmonitor: Gdk.Monitor) {
  
  return <window
    name="Tray"
    visible
    cssClasses={["tray"]}
    gdkmonitor={gdkmonitor}
    //exclusivity= Astal.Exclusivity.EXCLUSIVE
    anchor={BOTTOM}
    halign={Gtk.Align.CENTER}
    marginBottom={2}
    heightRequest={40}
    application={App}
    >
    <box 
      cssClasses={["tray-apps"]}
    >
      
    </box>
  </window>
}