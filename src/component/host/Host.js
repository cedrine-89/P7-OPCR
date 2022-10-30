import './Host.scss';

export default function Host({ host }) {
  return (
    <div className="Host">
      <span className="Host_Name">{host.name}</span>
      <div className="Host_Image">
        <img src={host.picture} alt={host.name} />
      </div>
    </div>
  );
}
