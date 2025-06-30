// import Contact from '../models/Contact.js';

// export const handleContactForm = async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, message: 'All fields are required.' });
//   }

//   try {
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({
//       success: true,
//       message: 'Message received and saved!',
//       data: newContact,
//     });
//   } catch (error) {
//     console.error('Error saving message:', error);
//     res.status(500).json({ success: false, message: 'Server error. Please try again.' });
//   }
// };



// controllers/contactController.js



// controllers/contactController.js
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  try {
    // 1. Save to DB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // 2. Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nomiuttra4596@gmail.com',
        pass: 'saexrvurqjjvhajy',
      }
    });

    await transporter.sendMail({
      from: email,
      to: 'nomiuttra4596@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
  console.error('Detailed error:', error.message, error.stack);
    res.status(500).json({ error: 'Failed to send message. Try again later.' });
  }
};
