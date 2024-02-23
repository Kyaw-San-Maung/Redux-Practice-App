import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import "./components/Redux/slice";
import { AddPostForm } from "./components/AddPostForm/AddPostForm";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/form" element={<AddPostForm />} />
      </Routes>
    </>
  );
}

export default App;
