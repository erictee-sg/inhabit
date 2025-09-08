import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DetailView from "./components/DetailView";
import SpeakerDetailView from "./components/SpeakerDetailView";
import AirbnbDetailView from "./components/AirbnbDetailView";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ps-neli-detail" element={<DetailView />} />
        <Route path="/speaker/:speakerId" element={<SpeakerDetailView />} />
        <Route path="/accommodation/airbnb" element={<AirbnbDetailView />} />
      </Routes>
    </Suspense>
  );
}

export default App;
