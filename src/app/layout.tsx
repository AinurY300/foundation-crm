"use client"

import theme, { font } from '@utils/theme'
import createEmotionCache from '@/utils/createEmotionCache'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'


const clientSideEmotionCache = createEmotionCache()

export default function RootLayout({
  children,
  emotionCache
}: {
  children: React.ReactNode,
  emotionCache?: EmotionCache
}) {

  emotionCache = clientSideEmotionCache

  return (
    <CacheProvider value={emotionCache}>
      <html lang="ru" className={font.className}>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </CacheProvider>
  )
}
