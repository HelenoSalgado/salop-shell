import GLib from 'gi://GLib';
import 'gi://Gdk?version=4.0';
import 'gi://Gtk?version=4.0';
import { App } from '../src/App';
import { exit } from 'system';

// Initialize the package
imports.package.init({
  name: '@name@',
	version: '@version@',
	prefix: '@prefix@',
	libdir: '@libdir@',
});

// Initialize the translations
imports.package.initGettext();

// Import the main module and run the main function
const loop = new GLib.MainLoop(null, false);
GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
	loop.quit();
	imports.package.run({
	   main: exit(new App().run([]))
	});
	return GLib.SOURCE_REMOVE;
});
loop.run();