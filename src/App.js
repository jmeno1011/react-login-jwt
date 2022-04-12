// import logo from "./logo.svg";
import "./App.css";
import SiginInSide from "./account/SiginInSide";
import { Route, Routes } from "react-router-dom";
import Album from "./album/Album";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Routes>
        <Route path="/" element={<SiginInSide />} />
        <Route path="/login" element={<SiginInSide />} />
        <Route path="/album" element={<Album />} />
      </Routes>
      {/* <SiginInSide /> */}
    </div>
  );
}

export default App;
