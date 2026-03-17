export interface Course {
  slug: string;
  name: string;
  nameShort: string;
  program: "BIT" | "PP" | "BST";
  ects: number;
  newEcts: number;
  contactHours: number;
  newContactHours: number;
  selfStudyHours: number;
  newSelfStudyHours: number;
  blocks: number;
  currentAssessment: string;
  coordinator: string;
  currentLearningGoals: string[];
  courseDescription: string;
  blockSchedule: string;
  currentStudyLoad: string;
  newStudyLoad: string;
  newBlockScheduleFormat: string;
  keyTopics: string[];
  language: "nl" | "en";
}

export const courses: Course[] = [
  {
    slug: "risk-and-finance",
    name: "Risk and Finance",
    nameShort: "Risk & Finance",
    program: "BIT",
    ects: 7.5,
    newEcts: 6,
    contactHours: 50,
    newContactHours: 40.5,
    selfStudyHours: 160,
    newSelfStudyHours: 127.5,
    blocks: 3,
    currentAssessment: "In-class group work (5 reports, 10 points total), building & presenting a financial model in Excel (10 points), and an individual final assignment: a paper with extensive financial analysis and valuation of the participant's own organization (80 points). Uploaded as PDF on Canvas.",
    coordinator: "Prof. dr. Dennis Vink",
    currentLearningGoals: [
      "Measuring and Managing Financial Numbers: Learning what risk and return entail and how to use numbers to make risk and return transparent. Assessing whether financial value is being created and to what extent assets are efficiently used.",
      "The ability to interpret and assess the financial performance and risks of an organization using the acquired 'toolbox'.",
      "Asking critical questions about the return and efficiency of an organization.",
      "Identifying financial, compliance, operational, and strategic risks facing an organization.",
      "Gaining insight into assessing and building a solid financial (IT) business case: calculating the value of (IT) projects, estimating risks, making financial forecasts, and making well-considered investment decisions.",
      "Knowledge of different valuation methodologies and their application in valuing a company's shares, decision-making regarding investing in shares.",
      "Measuring and integrating sustainability into (IT) business operations."
    ],
    courseDescription: "During this module, participants quickly master the most important financial concepts and decision-making tools. The goal is to communicate more effectively on financial topics with executives, the executive committee, shareholders, and other financiers. Participants will be able to interpret and assess the financial performance and risks of IT projects and their own organization. The module uses own literature, (inter)national best-practice literature, and Harvard Business School cases. Sessions combine lecture and debate format with ample room for discussion.",
    blockSchedule: "Block 1 (2 days): Financial Management – Measuring and Managing Numbers. Financial reporting, analysis, cash flows, cost allocation, budgeting. Case studies: Ben & Jerry-Unilever Deal, The Downfall of Bang & Olufsen.\nBlock 2 (2 days): Business Modeling – How to Assess and Build a Solid Financial (IT) Business Case. Project valuation, risk assessment, financial forecasting. HBS simulation. Case: Lego factory in India.\nBlock 3 (2 days): Sustainability and Mergers, Acquisitions & Private Equity. Sustainability integration, valuation methods, M&A. Cases: Lego in the Age of Digitization, Valuing Snap after IPO, SAB Miller-ABInbev, AKZO Nobel, Rise and Fall of Iridium.",
    currentStudyLoad: "210 hours total (7.5 ECTS): 50 contact hours across 3 blocks (each 2 days), 160 hours of reading, preparation, studying, and assignments.",
    newStudyLoad: "168 hours total (6 ECTS): 40.5 contact hours across 3 blocks (each 2 days), 127.5 hours of self-study and assignments.",
    newBlockScheduleFormat: "Day 1 (8 hrs): Morning 9:30-12:30 (3h), Lunch 12:30-13:30, Afternoon 13:30-17:00 (3.5h), Evening 17:30-19:00 (1.5h). Day 2 (5.5 hrs): Morning 9:30-12:30 (3h), Lunch 12:30-13:30, Afternoon 13:30-16:00 (2.5h). Dinner 19:00-21:00.",
    keyTopics: [
      "Financial statement analysis (balance sheet, income statement, cash flow)",
      "Risk and return measurement",
      "Financial value creation and EVA/ROIC analysis",
      "Capital budgeting and project valuation (NPV, IRR)",
      "Building financial business cases for IT projects",
      "Company valuation methodologies (DCF, multiples)",
      "Mergers, acquisitions and private equity",
      "Sustainability metrics and ESG integration",
      "Cost allocation and budgeting",
      "WACC estimation and sensitivity analysis"
    ],
    language: "en"
  },
  {
    slug: "government-en-corporate-governance",
    name: "Government en Corporate Governance",
    nameShort: "Gov. & Corp. Gov.",
    program: "PP",
    ects: 7.5,
    newEcts: 6,
    contactHours: 50,
    newContactHours: 40.5,
    selfStudyHours: 160,
    newSelfStudyHours: 127.5,
    blocks: 3,
    currentAssessment: "3 KAVV-literatuuropdrachten per blok (pass/fail), inbreng eigen governance-vraagstuk en hulpvraag, en een eindopdracht (100%): een paper van max. 6500 woorden waarin een governance-concept wordt toegepast op de eigen organisatie, inclusief theoretisch kader, probleem- en vraagstelling, onderzoek en praktische aanbevelingen.",
    coordinator: "Kerndocent (niet nader gespecificeerd in outline)",
    currentLearningGoals: [
      "Kennis van de theorie en praktijk van governance door de overheid.",
      "Kennis van de theorie en praktijk van corporate governance.",
      "Kennis van de theorie en praktijk van publiek-private samenwerking (PPS) en de netwerksamenleving.",
      "Bewustwording van de effectiviteit van de eigen invulling van rollen en competenties in diverse relevante samenwerkingsrelaties.",
      "Omgevingsbewustzijn: goed geïnformeerd zijn over organisatorische, maatschappelijke en politieke ontwikkelingen.",
      "Anticiperen: kritische situaties tijdig onderkennen en hierop adequaat inspelen.",
      "Empathie en inlevingsvermogen: zich goed kunnen inleven in gevoelens of gedachtegang van anderen.",
      "Bestuurlijke, interpersoonlijke en organisatiesensitiviteit ontwikkelen.",
      "Netwerkvaardigheid: relaties, allianties en coalities ontwikkelen en benutten.",
      "In staat zijn governance-concepten toe te passen op de eigen organisatie en aanbevelingen te formuleren."
    ],
    courseDescription: "De module Government en Corporate Governance gaat over goed bestuur binnen de overheid en het bedrijfsleven. Het openbaar bestuur is aangevuld met taken en verantwoordelijkheden van het bedrijfsleven (corporate governance). Overheid en bedrijfsleven raken steeds meer vervlochten door publiek-private samenwerkingsverbanden (hybride governance). Centraal staan de kernelementen: theorie en praktijk van goed bestuur, corporate governance en publiek-private samenwerking. De module heeft een 'pracademic' karakter: deelnemers worden uitgedaagd door opdrachten, groepsdiscussies en voordrachten om leerstof te betrekken op eigen werk en ervaringen. Er wordt onderscheid gemaakt tussen 'presentatieregels', 'disciplinerende regels' en 'werkregels' (zoals het echt gaat).",
    blockSchedule: "Blok 1: Macht en verantwoording. Het begrip macht en governance, individuele verantwoordelijkheid, instrumentaliteit en rechtsbescherming, publieke en private waardensystemen, effectiviteit publieke sector. Gastsprekers uit de praktijk.\nBlok 2: Bedrijfskunde en uitdagingen. Publiek bestuur, Triple Helix governance, hybride sturing, MVO en CSR, Corporate Governance Code, democratische orde, risico's in besturen, fraude, maatschappelijk ongenoegen.\nBlok 3: Corporate governance en macht. Stewardship & Corporate Governance, dilemma's in de boardroom, stakeholder management, macht-afhankelijkheidstheorie, democratische controle, verdiepte governance.",
    currentStudyLoad: "210 uur totaal (7,5 ECTS): 50 contacturen verspreid over 3 blokken, 160 uur lezen, voorbereiding, studeren en leeropdrachten.",
    newStudyLoad: "168 uur totaal (6 ECTS): 40,5 contacturen verspreid over 3 blokken, 127,5 uur zelfstudie en opdrachten.",
    newBlockScheduleFormat: "Dag 1 (8 uur): Ochtend 9:30-12:30 (3u), Lunch 12:30-13:30, Middag 13:30-17:00 (3,5u), Avond 17:30-19:00 (1,5u). Dag 2 (5,5 uur): Ochtend 9:30-12:30 (3u), Lunch 12:30-13:30, Middag 13:30-16:00 (2,5u). Diner 19:00-21:00.",
    keyTopics: [
      "Governance door de overheid (government)",
      "Corporate governance en governance codes",
      "Publiek-private samenwerking (PPS) en hybride governance",
      "Macht en verantwoording",
      "Behavioral and Cultural Governance",
      "Stakeholder management",
      "Checks & balances systemen",
      "Netwerksamenleving en maatschappelijke sturing",
      "Bestuurlijke sensitiviteit en individuele verantwoordelijkheid",
      "Dilemma's in de boardroom",
      "Stewardship en goed bestuur"
    ],
    language: "nl"
  },
  {
    slug: "markt-recht-en-ethiek",
    name: "Markt, Recht en Ethiek",
    nameShort: "MRE",
    program: "PP",
    ects: 7.5,
    newEcts: 6,
    contactHours: 50,
    newContactHours: 40.5,
    selfStudyHours: 160,
    newSelfStudyHours: 127.5,
    blocks: 3,
    currentAssessment: "Het eindcijfer wordt bepaald door de eindopdracht: een paper (individueel of duo) over een onderwerp naar keuze waarin alle drie de perspectieven (markt, recht en ethiek) aan bod komen. Individueel: 5000-10.000 woorden, duo: 6500-13.000 woorden. De paper moet worden afgesloten met een reflectie op persoonlijk leren en op de praktijk.",
    coordinator: "Kerndocent (niet nader gespecificeerd in outline)",
    currentLearningGoals: [
      "Begrijpen dat marketing, economie, recht en (bedrijfs)ethiek elk een eigen paradigma en methodologie vertegenwoordigen, met een geheel eigen perspectief op economie en organisatie.",
      "De onderlinge verhouding tussen markt, recht en ethiek kunnen duiden: wanneer versterken, aanvullen of betwisten deze coördinatiemechanismen elkaar.",
      "Institutioneel denken: complexe (zakelijke) vraagstukken analyseren vanuit een geïntegreerde benadering van drie perspectieven.",
      "Multidisciplinair denken: de verschillende wetenschappelijke methodologieën en redeneerwijzen hanteren en combineren.",
      "Theorie en praktijk verbinden: een concreet zakelijk vraagstuk analyseren vanuit de drie dimensies van markt, recht en ethiek, herkennen, analyseren en integreren tot een praktisch advies.",
      "Zowel verbaal als schriftelijk helder argumenteren en een logische argumentatiestructuur hanteren."
    ],
    courseDescription: "De module Markt, Recht en Ethiek behandelt de drie primaire instituties waarmee we ons handelen op elkaar afstemmen. Centraal staan de fundamentele vragen: hoe kunnen we vreedzaam samenleven en vruchtbaar samenwerken? De module zoemt in op coördinatieproblemen (samenleven) en coöperatieproblemen (samenwerken). Deelnemers krijgen denkgereedschappen uit de gereedschapskist van economen, juristen en filosofen. Het motto is: de oplossing is het probleem niet. De module bestaat uit interactieve colleges, leesopdrachten en een eindopdracht, met aandacht voor theoretische concepten, lessen uit de praktijk en vertaling naar de eigen werksituatie.",
    blockSchedule: "Blok 1: Introductie van de drie perspectieven (markt, recht, ethiek). Vertrouwen, coördinatie- en coöperatievraagstukken. De gereedschapskist van de econoom.\nBlok 2: Verdieping. Kopstukken uit de filosofie, ondernemingsrecht, marketing, maatschappelijk verantwoord ondernemen.\nBlok 3: Integratie. Managen van integriteit, new public management, participatiemaatschappij, economische crises. Cases uit de praktijk en eigen casuïstiek.",
    currentStudyLoad: "210 uur totaal (7,5 ECTS): 50 contacturen verspreid over 3 blokken, 160 uur lezen, voorbereiding, studeren en leeropdrachten.",
    newStudyLoad: "168 uur totaal (6 ECTS): 40,5 contacturen verspreid over 3 blokken, 127,5 uur zelfstudie en opdrachten.",
    newBlockScheduleFormat: "Dag 1 (8 uur): Ochtend 9:30-12:30 (3u), Lunch 12:30-13:30, Middag 13:30-17:00 (3,5u), Avond 17:30-19:00 (1,5u). Dag 2 (5,5 uur): Ochtend 9:30-12:30 (3u), Lunch 12:30-13:30, Middag 13:30-16:00 (2,5u). Diner 19:00-21:00.",
    keyTopics: [
      "Markt als coördinatiemechanisme (micro- en macro-economie)",
      "Recht als coördinatiemechanisme (ondernemingsrecht)",
      "Ethiek als coördinatiemechanisme (bedrijfsethiek, filosofie)",
      "Coördinatie- en coöperatieproblemen",
      "Vertrouwen in samenwerkingsrelaties",
      "Marketing en marktwerking",
      "Maatschappelijk verantwoord ondernemen (MVO/CSR)",
      "Integriteitsmanagement",
      "Publiek-private samenwerking",
      "Institutioneel en multidisciplinair denken",
      "Argumentatiestructuur en overtuigend schrijven"
    ],
    language: "nl"
  }
];
