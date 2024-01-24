import './app.css'
import "./lib/app/"
import App from './App.svelte'
import { init } from '@neutralinojs/lib'

init()

const app = new App({
  // @ts-expect-error
  target: document.getElementById('app'),
})

export default app
