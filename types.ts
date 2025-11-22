export interface Team {
  id: number;
  name: string;
  members: string[];
}

export interface Match {
  teamA: number;
  teamB: number;
}

export interface Round {
  id: number;
  name: string;
  matches: Match[];
}

export interface RuleSection {
  id: string;
  title: string;
  content: string[];
}

export enum Tab {
  HOME = 'HOME',
  RULES = 'RULES',
  SCHEDULE = 'SCHEDULE',
  TEAMS = 'TEAMS',
  REFEREE = 'REFEREE'
}