import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Results from './components/Results/Results'
import Search from './components/Search/Search'

function App() {
  return (
    <Home></Home>
    // <BrowserRouter>
    //   <div>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/Results" component={Results} />
    //     <Route path="/Search" component={Search} />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
