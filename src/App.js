import './App.css';
import { Header, Footer } from './Components';
import { AllRoute } from './Routes/AllRoute';
function App() {
  return (
    <div className="App">
      <Header />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
