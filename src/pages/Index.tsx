import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import ChampionshipTable from "@/components/ChampionshipTable"

export default function Index() {
  const missionStatement =
    "СШОР Приморского района — это больше, чем клуб. Это команда людей, объединённых страстью к гандболу и духом честной борьбы. Мы участвуем в чемпионате Санкт-Петербурга, растим новых чемпионов и открываем двери для каждого — от новичка до опытного игрока. Площадка — наш дом, мяч — наш язык, победа — наша цель. Присоединяйся к лучшему гандбольному клубу Приморского района и стань частью живой истории."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/36352669-bcce-470c-9454-3491ece3de12.jpg",
      alt: "Командное фото СШОР Приморского района",
      title: "Наша команда",
      description:
        "СШОР Приморского района — сплочённый коллектив, где каждый игрок знает свою роль. Молодые таланты и опытные мастера вместе куют победы на площадке Санкт-Петербурга сезон за сезоном.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/e4f6ef49-f9d4-4276-b7eb-4bb578736d5a.jpg",
      alt: "Динамичный эпизод матча — бросок по воротам",
      title: "Игра на полную",
      description:
        "Каждый матч — это максимальная отдача. Скорость, точность и командная игра отличают СШОР Приморского района от соперников. Мы атакуем без остановок и защищаемся с характером.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/4a5098a7-4241-42fb-ac35-1723483891dd.jpg",
      alt: "Команда на скамейке запасных эмоционально поддерживает",
      title: "Дух команды",
      description:
        "Победы куются не только на площадке — они начинаются со скамейки запасных. Поддержка, единство и вера в каждого партнёра — вот что делает СШОР Приморского района настоящей командой.",
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

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white">ФОТОГАЛЕРЕЯ</h2>
            <p className="text-xl text-gray-400 mt-4">Живые моменты с наших матчей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/36352669-bcce-470c-9454-3491ece3de12.jpg"
                alt="Командное фото"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/8c0a91ee-9b6f-4587-b688-3228376f1625.jpg"
                alt="Награждение лучших игроков"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/e4f6ef49-f9d4-4276-b7eb-4bb578736d5a.jpg"
                alt="Динамичный эпизод матча"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/959fe10d-da11-4611-b217-37f76879518b/bucket/4a5098a7-4241-42fb-ac35-1723483891dd.jpg"
                alt="Эмоции команды на скамейке"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Championship Table */}
      <ChampionshipTable />
    </div>
  )
}