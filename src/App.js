
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';




import App1 from "./one";
import Login from "./login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />}> </Route>
          
          <Route path="/one" element={<App1 />}> </Route>
         
      










        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
