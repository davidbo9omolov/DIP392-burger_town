import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, PageNotFound} from './pages'
import {WebRoutes} from './constants/routes.js'
import Header from './components/header/Header.jsx'
import Footer from "./components/footer/Footer.jsx";

function App() {
    return (
        <Router>
            <div className={'min-h-screen w-auto flex flex-col'}>
                <Header/>
                <main className={'flex-1 relative'}>
                    <Routes>
                        <Route path={WebRoutes.HOME} element={<Home/>}/>
                        <Route path={WebRoutes.NOT_FOUND} element={<PageNotFound/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    )
}

export default App