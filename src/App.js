import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StickyHeader from './components/header';
import ZoomForm from './components/form';
import ZoomFormTamil from './components/form_tamil';

function App() {
  return (
    
    <div className="App">
      <StickyHeader/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ZoomForm />}/>
        <Route path='/zoom-tamil' element={<ZoomFormTamil/> } />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
