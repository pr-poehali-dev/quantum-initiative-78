import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const teams = [
  { pos: 1,  name: 'ЛГК "Викинг"',                          played: 11, won: 10, drawn: 1, lost: 0,  goalsFor: 391, goalsAgainst: 232, points: 21, highlight: false },
  { pos: 2,  name: "СШ Приморского р-на - 1",                played: 11, won: 10, drawn: 0, lost: 1,  goalsFor: 362, goalsAgainst: 245, points: 20, highlight: true  },
  { pos: 3,  name: "СПБГАУ",                                 played: 11, won: 9,  drawn: 0, lost: 2,  goalsFor: 322, goalsAgainst: 238, points: 18, highlight: false },
  { pos: 4,  name: "СШ Приморского р-на - 2",                played: 11, won: 8,  drawn: 1, lost: 2,  goalsFor: 304, goalsAgainst: 222, points: 17, highlight: false },
  { pos: 5,  name: '"Кронверкские барсы" им. Алексикова Ю.П.',played: 11, won: 7,  drawn: 0, lost: 4,  goalsFor: 287, goalsAgainst: 230, points: 14, highlight: false },
  { pos: 6,  name: "СШОР Кировского р-на - 1",               played: 11, won: 5,  drawn: 0, lost: 6,  goalsFor: 326, goalsAgainst: 283, points: 10, highlight: false },
  { pos: 7,  name: 'ГК «Орешник»',                           played: 11, won: 4,  drawn: 1, lost: 6,  goalsFor: 298, goalsAgainst: 311, points: 9,  highlight: false },
  { pos: 8,  name: 'ЛГК "Феникс"',                          played: 11, won: 3,  drawn: 1, lost: 7,  goalsFor: 267, goalsAgainst: 351, points: 7,  highlight: false },
  { pos: 9,  name: "СШ №1 Московского р-на",                 played: 11, won: 3,  drawn: 0, lost: 8,  goalsFor: 229, goalsAgainst: 287, points: 6,  highlight: false },
  { pos: 10, name: "СШ Приморского р-на - 3",                played: 11, won: 3,  drawn: 0, lost: 8,  goalsFor: 281, goalsAgainst: 351, points: 6,  highlight: false },
  { pos: 11, name: "СШОР Кировского р-на - 2",               played: 11, won: 2,  drawn: 0, lost: 9,  goalsFor: 264, goalsAgainst: 329, points: 4,  highlight: false },
  { pos: 12, name: '"Тихие Львы"',                           played: 11, won: 0,  drawn: 0, lost: 11, goalsFor: 175, goalsAgainst: 427, points: 0,  highlight: false },
]

export default function ChampionshipTable() {
  return (
    <section id="championship" className="relative py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white mb-4 leading-tight">
            ЧЕМПИОНАТ САНКТ-ПЕТЕРБУРГА{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent block">ПО ГАНДБОЛУ СРЕДИ МУЖЧИН</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Турнирная таблица · Сезон 2025/2026 · 12 команд
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-white/10"
        >
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
                <th className="py-4 px-3 md:px-5 text-left w-8">#</th>
                <th className="py-4 px-3 md:px-5 text-left">Команда</th>
                <th className="py-4 px-3 md:px-5 text-center">И</th>
                <th className="py-4 px-3 md:px-5 text-center">В</th>
                <th className="py-4 px-3 md:px-5 text-center">Н</th>
                <th className="py-4 px-3 md:px-5 text-center">П</th>
                <th className="py-4 px-3 md:px-5 text-center hidden sm:table-cell">Голы</th>
                <th className="py-4 px-3 md:px-5 text-center hidden sm:table-cell">Разница</th>
                <th className="py-4 px-3 md:px-5 text-center font-bold text-white">О</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, i) => (
                <motion.tr
                  key={team.pos}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`border-t border-white/5 transition-colors duration-200 ${
                    team.highlight
                      ? "bg-white/10 hover:bg-white/15"
                      : "hover:bg-white/5"
                  }`}
                >
                  <td className="py-4 px-3 md:px-5">
                    {team.pos === 1 ? (
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-yellow-500/20 text-yellow-400">
                        <Icon name="Trophy" size={14} />
                      </span>
                    ) : (
                      <span className={`text-sm font-semibold ${team.pos <= 3 ? "text-gray-300" : "text-gray-500"}`}>
                        {team.pos}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-3 md:px-5">
                    <div className="flex items-center gap-2 md:gap-3">
                      {team.highlight && (
                        <span className="hidden md:flex w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                      )}
                      <span className={`font-bold tracking-wide ${team.highlight ? "text-white" : "text-gray-300"}`}>
                        {team.name}
                      </span>
                      {team.highlight && (
                        <span className="hidden sm:inline text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full font-semibold">
                          Наш клуб
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-3 md:px-5 text-center text-gray-400">{team.played}</td>
                  <td className="py-4 px-3 md:px-5 text-center text-green-400 font-semibold">{team.won}</td>
                  <td className="py-4 px-3 md:px-5 text-center text-gray-400">{team.drawn}</td>
                  <td className="py-4 px-3 md:px-5 text-center text-red-400 font-semibold">{team.lost}</td>
                  <td className="py-4 px-3 md:px-5 text-center text-gray-400 hidden sm:table-cell">
                    {team.goalsFor}:{team.goalsAgainst}
                  </td>
                  <td className="py-4 px-3 md:px-5 text-center hidden sm:table-cell">
                    <span className={`font-semibold ${team.goalsFor - team.goalsAgainst >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {team.goalsFor - team.goalsAgainst > 0 ? "+" : ""}{team.goalsFor - team.goalsAgainst}
                    </span>
                  </td>
                  <td className="py-4 px-3 md:px-5 text-center">
                    <span className={`text-base md:text-lg font-black ${team.highlight ? "text-yellow-400" : "text-white"}`}>
                      {team.points}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500"
        >
          <span>И — игры</span>
          <span>В — победы</span>
          <span>Н — ничьи</span>
          <span>П — поражения</span>
          <span>О — очки</span>
        </motion.div>
      </div>
    </section>
  )
}