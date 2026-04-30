import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import './ShowCreators.css';

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('creators').select('*');
      if (error) throw error;
      setCreators(data || []);
    } catch (error) {
      console.error('Error fetching creators:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="show-creators">
      <div className="header">
        <h1>🌟 Creatorverse</h1>
        <p>Discover amazing content creators</p>
      </div>

      <Link to="/add" className="btn btn-primary">
        ➕ Add New Creator
      </Link>

      {loading ? (
        <p className="loading">Loading creators...</p>
      ) : creators.length === 0 ? (
        <p className="no-creators">
          No creators yet. <Link to="/add">Add your first creator!</Link>
        </p>
      ) : (
        <div className="creators-grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowCreators;
