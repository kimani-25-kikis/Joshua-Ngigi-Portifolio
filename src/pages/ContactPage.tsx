// src/pages/ContactPage.tsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle, FaMapMarkerAlt, FaUser, FaCommentAlt } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';

// Type safe environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Fallback to direct email if EmailJS is not configured
      const serviceId = EMAILJS_SERVICE_ID || '';
      const templateId = EMAILJS_TEMPLATE_ID || '';
      const publicKey = EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: Open user's email client
        const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.open(`mailto:kimanikikis@gmail.com?subject=${subject}&body=${body}`);
      } else {
        // Send via EmailJS
        emailjs.init(publicKey);
        await emailjs.send(serviceId, templateId, {
          to_email: 'kimanikikis@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        });
      }
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-orange-500" size={24} />,
      title: "Email",
      value: "kimanikikis@gmail.com",
      link: "mailto:kimanikikis@gmail.com",
      color: "from-orange-100 to-orange-50"
    },
    {
      icon: <FaPhone className="text-blue-500" size={24} />,
      title: "Phone",
      value: "+254 797 390 822",
      link: "tel:+254797390822",
      color: "from-blue-100 to-blue-50"
    },
    {
      icon: <FaGithub className="text-navy-700" size={24} />,
      title: "GitHub",
      value: "@kimani-25-kikis",
      link: "https://github.com/kimani-25-kikis",
      color: "from-navy-100 to-navy-50"
    },
    {
      icon: <FaLinkedin className="text-blue-600" size={24} />,
      title: "LinkedIn",
      value: "Joshua Ngigi",
      link: "https://linkedin.com/in/joshua-ngigi-1a651138b",
      color: "from-blue-100 to-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-navy-50/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl mb-6">
            <SiMinutemailer className="text-orange-500 text-4xl" />
          </div>
          <h1 className="text-5xl font-bold text-navy-900 mb-4">
            Let's <span className="text-orange-500">Connect</span>
          </h1>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === 'GitHub' || info.title === 'LinkedIn' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-br ${info.color} rounded-2xl p-6 border border-navy-100 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-navy-700 font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-navy-100 border-dashed">
                    <span className="text-sm text-navy-500 group-hover:text-orange-500 transition-colors">
                      Click to {info.title === 'Email' ? 'send email' : info.title === 'Phone' ? 'call' : 'visit'}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map/Location Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-6 border border-navy-100 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FaMapMarkerAlt className="text-orange-500" size={20} />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Location</h3>
              </div>
              <div className="space-y-3">
                <p className="text-navy-700 flex items-center gap-2">
                  <span className="font-semibold">📍</span> Embu, Kenya
                </p>
                <p className="text-navy-700 flex items-center gap-2">
                  <span className="font-semibold">🌍</span> Open to Remote Work & Relocation
                </p>
                <p className="text-navy-700 flex items-center gap-2">
                  <span className="font-semibold">⏰</span> Available: 9:00 AM - 6:00 PM EAT
                </p>
              </div>
            </motion.div>

            {/* Quick Response Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 bg-white rounded-xl border border-navy-100 shadow-sm">
                <div className="text-2xl font-bold text-orange-500 mb-1">24h</div>
                <div className="text-sm text-navy-600">Response Time</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-navy-100 shadow-sm">
                <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
                <div className="text-sm text-navy-600">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-navy-100 shadow-sm">
                <div className="text-2xl font-bold text-orange-500 mb-1">∞</div>
                <div className="text-sm text-navy-600">Availability</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3">
                  <FaCheckCircle size={20} />
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
              </motion.div>
            )}

            <div className="bg-white rounded-3xl shadow-2xl border border-navy-100 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                  <FaPaperPlane className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Send Me a Message</h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label className="flex items-center gap-2 text-navy-700 font-medium mb-2">
                    <FaUser size={14} />
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-navy-50 border-2 border-navy-100 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-focus-within:border-orange-300 rounded-xl pointer-events-none transition-all duration-300" />
                  </div>
                </div>

                {/* Email Input */}
                <div className="group">
                  <label className="flex items-center gap-2 text-navy-700 font-medium mb-2">
                    <FaEnvelope size={14} />
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-navy-50 border-2 border-navy-100 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-focus-within:border-orange-300 rounded-xl pointer-events-none transition-all duration-300" />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="group">
                  <label className="flex items-center gap-2 text-navy-700 font-medium mb-2">
                    <FaCommentAlt size={14} />
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 bg-navy-50 border-2 border-navy-100 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-focus-within:border-orange-300 rounded-xl pointer-events-none transition-all duration-300" />
                  </div>
                </div>

                {/* Message Input */}
                <div className="group">
                  <label className="flex items-center gap-2 text-navy-700 font-medium mb-2">
                    <FaCommentAlt size={14} />
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-navy-50 border-2 border-navy-100 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none resize-none transition-all duration-300"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-focus-within:border-orange-300 rounded-xl pointer-events-none transition-all duration-300" />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-center text-navy-500 text-sm">
                  Your information is secure. I'll never share your details.
                </p>
              </form>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-orange-600/5 rounded-full blur-2xl -z-10"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-navy-400/5 to-navy-600/10 rounded-full blur-2xl -z-10"
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-navy-900 mb-3">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
              Whether it's a web application, AI solution, or cloud infrastructure, 
              I'm ready to help bring your vision to reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kimanikikis@gmail.com"
                className="px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-orange-500 transition-all duration-300"
              >
                Email Me Directly
              </a>
              <a
                href="tel:+254797390822"
                className="px-6 py-3 bg-white text-navy-700 border-2 border-navy-200 font-semibold rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;