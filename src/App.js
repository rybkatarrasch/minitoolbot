import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/main-pages/about";
import Ascii from "./components/main-pages/ascii";
//import "dist/bootstrap.css";
import MorseCodeConvert from "./components/main-pages/morsecode";
import Home from "./components/main-pages/home";
import WeightConverter from "./components/main-pages/weight";
import LengthConverter from "./components/main-pages/lenght";
import FeedbackForm from "./components/feedback";
import Terms from "./components/main-pages/termsandcondition";
import Privacy from "./components/main-pages/privacy";

function App() {
  return (
    <div className="Appendix">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/morse-code" element={<MorseCodeConvert />} />
        <Route path="/ascii" element={<Ascii />} />
        <Route path="/weight" element={<WeightConverter />} />
        <Route path="/length" element={<LengthConverter />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms&condition" element={<Terms />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
