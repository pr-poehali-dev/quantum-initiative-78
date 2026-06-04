import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import ChampionshipTable from "@/components/ChampionshipTable"

export default function Index() {
  const missionStatement =
    "СШОР Приморского района — это больше, чем клуб. Это команда людей, объединённых страстью к гандболу и духом честной борьбы. Мы участвуем в чемпионате Санкт-Петербурга, растим новых чемпионов и открываем двери для каждого — от новичка до опытного игрока. Площадка — наш дом, мяч — наш язык, победа — наша цель. Присоединяйся к лучшему гандбольному клубу Приморского района и стань частью живой истории."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Нападающий в прыжке бросает по воротам",
      title: "Алексей Громов — лучший бомбардир",
      description:
        "За сезон 2024 Алексей забил 47 голов и вывел команду в финал чемпионата Санкт-Петербурга. Начинал с детской секции, а сегодня — капитан и лицо СШОР Приморского района. Его подача с левого фланга стала фирменным знаком команды.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Вратарь отражает пенальти",
      title: "Дмитрий Орлов — непробиваемый страж",
      description:
        "Процент отражённых бросков — 68%. Дмитрий три сезона подряд признаётся лучшим вратарём чемпионата города. Его реакция и хладнокровие в решающие моменты не раз спасали команду от поражения.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Команда празднует победу в чемпионате",
      title: "Команда, которая побеждает вместе",
      description:
        "СШОР Приморского района — призёр чемпионата Санкт-Петербурга 2023 и 2024 года. 18 игроков, 1 цель. Каждый матч — это история характера, дисциплины и командного духа. Хочешь стать частью этой истории? Площадка ждёт тебя.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">НАША МИССИЯ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">ЗВЁЗДЫ КЛУБА</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Истории наших игроков — это истории характера, труда и командных побед.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">ИГРОКИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные отзывы игроков и тренеров Handball City — о команде, чемпионате и победах.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Championship Table */}
      <ChampionshipTable />

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}