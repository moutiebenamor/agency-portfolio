import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@nexaflow.io',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'San Francisco, CA 94102',
      gradient: 'from-pink-500 to-orange-500',
    },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'Quick Response',
      description: 'We typically respond within 24 hours',
    },
    {
      icon: Clock,
      title: 'Free Consultation',
      description: 'Get expert advice at no cost',
    },
    {
      icon: Send,
      title: 'Easy Communication',
      description: 'Multiple ways to reach us',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Start a <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Conversation</span>
            </h1>
            <p className="text-xl text-white/70">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all text-center"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center`}>
                  <info.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-white/60">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In *
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#0a0a0f]">Select a service</option>
                      <option value="mobile" className="bg-[#0a0a0f]">Mobile App Development</option>
                      <option value="web" className="bg-[#0a0a0f]">Web Development</option>
                      <option value="design" className="bg-[#0a0a0f]">UI/UX Design</option>
                      <option value="ai" className="bg-[#0a0a0f]">AI Solutions</option>
                      <option value="marketing" className="bg-[#0a0a0f]">Marketing Automation</option>
                    </motion.select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitted}
                    className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitted ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-center"
                    >
                      Thank you! We'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
                <p className="text-white/60">
                  We're committed to delivering exceptional results and providing outstanding customer service throughout your entire project journey.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-white/60">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prefer to Talk Directly?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Schedule a free consultation call with our team to discuss your project in detail.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-colors text-lg font-semibold"
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
