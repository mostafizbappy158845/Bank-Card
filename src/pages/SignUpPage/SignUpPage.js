// SignupForm.js

import React, { useState } from 'react';

const SignUpPage= () =>{
  const initialFormData = {
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showCardSelection, setShowCardSelection] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedCardType, setSelectedCardType] = useState('');
  const [selectedCardCategory, setSelectedCardCategory] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBankSelection = (bank) => {
    setSelectedBank(bank);
  };

  const handleCardTypeSelection = (cardType) => {
    setSelectedCardType(cardType);
  };

  const handleCardCategorySelection = (cardCategory) => {
    setSelectedCardCategory(cardCategory);
  };

  const handleCardRestart = () => {
    setSelectedBank('');
    setSelectedCardType('');
    setSelectedCardCategory('');
    setShowCardSelection(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          {/* Add other input fields here */}
        </div>
        {showCardSelection ? (
          // Card selection section
          <>
            <div>
              {/* Bank selection dropdown */}
              <select
                onChange={(e) => handleBankSelection(e.target.value)}
                value={selectedBank}
              >
                <option value="">Select Bank</option>
                <option value="bank1">Bank 1</option>
                <option value="bank2">Bank 2</option>
                {/* Add more bank options */}
              </select>
            </div>
            {selectedBank && (
              <>
                {/* Card type selection dropdown */}
                <select
                  onChange={(e) => handleCardTypeSelection(e.target.value)}
                  value={selectedCardType}
                >
                  <option value="">Select Card Type</option>
                  <option value="atm">ATM</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>

                {selectedCardType && (
                  <>
                    {/* Card category selection dropdown */}
                    <select
                      onChange={(e) => handleCardCategorySelection(e.target.value)}
                      value={selectedCardCategory}
                    >
                      <option value="">Select Card Category</option>
                      <option value="platinum">Platinum</option>
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="classic">Classic</option>
                    </select>
                  </>
                )}
              </>
            )}
            <button
              type="button"
              onClick={handleCardRestart}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Other Card
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setShowCardSelection(true)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Select Card
          </button>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
