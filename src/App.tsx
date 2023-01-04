import { useState } from "react";

import Navbar from "@/components/navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="App">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
