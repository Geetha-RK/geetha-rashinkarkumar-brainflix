import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import VideoDisplay from "./pages/VideoDisplay";

function App() {


 
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={ <VideoDisplay />}/>
      <Route path="/video/:id" element={<VideoDisplay />} />
      {/* <Route path="/update" element={<Update />} /> */}
      {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
