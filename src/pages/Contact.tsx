import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername'
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'yourwebsite.com',
      link: 'https://yourwebsite.com'
    }
  ];

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM PST' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <div className="page contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Let's discuss your next project or opportunity</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-section">
              <h3>Availability</h3>
              <div className="availability-list">
                {availability.map((item, index) => (
                  <div key={index} className="availability-item">
                    <span className="day">{item.day}</span>
                    <span className="time">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="response-time">
              <h3>Response Time</h3>
              <p>I typically respond to emails within 24 hours during business days.</p>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="btn-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What types of projects do you work on?</h3>
              <p>I specialize in web applications, mobile apps, and backend systems. I work with both startups and established companies on projects ranging from simple websites to complex enterprise applications.</p>
            </div>
            <div className="faq-item">
              <h3>What is your typical project timeline?</h3>
              <p>Project timelines vary depending on complexity. Simple projects can take 2-4 weeks, while complex applications may take 2-6 months. I always provide detailed timelines during the planning phase.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes, I offer ongoing support and maintenance packages. This includes bug fixes, updates, security patches, and feature additions based on your needs.</p>
            </div>
            <div className="faq-item">
              <h3>What is your communication style?</h3>
              <p>I believe in transparent and frequent communication. I provide regular updates, use project management tools for collaboration, and am always available for questions and feedback.</p>
            </div>
          </div>
        </section>

        <section className="collaboration-section">
          <h2>Let's Collaborate</h2>
          <div className="collaboration-content">
            <p>
              I'm always interested in new opportunities and exciting projects. Whether you need a developer for a specific project, 
              want to discuss potential collaboration, or just want to connect, feel free to reach out.
            </p>
            <div className="collaboration-types">
              <div className="collab-type">
                <h3>Full-Time Positions</h3>
                <p>Looking for senior developer roles in innovative companies</p>
              </div>
              <div className="collab-type">
                <h3>Contract Work</h3>
                <p>Available for project-based work and consulting</p>
              </div>
              <div className="collab-type">
                <h3>Open Source</h3>
                <p>Always interested in contributing to meaningful projects</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
