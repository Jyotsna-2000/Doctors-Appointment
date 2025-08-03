import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const doctors=[
  {
    "id": "1",
    "name": "Dr. Aisha Verma",
    "specialization": "Cardiologist",
    "profileImage": "/images/aisha_verma.jpg",
    "available": true,
    "details": "Expert in interventional cardiology with 10+ years experience.",
    "email": "aisha.verma@hospital.com"
  },
  {
    "id": "2",
    "name": "Dr. Rohan Mehta",
    "specialization": "Dermatologist",
    "profileImage": "/images/rohan_mehta.jpg",
    "available": false,
    "details": "Specializes in acne treatment and skin surgery.",
    "email": "rohan.mehta@hospital.com"
  },
  {
    "id": "3",
    "name": "Dr. Neha Kapoor",
    "specialization": "Pediatrician",
    "profileImage": "/images/neha_kapoor.jpg",
    "available": true,
    "details": "Over 12 years treating children and adolescents.",
    "email": "neha.kapoor@hospital.com"
  },
  {
    "id": "4",
    "name": "Dr. Arjun Malhotra",
    "specialization": "Neurologist",
    "profileImage": "/images/arjun_malhotra.jpg",
    "available": true,
    "details": "Treats neurological disorders and chronic migraines.",
    "email": "arjun.malhotra@hospital.com"
  },
  {
    "id": "5",
    "name": "Dr. Meera Singh",
    "specialization": "Gynecologist",
    "profileImage": "/images/meera_singh.jpg",
    "available": false,
    "details": "Specialist in women's health and prenatal care.",
    "email": "meera.singh@hospital.com"
  },
  {
    "id": "6",
    "name": "Dr. Kunal Shah",
    "specialization": "Orthopedic Surgeon",
    "profileImage": "/images/kunal_shah.jpg",
    "available": true,
    "details": "Performs joint replacements and fracture treatments.",
    "email": "kunal.shah@hospital.com"
  },
  {
    "id": "7",
    "name": "Dr. Priya Nair",
    "specialization": "Psychiatrist",
    "profileImage": "/images/priya_nair.jpg",
    "available": false,
    "details": "Mental health specialist with holistic therapy methods.",
    "email": "priya.nair@hospital.com"
  },
  {
    "id": "8",
    "name": "Dr. Siddharth Joshi",
    "specialization": "ENT Specialist",
    "profileImage": "/images/siddharth_joshi.jpg",
    "available": true,
    "details": "Deals with ear, nose, and throat issues in adults and kids.",
    "email": "siddharth.joshi@hospital.com"
  },
  {
    "id": "9",
    "name": "Dr. Ritu Sharma",
    "specialization": "General Physician",
    "profileImage": "/images/ritu_sharma.jpg",
    "available": true,
    "details": "Family physician offering general health care.",
    "email": "ritu.sharma@hospital.com"
  },
]


class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="main-heading">Doctors List</h1>
        <div className="container">
        {doctors.map(doctor => (
          <div key={doctor.id} style={{ marginBottom: '20px' }}>
            <img src={doctor.profileImage} alt={doctor.name} width="100" />
            <h1 className="heading">{doctor.name}</h1>
            <p className="specify">{doctor.specialization}</p>
            <Link to={`/doctor/${doctor.id}`} state={{ doctor }}>
              <button className="view">View Profile</button>
            </Link>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default Home;