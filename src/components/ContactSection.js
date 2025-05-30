import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Paperclip, AlertCircle, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Failed to parse error response.' }));
        setSubmissionStatus('error');
        console.error('Submission error:', errorData.message || 'Failed to send message.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Network error:', error);
    }
    setIsSubmitting(false);
  };

  const inputClass = (hasError) => 
    `w-full p-3 bg-white border rounded-md focus:ring-2 focus:ring-hueneu-accent focus:border-hueneu-accent outline-none transition-colors duration-300 placeholder-hueneu-primary/60 text-hueneu-dark-text ${hasError ? 'border-hueneu-error' : 'border-hueneu-primary/40'}`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-hueneu-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-display font-bold text-hueneu-primary text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Work Together
        </motion.h2>

        <motion.div 
          className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Decorative element like a paperclip or stamp */}
          <Paperclip className="absolute top-4 right-4 w-8 h-8 text-neutral-300 transform -rotate-45 opacity-75" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-hueneu-secondary-text mb-1">Your Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inputClass(errors.name)} placeholder="What should we call you?" autoComplete="name" />
              {errors.name && <p className="text-hueneu-error text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-hueneu-secondary-text mb-1">Your Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputClass(errors.email)} placeholder="Where can we reach you?" autoComplete="email" />
              {errors.email && <p className="text-hueneu-error text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-hueneu-secondary-text mb-1">Your Story (or project idea!)</label>
              <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} className={inputClass(errors.message)} placeholder="Tell us about your vision..."></textarea>
              {errors.message && <p className="text-hueneu-error text-xs mt-1">{errors.message}</p>}
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-8 py-3 bg-hueneu-accent text-white font-semibold rounded-md hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-hueneu-accent focus:ring-offset-2 focus:ring-offset-white group flex items-center justify-center mx-auto disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Let&apos;s design your story <Send className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>

          {submissionStatus === 'success' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mt-6 p-4 bg-hueneu-success/10 border border-hueneu-success/30 rounded-md text-hueneu-success flex items-center">
              <CheckCircle2 className="w-6 h-6 mr-3 text-hueneu-success" /> Your message has been sent! We&apos;ll be in touch soon.
            </motion.div>
          )}
          {submissionStatus === 'error' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mt-6 p-4 bg-hueneu-error/10 border border-hueneu-error/30 rounded-md text-hueneu-error flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-hueneu-error" /> Oops! Something went wrong. Please try again.
            </motion.div>
          )}

        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-hueneu-secondary-text font-sans mb-3">Find more inspiration & behind the scenes:</p>
          <a 
            href="https://www.instagram.com/hueneu_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-hueneu-primary hover:text-hueneu-accent font-semibold transition-colors duration-300 group text-lg no-underline hover:underline"
          >
            <Instagram className="w-6 h-6 mr-2" /> @hueneu_
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
