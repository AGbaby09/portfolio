import './Portfolio.css';
import Photo from './portIMG.jpg';
const Portfolio = () => {
    return ( 
        <main id='port'>
            <i className='bx bxl-unity' ></i>
            <i className='bx bxl-meta'></i>
            <i className='bx bx-loader-circle' ></i>
            <i className='bx bx-circle-three-quarter' ></i>
            <i className='bx bx-shape-triangle'></i>
            <div id='portName'>
                <h1>HI, I'M</h1>
                <h1>AGBOTSE SELASI MICHAEL</h1>
            </div>
            <div id='portSummary'>
                <button>Personal Blog</button>
                <button>Tech Blog</button>
                <button>Skill Set</button>
                <button>Projects</button>
            </div>
            <div id='portPhoto'>
                <img src={Photo} alt=''/>
            </div>

            <div id='contacts'>
                <ul>
                    <li> <i className='bx bxl-gmail' ></i> <a href='#'>agbotsem@gmail.com</a></li>
                    <li> <i className='bx bxl-whatsapp' ></i> <p>+233 59 601 6100</p></li>
                    <li> <i className='bx bxl-twitter' ></i> <a href='#'>zero4Mday</a></li>
                    <li> <i className='bx bxl-github' ></i> <a href='#'>AGbaby09</a></li>
                    {/* <li> <i className='bx bxl-dial' ></i><p></p></li> */}
                </ul>
            </div>
        </main>
    );
}
export default Portfolio;