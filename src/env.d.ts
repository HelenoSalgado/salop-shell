import "@girs/adw-1";

declare global {
  export interface ImportMeta {
    name: string;
    domain: string;
    resource: string;
    version: string;
    pkgdatadir: string;
    prefix: string;
    libdir: string;
    gjs: string;
  }
}
