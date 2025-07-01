import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { createBinding } from "ags"
import AudioOutput from "../components/AudioOutput"
import Clock from "../components/Clock"
import Wireless from "../components/Wireless"
import FocusedClient from "../components/FocusClient"
import WorksPaces from "../components/WorksPaces"
import Shutdown from "../components/Shutdown"
import OsLogo from "../components/OsLogo"
import BrightnessSlider from "../components/Brightness"
import Mpris from "../components/Mpris"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;

    return (
      <window
        visible
        name="bar"
        class="Bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={TOP | LEFT | RIGHT}
        application={app}
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
            <Wireless />
            <Clock />
            <Shutdown />
          </box>
        </centerbox>
      </window>
    )
}