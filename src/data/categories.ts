import { tutorials } from "@/data/tutorials";

export interface Category {
  id: string;
  name: string;
  hindiName: string;
  icon: string;
  color: string;
  gradient: string;
  chip: string;
  description: string;
  tags: string[];
}

export const categories: Category[] = [
  {
    id: "beginner",
    name: "Beginner",
    hindiName: "शुरुआत",
    icon: "🟢",
    color: "bg-green-500",
    gradient: "from-green-500 to-emerald-400",
    chip: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    description: "COBOL ki basics seekhein — pehle program se lekar data types tak",
    tags: ["basics", "beginner", "shuruaat", "pehla program"],
  },
  {
    id: "intermediate",
    name: "Intermediate",
    hindiName: "बीच का",
    icon: "🟡",
    color: "bg-yellow-500",
    gradient: "from-yellow-500 to-amber-400",
    chip: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    description: "File handling, subprograms, aur advanced concepts",
    tags: ["files", "sort", "merge", "subprograms"],
  },
  {
    id: "advanced",
    name: "Advanced",
    hindiName: "उन्नत",
    icon: "🔴",
    color: "bg-red-500",
    gradient: "from-red-500 to-rose-400",
    chip: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    description: "DB2, CICS, aur enterprise-level COBOL programming",
    tags: ["DB2", "CICS", "mainframe", "enterprise"],
  },
  {
    id: "projects",
    name: "Real World Projects",
    hindiName: "प्रैक्टिकल प्रोजेक्ट",
    icon: "🛠️",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-violet-400",
    chip: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    description: "Real-world projects banakar COBOL mastery karein",
    tags: ["projects", "practice", "banking", "payroll"],
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getTutorialCount(categoryId: string): number {
  return tutorials.filter((t) => t.categoryId === categoryId).length;
}
