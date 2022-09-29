
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp'
import Orderonline from './Orderonline';
import Admin from './Admin';
import Dinning from './Dinning';
import Product from './product';
import Placeorder from './Placeorder';
import Addcart from './Addcart'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery'
import 'bootstrap/dist/js/bootstrap'
import Addpro from './addpro';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Orderonline' element={<Orderonline />}></Route>
          <Route path='/Admin' element={<Admin />}></Route>
          <Route path='/addpro' element={<Addpro />}></Route>
          <Route path='/Dinning' element={<Dinning />}></Route>
          <Route path='/Product' element={<Product/>}></Route>
          <Route path='/Placeorder' element={<Placeorder/>}></Route>
          <Route path='/Addcart' element={<Addcart/>}></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
