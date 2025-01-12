"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    // Configurar el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Cuando una sección es visible más del 50%
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Opciones del observer
        threshold: 0.5, // Trigger cuando el elemento es 50% visible
        rootMargin: "-50px 0px" // Offset para compensar el header fixed
      }
    );

    // Observar todas las secciones
    const sections = ['hero', 'projects', 'about', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    setActiveSection(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const getButtonStyles = (sectionId: string) => {
    const baseStyles = "nav-item transition-colors";
    const activeStyles = "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900";
    const inactiveStyles = "hover:bg-white/10";
    
    return `${baseStyles} ${activeSection === sectionId ? activeStyles : inactiveStyles}`;
  };
 
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button onClick={() => scrollToSection('hero')} className={getButtonStyles('hero')}>Home</button>
        <button onClick={() => scrollToSection('projects')} className={getButtonStyles('projects')}>Projects</button>
        <button onClick={() => scrollToSection('about')} className={getButtonStyles('about')}>About</button>
        <button onClick={() => scrollToSection('contact')} className={getButtonStyles('contact')}>Contact</button>
      </nav>
    </div>
  );
};
