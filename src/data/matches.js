export const matches = [
  {
    id: 1, date: "2024-03-15", league: "AFCON 2024", leagueIcon: "🌍",
    team1: { name: "Morocco", flag: "🇲🇦", score: 3 },
    team2: { name: "Egypt", flag: "🇪🇬", score: 1 },
    status: "FT", stadium: "Alassane Ouattara Stadium",
    scorers: [{ player: "Ziyech H.", time: "23'", team: 1 }, { player: "Hakimi A.", time: "56'", team: 1 }, { player: "Ounahi A.", time: "78'", team: 1 }, { player: "Salah M.", time: "45+2'", team: 2 }],
    stats: { possession: [62, 38], shots: [18, 9], shotsOnTarget: [8, 3], corners: [7, 3], fouls: [11, 14] }
  },
  {
    id: 2, date: "2024-03-19", league: "Friendly", leagueIcon: "⚽",
    team1: { name: "Morocco", flag: "🇲🇦", score: 2 },
    team2: { name: "Angola", flag: "🇦🇴", score: 2 },
    status: "FT", stadium: "Stade de Marrakech",
    scorers: [{ player: "Ziyech H.", time: "12'", team: 1 }, { player: "Sabiri A.", time: "67'", team: 1 }],
    stats: { possession: [57, 43], shots: [14, 11], shotsOnTarget: [6, 5], corners: [5, 4], fouls: [9, 12] }
  },
  {
    id: 3, date: "2024-03-22", league: "AFCON 2024", leagueIcon: "🌍",
    team1: { name: "Senegal", flag: "🇸🇳", score: 0 },
    team2: { name: "Morocco", flag: "🇲🇦", score: 2 },
    status: "FT", stadium: "Stade Félix Houphouët-Boigny",
    scorers: [{ player: "Aguerd N.", time: "34'", team: 2 }, { player: "Hakimi A.", time: "89'", team: 2 }],
    stats: { possession: [45, 55], shots: [10, 16], shotsOnTarget: [3, 7], corners: [4, 6], fouls: [13, 8] }
  },
  {
    id: 4, date: "2024-04-02", league: "Friendly", leagueIcon: "⚽",
    team1: { name: "Morocco", flag: "🇲🇦", score: null },
    team2: { name: "Brazil", flag: "🇧🇷", score: null },
    status: "UPCOMING", stadium: "Grand Stade de Tanger",
    scorers: [], stats: null
  },
  {
    id: 5, date: "2024-04-06", league: "World Cup Qualifier", leagueIcon: "🏆",
    team1: { name: "Morocco", flag: "🇲🇦", score: null },
    team2: { name: "Nigeria", flag: "🇳🇬", score: null },
    status: "UPCOMING", stadium: "Stade de Casablanca",
    scorers: [], stats: null
  },
  {
    id: 6, date: "2024-04-10", league: "World Cup Qualifier", leagueIcon: "🏆",
    team1: { name: "Ghana", flag: "🇬🇭", score: null },
    team2: { name: "Morocco", flag: "🇲🇦", score: null },
    status: "UPCOMING", stadium: "Accra Sports Stadium",
    scorers: [], stats: null
  },
  {
    id: 7, date: "2024-03-10", league: "AFCON 2024", leagueIcon: "🌍",
    team1: { name: "Morocco", flag: "🇲🇦", score: 1 },
    team2: { name: "Tanzania", flag: "🇹🇿", score: 0 },
    status: "FT", stadium: "Stade Laurent Pokou",
    scorers: [{ player: "Mazraoui N.", time: "71'", team: 1 }],
    stats: { possession: [68, 32], shots: [22, 5], shotsOnTarget: [9, 2], corners: [9, 2], fouls: [8, 16] }
  },
];

export const teams = [
  { id: 1, name: "Morocco", flag: "🇲🇦", league: "National Team", wins: 18, draws: 4, losses: 3, goals: 52, conceded: 18, color: "#CC0000" },
  { id: 2, name: "PSG", flag: "🏟️", league: "Ligue 1", wins: 22, draws: 5, losses: 4, goals: 68, conceded: 31, color: "#003B7D" },
  { id: 3, name: "Al-Hilal", flag: "🏟️", league: "Saudi Pro League", wins: 19, draws: 6, losses: 4, goals: 58, conceded: 28, color: "#006600" },
  { id: 4, name: "Galatasaray", flag: "🏟️", league: "Süper Lig", wins: 21, draws: 4, losses: 5, goals: 65, conceded: 33, color: "#FF6600" },
];
