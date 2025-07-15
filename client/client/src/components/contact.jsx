// import React from 'react'
// import '../styles/contact.css'
// function contact() {
//     return (
//         <section className='contact-section'>
//             <div className="contact-container">
//                 <h3 className='section-title'>Get in Touch</h3>
//                 <p className='tag'>Let's work together — feel free to reach out!</p>
//                 <form className='contact-form'>
//                         <input type='text' placeholder='Your Name' required />
                       
                   
//                      <input type='text' placeholder='Your Email' required />
//                    <textarea type='text' placeholder='Your Message' rows={6}/>

//                     <button type="submit" className="contact-button">Send Message</button>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default contact


// import React, { useState } from 'react';
// import '../styles/contact.css';
// import axios from 'axios';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     try {
//      const res = await fetch('/api/contact', {

//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const result = await res.json();

//       if (res.ok) {
//         setStatus('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setStatus(result.message || 'Something went wrong.');
//       }
//     } catch (err) {
//       console.error('Error submitting contact form:', err);
//       setStatus('Failed to send message. Try again later.');
//     }
//   };

//   return (
//     <section className='contact-section'>
//       <div className="contact-container">
//         <h3 className='section-title'>Get in Touch</h3>
//         <p className='tag'>Let's work together — feel free to reach out!</p>

//         <form className='contact-form' onSubmit={handleSubmit}>
//           <input
//             type='text'
//             name='name'
//             placeholder='Your Name'
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type='email'
//             name='email'
//             placeholder='Your Email'
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <textarea
//             name='message'
//             placeholder='Your Message'
//             rows={6}
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="contact-button">Send Message</button>
//         </form>

//         {status && (
//           <p className="contact-status" style={{ marginTop: '12px', color: '#16f9e6' }}>
//             {status}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import '../styles/contact.css';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch(
        // ✅ Updated this line to your deployed backend URL
        'https://personal-portfolio-production-dd73.up.railway.app/api/contact', 
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      );

      const result = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.message || 'Something went wrong.');
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <section className='contact-section'>
      <div className="contact-container">
        <h3 className='section-title'>Get in Touch</h3>
        <p className='tag'>Let's work together — feel free to reach out!</p>

        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name='message'
            placeholder='Your Message'
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {status && (
          <p className="contact-status" style={{ marginTop: '12px', color: '#16f9e6' }}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
