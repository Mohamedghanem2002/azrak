import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Categories from "./components/Categories.jsx";
import BestSeller from "./components/BestSeller.jsx";
import BestSection from "./components/BestSection.jsx";
import FollowUs from "./components/FollowUs.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div dir="rtl">
      <NavBar />
      <Home />
      <Categories />
      <BestSeller />
      <BestSection />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
