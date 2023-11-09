import React from 'react';
import cardContact from '../../assets/images/cardContact.jpg'
import Header from '../../components/Navbar/Header';
import MainFooter from '../../components/Footer/MainFooter';

const ContactUsPage = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="bg-gray-100">
        {/* Contact Form Section */}
        <section className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 shadow-lg rounded-lg relative">
              <img src={cardContact} alt="" />
              <div className=' absolute bottom-2 left-[30%] text-blue-600'>
                <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                <p>
                  You can contact us via email or phone. We are
                </p>
                <p>available during business hours.</p>
                <p className='font-semibold'>Email: contact@aamraInfotainment.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>

            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded"></textarea>
                </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* <MainFooter></MainFooter> */}
    </div>
  );
};

export default ContactUsPage;