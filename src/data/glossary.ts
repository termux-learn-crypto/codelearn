export interface GlossaryTerm {
  term: string;
  hindiMeaning: string;
  description: string;
  example?: string;
}

export const glossary: GlossaryTerm[] = [
  {
    term: "COBOL",
    hindiMeaning: "Common Business-Oriented Language",
    description: "Ek high-level programming language jo 1959 mein bani thi business, finance aur administrative systems ke liye.",
  },
  {
    term: "Division",
    hindiMeaning: "विभाग",
    description: "COBOL program ka sabse bada section. Char main divisions hain: IDENTIFICATION, ENVIRONMENT, DATA, PROCEDURE.",
    example: "IDENTIFICATION DIVISION.",
  },
  {
    term: "Section",
    hindiMeaning: "अनुभाग",
    description: "Division ke andar ka group of paragraphs.",
  },
  {
    term: "Paragraph",
    hindiMeaning: "अनुच्छेद",
    description: "Section ke andar ka group of sentences — ek procedure ka naam.",
  },
  {
    term: "Sentence",
    hindiMeaning: "वाक्य",
    description: "Ek complete statement jo period (.) se samapt hota hai.",
    example: "DISPLAY \"Hello World\".",
  },
  {
    term: "PIC Clause",
    hindiMeaning: "Picture Clause — चित्र खण्ड",
    description: "Variable ki data type aur size define karta hai. Jaise PIC 9(5) matlab 5 digit ka number.",
    example: "01 AGE PIC 9(3).",
  },
  {
    term: "WORKING-STORAGE",
    hindiMeaning: "कार्य-भंडार",
    description: "DATA DIVISION ka wo section jahan program ke variables declare kiye jaate hain.",
  },
  {
    term: "FILE SECTION",
    hindiMeaning: "फ़ाइल अनुभाग",
    description: "DATA DIVISION ka section jo file records ko define karta hai.",
  },
  {
    term: "PROCEDURE DIVISION",
    hindiMeaning: "प्रक्रिया विभाग",
    description: "COBOL program ka actual code — jo kuch karna hai wo sab yahan likhte hain.",
  },
  {
    term: "DISPLAY",
    hindiMeaning: "दिखाना",
    description: "Screen par kuch output karne ke liye use hota hai. Jaise printf C mein.",
    example: "DISPLAY \"Namaste\".",
  },
  {
    term: "ACCEPT",
    hindiMeaning: "स्वीकारना",
    description: "User se input lene ke liye use hota hai.",
    example: "ACCEPT USER-NAME.",
  },
  {
    term: "MOVE",
    hindiMeaning: "स्थानांतरित करना",
    description: "Ek variable ki value doosre variable mein copy karta hai.",
    example: "MOVE 10 TO COUNTER.",
  },
  {
    term: "COMPUTE",
    hindiMeaning: "गणना करना",
    description: "Mathematical calculations ke liye. Arithmetic expressions likh sakte hain.",
    example: "COMPUTE RESULT = A + B * 2.",
  },
  {
    term: "PERFORM",
    hindiMeaning: "प्रदर्शन करना",
    description: "Loop chalane ya procedure call karne ke liye. COBOL ka main looping construct.",
    example: "PERFORM PARA-1 THRU PARA-5.",
  },
  {
    term: "IF-ELSE",
    hindiMeaning: "अगर-तो",
    description: "Conditional statements ke liye. COBOL mein END-IF lagana hota hai.",
    example: "IF AGE > 18 DISPLAY \"Adult\" ELSE DISPLAY \"Minor\" END-IF.",
  },
  {
    term: "EVALUATE",
    hindiMeaning: "मूल्यांकन",
    description: "COBOL ka switch-case equivalent. Multiple conditions check karta hai.",
    example: "EVALUATE GRADE WHEN \"A\" DISPLAY \"Excellent\" END-EVALUATE.",
  },
  {
    term: "COPY",
    hindiMeaning: "प्रतिलिपि",
    description: "Reusable code ya data definitions ko include karne ke liye. Jaise #include C mein.",
  },
  {
    term: "REDEFINES",
    hindiMeaning: "पुनर्परिभाषा",
    description: "Ek hi memory location ko alag-alag data type se use karna.",
    example: "01 WS-NUMBER PIC 9(5).\n01 WS-REDEFINES REDEFINES WS-NUMBER PIC X(5).",
  },
  {
    term: "OCCURS",
    hindiMeaning: "घटित होना",
    description: "Array (table) define karne ke liye. Kitni baar repeat hoga ye batata hai.",
    example: "01 NAMES PIC A(10) OCCURS 5 TIMES.",
  },
  {
    term: "INDEXED BY",
    hindiMeaning: "सूचकांक द्वारा",
    description: "Table ke liye index define karta hai. SEARCH aur SET use karte waqt.",
  },
  {
    term: "SEARCH",
    hindiMeaning: "खोज",
    description: "Table (array) mein kisi value ko dhundhne ke liye.",
  },
  {
    term: "SORT",
    hindiMeaning: "क्रमबद्ध",
    description: "Records ko kisi field ke basis par arrange karna.",
  },
  {
    term: "MERGE",
    hindiMeaning: "मिलाना",
    description: "Do ya zyada sorted files ko combine karna.",
  },
  {
    term: "CALL",
    hindiMeaning: "बुलाना",
    description: "Doosre program (subprogram) ko invoke karna.",
    example: "CALL 'SUBPROG' USING DATA.",
  },
  {
    term: "DECLARATIVES",
    hindiMeaning: "घोषणाएँ",
    description: "Error handling ke liye PROCEDURE DIVISION ka special section.",
  },
  {
    term: "LINE SEQUENTIAL",
    hindiMeaning: "रेखा क्रमिक",
    description: "File organization jisme records line by line stored hote hain.",
  },
  {
    term: "INDEXED FILE",
    hindiMeaning: "सूचकांकित फ़ाइल",
    description: "File organization jisme key field ke basis par records access hote hain.",
  },
  {
    term: "RELATIVE FILE",
    hindiMeaning: "सापेक्ष फ़ाइ�",
    description: "File organization jisme records position ke basis par access hote hain.",
  },
  {
    term: "IDENTIFICATION DIVISION",
    hindiMeaning: "पहचान विभाग",
    description: "Program ka naam aur metadata. Program ID, author, date wagera yahan hota hai.",
    example: "IDENTIFICATION DIVISION.\nPROGRAM-ID. MY-PROGRAM.",
  },
  {
    term: "ENVIRONMENT DIVISION",
    hindiMeaning: "वातावरण विभाग",
    description: "Program ki external settings — input/output files kahan hain.",
  },
  {
    term: "DATA DIVISION",
    hindiMeaning: "डेटा विभाग",
    description: "Saari variables, files, aur data definitions yahan hoti hain.",
  },
];

export function searchGlossary(query: string): GlossaryTerm[] {
  const q = query.toLowerCase();
  return glossary.filter(
    (g) =>
      g.term.toLowerCase().includes(q) ||
      g.hindiMeaning.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q)
  );
}
