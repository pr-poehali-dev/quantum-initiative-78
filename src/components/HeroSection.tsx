import { Menu, ChevronLeft, ChevronRight, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChampDropdownOpen, setIsChampDropdownOpen] = useState(false)

  const slides = [
    {
      image: "https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/files/1e3126e7-0f59-4472-a9eb-1f4dcfef097d.jpg",
      alt: "Игроки в гандбол в динамичном прыжке",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oH2K0gw1HEqvYhhbwJrYbmkBrbksyk.png",
      alt: "Гандбольный матч — атака на ворота",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DQ2brNc5Vszxllx17YNA6JqGqiHaRm.png",
      alt: "Команда в раздевалке перед матчем",
    },
  ]

  const navItems = [
    { name: "Главная", href: "#hero" },
    { name: "О клубе", href: "#mission" },
    { name: "Чемпионат", href: "#championship" },
    { name: "Игроки", href: "#community" },
  ]

  // Navigation handlers
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        {/* Logo/Brand */}
        <div className="text-white font-bold text-xl tracking-wider">СШОР ПРИМОРСКОГО</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.name === "Чемпионат" ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setIsChampDropdownOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setIsChampDropdownOpen(false), 150)}
                  className="relative text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide pb-1 group flex items-center gap-1"
                >
                  {item.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isChampDropdownOpen ? "rotate-180" : ""}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                </button>
                {isChampDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-black/90 border border-white/20 rounded-lg overflow-hidden shadow-xl">
                    <button
                      onClick={() => { scrollToSection(item.href); setIsChampDropdownOpen(false) }}
                      className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                      Чемпионат 2025/2026
                    </button>
                    <button
                      onClick={() => { scrollToSection(item.href); setIsChampDropdownOpen(false) }}
                      className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                      Чемпионат 2026/2027
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide pb-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Меню</span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) =>
              item.name === "Чемпионат" ? (
                <div key={item.name} className="flex flex-col items-center space-y-4">
                  <span className="text-white/50 text-lg font-bold tracking-wider">Чемпионат</span>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white text-xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
                  >
                    2025/2026
                  </button>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white text-xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
                  >
                    2026/2027
                  </button>
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-4 leading-none">
            СШОР
            <br />
            ПРИМОРСКОГО
            <br />
            РАЙОНА
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light tracking-wide mb-8 text-gray-200">Гандбольный клуб · Чемпионат Санкт-Петербурга</p>


        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Следующий слайд"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Side Navigation Indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1 h-8 transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}