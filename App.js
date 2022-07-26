import TableDataArray from './Component/TableDataArray'
import Events from './Component/Events'
import {Route, Routes} from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom';
import NavBar from './Component/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' exact element={ <TableDataArray/>}></Route>
      <Route path='/Events' element={<Events/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
