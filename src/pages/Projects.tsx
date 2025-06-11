export const ProjectsPage = () => {
    return(
        <>
        <div className="d-flex p-3 align-items-center">
            <div className="flex-grow-1 p-3">
                <h1>StackOverflow</h1>
                <p>A bullet-hell rogue-like game about a robot with a special S.T.A.C.K. that can convert
                    anything into raw data for storage, including bullets. <i>Especially</i> bullets.
                    With this powerful bullet-converting ability, the stack is the limit!
                    <br></br>
                    <br></br>
                    The engine was made from scratch in C++ and structured using ECS, with graphical
                    rendering done using OpenGL.
                    Though originally an academic project with a team of five students,
                    the team has continued to work on it afterwards out of passion.
                    Hopefully, it will be released soon.
                    <br></br>
                    
                </p>
                <h3>My Roles</h3>
                <ul>
                    <li><b>Render system:</b> animations, custom shaders, optimizations</li>
                    <li><b>Text render system:</b> text animations and highlighting</li>
                    <li><b>UI system:</b> interactable menus, hoverable icons </li>
                    <li><b>Dialogue system:</b> script loading, branching dialogue</li>
                    <li><b>Camera system:</b> follows the player, zooms in/out, and supports custom camera transitions</li>
                    <li>Concept and asset <b>artist</b></li>
                </ul>
            </div>
            <div className="p-3">
                <iframe
                    src='https://www.youtube.com/embed/UVOJaPeL7iE'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    style={{height:'75vh', width:'60vw'}}
                />
            </div>
        </div>
    </>
    )
}