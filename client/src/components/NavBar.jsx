
import react from 'react';
import {Link} from '@reach/router'
import '../css/NavBar.css';

const NavBar = props => {
    const {mobile,setMobile} = props;
    const {mobileMenu,setMobileMenu} = props;
    // const [mobile,setMobile] = useState(false);
    // const [mobileMenu,setMobileMenu] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 1100) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    const mobileMenuLink = () => {
        setMobileMenu(false);
        setMobile(true);
    }
    const handleClick = e => {
        setMobileMenu(!mobileMenu);
        console.log(mobileMenu);
    }

    // window.addEventListener('resize',showButton);


    return (
        <div className="webContainer">
            <div className="navBar">
                <div className="navBarLeft">
                    <div className="swordLogo"></div>
                </div>
                {mobile
                ? <div>
                    <img onClick={handleClick} id="mobileMenu"src={mobileMenu ?"./imgs/x.png": "./imgs/three-bars-icon-small.jpg"} alt="mobileMenu" height="40px"/>
                </div>
                : <div className="navBarRight">
                    <Link to="/" className="navBarRightItems">Home</Link>
                    <Link to="/project" className="navBarRightItems">Projects</Link>
                    <Link to="/contact" className="navBarRightItems">Contact</Link>
                    <Link to="/loginRegister" className="navBarRightItems">Sign in</Link>
                    <Link to="/MyAccount" className="navBarRightItems">My Account</Link>
                </div>
                }
            </div>
            <div className={mobileMenu ? "NavMobileTrue outer" : "NavMobileFalse"}>
                <Link to="/" onClick={mobileMenuLink} className="NavMobOuterBtn BtnLeftRight">
                    <p className="NavMobBtn">Home</p>
                </Link>
                <hr />
                <Link to="/project" onClick={mobileMenuLink} className="NavMobOuterBtn BtnLeftRight">
                    <p className="NavMobBtn">Projects</p>
                </Link>
                <hr />
                <Link to="/contact" onClick={mobileMenuLink} className="NavMobOuterBtn BtnLeftRight">
                    <p className="NavMobBtn">Contact</p>
                </Link>
                <Link to="/loginRegister" onClick={mobileMenuLink} className="NavMobOuterBtn BtnLeftRight">
                    <p className="NavMobBtn">Sign in</p>
                </Link>
                <Link to="/MyAccount" onClick={mobileMenuLink} className="NavMobOuterBtn BtnLeftRight">
                    <p className="NavMobBtn">My Account</p>
                </Link>
            </div>
        </div>
    )
}
export default NavBar;
