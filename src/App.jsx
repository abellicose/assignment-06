import './App.css'
import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Stats from './components/stats/Stats.jsx';

function App() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Stats />
            </main>
        </>
    )
}

export default App;
