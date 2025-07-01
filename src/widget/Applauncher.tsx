import { For, createState } from "ags"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { exec, execAsync } from "ags/process"
import AstalApps from "gi://AstalApps"
import Graphene from "gi://Graphene"

const { TOP, BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor

export default function Applauncher(gdkmonitor: Gdk.Monitor) {
  let contentbox: Gtk.Box
  let searchentry: Gtk.Entry
  let win: Astal.Window

  const apps = new AstalApps.Apps()
  const [list, setList] = createState(new Array<AstalApps.Application>())
  setList(apps.fuzzy_query("").slice(0, 8))

  function search(text: string) {
    setList(apps.fuzzy_query(text).slice(0, 8))
  }

  function launch(app?: AstalApps.Application) {
    if (app) {
      win.hide()
      app.launch()
    }
  }

  // close on clickaway
  function onClick(_e: Gtk.GestureClick, _: number, x: number, y: number) {
    const [, rect] = contentbox.compute_bounds(win)
    const position = new Graphene.Point({ x, y })

    if (!rect.contains_point(position)) {
      win.visible = false
      return true
    }
  }
  
  return (
    <window
      visible
      $={(ref) => (win = ref)}
      name="launcher"
      class="Laucher"
      gdkmonitor={gdkmonitor}
      widthRequest={500}
      heightRequest={400}
      exclusivity={Astal.Exclusivity.IGNORE}
      keymode={Astal.Keymode.ON_DEMAND}
      onNotifyVisible={({ visible }) => {
        if (visible) searchentry.grab_focus()
        else searchentry.set_text("")
      }}
    >
      <Gtk.EventControllerKey onKeyPressed={({ widget }, keyval: number) => {
        if (keyval === Gdk.KEY_Escape) {
          widget.hide()
        }
      }}
      />
      <Gtk.GestureClick onPressed={onClick} />
      <box
        $={(ref) => (contentbox = ref)}
        name="launcher-content"
        class="launcher-content"
        orientation={Gtk.Orientation.VERTICAL}
      >
        <entry
          $={(ref) => (searchentry = ref)}
          onNotifyText={({ text }) => search(text)}
          placeholderText="Buscar"
          class="entry"
        />
        <Gtk.Separator visible={list((l) => l.length > 0)} />
        <box orientation={Gtk.Orientation.VERTICAL}>
          <For each={list}>
            {(app, index) => (
              <button onClicked={() => launch(app)}>
                <box>
                  <image iconName={app.iconName} iconSize={Gtk.IconSize.LARGE}/>
                  <label label={app.name} maxWidthChars={40} wrap />
                </box>
              </button>
            )}
          </For>
        </box>
      </box>
    </window>
  )
}