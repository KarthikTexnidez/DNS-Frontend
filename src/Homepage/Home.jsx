import './Home.css';
import bannerone from './assets/banner-bg-one.jpg';
import logo from './assets/DNS Logo one.png';
import navbaricon from './assets/navbar-icon.png';



const Home = () => {
  

  const navMenu = [
    { id: 1, name: 'Adminpanel', path: '/aadmin' },
    { id: 2, name: 'HOME', path: '/' },
    { id: 3, name: 'MENU', path: '/menu' },
    { id: 4, name: 'MAKE A RESERVATION', path: '/reservation' },
    { id: 5, name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <>
      <div className="hero">
        <div className="nav-bar">
          <div className="nav-options">
            {navMenu.map((option) => (
              <ul key={option.id}>
                <a href={option.path}><li>{option.name}</li></a>
              </ul>
            ))}
            <a href="/aadmin"><img src={navbaricon} id="navbar-icon" alt="" /></a>
          </div>
        </div>
        <div className="color">
          <img src={logo} alt="" />
          <h3>
            <span>DEEP &nbsp;</span>NET <br /> SOFT
          </h3>
        </div>
        <div className="banner">
          <div className="hero-para">
            <div className="hero-menu">
              <h3>MENU</h3>
              <p>
                Please take a look at our menu featuring food, drinks, and brunch. If you would like to <br />
                place an order, use the Order Online button located below the menu.
              </p>
            </div>
          </div>
          <img src={bannerone} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
