import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming some validation here before setting submitted to true
    setSubmitted(true);
  };

  return (
    <div>
      <main>
        <h1>Hi, I'm Peter</h1>
        <img alt="My profile pic" src="https://via.placeholder.com/350" />
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <div>
          <a href="https://github.com">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
        <h1>Newsletter Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="interest1">Interest 1</label>
            <input type="checkbox" id="interest1" name="interest1" checked={interests.interest1} onChange={handleCheckboxChange} />
          </div>
          <div>
            <label htmlFor="interest2">Interest 2</label>
            <input type="checkbox" id="interest2" name="interest2" checked={interests.interest2} onChange={handleCheckboxChange} />
          </div>
          <div>
            <label htmlFor="interest3">Interest 3</label>
            <input type="checkbox" id="interest3" name="interest3" checked={interests.interest3} onChange={handleCheckboxChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
        {submitted && (
          <p>Thank you, {name}! Your submission has been received.</p>
        )}
      </main>
    </div>
  );
}

export default App;
