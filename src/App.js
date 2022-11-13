import './App.css';
import Topbar from './component/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './screens/main/Main';
import View from './screens/viewItem/View';
import { CharacterProvider } from './utils/CharacterContext';


function App() {
  return (
    <CharacterProvider>
      <Topbar />
        <Router>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/view/:id' element={<View />} />
          </Routes>
        </Router>
    </CharacterProvider>
  );
}

export default App;
