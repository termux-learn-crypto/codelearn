import type { Tutorial } from "@/data/tutorials";

export const L2_LABEL = "Level 2 — Intermediate (बीच का)";

export const cobolLevel2: Tutorial[] = [
  {
    slug: "cobol-advanced-basics",
    categoryId: "beginner",
    title: "Advanced Basics — REDEFINES, OCCURS, INDEX",
    hindiTitle: "Arrays, redefines, aur indexing — COBOL ki advanced basics",
    level: "beginner",
    minutes: 35,
    summary: "REDEFINES, OCCURS, aur INDEXED BY — ye concepts COBOL ko powerful banate hain.",
    levelLabel: L2_LABEL,
    sections: [
      {
        title: "OCCURS — Arrays (Tables)",
        content: "COBOL mein arrays ko TABLE kehte hain. OCCURS clause se ye define hota hai.\n\n```cobol\n01 WS-NAMES PIC A(10) OCCURS 5 TIMES.\n*> 5 names ka array, har ek 10 characters ka\n\n01 WS-MARKS PIC 9(3) OCCURS 3 TIMES.\n*> 3 marks ka array\n```\n\n**Array mein value rakhna:**\n```cobol\nMOVE \"Rahul\" TO WS-NAMES(1).\nMOVE \"Priya\" TO WS-NAMES(2).\nMOVE 95 TO WS-MARKS(1).\nMOVE 87 TO WS-MARKS(2).\n```\n\n**Array se value lena:**\n```cobol\nDISPLAY WS-NAMES(1).\n*> Output: Rahul\nDISPLAY WS-MARKS(2).\n*> Output: 087\n```",
      },
      {
        title: "Nested OCCURS — 2D Array",
        content: "```cobol\n01 WS-MATRIX.\n   05 WS-ROW PIC 9(3) OCCURS 3 TIMES.\n      10 WS-COL PIC 9(3) OCCURS 3 TIMES.\n*> Ye 3x3 ka matrix hai\n\n*> Value set karna\nMOVE 1 TO WS-COL(1,1).\nMOVE 2 TO WS-COL(1,2).\nMOVE 5 TO WS-COL(2,2).\n\n*> Value lena\nDISPLAY WS-COL(2,2).\n*> Output: 005\n```",
      },
      {
        title: "REDEFINES — Memory Reuse",
        content: "REDEFINES se ek hi memory location ko alag-alag tarike se use kar sakte hain.\n\n```cobol\n01 WS-DATA.\n   05 WS-NUMBER PIC 9(5).\n   05 WS-TEXT   REDEFINES WS-NUMBER PIC X(5).\n\n*> Ab WS-DATA ko number ya text dono tarah se use kar sakte hain\nMOVE 12345 TO WS-NUMBER.\nDISPLAY WS-NUMBER.\n*> Output: 12345\n\nDISPLAY WS-TEXT.\n*> Output: 12345 (as text)\n```\n\n**Use case:** Ek hi data ko do tarike se dekhna.",
      },
      {
        title: "INDEXED BY — Table Index",
        content: "Jab table bahut badi ho toh direct access ke liye INDEX use hota hai.\n\n```cobol\n01 WS-STUDENTS.\n   05 WS-STUDENT PIC A(20) OCCURS 100 TIMES\n      INDEXED BY WS-IDX.\n\n*> Index set karna\nSET WS-IDX TO 1.\nDISPLAY WS-STUDENT(WS-IDX).\n\n*> Loop mein use\nPERFORM VARYING WS-IDX FROM 1 BY 1 UNTIL WS-IDX > 100\n    DISPLAY WS-STUDENT(WS-IDX)\nEND-PERFORM.\n```\n\n**SEARCH — Index se dhundhna:**\n```cobol\nSEARCH WS-STUDENT\n    VARYING WS-IDX\n    AT END DISPLAY \"Nahi mila\"\n    WHEN WS-STUDENT(WS-IDX) = \"Rahul\"\n        DISPLAY \"Mil gaya index: \" WS-IDX\nEND-SEARCH.\n```",
      },
      {
        title: "LEVEL 88 — Condition Names (Revisited)",
        content: "```cobol\n01 WS-INPUT PIC X(10).\n   88 VALID-INPUT VALUES ARE \"Y\", \"y\", \"YES\", \"yes\".\n   88 INVALID-INPUT VALUES ARE \"N\", \"n\", \"NO\", \"no\".\n\n01 WS-GRADE PIC X(2).\n   88 EXCELLENT VALUE \"A+\".\n   88 GOOD VALUE \"A\".\n   88 AVERAGE VALUE \"B\".\n   88 BELOW-AVG VALUES \"C\", \"D\", \"F\".\n\n*> Ab conditions aise lagao:\nIF VALID-INPUT\n    DISPLAY \"Sahi hai\"\nELSE IF INVALID-INPUT\n    DISPLAY \"Galat hai\"\nELSE\n    DISPLAY \"Samajh nahi aaya\"\nEND-IF.\n\nIF EXCELLENT\n    DISPLAY \"Bahut accha!\"\nELSE IF BELOW-AVG\n    DISPLAY \"Aur mehnat karo!\"\nEND-IF.\n```",
      },
    ],
    quiz: [
      {
        question: "OCCURS clause kis liye use hota hai?",
        options: ["Variable banane ke liye", "Array banane ke liye", "File banane ke liye", "Loop banane ke liye"],
        correct: 1,
      },
      {
        question: "REDEFINES ka use kya hai?",
        options: ["Variable ka naam badalna", "Memory location ko reuse karna", "Value ko delete karna", "File ko redefine karna"],
        correct: 1,
      },
      {
        question: "INDEXED BY kis liye hota hai?",
        options: ["File indexing ke liye", "Table mein direct access ke liye", "Variable indexing ke liye", "Loop indexing ke liye"],
        correct: 1,
      },
      {
        question: "SEARCH verb kya karta hai?",
        options: ["File dhundhta hai", "Table mein value dhundhta hai", "Variable dhundhta hai", "Program dhundhta hai"],
        correct: 1,
      },
    ],
    related: ["cobol-files", "cobol-sort"],
    prev: "cobol-files",
    next: "cobol-sort",
  },
  {
    slug: "cobol-sort",
    categoryId: "intermediate",
    title: "SORT aur MERGE",
    hindiTitle: "Data ko sort aur merge karna — COBOL ka powerful feature",
    level: "intermediate",
    minutes: 30,
    summary: "SORT aur MERGE verbs seekhein — records ko arrange karna aur files ko combine karna.",
    levelLabel: L2_LABEL,
    sections: [
      {
        title: "SORT — Records Ko Sort Karna",
        content: "SORT ek built-in feature hai jo records ko kisi field ke basis par arrange karta hai.\n\n```cobol\nSORT WS-SORT-FILE\n    ON ASCENDING KEY S-NAME\n    INPUT PROCEDURE IS GET-INPUT\n    OUTPUT PROCEDURE IS PUT-OUTPUT.\n```\n\n**ASCENDING** — Chhota se bada\n**DESCENDING** — Bada se chhota",
      },
      {
        title: "SORT Ka Complete Example",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. SORT-DEMO.\n\nENVIRONMENT DIVISION.\nINPUT-OUTPUT SECTION.\nFILE-CONTROL.\n    SELECT INPUT-FILE ASSIGN TO \"unsorted.txt\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n    SELECT SORT-FILE ASSIGN TO \"sortwork.tmp\".\n    SELECT OUTPUT-FILE ASSIGN TO \"sorted.txt\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n\nDATA DIVISION.\nFILE SECTION.\nFD INPUT-FILE.\n01 INPUT-REC.\n   05 I-NAME PIC A(20).\n   05 I-MARKS PIC 9(3).\n\nSD SORT-FILE.\n01 SORT-REC.\n   05 S-NAME PIC A(20).\n   05 S-MARKS PIC 9(3).\n\nFD OUTPUT-FILE.\n01 OUTPUT-REC.\n   05 O-NAME PIC A(20).\n   05 O-MARKS PIC 9(3).\n\nPROCEDURE DIVISION.\n    SORT SORT-FILE\n        ON ASCENDING KEY S-NAME\n        INPUT PROCEDURE IS GET-RECORDS\n        OUTPUT PROCEDURE IS PUT-RECORDS.\n    STOP RUN.\n\nGET-RECORDS.\n    OPEN INPUT INPUT-FILE.\n    PERFORM UNTIL EOF\n        READ INPUT-FILE\n            AT END MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                MOVE I-NAME TO S-NAME\n                MOVE I-MARKS TO S-MARKS\n                RELEASE SORT-REC\n        END-READ\n    END-PERFORM.\n    CLOSE INPUT-FILE.\n\nPUT-RECORDS.\n    OPEN OUTPUT OUTPUT-FILE.\n    PERFORM UNTIL EOF\n        RETURN SORT-FILE\n            AT END MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                MOVE S-NAME TO O-NAME\n                MOVE S-MARKS TO O-MARKS\n                WRITE OUTPUT-REC\n        END-RETURN\n    END-PERFORM.\n    CLOSE OUTPUT-FILE.\n```",
      },
      {
        title: "MERGE — Do Files Ko Combine Karna",
        content: "MERGE do ya zyada sorted files ko ek file mein combine karta hai.\n\n```cobol\nMERGE WS-MERGE-FILE\n    ON ASCENDING KEY M-NAME\n    USING FILE-1\n    USING FILE-2\n    GIVING OUTPUT-FILE.\n```\n\n**Rules:**\n- Dono files pehle se sorted honi chahiye\n- Same key field hona chahiye\n- Output bhi sorted aayega",
      },
      {
        title: "GIVING Option — Direct Output",
        content: "```cobol\nSORT SORT-FILE\n    ON DESCENDING KEY S-MARKS\n    INPUT PROCEDURE IS GET-INPUT\n    GIVING OUTPUT-FILE.\n```\n\nYe direct file mein likh deta hai — OUTPUT PROCEDURE ki zaroorat nahi.",
      },
    ],
    quiz: [
      {
        question: "SORT ka ASCENDING ka matlab kya hai?",
        options: ["Bada se chhota", "Chhota se bada", "Random order", "Reverse order"],
        correct: 1,
      },
      {
        question: "MERGE karne ke liye files kaisi honi chahiye?",
        options: ["Random", "Sorted", "Empty", "Large"],
        correct: 1,
      },
      {
        question: "SD kya hai?",
        options: ["Sort Division", "Sort Description", "Sort Data", "Sort Directory"],
        correct: 1,
      },
      {
        question: "RELEASE ka use kya hai?",
        options: ["File release karna", "Sorted record ko output mein bhejna", "Memory release karna", "Program release karna"],
        correct: 1,
      },
    ],
    related: ["cobol-advanced-basics", "cobol-copy"],
    prev: "cobol-advanced-basics",
    next: "cobol-copy",
  },
  {
    slug: "cobol-copy",
    categoryId: "intermediate",
    title: "COPY aur REPLACING",
    hindiTitle: "Reusable code banana — COPY verb aur macros",
    level: "intermediate",
    minutes: 25,
    summary: "COPY aur REPLACING se reusable code likhein — DRY principle follow karein.",
    levelLabel: L2_LABEL,
    sections: [
      {
        title: "COPY Ka Use",
        content: "COPY ek file ki contents ko directly program mein paste karta hai. Jaise #include C/C++ mein.\n\n```cobol\nCOPY WS-STUDENT-RECORD.\n*> Iske jagah WS-RECORD.COB file ka content aa jayega\n```\n\n**COPY file kya hai?**\nEk simple text file jismein data definitions hoti hain.\n\nExample — WS-RECORD.COB:\n```cobol\n01 WS-RECORD.\n   05 WS-NAME   PIC A(20).\n   05 WS-AGE    PIC 9(3).\n   05 WS-GRADE  PIC X(1).\n```",
      },
      {
        title: "COPY REPLACING",
        content: "COPY mein values ko replace bhi kar sakte hain:\n\n```cobol\nCOPY WS-RECORD\n    REPLACING ==WS-NAME== BY ==WS-EMP-NAME==\n                ==WS-AGE== BY ==WS-EMP-AGE==.\n```\n\n**Ye same copy hai lekin names badal diye.**\n\n**Use case:** Ek hi record structure multiple jagah use karna with different names.",
      },
      {
        title: "Practical Example",
        content: "```cobol\n*> HR-RECORD.COB file:\n01 EMPLOYEE-RECORD.\n   05 EMP-ID      PIC 9(5).\n   05 EMP-NAME    PIC A(20).\n   05 EMP-DEPT    PIC A(10).\n   05 EMP-SALARY  PIC 9(7)V99.\n\n*> Main program mein:\nDATA DIVISION.\nFILE SECTION.\nFD EMP-FILE.\nCOPY HR-RECORD\n    REPLACING ==EMPLOYEE-RECORD== BY ==INPUT-REC==.\n\nWORKING-STORAGE SECTION.\nCOPY HR-RECORD\n    REPLACING ==EMPLOYEE-RECORD== BY ==WS-EMP-REC==.\n```\n\nAb ek hi definition do jagah use ho gayi!",
      },
    ],
    quiz: [
      {
        question: "COPY ka use kya hai?",
        options: ["File copy karna", "Code reuse karna", "Variable copy karna", "Program copy karna"],
        correct: 1,
      },
      {
        question: "COPY REPLACING kya karta hai?",
        options: ["Code delete karta hai", "Names ko replace karta hai", "File rename karta hai", "Variable rename karta hai"],
        correct: 1,
      },
    ],
    related: ["cobol-sort", "cobol-subprograms"],
    prev: "cobol-sort",
    next: "cobol-subprograms",
  },
  {
    slug: "cobol-subprograms",
    categoryId: "intermediate",
    title: "CALL aur Subprograms",
    hindiTitle: "Modular programming — CALL verb aur subprograms banana",
    level: "intermediate",
    minutes: 35,
    summary: "CALL se doosre programs ko call karna, LINKAGE SECTION, aur parameter passing.",
    levelLabel: L2_LABEL,
    sections: [
      {
        title: "CALL Ka Use",
        content: "CALL se ek program doosre program ko invoke karta hai. Ye modular programming ka hissa hai.\n\n```cobol\nCALL 'CALC-TAX' USING WS-AMOUNT WS-TAX.\n```\n\nYe `CALC-TAX` naam ka program call karega aur usse WS-AMOUNT aur WS-TAX bhejega.",
      },
      {
        title: "Subprogram Banana",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. CALC-TAX.\n\nDATA DIVISION.\nLINKAGE SECTION.\n01 LS-AMOUNT PIC 9(7)V99.\n01 LS-TAX    PIC 9(7)V99.\n\nPROCEDURE DIVISION USING LS-AMOUNT LS-TAX.\n    COMPUTE LS-TAX = LS-AMOUNT * 0.18.\n    EXIT PROGRAM.\n```\n\n**LINKAGE SECTION** — Yahan parameters define hote hain jo caller se aate hain.\n**USING** — Kaunse variables pass ho rahe hain.",
      },
      {
        title: "Calling Program",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. MAIN-APP.\n\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-AMOUNT PIC 9(7)V99 VALUE 10000.\n01 WS-TAX    PIC 9(7)V99.\n\nPROCEDURE DIVISION.\n    DISPLAY \"Amount: \" WS-AMOUNT.\n    CALL 'CALC-TAX' USING WS-AMOUNT WS-TAX.\n    DISPLAY \"Tax: \" WS-TAX.\n    DISPLAY \"Total: \" WS-AMOUNT + WS-TAX.\n    STOP RUN.\n```\n\n**Output:**\n```\nAmount: 10000.00\nTax: 1800.00\nTotal: 11800.00\n```",
      },
      {
        title: "CANCEL — Program Unload",
        content: "```cobol\nCALL 'CALC-TAX' USING WS-AMOUNT WS-TAX.\n*> ... kuch kaam ...\nCANCEL 'CALC-TAX'.\n*> Ab ye program memory se hat jayega\n```\n\nCANCEL program ko memory se hata deta hai. Jab zaroorat na ho toh use karo.",
      },
    ],
    quiz: [
      {
        question: "CALL ka use kya hai?",
        options: ["File call karna", "Doosre program ko invoke karna", "Variable call karna", "Function call karna"],
        correct: 1,
      },
      {
        question: "LINKAGE SECTION kya hai?",
        options: ["Variables define karne ka section", "Parameters define karne ka section", "File define karne ka section", "Paragraph define karne ka section"],
        correct: 1,
      },
      {
        question: "CANCEL ka use kya hai?",
        options: ["Program cancel karna", "Program ko memory se hatana", "Error cancel karna", "Loop cancel karna"],
        correct: 1,
      },
    ],
    related: ["cobol-copy", "cobol-errors"],
    prev: "cobol-copy",
    next: "cobol-errors",
  },
  {
    slug: "cobol-errors",
    categoryId: "intermediate",
    title: "Error Handling — DECLARATIVES",
    hindiTitle: "Errors ko handle karna — DECLARATIVES aur error handling",
    level: "intermediate",
    minutes: 30,
    summary: "DECLARATIVES se errors ko gracefully handle karein — file errors, runtime errors.",
    levelLabel: L2_LABEL,
    sections: [
      {
        title: "DECLARATIVES Kya Hai",
        content: "DECLARATIVES error handling ke liye PROCEDURE DIVISION ka ek special section hai.\n\n```cobol\nPROCEDURE DIVISION.\nDECLARATIVES.\n    FILE-ERROR SECTION.\n        USE AFTER ERROR ON INPUT-FILE\n        DISPLAY \"File mein error aa gaya!\".\n        DISPLAY \"Error code: \" RETURN-CODE.\n        STOP RUN.\nEND DECLARATIVES.\n```\n\n**USE AFTER ERROR** — Jab error ho tab ye section chalega.",
      },
      {
        title: "File Error Handling",
        content: "```cobol\nDECLARATIVES.\n    FILE-ERROR SECTION.\n        USE AFTER ERROR ON INPUT-FILE\n            DISPLAY \"Input file nahi mili!\".\n            STOP RUN.\n        USE AFTER ERROR ON OUTPUT-FILE\n            DISPLAY \"Output file mein error!\".\n            STOP RUN.\n        USE AFTER ERROR ON STUDENT-FILE\n            DISPLAY \"Student file error!\".\n            STOP RUN.\nEND DECLARATIVES.\n```\n\nHar file ka alag error section ho sakta hai.",
      },
      {
        title: "RETURN-CODE",
        content: "RETURN-CODE system mein error ka code hota hai.\n\n```cobol\nIF RETURN-CODE NOT = 0\n    DISPLAY \"Program mein error hai!\"\n    DISPLAY \"Error code: \" RETURN-CODE\nEND-IF.\n```\n\n**Common Error Codes:**\n- 0 — Success\n- 1-99 — File errors\n- 100+ — Application errors",
      },
      {
        title: "Practical Error Handling",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. SAFE-READ.\n\nENVIRONMENT DIVISION.\nINPUT-OUTPUT SECTION.\nFILE-CONTROL.\n    SELECT IN-FILE ASSIGN TO \"data.txt\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n\nDATA DIVISION.\nFILE SECTION.\nFD IN-FILE.\n01 IN-RECORD PIC A(50).\n\nWORKING-STORAGE SECTION.\n01 WS-EOF PIC X(1) VALUE \"N\".\n01 WS-COUNT PIC 9(5) VALUE 0.\n\nPROCEDURE DIVISION.\nDECLARATIVES.\n    FILE-ERR SECTION.\n        USE AFTER ERROR ON IN-FILE\n            DISPLAY \"File open nahi ho payi!\"\n            DISPLAY \"Kya file maujood hai? Check karo.\"\n            STOP RUN.\nEND DECLARATIVES.\n\nMAIN-LOGIC.\n    OPEN INPUT IN-FILE.\n    PERFORM UNTIL WS-EOF = \"Y\"\n        READ IN-FILE\n            AT END MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                ADD 1 TO WS-COUNT\n                DISPLAY WS-COUNT \": \" IN-RECORD\n        END-READ\n    END-PERFORM.\n    CLOSE IN-FILE.\n    DISPLAY \"Total records: \" WS-COUNT.\n    STOP RUN.\n```",
      },
    ],
    quiz: [
      {
        question: "DECLARATIVES kahan hota hai?",
        options: ["DATA DIVISION mein", "PROCEDURE DIVISION ke start mein", "IDENTIFICATION DIVISION mein", "ENVIRONMENT DIVISION mein"],
        correct: 1,
      },
      {
        question: "USE AFTER ERROR ka use kya hai?",
        options: ["Error ko ignore karna", "Error hone par section chalana", "Error ko log karna", "Error ko fix karna"],
        correct: 1,
      },
      {
        question: "RETURN-CODE 0 ka matlab kya hai?",
        options: ["Error hai", "Program successfully chala", "File nahi mili", "Unknown error"],
        correct: 1,
      },
    ],
    related: ["cobol-subprograms", "cobol-date"],
    prev: "cobol-subprograms",
    next: "cobol-date",
  },
  {
    slug: "cobol-date",
    categoryId: "intermediate",
    title: "Date aur Time Functions",
    hindiTitle: "COBOL mein date aur time kaise handle karein",
    level: "intermediate",
    minutes: 25,
    summary: "DATE, TIME, DAY functions seekhein — business applications mein bahut zaruri hai.",
    levelLabel: L2_LABEL,
    sections: [
      {
        title: "CURRENT-DATE",
        content: "```cobol\n01 WS-DATE-TIME.\n   05 WS-DATE.\n      10 WS-YEAR   PIC 9(4).\n      10 WS-MONTH  PIC 9(2).\n      10 WS-DAY    PIC 9(2).\n   05 WS-TIME.\n      10 WS-HOUR   PIC 9(2).\n      10 WS-MIN    PIC 9(2).\n      10 WS-SEC    PIC 9(2).\n      10 WS-MS     PIC 9(2).\n\nACCEPT WS-DATE-TIME FROM CURRENT-DATE.\nDISPLAY \"Date: \" WS-YEAR \"/\" WS-MONTH \"/\" WS-DAY.\nDISPLAY \"Time: \" WS-HOUR \":\" WS-MIN \":\" WS-SEC.\n```\n\n**Output:**\n```\nDate: 2024/01/15\nTime: 14:30:45\n```",
      },
      {
        title: "DATE Computation",
        content: "```cobol\n*> Current date se calculation\nACCEPT WS-DATE FROM CURRENT-DATE.\n\n*> Month ke last day ka calculation\nCOMPUTE WS-LAST-DAY = FUNCTION MOD(\n    FUNCTION INTEGER-OF-DATE(\n        WS-YEAR * 10000 + WS-MONTH * 100 + 1\n    ) + 31,\n    31\n).\n```\n\n**Business Use:**\n- Invoice date se due date nikalna\n- Age calculation\n- Report generation with date filter",
      },
      {
        title: "FUNCTION Days Calculation",
        content: "```cobol\n*> Do dates ke beech ka difference\nCOMPUTE WS-DAYS = FUNCTION INTEGER-OF-DATE(WS-DATE2)\n              - FUNCTION INTEGER-OF-DATE(WS-DATE1).\n\n*> Date mein days add karna\nCOMPUTE WS-NEW-DATE = FUNCTION DATE-OF-INTEGER(\n    FUNCTION INTEGER-OF-DATE(WS-DATE1) + WS-DAYS\n).\n```\n\nYe business mein bahut kaam aata hai — jaise EMI due date nikalna.",
      },
    ],
    quiz: [
      {
        question: "CURRENT-DATE se kya milta hai?",
        options: ["Sirf date", "Sirf time", "Date aur time dono", "Sirf year"],
        correct: 2,
      },
      {
        question: "ACCEPT WS-DATE FROM DATE ka use kya hai?",
        options: ["Time lena", "Date lena", "Year lena", "Day lena"],
        correct: 1,
      },
    ],
    related: ["cobol-errors", "cobol-projects"],
    prev: "cobol-errors",
    next: "cobol-projects",
  },
];
