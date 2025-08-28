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