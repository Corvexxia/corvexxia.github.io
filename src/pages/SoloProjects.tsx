

export const SoloProjects = () => {
    return(
        <>
        <div className="p-3">
            <div className="clearfix p-3">
                <img src="/soloProjects/findingflorence.png" className="col-md-6 float-md-start mb-3 me-md-3" alt="Finding Florence Thumbnail" />
                <h1>Finding Florence</h1>
                <p>
                    A short demo I made in two weeks as a first foray into the Unity engine, with a focus on dialogue, animating sprites, and environment layout. Scripted in C# with all original visual assets and free to use music from Ucchii0 (風無き空の色【Free Ver】).
                </p>
            </div>
            <div className="clearfix p-3">
                <img src="/soloProjects/210.png" className="col-md-6 float-md-start mb-3 me-md-3" alt="Finding Florence Thumbnail" />
                <h1>Visual Novel Demo</h1>
                <p>
                    A small academic project I made in Java, using the Swing library to make the GUI. This is where I first explored implementing a script-based dialogue system and incorporating user input via text as part of the gameplay.
                </p>
            </div>
        </div>
        </>
    )
}