import { createBinding } from "ags";
import Hyprland from "gi://AstalHyprland?version=0.1";

export default function FocusedClient() {
  const hypr = Hyprland.get_default();
  const focused = createBinding(hypr, "focusedClient");
  const title = focused.as((client) => {
    return client.title;
  });
  
  return <box
    visible
    cssClasses={["focused"]}
  >
    <label label={title}/>
  </box>
}