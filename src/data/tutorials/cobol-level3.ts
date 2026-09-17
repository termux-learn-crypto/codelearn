import type { Tutorial } from "@/data/tutorials";

export const L3_LABEL = "Level 3 — Advanced (उन्नत)";

export const cobolLevel3: Tutorial[] = [
  {
    slug: "cobol-db2",
    categoryId: "advanced",
    title: "DB2 with COBOL",
    hindiTitle: "Database operations — DB2 aur COBOL ka integration",
    level: "advanced",
    minutes: 40,
    summary: "DB2 database ke saath COBOL kaise use karein — SQL statements, cursors, aur transactions.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "DB2 Kya Hai",
        content: "DB2 IBM ka relational database hai. COBOL programs database se data padhte aur likhte hain DB2 ke through.\n\n**Mainframe environment mein:**\n- Bank ka data DB2 mein hota hai\n- COBOL program us data ko process karta hai\n- Ye production systems mein daily hota hai",
      },
      {
        title: "EXEC SQL",
        content: "COBOL mein SQL likhne ke liye EXEC SQL ka use hota hai:\n\n```cobol\nEXEC SQL\n    SELECT EMP_NAME, EMP_SALARY\n    INTO :WS-NAME, :WS-SALARY\n    FROM EMPLOYEE\n    WHERE EMP_ID = :WS-ID\nEND-EXEC.\n```\n\n**:** colon variables host variables hain jo COBOL mein define hoti hain.\n**INTO** mein results aate hain.\n**WHERE** se filter hota hai.",
      },
      {
        title: "Cursors — Multiple Rows",
        content: "Jab ek se zyada rows aayein toh cursor use hota hai:\n\n```cobol\nEXEC SQL\n    DECLARE EMP-CURSOR CURSOR FOR\n        SELECT EMP_NAME, EMP_SALARY\n        FROM EMPLOYEE\n        WHERE DEPT = :WS-DEPT\nEND-EXEC.\n\nEXEC SQL OPEN EMP-CURSOR END-EXEC.\n\nPERFORM UNTIL SQLCODE NOT = 0\n    EXEC SQL\n        FETCH EMP-CURSOR\n        INTO :WS-NAME, :WS-SALARY\n    END-EXEC\n    IF SQLCODE = 0\n        DISPLAY WS-NAME \": \" WS-SALARY\n    END-IF\nEND-PERFORM.\n\nEXEC SQL CLOSE EMP-CURSOR END-EXEC.\n```\n\n**SQLCODE** = 0 matlab success, 100 matlab EOF.",
      },
      {
        title: "Transactions — COMMIT/ROLLBACK",
        content: "```cobol\n*> Transaction shuru\nEXEC SQL\n    UPDATE ACCOUNT\n    SET BALANCE = BALANCE - :WS-AMOUNT\n    WHERE ACCT_NO = :WS-FROM-ACCT\nEND-EXEC.\n\nEXEC SQL\n    UPDATE ACCOUNT\n    SET BALANCE = BALANCE + :WS-AMOUNT\n    WHERE ACCT_NO = :WS-TO-ACCT\nEND-EXEC.\n\nIF SQLCODE = 0\n    EXEC SQL COMMIT END-EXEC\nELSE\n    EXEC SQL ROLLBACK END-EXEC\nEND-IF.\n```\n\n**COMMIT** — Changes save karo\n**ROLLBACK** — Changes wapas lo",
      },
    ],
    quiz: [
      {
        question: "DB2 mein SQL likhne ke liye kya use hota hai?",
        options: ["EXEC COBOL", "EXEC SQL", "RUN SQL", "DO SQL"],
        correct: 1,
      },
      {
        question: "Cursor ka use kab hota hai?",
        options: ["Ek row ke liye", "Multiple rows ke liye", "Ek hi column ke liye", "Database create karne ke liye"],
        correct: 1,
      },
      {
        question: "SQLCODE 0 ka matlab kya hai?",
        options: ["Error", "EOF", "Success", "Warning"],
        correct: 2,
      },
    ],
    related: ["cobol-date", "cobol-cics"],
    prev: "cobol-date",
    next: "cobol-cics",
  },
  {
    slug: "cobol-cics",
    categoryId: "advanced",
    title: "CICS Basics",
    hindiTitle: "Transaction processing — CICS ka introduction",
    level: "advanced",
    minutes: 40,
    summary: "CICS (Customer Information Control System) seekhein — mainframe ka transaction processing system.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "CICS Kya Hai",
        content: "CICS ek transaction processing system hai jo IBM mainframes par chalta hai. Ye online transactions handle karta hai — jaise ATM, airline booking, bank transfers.\n\n**CICS vs Batch Processing:**\n- Batch — Ek saath bahut saara kaam\n- CICS — Real-time, ek ek karke transactions\n\nCICS ke bina bank ka ATM kaam nahi karega!",
      },
      {
        title: "CICS Ke Main Commands",
        content: "```cobol\n*> RECEIVE — User se input lena\nEXEC CICS\n    RECEIVE MAP('INMAP')\n          MAPSET('INMAPS')\n          INTO(WS-INPUT)\nEND-EXEC.\n\n*> SEND — Screen par output bhejna\nEXEC CICS\n    SEND MAP('OUTMAP')\n         MAPSET('OUTMAPS')\n         FROM(WS-OUTPUT)\nEND-EXEC.\n\n*> RETURN — Transaction khatam karna\nEXEC CICS RETURN END-EXEC.\n```\n\n**MAP** — Screen layout\n**MAPSET** — Maps ka collection\n**FROM/INTO** — Data exchange",
      },
      {
        title: "CICS Program Structure",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. CICS-DEMO.\n\nENVIRONMENT DIVISION.\n\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-INPUT.\n   05 WS-NAME PIC X(20).\n   05 WS-AMOUNT PIC 9(7).\n\n01 WS-OUTPUT.\n   05 WS-MESSAGE PIC X(50).\n\nPROCEDURE DIVISION.\n    EXEC CICS\n        HANDLE AID\n        KEY('PF3')\n        LABEL(END-PROG)\n    END-EXEC.\n\nMAIN-LOGIC.\n    EXEC CICS\n        RECEIVE MAP('INMAP')\n              MAPSET('INMAPS')\n              INTO(WS-INPUT)\n    END-EXEC.\n\n    DISPLAY \"Name: \" WS-NAME.\n    DISPLAY \"Amount: \" WS-AMOUNT.\n\n    MOVE \"Transaction Complete\" TO WS-MESSAGE.\n    EXEC CICS\n        SEND MAP('OUTMAP')\n             MAPSET('OUTMAPS')\n             FROM(WS-OUTPUT)\n    END-EXEC.\n\n    EXEC CICS RETURN END-EXEC.\n\nEND-PROG.\n    EXEC CICS RETURN END-EXEC.\n```",
      },
      {
        title: "CICS Ke Features",
        content: "**1. Concurrency** — Ek saath bahut se users ka kaam ho sakta hai\n\n**2. Security** — User authentication aur authorization\n\n**3. Recovery** — Agar system crash ho jaye toh bhi data safe rehta hai\n\n**4. Resource Management** — Memory, CPU, files ka manage karna\n\n**5. Communication** — Different systems se baat karna\n\nCICS ke bina mainframe ka koi kaam nahi hota!",
      },
    ],
    quiz: [
      {
        question: "CICS ka full form kya hai?",
        options: ["Central Information Control System", "Customer Information Control System", "Computer Integrated Control System", "Common Interface Control System"],
        correct: 1,
      },
      {
        question: "CICS ka use kab hota hai?",
        options: ["Batch processing ke liye", "Real-time transactions ke liye", "File handling ke liye", "Database management ke liye"],
        correct: 1,
      },
      {
        question: "EXEC CICS RETURN ka use kya hai?",
        options: ["Value return karna", "Transaction khatam karna", "Error return karna", "Memory return karna"],
        correct: 1,
      },
    ],
    related: ["cobol-db2", "cobol-performance"],
    prev: "cobol-db2",
    next: "cobol-performance",
  },
  {
    slug: "cobol-performance",
    categoryId: "advanced",
    title: "Performance Tuning",
    hindiTitle: "COBOL programs ko fast banane ke tips",
    level: "advanced",
    minutes: 30,
    summary: "Performance optimization techniques — programs ko fast aur efficient banayein.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "Performance Kyun Important Hai",
        content: "Mainframe par lakho transactions daily hote hain. Agar program slow hai toh:\n- Users ka time waste hota hai\n- System resources barbad hote hain\n- Business ko nuksan hota hai\n\n**Example:** Bank ka ek second ka delay = lakho rupaye ka nuksan!",
      },
      {
        title: "Optimization Tips",
        content: "**1. Minimize I/O Operations:**\n```cobol\n*> Galat — Har record ke liye file open/close\nPERFORM UNTIL EOF\n    OPEN INPUT FILE\n    READ FILE\n    CLOSE FILE\nEND-PERFORM.\n\n*> Sahi — Ek baar open, baar baar read\nOPEN INPUT FILE.\nPERFORM UNTIL EOF\n    READ FILE\nEND-PERFORM.\nCLOSE FILE.\n```\n\n**2. Use SEARCH instead of loop:**\n```cobol\n*> Galat — Linear search\nPERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 1000\n    IF WS-TABLE(WS-I) = WS-SEARCH\n        DISPLAY \"Found\"\n    END-IF\nEND-PERFORM.\n\n*> Sahi — SEARCH verb\nSEARCH WS-TABLE\n    VARYING WS-I\n    AT END DISPLAY \"Not found\"\n    WHEN WS-TABLE(WS-I) = WS-SEARCH\n        DISPLAY \"Found\"\nEND-SEARCH.\n```\n\n**3. Minimize MOVE operations:**\n```cobol\n*> Galat — Unnecessary moves\nMOVE 0 TO WS-COUNT.\nMOVE 0 TO WS-TOTAL.\nMOVE 0 TO WS-AVG.\n\n*> Sahi — Initialize at declaration\n01 WS-COUNT PIC 9(5) VALUE 0.\n01 WS-TOTAL PIC 9(9) VALUE 0.\n01 WS-AVG   PIC 9(5)V99 VALUE 0.\n```",
      },
      {
        title: "Batch Processing Optimization",
        content: "```cobol\n*> Processing lakho records efficiently\nPROCEDURE DIVISION.\n    OPEN INPUT IN-FILE\n         OUTPUT OUT-FILE.\n\n    PERFORM UNTIL WS-EOF = \"Y\"\n        READ IN-FILE\n            AT END\n                MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                PERFORM PROCESS-RECORD\n        END-READ\n    END-PERFORM.\n\n    CLOSE IN-FILE OUT-FILE.\n    DISPLAY \"Total records processed: \" WS-COUNT.\n    STOP RUN.\n\nPROCESS-RECORD.\n    *> Minimal processing per record\n    ADD 1 TO WS-COUNT.\n    MOVE IN-REC TO OUT-REC.\n    WRITE OUT-RECORD.\n```",
      },
    ],
    quiz: [
      {
        question: "Performance tuning ka main goal kya hai?",
        options: ["Code chhota karna", "Program ko fast banana", "Memory bachana", "Error kam karna"],
        correct: 1,
      },
      {
        question: "File operations optimize karne ka sahi tarika kya hai?",
        options: ["Baar baar open/close karo", "Ek baar open karo", "File ko delete karo", "File ko copy karo"],
        correct: 1,
      },
      {
        question: "SEARCH verb linear loop se better kyun hai?",
        options: ["Kam code hota hai", "Fast hota hai", "Error nahi aata", "Memory kam leta hai"],
        correct: 1,
      },
    ],
    related: ["cobol-cics", "cobol-migration"],
    prev: "cobol-cics",
    next: "cobol-migration",
  },
  {
    slug: "cobol-migration",
    categoryId: "advanced",
    title: "Legacy System Migration",
    hindiTitle: "Purane systems ko naye systems mein migrate karna",
    level: "advanced",
    minutes: 35,
    summary: "Legacy COBOL systems ko modernize karna — challenges, approaches, aur best practices.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "Legacy System Kya Hai",
        content: "Legacy system wo purane systems hain jo abhi bhi kaam kar rahe hain lekin technology outdated ho chuki hai.\n\n**Examples:**\n- 1970s ka banking system jo abhi bhi chal raha hai\n- Airline booking system jo COBOL mein likha gaya tha\n- Government records management system\n\n**Challenge:** In systems ko band nahi kar sakte kyunki lakho log daily use karte hain!",
      },
      {
        title: "Migration Ke Approaches",
        content: "**1. Replatforming** — Same code, naya platform\n- COBOL code ko cloud par le jana\n- Kam effort, kam risk\n\n**2. Refactoring** — Code ko modernize karna\n- Purane code ko tod kar naya banana\n- Zyada effort, zyada benefit\n\n**3. Rebuilding** — Naye se likhna\n- Java/Python mein se likhna\n- Sabse zyada effort, sabse zyada benefit\n\n**4. Replace** — Ready-made software use karna\n- SaaS solutions\n- Least effort, least control",
      },
      {
        title: "Migration Ka Process",
        content: "**Step 1: Assessment**\n- Purane code ko samjho\n- Dependencies identify karo\n- Risk assess karo\n\n**Step 2: Planning**\n- Timeline banao\n- Resources allocate karo\n- Testing strategy banao\n\n**Step 3: Migration**\n- Phase mein migrate karo\n- Har phase ke baad test karo\n- Rollback plan rakho\n\n**Step 4: Validation**\n- Output compare karo\n- Performance test karo\n- User acceptance test karo",
      },
      {
        title: "Best Practices",
        content: "**1. Start Small** — Pehle chhote module se shuru karo\n\n**2. Test Thoroughly** — Har step par test karo\n\n**3. Keep Documentation** — Sab kuch document karo\n\n**4. Train Users** — Logo ko sikhao naye system ke baare mein\n\n**5. Monitor** — Migration ke baad bhi monitor karo\n\n**6. Backup** — Hamesha backup rakho\n\n**7. Rollback Plan** — Agar kuch gadbad ho toh wapas kaise jaana hai",
      },
    ],
    quiz: [
      {
        question: "Legacy system ka matlab kya hai?",
        options: ["Naya system", "Purana system jo abhi bhi chal raha hai", "Fast system", "Expensive system"],
        correct: 1,
      },
      {
        question: "Migration ka pehla step kya hai?",
        options: ["Code likhna", "Assessment karna", "Test karna", "Deploy karna"],
        correct: 1,
      },
      {
        question: "Sabse kam effort wala approach kaunsa hai?",
        options: ["Rebuilding", "Replatforming", "Refactoring", "Replacing"],
        correct: 3,
      },
    ],
    related: ["cobol-performance", "cobol-modern"],
    prev: "cobol-performance",
    next: "cobol-modern",
  },
  {
    slug: "cobol-modern",
    categoryId: "advanced",
    title: "Modern COBOL Features",
    hindiTitle: "COBOL 2022 aur naye features — COBOL abhi bhi evolve ho raha hai",
    level: "advanced",
    minutes: 30,
    summary: "Latest COBOL standards — naye features, object-oriented COBOL, aur cloud integration.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "COBOL 2022 Features",
        content: "COBOL ab bhi evolve ho raha hai! Naye features:\n\n**1. JSON Support**\n```cobol\nEXEC CICS\n    JSON GENERATE WS-JSON\n    FROM WS-DATA\n    NAME WS-NAME\nEND-EXEC.\n```\n\n**2. Regular Expressions**\n```cobol\nIF WS-INPUT FUNCTION REGEX-MATCH(\"^[0-9]+$\")\n    DISPLAY \"Number hai\"\nEND-IF.\n```\n\n**3. BOOLEAN Data Type**\n```cobol\n01 WS-FLAG PIC 1 BOOLEAN.\n```\n\n**4. Integer Types**\n```cobol\n01 WS-BIG-NUM PIC 9(18).\n```",
      },
      {
        title: "Object-Oriented COBOL",
        content: "Haan, COBOL mein bhi OOP hai!\n\n```cobol\nCLASS-ID. BankAccount.\n\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-BALANCE PIC 9(9)V99 VALUE 0.\n\nMETHOD-ID. DEPOSIT.\nPROCEDURE DIVISION USING AMOUNT.\n    ADD AMOUNT TO WS-BALANCE.\nEND METHOD DEPOSIT.\n\nMETHOD-ID. WITHDRAW.\nPROCEDURE DIVISION USING AMOUNT.\n    IF AMOUNT <= WS-BALANCE\n        SUBTRACT AMOUNT FROM WS-BALANCE\n    ELSE\n        DISPLAY \"Insufficient balance!\"\n    END-IF.\nEND METHOD WITHDRAW.\n\nMETHOD-ID. GET-BALANCE.\nPROCEDURE DIVISION RETURNING BAL.\n    MOVE WS-BALANCE TO BAL.\nEND METHOD GET-BALANCE.\n\nEND CLASS BankAccount.\n```\n\n**Methods, encapsulation — sab hai COBOL mein bhi!**",
      },
      {
        title: "Cloud Integration",
        content: "Aaj kal COBOL programs cloud par bhi chalte hain:\n\n**1. IBM Cloud** — COBOL programs ko cloud par deploy karna\n**2. Microservices** — COBOL programs ko chhote chhote services mein todna\n**3. APIs** — REST APIs bana kar naye systems se connect karna\n\n```cobol\n*> Modern COBOL with API integration\nEXEC CICS\n    WEB SERVICE\n    URI('https://api.example.com/data')\n    METHOD('GET')\n    RESPONSE(WS-RESPONSE)\nEND-EXEC.\n```\n\n**COBOL legacy nahi hai — ye modernize ho raha hai!**",
      },
    ],
    quiz: [
      {
        question: "COBOL 2022 mein kya naya aaya?",
        options: ["JSON support", "Regular expressions", "Boolean data type", "Sab kuch"],
        correct: 3,
      },
      {
        question: "Object-Oriented COBOL mein kya hota hai?",
        options: ["Classes aur methods", "Files aur records", "Loops aur conditions", "Arrays aur tables"],
        correct: 0,
      },
      {
        question: "Cloud integration ka matlab kya hai?",
        options: ["COBOL band karna", "COBOL ko cloud par chalana", "COBOL ko delete karna", "COBOL ko freeze karna"],
        correct: 1,
      },
    ],
    related: ["cobol-migration", "cobol-oo"],
    prev: "cobol-migration",
    next: "cobol-oo",
  },
  {
    slug: "cobol-oo",
    categoryId: "advanced",
    title: "Object-Oriented COBOL Deep Dive",
    hindiTitle: "COBOL mein OOP — Classes, Inheritance, Polymorphism",
    level: "advanced",
    minutes: 35,
    summary: "COBOL ka object-oriented programming — classes, methods, inheritance, aur more.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "COBOL Mein OOP Kyun",
        content: "Purane COBOL programs bahut bade ho gaye the. Unhe maintain karna mushkil ho raha tha. Isliye OOP principles COBOL mein laye gaye taaki code reusable aur organized ho.\n\n**COBOL OOP mein:**\n- Classes banana\n- Methods define karna\n- Inheritance support karna\n- Polymorphism support karna",
      },
      {
        title: "Class Banana",
        content: "```cobol\nCLASS-ID. Employee.\n\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-NAME     PIC A(20).\n01 WS-ID       PIC 9(5).\n01 WS-SALARY   PIC 9(9)V99.\n01 WS-DEPT     PIC A(10).\n\nMETHOD-ID. NEW.\nPROCEDURE DIVISION USING NAME ID DEPT.\n    MOVE NAME TO WS-NAME.\n    MOVE ID TO WS-ID.\n    MOVE DEPT TO WS-DEPT.\n    MOVE 0 TO WS-SALARY.\nEND METHOD NEW.\n\nMETHOD-ID. GET-DETAILS.\nPROCEDURE DIVISION RETURNING RESULT.\n    STRING WS-NAME DELIMITED BY SPACE\n           \",\" DELIMITED BY SIZE\n           WS-DEPT DELIMITED BY SPACE\n           INTO RESULT.\nEND METHOD GET-DETAILS.\n\nMETHOD-ID. GIVE-RAISE.\nPROCEDURE DIVISION USING PERCENT.\n    COMPUTE WS-SALARY = WS-SALARY * (1 + PERCENT / 100).\nEND METHOD GIVE-RAISE.\n\nEND CLASS Employee.\n```",
      },
      {
        title: "Factory Class",
        content: "```cobol\nCLASS-ID. EmployeeFactory.\n\nMETHOD-ID. CREATE-EMPLOYEE.\nPROCEDURE DIVISION USING NAME ID DEPT RETURNING EMP.\n    INVOKE Employee \"NEW\"\n        USING NAME ID DEPT\n        RETURNING EMP.\nEND METHOD CREATE-EMPLOYEE.\n\nEND CLASS EmployeeFactory.\n```\n\n**Factory pattern se objects create karna easy ho jata hai.**",
      },
      {
        title: "Inheritance",
        content: "```cobol\nCLASS-ID. Manager INHERITS Employee.\n\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-BONUS PIC 9(7)V99.\n\nMETHOD-ID. NEW.\nPROCEDURE DIVISION USING NAME ID DEPT.\n    INVOKE SUPER \"NEW\" USING NAME ID DEPT.\n    MOVE 0 TO WS-BONUS.\nEND METHOD NEW.\n\nMETHOD-ID. SET-BONUS.\nPROCEDURE DIVISION USING AMOUNT.\n    MOVE AMOUNT TO WS-BONUS.\nEND METHOD SET-BONUS.\n\nMETHOD-ID. GET-FULL-SALARY.\nPROCEDURE DIVISION RETURNING TOTAL.\n    INVOKE SELF \"GET-SALARY\" RETURNING TOTAL.\n    ADD WS-BONUS TO TOTAL.\nEND METHOD GET-FULL-SALARY.\n\nEND CLASS Manager.\n```\n\n**INHERITS keyword se inheritance hota hai.**",
      },
    ],
    quiz: [
      {
        question: "COBOL mein OOP kyun aaya?",
        options: ["Code ko chhota banane ke liye", "Code ko reusable aur organized banane ke liye", "Performance badhane ke liye", "Memory bachane ke liye"],
        correct: 1,
      },
      {
        question: "INHERITS keyword ka use kya hai?",
        options: ["Class banana", "Inheritance implement karna", "Method call karna", "Object create karna"],
        correct: 1,
      },
      {
        question: "Factory class ka use kya hai?",
        options: ["Objects destroy karna", "Objects create karna", "Objects store karna", "Objects copy karna"],
        correct: 1,
      },
    ],
    related: ["cobol-modern", "cobol-projects"],
    prev: "cobol-modern",
    next: "cobol-bank-system",
  },
];
