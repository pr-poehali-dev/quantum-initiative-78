import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

const collagePhotos = [
  {
    src: "https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/36352669-bcce-470c-9454-3491ece3de12.jpg",
    alt: "Командное фото",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/e4f6ef49-f9d4-4276-b7eb-4bb578736d5a.jpg",
    alt: "Динамичный эпизод матча",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/8c0a91ee-9b6f-4587-b688-3228376f1625.jpg",
    alt: "Награждение лучших игроков",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/4a5098a7-4241-42fb-ac35-1723483891dd.jpg",
    alt: "Эмоции команды",
    className: "col-span-2 row-span-1",
  },
]

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChampDropdownOpen, setIsChampDropdownOpen] = useState(false)

  const navItems = [
    { name: "Главная", href: "#hero" },
    { name: "О клубе", href: "#mission" },
    { name: "Чемпионат", href: "#championship" },
    { name: "Игроки", href: "#community" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Collage Background */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-0.5">
        {collagePhotos.map((photo, i) => (
          <div key={i} className={`${photo.className} overflow-hidden`}>
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

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

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-0.5 h-10 bg-white/40 mx-auto animate-pulse"></div>
      </div>

    </div>
  )
}