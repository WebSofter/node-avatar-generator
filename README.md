# Node native avatar generator

This module based on Boring avatars is a tiny JavaScript lib without React/Vue for running in console as node module.

## Install

```
npm install node-avatar-generator
```
## Usage with console

```
node index -v marble -name David
```   
## Usage with PHP
```
exec("cd /var/www/bprd/nodejs/avatar; node index -v marble -name David 2>&1", $out, $err);
$svg  = implode($out);
$src = "data:image/svg+xml;base64,".base64_encode($svg);
echo "<img src='{$src}'>";
```
this command return svg of avatar.   

### Props

| Prop    | Arg   | Type                                                         |
| ------- |-------| ------------------------------------------------------------ |
| size    | -s    | number or string                                             |
| square  |       | boolean                                                      |
| name    | -n    | string                                                       |
| variant | -v    | oneOf: `marble`, `beam`, `pixel`,`sunset`, `ring`, `bauhaus` |
| colors  |       | array of colors                                              |