import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shipment from './Components/Shipment/Shipment';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path='/inventory'
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment/>
          </RequireAuth>
        }></Route>
      </Routes>




      {/* <div className='design'><small>Design by M_N_A(@mnaofficialbd)</small></div> */}
    </div>
  );
}

export default App;
