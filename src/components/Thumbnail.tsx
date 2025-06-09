import { useNavigate } from 'react-router-dom'

export interface Thumbnail {
    title: string
    imageUrl: string
    id: number
}

export function ImageThumbnail ({ thumbnail }:
    { thumbnail: Thumbnail }){
    const navigate = useNavigate()

    function handleImageClick() {
        navigate(`/images/${thumbnail.id}`)
    }

    return (
        <div onClick={handleImageClick}>
            <div className="card thumbnailDiv p-0">
                <img src={`${thumbnail.imageUrl}`} className="card-img" alt={thumbnail.title}
                    style={{ height: '18rem', objectFit: 'cover' }} />
                <div className='thumbnailTitle bg-body-secondary'>
                    <p className="text-center">{thumbnail.title}</p>
                </div>
            </div>
        </div>
    )
}