import '../assets/stylesheets/App.css';
import Login from '../components/Login';
import SignUp from "./SignUp";
import ViewLink from "./viewLink";
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
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<ViewLink/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
