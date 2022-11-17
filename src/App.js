import Home from "./components/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Getstarted from "./components/Getstarted";
import Admin from "./components/Admin";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path="/getstarted" element={<Getstarted/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
      </Routes>
    </Router>
    
    

    </div>
  );
}

export default App;
