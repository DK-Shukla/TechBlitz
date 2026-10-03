'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Workshops', href: '#workshops' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Partners', href: '#partners' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Staggered menu animations
  const menuVariants: any = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkContainerVariants: any = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const linkVariants: any = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary-black/95 backdrop-blur-md py-4 shadow-sm border-b border-border/30' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center -ml-4 md:-ml-8 lg:-ml-12">
            <div className="hidden md:flex items-center">
              <img src="/images/cosmos-logo.jpg" alt="COSMOS Logo" className="h-6 sm:h-8 w-auto object-contain mr-3" />
              <span className="font-mono text-white font-bold tracking-wider">COSMOS</span>
              <span className="text-secondary-text mx-4 font-mono">/</span>
              <span className="font-mono text-white font-bold tracking-wider">TECHBLITZ</span>
            </div>
            <div className="flex md:hidden items-center">
              <img src="/images/cosmos-logo.jpg" alt="COSMOS Logo" className="h-6 w-auto object-contain mr-2" />
              <span className="font-mono text-white font-bold tracking-wider">COSMOS</span>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-secondary-text hover:text-white transition-colors z-50 relative"
            aria-label="Toggle Menu"
          >
            <span className="font-sans uppercase text-sm tracking-widest hidden sm:block">
              {isMenuOpen ? 'CLOSE' : 'SECTION'}
            </span>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-primary-black flex flex-col items-center justify-center pt-20"
          >
            <motion.nav
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center space-y-8 w-full max-w-lg px-6 text-center"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="group relative font-sans text-2xl sm:text-4xl uppercase tracking-widest text-secondary-text hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-primary-red group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                  </a>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
