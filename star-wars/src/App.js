
import MoreDetails from './components/MoreDetails';
import Website from './components/Website';
import { Route, Routes, useParams} from 'react-router-dom';
function App() {

  let { id } = useParams();
  return (

    <Routes>
      <Route path='/' element={<Website />} />
      <Route path='/:id' element={<MoreDetails />}/>
    </Routes>
  );
}

export default App;
