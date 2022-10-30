import './Banner.scss';

export default function Banner({ image, text }) {
  return (
    <section className="Banner">
      <div>
        <img src={image} alt={text} />
        <h1>{text}</h1>
      </div>
    </section>
  );
}
