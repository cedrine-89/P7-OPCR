import './Rating.scss';
import star_1 from './img/star-1.png';
import star_2 from './img/star-2.png';

export default function Rating({ rating }) {
  return (
    <div className="Rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        if (ratingValue <= rating) {
          return <img key={`${index}-${Math.random()}`} src={star_1}  alt="Votes"/>;
        } else {
          return <img key={`${index}-${Math.random()}`} src={star_2}  alt="Votes"/>;
        }
      })}
    </div>
  );
}
