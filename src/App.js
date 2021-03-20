import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import { ApplicationNavigator } from '@/Navigators'
import './Translations'
import LoginProvider from '@/Context/LoginContext'
import {StatusBar} from 'react-native'
import FlashMessage from 'react-native-flash-message'

const App = () => (
  <LoginProvider>
  <Provider store={store}>
    {/**
     * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
     * and saved to redux.
     * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
     * for example `loading={<SplashScreen />}`.
     * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
     */}
     <StatusBar backgroundColor='#EB5757' barStyle='dark-content'/>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationNavigator />
    </PersistGate>
  </Provider>
  <FlashMessage position='top' />
  </LoginProvider>

)

export default App
