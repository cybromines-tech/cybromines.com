import {
  ArrowLeftRight,
  Boxes,
  Landmark,
  Users,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

export interface ModuleFeature {
  title: string;
  description: string;
}

export interface AppCapability {
  title: string;
  description: string;
}

export interface ModuleFaq {
  question: string;
  answer: string;
}

export interface ErpModule {
  slug: string;
  name: string;
  icon: LucideIcon;
  /** One-line value prop used on cards. */
  tagline: string;
  /** Longer promise used on the module hero. */
  promise: string;
  /** Used in metadata description (140–160 chars). */
  metaDescription: string;
  /** Marks the flagship card in the bento grid. */
  flagship?: boolean;
  features: ModuleFeature[];
  app: {
    headline: string;
    subline: string;
    capabilities: AppCapability[];
  };
  faqs: ModuleFaq[];
}

export const modules: ErpModule[] = [
  {
    slug: "trading",
    name: "Trading",
    icon: ArrowLeftRight,
    flagship: true,
    tagline: "Run the full sales-and-purchase cycle on one ledger.",
    promise:
      "Quote, sell, buy, and settle across multiple currencies — with margins you can see on every line.",
    metaDescription:
      "Cybromines Trading runs the full quotation-to-invoice cycle: multi-currency sales and purchasing, credit limits, landed cost, and live margin reporting.",
    features: [
      {
        title: "Quotation to invoice flow",
        description:
          "Turn a quote into a sales order, delivery note, and tax invoice without re-keying a single line. Every document inherits pricing, discounts, and terms from the one before it.",
      },
      {
        title: "Sales & purchase cycles",
        description:
          "Manage the complete order-to-cash and procure-to-pay cycle in one place. Link purchase orders to sales demand so you only buy what you've sold.",
      },
      {
        title: "Multi-currency pricing",
        description:
          "Transact in any currency with daily or contract exchange rates. Realised and unrealised gains post to the ledger automatically at period close.",
      },
      {
        title: "Credit limits & holds",
        description:
          "Set credit limits and payment terms per customer. Orders that breach a limit are flagged or held for approval before they ship.",
      },
      {
        title: "Batch & landed cost",
        description:
          "Apportion freight, duty, and insurance across receipts to get true landed cost per unit. Track batches end to end for traceability and recalls.",
      },
      {
        title: "Live margin reporting",
        description:
          "See gross margin by line, order, customer, and salesperson in real time. Spot loss-making deals before they're invoiced, not after.",
      },
    ],
    app: {
      headline: "Sell from anywhere",
      subline:
        "Your sales team closes deals on the floor, at the warehouse, or on the road.",
      capabilities: [
        {
          title: "Mobile quotations",
          description: "Build and send a branded quote in under a minute.",
        },
        {
          title: "Live stock & pricing",
          description: "Check availability and customer-specific prices on the spot.",
        },
        {
          title: "Order approvals",
          description: "Approve credit holds and discounts with one tap.",
        },
        {
          title: "Customer 360",
          description: "Open balances, history, and credit status in one view.",
        },
      ],
    },
    faqs: [
      {
        question: "Can Trading handle both wholesale and retail pricing?",
        answer:
          "Yes. You can define price lists per customer group, currency, and quantity break, and the right price is applied automatically on every quote and order.",
      },
      {
        question: "How is landed cost calculated?",
        answer:
          "Freight, duty, insurance, and handling are apportioned across a receipt by value, weight, or quantity, then folded into the item's moving-average cost.",
      },
      {
        question: "Does it support multi-company trading?",
        answer:
          "It does. Inter-company sales and purchases are posted on both sides with automatic elimination entries for consolidated reporting.",
      },
    ],
  },
  {
    slug: "inventory",
    name: "Inventory",
    icon: Boxes,
    tagline: "Know exactly what you hold, where, and what it's worth.",
    promise:
      "Real-time stock across every warehouse, with barcode accuracy and valuation you can trust at close.",
    metaDescription:
      "Cybromines Inventory gives real-time multi-warehouse stock, barcode operations, serial and batch tracking, reorder automation, and accurate valuation.",
    features: [
      {
        title: "Multi-warehouse stock",
        description:
          "Track quantity on hand, reserved, and in transit across unlimited warehouses, branches, and bin locations from a single screen.",
      },
      {
        title: "Barcode operations",
        description:
          "Scan to receive, pick, count, and transfer. Barcode-driven workflows cut data-entry errors and speed up every warehouse task.",
      },
      {
        title: "Stock transfers",
        description:
          "Move stock between locations with in-transit tracking and confirmation on receipt, so nothing goes missing between sites.",
      },
      {
        title: "Reorder levels",
        description:
          "Set minimum, maximum, and reorder points per item and location. The system raises purchase requests the moment you cross a threshold.",
      },
      {
        title: "Valuation methods",
        description:
          "Choose FIFO, moving average, or standard cost per item. Valuation reports reconcile to the general ledger at any point in time.",
      },
      {
        title: "Serial & batch tracking",
        description:
          "Capture serial numbers and batch or lot details with expiry dates for full traceability, warranty handling, and recall readiness.",
      },
    ],
    app: {
      headline: "Run the warehouse from your hand",
      subline:
        "Turn any phone into a rugged scanner — no extra hardware needed.",
      capabilities: [
        {
          title: "Scan to count",
          description: "Run cycle counts and stock takes with the camera.",
        },
        {
          title: "Receive & put-away",
          description: "Book goods in against POs and assign bin locations.",
        },
        {
          title: "Transfer on the move",
          description: "Initiate and confirm transfers between sites instantly.",
        },
        {
          title: "Stock lookup",
          description: "Find any item's quantity and location in seconds.",
        },
      ],
    },
    faqs: [
      {
        question: "Does it work with existing barcode scanners?",
        answer:
          "Yes. It supports standard USB and Bluetooth scanners, and the mobile app turns any phone camera into a scanner with no extra hardware.",
      },
      {
        question: "Can I track expiry dates for perishable goods?",
        answer:
          "Batch tracking captures manufacture and expiry dates, and the system can enforce FEFO (first-expired, first-out) picking automatically.",
      },
      {
        question: "How does inventory reconcile with finance?",
        answer:
          "Every stock movement posts a matching journal entry, so your inventory valuation always ties out to the general ledger.",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: Landmark,
    tagline: "Close your books in days, not weeks.",
    promise:
      "A complete general ledger with GCC VAT compliance, bank reconciliation, and statements you can file with confidence.",
    metaDescription:
      "Cybromines Finance delivers a full GL, AR/AP, UAE and KSA VAT compliance, bank reconciliation, multi-company consolidation, and audit-ready statements.",
    features: [
      {
        title: "General ledger",
        description:
          "A real-time, double-entry ledger that every other module posts into. Drill from any statement line down to the source transaction.",
      },
      {
        title: "Accounts receivable & payable",
        description:
          "Manage customer and supplier balances, ageing, and settlements. Match payments to invoices automatically and chase overdue accounts.",
      },
      {
        title: "VAT compliance (UAE & KSA)",
        description:
          "Built for GCC tax: correct VAT treatment on every transaction, FTA-ready return summaries, and KSA e-invoicing (ZATCA) support.",
      },
      {
        title: "Bank reconciliation",
        description:
          "Import statements and auto-match against ledger entries. Reconcile thousands of lines in minutes and flag only the exceptions.",
      },
      {
        title: "Financial statements",
        description:
          "Generate the trial balance, P&L, balance sheet, and cash flow on demand — by company, branch, cost centre, or project.",
      },
      {
        title: "Multi-company consolidation",
        description:
          "Run many legal entities in one system with inter-company eliminations and consolidated reporting across currencies.",
      },
    ],
    app: {
      headline: "Approvals and insight on the go",
      subline:
        "Keep cash flowing without being chained to your desk.",
      capabilities: [
        {
          title: "Approve payments",
          description: "Review and authorise payment runs from anywhere.",
        },
        {
          title: "Cash dashboards",
          description: "See balances, receivables, and payables at a glance.",
        },
        {
          title: "Expense capture",
          description: "Snap a receipt and log an expense in seconds.",
        },
        {
          title: "Live P&L",
          description: "Check performance by company or branch instantly.",
        },
      ],
    },
    faqs: [
      {
        question: "Is it compliant with UAE and KSA VAT rules?",
        answer:
          "Yes. VAT is applied correctly per transaction type, returns are summarised in FTA format, and KSA ZATCA-compliant e-invoicing is supported.",
      },
      {
        question: "Can I run more than one company in one system?",
        answer:
          "You can run unlimited legal entities with shared master data, inter-company postings, and one-click consolidated statements.",
      },
      {
        question: "How long does a month-end close take?",
        answer:
          "Because sub-ledgers post in real time and reconciliation is automated, most teams close in a few days instead of weeks.",
      },
    ],
  },
  {
    slug: "hrm",
    name: "HRM",
    icon: Users,
    tagline: "Pay people accurately and on time, every cycle.",
    promise:
      "Employee records, WPS payroll, attendance, and end-of-service — built for GCC labour rules out of the box.",
    metaDescription:
      "Cybromines HRM handles employee records, WPS-compliant payroll, leave and attendance, gratuity and EOSB, and employee self-service for GCC teams.",
    features: [
      {
        title: "Employee records",
        description:
          "One profile per employee for contracts, documents, visas, and Emirates ID — with expiry alerts so nothing lapses.",
      },
      {
        title: "Payroll incl. WPS",
        description:
          "Run accurate monthly payroll with allowances, deductions, and overtime, then generate a compliant WPS SIF file for the bank.",
      },
      {
        title: "Leave & attendance",
        description:
          "Configure leave policies, capture attendance from biometric or mobile check-in, and let balances accrue automatically.",
      },
      {
        title: "Gratuity & EOSB",
        description:
          "Calculate end-of-service benefits to UAE and wider GCC labour law, with accruals posted to finance every period.",
      },
      {
        title: "Employee self-service",
        description:
          "Staff apply for leave, view payslips, and update details from the app, cutting HR's admin load dramatically.",
      },
      {
        title: "Org & approvals",
        description:
          "Model your org chart and route every request — leave, expense, document — through the right approval chain automatically.",
      },
    ],
    app: {
      headline: "HR in everyone's pocket",
      subline:
        "Self-service that employees actually use, on iOS and Android.",
      capabilities: [
        {
          title: "Check in / out",
          description: "Geo-fenced attendance with one tap.",
        },
        {
          title: "Apply for leave",
          description: "Request time off and see live balances.",
        },
        {
          title: "Payslips",
          description: "Download payslips and salary certificates anytime.",
        },
        {
          title: "Approvals",
          description: "Managers approve requests without logging in to a desktop.",
        },
      ],
    },
    faqs: [
      {
        question: "Does payroll generate a WPS file?",
        answer:
          "Yes. Each payroll run produces a bank-ready WPS SIF file so salaries are paid in full compliance with Ministry of Labour rules.",
      },
      {
        question: "How is gratuity calculated?",
        answer:
          "End-of-service benefit is calculated to current GCC labour law based on tenure and last drawn salary, and accrued in the ledger each month.",
      },
      {
        question: "Can employees access it themselves?",
        answer:
          "The self-service app lets employees check in, apply for leave, and download payslips, removing most routine requests from HR's desk.",
      },
    ],
  },
  {
    slug: "pos",
    name: "POS",
    icon: ScanLine,
    tagline: "Sell fast at the counter — online or off.",
    promise:
      "A resilient point of sale that keeps ringing sales through outages and syncs every branch back to head office.",
    metaDescription:
      "Cybromines POS is an offline-capable, multi-branch point of sale with promotions, integrated payments, and Z-reports that sync straight to finance.",
    features: [
      {
        title: "Offline-capable terminal",
        description:
          "Keep selling when the internet drops. Transactions queue locally and sync automatically the moment you're back online.",
      },
      {
        title: "Multi-branch control",
        description:
          "Run every outlet from one back office with shared products, central pricing, and consolidated sales reporting.",
      },
      {
        title: "Promotions & discounts",
        description:
          "Build mix-and-match offers, happy-hour pricing, coupons, and loyalty rewards that apply automatically at the till.",
      },
      {
        title: "Z-reports & shifts",
        description:
          "Open and close cashier shifts with full X and Z reports, cash declarations, and variance tracking per terminal.",
      },
      {
        title: "Payment integrations",
        description:
          "Accept cash, card, and wallet payments through integrated terminals, with split tenders and instant reconciliation.",
      },
      {
        title: "Live inventory link",
        description:
          "Every sale decrements stock in real time and feeds finance, so the counter, warehouse, and ledger never disagree.",
      },
    ],
    app: {
      headline: "A till in your pocket",
      subline:
        "Turn a phone or tablet into a full register for pop-ups and queue-busting.",
      capabilities: [
        {
          title: "Mobile checkout",
          description: "Ring up sales anywhere on the floor.",
        },
        {
          title: "Scan products",
          description: "Add items by scanning barcodes with the camera.",
        },
        {
          title: "Card & wallet",
          description: "Take contactless payments on supported devices.",
        },
        {
          title: "Shift reports",
          description: "Close shifts and review takings from the device.",
        },
      ],
    },
    faqs: [
      {
        question: "What happens if the internet goes down mid-sale?",
        answer:
          "The terminal keeps operating in offline mode. Sales are stored locally and synced to head office automatically when the connection returns.",
      },
      {
        question: "Can I run promotions across multiple branches?",
        answer:
          "Yes. Promotions are configured centrally and pushed to every branch, with the option to target specific outlets or date ranges.",
      },
      {
        question: "Does POS update stock and accounts automatically?",
        answer:
          "Each sale reduces inventory and posts to the ledger in real time, so stock counts and financials always reflect what's been sold.",
      },
    ],
  },
];

export function getModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}

export const moduleSlugs = modules.map((m) => m.slug);
