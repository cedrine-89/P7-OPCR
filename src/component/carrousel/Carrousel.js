import './Carrousel.scss';

export default function Carrousel({ image, text }) {
  return <img src={image} alt={text} className="Carrousel" />;
}
