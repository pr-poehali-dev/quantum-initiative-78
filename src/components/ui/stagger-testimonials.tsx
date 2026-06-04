import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Running club testimonials data with randomly generated icons
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "СШОР Приморского района — это семья. Когда я впервые пришёл на тренировку, меня приняли как своего. Уже через сезон я вышел в стартовом составе финала чемпионата.",
    by: "Сергей Громов, нападающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyGromov&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Уровень тренировок здесь — профессиональный. Тренер видит каждого игрока, работает над слабыми местами. За год я улучшил процент попаданий с 54% до 71%.",
    by: "Марина Светлова, левый крайний",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaSvetlova&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Атмосфера на матчах — это что-то особенное. Трибуны, поддержка болельщиков, адреналин. Ради таких моментов я и занимаюсь гандболом.",
    by: "Антон Козлов, разыгрывающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AntonKozlov&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Два года назад я вообще не знал правил гандбола. Сегодня я в основном составе и помогаю новичкам. Handball City — лучшее, что случилось в моей спортивной жизни.",
    by: "Дмитрий Орлов, вратарь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitriyOrlov&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Чемпионат города — это серьёзный уровень. Клуб готовит нас как профессионалов: тактика, физподготовка, видеоразбор матчей. Я горжусь, что играю здесь.",
    by: "Елена Новикова, центральный защитник",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaNovikova&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Пришёл болеть за друга, остался играть сам. Тренеры клуба убедили попробовать — и я ни разу не пожалел. Теперь не представляю жизни без гандбола.",
    by: "Алексей Морозов, правый крайний",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyMorozov&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Статистика не врёт — в этом сезоне наша команда набрала рекордные очки за историю клуба. Когда играешь вместе и доверяешь партнёрам, результат приходит сам.",
    by: "Айгуль Рахимова, линейный игрок",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AigulRahimova&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Переехала в город и первым делом нашла Handball City. Здесь и новых друзей обрела, и в форму пришла. Отличное сообщество для тех, кто любит спорт.",
    by: "Ольга Ким, линейный игрок",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaKim&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Первый гол в чемпионате города я не забуду никогда. Команда встретила меня как героя — хотя просто добил мяч в пустые ворота. Вот такой клуб!",
    by: "Наталья Соколова, нападающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaSokolova&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Тренировочный процесс выстроен идеально. Физика, техника, тактика — всё в балансе. Я стал на полкорпуса быстрее и намного увереннее в защите.",
    by: "Михаил Волков, защитник",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MikhailVolkov&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "В Handball City играют люди от 18 до 40 лет — и все на одной волне. Молодёжь заряжает энергией, опытные игроки делятся мастерством. Правильный микс.",
    by: "София Родригес, разыгрывающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SofiaRodriguez&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Три года в клубе — три финала чемпионата. Это говорит само за себя. Здесь умеют готовить к важным матчам и зажигать нужный огонь перед выходом на площадку.",
    by: "Тимур Асланов, капитан команды",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TimurAslanov&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "После травмы думала, что с гандболом покончено. Ребята из клуба поддержали, помогли с реабилитацией. Вернулась и сыграла лучший сезон в карьере.",
    by: "Нина Павлова, левый крайний",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NinaPavlova&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Разборы матчей после игры — отдельное удовольствие. Тренер объясняет каждый момент, учишься на ошибках. Прогресс чувствуется от тренировки к тренировке.",
    by: "Роман Ким, разыгрывающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanKim&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Никогда не думала, что буду играть в командный вид спорта. Но гандбол захватил с первой тренировки — скорость, тактика, командная игра. Теперь это моя страсть.",
    by: "Екатерина Орлова, нападающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaOrlova&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "Handball City — единственный клуб в городе, где так серьёзно относятся к статистике игроков. Видишь свой прогресс в цифрах — это очень мотивирует.",
    by: "Даниил Пак, нападающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DaniilPak&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Участвовали в благотворительном матче в поддержку детского спорта — собрали полный зал. Клуб не только побеждает, но и делает что-то важное для города.",
    by: "Раиса Гринёва, линейный игрок",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RaisaGrineva&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Техника броска изменилась полностью за один сезон. Тренер поставил руку, отработали до автоматизма. Результат — 12 голов в чемпионате из 15 попыток.",
    by: "Кирилл Вонг, нападающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KirillVong&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Даже в межсезонье клуб не останавливается — сборы, товарищеские матчи, физподготовка. Профессиональный подход, который даёт результат в решающих играх.",
    by: "Александр Фёдоров, вратарь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexanderFedorov&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Молодые игроки здесь растут быстро — старшие передают опыт, тренер даёт шанс каждому. Я в 19 лет уже сыграл в финале городского чемпионата. Это незабываемо.",
    by: "Карим Мендес, разыгрывающий",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KarimMendez&backgroundColor=0891b2&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}