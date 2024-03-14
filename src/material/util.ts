import type { LanguageIcon } from '../../vendor/vscode-material-icon-theme/src/models'
const languageExtensions: LanguageIcon[] = [
  { icon: { name: 'typescript' }, ids: ['ts'] },
  { icon: { name: 'javascript' }, ids: ['js'] },
  { icon: { name: 'yaml' }, ids: ['yml'] },
  { icon: { name: 'python' }, ids: ['py'] },
  { icon: { name: 'cpp' }, ids: ['cc'] },
  { icon: { name: 'ruby' }, ids: ['rb'] },
]

export function mergeInner(exts: LanguageIcon[]) {
  languageExtensions.forEach((item) => {
    const target = exts.find(it => it.icon.name === item.icon.name)
    target?.ids.push(...item.ids)
  })
  return exts
}
