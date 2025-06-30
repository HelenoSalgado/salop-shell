import app from "ags/gtk4/app"
import style from "./styles/global.css"
import Bar from "./widget/Bar"
import NotificationPopups from "./widget/NotificationPopups"
import Applauncher from "./widget/Applauncher"
import Tray from "./widget/Tray"

app.start({
  css: style,
  gtkTheme: "Adwaita",
  main() {
    app.get_monitors().map(Tray)
    //NotificationPopups()
  },
})
