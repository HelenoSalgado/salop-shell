import { createBinding } from "ags";
import { Gtk } from "ags/gtk4";
import Hyprland from "gi://AstalHyprland?version=0.1";

export default function FocusedClient() {
  const hypr = Hyprland.get_default();
  const focused = createBinding(hypr, "focusedClient");
  let title = focused.as((client) => {
    return client.title;
  });
  
  return <box
    visible
    cssClasses={["focused"]}
  >
    <label label={title}/>
  </box>
}