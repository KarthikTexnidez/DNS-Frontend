import './Footer.css'
import phonelogo from './assets/bytesize_telephone.png'
import emaillogo from './assets/formkit_email.png'
import dnslogo from './assets/DNS Logo one.png'
import facebooklogo from './assets/iconoir_facebook.png'
import twitterlogo from './assets/basil_twitter-outline.png'
import youtubelogo from './assets/mingcute_youtube-line.png'
import instagramlogo from './assets/Frame 151.png'
import locationlogo from './assets/location.png'



const Footer = () => {
  return (
    <>
    <div className="footer-black">
        <div className="connect">
             <h3>CONNECT WITH US</h3>
             <div className="phone">
             <img src={phonelogo} alt="" /><h4>+91 9567843340</h4>
             </div>
             <div className="email">
             <img src={emaillogo} alt="" /><h4>info@deepnetsoft.com</h4>
             </div>
        </div>
        <div className="dns">
            <img src={dnslogo} id='dnslogo' alt="" />
             <h3><span>DEEP</span> NET SOFT</h3>
             <div className="footer-logos">
                <img src={facebooklogo} alt="" />
                <img src={twitterlogo} alt="" />
                <img src={youtubelogo} alt="" />
                <img src={instagramlogo} alt="" />
             </div>
        </div>
        <div className="find">
             <h3>FIND US</h3>
             <div className="location">
             <img src={locationlogo} alt="" /><h4>First floor, Geo infopark, <br />
              Infopark EXPY, Kakkanad</h4>
             </div>
        </div>
    </div>
    </>
  )
}

export default Footer;