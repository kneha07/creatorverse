import { Link } from 'react-router-dom';
import './CreatorCard.css';

function CreatorCard({ creator }) {
  return (
    <Link to={`/creator/${creator.id}`} className="creator-card">
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} className="creator-image" />
      )}
      <div className="creator-info">
        <h3>{creator.name}</h3>
        <p className="description">{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer" className="creator-link">
          Visit Channel →
        </a>
      </div>
    </Link>
  );
}

export default CreatorCard;
