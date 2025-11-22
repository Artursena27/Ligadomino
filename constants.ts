import { Round, RuleSection, Team } from './types';

export const TEAMS: Team[] = [
  { id: 1, name: "Dupla 1", members: ["Pedro", "Edu"] },
  { id: 2, name: "Dupla 2", members: ["Rafael", "Antônio"] },
  { id: 3, name: "Dupla 3", members: ["Roberta", "Thiago"] },
  { id: 4, name: "Dupla 4", members: ["Lívia", "Artur"] },
  { id: 5, name: "Dupla 5", members: ["Guilherme", "Rivania"] },
  { id: 6, name: "Dupla 6", members: ["Bia", "Luisa"] },
];

export const SCHEDULE: Round[] = [
  {
    id: 1,
    name: "Rodada 1",
    matches: [
      { teamA: 1, teamB: 6 },
      { teamA: 2, teamB: 5 },
      { teamA: 3, teamB: 4 },
    ]
  },
  {
    id: 2,
    name: "Rodada 2",
    matches: [
      { teamA: 1, teamB: 5 },
      { teamA: 6, teamB: 4 },
      { teamA: 2, teamB: 3 },
    ]
  },
  {
    id: 3,
    name: "Rodada 3",
    matches: [
      { teamA: 1, teamB: 4 },
      { teamA: 5, teamB: 3 },
      { teamA: 6, teamB: 2 },
    ]
  },
  {
    id: 4,
    name: "Rodada 4",
    matches: [
      { teamA: 1, teamB: 3 },
      { teamA: 4, teamB: 2 },
      { teamA: 5, teamB: 6 },
    ]
  },
  {
    id: 5,
    name: "Rodada 5",
    matches: [
      { teamA: 1, teamB: 2 },
      { teamA: 3, teamB: 6 },
      { teamA: 4, teamB: 5 },
    ]
  }
];

export const RULES: RuleSection[] = [
  {
    id: "1",
    title: "1. Disposições Gerais",
    content: [
      "1.1. Este regulamento define as normas para a realização da 1ª Liga do Dominó.",
      "1.2. O torneio será realizado no dia 22 de novembro, nas dependências da Associação Josa Club.",
      "1.3. O objetivo principal é promover a integração, o lazer e a competitividade saudável entre os participantes."
    ]
  },
  {
    id: "2",
    title: "2. Das Duplas Participantes",
    content: [
      "2.1. A liga contará com a participação de 6 (seis) duplas, devidamente numeradas para fins de sorteio e tabela."
    ]
  },
  {
    id: "3",
    title: "3. Do Formato de Disputa",
    content: [
      "3.1. O sistema de disputa será o de Pontos Corridos (Todos contra Todos) em turno único.",
      "3.2. Serão realizadas 5 (cinco) rodadas. Em cada rodada, todas as duplas jogarão.",
      "3.3. Como o local dispõe de 2 mesas e cada rodada possui 3 partidas, a ordem dos jogos seguirá a disponibilidade das mesas.",
      "3.4. As partidas serão disputadas até que uma das duplas atinja 6 (seis) partidas/pontos (formato tradicional de 6 pontos ou '6 buchas')."
    ]
  },
  {
    id: "4",
    title: "4. Da Pontuação",
    content: [
      "4.1. Vitória Simples (Ex: 6x1, 6x2... 6x5): 1,0 ponto.",
      "4.2. Vitória de 'Buchuda' (Placar de 6x0): 1,5 pontos.",
      "4.3. Derrota: 0 pontos."
    ]
  },
  {
    id: "5",
    title: "5. Da Classificação e Premiação",
    content: [
      "5.1. Ao final das 5 rodadas, a dupla que somar o maior número de pontos será declarada a Campeã.",
      "5.2. Critério de Desempate: Em caso de empate no 1º lugar, será realizada uma partida extra 'Melhor de 3'."
    ]
  },
  {
    id: "7",
    title: "7. Disposições Finais",
    content: [
      "7.1. Casos omissos serão resolvidos pela comissão organizadora.",
      "7.2. Preza-se pelo respeito e fair play. Condutas antidesportivas podem levar à perda de pontos."
    ]
  }
];

export const FULL_REGULATION_TEXT = `
REGULAMENTO OFICIAL – 1ª LIGA DO DOMINÓ
1. DISPOSIÇÕES GERAIS
1.1. Este regulamento define as normas para a realização da 1ª Liga do Dominó.
1.2. O torneio será realizado no dia 22 de novembro, nas dependências da Associação Josa Club.
1.3. O objetivo principal é promover a integração, o lazer e a competitividade saudável entre os participantes.
2. DAS DUPLAS PARTICIPANTES
2.1. A liga contará com a participação de 6 (seis) duplas:
Pedro e Edu (1), Rafael e Antônio (2), Roberta e Thiago (3), Lívia e Artur (4), Guilherme e Rivania (5), Bia e Luisa (6).
3. DO FORMATO DE DISPUTA
3.1. Pontos Corridos (Todos contra Todos), turno único. 5 rodadas.
3.3. Local com 2 mesas. A ordem segue disponibilidade.
3.4. Partidas até 6 pontos/buchas.
4. DA PONTUAÇÃO
Vitória Simples: 1,0 ponto.
Vitória de "Buchuda" (6x0): 1,5 pontos.
Derrota: 0 pontos.
5. DA CLASSIFICAÇÃO
5.1. Maior pontuação vence.
5.2. Desempate para 1º lugar: Partida extra Melhor de 3.
7. DISPOSIÇÕES FINAIS
7.2. Fair play é obrigatório.
`;