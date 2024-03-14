import { fetch } from 'ofetch'
import { fileIcons } from '../../vendor/vscode-material-icon-theme/src/icons/fileIcons'
import { folderIcons } from '../../vendor/vscode-material-icon-theme/src/icons/folderIcons'

export async function getIconFromFile(fileName: string, isUseDefault = true) {
  let iconName = fileIcons.icons.find((item) => {
    if (item.fileNames?.includes(fileName))
      return true

    if (item.fileExtensions?.find(it => fileName.endsWith(`.${it}`)))
      return true

    return false
  })?.name

  if (!iconName && isUseDefault)
    iconName = fileIcons.defaultIcon.name
  if (!iconName)
    return ''

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

export function getIconFromFolder(fileName: string, isUseDefault = true) {
  const specific = folderIcons.find(item => item.name === 'specific')
  if (!specific)
    return ''

  let iconName = specific.icons?.find((item) => {
    if (item.folderNames?.includes(fileName))
      return true

    return false
  })?.name

  if (!iconName && isUseDefault)
    iconName = specific.defaultIcon.name
  if (!iconName)
    return ''

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
