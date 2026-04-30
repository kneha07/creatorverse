import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';
import './AddCreator.css';

function AddCreator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      setLoading(true);
      const { data, error: insertError } = await supabase.from('creators').insert([formData]);
      if (insertError) throw insertError;
      console.log('Insert success:', data);
      navigate('/');
    } catch (err) {
      console.error('Error adding creator:', err);
      setError(`Failed to add creator: ${err.message || err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-creator">
      <Link to="/" className="back-link">
        ← Back to Creators
      </Link>

      <h1>Add New Creator</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-group">
          <label htmlFor="name">Creator Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Linus Tech Tips"
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
            placeholder="e.g., https://www.youtube.com/@LinusTechTips"
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
            placeholder="What makes this creator special?"
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
            placeholder="e.g., https://example.com/image.jpg"
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adding...' : '✅ Add Creator'}
        </button>
      </form>
    </div>
  );
}

export default AddCreator;
