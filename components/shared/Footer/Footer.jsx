import './footer.scss';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__main'>
        <div className='footer__main__categories'>
          <ul>
            <li>Contact</li>
            <li>About Us</li>
            <li>Commerce Days</li>
            <li>E-Commerce</li>
            <li>Career</li>
          </ul>
        </div>
        <div className='footer__hero'>Modern E-Commerce</div>
        <div className='footer__main__logo'>
          <h1 className='footer__main__logo__text'>hasanarpat</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
