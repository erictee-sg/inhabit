import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DetailView from "./components/DetailView";
import SpeakerDetailView from "./components/SpeakerDetailView";
import AirbnbDetailView from "./components/AirbnbDetailView";
import TempoRoutes from "./TempoRoutes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ps-neli-detail" element={<DetailView />} />
        <Route path="/speaker/:speakerId" element={<SpeakerDetailView />} />
        <Route path="/accommodation/airbnb" element={<AirbnbDetailView />} />
        {import.meta.env.VITE_TEMPO === "true" && (
          <Route path="/tempobook/*" element={<></>} />
        )}
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && <TempoRoutes />}
    </Suspense>
  );
}

export default App;
