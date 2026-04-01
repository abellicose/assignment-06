import './App.css'
import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Stats from './components/stats/Stats.jsx';
import Tools from './components/tools/Tools.jsx';
import Steps from './components/steps/Steps.jsx';
import Pricing from './components/pricing/Pricing.jsx';
import Explore from './components/explore/Explore.jsx';
import Footer from './components/footer/Footer.jsx';
import {useState} from 'react';

function App() {
    const [active, setActive] = useState(0);
    const [cart, setCart] = useState([]);

    return (
        <>
            <Header cartCount={cart.length} openCart={() => setActive(1)}/>
            <main>
                <Banner />
                <Stats />
                <Tools active={active} setActive={setActive} cart={cart} setCart={setCart}/>
                <Steps />
                <Pricing />
                <Explore />
            </main>
            <Footer />
        </>
    )
}

export default App;
