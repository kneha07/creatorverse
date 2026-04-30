import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';
import './EditCreator.css';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCreator();
  }, [id]);

  const fetchCreator = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      if (fetchError) throw fetchError;
      setFormData(data);
    } catch (err) {
      console.error('Error fetching creator:', err.message);
      setError('Failed to load creator');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.url || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setSubmitting(true);
      const { error: updateError } = await supabase
        .from('creators')
        .update(formData)
        .eq('id', id);
      if (updateError) throw updateError;
      navigate(`/creator/${id}`);
    } catch (err) {
      console.error('Error updating creator:', err.message);
      setError('Failed to update creator. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="edit-creator">
      <Link to={`/creator/${id}`} className="back-link">
        ← Back to Creator
      </Link>

      <h1>Edit Creator</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="name">Creator Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">Channel URL *</label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="imageURL">Image URL (Optional)</label>
          <input
            type="url"
            id="imageURL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Saving...' : '💾 Save Changes'}
        </button>
      </form>
    </div>
  );
}

export default EditCreator;
