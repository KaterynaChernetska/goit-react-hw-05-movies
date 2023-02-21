import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Form = ({ handleFormSubmit }) => {
  const [searchParams] = useSearchParams();
  const searchMovie = searchParams.get('title');
  const [searchQuery, setSearchQuery] = useState(searchMovie ?? '');

  const handleInput = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleFormSubmit(searchQuery);
  };
  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name"
          name="title"
          value={searchQuery}
          onChange={handleInput}
        />
        <button>Search</button>
      </form>
    </div>
  );
};
Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
