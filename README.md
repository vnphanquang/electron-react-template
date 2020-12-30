# Electron in Typescript with React & TailwindCSS

## Vomit Notes

- Renderer: dev with snowpack, build with snowpack & webpack
- Main: dev & build with webpack
- change in config files require page reload to take effect (with snowpack)
- `.vscode/settings/json` treat css as pcss

```json
{
  "files.associations": {
    "*.css": "postcss",
  }
}
```

## Todo

- [x] Config & env loader: sync for main & renderer
- [x] Snowpack for development
- [ ] svg & image import
- [ ] multiple windows
- [ ] custom tray windows
- [ ] ipc
- [ ] i18n

