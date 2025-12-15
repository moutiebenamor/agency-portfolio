import { motion } from 'motion/react';
import { Smartphone, Globe, Palette, Brain, Zap, TrendingUp, Code, Rocket, Users, Target, BarChart3, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Create powerful, native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android Development', 'React Native & Flutter', 'App Store Optimization', 'Push Notifications'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build scalable, high-performance websites and web applications with modern technologies.',
      features: ['React & Next.js', 'E-commerce Solutions', 'API Development', 'Cloud Deployment'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design beautiful, intuitive interfaces that users love and convert visitors into customers.',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Implement intelligent systems powered by machine learning and artificial intelligence.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Streamline your marketing efforts with powerful automation tools and strategies.',
      features: ['Email Automation', 'Lead Generation', 'CRM Integration', 'Analytics & Reporting'],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description: 'Data-driven strategies that align with your business goals and drive sustainable growth.',
      features: ['Market Analysis', 'Competitive Research', 'Growth Planning', 'Performance Tracking'],
      gradient: 'from-green-500 to-cyan-500',
    },
  ];

  const benefits = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring timely project completion',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Experienced professionals committed to your success',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Solutions designed to achieve your specific business objectives',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Decisions backed by analytics and performance metrics',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and robust infrastructure',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What We Offer
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-white/70">
              Comprehensive digital solutions designed to elevate your business and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="h-full p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center gap-3 text-white/60"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-8 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">NexaFlow</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-colors"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
