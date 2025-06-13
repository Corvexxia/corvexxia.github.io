import { useState } from "react"
import Pagination from 'react-bootstrap/Pagination';

function ImageRow({images, handleImgClick} : {images:string[], handleImgClick:(img:string) => void}) {
    const imgThumbs = images.map((img, index) => {
        return (
            <div className="col-md-3"  key={index} onClick={() => handleImgClick(img)}>
                <img src={img} loading="lazy"
                style={{width:'20vw', height:'20vw', objectFit:'cover'}} 
                />
            </div>
        )
    })
    return(
        <div className="">
            <div  className="row">
                {imgThumbs}
            </div>
        </div>
    )
}

export const ImageSection = ({images, handleImgClick} : {images:string[], handleImgClick:(img:string) => void}) => {
    const [currPage, setCurrPage] = useState(1)

    let imageRows = []

    for(let i = 0; i < images.length; i += 4) {
        imageRows.push(images.slice(i, i+4))
    }

    let items = [];
    for (let number = 1; number <= imageRows.length; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currPage} onClick={() => {setCurrPage(number)}}>
                {number}
            </Pagination.Item>,
        );
    }

    const row = imageRows[currPage - 1]

    return (
        <div className="px-3">
            <div className="px-3 pb-3 w-100">
            <ImageRow 
                images={row}
                handleImgClick={handleImgClick}
                />
            </div>
            <div className="d-flex justify-content-center">
                <div><Pagination>{items}</Pagination></div>
            </div>
            
        </div>
    )
}