import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Service from './component/Service';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Nomatch from './component/Nomatch';
import Product from './component/Product';
import New from './component/New';
import Best from './component/Best';
import Profile from './component/Profile';
import Order from './component/Order';
import UserDet from './component/UserDet';
import User from './component/User';
import Login from './component/Login';
import {AuthProvider} from './component/auth';
//import Hello from './component/project';
import Signup from './component/Signup';
//import { Layout1 } from './component/Parent1';
import RequiredAuth from './component/Requiredauth';
import LoginSuccess from './component/LoginSuccess';
import Signupsuccess from './component/Signupsuccess';
import Bloodmatch1 from './component/BloodMatch1';

//import Task1 from './component/task1';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="*" element={<Nomatch/>}></Route>
        <Route path="/product" element={<Product/>}>
            <Route path="new" element={<New/>}/>
            <Route path="best" element={<Best/>}/>
            <Route index element={<New/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/profile" element={<RequiredAuth><Profile/></RequiredAuth>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/user" element={<User/>}>
        <Route path=":userid" element={<UserDet/>}/></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/loginsuccess" element={<LoginSuccess/>}/>
        <Route path="/signupsuccess" element={<Signupsuccess/>}/>
        <Route path="/bloodmatch1" element={<Bloodmatch1/>}/>
        
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
