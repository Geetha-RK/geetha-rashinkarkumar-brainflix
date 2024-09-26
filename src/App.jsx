import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import VideoDisplay from "./pages/VideoDisplay";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={ <VideoDisplay />}/>
      <Route path="/video/:id" element={<VideoDisplay />} />
      {/* <Route path="/update" element={<Update />} /> */}
      <Route path='/not-found' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
