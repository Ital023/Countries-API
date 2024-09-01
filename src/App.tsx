import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Countries from "./routes/Home/Countries";
import CountryDetails from "./routes/Home/CountryDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (

    <div>
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Countries/>}/>
          <Route path="countries" element={<Countries/>}/>
          <Route path="countries/:countryId" element={<CountryDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>

    
  );
}
