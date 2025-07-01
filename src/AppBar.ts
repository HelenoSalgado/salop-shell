import app from "ags/gtk4/app"
import globalCss from "./styles/global.css"
import Bar from "./widget/Bar"
import Applauncher from "./widget/Applauncher"

app.start({
  css: globalCss,
  instanceName: "SalopBar",
  gtkTheme: "Adwaita",
  main() {
    app.get_monitors().map(Bar)
  },
})
