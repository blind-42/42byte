//import Menubar from '../../components/Menubar/Menubar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AppContainer, MainContainer } from './stlyed';

function Main() {
  return (
    <AppContainer>
			<Header />
			<MainContainer></MainContainer>
			<Footer />
    </AppContainer>
  );
}

export default Main;
