/*Importation des librairies*/
import React from 'react'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
/*Pages*/ 
import Home from './pages/Home'
import About from './pages/About'
import OneAccomodation from './pages/One_Accomodation'
import PageNotFound from './pages/404'
/*Layouts*/
import Header from './layouts/Header'
import Footer from './layouts/Footer'
function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/one_accomodation/:id/" element={<OneAccomodation/>} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}
export default App
