import RoutesApp from './router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <h1>
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
     </h1>
    </div>
  );
}

export default App;
