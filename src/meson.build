gnome.compile_resources(
  name,
  'gresource.xml',
  source_dir: '.',
  gresource_bundle: true,
  install: true,
  install_dir : pkgdatadir
)

custom_target(
  'compile_main.ts',
  output : name,
  input : 'main.ts',
  command : [find_program('ags'), 'bundle', '-g', '4', '@INPUT@', '@OUTPUT@'],
  install: true,
  install_dir: bindir
)