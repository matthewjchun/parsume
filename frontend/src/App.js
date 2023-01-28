import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Results from './components/Results/Results';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { createContext } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBI21VQ4eW-qwVlUpJ-3x8nBUvsAhRuf1g",
  authDomain: "parsume-d4fa8.firebaseapp.com",
  projectId: "parsume-d4fa8",
  storageBucket: "parsume-d4fa8.appspot.com",
  messagingSenderId: "1074705200247",
  appId: "1:1074705200247:web:2b08ead93fdd93c143c272",
  measurementId: "G-H6RCGJTK43" 
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export const dbContext = createContext(db);

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
