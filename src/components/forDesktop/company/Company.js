import './Company.css';
const About = () => {
    return ( 
        <main id='main2'>
            <nav>
                <p>Day 0</p>
                <p>aTHREAT</p>
            </nav>
            <section>
                <h1>WHO ARE WE?</h1>
                <p>We are an organization initiating the children and youth into the wolrd of tech, teaching them basic life concepts such as Logical reasoning, Problem solving, and establishment of bonds for teamwork</p>
                <div id='posts'>
                    <div id='post'>
                        <i class='bx bxs-bulb'></i>
                        <h3>Logical Reasoning</h3>
                        <p>Logical reasoning is the process of using rational and systematic steps to come to a conclusion for a given statement or problem</p>
                    </div>
                    <div id='post'>
                        <i class='bx bx-question-mark' ></i>
                        <h3>Problem Solving</h3>
                        <p>Problem solving is the process or act of finding a solution to a problem. It involves defining the problem, determining its cause, and implementing a solution</p>
                    </div>
                    <div id='post'>
                        <i class='bx bx-world' ></i>
                        <h3>Teamwork</h3>
                        <p>Teamwork is the action or quality of working together in a group with a common aim or purpose. Teamwork involves co-operation, collaboration, communication, sharing, and overcoming weaknesses</p>
                    </div>
                </div>
                <div id='foot'>
                    <button>Learn more about us</button>
                </div>
            </section>
        </main>
    );
}
 
export default About;