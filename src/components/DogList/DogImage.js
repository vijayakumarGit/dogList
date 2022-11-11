
import { useEffect, useState } from "react";
import imageNotfound from '../../imageNotfound.png'
import './DogList.css'
import axios from "axios";

const DogImage = (props) => {

    const [imageUrl, setImageUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        if (props.image) {
            axios.get("https://api.thedogapi.com/v1/images/" + props.image)
                .then(response => {
                    setImageUrl(response.data.url)
                    setLoading(false)
                });
        } else {
            setLoading(false)
        }
    }, [])

    if (loading)
        return (
            <div className="img-container loader-center">
                <div className="loader"></div>
            </div>

        );
    else {
        return (
            <img src={imageUrl || imageNotfound} alt="Dog breed" className="img-container" style={{ objectFit: imageUrl ? 'cover' : 'scale-down' }} />
        )
    }
}

export default DogImage;