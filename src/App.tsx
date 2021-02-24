import React from 'react'
import Root from './routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
    overflow-x: hidden;
    user-select: none;
  }
  h1,h2,h3,h4,h5,h6{
    margin:0;
  }
  ul,li{
    margin:0;
    list-style: none
  }
  a{
    text-decoration:none;
    color:#333;
  }
`

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Root />
		</>
	)
}

export default App
