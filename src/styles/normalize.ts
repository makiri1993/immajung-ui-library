import { injectGlobal } from 'react-emotion'
import { color } from './variables'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
* {
    margin: 0 0 0 0;
	padding: 0 0 0 0;
	font-family: sans-serif;
}
body {
    color: ${color.black}
    width:100vw;
}

div {
    display: block;
}

`
