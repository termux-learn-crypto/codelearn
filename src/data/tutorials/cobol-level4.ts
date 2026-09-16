import type { Tutorial } from "@/data/tutorials";

export const L4_LABEL = "Level 4 — Projects (प्रैक्टिकल)";

export const cobolLevel4: Tutorial[] = [
  {
    slug: "cobol-bank-system",
    categoryId: "projects",
    title: "Bank Account System",
    hindiTitle: "Complete bank account management system banana",
    level: "projects",
    minutes: 60,
    summary: "Ek complete bank account system banao — accounts banana, balance check, deposit, withdraw.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Project Ka Overview",
        content: "Aaj hum ek bank account system banayenge jismein:\n\n1. **Naya Account Banana** — Customer ka naam, initial deposit\n2. **Balance Check** — Kitna paisa hai\n3. **Deposit** — Paisa jama karna\n4. **Withdraw** — Paisa nikalna\n5. **Mini Statement** — Last 5 transactions\n6. **Account Statement** — Poora statement\n\nYe project COBOL ke sab concepts use karega!",
      },
      {
        title: "File Structure",
        content: "```cobol\n*> ACCOUNT-FILE structure\n01 ACCOUNT-RECORD.\n   05 A-ACCOUNT-NO   PIC 9(6).\n   05 A-CUSTOMER-NAME PIC A(30).\n   05 A-BALANCE       PIC 9(9)V99.\n   05 A-STATUS        PIC X(1).\n      88 ACTIVE     VALUE \"A\".\n      88 CLOSED     VALUE \"C\".\n   05 A-OPEN-DATE     PIC 9(8).\n\n*> TRANSACTION-FILE structure\n01 TRANSACTION-RECORD.\n   05 T-ACCOUNT-NO   PIC 9(6).\n   05 T-TYPE          PIC X(1).\n      88 DEPOSIT     VALUE \"D\".\n      88 WITHDRAW    VALUE \"W\".\n   05 T-AMOUNT        PIC 9(7)V99.\n   05 T-DATE          PIC 9(8).\n   05 T-TIME          PIC 9(6).\n```",
      },
      {
        title: "Complete Program",
        content: "```cobol\nIDENTIFICATION DIVISION.\nPROGRAM-ID. BANK-SYSTEM.\n\nENVIRONMENT DIVISION.\nINPUT-OUTPUT SECTION.\nFILE-CONTROL.\n    SELECT ACCOUNT-FILE ASSIGN TO \"accounts.dat\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n    SELECT TRANS-FILE ASSIGN TO \"transactions.dat\"\n        ORGANIZATION IS LINE SEQUENTIAL.\n\nDATA DIVISION.\nFILE SECTION.\nFD ACCOUNT-FILE.\n01 ACCOUNT-REC.\n   05 A-ACCT-NO   PIC 9(6).\n   05 A-NAME      PIC A(30).\n   05 A-BALANCE   PIC 9(9)V99.\n   05 A-STATUS    PIC X(1).\n   05 A-DATE      PIC 9(8).\n\nFD TRANS-FILE.\n01 TRANS-REC.\n   05 T-ACCT-NO   PIC 9(6).\n   05 T-TYPE      PIC X(1).\n   05 T-AMOUNT    PIC 9(7)V99.\n   05 T-DATE      PIC 9(8).\n   05 T-TIME      PIC 9(6).\n\nWORKING-STORAGE SECTION.\n01 WS-EOF        PIC X(1) VALUE \"N\".\n01 WS-CHOICE     PIC 9(1).\n01 WS-ACCT-NO    PIC 9(6).\n01 WS-AMOUNT     PIC 9(7)V99.\n01 WS-FOUND      PIC X(1) VALUE \"N\".\n01 WS-CURRENT-DATE PIC 9(8).\n\nPROCEDURE DIVISION.\nMAIN-LOGIC.\n    ACCEPT WS-CURRENT-DATE FROM DATE.\n    PERFORM UNTIL WS-CHOICE = 6\n        DISPLAY \" \"\n        DISPLAY \"==================\"\n        DISPLAY \"  BANK SYSTEM     \"\n        DISPLAY \"==================\"\n        DISPLAY \"1. Naya Account\"\n        DISPLAY \"2. Balance Check\"\n        DISPLAY \"3. Deposit\"\n        DISPLAY \"4. Withdraw\"\n        DISPLAY \"5. Mini Statement\"\n        DISPLAY \"6. Exit\"\n        DISPLAY \"Option: \"\n        ACCEPT WS-CHOICE\n        EVALUATE WS-CHOICE\n            WHEN 1 PERFORM NEW-ACCOUNT\n            WHEN 2 PERFORM CHECK-BALANCE\n            WHEN 3 PERFORM DO-DEPOSIT\n            WHEN 4 PERFORM DO-WITHDRAW\n            WHEN 5 PERFORM MINI-STATEMENT\n            WHEN 6 DISPLAY \"Shukriya!\"\n            WHEN OTHER DISPLAY \"Galat option!\"\n        END-EVALUATE\n    END-PERFORM.\n    STOP RUN.\n```",
      },
      {
        title: "Operations Implement Karna",
        content: "```cobol\nNEW-ACCOUNT.\n    DISPLAY \"Customer Name: \" .\n    ACCEPT A-NAME.\n    DISPLAY \"Initial Deposit: \".\n    ACCEPT WS-AMOUNT.\n    MOVE WS-CURRENT-DATE TO A-DATE.\n    MOVE \"A\" TO A-STATUS.\n    MOVE WS-AMOUNT TO A-BALANCE.\n    MOVE 100001 TO A-ACCT-NO.\n    OPEN EXTEND ACCOUNT-FILE.\n    WRITE ACCOUNT-REC.\n    CLOSE ACCOUNT-FILE.\n    DISPLAY \"Account Created! No: \" A-ACCT-NO.\n\nCHECK-BALANCE.\n    DISPLAY \"Account Number: \".\n    ACCEPT WS-ACCT-NO.\n    MOVE \"N\" TO WS-FOUND.\n    OPEN INPUT ACCOUNT-FILE.\n    PERFORM UNTIL WS-EOF = \"Y\" OR WS-FOUND = \"Y\"\n        READ ACCOUNT-FILE\n            AT END MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                IF A-ACCT-NO = WS-ACCT-NO\n                    MOVE \"Y\" TO WS-FOUND\n                    DISPLAY \"Name: \" A-NAME\n                    DISPLAY \"Balance: \" A-BALANCE\n                END-IF\n        END-READ\n    END-PERFORM.\n    CLOSE ACCOUNT-FILE.\n    IF WS-FOUND = \"N\"\n        DISPLAY \"Account nahi mila!\"\n    END-IF.\n\nDO-DEPOSIT.\n    DISPLAY \"Account Number: \".\n    ACCEPT WS-ACCT-NO.\n    DISPLAY \"Amount: \".\n    ACCEPT WS-AMOUNT.\n    *> File update logic here\n    DISPLAY \"Deposit successful!\".\n```",
      },
    ],
    quiz: [
      {
        question: "Bank system mein kaunsa file organization use hota hai?",
        options: ["Indexed", "Sequential", "Relative", "Random"],
        correct: 1,
      },
      {
        question: "Account status ke liye kaunsa level use hota hai?",
        options: ["Level 01", "Level 05", "Level 88", "Level 77"],
        correct: 2,
      },
      {
        question: "File update karne ka sahi tarika kya hai?",
        options: ["File ko delete karke naya banana", "Existing record ko modify karna", "File ko rename karna", "File ko copy karna"],
        correct: 1,
      },
    ],
    related: ["cobol-inventory", "cobol-payroll"],
    prev: "cobol-oo",
    next: "cobol-inventory",
  },
  {
    slug: "cobol-inventory",
    categoryId: "projects",
    title: "Inventory Management System",
    hindiTitle: "Products ka inventory manage karna — stock tracking",
    level: "projects",
    minutes: 55,
    summary: "Inventory management system banao — products add karna, stock update karna, reports banana.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Project Overview",
        content: "Ye system karega:\n1. **Product Add** — Naya product daalna\n2. **Stock Update** — Quantity badhana/ghatana\n3. **Search Product** — Naam se dhundhna\n4. **Low Stock Alert** — Kam stock wale products\n5. **Stock Report** — Poora report\n6. **Sales Entry** — Bikri record karna",
      },
      {
        title: "File Structure",
        content: "```cobol\n*> PRODUCT-FILE\n01 PRODUCT-RECORD.\n   05 P-CODE      PIC 9(5).\n   05 P-NAME      PIC A(30).\n   05 P-CATEGORY  PIC A(15).\n   05 P-QTY       PIC 9(5).\n   05 P-PRICE     PIC 9(5)V99.\n   05 P-MIN-QTY   PIC 9(5).\n   05 P-STATUS    PIC X(1).\n\n*> SALES-FILE\n01 SALES-RECORD.\n   05 S-INV-NO    PIC 9(6).\n   05 S-PRODUCT   PIC 9(5).\n   05 S-QTY       PIC 9(5).\n   05 S-AMOUNT    PIC 9(7)V99.\n   05 S-DATE      PIC 9(8).\n```",
      },
      {
        title: "Low Stock Alert Logic",
        content: "```cobol\nLOW-STOCK-ALERT.\n    DISPLAY \"=== LOW STOCK ALERTS ===\".\n    OPEN INPUT PRODUCT-FILE.\n    MOVE \"N\" TO WS-EOF.\n    PERFORM UNTIL WS-EOF = \"Y\"\n        READ PRODUCT-FILE\n            AT END\n                MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                IF P-QTY < P-MIN-QTY\n                    DISPLAY \"ALERT! \" P-NAME\n                    DISPLAY \"  Stock: \" P-QTY\n                    DISPLAY \"  Min:   \" P-MIN-QTY\n                    DISPLAY \" \"\n                END-IF\n        END-READ\n    END-PERFORM.\n    CLOSE PRODUCT-FILE.\n```",
      },
      {
        title: "Search Product",
        content: "```cobol\nSEARCH-PRODUCT.\n    DISPLAY \"Product name: \".\n    ACCEPT WS-SEARCH-NAME.\n    MOVE \"N\" TO WS-FOUND.\n    OPEN INPUT PRODUCT-FILE.\n    MOVE \"N\" TO WS-EOF.\n    PERFORM UNTIL WS-EOF = \"Y\"\n        READ PRODUCT-FILE\n            AT END\n                MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                IF P-NAME = WS-SEARCH-NAME\n                    MOVE \"Y\" TO WS-FOUND\n                    DISPLAY \"Found!\"\n                    DISPLAY \"Code:     \" P-CODE\n                    DISPLAY \"Name:     \" P-NAME\n                    DISPLAY \"Category: \" P-CATEGORY\n                    DISPLAY \"Qty:      \" P-QTY\n                    DISPLAY \"Price:    \" P-PRICE\n                END-IF\n        END-READ\n    END-PERFORM.\n    CLOSE PRODUCT-FILE.\n    IF WS-FOUND = \"N\"\n        DISPLAY \"Product nahi mila!\"\n    END-IF.\n```",
      },
    ],
    quiz: [
      {
        question: "Low stock alert kaise kaam karta hai?",
        options: ["Stock zero hone par", "Minimum quantity se kam hone par", "Product expire hone par", "Sale hone par"],
        correct: 1,
      },
      {
        question: "Inventory system mein kaunse operations hote hain?",
        options: ["Sirf add/delete", "CRUD operations", "Sirf read", "Sirf update"],
        correct: 1,
      },
    ],
    related: ["cobol-bank-system", "cobol-payroll"],
    prev: "cobol-bank-system",
    next: "cobol-payroll",
  },
  {
    slug: "cobol-payroll",
    categoryId: "projects",
    title: "Payroll System",
    hindiTitle: "Employees ki salary calculate karna — payroll management",
    level: "projects",
    minutes: 60,
    summary: "Payroll system banao — salary calculation, deductions, bonus, aur payslip generation.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Payroll System Kya Karega",
        content: "1. **Employee Add** — Naya employee daalna\n2. **Salary Calculate** — Basic, HRA, DA, PF, Tax\n3. **Payslip Generate** — Print payslip\n4. **Monthly Report** — Sab employees ka report\n5. **Tax Calculation** — Income tax\n6. **Bonus Calculate** — Performance bonus",
      },
      {
        title: "Salary Components",
        content: "```cobol\n*> Salary structure\n01 WS-SALARY.\n   05 WS-BASIC      PIC 9(7)V99.\n   05 WS-HRA        PIC 9(7)V99.  *> 40% of Basic\n   05 WS-DA         PIC 9(7)V99.  *> 30% of Basic\n   05 WS-PA         PIC 9(7)V99.  *> 10% of Basic\n   05 WS-GROSS      PIC 9(7)V99.\n   05 WS-PF         PIC 9(7)V99.  *> 12% of Basic\n   05 WS-ESI        PIC 9(7)V99.  *> 1.75% of Gross\n   05 WS-TAX        PIC 9(7)V99.\n   05 WS-NET        PIC 9(7)V99.\n\nCOMPUTE WS-HRA = WS-BASIC * 0.40.\nCOMPUTE WS-DA = WS-BASIC * 0.30.\nCOMPUTE WS-PA = WS-BASIC * 0.10.\nCOMPUTE WS-GROSS = WS-BASIC + WS-HRA + WS-DA + WS-PA.\nCOMPUTE WS-PF = WS-BASIC * 0.12.\nCOMPUTE WS-ESI = WS-GROSS * 0.0175.\nCOMPUTE WS-NET = WS-GROSS - WS-PF - WS-ESI - WS-TAX.\n```",
      },
      {
        title: "Payslip Generation",
        "content": "```cobol\nPRINT-PAYSLIP.\n    DISPLAY \"========================================\".\n    DISPLAY \"           COMPANY NAME                \"\n    DISPLAY \"========================================\".\n    DISPLAY \"Employee Name : \" WS-NAME.\n    DISPLAY \"Employee ID   : \" WS-ID.\n    DISPLAY \"Department    : \" WS-DEPT.\n    DISPLAY \"----------------------------------------\".\n    DISPLAY \"EARNINGS\".\n    DISPLAY \"  Basic       : \" WS-BASIC.\n    DISPLAY \"  HRA (40%)   : \" WS-HRA.\n    DISPLAY \"  DA (30%)    : \" WS-DA.\n    DISPLAY \"  PA (10%)    : \" WS-PA.\n    DISPLAY \"  Gross       : \" WS-GROSS.\n    DISPLAY \"----------------------------------------\".\n    DISPLAY \"DEDUCTIONS\".\n    DISPLAY \"  PF (12%)    : \" WS-PF.\n    DISPLAY \"  ESI (1.75%) : \" WS-ESI.\n    DISPLAY \"  Tax         : \" WS-TAX.\n    DISPLAY \"----------------------------------------\".\n    DISPLAY \"NET SALARY    : \" WS-NET.\n    DISPLAY \"========================================\".\n```",
      },
      {
        title: "Tax Calculation Logic",
        content: "```cobol\nCALCULATE-TAX.\n    IF WS-GROSS <= 250000\n        MOVE 0 TO WS-TAX\n    ELSE IF WS-GROSS <= 500000\n        COMPUTE WS-TAX = (WS-GROSS - 250000) * 0.05\n    ELSE IF WS-GROSS <= 1000000\n        COMPUTE WS-TAX = 12500 + (WS-GROSS - 500000) * 0.20\n    ELSE\n        COMPUTE WS-TAX = 112500 + (WS-GROSS - 1000000) * 0.30\n    END-IF.\n```",
      },
    ],
    quiz: [
      {
        question: "HRA kitne percent hota hai Basic ka?",
        options: ["20%", "30%", "40%", "50%"],
        correct: 2,
      },
      {
        question: "PF ka full form kya hai?",
        options: ["Provident Fund", "Private Fund", "Permanent Fund", "Personal Fund"],
        correct: 0,
      },
      {
        question: "Net Salary kaise nikalta hai?",
        options: ["Gross + Deductions", "Gross - Deductions", "Gross * Deductions", "Gross / Deductions"],
        correct: 1,
      },
    ],
    related: ["cobol-inventory", "cobol-data-processing"],
    prev: "cobol-inventory",
    next: "cobol-data-processing",
  },
  {
    slug: "cobol-data-processing",
    categoryId: "projects",
    title: "Data Processing & Reporting",
    hindiTitle: "Bulk data process karna aur reports banana",
    level: "projects",
    minutes: 50,
    summary: "Large data files process karna, sorting, filtering, aur detailed reports generate karna.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Project Overview",
        content: "Ye project karega:\n1. **Data Import** — CSV/file se data padhna\n2. **Data Validation** — Sahi data hai ya nahi\n3. **Data Sorting** — Kisi field ke basis par\n4. **Data Filtering** — Conditions laga kar data nikalna\n5. **Report Generation** — Formatted reports banana\n6. **Summary Statistics** — Total, Average, Min, Max",
      },
      {
        title: "Data Validation",
        content: "```cobol\nVALIDATE-RECORD.\n    MOVE \"Y\" TO WS-VALID.\n\n    *> Name check\n    IF WS-NAME = SPACES\n        MOVE \"N\" TO WS-VALID\n        DISPLAY \"Error: Name empty!\"\n    END-IF.\n\n    *> Age check\n    IF WS-AGE < 18 OR WS-AGE > 100\n        MOVE \"N\" TO WS-VALID\n        DISPLAY \"Error: Invalid age!\"\n    END-IF.\n\n    *> Email check (basic)\n    IF WS-EMAIL NOT CONTAINS \"@\"\n        MOVE \"N\" TO WS-VALID\n        DISPLAY \"Error: Invalid email!\"\n    END-IF.\n\n    *> Amount check\n    IF WS-AMOUNT < 0\n        MOVE \"N\" TO WS-VALID\n        DISPLAY \"Error: Negative amount!\"\n    END-IF.\n```",
      },
      {
        title: "Summary Statistics",
        content: "```cobol\nCOMPUTE-STATISTICS.\n    MOVE 0 TO WS-TOTAL.\n    MOVE 0 TO WS-COUNT.\n    MOVE 999999 TO WS-MIN.\n    MOVE 0 TO WS-MAX.\n\n    OPEN INPUT DATA-FILE.\n    MOVE \"N\" TO WS-EOF.\n    PERFORM UNTIL WS-EOF = \"Y\"\n        READ DATA-FILE\n            AT END\n                MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                ADD 1 TO WS-COUNT\n                ADD WS-AMOUNT TO WS-TOTAL\n                IF WS-AMOUNT < WS-MIN\n                    MOVE WS-AMOUNT TO WS-MIN\n                END-IF\n                IF WS-AMOUNT > WS-MAX\n                    MOVE WS-AMOUNT TO WS-MAX\n                END-IF\n        END-READ\n    END-PERFORM.\n    CLOSE DATA-FILE.\n\n    COMPUTE WS-AVG = WS-TOTAL / WS-COUNT.\n    DISPLAY \"Total Records: \" WS-COUNT.\n    DISPLAY \"Total Amount:  \" WS-TOTAL.\n    DISPLAY \"Average:       \" WS-AVG.\n    DISPLAY \"Minimum:       \" WS-MIN.\n    DISPLAY \"Maximum:       \" WS-MAX.\n```",
      },
      {
        title: "Report Formatting",
        content: "```cobol\nPRINT-REPORT.\n    DISPLAY \"================================================\".\n    DISPLAY \"              MONTHLY SALES REPORT              \".\n    DISPLAY \"================================================\".\n    DISPLAY \"Date: \" WS-REPORT-DATE.\n    DISPLAY \"------------------------------------------------\".\n    DISPLAY \"No  | Name          | Amount    | Status\".\n    DISPLAY \"------------------------------------------------\".\n\n    MOVE 1 TO WS-SR-NO.\n    OPEN INPUT SORTED-FILE.\n    MOVE \"N\" TO WS-EOF.\n    PERFORM UNTIL WS-EOF = \"Y\"\n        READ SORTED-FILE\n            AT END\n                MOVE \"Y\" TO WS-EOF\n            NOT AT END\n                DISPLAY WS-SR-NO \"  | \" WS-NAME\n                        \" | \" WS-AMOUNT \" | \" WS-STATUS\n                ADD 1 TO WS-SR-NO\n        END-READ\n    END-PERFORM.\n    CLOSE SORTED-FILE.\n\n    DISPLAY \"================================================\".\n    DISPLAY \"Total: \" WS-TOTAL-AMOUNT.\n    DISPLAY \"Average: \" WS-AVG-AMOUNT.\n    DISPLAY \"================================================\".\n```",
      },
    ],
    quiz: [
      {
        question: "Data validation ka purpose kya hai?",
        options: ["Data ko delete karna", "Data ki quality ensure karna", "Data ko copy karna", "Data ko sort karna"],
        correct: 1,
      },
      {
        question: "Summary statistics mein kaunse values nikalte hain?",
        options: ["Sirf Total", "Total, Average, Min, Max", "Sirf Average", "Sirf Count"],
        correct: 1,
      },
      {
        question: "Report formatting ka use kya hai?",
        options: ["Data ko hide karna", "Data ko readable format mein dikhana", "Data ko delete karna", "Data ko compress karna"],
        correct: 1,
      },
    ],
    related: ["cobol-payroll", "cobol-bank-system"],
    prev: "cobol-payroll",
    next: "cobol-bank-system",
  },
];
