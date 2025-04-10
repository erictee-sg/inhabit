import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import TempoRoutes from "./TempoRoutes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && <TempoRoutes />}
      </>
    </Suspense>
  );
}

export default App;
