import { fetch } from 'ofetch'
import { fileIcons } from '../../vendor/vscode-material-icon-theme/src/icons/fileIcons'
import { folderIcons } from '../../vendor/vscode-material-icon-theme/src/icons/folderIcons'

export async function getIcon(fileName: string, preferFile = false) {
  const [icon1, icon2] = await Promise.allSettled([
    getIconFromFile(fileName),
    getIconFromFolder(fileName),
  ])
  return preferFile ? (icon1 || icon2) : (icon2 || icon1)
}

export async function getIconFromFile(fileName: string) {
  const iconName = fileIcons.icons.find((item) => {
    if (item.fileNames?.includes(fileName))
      return true

    if (item.fileExtensions?.find(it => fileName.endsWith(`.${it}`)))
      return true

    return false
  })?.name || fileIcons.defaultIcon.name

  try {
    const data = fetch(`https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/${iconName}.svg`)
      .then(data => data.text())

    return data
  }
  catch (e) {
    console.error(e)
    return ''
  }
}

export function getIconFromFolder(fileName: string) {
  const specific = folderIcons.find(item => item.name === 'specific')
  if (!specific)
    return ''

  const iconName = specific.icons?.find((item) => {
    if (item.folderNames?.includes(fileName))
      return true

    return false
  })?.name || specific.defaultIcon.name

  try {
    const data = fetch(`https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/${iconName}.svg`)
      .then(data => data.text())

    return data
  }
  catch (e) {
    console.error(e)
    return ''
  }
}

getIconFromFile('index.vue')
