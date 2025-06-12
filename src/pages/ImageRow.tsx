import { useState } from "react"
import Pagination from 'react-bootstrap/Pagination';

function ImageRow({images, handleImgClick} : {images:string[], handleImgClick:(img:string) => void}) {
    const imgThumbs = images.map((img, index) => {
        return (
            <div className="col-md-3"  key={index} onClick={() => handleImgClick(img)}>
                <img src={img} loading="lazy"
                style={{width:'18rem', height:'18rem', objectFit:'cover'}} 
                />
            </div>
        )
    })
    return(
        <div className="">
            <div  className="row gy-3">
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
        <div className="container">
            <div className="row gy-3 p-3">
            <ImageRow 
                images={row}
                handleImgClick={handleImgClick}
                />
            </div>
            <Pagination>{items}</Pagination>
        </div>
    )
}