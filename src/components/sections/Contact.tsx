import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, MapPin, Send, Linkedin, Phone, Github, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalStatus, setModalStatus] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const endpoint = 'https://formsubmit.co/ajax/rutulsuthar2018@gmail.com';
    const formData = new FormData();
    const senderName = formState.name || 'Friend';
    const senderEmail = formState.email;
    const previewText = formState.message.length > 80 ? `${formState.message.slice(0, 80)}...` : formState.message;

    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('message', formState.message);
    formData.append('Message Status', `✅ Message Received!\n\nThank you for reaching out, ${senderName}. I have received your message and will get back to you shortly.\n\nYour message preview:\n${previewText}`);
    formData.append('Reply Details', `Subject: ${formState.name ? `${formState.name} says hello` : 'New message from contact form'}\nFrom: ${senderEmail}\n\nMessage:\n${formState.message}`);
    formData.append('_replyto', senderEmail);
    formData.append('_cc', senderEmail);
    formData.append('_subject', `New message from ${senderName} via portfolio contact form`);
    formData.append('_template', 'basic');
    formData.append('_autoresponse', `✅ Message Received!\n\nHi ${senderName},\n\nThank you for getting in touch. I’ve received your message and will respond as soon as possible.\n\nYour message:\n${formState.message}\n\nWarm regards,\nRutul Suthar\nSoftware Developer`);
    formData.append('_captcha', 'false');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      let data: any = undefined;
      try {
        data = await response.json();
      } catch {
        data = undefined;
      }

      if (!response.ok || data?.success === false) {
        throw new Error('Failed to send your message.');
      }

      setModalStatus('success');
      setModalTitle('Message sent successfully');
      setModalDescription(
        `Thanks ${formState.name || 'there'}! Your message has been delivered to rutulsuthar2018@gmail.com. A confirmation copy was sent to ${formState.email}.`,
      );
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setModalStatus('error');
      setModalTitle('Unable to send mail');
      setModalDescription(
        'Something went wrong while sending your message. Please try again, or email directly to rutulsuthar2018@gmail.com.',
      );
    } finally {
      setModalOpen(true);
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Replace with your actual LinkedIn URL
  const linkedInUrl = 'https://linkedin.com/in/Rutul Suthar';

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="section-container relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className={`text-primary font-mono text-sm mb-4 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            // Get In Touch
          </span>
          <h2 
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p 
            className={`section-subtitle max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a href="mailto:rutulsuthar2018@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    rutulsuthar2018@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-foreground">Ahmedabad, Gujarat</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <a href="tel:+91-8866223865" className="text-foreground hover:text-primary transition-colors">
                    +91-8866223865
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Github className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">GitHub</p>
                  <a href="https://github.com/Rutul5440" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    github.com/Rutul5440
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Button */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0A66C2]/30"
            >
              <Linkedin size={22} />
              <span>Connect on LinkedIn</span>
            </a>

            {/* Decorative card */}
            <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-glow-secondary/10 border border-primary/20">
              <p className="text-foreground font-medium mb-2">Available for freelance work</p>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects. 
                Let's discuss how I can help bring your vision to life.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Rutul Suthar"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="abc@gmail.com"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} />
                </button>
              </div>
            </form>

            {modalOpen ? (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
                <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#0B1324] p-8 shadow-2xl shadow-primary/20">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-white shadow-lg shadow-primary/30">
                      {modalStatus === 'success' ? (
                        <CheckCircle className="h-10 w-10" />
                      ) : (
                        <XCircle className="h-10 w-10" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white">{modalTitle}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {modalDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                      onClick={() => setModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
