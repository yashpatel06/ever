import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ContactUs from "./pages/contact/ContactsUs";
import AboutUs from "./pages/about/AboutUs";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
