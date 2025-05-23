import "./App.css"
import { User, Mail, Phone, MapPin, Download, ExternalLink, Calendar, GraduationCap, Briefcase, Code2, Github, Linkedin } from 'lucide-react';
import React from 'react';

const ModernPortfolio = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Material UI', 'RESTful APIs',
    'HTML5', 'CSS3', 'Git', 'BigCommerce', 'Wordpress'
  ];

  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Aliema Infotech',
      duration: '2024 – Present',
      description: `Frontend developer with 1.3 years of experience, contributing to high-impact projects such as Interviewhelp, Shopity Shopping App Generator, and Bttnusa (a BigCommerce project).
Consistently deliver clean, maintainable, and efficient code with a strong focus on responsive design and user experience.
Recognized for attention to detail, meeting project deadlines, and collaborating effectively with cross-functional teams to achieve business goals.`
    }
  ];

  const projects = [
    {
      name: ' Bttnusa (Medical Equipment Supply Platform)',
      description: 'A BigCommerce project in which i was responsible for  Integration of RESTful APIs for real-time inventory management and UI development.',
      link: 'https://bttnusa.com/?srsltid=AfmBOorxuMmuiPHePl4V0XKwoA-lQDQHJr85LLEXIOKySDcrnCSBkIj5',
      tech: ['React', 'TypeScript', 'BigCommerce', 'REST APIs']
    },
    {
      name: 'Interviewhelp',
      description: ' Contributed to a hiring platform enabling applicants to apply and employers to manage workflows. Implemented user authentication and real-time notifications, boosting retention by 25%. Worked with AI features that automatically filter candidates by resume score and skills, reducing employer workload in screening.',
      link: 'https://interviewhelp.io',
      tech: ['React', 'TypeScript', 'Material UI', 'RESTful APIs']
    },
    {
      name: 'Shopify',
      description: 'Developed an AI-driven tool to automate Shopify store creation, leveraging React and third-party APIs to customize product listings dynamically.',
      link: 'https://shopify.com',
      tech: ['React', 'Tailwind', 'AI Integration', 'RESTful APIs']
    }
  ];

  const education = {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Renaissance University ',
    year: '2024',
    
  };

  // Add your resume PDF file path
  const resumeFile = "/src/assets/resume.pdf";
  
  // Add your email
  const email = "mr.raja.dev01@gmail.com";

  // Add CSS for smooth scrolling
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-800">Mohammed Raja</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 md:mb-8">
            <img 
              src="/src/assets/profile.jpg"
              alt="Profile" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 md:mb-6 border-4 border-white shadow-lg"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Mohammed Raja</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-4 md:mb-6">Frontend Developer | React Specialist</p>
            <p className="text-base md:text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies
            </p>
          </div>
          <div className="flex justify-center">
            <a 
              href={resumeFile} 
              download 
              className="bg-white text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 text-sm md:text-base"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* About Section */}
        <section id="about" className="mb-12 md:mb-20">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">About Me</h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  I am a passionate Frontend Developer specializing in building modern, responsive web applications using React, TypeScript, and Material UI. I enjoy creating seamless user experiences and collaborating with teams to deliver impactful digital products.
                </p>
                <p>
                  My recent work includes real-time inventory platforms and AI-driven hiring solutions. I'm always eager to learn new technologies and take on exciting challenges that push the boundaries of web development.
                </p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-6">
                <a href="https://github.com/mohammed-raja007" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/mohammed-raja007/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-[#0077b5] transition-colors duration-200 text-sm md:text-base">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Quick Info</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center space-x-2 md:space-x-3 text-gray-600 text-sm md:text-base">
                  <Mail size={16} className="flex-shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors duration-200 truncate">{email}</a>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 text-gray-600 text-sm md:text-base">
                  <Phone size={16} className="flex-shrink-0" />
                  <a href="tel:+916268429042" className="hover:text-blue-600 transition-colors duration-200">+91 6268 429042</a>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 text-gray-600 text-sm md:text-base">
                  <MapPin size={16} className="flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps/place/Indore,+Madhya+Pradesh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    Indore, India
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Skills & Technologies</h2>
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-blue-50 text-blue-700 px-3 py-2 md:px-4 md:py-3 rounded-lg text-center font-medium hover:bg-blue-100 hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 text-xs md:text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Professional Experience</h2>
          <div className="space-y-4 md:space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-lg">
                    <Briefcase className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">{exp.role}</h3>
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-2 md:mb-3">
                      <span className="text-blue-600 font-medium text-sm md:text-base">{exp.company}</span>
                      <div className="flex items-center space-x-2 text-gray-500 text-xs md:text-sm mt-1 md:mt-0">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, idx) => {
              return (
                <a 
                  key={idx} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group block"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <ExternalLink className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200" size={18} />
                  </div>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Education</h2>
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg">
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="bg-green-100 p-2 md:p-3 rounded-lg">
                <GraduationCap className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">{education.degree}</h3>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-2 md:mb-3">
                  <span className="text-green-600 font-medium text-sm md:text-base">{education.institution}</span>
                  <div className="flex items-center space-x-2 text-gray-500 text-xs md:text-sm mt-1 md:mt-0">
                    <Calendar size={14} />
                    <span>{education.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 md:p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Let's Connect</h2>
            <p className="text-blue-100 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Let's connect and discuss how we can create something amazing together.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href={`mailto:${email}`} 
                className="bg-white text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 text-sm md:text-base"
              >
                <Mail size={18} />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModernPortfolio;