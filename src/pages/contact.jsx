import { useState } from 'react';
import './contact.css';
import { motion } from "framer-motion";
import { AUTH_API_BASE_URL } from "../config/api";

export default function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handlechange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${AUTH_API_BASE_URL}/api/v1/form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert(data.message || "Failed to submit form");
        return;
      }

      alert("Form submitted successfully");

      setformData({
        name: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error in sending form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container' id="contact">
        <h1>Contact Us</h1>
        <div className='Row'>
          <motion.div whileHover={{ scale: 1.1 }} className='scontainer'>
            <h4>Fill the Form</h4>
            <motion.input
              whileHover={{ scale: 1.1 }}
              type="text"
              name="name"
              placeholder='Full Name'
              value={formData.name}
              onChange={handlechange}
            />
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handlechange}
            />

            <input
              type="text"
              name="phone"
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handlechange}
            />

            <textarea
              name="description"
              value={formData.description}
              placeholder='Any Queries'
              onChange={handlechange}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="submit"
              className='btn1'
            >
              Submit
            </motion.button>
          </motion.div>

          <div className='ncontainer'>
            <h2 className="info-label">Phone Number</h2>
            <p className="info-value">+91 9036327418</p>
            <h2 className="info-label">Email</h2>
            <p className="info-value">Kirina@gmail.com</p>
            <h2 className="info-label">Location</h2>
            <p className="info-value">Kathmandu-34 , Nepal</p>
          </div>
        </div>
      </div>
    </form>
  );
}
