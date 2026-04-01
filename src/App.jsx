import './App.css'
import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Stats from './components/stats/Stats.jsx';
import Tools from './components/tools/Tools.jsx';
import Steps from './components/steps/Steps.jsx';
import Pricing from './components/pricing/Pricing.jsx';
import Explore from './components/explore/Explore.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Stats />
                <Tools />
                <Steps />
                <Pricing />
                <Explore />
            </main>
            <Footer />
        </>
    )
}

export default App;
