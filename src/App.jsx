// Hola Gente!!
// Hola Leo!!
import { useState } from "react";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
