import '../assets/stylesheets/App.css';
import Login from '../components/Login';
import SignUp from "./SignUp";
import {
    BrowserRouter,
    Routes ,
    Route,
} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>} />
            <Route path='/' element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
