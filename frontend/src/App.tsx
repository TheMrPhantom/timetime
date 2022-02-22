import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Mainpage from './Components/Mainpage/Mainpage';
import Cookies from 'js-cookie';
import { themes } from './Components/Common/Theme';

import allReducer from './Reducer/reducerCombiner';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

function App() {
  const [themeCookie, setthemeCookie] = useState(0)
  const store = createStore(allReducer, composeWithDevTools())

  useEffect(() => {
    setthemeCookie(Cookies.get("theme") !== undefined ? Number(Cookies.get("theme")) : 0)
  }, [])

  return (
    <ThemeProvider theme={themes[themeCookie]}>
      <Provider store={store}>
        <Mainpage />
      </Provider>
    </ThemeProvider >
  );
}

export default App;
