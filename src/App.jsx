
import Landing from './Pages/Landing';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
// import Nav from './Pages/Nav';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
  </Router>
  );
}

export default App;
