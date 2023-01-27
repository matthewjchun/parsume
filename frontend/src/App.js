import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// require('dotenv').config();


// import { useCollectionData } from 'react-firebase-hooks/firestore'

// const app = initializeApp(process.env.FIREBASE_CONFIG)


// const firestore = firebase.firestore();

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/results" element={ <Results /> } />
         <Route path="/search" element={ <Search /> } />
       </Routes>
    </Router>
  );
}

export default App;
