import { describe, expect, it } from 'vitest'
import { getIconFromFile, getIconFromFolder } from '../src/material'

describe('Icon test', () => {
  it('fetch file icon', async () => {
    const svgIcon = await getIconFromFile('vite.config.ts')
    expect(svgIcon).toMatchInlineSnapshot(`
      "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 32 32\\">
        <path d=\\"M10,2V18h4V30l9-16H17L22,2Z\\" style=\\"fill: #ffab00\\"/>
      </svg>
      "
    `)
  })

  it('fetch folder icon', async () => {
    const svgIcon = await getIconFromFolder('src')
    expect(svgIcon).toMatchInlineSnapshot(`
      "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 32 32\\">
        <path d=\\"M13.84376,7.53645l-1.28749-1.0729A2,2,0,0,0,11.27591,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2H15.12412A2,2,0,0,1,13.84376,7.53645Z\\" style=\\"fill: #4caf50\\"/>
        <path d=\\"M18.43481,30a1.07457,1.07457,0,0,1-.23744-.02778,1.13739,1.13739,0,0,1-.82864-1.32282L20.462,12.9053a1.1305,1.1305,0,0,1,.5072-.744,1.05715,1.05715,0,0,1,.79956-.13429,1.13886,1.13886,0,0,1,.82864,1.32436l-3.10134,15.7441a1.12409,1.12409,0,0,1-.504.74244A1.05491,1.05491,0,0,1,18.43481,30Zm6.20106-2h-.07753a1.07492,1.07492,0,0,1-.76241-.41213A1.164,1.164,0,0,1,23.909,26.0397l5.31911-4.9671-5.2965-4.6229a1.1647,1.1647,0,0,1-.16153-1.54354,1.07957,1.07957,0,0,1,.75434-.43682,1.05763,1.05763,0,0,1,.80925.25777L31.57834,20.182a1.1563,1.1563,0,0,1,.00323,1.72259L25.36274,27.7129a1.06859,1.06859,0,0,1-.72849.28864ZM15.3254,28a1.07162,1.07162,0,0,1-.72849-.29173L8.37162,21.89685a1.159,1.159,0,0,1-.0099-1.69172l.01959-.01853,6.24629-5.45332a1.03545,1.03545,0,0,1,.79956-.26086,1.08079,1.08079,0,0,1,.75918.43682,1.16473,1.16473,0,0,1-.15991,1.54663l-5.29327,4.61981,5.31912,4.964a1.15611,1.15611,0,0,1,.11307,1.54817A1.07173,1.07173,0,0,1,15.40293,28Z\\" style=\\"fill: #c8e6c9\\"/>
      </svg>
      "
    `)
  })
})
