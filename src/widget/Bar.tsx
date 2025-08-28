import { Astal, Gtk, Gdk } from "ags/gtk4"
import AudioOutput from "../components/AudioOutput"
import Clock from "../components/Clock"
import FocusedClient from "../components/FocusClient"
import WorksPaces from "../components/WorksPaces"
import Shutdown from "../components/Shutdown"
import OsLogo from "../components/OsLogo"
import BrightnessSlider from "../components/Brightness"
import Mpris from "../components/Mpris"
import { onCleanup } from "ags"

interface BarProps {
  app: Gtk.Application,
  gdkmonitor: Gdk.Monitor
}

export default function Bar({app, gdkmonitor}: BarProps) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;

    return (
      <window
        $={(self: Gtk.Window) => onCleanup(() => self.destroy())}
        application={app}
        visible
        name="Bar"
        class="Bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={TOP | LEFT | RIGHT}
      >
        <centerbox>
          <box $type="start">
            <OsLogo />
            <WorksPaces />
          </box>
          <FocusedClient $type="center"/>
          <box $type="end" class="buttons-tools">
            <Mpris />
            <BrightnessSlider/>
            <AudioOutput />
            
            <Clock />
            <Shutdown />
          </box>
        </centerbox>
      </window>
    )
}