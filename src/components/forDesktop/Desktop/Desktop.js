import Navbar from "../navbar/Navbar";
import Section from "../section/Section";
import "./Desktop.css"
const Desktop = () => {
    return ( 
        <main>
            <Navbar />
            <Section  bgColr='red'/>
            <Section  bgColr='gold'/>
            <Section  bgColr='teal'/>
        </main>
     );
}
 
export default Desktop;