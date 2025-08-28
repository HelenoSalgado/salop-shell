# Maintainer: Your Name <youremail@domain.com>
pkgname=salopbar
pkgver=0.0.0
pkgrel=1
pkgdesc="Uma barra de navegação simples para usar com Hyprland"
url="https://github.com/HelenoSalgado/salopbar"
arch=('x86_64')
license=('GPL-3.0-or-later')
makedepends=('git' 'meson' 'go')
depends=(
    'gjs'
    'gtk4-layer-shell'
    'gobject-introspection'
    'libastal-io'
    'libastal'
    'libastal-4'
    'npm'
)

build() {
   npm install
   arch-meson build
   ninja -C build
}

package() {
	ninja install -C build
}

