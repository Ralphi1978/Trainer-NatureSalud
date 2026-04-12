import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { queryClientInstance } from "@/lib/query-client";
import Layout from "./components/Layout";
import PageNotFound from "./lib/PageNotFound";
import Contacto from "./pages/Contacto";
import Filosofia from "./pages/Filosofia";
import Home from "./pages/Home";
import Psicoterapia from "./pages/Psicoterapia";
import SobreMi from "./pages/SobreMi";
import Talleres from "./pages/Talleres";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/filosofia" element={<Filosofia />} />
            <Route path="/psicoterapia" element={<Psicoterapia />} />
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
