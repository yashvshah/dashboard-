import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Componentss/HeadersPage/login-register/SignIn';
import SignUp from './Componentss/HeadersPage/login-register/SignUp';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ResetPass from './Componentss/HeadersPage/reset/ResetPass';
import Deshboard from './Componentss/Container/Deshboard';
import Profile from './Componentss/Container/Profile';
import History from './Componentss/Container/History';
import Station from './Componentss/Container/Station';
import Payment from './Componentss/Container/Payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="resetpass" element={<ResetPass/>}/>
        <Route path="deshboard" element={<Deshboard/>}/>
        <Route path="history" element={<History/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="station" element={<Station/>}/>
        <Route path="payment" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
    // <>
    // {/* <Deshboard/> */}
    // {/* <History/> */}
    // {/* <Profile/> */}
    // {/* <Station/> */}
    // {/* <Payment/> */}
    // {/* <Cardcom/> */}
    // </>
  );
}

export default App;
