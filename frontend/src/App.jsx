import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import ContentPage from './pages/ContentPage.jsx';

function App() {
  return(
    <>
      <Routes>
        <Route path={'/'} element={<HomePage/>}></Route>
        <Route path={'/create'} element={<CreatePage/>}></Route>
        <Route path={'/content/:id'} element={<ContentPage/>}></Route>
      </Routes>
    </>
  )
}

export default App