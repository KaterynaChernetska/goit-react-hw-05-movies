import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import {getReviews} from '../../services/api';
import css from './Reviews.module.css';
import PropTypes from 'prop-types';


 const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {movieId} = useParams();
    const id = Number(movieId);
  

    useEffect(() => {
        const fetchReviews = async () => {
          setIsLoading(true);
          try {
            const {results}= await getReviews(id);
            setReviews(results);
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        };
        fetchReviews();
      }, [id]);


    return (<div>
     {isLoading && <Loader />}
     {error !== null && <p>Oops, some error occured... Message: {error}</p>}
<ul>
    {reviews.length > 0 ? reviews.map(item=> <li key={item.id} className={css.reviewsItem}><span className={css.name}>Author: {item.author}</span>
    <span>{item.content}</span></li>) : 'There are no reviews'}
</ul>
    </div>)
}
export default Reviews;

Reviews.propTypes = {
    movieId: PropTypes.string
}