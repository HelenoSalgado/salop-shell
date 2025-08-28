import { createBinding } from "ags";
import Hyprland from "gi://AstalHyprland?version=0.1";

function getClients(){
  const hypr = Hyprland.get_default();
  
  return createBinding(hypr, "workspaces").as((wss) =>
      wss.filter((ws) => !(ws.id >= -99 && ws.id <= -2)).sort((a, b) => a.id - b.id).map((ws) => {
        return <button
            class={createBinding(hypr, "focusedWorkspace").as((fw) => ws === fw ? "focused" : "")}
            onClicked={() => ws.focus()}
            >
              <label label={ws.id.toString()}/>
          </button>
        }
        )
  )
}

export default function WorksPaces() {
  
  return <box
    class="workspaces"
  >
    {
      getClients().get()
    }
  </box>
}