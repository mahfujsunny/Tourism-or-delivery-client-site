
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar></Navbar>
      </AuthProvider>
    </div>
  );
}

export default App;
  