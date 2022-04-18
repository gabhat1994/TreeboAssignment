import "../styles/app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Trending </Link>
        <Link to="/search"> Search </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
     
    </Router>
  );
}

export default App;
