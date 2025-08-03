import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppointmentForm from '../AppointmentForm';

import "./index.css"
const DoctorProfile = () => {
  const { state } = useLocation();
  const doctor = state?.doctor;
  const [showForm, setShowForm] = useState(false);

  if (!doctor) return <p>No doctor data available.</p>;

  return (
    <div className='doctor-container'>
      <h1 className='heading'>{doctor.name}</h1>
      <p className='specify'>{doctor.specialization}</p>
      <img src={doctor.profileImage} alt={doctor.name} width="150" />
      <h1 className='status'>Availability:</h1>
      <p>{doctor.available ? "Available" : "Unavailable"}</p>
      {/* Only show button if doctor is available */}
      {doctor.available && !showForm && (
        <button className="button" onClick={() => setShowForm(true)}>
          Book Appointment
        </button>
      )}
      {showForm && <AppointmentForm doctor={doctor} />}
    </div>
  );
};

export default DoctorProfile;

