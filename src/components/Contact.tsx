import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validateForm = (): string => {
    if (formData.name.trim().length < 2) return 'Name must be at least 2 characters.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address.';
    if (formData.subject.trim().length < 3) return 'Subject must be at least 3 characters.';
    if (formData.message.trim().length < 10) return 'Message must be at least 10 characters.';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);
    setValidationError('');

    const error = validateForm();
    if (error) { setValidationError(error); return; }

    const now = Date.now();
    if (now - lastSubmitTime < 60000) {
      setValidationError('Please wait 60 seconds before sending another message.');
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).emailjs.send(
      'service_16cmnml',
      'template_xkitay2',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    ).then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }).catch(() => {
      setIsSubmitting(false);
      setIsError(true);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950/50 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-slate-900/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-slate-800/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="inline-block px-4 py-2 bg-slate-800/30 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium tracking-wider uppercase mb-6 hover-glow">
            Let's Connect
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 opacity-0 animate-bounce-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            GET IN<br />
            <span className="text-slate-400 font-light">TOUCH</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-8 opacity-0 animate-scale-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Ready to bring your vision to life? Let's discuss your next project and create something extraordinary together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10 opacity-0 animate-slide-in-left" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-wide hover-glow">
                LET'S CONNECT
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light hover-lift">
                I'm always interested in hearing about new opportunities and challenging projects. 
                Whether you need a <span className="text-gray-300">consultant</span>, <span className="text-gray-300">collaborator</span>, or <span className="text-gray-300">full-stack developer</span>, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              {[
                { 
                  icon: Mail, 
                  label: 'Email', 
                  value: 'imabdulsami.5@gmail.com', 
                  href: 'mailto:imabdulsami.5@gmail.com',
                  description: 'Best way to reach me'
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+92-34-29359557',
                  href: 'tel:+923429359557',
                  description: 'Available 9AM - 6PM PST'
                },
                { 
                  icon: MapPin, 
                  label: 'Location', 
                  value: 'Islamabad, PK', 
                  href: 'https://www.google.com/maps/place/Islamabad/@33.6161162,73.086108,11z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfd07891722f:0x6059515c3bdb02b6!8m2!3d33.699619!4d73.036187!16zL20vMGRoZDU?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D',
                  description: 'Open to remote work'
                }
              ].map((contact, index) => (
                <div key={index} className={`flex items-start space-x-5 group cursor-pointer hover-lift stagger-${index + 1}`}>
                  <div className="p-4 bg-gradient-to-br from-slate-900/50 to-slate-900/20 border border-slate-800/50 rounded-xl group-hover:from-slate-800/50 group-hover:to-slate-800/20 group-hover:border-slate-700/50 transition-all duration-300 hover-glow">
                    <contact.icon size={24} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider font-medium mb-1">{contact.label}</div>
                    <a
                      href={contact.href}
                      className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-medium block mb-1"
                    >
                      {contact.value}
                    </a>
                    <div className="text-gray-500 text-sm">{contact.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
              <h4 className="text-white font-bold mb-6 tracking-wider text-lg hover-glow">FOLLOW ME</h4>
              <div className="flex space-x-4 opacity-0 animate-slide-in-right" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
                {[
                  { icon: Github, href: 'https://github.com/abdulsami-1', label: 'GitHub', disabled: false },
                  { icon: Linkedin, href: 'https://linkedin.com/in/abdul-sami-582084298', label: 'LinkedIn', disabled: false },
                  { icon: Twitter, href: '#', label: 'Twitter', disabled: false }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 border border-slate-700/50 rounded-xl hover:border-slate-500/50 hover:bg-slate-800/30 transition-all duration-300 group backdrop-blur-sm hover-lift hover-glow stagger-${index + 1}`}
                    aria-label={social.label}
                    style={social.disabled ? { opacity: 0.4, pointerEvents: 'none', cursor: 'not-allowed' } : undefined}
                  >
                    <social.icon size={22} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Response Time */}
            <div className="p-6 bg-gradient-to-br from-slate-900/30 to-slate-900/10 border border-slate-800/50 rounded-xl backdrop-blur-sm hover-glow opacity-0 animate-bounce-in" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
              <div className="flex items-center space-x-3 mb-3">
                <Clock size={20} className="text-slate-400" />
                <h4 className="text-white font-semibold">My Approach</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                  I believe in <span className="text-white font-medium">transparent communication</span> and collaborative development. 
                  Every project starts with understanding your vision and ends with exceeding your expectations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative opacity-0 animate-slide-in-right" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
            <div className="bg-gradient-to-br from-slate-900/20 to-slate-900/5 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm hover-glow">
              <div className="flex items-center space-x-3 mb-8">
                <MessageCircle size={24} className="text-slate-400" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Send Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm font-semibold mb-3 tracking-wider uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="w-full px-5 py-4 bg-slate-900/30 border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:border-slate-500/50 focus:ring-2 focus:ring-slate-500/20 focus:bg-slate-900/50 transition-all duration-300 disabled:opacity-50 hover-glow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm font-semibold mb-3 tracking-wider uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="w-full px-5 py-4 bg-slate-900/30 border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:border-slate-500/50 focus:ring-2 focus:ring-slate-500/20 focus:bg-slate-900/50 transition-all duration-300 disabled:opacity-50 hover-glow"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm font-semibold mb-3 tracking-wider uppercase">
                    Project Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="w-full px-5 py-4 bg-slate-900/30 border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:border-slate-500/50 focus:ring-2 focus:ring-slate-500/20 focus:bg-slate-900/50 transition-all duration-300 disabled:opacity-50 hover-glow"
                    placeholder="Web Development Project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm font-semibold mb-3 tracking-wider uppercase">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="w-full px-5 py-4 bg-slate-900/30 border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:border-slate-500/50 focus:ring-2 focus:ring-slate-500/20 focus:bg-slate-900/50 transition-all duration-300 resize-none disabled:opacity-50 hover-glow"
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                  />
                </div>



                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full px-8 py-5 font-bold tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group hover-lift hover-glow ${
                    isSubmitted 
                      ? 'bg-green-600 text-white' 
                      : isSubmitting 
                        ? 'bg-slate-700 text-slate-300 cursor-not-allowed' 
                        : 'bg-white text-black hover:bg-slate-100'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>MESSAGE SENT!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <p className="text-green-400 text-sm text-center font-medium">
                    Message sent! I'll get back to you soon.
                  </p>
                )}
                {isError && (
                  <p className="text-red-400 text-sm text-center font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
                {validationError && (
                  <p className="text-red-400 text-sm text-center font-medium">
                    {validationError}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;