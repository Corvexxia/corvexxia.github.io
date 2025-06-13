import { useState } from "react"
import artDb from "../data/artInfo.json"
// import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { ImageSection } from "./ImageRow";

export const ArtPage = () => {
    const [img, setImg] = useState<string>("")
    const artInfo = artDb.artInfo

    function handleImgClick(image:string) {
        setImg(image)
    }
    
    const artSections = artInfo.map((section, index) => {
        // let imageRows = []
        // for(let i = 0; i < section.images.length; i += 4) {
        //     imageRows.push(section.images.slice(i, i+4))
        // }

        // const renderedImgRows = imageRows.map((row, index) => {
        //     const imgThumbs = row.map((img, index) => {
        //         return (
        //             <div className="col-md-3 gx-3"  key={index}>
        //                 <img src={img}
        //                 style={{width:'20rem', height:'14rem', objectFit:'cover'}} 
        //                 />
        //             </div>
        //         )
        //     })
        //     return(
        //         <Carousel.Item key = {index} className="p-0 m-0">
        //             <div className="vw-100">
        //                 <div  className="row gy-3" style={{marginLeft:150, marginRight:150}}>
        //                     {imgThumbs}
        //                 </div>
        //             </div>
        //         </Carousel.Item>
        //     )
        // })

        // const simpleThumbs = section.images.map((img, index) => {
        //     return(
        //         <div className="col-md-2"  key={index} onClick={() => setImg(img)}>
        //             <img src={img} loading="lazy"
        //             style={{width:'18rem', height:'18rem', objectFit:'cover'}} 
        //             />
        //         </div>
        //     )
        // })

        // let active = 1;
        // let items = [];
        // for (let number = 1; number < renderedImgRows.length; number++) {
        //     items.push(
        //         <Pagination.Item key={number} active={number === active}>
        //         {number}
        //         </Pagination.Item>,
        //     );
        // }

        return (
            <div className="w-100" key={index}>
                <div className="p-3" >
                    <h1>{section.title}</h1>
                    <p>{section.description}</p>
                </div>
                {/* <Carousel data-bs-theme="dark" className="p-0 m-0">
                    {renderedImgRows}
                </Carousel> */}
                            <ImageSection 
                images={section.images}
                handleImgClick={handleImgClick}
                />
            </div>
        )
    })
    
    return(
        <>
        {artSections}
        <Modal size="xl" className="modal-dialog-centered" show={img.length > 0} onHide={() => setImg("")}>
            <Modal.Header closeButton />
            {img.length > 0 && <img className="modal-content" src={img} style={{width:'100%'}}/>}
        </Modal>
    </>
    )
}