
import './App.css';
import Footer from './component/Home/Footer';
import HomeFive from './component/Home/HomeFive';
import HomeFour from './component/Home/HomeFour';
import HomeOne from './component/Home/HomeOne';
import HomeSeven from './component/Home/HomeSeven';
import HomeSix from './component/Home/HomeSix';
import HomeThree from './component/Home/HomeThree';
import HomeTwo from './component/Home/HomeTwo';
import TitleOne from './component/Home/TitleOne';

function App() {
  return (
    <div className="App">
      <HomeOne></HomeOne>
      <HomeTwo></HomeTwo>
      <HomeThree></HomeThree>
      <HomeFour></HomeFour>
      <HomeFive></HomeFive>
      <HomeSix></HomeSix>
      <HomeSeven></HomeSeven>
      <TitleOne></TitleOne>
      <Footer></Footer>
    </div>
  );
}

export default App;
