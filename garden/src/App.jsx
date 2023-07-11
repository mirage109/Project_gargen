import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div>
      <Header />
      <NotFound />
      <Footer />
    </div>
  );
}

export default App;
