
import MoreDetails from './components/MoreDetails';
import Website from './components/Website';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (

    <Routes>
      <Route path='/' element={<Website />} />
      <Route path='/:id' element={<MoreDetails />}/>
    </Routes>
  );
}

export default App;
