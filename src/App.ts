import { Gtk, Gdk } from "ags/gtk4"
import { createRoot } from "ags"
import Gio from "gi://Gio?version=2.0"
import { register } from "ags/gobject"
import Bar from "./widget/Bar"
import styleSheet from "./assets/style.css"

@register()
export class App extends Gtk.Application {
  declare private window: Gtk.Window
  declare private display: Gdk.Display
  declare private monitors
  
  constructor() {
      super({
        applicationId: 'dev.heleno.salopbar',
        flags: Gio.ApplicationFlags.FLAGS_NONE
      })
  }
  

vfunc_startup(): void {
  super.vfunc_startup()
  this.display = Gdk.Display.get_default() as Gdk.Display
  this.monitors = this.display.get_monitors()
  
    createRoot((dispose) => {
      this.connect("shutdown", dispose)
      
      for (let i = 0; i < this.monitors.get_n_items(); i++) {
        const monitor = this.monitors.get_item(i);
        Bar({app: this, gdkmonitor: monitor});
      }
      
    })
  }
  
  private loadStyle(){
    const cssProvider = new Gtk.CssProvider()
    cssProvider.load_from_string(styleSheet)
    Gtk.StyleContext.add_provider_for_display(
      this.display, cssProvider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
    )
  }
  
  vfunc_activate(): void {
    this.loadStyle()
  }

}