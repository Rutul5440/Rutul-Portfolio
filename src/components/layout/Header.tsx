import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);

    if (target instanceof HTMLElement) {
      const headerHeight =
        document.querySelector('header')?.getBoundingClientRect().height ?? 72;
      const targetOffset =
        window.pageYOffset + target.getBoundingClientRect().top - headerHeight;

      window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {"<Dev />"}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-muted-foreground hover:text-primary link-underline transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
          className="hidden md:block btn-primary text-sm px-6 py-3"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        onClick={handleOverlayClick}
        className={`md:hidden fixed inset-0 z-[60] h-dvh w-screen bg-background/75 backdrop-blur-2xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex min-h-full w-full flex-col px-4 pt-20 pb-6">
          <div className="flex h-full w-full flex-col rounded-[28px] border border-border/60 bg-card/92 px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-4">
              <span className="text-lg font-semibold text-foreground">Navigation</span>
              <span className="text-sm text-muted-foreground">Choose a section</span>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-4">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-center rounded-2xl border border-border/70 bg-secondary/90 px-6 py-4 text-xl font-semibold text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-colors hover:border-primary/50 hover:bg-secondary hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
            </ul>

            <div
              className={`border-t border-border/60 pt-5 transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${navLinks.length * 70}ms` }}
            >
              <button onClick={() => handleNavClick('#contact')} className="btn-primary w-full">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
