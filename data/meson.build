i18n.merge_file(
	input: configure_file(
		input: 'metainfo.xml',
		output: domain + '.metainfo.xml.in',
		configuration: {
		  'domain': domain,
			'bindir': bindir
		}
	),
	output: domain + '.metainfo.xml',
	type: 'xml',
	po_dir: meson.project_source_root() / 'po',
	install: true,
	install_dir: pkgdatadir / 'metainfo'
)

# Install the settings schema
install_data(
	domain + '.gschema.xml',
	install_dir: get_option('datadir') / 'glib-2.0' / 'schemas'
)


dbusservicedir = join_paths(pkgdatadir, 'dbus-1', 'services')
configure_file(
  configuration : {
     'name': name,
     'prefix': prefix,
     'bindir': bindir
  },
  input : 'service.in',
  output : domain + '.service',
  install : true,
  install_dir : dbusservicedir
)