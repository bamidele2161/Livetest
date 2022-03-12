import '../styles/globals.scss'
import {Provider} from 'react-redux';
import store from '../components/redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
