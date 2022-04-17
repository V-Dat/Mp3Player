import "./App.css";
import Day8 from "./pages/Day8/Day8.js";
import Footer from "./parts/Footer";

import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Day8 />} />
            <Route path="*" element={<Navigate replace to="/404NotFound" />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
