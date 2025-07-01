import app from "ags/gtk4/app"
import appLauncherCss from "./styles/app-launcher.css"
import globalCss from "./styles/global.css"
import Applauncher from "./widget/Applauncher"

app.start({
  css: globalCss + appLauncherCss,
  instanceName: "SalopLauncher",
  gtkTheme: "Adwaita",
  main() {
    app.get_monitors().map(Applauncher)
  },
})