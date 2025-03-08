import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Main from './component1/Main';
import store from './component1/store/Store';
import { Provider } from 'react-redux'; 
import LunchApi from './component1/LunchApi';
import Todos from './Component2/Todos';
import DogApi from './component3/DogApi';
import Country from './component4/Country';


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path='/lunch'    element={<LunchApi/>}></Route>
            <Route path='/tododata' element={<Todos/>}></Route>
             <Route path='/dogapi'   element={<DogApi/>}></Route>
             <Route path='/country'  element={<Country/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
