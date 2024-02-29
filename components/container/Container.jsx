import './container.scss';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Container = ({ children }) => {
  return (
    <div className='container'>
      <Header />
      <div className='container__main'>{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
