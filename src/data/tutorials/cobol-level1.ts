import type { Tutorial } from "@/data/tutorials";

export const L1_LABEL = "Level 1 — Beginner (शुरुआत)";

export const cobolLevel1: Tutorial[] = [
  {
    slug: "cobol-kya-hai",
    categoryId: "beginner",
    title: "COBOL Kya Hai? — COBOL Ka Parichay",
    hindiTitle: "COBOL ek business programming language hai jo mainframe computers par chalti hai",
    level: "beginner",
    minutes: 20,
    summary: "COBOL kya hai, uska itihaas, kyun important hai, aur kahan kahan use hota hai — ye sab Hinglish mein samjhein.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "COBOL Ka Matlab",
        content: "COBOL ka full form hai **Common Business-Oriented Language**. Jaisa naam se hi pata chalta hai, ye language business ke kaam ke liye bani hai.\n\nSocho tum ek bank mein ho aur tumhe 10,000 logo ke accounts ka data manage karna hai. Excel mein toh nahi ho payega itna bada data. Wahan pe COBOL kaam aata hai — banking, insurance, government offices, airlines — sabmein COBOL use hota hai.\n\nCOBOL 1959 mein bani thi — haan, jab tumhare dada-dadi paida bhi nahi hue the! Uss waqt computers bahut bade the aur sirf scientists use karte the. Lekin COBOL ne common man ke liye programming accessible bana di.\n\nEk baat jo sabko pata honi chahiye: **aaj bhi 95% ATM transactions COBOL se chalte hain**. Tum jab bhi ATM se paise nikalte ho, piche COBOL ka code kaam kar raha hota hai!",
      },
      {
        title: "COBOL Ka Itihaas (History)",
        content: "**1959** — CODASYL (Conference on Data Systems Languages) ne COBOL banaya. Grace Hopper ek famous computer scientist thi jinhone isme bahut bada contribution diya.\n\n**1960s** — COBOL bahut popular ho gayi. IBM ne support diya aur mainframe computers par ye standard ban gayi.\n\n**1970s-80s** — COBOL ka golden period. Duniya bhar ki banks, airlines, aur government ne COBOL adopt ki. Lakho log ne COBOL seekhi.\n\n**1990s** — New languages aayi (Java, Python) lekin COBOL abhi bhi exist karti hai kyunki purane systems abhi bhi chal rahe hain.\n\n**2020s** — COVID ke time pata chala ki kitne important systems COBOL par depend karte hain. New York state ne emergency mein COBOL programmers hire kiye!\n\n**Aaj** — COBOL nahi mara hai. Har saal naye updates aa rahe hain aur COBOL 2022 version bhi aaya hai.",
      },
      {
        title: "COBOL Ki Special Baatein",
        content: "**1. English Jaisi Syntax** — COBOL ka code padho toh lagta hai jaise English mein kuch likha hai. Isliye beginners ke liye easy hai.\n\n**2. Self-Documenting** — COBOL ka code itna descriptive hota hai ki koi bhi padhke samajh sakta hai ki program kya kar raha hai.\n\n**3. Business Focus** — COBOL specifically business ke liye bani hai. Isme file handling, decimal arithmetic, aur report generation bahut strong hai.\n\n**4. File Processing** — Lakho records process karna COBOL ki forte hai.\n\n**5. Portability** — COBOL almost har mainframe par chalti hai — IBM, Unisys, HP sab par.",
      },
      {
        title: "COBOL Kahan Kahan Use Hota Hai",
        content: "**Banking** — Tumhara bank account, transactions, interest calculation — sab COBOL se hota hai.\n\n**Insurance** — Policy management, claims processing.\n\n**Airlines** — Flight booking, scheduling.\n\n**Government** — Tax records, social security, driving licenses.\n\n**Retail** — Inventory management, billing systems.\n\n**Healthcare** — Patient records, billing.\n\nEk fun fact: **96% of ATM transactions COBOL par chalte hain**. Jab bhi tum ATM se paise nikalte ho, COBOL kaam kar raha hota hai!",
      },
      {
        title: "COBOL vs Other Languages",
        content: "**COBOL vs Python:** Python seekhna easy hai lekin COBOL ki speed mainframe par zyada hai heavy data processing mein.\n\n**COBOL vs Java:** Java modern hai lekin purane banking systems mein COBOL hi use hota hai kyunki wo proven hai.\n\n**COBOL vs C:** C fast hai lekin COBOL business logic ke liye better hai.\n\n**Kyun COBOL seekhein?**\n- Mainframe jobs ke liye zaruri hai\n- Banking/Insurance mein demand hai\n- High salary milti hai experienced COBOL developers ko\n- Competition kam hai kyunki kam log seekh rahe hain",
      },
      {
        title: "COBOL Ka Ek Simple Program",
        content: "Dekho ye kitna easy hai — program padhke hi samajh aa jata hai:\n\n```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO.\n\nPROCEDURE DIVISION.\n    DISPLAY \"Namaste! Main COBOL seekh raha hoon.\".\n    STOP RUN.\n```\n\nIsme kya ho raha hai:\n- IDENTIFICATION DIVISION — program ka naam\n- PROCEDURE DIVISION — actual code\n- DISPLAY — screen par dikhana (jaise print)\n- STOP RUN — program khatam\n\nKitna simple hai! English mein likha hai aur computer samajh raha hai.",
      },
    ],
    quiz: [
      {
        question: "COBOL ka full form kya hai?",
        options: [
          "Common Business-Oriented Language",
          "Computer Business Language",
          "Central Binary Language",
          "Common Basic Language",
        ],
        correct: 0,
      },
      {
        question: "COBOL kab bani thi?",
        options: ["1945", "1959", "1970", "1985"],
        correct: 1,
      },
      {
        question: "COBOL mein screen par dikhane ke liye kya use hota hai?",
        options: ["PRINT", "DISPLAY", "SHOW", "WRITE"],
        correct: 1,
      },
      {
        question: "ATM transactions mein kitne percent COBOL use hota hai?",
        options: ["50%", "75%", "95%", "99%"],
        correct: 2,
      },
    ],
    related: ["pehla-cobol-program", "cobol-structure"],
    next: "pehla-cobol-program",
  },
  {
    slug: "pehla-cobol-program",
    categoryId: "beginner",
    title: "Pehla COBOL Program — Hello World",
    hindiTitle: "Apna pehla COBOL program likhein aur samjhein ki har line kya karti hai",
    level: "beginner",
    minutes: 25,
    summary: "Step-by-step apna pehla COBOL program likhein — Hello World se shuru karein.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "COBOL Ka Basic Structure",
        content: "Har COBOL program char divisions mein hota hai:\n\n```\n1. IDENTIFICATION DIVISION  → Program ka naam\n2. ENVIRONMENT DIVISION     → Settings\n3. DATA DIVISION            → Variables\n4. PROCEDURE DIVISION       → Actual code\n```\n\nYe structure yaad rakhna zaruri hai — ye COBOL ki pehchan hai. Baki languages mein itna strict structure nahi hota.",
      },
      {
        title: "Hello World Program",
        content: "Chalo apna pehla program likhte hain:\n\n```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO-WORLD.\n\nPROCEDURE DIVISION.\n    DISPLAY \"Namaste! Main COBOL seekh raha hoon.\".\n    DISPLAY \"Mera naam [TUMHARA NAAM] hai.\".\n    STOP RUN.\n```\n\nYe program kya karega? Screen par ye do lines dikhayega:\n```\nNamaste! Main COBOL seekh raha hoon.\nMera naam Rahul hai.\n```\n\nHar line ka matlab:\n- `IDENTIFICATION DIVISION.` — Ye bata raha hai ki ye program ka start hai\n- `PROGRAM-ID. HELLO-WORLD.` — Program ka naam\n- `PROCEDURE DIVISION.` — Yahan se actual kaam shuru\n- `DISPLAY \"...\"` — Jo likha hai wo screen par dikhao\n- `STOP RUN.` — Program yahan khatam",
      },
      {
        title: "COBOL Ke Rules (Syntax)",
        content: "COBOL mein kuch rules hain jo follow karne padenge:\n\n**1. Period (.) Zaruri Hai** — Har statement ke end mein period lagana hai. Bina period ke error aayega.\n\n**2. Column Rules** — Pehle mainframe par columns matter karte the. Ab naye compilers mein ye strict nahi hai.\n\n**3. DIVISION Ka Naam** — IDENTIFICATION, ENVIRONMENT, DATA, PROCEDURE — ye exactly aise hi likhne hain.\n\n**4. Quotation Marks** — Strings mein double quotes \" ya single quotes ' dono use kar sakte hain.\n\n**5. Small/Big Letters** — COBOL case-insensitive hai. `DISPLAY` aur `display` dono chalega.",
      },
      {
        title: "Program Kaise Chalayein",
        content: "GnuCOBOL install karo (free hai):\n\n**Step 1:** GnuCOBOL download karo\n- Windows: gnu.org/download\n- Linux: `sudo apt install gnucobol`\n\n**Step 2:** File banao\n- `hello.cbl` naam se save karo\n\n**Step 3:** Compile karo\n- Terminal mein: `cobc -x hello.cbl`\n\n**Step 4:** Chalao\n- Terminal mein: `./hello`\n\n**Ya online try karo:**\n- compileonline.com par jaake COBOL select karo\n- Code paste karo aur Run dabaao\n\nPehli baar agar error aaye toh ghabrao nahi — ye normal hai! Error message padho aur fix karo.",
      },
      {
        title: "Amended Program — Thoda Aur Interesting",
        content: "Ab thoda aur interesting banate hain:\n\n```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. MY-INTRO.\n\nPROCEDURE DIVISION.\n    DISPLAY \"=====================\".\n    DISPLAY \"  MERA INTRODUCTION  \".\n    DISPLAY \"=====================\".\n    DISPLAY \" \" .\n    DISPLAY \"Naam: Rahul Kumar\".\n    DISPLAY \"City: Mumbai\".\n    DISPLAY \"Seekh raha hoon: COBOL\".\n    DISPLAY \" \" .\n    DISPLAY \"COBOL bahut interesting hai!\".\n    STOP RUN.\n```\n\nIsme kya naya hai:\n- Multiple DISPLAY statements\n- Decorative lines banane ke liye\n- Blank line dikhane ke liye `DISPLAY \" \"`\n\nOutput aisa aayega:\n```\n=====================\n  MERA INTRODUCTION  \n=====================\n\nNaam: Rahul Kumar\nCity: Mumbai\nSeekh raha hoon: COBOL\n\nCOBOL bahut interesting hai!\n```",
      },
    ],
    quiz: [
      {
        question: "COBOL program mein pehla division kaunsa hota hai?",
        options: ["ENVIRONMENT DIVISION", "IDENTIFICATION DIVISION", "DATA DIVISION", "PROCEDURE DIVISION"],
        correct: 1,
      },
      {
        question: "Screen par output dikhane ke liye kaunsa verb use hota hai?",
        options: ["PRINT", "DISPLAY", "SHOW", "WRITE"],
        correct: 1,
      },
      {
        question: "Program khatam karne ke liye kya likhte hain?",
        options: ["END.", "STOP RUN.", "FINISH.", "QUIT."],
        correct: 1,
      },
      {
        question: "COBOL case-sensitive hai ya nahi?",
        options: ["Haan, small/big letters matter karte hain", "Nahi, dono chalte hain", "Sirf capital letters chalte hain", "Ye compiler par depend karta hai"],
        correct: 1,
      },
    ],
    related: ["cobol-kya-hai", "cobol-variables"],
    prev: "cobol-kya-hai",
    next: "cobol-structure",
  },
  {
    slug: "cobol-structure",
    categoryId: "beginner",
    title: "COBOL Program Ki Structure Samjhein",
    hindiTitle: "Divisions, Sections, Paragraphs — COBOL ka poora structure",
    level: "beginner",
    minutes: 30,
    summary: "COBOL program ka architecture samjhein — divisions, sections, paragraphs kya hain aur kyun zaruri hain.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "COBOL Ka Hierarchical Structure",
        content: "COBOL program ka structure ek tree jaisa hai:\n\n```\nDIVISION (sabse bada)\n  └── SECTION\n       └── PARAGRAPH\n            └── SENTENCE\n                 └── STATEMENT\n```\n\nYe hierarchy yaad rakhna important hai. Ye COBOL ko organized banata hai.",
      },
      {
        title: "IDENTIFICATION DIVISION",
        content: "Ye sabse pehla division hota hai. Isme program ki basic information hoti hai.\n\n```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. BANK-ACCOUNT.\nAUTHOR. RAHUL KUMAR.\nDATE-WRITTEN. 2024-01-15.\nSECURITY. CLASSIFIED.\n```\n\nYe sab optional hain sirf PROGRAM-ID zaruri hai. Baaki sab additional info hai.",
      },
      {
        title: "ENVIRONMENT DIVISION",
        content: "Ye division batata hai ki program kis environment mein chal raha hai — input/output files kahan hain.\n\n```cobol\nENVIRONMENT DIVISION.\nINPUT-OUTPUT SECTION.\nFILE-CONTROL.\n    SELECT INPUT-FILE ASSIGN TO \"data.txt\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n    SELECT OUTPUT-FILE ASSIGN TO \"output.txt\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n```\n\n- `INPUT-OUTPUT SECTION` — Files ki settings\n- `FILE-CONTROL` — Kaunsi file kahan hai\n- `SELECT` — File ka naam\n- `ASSIGN TO` — File ka path\n- `ORGANIZATION` — File kaise store hai",
      },
      {
        title: "DATA DIVISION",
        content: "Ye sabse important division hai — yahan saari variables define hoti hain.\n\n```cobol\nDATA DIVISION.\nFILE SECTION.\nFD INPUT-FILE.\n01 STUDENT-RECORD.\n   05 STUDENT-NAME PIC A(20).\n   05 STUDENT-AGE  PIC 9(3).\n\nWORKING-STORAGE SECTION.\n01 WS-COUNTER PIC 9(5) VALUE 0.\n01 WS-NAME    PIC A(20) VALUE \"Rahul\".\n01 WS-RESULT  PIC 9(7)V99.\n```\n\n- `FILE SECTION` — File records define\n- `WORKING-STORAGE SECTION` — Variables define\n- `PIC` — Picture clause (data type)\n- `9(5)` — 5 digit number\n- `A(20)` — 20 character string\n- `V99` — Decimal point ke baad 2 digits",
      },
      {
        title: "PROCEDURE DIVISION",
        content: "Ye actual code hai — jo kuch karna hai wo yahan likhte hain.\n\n```cobol\nPROCEDURE DIVISION.\nMAIN-LOGIC.\n    DISPLAY \"Program shuru ho raha hai\".\n    MOVE 10 TO WS-COUNTER.\n    ADD 5 TO WS-COUNTER.\n    DISPLAY \"Counter ki value: \" WS-COUNTER.\n    STOP RUN.\n```\n\nHar paragraph ka naam hota hai (jaise `MAIN-LOGIC`). Naam ke baad period lagana hai.\n\nParagraphs ko call bhi kar sakte hain:\n```cobol\nPROCEDURE DIVISION.\nMAIN-LOGIC.\n    PERFORM INIT-PROCESS.\n    PERFORM MAIN-WORK.\n    PERFORM CLEAN-UP.\n    STOP RUN.\n\nINIT-PROCESS.\n    DISPLAY \"Initialize ho raha hai\".\n\nMAIN-WORK.\n    DISPLAY \"Main kaam shuru\".\n\nCLEAN-UP.\n    DISPLAY \"Saaf-safai ho rahi hai\".\n```",
      },
      {
        title: "Level Numbers (01-77, 88)",
        content: "DATA DIVISION mein level numbers se data ka structure define hota hai:\n\n```cobol\n01 STUDENT-RECORD.           *> Level 01 = Main record\n   05 STUDENT-NAME PIC A(20). *> Level 05 = Field\n   05 STUDENT-AGE  PIC 9(3).  *> Level 05 = Field\n   05 STUDENT-CLASS.          *> Level 05 = Sub-record\n      10 CLASS-NAME PIC A(10). *> Level 10 = Sub-field\n      10 CLASS-SEC   PIC X(1). *> Level 10 = Sub-field\n```\n\n**Level 01** — Record (sabse bada)\n**Level 05, 10** — Fields (chhote parts)\n**Level 77** — Independent variable\n**Level 88** — Condition names",
      },
    ],
    quiz: [
      {
        question: "COBOL mein kitne main divisions hote hain?",
        options: ["2", "3", "4", "5"],
        correct: 2,
      },
      {
        question: "Variables define karne ke liye kaunsa division use hota hai?",
        options: ["IDENTIFICATION", "ENVIRONMENT", "DATA", "PROCEDURE"],
        correct: 2,
      },
      {
        question: "PIC 9(5) ka matlab kya hai?",
        options: ["5 character string", "5 digit number", "5 decimal places", "5 items in array"],
        correct: 1,
      },
      {
        question: "Level number 88 kis liye use hota hai?",
        options: ["Record define karne ke liye", "Field define karne ke liye", "Condition name ke liye", "Array define karne ke liye"],
        correct: 2,
      },
    ],
    related: ["cobol-variables", "pehla-cobol-program"],
    prev: "pehla-cobol-program",
    next: "cobol-variables",
  },
  {
    slug: "cobol-variables",
    categoryId: "beginner",
    title: "Variables aur Data Types",
    hindiTitle: "PIC clause, WORKING-STORAGE, aur data types — sab kuch samjhein",
    level: "beginner",
    minutes: 35,
    summary: "COBOL mein variables kaise declare karte hain, PIC clause kya hai, aur kaunsi data types available hain.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "Variables Kya Hote Hain",
        content: "Variables ek box hai jismein hum value rakhte hain. Jaise ek dabba jismein kuch likha hota hai.\n\nCOBOL mein variables declare karna thoda alag hai — hume batana padta hai:\n1. **Naam** — Variable ka naam\n2. **Size** — Kitna space chahiye\n3. **Type** — Number hai ya text\n4. **Initial Value** — Shuru mein kya rakhein\n\nYe sab hum `PIC` clause se karte hain.",
      },
      {
        title: "PIC Clause — Picture Clause",
        content: "PIC clause batata hai ki variable ka data type kya hai aur kitna bada hai.\n\n**Numeric Data (Numbers):**\n```cobol\n01 WS-NUM1     PIC 9(5).       *> 5 digit number (12345)\n01 WS-NUM2     PIC 9(3)V99.   *> 3 integer + 2 decimal (123.45)\n01 WS-SIGNED   PIC S9(5).     *> Signed number (-12345)\n01 WS-AMOUNT   PIC 9(7)V99.   *> Amount (1234567.89)\n```\n\n**Alphabetic Data (Text):**\n```cobol\n01 WS-NAME     PIC A(20).     *> 20 char text\n01 WS-CITY     PIC A(15).     *> 15 char text\n```\n\n**Alphanumeric (Mixed):**\n```cobol\n01 WS-ADDRESS  PIC X(50).     *> 50 char mixed text\n01 WS-CODE     PIC X(5).      *> 5 char code\n```",
      },
      {
        title: "Data Types Ka Chart",
        content: "Ye table yaad rakhlo:\n\n| PIC Clause | Type | Example | Max Value |\n|-----------|------|---------|-----------|\n| 9(n) | Numeric | PIC 9(5) | 99999 |\n| S9(n) | Signed Numeric | PIC S9(5) | -99999 |\n| 9(n)V9(m) | Decimal | PIC 9(3)V99 | 999.99 |\n| A(n) | Alphabetic | PIC A(20) | Only letters |\n| X(n) | Alphanumeric | PIC X(50) | Any character |\n| Z(n) | Zoned (for display) | PIC Z(5) | 12345 |\n| 9(n)B | With blanks | PIC 9(3)B | 1 2 3 |\n| 9(n)0 | With zeros | PIC 9(3)0 | 1230 |\n\n**V** ka matlab hai virtual decimal point — ye output mein nahi dikhta, sirf computation ke liye hai.",
      },
      {
        title: "WORKING-STORAGE Section",
        content: "Ye DATA DIVISION ka sabse important section hai. Yahan hum variables declare karte hain jo program mein use honge.\n\n```cobol\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n\n*> Basic variables\n01 WS-NAME       PIC A(20) VALUE \"Rahul\".\n01 WS-AGE        PIC 9(3) VALUE 25.\n01 WS-SALARY     PIC 9(7)V99 VALUE 50000.00.\n01 WS-GRADE      PIC X(1) VALUE \"A\".\n\n*> Flags\n01 WS-EOF        PIC X(1) VALUE \"N\".\n   88 END-OF-FILE VALUE \"Y\".\n   88 NOT-END-OF-FILE VALUE \"N\".\n\n*> Counters\n01 WS-COUNT      PIC 9(5) VALUE 0.\n01 WS-TOTAL      PIC 9(9)V99 VALUE 0.\n```\n\n**VALUE** se shuru ki value set karte hain.\n**88 level** se conditions define karte hain — ye bahut useful hai loops mein.",
      },
      {
        title: "LEVEL 88 — Condition Names",
        content: "Level 88 ek special level hai jo conditions define karta hai. Ye code ko readable banata hai.\n\n```cobol\n01 WS-GENDER     PIC X(1).\n   88 MALE        VALUE \"M\".\n   88 FEMALE      VALUE \"F\".\n   88 OTHER       VALUE \"O\".\n\n01 WS-STATUS     PIC 9(1).\n   88 ACTIVE      VALUE 1.\n   88 INACTIVE    VALUE 0.\n   88 SUSPENDED   VALUE 2.\n```\n\nAb hum condition aise check kar sakte hain:\n```cobol\nIF MALE\n    DISPLAY \"Male customer\".\nIF ACTIVE\n    DISPLAY \"Account is active\".\n```\n\nYe `IF WS-GENDER = \"M\"` se better hai kyunki zyada readable hai.",
      },
      {
        title: "VALUE Clause Ka Use",
        content: "VALUE se hum variable ko initial value de sakte hain:\n\n```cobol\n01 WS-NUMBER    PIC 9(5) VALUE 12345.\n01 WS-NAME      PIC A(10) VALUE \"Rahul\".\n01 WS-BLANK     PIC A(5) VALUE SPACES.\n01 WS-ZERO      PIC 9(5) VALUE ZEROS.\n01 WS-ALL-ONES  PIC 9(5) VALUE ALL 9.\n```\n\n**Special Values:**\n- `SPACES` — Khali jagah\n- `ZEROS` — Sab zeros\n- `HIGH-VALUES` — Sab 9s (numeric) ya highest char\n- `LOW-VALUES` — Sab 0s ya lowest char\n- `ALL` — Same character repeat\n- `QUOTE` / `QUOTES` — Double quote mark",
      },
    ],
    quiz: [
      {
        question: "PIC 9(5) mein 9 ka matlab kya hai?",
        options: ["Number", "Text", "Decimal", "Array"],
        correct: 0,
      },
      {
        question: "PIC A(20) mein A ka matlab kya hai?",
        options: ["Alphanumeric", "Alphabetic", "Array", "Address"],
        correct: 1,
      },
      {
        question: "Variable ko initial value dene ke liye kaunsa clause use hota hai?",
        options: ["INITIAL", "VALUE", "SET", "DEFAULT"],
        correct: 1,
      },
      {
        question: "Level 88 kis liye use hota hai?",
        options: ["Record define karne ke liye", "Condition name ke liye", "Array define karne ke liye", "File define karne ke liye"],
        correct: 1,
      },
    ],
    related: ["cobol-structure", "cobol-arithmetic"],
    prev: "cobol-structure",
    next: "cobol-io",
  },
  {
    slug: "cobol-io",
    categoryId: "beginner",
    title: "Input aur Output — ACCEPT aur DISPLAY",
    hindiTitle: "User se input lena aur screen par output dikhana",
    level: "beginner",
    minutes: 25,
    summary: "ACCEPT aur DISPLAY verb ka use seekhein — user interaction kaise hota hai COBOL mein.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "DISPLAY — Output Dikhana",
        content: "DISPLAY screen par kuch dikhane ke liye use hota hai. Ye COBOL ka print function hai.\n\n```cobol\nDISPLAY \"Namaste World\".\nDISPLAY WS-NAME.\nDISPLAY \"Total: \" WS-TOTAL.\nDISPLAY \"A\" \"B\" \"C\".\nDISPLAY ALL \"*\".\n```\n\n**Ye sab valid hain:**\n- String dikhana\n- Variable dikhana\n- Mix karna\n- Multiple values ek saath\n- ALL keyword se repeat karna",
      },
      {
        title: "ACCEPT — Input Lenna",
        content: "ACCEPT user se input leta hai keyboard se.\n\n```cobol\nDISPLAY \"Apna naam batao: \".\nACCEPT WS-NAME.\n\nDISPLAY \"Apni umar batao: \".\nACCEPT WS-AGE.\n\nDISPLAY \"Namaste \" WS-NAME \", tumhari umar \" WS-AGE \" hai.\".\n```\n\n**Ye program kya karega:**\n1. Screen par prompt dikhayega\n2. User type karega\n3. Wo value variable mein store ho jayegi\n4. Output dikhayega",
      },
      {
        title: "ACCEPT Ke Options",
        content: "ACCEPT mein kuch options bhi hain:\n\n```cobol\n*> System date lena\nACCEPT WS-DATE FROM DATE.\n\n*> System time lena\nACCEPT WS-TIME FROM TIME.\n\n*> Day of week lena\nACCEPT WS-DAY FROM DAY.\n\n*> Console se lena\nACCEPT WS-INPUT FROM CONSOLE.\n```\n\n**FROM DATE** — Aaj ki date (format: YYYYMMDD)\n**FROM TIME** — Abhi ka time (format: HHMMSS)\n**FROM DAY** — Saal ka kaunsa din hai\n**FROM CONSOLE** — Keyboard se input",
      },
      {
        title: "Interactive Program Example",
        content: "Ab ek complete interactive program banate hain:\n\n```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. CALCULATOR.\n\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-NUM1    PIC 9(5).\n01 WS-NUM2    PIC 9(5).\n01 WS-RESULT  PIC 9(7).\n01 WS-CHOICE  PIC 9(1).\n\nPROCEDURE DIVISION.\n    DISPLAY \"=== SIMPLE CALCULATOR ===\".\n    DISPLAY \" \" .\n    DISPLAY \"Pehla number batao: \".\n    ACCEPT WS-NUM1.\n    DISPLAY \"Dusra number batao: \".\n    ACCEPT WS-NUM2.\n    DISPLAY \" \" .\n    DISPLAY \"1. Jodna (Add)\".\n    DISPLAY \"2. Ghatana (Subtract)\".\n    DISPLAY \"3. Gunna (Multiply)\".\n    DISPLAY \"4. Bhag (Divide)\".\n    DISPLAY \"Option chuno: \".\n    ACCEPT WS-CHOICE.\n    DISPLAY \" \" .\n    EVALUATE WS-CHOICE\n        WHEN 1\n            COMPUTE WS-RESULT = WS-NUM1 + WS-NUM2\n            DISPLAY \"Jod: \" WS-RESULT\n        WHEN 2\n            COMPUTE WS-RESULT = WS-NUM1 - WS-NUM2\n            DISPLAY \"Antar: \" WS-RESULT\n        WHEN 3\n            COMPUTE WS-RESULT = WS-NUM1 * WS-NUM2\n            DISPLAY \"Gunaphal: \" WS-RESULT\n        WHEN 4\n            IF WS-NUM2 NOT = 0\n                COMPUTE WS-RESULT = WS-NUM1 / WS-NUM2\n                DISPLAY \"Bhagphal: \" WS-RESULT\n            ELSE\n                DISPLAY \"GALAT! Zero se bhag nahi hota!\"\n            END-IF\n        WHEN OTHER\n            DISPLAY \"Galat option!\"\n    END-EVALUATE.\n    STOP RUN.\n```\n\nYe ek complete calculator hai jo 4 operations kar sakta hai!",
      },
    ],
    quiz: [
      {
        question: "Screen par output dikhane ke liye kaunsa verb use hota hai?",
        options: ["ACCEPT", "DISPLAY", "READ", "WRITE"],
        correct: 1,
      },
      {
        question: "User se input lene ke liye kaunsa verb use hota hai?",
        options: ["DISPLAY", "INPUT", "ACCEPT", "GET"],
        correct: 2,
      },
      {
        question: "System date lena ho toh kya likhenge?",
        options: ["ACCEPT WS-DATE.", "ACCEPT WS-DATE FROM DATE.", "GET DATE.", "DATE ACCEPT."],
        correct: 1,
      },
      {
        question: "DISPLAY mein ek saath kitni values dikh sakti hain?",
        options: ["Sirf 1", "Do", "Teen", "Kitni bhi"],
        correct: 3,
      },
    ],
    related: ["cobol-variables", "cobol-arithmetic"],
    prev: "cobol-variables",
    next: "cobol-arithmetic",
  },
  {
    slug: "cobol-arithmetic",
    categoryId: "beginner",
    title: "Arithmetic Operations — ADD, SUBTRACT, MULTIPLY, DIVIDE, COMPUTE",
    hindiTitle: "COBOL mein ganit kaise karein — saare arithmetic verbs seekhein",
    level: "beginner",
    minutes: 30,
    summary: "COBOL ke arithmetic verbs — ADD, SUBTRACT, MULTIPLY, DIVIDE, aur COMPUTE — sab kuch examples ke saath.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "COBOL Mein Ganit",
        content: "COBOL mein ganit karne ke 5 tarike hain:\n\n1. **ADD** — Jodna\n2. **SUBTRACT** — Ghatana\n3. **MULTIPLY** — Gunna\n4. **DIVIDE** — Bhag\n5. **COMPUTE** — Koi bhi expression\n\nHar verb ka alag syntax hai. COMPUTE sabse easy hai kyunki hum normal math jaisa expression likh sakte hain.",
      },
      {
        title: "ADD Verb",
        content: "```cobol\n*> Basic ADD\nADD 10 TO WS-COUNT.\n\n*> Multiple values add\nADD 1 2 3 TO WS-TOTAL.\n\n*> Ek doosre mein add karna\nADD WS-A WS-B GIVING WS-C.\n\n*> Corresponding — same level fields\nADD CORRESPONDING WS-RECORD1 TO WS-RECORD2.\n```\n\n**Example:**\n```cobol\n01 WS-A    PIC 9(3) VALUE 10.\n01 WS-B    PIC 9(3) VALUE 20.\n01 WS-SUM  PIC 9(3).\n\nADD WS-A TO WS-B.\n*> WS-B ab 30 hai (10 + 20)\n\nADD WS-A WS-B GIVING WS-SUM.\n*> WS-SUM = 30\n```",
      },
      {
        title: "SUBTRACT Verb",
        content: "```cobol\n*> Basic SUBTRACT\nSUBTRACT 5 FROM WS-COUNT.\n\n*> Multiple values subtract\nSUBTRACT 10 20 FROM WS-TOTAL.\n\n*> GIVING option\nSUBTRACT WS-A FROM WS-B GIVING WS-C.\n```\n\n**Example:**\n```cobol\n01 WS-A      PIC 9(3) VALUE 50.\n01 WS-B      PIC 9(3) VALUE 20.\n01 WS-DIFF   PIC 9(3).\n\nSUBTRACT WS-A FROM WS-B.\n*> WS-B ab -30 hai (20 - 50)\n\nSUBTRACT WS-A FROM WS-B GIVING WS-DIFF.\n*> WS-DIFF = -30\n```",
      },
      {
        title: "MULTIPLY aur DIVIDE",
        content: "```cobol\n*> MULTIPLY\nMULTIPLY 5 BY WS-NUM.\nMULTIPLY WS-A BY WS-B GIVING WS-C.\n\n*> DIVIDE\nDIVIDE 4 INTO WS-NUM.\nDIVIDE WS-A BY WS-B GIVING WS-C.\nDIVIDE WS-A BY WS-B GIVING WS-Q REMAINDER WS-R.\n```\n\n**Example:**\n```cobol\n01 WS-A    PIC 9(3) VALUE 10.\n01 WS-B    PIC 9(3) VALUE 3.\n01 WS-Q    PIC 9(3).\n01 WS-R    PIC 9(3).\n\nMULTIPLY 5 BY WS-A.\n*> WS-A ab 50 hai (10 * 5)\n\nDIVIDE WS-A BY WS-B GIVING WS-Q REMAINDER WS-R.\n*> WS-Q = 16 (bhagphal), WS-R = 2 (shesh)\n```",
      },
      {
        title: "COMPUTE — Sabse Powerful",
        content: "COMPUTE mein hum normal math expression likh sakte hain:\n\n```cobol\nCOMPUTE WS-RESULT = WS-A + WS-B.\nCOMPUTE WS-RESULT = (WS-A + WS-B) * 2.\nCOMPUTE WS-RESULT = WS-A ** 2.  *> Power\nCOMPUTE WS-AVG = WS-TOTAL / WS-COUNT.\n```\n\n**COMPUTE vs Verbs:**\n- `ADD A TO B` = `COMPUTE B = A + B`\n- `MULTIPLY A BY B` = `COMPUTE B = A * B`\n\nCOMPUTE mein operators hain:\n- `+` Addition\n- `-` Subtraction\n- `*` Multiplication\n- `/` Division\n- `**` Power\n\n**Rule:** Expression ke end mein period lagana hai!",
      },
      {
        title: "Rounding aur Decimal",
        content: "```cobol\n01 WS-A    PIC 9(3)V99 VALUE 123.45.\n01 WS-B    PIC 9(3)V99 VALUE 67.89.\n01 WS-SUM  PIC 9(4)V99.\n01 WS-ROUND PIC 9(4).\n\nCOMPUTE WS-SUM = WS-A + WS-B.\n*> WS-SUM = 191.34\n\nCOMPUTE WS-ROUND = WS-A + WS-B.\n*> WS-ROUND = 191 (decimal gayab)\n\nCOMPUTE WS-SUM ROUNDED = WS-A + WS-B.\n*> Rounding option ke saath\n```\n\n**V** clause decimal point represent karta hai lekin output mein nahi dikhta. `PIC 9(3)V99` mein `V` virtual decimal hai.",
      },
    ],
    quiz: [
      {
        question: "ADD WS-A TO WS-B ka matlab kya hai?",
        options: ["WS-A = WS-A + WS-B", "WS-B = WS-A + WS-B", "WS-A = WS-B", "Kuch nahi"],
        correct: 1,
      },
      {
        question: "COMPUTE mein power kaise karte hain?",
        options: ["^", "**", "POW", "POWER"],
        correct: 1,
      },
      {
        question: "DIVIDE mein remainder kaise nikalte hain?",
        options: ["REMAINDER keyword", "MOD function", "REM option", "Ye possible nahi hai"],
        correct: 0,
      },
      {
        question: "PIC 9(3)V99 mein V ka matlab kya hai?",
        options: ["Variable", "Virtual decimal point", "Value", "Void"],
        correct: 1,
      },
    ],
    related: ["cobol-io", "cobol-conditions"],
    prev: "cobol-io",
    next: "cobol-conditions",
  },
  {
    slug: "cobol-conditions",
    categoryId: "beginner",
    title: "Conditional Statements — IF-ELSE aur EVALUATE",
    hindiTitle: "IF-ELSE aur EVALUATE (switch-case) ka complete guide",
    level: "beginner",
    minutes: 35,
    summary: "Conditions kaise lagayein COBOL mein — IF-ELSE, EVALUATE, nested conditions, aur comparison operators.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "IF Statement",
        content: "IF condition lagana sabse basic hai:\n\n```cobol\nIF WS-AGE > 18\n    DISPLAY \"Adult ho tum\".\n```\n\n**Comparison Operators:**\n- `=` Equal to\n- `>` Greater than\n- `<` Less than\n- `>=` Greater than or equal\n- `<=` Less than or equal\n- `NOT =` Not equal\n\n**Example:**\n```cobol\nIF WS-SALARY > 50000\n    DISPLAY \"Achha kamate ho!\".\n\nIF WS-GRADE = \"A\"\n    DISPLAY \"First class!\".\n\nIF WS-RESULT NOT = 0\n    DISPLAY \"Result mil gaya\".\n```",
      },
      {
        title: "IF-ELSE Statement",
        content: "```cobol\nIF WS-AGE >= 18\n    DISPLAY \"Vote de sakte ho\"\nELSE\n    DISPLAY \"Abhi nahi\".\n```\n\n**Nested IF:**\n```cobol\nIF WS-MARKS >= 90\n    DISPLAY \"A+ Grade\"\nELSE\n    IF WS-MARKS >= 80\n        DISPLAY \"A Grade\"\n    ELSE\n        IF WS-MARKS >= 70\n            DISPLAY \"B Grade\"\n        ELSE\n            DISPLAY \"C Grade\"\n        END-IF\n    END-IF\nEND-IF.\n```\n\n**Important:** Har IF ke saath `END-IF` lagana hai!",
      },
      {
        title: "EVALUATE — Switch-Case",
        content: "EVALUATE COBOL ka switch-case hai. Ye IF-ELSE se better hai jab bahut saare conditions ho:\n\n```cobol\nEVALUATE WS-GRADE\n    WHEN \"A\"\n        DISPLAY \"Excellent!\"\n    WHEN \"B\"\n        DISPLAY \"Very Good!\"\n    WHEN \"C\"\n        DISPLAY \"Good!\"\n    WHEN \"D\"\n        DISPLAY \"Pass!\"\n    WHEN OTHER\n        DISPLAY \"Fail!\"\nEND-EVALUATE.\n```\n\n**EVALUATE TRUE bhi use kar sakte ho:**\n```cobol\nEVALUATE TRUE\n    WHEN WS-AGE > 60\n        DISPLAY \"Senior Citizen\"\n    WHEN WS-AGE > 18\n        DISPLAY \"Adult\"\n    WHEN OTHER\n        DISPLAY \"Minor\"\nEND-EVALUATE.\n```",
      },
      {
        title: "Compound Conditions",
        content: "Ek se zyada conditions ek saath lagana:\n\n```cobol\n*> AND — Dono conditions true honi chahiye\nIF WS-AGE >= 18 AND WS-AGE <= 60\n    DISPLAY \"Working age\".\n\n*> OR — Koi bhi ek true ho\nIF WS-GRADE = \"A\" OR WS-GRADE = \"B\"\n    DISPLAY \"First division!\".\n\n*> Complex condition\nIF WS-SALARY > 50000 AND WS-YEARS > 5\n    DISPLAY \"Promotion ke liye eligible!\".\n```\n\n**NOT Operator:**\n```cobol\nIF WS-STATUS NOT = \"ACTIVE\"\n    DISPLAY \"Account inactive hai!\".\n```",
      },
      {
        title: "Nested EVALUATE",
        content: "```cobol\nEVALUATE WS-MONTH\n    WHEN 1\n        EVALUATE WS-DAY\n            WHEN 1\n                DISPLAY \"Naya Saal!\"\n            WHEN OTHER\n                DISPLAY \"January\"\n        END-EVALUATE\n    WHEN 7\n        EVALUATE WS-DAY\n            WHEN 15\n                DISPLAY \"Bharat Din!\"\n            WHEN OTHER\n                DISPLAY \"July\"\n        END-EVALUATE\n    WHEN OTHER\n        DISPLAY \"Baaki mahine\"\nEND-EVALUATE.\n```\n\nYe nested IF se better hai kyunki zyada organized hai.",
      },
    ],
    quiz: [
      {
        question: "IF statement ke end mein kya lagana hai?",
        options: ["END.", "END-IF.", "STOP.", "FINISH."],
        correct: 1,
      },
      {
        question: "EVALUATE ka last option kya hota hai?",
        options: ["WHEN OTHER", "WHEN LAST", "WHEN DEFAULT", "WHEN END"],
        correct: 0,
      },
      {
        question: "IF WS-A > 10 AND WS-B > 20 — ye kaunsa operator hai?",
        options: ["OR", "AND", "NOT", "XOR"],
        correct: 1,
      },
      {
        question: "COBOL mein not equal ka operator kya hai?",
        options: ["!=", "<>", "NOT =", "N/E"],
        correct: 2,
      },
    ],
    related: ["cobol-arithmetic", "cobol-loops"],
    prev: "cobol-arithmetic",
    next: "cobol-loops",
  },
  {
    slug: "cobol-loops",
    categoryId: "beginner",
    title: "Loops — PERFORM aur VARYING",
    hindiTitle: "COBOL mein loop kaise lagayein — PERFORM, VARYING, aur TO times",
    level: "beginner",
    minutes: 30,
    summary: "Loops samjhein COBOL mein — PERFORM verb, VARYING clause, aur nesting.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "PERFORM — Basic Loop",
        content: "PERFORM COBOL ka main looping construct hai. Ye ek paragraph ko baar baar chalata hai.\n\n```cobol\nPROCEDURE DIVISION.\nMAIN-LOGIC.\n    PERFORM 5 TIMES\n        DISPLAY \"Ye 5 baar dikhega\".\n    END-PERFORM.\n    STOP RUN.\n```\n\n**THRU option — Multiple paragraphs:**\n```cobol\nPERFORM PARA-1 THRU PARA-3.\n*> Ye PARA-1, PARA-2, PARA-3 sab chalayega\n```",
      },
      {
        title: "VARYING — Counter Loop",
        content: "VARYING se hum counter variable use kar sakte hain:\n\n```cobol\nPERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 10\n    DISPLAY WS-I.\nEND-PERFORM.\n```\n\n**Ye dikhayega:** 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\n\n**Step size badlo:**\n```cobol\nPERFORM VARYING WS-I FROM 1 BY 2 UNTIL WS-I > 10\n    DISPLAY WS-I.\nEND-PERFORM.\n```\n**Output:** 1, 3, 5, 7, 9\n\n**Reverse mein:**\n```cobol\nPERFORM VARYING WS-I FROM 10 BY -1 UNTIL WS-I < 1\n    DISPLAY WS-I.\nEND-PERFORM.\n```\n**Output:** 10, 9, 8, 7, 6, 5, 4, 3, 2, 1",
      },
      {
        title: "PERFORM UNTIL — Condition Loop",
        content: "```cobol\nMOVE 1 TO WS-COUNT.\nPERFORM UNTIL WS-COUNT > 5\n    DISPLAY \"Count: \" WS-COUNT\n    ADD 1 TO WS-COUNT\nEND-PERFORM.\n```\n\n**Ye tab tak chalega jab tak condition true na ho jaye.**\n\n```cobol\n*> Example: Number guessing game logic\nMOVE 1 TO WS-ATTEMPTS.\nPERFORM UNTIL WS-NUMBER = WS-GUESS\n    DISPLAY \"Guess karo (1-10): \"\n    ACCEPT WS-GUESS\n    ADD 1 TO WS-ATTEMPTS\n    IF WS-GUESS > WS-NUMBER\n        DISPLAY \"Chhota number batao\"\n    ELSE IF WS-GUESS < WS-NUMBER\n        DISPLAY \"Bada number batao\"\n    END-IF\nEND-PERFORM.\nDISPLAY \"Sahi jawab! Attempts: \" WS-ATTEMPTS.\n```",
      },
      {
        title: "Nested Loops",
        content: "```cobol\nPERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 5\n    PERFORM VARYING WS-J FROM 1 BY 1 UNTIL WS-J > 3\n        DISPLAY WS-I \" x \" WS-J \" = \" WS-I * WS-J\n    END-PERFORM\nEND-PERFORM.\n```\n\n**Output:**\n```\n1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n2 x 1 = 2\n2 x 2 = 4\n...\n5 x 3 = 15\n```",
      },
      {
        title: "LOOP Ka Example — Table Print",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. MULTI-TABLE.\n\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-NUMBER PIC 9(3) VALUE 7.\n01 WS-I      PIC 9(3).\n01 WS-RESULT PIC 9(5).\n\nPROCEDURE DIVISION.\n    DISPLAY \"Table of \" WS-NUMBER \":\".\n    DISPLAY \"==================\".\n    PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 10\n        COMPUTE WS-RESULT = WS-NUMBER * WS-I\n        DISPLAY WS-NUMBER \" x \" WS-I \" = \" WS-RESULT\n    END-PERFORM.\n    STOP RUN.\n```\n\n**Output:**\n```\nTable of 7:\n==================\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n...\n7 x 10 = 70\n```",
      },
    ],
    quiz: [
      {
        question: "PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 5 mein kitni baar chalega?",
        options: ["4", "5", "6", "Infinite"],
        correct: 1,
      },
      {
        question: "LOOP ko jaldi khatam karne ke liye kya use hota hai?",
        options: ["STOP", "EXIT PERFORM", "BREAK", "QUIT"],
        correct: 1,
      },
      {
        question: "PERFORM 5 TIMES ka matlab kya hai?",
        options: ["5 baar chalega", "5 paragraph chalayega", "5 second chalega", "5 line chalega"],
        correct: 0,
      },
      {
        question: "PERFORM THRU ka use kya hai?",
        options: ["Ek paragraph chalana", "Multiple paragraphs chalana", "Loop lagana", "Condition lagana"],
        correct: 1,
      },
    ],
    related: ["cobol-conditions", "cobol-strings"],
    prev: "cobol-conditions",
    next: "cobol-strings",
  },
  {
    slug: "cobol-strings",
    categoryId: "beginner",
    title: "String Handling — STRING, UNSTRING, INSPECT",
    hindiTitle: "COBOL mein strings kaise handle karein — join, split, aur search",
    level: "beginner",
    minutes: 30,
    summary: "String operations seekhein — STRING se join karein, UNSTRING se split karein, INSPECT se dhundhein.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "STRING — Strings Ko Join Karna",
        content: "STRING ek string mein doosri strings ko combine karta hai.\n\n```cobol\n01 WS-FIRST   PIC A(10) VALUE \"Rahul\".\n01 WS-LAST    PIC A(10) VALUE \"Kumar\".\n01 WS-FULL    PIC A(21).\n\nSTRING WS-FIRST DELIMITED BY SPACE\n       \" \" DELIMITED BY SIZE\n       WS-LAST DELIMITED BY SPACE\n       INTO WS-FULL.\n\nDISPLAY WS-FULL.\n*> Output: Rahul Kumar\n```\n\n**DELIMITED BY:**\n- `SPACE` — Space tak copy karo\n- `SIZE` — Poora size tak copy karo\n- `LOW-VALUES` — Low value tak\n- Quote mark — Specific character tak",
      },
      {
        title: "UNSTRING — String Ko Split Karna",
        content: "UNSTRING ek string ko tod kar alag-alag variables mein daalta hai.\n\n```cobol\n01 WS-COMMA-STRING PIC A(30) VALUE \"Rahul,Mumbai,25\".\n01 WS-NAME         PIC A(10).\n01 WS-CITY         PIC A(10).\n01 WS-AGE          PIC 9(3).\n01 WS-DELIM        PIC X(1).\n01 WS-COUNT        PIC 9(1).\n\nUNSTRING WS-COMMA-STRING\n    DELIMITED BY \",\"\n    INTO WS-NAME\n         WS-CITY\n         WS-AGE\n    COUNT IN WS-COUNT\n    DELIMITER IN WS-DELIM.\n\nDISPLAY WS-NAME.\n*> Output: Rahul\nDISPLAY WS-CITY.\n*> Output: Mumbai\nDISPLAY WS-AGE.\n*> Output: 025\n```",
      },
      {
        title: "INSPECT — String Mein Dhundhna",
        content: "INSPECT string ke andar characters count karne ya badalne ke liye hai.\n\n```cobol\n01 WS-TEXT PIC A(20) VALUE \"Hello World Hello\".\n01 WS-COUNT PIC 9(2).\n\n*> Kitni baar \"H\" hai?\nINSPECT WS-TEXT TALLYING WS-COUNT FOR ALL \"H\".\nDISPLAY WS-COUNT.\n*> Output: 02\n\n*> Pehli \"l\" kab aati hai?\nINSPECT WS-TEXT TALLYING WS-COUNT FOR CHARACTERS\n    BEFORE INITIAL \"o\".\n\n*> Replace karna\nINSPECT WS-TEXT REPLACING ALL \"Hello\" BY \"Hi\".\nDISPLAY WS-TEXT.\n*> Output: Hi World Hi\n```",
      },
      {
        title: "INSPECT TALLYING",
        content: "```cobol\n01 WS-SENTENCE PIC A(50) VALUE \"COBOL is great and COBOL is powerful\".\n01 WS-COUNT    PIC 9(2).\n\n*> \"COBOL\" kitni baar hai?\nINSPECT WS-SENTENCE TALLYING WS-COUNT FOR ALL \"COBOL\".\nDISPLAY WS-COUNT.\n*> Output: 02\n\n*> Kitne letters hain?\nINSPECT WS-SENTENCE TALLYING WS-COUNT FOR CHARACTERS.\nDISPLAY WS-COUNT.\n*> Output: 37\n\n*> \"is\" kitni baar hai first 15 characters mein?\nINSPECT WS-SENTENCE TALLYING WS-COUNT FOR ALL \"is\"\n    VARYING FROM 1 BY 1 UNTIL > 15.\n```",
      },
      {
        title: "Practical Example — Name Validation",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. NAME-CHECK.\n\nDATA DIVISION.\nWORKING-STORAGE SECTION.\n01 WS-NAME     PIC A(20).\n01 WS-LENGTH    PIC 9(2).\n01 WS-SPACE-CNT PIC 9(2).\n\nPROCEDURE DIVISION.\n    DISPLAY \"Apna naam batao: \".\n    ACCEPT WS-NAME.\n\n    *> Length check\n    INSPECT WS-NAME TALLYING WS-LENGTH FOR CHARACTERS.\n\n    *> Spaces count\n    INSPECT WS-NAME TALLYING WS-SPACE-CNT FOR ALL SPACES.\n\n    IF WS-LENGTH < 2\n        DISPLAY \"Naam bahut chhota hai!\"\n    ELSE IF WS-SPACE-CNT > 0\n        DISPLAY \"Naam mein space hai, kya ye sahi hai?\"\n    ELSE\n        DISPLAY \"Naam sahi hai: \" WS-NAME\n    END-IF.\n    STOP RUN.\n```\n\nYe program naam ki basic validation karta hai!",
      },
    ],
    quiz: [
      {
        question: "STRING ka use kya hai?",
        options: ["String ko split karna", "Strings ko join karna", "String mein dhundhna", "String ko delete karna"],
        correct: 1,
      },
      {
        question: "UNSTRING mein DELIMITED BY ka kya matlab hai?",
        options: ["String ka end", "Separator character", "String ka size", "String ka naam"],
        correct: 1,
      },
      {
        question: "INSPECT TALLYING ka use kya hai?",
        options: ["String banana", "Characters count karna", "String mein likhna", "String ko copy karna"],
        correct: 1,
      },
      {
        question: "DELIMITED BY SIZE ka matlab kya hai?",
        options: ["Space tak copy", "Poora size tak copy", "End tak copy", "First character tak"],
        correct: 1,
      },
    ],
    related: ["cobol-loops", "cobol-files"],
    prev: "cobol-loops",
    next: "cobol-files",
  },
  {
    slug: "cobol-files",
    categoryId: "beginner",
    title: "File Handling Basics",
    hindiTitle: "COBOL mein files kaise chalate hain — Sequential files ka complete guide",
    level: "beginner",
    minutes: 40,
    summary: "Sequential files banana, padhna, aur likhna seekhein — COBOL ka sabse basic file operation.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "COBOL Mein Files Kyun Important Hain",
        content: "COBOL ek business language hai aur business ka data files mein hota hai. Tumhara bank account ek file mein hai, tumhari college marks ek file mein hain.\n\nCOBOL mein 3 tarah ki files hoti hain:\n1. **Sequential File** — Records ek ke baad ek\n2. **Indexed File** — Key se direct access\n3. **Relative File** — Position se access\n\nAaj hum Sequential File seekhenge — sabse basic.",
      },
      {
        title: "File Ka Structure",
        content: "COBOL mein file 3 jagah define hoti hai:\n\n**1. ENVIRONMENT DIVISION — File ka path:**\n```cobol\nENVIRONMENT DIVISION.\nINPUT-OUTPUT SECTION.\nFILE-CONTROL.\n    SELECT STUDENT-FILE ASSIGN TO \"students.dat\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n```\n\n**2. DATA DIVISION — File ka record:**\n```cobol\nDATA DIVISION.\nFILE SECTION.\nFD STUDENT-FILE.\n01 STUDENT-RECORD.\n   05 S-NAME    PIC A(20).\n   05 S-AGE     PIC 9(3).\n   05 S-GRADE   PIC X(1).\n```\n\n**3. PROCEDURE DIVISION — File operations:**\n```cobol\nPROCEDURE DIVISION.\n    OPEN INPUT STUDENT-FILE.\n    READ STUDENT-FILE.\n    DISPLAY S-NAME.\n    CLOSE STUDENT-FILE.\n```",
      },
      {
        title: "Sequential File — Write Karna",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. WRITE-FILE.\n\nENVIRONMENT DIVISION.\nINPUT-OUTPUT SECTION.\nFILE-CONTROL.\n    SELECT OUT-FILE ASSIGN TO \"output.txt\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n\nDATA DIVISION.\nFILE SECTION.\nFD OUT-FILE.\n01 OUT-RECORD.\n   05 O-NAME  PIC A(20).\n   05 O-AGE   PIC 9(3).\n\nWORKING-STORAGE SECTION.\n01 WS-NAME PIC A(20) VALUE \"Rahul\".\n01 WS-AGE  PIC 9(3) VALUE 25.\n\nPROCEDURE DIVISION.\n    OPEN OUTPUT OUT-FILE.\n    MOVE WS-NAME TO O-NAME.\n    MOVE WS-AGE TO O-AGE.\n    WRITE OUT-RECORD.\n    CLOSE OUT-FILE.\n    DISPLAY \"File mein data likh diya!\".\n    STOP RUN.\n```",
      },
      {
        title: "Sequential File — Read Karna",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. READ-FILE.\n\nENVIRONMENT DIVISION.\nINPUT-OUTPUT SECTION.\nFILE-CONTROL.\n    SELECT IN-FILE ASSIGN TO \"output.txt\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n\nDATA DIVISION.\nFILE SECTION.\nFD IN-FILE.\n01 IN-RECORD.\n   05 I-NAME  PIC A(20).\n   05 I-AGE   PIC 9(3).\n\nWORKING-STORAGE SECTION.\n01 WS-EOF PIC X(1) VALUE \"N\".\n\nPROCEDURE DIVISION.\n    OPEN INPUT IN-FILE.\n    PERFORM UNTIL WS-EOF = \"Y\"\n        READ IN-FILE\n            AT END\n                MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                DISPLAY I-NAME \" : \" I-AGE\n        END-READ\n    END-PERFORM.\n    CLOSE IN-FILE.\n    STOP RUN.\n```\n\n**AT END** tab hota hai jab file ka data khatam ho jata hai.",
      },
      {
        title: "Complete Example — Student Records",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. STUDENT-APP.\n\nENVIRONMENT DIVISION.\nINPUT-OUTPUT SECTION.\nFILE-CONTROL.\n    SELECT STUDENT-FILE ASSIGN TO \"students.dat\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n\nDATA DIVISION.\nFILE SECTION.\nFD STUDENT-FILE.\n01 STUDENT-RECORD.\n   05 S-NAME    PIC A(20).\n   05 S-AGE     PIC 9(3).\n   05 S-MARKS   PIC 9(3).\n\nWORKING-STORAGE SECTION.\n01 WS-EOF       PIC X(1) VALUE \"N\".\n01 WS-COUNT     PIC 9(3) VALUE 0.\n01 WS-TOTAL     PIC 9(5) VALUE 0.\n01 WS-AVG       PIC 9(3)V99.\n\nPROCEDURE DIVISION.\n    OPEN INPUT STUDENT-FILE.\n    PERFORM UNTIL WS-EOF = \"Y\"\n        READ STUDENT-FILE\n            AT END\n                MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                ADD 1 TO WS-COUNT\n                ADD S-MARKS TO WS-TOTAL\n                DISPLAY S-NAME \" : \" S-MARKS\n        END-READ\n    END-PERFORM.\n    CLOSE STUDENT-FILE.\n    COMPUTE WS-AVG = WS-TOTAL / WS-COUNT.\n    DISPLAY \"Total students: \" WS-COUNT.\n    DISPLAY \"Average marks: \" WS-AVG.\n    STOP RUN.\n```",
      },
    ],
    quiz: [
      {
        question: "Sequential file mein records kaise access hote hain?",
        options: ["Randomly", "Ek ke baad ek", "Key se", "Position se"],
        correct: 1,
      },
      {
        question: "File ko open karne ka sahi tarika kya hai?",
        options: ["OPEN FILE", "OPEN INPUT/OUTPUT", "START FILE", "BEGIN FILE"],
        correct: 1,
      },
      {
        question: "File ka data khatam hone par kya hota hai?",
        options: ["ERROR", "AT END", "EOF", "STOP"],
        correct: 1,
      },
      {
        question: "FD ka full form kya hai?",
        options: ["File Description", "File Data", "File Division", "File Detail"],
        correct: 0,
      },
    ],
    related: ["cobol-strings", "cobol-level2"],
    prev: "cobol-strings",
    next: "cobol-advanced-basics",
  },
];
