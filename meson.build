project('salopbar', 'c',
  version: '0.0.0',
  meson_version: '>= 1.9.0'
)

#dependency('gtk4', version: '>=1:4')

app_id = 'dev.heleno.salopbar'
name = meson.project_name()
resource = 'dev/heleno/salopbar'
prefix = get_option('prefix')
datadir = prefix / get_option('datadir')
libdir = prefix / get_option('libdir')
bindir = prefix / get_option('bindir')
pkgdatadir = datadir / name
version = meson.project_version()

gnome = import('gnome')
i18n = import('i18n')
gjs = find_program('gjs')
GETTEXT_PACKAGE = app_id

app_configuration = configuration_data()

app_configuration.set('GJS', gjs.full_path())
app_configuration.set('app_id', app_id)
app_configuration.set('name', name)
app_configuration.set('version', version)
app_configuration.set('prefix', prefix)
app_configuration.set('libdir', prefix / libdir)
app_configuration.set('pkgdatadir', pkgdatadir)
app_configuration.set('bindir', bindir)

subdir('data')
subdir('src')

test(
  'validate-gschema',
  find_program('glib-compile-schemas'),
  args: [
    '--strict',
    '--dry-run', meson.current_source_dir(),
  ],
)

import('gnome').post_install(
  # gtk_update_icon_cache: true,
  glib_compile_schemas: true,
  update_desktop_database: true,
)