import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
}

export default App;
