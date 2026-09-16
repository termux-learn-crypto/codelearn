export interface TopicSection {
  title: string;
  content: string;
  code?: string;
  codeLanguage?: string;
  output?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface Tutorial {
  slug: string;
  categoryId: string;
  title: string;
  hindiTitle: string;
  level: "beginner" | "intermediate" | "advanced" | "projects";
  minutes: number;
  summary: string;
  sections: TopicSection[];
  quiz: QuizQuestion[];
  related: string[];
  next?: string;
  prev?: string;
  levelLabel?: string;
  practiceQuestions?: string[];
}

import { cobolLevel1 } from "./tutorials/cobol-level1";
import { cobolLevel2 } from "./tutorials/cobol-level2";
import { cobolLevel3 } from "./tutorials/cobol-level3";
import { cobolLevel4 } from "./tutorials/cobol-level4";

export const tutorials: Tutorial[] = [
  ...cobolLevel1,
  ...cobolLevel2,
  ...cobolLevel3,
  ...cobolLevel4,
];

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}

export function getTutorialsByCategory(categoryId: string): Tutorial[] {
  return tutorials.filter((t) => t.categoryId === categoryId);
}

export function getTutorialsByLevel(level: string): Tutorial[] {
  return tutorials.filter((t) => t.level === level);
}
