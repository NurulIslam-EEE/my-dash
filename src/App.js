
import './App.css';
import SignUp from './components/SignUP/SignUp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { BarChart } from './components/BarChart/BarChart';
import NavBar from './components/Shared/NavBar'

function App() {
  return (
    <div className='home-page'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/barChart" element={<BarChart />}/>
      <Route path="/nav" element={<NavBar />}/>
     
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
