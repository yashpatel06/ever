import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ContactUs from "./pages/contact/ContactsUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
