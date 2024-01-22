'use client'

import '@/styles/globals.scss'
// Next.js allows you to import CSS directly in .js files.
// It handles optimization and all the necessary Webpack configuration to make this work.
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import { Watermark } from 'watermark-js-plus'
// You change this configuration value to false so that the Font Awesome core SVG library
// will not try and insert <style> elements into the <head> of the page.
// Next.js blocks this from happening anyway so you might as well not even try.
// See https://fontawesome.com/v6/docs/web/use-with/react/use-with#next-js
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window !== 'undefined') {
    const watermark = new Watermark({
      content: 'www.cyberevangelists.com',
      width: 200,
      height: 200,
      rotate: 22,
      layout: 'grid',
      gridLayoutOptions: {
        rows: 2,
        cols: 2,
        gap: [20, 20],
        matrix: [
          [1, 0],
          [0, 1],
        ],
      },
      advancedStyle: {
        type: 'linear',
        colorStops: [
          {
            offset: 0,
            color: 'grey',
          },
          {
            offset: 1,
            color: 'grey',
          },
        ],
      },
      onSuccess: () => {
        // success callback
      },
    })
    watermark.create()
  }
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        {children}
      </body>
    </html>
  )
}
