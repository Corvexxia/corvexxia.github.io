import { useState } from "react"
import { TimelineItem } from "../components/TimelineItem"
import timeLineInfo from "../data/timelineContent.json"
import Carousel from 'react-bootstrap/Carousel';

export const ProjectsPage = () => {
    const [index, setIndex] = useState(0)
    const items = timeLineInfo.timelineItems

    function handleClick(index:number) {
        setIndex(index)
    }

    function ItemDescription() {
        const item = items[index]
        const allImages = [item.image, ...item.otherImages]
        const otherImages = allImages.map((img, index) =>
            (
                <Carousel.Item key={index}>
                    <div className="bg-black">
                        <img src={img} alt={"Additional image " + index + " for " + item.title}
                        style={{width:'60vw', height:'75vh', objectFit:'contain'}} 
                        />
                    </div>

                </Carousel.Item>
            )
        )
        return(
            <>
                <div className="d-flex p-3">
                        <Carousel>
                            {otherImages}
                        </Carousel>
                    <div className="flex-grow-1 p-3">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            </>
        )
    }

    const renderedThumbs = items.map((item, i) => {
        return(
        <TimelineItem
            handleClick={() => handleClick(i)}
            title={item.title}
            img={item.image}
            key={i}
            clicked={index === i}
        />)
    })
    
    return(
        <>
        <div className="p-3" style={{minHeight:'100vh'}}>
            <div className="d-flex">
                <div className="p-3">
                    <iframe
                        src='https://www.youtube.com/embed/UVOJaPeL7iE'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        style={{height:'75vh', width:'60vw'}}
                    />
                </div>
                <div className="flex-grow-1 p-3">
                    <h1>StackOverflow</h1>
                    <p>A bullet-hell rogue-like game about a robot with a special <b>S.T.A.C.K.</b> that can convert
                        anything into raw data for storage, including bullets. <i>Especially</i> bullets.
                        With this powerful bullet-converting ability, the stack is the limit!
                        <br></br>
                    </p>
                    <h3>About</h3>
                    <p>
                        The engine was made from scratch in <b>C++</b> and structured using <b>ECS</b>, with graphical
                        rendering done using <b>OpenGL</b>.
                        Though originally an academic project with a team of five students,
                        the team has continued to work on it afterwards out of passion.
                        Hopefully, it will be released soon.
                        <br></br>
                    </p>
                    <h3>My Roles</h3>
                    <ul>
                        <li><b>Systems engineer:</b> for text rendering, camera, script-based dialogue, and interactable UI</li>
                        <li><b>Graphics rendering:</b> improved upon render system to support animations, streamline rendering, and created custom shaders</li>
                        <li><b>Performance optimization:</b> regularly profiled performance to identify bottlenecks and implement fixes, especially with regards to rendering</li>
                        <li><b>Artist:</b> Created both concept art and visual assets</li>
                    </ul>
                </div>
            </div>
            <div className="px-3">
                <h3>Timeline</h3>
                <p>A developmental timeline of the game. Click on each node for more information!</p>
            </div>
            <div className="d-flex px-3 justify-content-between">
                {renderedThumbs}
            </div>
            <div style={{height:10, backgroundColor:'#127563', position:'relative', top:-10}}></div>
            <div className="p-3">
                <ItemDescription />
            </div>
        </div>
    </>
    )
}