import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'mobile', 'web', 'design', 'ai'];

  const projects = [
    {
      title: 'HealthTrack Pro',
      category: 'mobile',
      description: 'AI-powered fitness and wellness tracking mobile app with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NzE5MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'AI/ML', 'Health Tech'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'TechCommerce',
      category: 'web',
      description: 'Modern e-commerce platform with advanced analytics and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY1NzQ3OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'Stripe', 'E-commerce'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'DesignFlow Studio',
      category: 'design',
      description: 'Complete design system and UI kit for modern SaaS applications.',
      image: 'https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NTc4NDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Figma', 'Design System', 'UI/UX'],
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      title: 'SmartAnalytics AI',
      category: 'ai',
      description: 'Advanced analytics platform powered by machine learning for predictive insights.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1ODI0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'TensorFlow', 'Analytics'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Foodie Delivery',
      category: 'mobile',
      description: 'Real-time food delivery app with live tracking and instant notifications.',
      image: 'https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY1NzY0NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Flutter', 'Firebase', 'Real-time'],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Corporate Dashboard',
      category: 'web',
      description: 'Comprehensive business intelligence dashboard with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU3OTE3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'D3.js', 'Dashboard'],
      gradient: 'from-green-500 to-cyan-500',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Work
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-white/70">
              Explore our portfolio of successful digital solutions across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity`} />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/60 mb-4">{project.description}</p>
                  
                  <motion.div
                    className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' },
              { number: '20+', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60">{stat.label}</div>
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
              Let's Create Something
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Amazing Together
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Ready to bring your vision to life? Start your project with us today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all text-lg font-semibold"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
