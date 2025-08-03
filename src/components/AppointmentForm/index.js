import { useState } from 'react';

import "./index.css"

const AppointmentForm = ({ doctor }) => {
  // Use the first available slot as default, if any
  const defaultSlot = doctor.availability?.[0] || '';
  const [formData, setFormData] = useState({ name: '', email: '', dateTime: defaultSlot });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would send formData to backend or show confirmation
    console.log('Appointment submitted:', { doctorId: doctor.id, ...formData });
    setSubmitted(true);
  };

  if (submitted) return (
    <div>
      <p className='message'>Appointment booked with {doctor.name} for {formData.dateTime}!</p>
    </div>
  );

  return (
    <div className='appointment-container'>
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      /><br />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br />
      {doctor.availability && doctor.availability.length > 0 ? (
        <select
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        >
          {doctor.availability.map((slot, idx) => (
            <option key={idx} value={slot}>{slot}</option>
          ))}
        </select>
      ) : (
        <input
          name="dateTime"
          type="datetime-local"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />
      )}
      <br />
      <button type="submit" className='button'>Book Appointment</button>
    </form>
    </div>
  );
};

export default AppointmentForm;