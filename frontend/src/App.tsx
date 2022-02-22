import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Mainpage from './Components/Mainpage/Mainpage';
import Cookies from 'js-cookie';
import { themes } from './Components/Common/Theme';

function App() {
  const [themeCookie, setthemeCookie] = useState(0)

  useEffect(() => {
    setthemeCookie(Cookies.get("theme") !== undefined ? Number(Cookies.get("theme")) : 0)
  }, [])

  return (
    <ThemeProvider theme={themes[themeCookie]}>
      <Mainpage />
    </ThemeProvider >
  );
}

export default App;
