import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GetDiscount } from "./components/GetDiscount";
import { SaleBanner } from "./components/Sale";

function App() {
  return (
    <div>
      <Header />
      <SaleBanner />
      <GetDiscount />
      <Footer />
    </div>
  );
}

export default App;
