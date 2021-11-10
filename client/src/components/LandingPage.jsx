
import React from 'react';
import '../css/LandingPage.css';


const LandingPage = props => {

    const {mobile,setMobile} = props;
    // const [mobile,setMobile] = useState(false);
    const handleClick = e => {
        console.log(window.innerWidth);
        console.log(mobile);
    }

    const showButton = () => {
        if (window.innerWidth <= 1066) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    // window.addEventListener('resize',showButton);

    return (
        <div className="container">
            <div>
                <h1 className={mobile ? "imgTextMobile" : "imgText"}>Track Tasks</h1>
                <h1 className={mobile ? "imgTextMobile" : "imgText"}>Follow Your Progress</h1>
            </div>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}
export default LandingPage;