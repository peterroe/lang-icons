import { fetch } from 'ofetch'
import { fileIcons } from '../../vendor/vscode-material-icon-theme/src/icons/fileIcons'
import { folderIcons } from '../../vendor/vscode-material-icon-theme/src/icons/folderIcons'
import { languageIcons } from '../../vendor/vscode-material-icon-theme/src/icons/languageIcons'
import { mergeInner } from './util'

export const defaultFolderIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#8699a3" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"/></svg>'
export const defaultFileIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#8699a3" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"/></svg>'

export async function getIconByFile(fileName: string, isUseDefault = true) {
  let iconName = fileIcons.icons.find((item) => {
    if (item.fileNames?.includes(fileName))
      return true

    if (item.fileExtensions?.find(it => fileName.endsWith(`.${it}`)))
      return true

    return false
  })?.name

  // langauge
  const mergedLanguageIcons = mergeInner(languageIcons)
  const langIcoName = mergedLanguageIcons.find((item) => {
    return item.ids.find(it => fileName.endsWith(`.${it}`))
  })?.icon.name
  iconName ||= langIcoName

  if (!iconName && isUseDefault)
    iconName = fileIcons.defaultIcon.name
  if (!iconName)
    return ''

  if (iconName === 'file')
    return defaultFileIcon

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

export async function getIconByFolder(fileName: string, isUseDefault = true) {
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

  if (iconName === 'folder')
    return defaultFolderIcon

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
