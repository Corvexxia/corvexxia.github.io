export const TimelineItem = ({handleClick, title, img, clicked} : {handleClick:() => void, title:string, img:string, clicked:boolean}) => {

    
    return(
        <>
            <div className="p-3" onClick={handleClick}>
                {/* <div className="border border-5 rounded border-primary"> */}
                    <img src={img} style={{width:'10vw', height:'10vh', objectFit:'cover'}} alt={title} className="rounded"/>
                {/* </div> */}
                <h4 className="thumbText">{title}</h4>
                <div className={(clicked? "timelineItemClicked" : "timelineItem")}></div>
                {clicked && <div className="timelineArrow"></div>}
            </div>
        </>
 
    )
}