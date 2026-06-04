import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const teams = [
  { pos: 1, name: "СШОР Приморского района", played: 22, won: 18, drawn: 2, lost: 2, goalsFor: 547, goalsAgainst: 412, points: 56, highlight: true },
  { pos: 2, name: "Динамо", played: 22, won: 16, drawn: 3, lost: 3, goalsFor: 498, goalsAgainst: 401, points: 51, highlight: false },
  { pos: 3, name: "Спартак", played: 22, won: 15, drawn: 2, lost: 5, goalsFor: 471, goalsAgainst: 418, points: 47, highlight: false },
  { pos: 4, name: "Атлант", played: 22, won: 13, drawn: 4, lost: 5, goalsFor: 453, goalsAgainst: 430, points: 43, highlight: false },
  { pos: 5, name: "Буревестник", played: 22, won: 12, drawn: 3, lost: 7, goalsFor: 441, goalsAgainst: 438, points: 39, highlight: false },
  { pos: 6, name: "Олимп", played: 22, won: 10, drawn: 4, lost: 8, goalsFor: 420, goalsAgainst: 435, points: 34, highlight: false },
  { pos: 7, name: "Ракета", played: 22, won: 9, drawn: 4, lost: 9, goalsFor: 408, goalsAgainst: 441, points: 31, highlight: false },
  { pos: 8, name: "Виктория", played: 22, won: 8, drawn: 3, lost: 11, goalsFor: 391, goalsAgainst: 452, points: 27, highlight: false },
  { pos: 9, name: "Сокол", played: 22, won: 7, drawn: 2, lost: 13, goalsFor: 378, goalsAgainst: 469, points: 23, highlight: false },
  { pos: 10, name: "Гром", played: 22, won: 5, drawn: 3, lost: 14, goalsFor: 361, goalsAgainst: 487, points: 18, highlight: false },
  { pos: 11, name: "Факел", played: 22, won: 3, drawn: 2, lost: 17, goalsFor: 334, goalsAgainst: 511, points: 11, highlight: false },
  { pos: 12, name: "Старт", played: 22, won: 2, drawn: 0, lost: 20, goalsFor: 298, goalsAgainst: 546, points: 6, highlight: false },
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
            Турнирная таблица · Сезон 2024–2025 · 12 команд
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