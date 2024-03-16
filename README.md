## lang-icons

Infer and get svg icon from file name or folder name

## Usage

```bash
$ pnpm i lang-icons
```

```ts
import { getIconByFile, getIconByFolder } from 'lang-icons/material'

console.log(getIconByFile('vite.config.ts'))
/** <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10,2V18h4V30l9-16H17L22,2Z" style="fill: #ffab00"/></svg> */

console.log(getIconByFile('foo.ts'))
/** <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM16,28H14V18H10V16H20v2H16Zm4-1.7627,1.43262-1.418a3.55568,3.55568,0,0,0,2.14648,1.13385c1.74371.12848,2.80634-.1449,2.33789-1.84186-1.58563-1.062-3.66-1.5705-5.13348-2.7984A3.185,3.185,0,0,1,20,19.25a3.69011,3.69011,0,0,1,.57532-2.03827c1.3789-1.80469,4.827-1.07111,4.86218-1.06232a4.26278,4.26278,0,0,1,2.24609,1.49707l-1.4414,1.39063a2.45461,2.45461,0,0,0-1.27832-.94434,4.38167,4.38167,0,0,0-2.79908.2688.354.354,0,0,0-.10723.17023,2.56,2.56,0,0,0,.02185,1.1654.55425.55425,0,0,0,.20166.27167c1.48309,1.14575,4.70575,1.738,5.48553,3.3739A4.705,4.705,0,0,1,28,24.94135C27.928,28.66132,22.17737,28.8291,20,26.2373Z" style="fill: #0288d1"/></svg> */

console.log(getIconByFolder('src'))
/** <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M13.84376,7.53645l-1.28749-1.0729A2,2,0,0,0,11.27591,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2H15.12412A2,2,0,0,1,13.84376,7.53645Z" style="fill: #4caf50"/><path d="M18.43481,30a1.07457,1.07457,0,0,1-.23744-.02778,1.13739,1.13739,0,0,1-.82864-1.32282L20.462,12.9053a1.1305,1.1305,0,0,1,.5072-.744,1.05715,1.05715,0,0,1,.79956-.13429,1.13886,1.13886,0,0,1,.82864,1.32436l-3.10134,15.7441a1.12409,1.12409,0,0,1-.504.74244A1.05491,1.05491,0,0,1,18.43481,30Zm6.20106-2h-.07753a1.07492,1.07492,0,0,1-.76241-.41213A1.164,1.164,0,0,1,23.909,26.0397l5.31911-4.9671-5.2965-4.6229a1.1647,1.1647,0,0,1-.16153-1.54354,1.07957,1.07957,0,0,1,.75434-.43682,1.05763,1.05763,0,0,1,.80925.25777L31.57834,20.182a1.1563,1.1563,0,0,1,.00323,1.72259L25.36274,27.7129a1.06859,1.06859,0,0,1-.72849.28864ZM15.3254,28a1.07162,1.07162,0,0,1-.72849-.29173L8.37162,21.89685a1.159,1.159,0,0,1-.0099-1.69172l.01959-.01853,6.24629-5.45332a1.03545,1.03545,0,0,1,.79956-.26086,1.08079,1.08079,0,0,1,.75918.43682,1.16473,1.16473,0,0,1-.15991,1.54663l-5.29327,4.61981,5.31912,4.964a1.15611,1.15611,0,0,1,.11307,1.54817A1.07173,1.07173,0,0,1,15.40293,28Z" style="fill: #c8e6c9"/></svg> */
```

<p>
  <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/vite.svg" width=50 />
  <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/typescript.svg" width=50 />
  <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/folder-src.svg" width=50 />
</p>

**Default Icon**

```ts
import { getIconByFile, getIconByFolder } from 'lang-icons/material'

console.log(getIconByFile('foo'))
/** <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#8699a3" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"/></svg> */

console.log(getIconByFolder('bar'))
/** <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#8699a3" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"/></svg> */
```

<p>
  <img src="./public/file.svg" width=50 />
  <img src="./public/folder.svg" width=50 />
</p>

## Roadmap

More icon set support

```ts
import { getIconByFile, getIconByFolder } from 'lang-icons/xxx'
```
