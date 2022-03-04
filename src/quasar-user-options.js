
import './styles/quasar.sass'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Notify,
  BottomSheet,
  Dialog,
} from 'quasar'

export default {
  plugins: {
    Notify,
    BottomSheet,
    Dialog,
  }, 
  config: {
    notify: {
      color: 'black',
      textColor: 'white',
      timeout: 500,
      position: 'top',
      group: false,
    },
    ripple: {
      early: true,
    }
  }
}