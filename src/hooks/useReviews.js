import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, SetReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(Response => Response.json())
            .then(data => SetReviews(data))
    }, [])
    return [reviews, SetReviews];
}
export default useReviews;