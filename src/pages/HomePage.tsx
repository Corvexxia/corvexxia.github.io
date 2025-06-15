export const HomePage = () => {
    return(
        <>
        <div className="p-3" style={{height:'100vh'}}>
            <div className="d-flex">
                <div className="p-3">
                    <img src="/icon.png" alt="Header icon" style={{borderRadius:'50%', width:'200px'}}/>
                </div>
                <div className="flex-grow-1 p-3">
                    <h1>Hello, I'm Amanda</h1>
                    <h4>A programmer and hobbyist artist who is always eager to learn new things. </h4>
                    <p>I'm a 4th year computer science student, with much of my work driven by my 
                        urge for optimization and keen visual awareness. 
                        I strive to make games where gameplay and art
                        go hand in hand with one another to create a unique and unified experience.
                    </p>
                </div>
            </div>
            <div className="d-flex p-3 justify-content-between">
                <div className="p-3">
                    <h3 className="">Skills</h3>
                    <ul>
                        <li>
                            <b>Programming:</b> C/C++, Python, Java
                        </li>
                        <li>
                            <b>Web:</b> JavaScript, React + Redux, PHP, Next.js
                        </li>
                        <li>
                            <b>Databases:</b> Oracle, SQL
                        </li>
                        <li>
                            <b>Machine Learning:</b> scikit-learn, spaCy, PyTorch, TensorFlow
                        </li>
                        <li>
                            <b>What I'm learning now:</b> Three.js
                        </li>
                    </ul>
                </div>
                <div className="p-3">
                    <h3>Education</h3>
                    <p><b>University of British Columbia</b>
                    <br></br>
                    Bachelor of Science: Computer Science (September 2023 - May 2027)
                    </p>
                    <p><b>Langara College</b>
                    <br></br>
                    Associate of Science: Computer Science (September 2021 - Aug 2023)
                    </p>
                </div>
                <div className="p-3">
                    <h3>Contact</h3>
                    <p><b>tian.amandajade@gmail.com</b></p>
                </div>
            </div>
        </div>

        </>
    )
} 