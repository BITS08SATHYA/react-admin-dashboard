import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import DashBoard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";
import {Routes} from "react-router-dom";



function App() {

  const [theme, colorMode] = useMode();


  return (
     <ColorModeContext.Provider value={colorMode} >
       <ThemeProvider theme={theme}>
         <CssBaseline />
         <div className="app">
             <Sidebar />
          <main className="content">
            <Topbar />
              <Routes path="/" element={<DashBoard />} />
              {/*<Routes path="/team" element={<Team />} />*/}
              {/*<Routes path="/contacts" element={<Contacts />} />*/}
              {/*<Routes path="/invoices" element={<Invoices />} />*/}
              {/*<Routes path="/form" element={<Form />} />*/}
              {/*<Routes path="/bar" element={<Bar />} />*/}
              {/*<Routes path="/pie" element={<Pie />} />*/}
              {/*<Routes path="/line" element={<Line />} />*/}
              {/*<Routes path="/geography" element={<Geography />} />*/}
              {/*<Routes path="/calendar" element={<Calendar />} />*/}
              {/*<Routes path="/faq" element={<FAQ />} />*/}
          </main>
         </div>
       </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default App;
