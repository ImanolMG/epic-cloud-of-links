import '../assets/stylesheets/App.css';
import Login from '../components/Login';
import SignUp from "./SignUp";
import ViewLink from "./viewLink";
import Header from "./Header";
import MyLinks from "./MyLinks";
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
            <Route path='/link' element={<ViewLink/>} />
            <Route path='/' element={<MyLinks/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
