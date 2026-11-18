import React, { useState } from 'react';

function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      setSubmittedMessage(formData);
      setIsSubmitted(true);
      setShowForm(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <h2>Form with Message</h2>
      {!showForm ? (
        <button onClick={handleButtonClick} disabled={isSubmitted}>
          {isSubmitted ? 'Review Submitted' : 'Click Here'}
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select id="rating" name="rating" value={formData.rating} onChange={handleChange}>
              <option value="0">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit" disabled={isSubmitted}>Submit</button>
        </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>Name: {submittedMessage.name}</p>
          <p>Review: {submittedMessage.review}</p>
          <p>Rating: {submittedMessage.rating}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
