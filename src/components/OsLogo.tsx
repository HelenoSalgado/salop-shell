import GLib from "gi://GLib?version=2.0";

export default function OsLogo(){
  return <image class="logo-system" tooltipText="Logo" iconName={GLib.get_os_info("LOGO")?.toString()}/>
}