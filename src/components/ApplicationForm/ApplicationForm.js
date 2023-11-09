import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!formData.resume) {
      validationErrors.resume = 'Resume is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Perform the submission logic here (e.g., send data to a server)
      setIsSubmitted(true);
      console.log('Form data submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="bg-gray-100  py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Job Application</h1>
          <div className='flex items-center justify-center'>
            <form className="bg-white p-4 rounded-lg shadow-md ">
              <div className="mb-4 ">
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input w-full h-12 border border-slate-200 rounded-sm outline-none ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input w-full h-12 border border-slate-200 rounded-sm outline-none ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              {/* <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
              </div> */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Resume</label>
                <input
                  type="file"
                  name="resume"
                  required
                  onChange={handleChange}
                  className={`form-input ${errors.resume ? 'border-red-500' : ''}`}
                />
                {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  required
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="form-textarea  w-full h-28 border border-slate-200 rounded-sm outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit Application
              </button>
              {isSubmitted && (
                <p className="text-green-500 mt-2">Application submitted successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;