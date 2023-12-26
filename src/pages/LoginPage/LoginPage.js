import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import './App.css'; // Import your Tailwind CSS styles

const Loginpage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    date: '',
    gender: '',
    showPassword: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleTogglePassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous errors
    setErrors({});

    // Performing validation checks
    if (formData.fullname === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullname: 'Enter your name',
      }));
    }
    if (!emailPattern.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Enter a valid email address',
      }));
    }
    if (formData.password === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Enter your password',
      }));
    }
    if (formData.date === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: 'Select your date of birth',
      }));
    }
    if (formData.gender === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: 'Select your gender',
      }));
    }

    // Checking for any remaining errors before form submission
    if (Object.keys(errors).length === 0) {
      // You can add your form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form className="p-8 bg-white max-w-md w-full rounded-lg shadow-md" onSubmit={handleFormSubmit}>
        {/* <h2 className="text-2xl text-center mb-6 underline underline-offset-8">LogIn</h2> */}
        {/* <div className="form-group mb-6">
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">
              Name
              </label>
              <input
                type="text"
                id="fullname"
                className={`input-field ${errors.fullname && 'border-red-500'}`}
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={handleInputChange}
              />
              {errors.fullname && <small className="text-red-500">{errors.fullname}</small>}
            </div> */}
        <div className="form-group mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className={`input-field ${errors.email && 'border-red-500'}`}
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <small className="text-red-500">{errors.email}</small>}
        </div>
        <div className="form-group mb-6 relative ">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>

          <input
            type={formData.showPassword ? 'text' : 'password'}
            id="password"
            className={`input-field ${errors.password && 'border-red-500'}`}
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}

          />
          <i
            className='fa-eye'
            onClick={handleTogglePassword}
          > {formData.showPassword ? <FaEye /> : <FaEyeSlash />}</i>

          {errors.password && <small className="text-red-500">{errors.password}</small>}
        </div>
        {/* <div className="form-group mb-6">
              <label htmlFor="date" className="block text-sm font-medium text-gray-600">
                Birth Date
              </label>
              <input
                type="date"
                id="date"
                className={`input-field ${errors.date && 'border-red-500'}`}
                placeholder="Select your date"
                value={formData.date}
                onChange={handleInputChange}
              />
              {errors.date && <small className="text-red-500">{errors.date}</small>}
            </div> */}
        {/* <div className="form-group mb-6">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
                Gender
              </label>
              <select
                id="gender"
                className={`input-field ${errors.gender && 'border-red-500'}`}
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <small className="text-red-500">{errors.gender}</small>}
            </div> */}
        <div className="form-group">
          <button type="submit" className=" py-2 border border-slate-300 hover:border-indigo-500 w-full">
            LogIn
          </button>
        </div>
        <div>
          <Link to='/signup'>Need an account? <span className='text-blue-600'>Sign up</span></Link>
        </div>
      </form>
    </div>
  );
};

export default Loginpage;
