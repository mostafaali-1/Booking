import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { Home } from "./pages/Home"
import { Search } from "./pages/Search"
import { HotelDetails } from "./pages/HotelDetails"
import { Booking } from "./pages/Booking"
import { Dashboard } from "./pages/Dashboard"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="hotel/:id" element={<HotelDetails />} />
          <Route path="booking/:id" element={<Booking />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
