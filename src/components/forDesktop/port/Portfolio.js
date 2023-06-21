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
        </main>
    );
}
export default Portfolio;