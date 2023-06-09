import './Landing.css';
import Cloudy from './cloudy.mp4';

const Landing = () => {
    return ( 
        <main id='main1'>
            <video src={Cloudy} muted autoPlay loop></video>
            <div id='head'>
                <i className='bx bxl-twitter'></i>
                <p>Day 0</p>
            </div>
            <div id='button'>
                <p>Designing the Future</p>
                <button>Explore</button>
            </div>
        </main>
    );
}
 
export default Landing;