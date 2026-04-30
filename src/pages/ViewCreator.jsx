import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './ViewCreator.css';

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreator();
  }, [id]);

  const fetchCreator = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (error) throw error;
      setCreator(data);
    } catch (error) {
      console.error('Error fetching creator:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      try {
        const { error } = await supabase.from('creators').delete().eq('id', id);
        if (error) throw error;
        navigate('/');
      } catch (error) {
        console.error('Error deleting creator:', error.message);
      }
    }
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (!creator) return <p className="error">Creator not found</p>;

  return (
    <div className="view-creator">
      <Link to="/" className="back-link">
        ← Back to Creators
      </Link>

      <div className="creator-details">
        {creator.imageURL && (
          <img src={creator.imageURL} alt={creator.name} className="creator-image" />
        )}

        <div className="creator-content">
          <h1>{creator.name}</h1>
          <p className="description">{creator.description}</p>

          <div className="creator-url">
            <strong>Channel:</strong>
            <a href={creator.url} target="_blank" rel="noopener noreferrer">
              {creator.url}
            </a>
          </div>

          <div className="actions">
            <Link to={`/edit/${creator.id}`} className="btn btn-secondary">
              ✏️ Edit
            </Link>
            <button onClick={handleDelete} className="btn btn-danger">
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCreator;
