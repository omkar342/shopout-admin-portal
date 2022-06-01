import "./App.css";
import Nav from "./Navbar/Nav";
import Navigation from "./Navbar/Navigation";
import Agent from "./Components/Agent";
import Business from "./Components/Business";
import Events from "./Components/Events";
import Store from "./Components/Store";
import Video from "./Components/Video";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Business/>}></Route>
          <Route exact path="/shopout-admin-portal" element={<Business/>}></Route>
          <Route exact path="/agent" element={<Agent/>}></Route>
          <Route exact path="/business" element={<Business/>}></Route>
          <Route exact path="/events" element={<Events/>}></Route>
          <Route exact path="/store" element={<Store/>}></Route>
          <Route exact path="/video" element={<Video/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
