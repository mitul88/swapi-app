import './App.css';
import Topbar from './component/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './screens/main/Main';
import View from './screens/viewItem/View';
import SearchItemView from './screens/search/SearchItemView';


function App() {
  return (
    <Router>
      <Topbar />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/search' element={<SearchItemView />} />
          <Route exact path='/view/:id' element={<View />} />
        </Routes>
    </Router> 
  );
}

export default App;
