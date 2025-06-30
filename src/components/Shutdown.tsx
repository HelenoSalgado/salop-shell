import { Gtk } from "ags/gtk4";
import { exec } from "ags/process";

export default function Shutdown() {
  return (
    <menubutton class="shutdown" tooltipText="Desligar">
      <image iconName="system-shutdown-symbolic"/>
      <popover>
        <box class="menu-shutdown">
          <box orientation={Gtk.Orientation.VERTICAL} $type="start" hexpand>
            <button
              onClicked={() => exec(`systemctl suspend`)}>
              <image iconName="system-log-out-symbolic"/>
            </button>
            <label label="Suspender"/>
          </box>
          <box orientation={Gtk.Orientation.VERTICAL} $type="center" hexpand>
            <button 
              onClicked={() => exec(`systemctl reboot`)}>
                <image iconName="system-reboot-symbolic"/>
            </button>
            <label label="Reiniciar"/>
          </box>
          <box orientation={Gtk.Orientation.VERTICAL} $type="end" hexpand>
            <button 
              onClicked={() => exec(`shutdown`)}>
                <image iconName="system-shutdown-symbolic"/>
            </button>
            <label label="Desligar"/>
          </box>
        </box>
      </popover>
    </menubutton>
  )
}