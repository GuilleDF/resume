import React from 'react'
import ReactDOM from 'react-dom'
import { PDFViewer, Font } from '@react-pdf/renderer'
import MyDocument from './MyDocument'

Font.register({
  family: 'Roboto',
  fonts: [
    { src: require('./assets/fonts/Roboto-Regular.ttf') },
    { src: require('./assets/fonts/Roboto-Italic.ttf'), fontStyle: 'italic' },
    { src: require('./assets/fonts/Roboto-Bold.ttf'), fontWeight: 'bold' },
    { src: require('./assets/fonts/Roboto-Light.ttf'), fontWeight: 'lighter' },
  ],
})

Font.registerEmojiSource({
  format: 'png',
  url: 'https://twemoji.maxcdn.com/2/72x72/',
})

// Enable hyphenation only for existing hyphens
Font.registerHyphenationCallback(word => [word])

const App = () => (
  <PDFViewer width="100%" height="900">
    <MyDocument />
  </PDFViewer>
)

ReactDOM.render(<App />, document.getElementById('root'))
