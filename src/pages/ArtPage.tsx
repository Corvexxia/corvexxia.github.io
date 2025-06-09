import { ImageThumbnail, type Thumbnail } from "../components/Thumbnail"

export const ThumbnailList = ({thumbnails}:
    {thumbnails:Thumbnail[], selecting:boolean, handleSelect:(img:Thumbnail)=>void, isGallery:boolean}) => {

    const renderedImages = thumbnails.map((thumbnail, index) => {
        
        return (
            <div className="col-md-3 gx-3" key={`${thumbnail.id}-${index}`}>
                <ImageThumbnail thumbnail={thumbnail}/>
            </div>
        )
    })

    return (
        <div className="row gy-3">
            {renderedImages}
        </div>
    )
}