gnome.compile_resources(
  name,
  'data.gresource.xml',
  source_dir: '.',
  gresource_bundle: true,
  install: true,
  install_dir : pkgdatadir
)

configure_file(
  input: 'gschema.xml',
  output: app_id + '.gschema.xml',
  configuration: {'resource': resource, 'domain': app_id},
  install: true,
  install_dir: datadir / 'glib-2.0' / 'schemas',
)

i18n.merge_file(
	input: configure_file(
		input: 'metainfo.xml',
		output: app_id + '.metainfo.xml.in',
		configuration: app_configuration
	),
	output: app_id + '.metainfo.xml',
	type: 'xml',
	po_dir: meson.project_source_root() / 'po',
	install: true,
	install_dir: datadir / 'metainfo'
)


dbusservicedir = join_paths(datadir, 'dbus-1', 'services')
configure_file(
  configuration : app_configuration,
  input : 'service.in',
  output : app_id + '.service',
  install : true,
  install_dir : dbusservicedir
)