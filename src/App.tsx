import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Countries from "./routes/Home/Countries";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Countries/>}/>
          <Route path="countries" element={<Countries/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
