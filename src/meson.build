js = custom_target(
  'esbuild-bundle',
  input: 'main.ts',
  output: 'main.js',
  command: [
    esbuild,
    '--bundle', '@INPUT@',
    '--outfile=@OUTPUT@',
    '--external:gi://*',
    '--external:resource://*',
    '--external:system',
    '--node-paths=../salopbar/node_modules',
    '--format=esm',
    '--platform=node',
    '--sourcemap=inline',
    '--target=firefox116',
    '--legal-comments=none',
    '--define:import.meta.domain="' + domain + '"',
    '--define:import.meta.name="' + name + '"',
    '--define:import.meta.version="' + meson.project_version() + '"',
    '--define:import.meta.pkgdatadir="' + pkgdatadir + '"',
    '--define:import.meta.prefix="' + prefix + '"',
    '--define:import.meta.libdir="' + get_option('datadir') + '"',
  ],
  install: true,
  install_dir: pkgdatadir,
)

css = configure_file(
  copy: true,
  output: 'style.css',
  input: './assets/style.css',
  install: true,
  install_dir: pkgdatadir,
)

resource_path = '/' + domain.replace('.', '/')

gresource_xml = configure_file(
  input: files('gresource.xml'),
  output: 'gresource.xml',
  configuration: {'resource_path': resource_path},
)

gnome.compile_resources(
  'data',
  gresource_xml,
  dependencies: [js, css],
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

configure_file(
  input: 'main.sh',
  output: name,
  configuration: {
    'LAYER_SHELL_PREFIX': layer_shell.get_variable('prefix'),
    'GJS': gjs.full_path(),
    'INDEX': pkgdatadir / 'main.js',
  },
  install: true,
  install_dir: bindir,
  install_mode: 'rwxr-xr-x',
)
