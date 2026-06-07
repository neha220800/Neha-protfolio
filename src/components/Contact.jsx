import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Card } from './UI/Card';
import { Button } from './UI/Button';
import { Reveal } from './UI/Reveal';

// Initialize EmailJS with your public key
emailjs.init('fVZqq_Oq4-X6jfzvK');

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_pxtd2le',          // Service ID
        'template_pm77pde',         // Template ID
        {
          to_email: 'adhyagupta28@gmail.com',
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }
      );

      setLoading(false);
      setSubmitted(true);
      
      // Trigger premium themed confetti
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#AA7C11', '#F3E5AB', '#0A192F', '#112240']
      });

      // Reset form
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setLoading(false);
      console.error('EmailJS Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-navy-primary/10">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 gold-glow-spot rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 navy-glow-spot rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <p className="text-gold-primary text-xs uppercase tracking-widest font-semibold mb-2">07. Connection</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-bright font-serif">Get In Touch</h2>
          <div className="w-16 h-[2px] bg-gold-primary mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-bold text-slate-bright font-serif mb-4">
                Let's discuss opportunities.
              </h3>
              <p className="text-slate-muted text-sm md:text-base leading-relaxed mb-6">
                I am actively seeking software development internships, co-ops, and entry-level developer positions. If you have a question, a project opportunity, or just want to say hi, feel free to reach out. I will do my best to get back to you as soon as possible!
              </p>
            </Reveal>

            <div className="space-y-6">
              {/* Phone */}
              <Reveal delay={0.2}>
                <a 
                  href="tel:8002451128" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-navy-light/40 border border-gold-primary/5 hover:border-gold-primary/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-gold-primary/10 text-gold-primary border border-gold-primary/20 group-hover:bg-gold-primary group-hover:text-navy-deep transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-muted font-bold">Call Me</span>
                    <span className="text-slate-bright font-semibold text-sm md:text-base tracking-wide group-hover:text-gold-primary transition-colors">
                      +91 8002451128
                    </span>
                  </div>
                </a>
              </Reveal>

              {/* Email */}
              <Reveal delay={0.3}>
                <a 
                  href="mailto:adhyagupta28@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-navy-light/40 border border-gold-primary/5 hover:border-gold-primary/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-gold-primary/10 text-gold-primary border border-gold-primary/20 group-hover:bg-gold-primary group-hover:text-navy-deep transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-muted font-bold">Email Me</span>
                    <span className="text-slate-bright font-semibold text-sm md:text-base tracking-wide group-hover:text-gold-primary transition-colors break-all">
                      adhyagupta28@gmail.com
                    </span>
                  </div>
                </a>
              </Reveal>

              {/* LinkedIn */}
              <Reveal delay={0.4}>
                <a 
                  href="https://linkedin.com/in/neha-kumari-5bb2aa326" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-navy-light/40 border border-gold-primary/5 hover:border-gold-primary/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-gold-primary/10 text-gold-primary border border-gold-primary/20 group-hover:bg-gold-primary group-hover:text-navy-deep transition-all duration-300">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-muted font-bold">Connect on LinkedIn</span>
                    <span className="text-slate-bright font-semibold text-sm md:text-base tracking-wide group-hover:text-gold-primary transition-colors break-all">
                      neha-kumari-5bb2aa326
                    </span>
                  </div>
                </a>
              </Reveal>

              {/* Location */}
              <Reveal delay={0.5}>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-navy-light/40 border border-gold-primary/5">
                  <div className="p-3 rounded-full bg-gold-primary/10 text-gold-primary border border-gold-primary/20">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-muted font-bold">Location</span>
                    <span className="text-slate-bright font-semibold text-sm md:text-base tracking-wide">
                      Ranchi, Jharkhand, India
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-navy-deep border border-gold-primary/10 focus:border-gold-primary rounded-md px-4 py-3 text-slate-light text-sm outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.15)]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-navy-deep border border-gold-primary/10 focus:border-gold-primary rounded-md px-4 py-3 text-slate-light text-sm outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.15)]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full bg-navy-deep border border-gold-primary/10 focus:border-gold-primary rounded-md px-4 py-3 text-slate-light text-sm outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(212,175,55,0.15)]"
                      placeholder="Opportunities, Collaboration, etc."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-navy-deep border border-gold-primary/10 focus:border-gold-primary rounded-md px-4 py-3 text-slate-light text-sm outline-none transition-all duration-300 resize-none focus:shadow-[0_0_10px_rgba(212,175,55,0.15)]"
                      placeholder="Hi Neha, I would like to discuss..."
                    />
                  </div>

                  {/* Success Alert */}
                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded bg-gold-primary/10 border border-gold-primary/30 text-gold-primary text-sm font-semibold"
                    >
                      <CheckCircle2 size={18} />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    className="w-full py-3.5"
                    disabled={loading}
                    icon={Send}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>

                </form>
              </Card>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
