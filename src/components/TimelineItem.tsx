export const TimelineItem = ({handleClick, title, img, clicked} : {handleClick:() => void, title:string, img:string, clicked:boolean}) => {

    
    return(
        <>
            <div className="p-3" onClick={handleClick}>
                <img src={img} style={{width:'10vw', height:'10vh', objectFit:'cover'}} alt={title}/>
                <h4 className="thumbText">{title}</h4>
                <div className={(clicked? "timelineItemClicked" : "timelineItem")}></div>
                {clicked && <div className="timelineArrow"></div>}
            </div>
        </>
 
    )
}