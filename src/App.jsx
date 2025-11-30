import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import HomePage from "./components/Home"

function App() {
  return (
    <div className="parent">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  )
}

export default App
