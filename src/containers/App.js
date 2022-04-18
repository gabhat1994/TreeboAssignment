import "../styles/app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";


function App() {
  return (
     <>
      <nav style={{    height: "36px",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "26px",
    background: "red"}}>
        <Link to="/"> Trending </Link>
        <Link to="/search"> Search </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
     
     </>
  );
}

export default App;
