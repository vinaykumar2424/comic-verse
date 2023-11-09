import './App.css';
import Body from './components/Body/Body';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerationPage from './components/GenerationPage/GenerationPage';

function App() {
  return (
    <div className="App">
      {/* <Body /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Body />} />
            <Route path="/comics" element={<GenerationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
