import "./index.css";
import logo from "./assets/logo.png";
import lpg from "./assets/lpg.jpg";
import medical from "./assets/medical.jpg";
import oxygen from "./assets/oxygen.png";

import { useEffect, useState } from "react";

function App() {
  const [second, setSeconds] = useState(0);

  useEffect(() => {
    const secondInterval = setInterval(() => {
      setSeconds((p) => p + 1);
    }, 1000);

    return () => clearInterval(secondInterval);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="w-full h-dvh">
        <div className="h-20 overflow-hidden">
          <img src={logo} alt="" className="w-40 object-center" />
        </div>

        <div className="w-3/4 h-auto ml-auto flex flex-row overflow-hidden">
          <img src={lpg} alt="" className="" />
          <img src={medical} alt="" />
          <img src={oxygen} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
