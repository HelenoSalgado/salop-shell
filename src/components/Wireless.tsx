import { createBinding, For, With } from "ags";
import { exec } from "ags/process";
import AstalNetwork from "gi://AstalNetwork?version=0.1";
import Gtk from "gi://Gtk?version=4.0";

export default function Wireless() {
  const network = AstalNetwork.get_default();
  const wifi = createBinding(network, "wifi");

  return (
    <button
      class="wireless"
      visible={wifi.as(Boolean)}
      tooltipText={createBinding(network.wifi, "ssid").as(String)}
      onClicked={() => exec(`kitty -e nmtui`)}
    >
      <image iconName={createBinding(network.wifi, "iconName").as(String)} />
    </button>
  );
}
