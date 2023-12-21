// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../src/Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar />
              </>
            }
          />

          {/* <Route path="/side" element={<InitialSidebar />} /> */}

          {/* <Route path="/side1" element={<SidebarChart />} /> */}

          {/* <Route path="/py" element={<Pyramid />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
