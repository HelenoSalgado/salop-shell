
import { exit, programArgs } from "system"
import Gio from "gi://Gio"
import GLib from "gi://GLib"
import { App } from "./App"

// Initialize the package
imports.package.init({
  name: import.meta.name,
	version: import.meta.version,
	prefix: import.meta.prefix,
	libdir: import.meta.libdir,
});

// makes sure `LD_PRELOAD` does not leak into subprocesses
GLib.setenv("LD_PRELOAD", "", true)
Gio.Resource.load(`${import.meta.pkgdatadir}/data.gresource`)._register()


// Import the main module and run the main function
const loop = new GLib.MainLoop(null, false);
GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
	loop.quit();
	imports.package.run({
	   main: exit(new App().run(programArgs))
	});
	return GLib.SOURCE_REMOVE;
});
loop.run();