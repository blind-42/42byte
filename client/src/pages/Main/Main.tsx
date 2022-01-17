import Menubar from '../../components/Menubar/Menubar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AppContainer, Left, Right, MainContainer } from './stlyed';

function Main() {
  return (
    <AppContainer>
      <Left>
        <Menubar />
      </Left>
      <Right>
        <Header />
        <MainContainer></MainContainer>
        <Footer />
      </Right>
    </AppContainer>
  );
}

export default Main;
