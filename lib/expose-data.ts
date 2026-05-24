// Source-of-truth for all citations on /expose
// Every claim is sourced. Tags: FACT | ALLEGATION | UNVERIFIED

export type Tag = "FACT" | "ALLEGATION" | "UNVERIFIED";

export type Source = {
  id: string;
  title: string;
  url: string;
  outlet: string;
};

export const SOURCES: Record<string, Source> = {
  s1: { id: "s1", title: "Cockroach Janta Party — Wikipedia", url: "https://en.wikipedia.org/wiki/Cockroach_Janta_Party", outlet: "Wikipedia" },
  s2: { id: "s2", title: "Top judge comment sparks satire protest", url: "https://www.aljazeera.com/features/2026/5/20/cockroach-janata-party-top-indian-judges-comment-sparks-satire-protest", outlet: "Al Jazeera" },
  s3: { id: "s3", title: "Meet Abhijeet Dipke — former AAP social media worker", url: "https://www.businesstoday.in/india/story/meet-abhijeet-dipke-the-former-aap-social-media-worker-who-founded-cockroach-janta-party-532387-2026-05-20", outlet: "Business Today" },
  s4: { id: "s4", title: "CJP linked to AAP — Dipke past ties", url: "https://thefederal.com/category/news/cockroach-janta-party-linked-to-aap-founder-abhijeet-dipkes-past-ties-raise-questions-244076", outlet: "The Federal" },
  s5: { id: "s5", title: "Boston University Indian student CJP", url: "https://theprint.in/feature/boston-university-indian-student-cockroach-janta-party/2935156/", outlet: "ThePrint" },
  s6: { id: "s6", title: "Opposition rallies behind CJP", url: "https://www.tribuneindia.com/news/india/voice-of-frustrated-youth-opposition-rallies-behind-cockroach-janta-party/", outlet: "Tribune" },
  s7: { id: "s7", title: "3 trademark applications filed for CJP name", url: "https://www.tribuneindia.com/news/india/3-trademark-applications-filed-for-cockroach-janta-party-name/", outlet: "Tribune" },
  s8: { id: "s8", title: "Nishikant Dubey alleges CJP founder linked to AAP", url: "https://aninews.in/news/national/politics/will-you-take-help-from-foreign-powers-to-break-country-nishikant-dubey-alleges-cjp-founder-linked-to-aap20260522101407/", outlet: "ANI" },
  s9: { id: "s9", title: "Dubey alleges AAP-Soros link", url: "https://newsable.asianetnews.com/india/cockroach-janta-party-bjp-mp-alleges-aap-soros-link-to-trend-articleshow-g4eq7oi", outlet: "Asianet" },
  s10: { id: "s10", title: "Ashish Joshi quit citing AAP-affiliation concerns", url: "https://www.thehansindia.com/news/national/cockroach-janta-party-faces-questions-over-alleged-aap-links-after-ex-civil-servant-quits-1078196", outlet: "Hans India" },
  s11: { id: "s11", title: "CJP X account blocked under Section 69A", url: "https://www.india.com/news/india/cockroach-janta-party-x-account-blocked-india-over-alleged-security-concerns-by-intelligence-bureau-abhijeet-dipke-receives-death-threats-8423047/", outlet: "India.com" },
  s12: { id: "s12", title: "Why so scared — Dipke reacts to X ban", url: "https://www.thenewsminute.com/news/why-so-scared-cockroach-janta-partys-founder-reacts-to-x-account-ban", outlet: "NewsMinute" },
  s13: { id: "s13", title: "Who is Abhijeet Dipke", url: "https://www.storyboard18.com/trending/who-is-abhijeet-dipke-the-man-behind-cockroach-janta-partys-10-million-follower-surge-ws-l-98773.htm", outlet: "Storyboard18" },
  s14: { id: "s14", title: "Pakistan-followers fact-check", url: "https://www.oneindia.com/fact-check/does-cockroach-janata-party-have-most-instagram-followers-from-pakistan-than-india-8094801.html", outlet: "Oneindia" },
  s15: { id: "s15", title: "BOOM — CJI movement explainer", url: "https://www.boomlive.in/explainers/the-cockroach-janta-party-how-a-cji-comment-became-a-movement-31586", outlet: "BOOM" },
  s16: { id: "s16", title: "Celebrities following CJP", url: "https://www.wionews.com/photos/anurag-kashyap-uorfi-kunal-kamra-dia-mirza-list-of-celebrities-following-viral-cockroach-janta-party-on-instagram-1779359932459", outlet: "WION" },
  s17: { id: "s17", title: "CJP flagship site", url: "https://cockroachjantaparty.org/", outlet: "cockroachjantaparty.org" },
  s18: { id: "s18", title: "Look-alike CJP site (buzz)", url: "https://www.cockroachjantaparty.buzz/", outlet: "cockroachjantaparty.buzz" },
  s19: { id: "s19", title: "Anjali Bhardwaj — 3 manifesto add-ons", url: "https://x.com/AnjaliB_/status/2055938914830242084", outlet: "X / @AnjaliB_" },
  s20: { id: "s20", title: "Outlook — Moitra & Azad join CJP", url: "https://www.outlookindia.com/national/mahua-moitra-kirti-azad-join-cockroach-janta-party-after-cji-remarks-row", outlet: "Outlook" },
  s21: { id: "s21", title: "CJAR Working Committee", url: "https://www.cjar.org/working-committee/", outlet: "CJAR" },
  s22: { id: "s22", title: "Bhushan shares Rathee Pahalgam video", url: "https://x.com/pbhushan1/status/1916349794794275007", outlet: "X / @pbhushan1" },
  s23: { id: "s23", title: "Rathee — Article 370 support", url: "https://x.com/dhruv_rathee/status/1158272619948285952", outlet: "X / @dhruv_rathee" },
  s24: { id: "s24", title: "Rathee — Bhushan contempt solidarity", url: "https://x.com/dhruv_rathee/status/1294218666087788545", outlet: "X / @dhruv_rathee" },
  s25: { id: "s25", title: "2019 Votes Up — Rathee + Kamra + Banerjee", url: "https://deadant.co/votes-up-watch-election-results-live-on-youtube-kunal-kamra/", outlet: "DeadAnt" },
  s26: { id: "s26", title: "Bhushan — Manmohan Singh / AAP regret", url: "https://x.com/pbhushan1/status/2004396656415088911", outlet: "X / @pbhushan1" },
  s27: { id: "s27", title: "Dipke — 'Please note' post", url: "https://x.com/abhijeet_dipke/status/2057008518901711191", outlet: "X / @abhijeet_dipke" },
  s28: { id: "s28", title: "Rishi Bagree — 77% foreign followers claim", url: "https://x.com/rishibagree/status/2057415903449649175", outlet: "X / @rishibagree" },
  s29: { id: "s29", title: "Rahul Gandhi: 'vote chori is anti-national' — BMC indelible ink row", url: "https://www.dnaindia.com/india/report-what-is-indelible-ink-row-rahul-gandhi-accuses-eci-of-gaslighting-citizens-says-vote-chori-is-3197255", outlet: "DNA India" },
  s30: { id: "s30", title: "Rahul Gandhi criticises Indian institutions abroad, calls EC 'compromised'", url: "https://swarajyamag.com/news-brief/rahul-gandhi-criticises-indian-institutions-abroad-again-calls-election-commission-compromised-questions-voter-turnout", outlet: "Swarajyamag" },
  s31: { id: "s31", title: "CBI chargesheet names Sandip Ghosh as RG Kar prime accused (tender-rigging)", url: "https://www.business-standard.com/india-news/cbi-files-chargesheet-in-rg-kar-case-names-sandip-ghosh-as-prime-accused-124113000023_1.html", outlet: "Business Standard" },
  s32: { id: "s32", title: "Calcutta HC orders CBI-SIT probe into RG Kar evidence destruction", url: "https://aninews.in/news/national/general-news/calcutta-high-court-orders-sit-probe-into-alleged-evidence-destruction-in-rg-kar-case20260521174907/", outlet: "ANI" },
  s33: { id: "s33", title: "SC rejects WB plea, upholds cancellation of 25,753 SSC appointments", url: "https://lawtrend.in/supreme-court-rejects-west-bengal-govts-plea-on-teacher-recruitment-scam-upholds-cancellation-of-25753-appointments/", outlet: "Law Trend" },
  s34: { id: "s34", title: "Punjab's deepening drug crisis 2024-2025 — 782 confirmed overdose deaths", url: "https://punjaboutlook.com/punjabs-deepening-drug-crisis-2024-2025-satnam-singh-chahal/", outlet: "Punjab Outlook" },
  s35: { id: "s35", title: "Mahua Moitra cash-for-query row explained — Hiranandani admission", url: "https://www.wionews.com/india-news/explained-mahua-moitras-cash-for-query-row-how-tmc-mp-became-the-eye-of-the-storm-656879", outlet: "WION" },
  s36: { id: "s36", title: "CAG flags 342% surge in Kejriwal's 'Sheesh Mahal' renovation", url: "https://www.etvbharat.com/en/state/cag-flags-342-per-cent-surge-in-kejriwals-sheesh-mahal-renovation-enn26032401100", outlet: "ETV Bharat" },
  s38: { id: "s38", title: "Dipke X handle — public posts incl. Umar Khalid defence (29 Mar 26)", url: "https://x.com/abhijeet_dipke", outlet: "X / @abhijeet_dipke" },

  // ─── THREAT / HIJACK / FOREIGN-ACTOR SOURCES ────────────────
  s40: { id: "s40", title: "TraceX Labs cybersecurity advisory — fake CJP Android APK is RAT/spyware/banking trojan", url: "https://thefederal.com/category/news/tracex-labs-cockroach-janta-party-android-malware-security-advisory-244030", outlet: "The Federal · TraceX Labs" },
  s41: { id: "s41", title: "Fake Cockroach Janta Party Android App — malware warning", url: "https://udaipurtimes.com/technology/fake-cockroach-janta-party-android-app-malware-warning/cid18722038.htm", outlet: "Udaipur Times" },
  s42: { id: "s42", title: "CJP malware APK targets Android users via WhatsApp & Telegram", url: "https://www.sikkimexpress.com/news-details/cockroach-janta-party-malware-apk-targets-android-users-through-whatsapp-and-telegram", outlet: "Sikkim Express" },
  s43: { id: "s43", title: "CJP malware APK — Hindi advisory", url: "https://www.timesofmalwa.in/2026/05/cockroach-janta-party-malware-apk-android-users-warning-hindi-report.html", outlet: "Times of Malwa" },
  s46: { id: "s46", title: "CJP state-wise offshoots with AI-generated visuals — 50+ impersonator accounts", url: "https://theprint.in/feature/cockroach-janta-party-state-wise-offshoots-ai-visuals/2937838/", outlet: "ThePrint" },
  s47: { id: "s47", title: "Two trademark applications filed for CJP — squatters, not Dipke", url: "https://www.livelaw.in/news-updates/two-trademark-applications-filed-for-cockroach-janata-party-535162", outlet: "LiveLaw" },
  s48: { id: "s48", title: "Who is the real cockroach? — 3 trademark filings surface", url: "https://www.dnaindia.com/india/report-who-is-the-real-cockroach-cockroach-janta-party-moves-beyond-memes-as-3-trademark-filings-surface-3211126", outlet: "DNA" },
  s49: { id: "s49", title: "Mahesh Jethmalani — 'A political lab project by the deep state — a Trojan horse planted from US'", url: "https://sundayguardianlive.com/india/who-filed-trademark-for-cockroach-janta-party-viral-online-movement-face-new-legal-twist-194966/", outlet: "Sunday Guardian" },
  s50: { id: "s50", title: "Rishi Bagree — '77% Pakistan/Bangladesh/USA followers, 9% India' claim", url: "https://x.com/rishibagree/status/2057415903449649175", outlet: "X / @rishibagree" },
};

// ─── HOOK ────────────────────────────────────────────────
export const HOOK = {
  cjpClaim: "Umar Khalid is in jail since 5 years\nWITHOUT TRIAL. Why is he being\ntreated differently?",
  cjpClaimSource: "s38",
  question: "Leaderless. Satirical.\nSponsored by no one.",
  context: "Same handle. Same founder. Posts in solidarity on Kashmir. Defends a UAPA-accused for the Delhi-riots conspiracy — the same rallies where 'Bharat tere tukde honge' was openly chanted. And on the record, expects to be arrested the day he lands back in India. From a U.S. campus. Welcome to the 'satirical youth movement.'",
  // 3 distinct destinations: Dipke's specific "Please note" tweet (his own
  // words on arrest fears) · ThePrint on the Boston University angle ·
  // The Federal on the AAP-link founder background. No duplicate Twitter
  // redirects.
  contextSources: ["s27", "s5", "s4"],
};

// ─── ACT I — THE FOUNDER ─────────────────────────────────
export const ACT_FOUNDER = {
  eyebrow: "Act I",
  title: "The founder is not a stranger.",
  resume: [
    {
      period: "Oct 2019 – Apr 2021",
      role: "Communications Fellow",
      org: "Delhi CMO",
      under: "Manish Sisodia (AAP, then Dy. CM)",
      tag: "FACT" as Tag,
      sources: ["s3", "s4"],
    },
    {
      period: "Jun 2021 – May 2024",
      role: "Communications Advisor",
      org: "Delhi Education Department",
      under: "Atishi (AAP, then Education Minister)",
      tag: "FACT" as Tag,
      sources: ["s3", "s4"],
    },
    {
      period: "May 2024",
      role: "Departure tweet to Sisodia",
      org: "Leaving for Boston",
      under: "Direct quote, his own handle",
      tag: "FACT" as Tag,
      sources: ["s4"],
    },
    {
      period: "16 May 2026",
      role: "Founder",
      org: "Cockroach Janta Party",
      under: "Claims no party affiliation",
      tag: "FACT" as Tag,
      sources: ["s1", "s3"],
    },
  ],
  pullQuote: {
    text: "Leaving for Boston with your guidance as my compass. No distance will ever weaken my commitment to AAP.",
    attribution: "Abhijeet Dipke, to @msisodia",
    date: "May 2024",
    sources: ["s4"],
  },
  verdict: "A six-year AAP communications staffer founded an 'independent' party 12 days ago.",
};

// ─── ACT II — THE MANIFESTO ──────────────────────────────
export const ACT_MANIFESTO = {
  eyebrow: "Act II",
  title: "The manifesto only points one way.",
  demands: [
    {
      n: 1,
      text: "Ban Rajya Sabha seats for retired Chief Justices.",
      partisan: "Targets the judiciary — institutional figure opposition routinely portrays as ruling-dispensation-friendly. Aimed at CJI's post-retirement appointments under the current government.",
      flagged: true,
    },
    {
      n: 2,
      text: "Classify deleted legitimate votes as terrorism (UAPA charges for the CEC).",
      partisan: "Demands UAPA charges against the Chief Election Commissioner — appointed under the Modi government. UAPA itself is a Modi-era anti-terror law repurposed here against an NDA-appointed institutional head.",
      flagged: true,
    },
    {
      n: 3,
      text: "Increase women's reservation to 50% without expanding Parliament; 50% Cabinet positions for women.",
      partisan: "Implicit critique of BJP's Women's Reservation Act 2023 (Nari Shakti Vandan Adhiniyam) — passed at 33%, delayed in implementation until post-delimitation. The 50% demand is framed as the gap between BJP's promise and delivery — not a neutral policy ask.",
      flagged: true,
    },
    {
      n: 4,
      text: "All media houses owned by the Adani Group and Reliance Industries ('Ambani') shall have their licences cancelled. Bank accounts of 'Godi media anchors' shall be investigated.",
      partisan: "Names only Adani and Ambani — two business houses universally identified as Modi-aligned. 'Godi media' is a coinage by Ravish Kumar specifically aimed at pro-BJP broadcasters. Zero mention of any opposition-aligned media or business interests.",
      flagged: true,
    },
    {
      n: 5,
      text: "Bar defecting politicians for 20 years.",
      partisan: "Defection structurally hurts all parties — but in current discourse this clause is most invoked against BJP-engineered defections (Maharashtra 2022, Goa 2022, Madhya Pradesh 2020). Not invoked against Congress-era defections or AAP-Punjab MLAs.",
      flagged: true,
    },
  ],
  sources: ["s1", "s2", "s6"],

  // The PM CARES tell — anti-NDA reference smuggled into the homepage copy
  pmCares: {
    quote: "We are not here to set up another PM CARES, holiday in Davos on the taxpayer's salary slip, or rebrand corruption as 'strategic spending.'",
    source: "cockroachjanata.org",
    decode: "PM CARES is the Modi-government-controlled fund created in March 2020 (exempted from RTI, audited only by a CAG-empanelled — not appointed — auditor). 'Davos on the taxpayer's salary slip' is the standard opposition framing of Modi's foreign visits. The line presents itself as anti-corruption, but every example is anti-NDA.",
    tag: "FACT" as Tag,
    sources: ["s1", "s2"],
  },

  // Documented social media targeting
  socialMedia: {
    title: "Their own X handle, by their own coverage.",
    items: [
      {
        outlet: "The News Minute",
        quote: "Targets are the BJP, Prime Minister Modi, 'godi media,' and corporate influence.",
        sources: ["s12"],
      },
      {
        outlet: "India.com",
        quote: "Known for sharp anti-establishment commentary and criticism of the BJP-led Union government.",
        sources: ["s11"],
      },
    ],
    footnote: "No outlet has identified a single CJP post critical of Congress, AAP, TMC, SP, RJD, DMK, or CPI(M). The asymmetry itself is the evidence. (Caveat: X account withheld 21 May under Section 69A — post-by-post audit now obstructed.)",
  },

  // Dipke's documented anti-Modi posts on his personal handle
  founderPosts: {
    title: "The founder's own handle. His own words.",
    items: [
      {
        date: "June 2024",
        quote: "'Remote Controlled PM' Modi came to power by denouncing Manmohan Singh as a 'remote controlled PM'; ten years later, he meets the same fate.",
        sources: ["s4"],
      },
      {
        date: "Modi-degree thread",
        quote: "In 1976, Modi's marks are computer generated while the marks of other students are hand written, and Modi's marksheets show University of Delhi written in a Gothic font — i.e., on-record questioning the PM's degree credentials.",
        sources: ["s4"],
      },
    ],
    bizToday: {
      quote: "Creating memes, satirical videos, and online campaigns promoting Kejriwal while targeting opposition parties.",
      decode: "BusinessToday's own characterization of Dipke's professional history. By his own resume — an anti-BJP digital operator.",
      sources: ["s3"],
    },
    silence: "No reported Dipke posts critical of Kejriwal, Rahul Gandhi, Akhilesh Yadav, Mamata Banerjee, or any opposition leader have surfaced in any outlet, ever.",
  },

  // What this manifesto and movement have NEVER criticized — the silence is the tell
  neverCriticized: {
    title: "What this 'anti-corruption youth movement' has never once said.",
    intro: "If this were really about civic hygiene and accountability, where are the receipts on these?",
    items: [
      {
        topic: "AAP's Punjab: 782 youth dead of drugs in 16 months",
        detail: "Punjab Health Dept logged 782 confirmed overdose deaths (Jan 2024 – Apr 2025) under AAP's Bhagwant Mann; PGIMER estimates real toll is 2–3× higher; teen first-time drug use up 23%. A movement claiming to speak for 'unemployed Gen Z' — silent on an opposition CM letting Gen Z die. Zero CJP posts.",
        sources: ["s34"],
      },
      {
        topic: "Rahul Gandhi smears India's elections from foreign soil",
        detail: "Boston speech (April 2025) doubted Maharashtra voter turnout; Berlin Progressive Alliance speech (Dec 2025) attacked Indian institutions; BMC indelible-ink row (Jan 2026) — 'vote chori is an anti-national act'; ECI sought sworn affidavit, he refused. Leader of Opposition discrediting India's election machinery abroad. Zero CJP posts.",
        sources: ["s29", "s30"],
      },
      {
        topic: "TMC shielded RG Kar's tender-rigging principal — at the rape site",
        detail: "Mamata-protected ex-principal Sandip Ghosh — same hospital where the trainee doctor was raped and murdered (Aug 2024) — chargesheeted by CBI (Nov 2025) for a 3-year tender-rigging racket; Calcutta HC ordered CBI-SIT probe into evidence destruction (May 2026); Bengal govt stalled ED prosecution sanction till AFTER 2026 election loss. Zero CJP posts.",
        sources: ["s31", "s32"],
      },
      {
        topic: "TMC sold 25,753 govt teacher jobs — Supreme Court voided them all",
        detail: "TMC minister Partha Chatterjee arrested 2022 — tens of crores in cash recovered from associate; Supreme Court (April 2025) upheld Calcutta HC's cancellation of all 25,753 teaching appointments after finding OMR sheets tampered and 'rank-jumping'. Direct youth-unemployment scandal that CJP claims to fight. Zero CJP posts.",
        sources: ["s33"],
      },
      {
        topic: "TMC MP Mahua Moitra sold her parliament login for luxury gifts",
        detail: "Expelled from Lok Sabha (Dec 2023) after businessman Hiranandani admitted gifting her luxury items, paying for her bungalow renovation, and posting Adani-targeting questions via her parliament login. Re-elected 2024. The SAME Moitra publicly endorsed CJP as 'cockroaches against tyranny'. Zero CJP posts on her.",
        sources: ["s35", "s20"],
      },
      {
        topic: "Kejriwal spent Rs 33.66 cr on his own 'Sheesh Mahal' bungalow",
        detail: "CAG report: Rs 33.66 crore renovation of Kejriwal's 6 Flagstaff Road CM residence — 342% cost surge over original estimate, Rs 18.88 cr on interiors alone, fund diversion and missing approvals flagged. Direct contradiction of the 'aam aadmi' brand Dipke himself once promoted as AAP's social-media worker. Zero CJP posts.",
        sources: ["s36"],
      },
    ],
    closer: "A movement that frames itself as the voice of frustrated, exhausted citizens — but whose criticism vocabulary contains exactly one target: the BJP. That is not satire. That is alignment.",
  },
};

// ─── ACT III — THE ENDORSEMENTS ──────────────────────────
export const ACT_ENDORSEMENTS = {
  eyebrow: "Act III",
  title: "Count the rows.",
  opposition: [
    { name: "Mahua Moitra", party: "TMC MP", quote: "Let all cockroaches unite against this latest show of tyranny", sources: ["s6", "s20"] },
    { name: "Kirti Azad", party: "TMC MP", quote: "I would like to join the cockroach janta party. What are the qualifications required?", sources: ["s6", "s20"] },
    { name: "Shashi Tharoor", party: "Congress MP", quote: "Account ban disastrous and deeply unwise.", sources: ["s6"] },
    { name: "Umang Singhar", party: "Congress (MP, state)", quote: "The voice of a generation exhausted by unemployment…", sources: ["s6"] },
    { name: "Manish Sisodia", party: "AAP", quote: "When it's a war between the crocodile and the cockroaches, I proudly stand with the Cockroach Janata Party.", sources: ["s4"] },
    { name: "Harpal S. Cheema", party: "AAP, Punjab FM", quote: "Defended political expression right.", sources: ["s6"] },
    { name: "Kuldeep Dhaliwal", party: "AAP, Punjab", quote: "I stand completely with them.", sources: ["s6"] },
    { name: "Priyanka Chaturvedi", party: "Shiv Sena (UBT)", quote: "Noted opposition's Gen-Z gap.", sources: ["s6"] },
    { name: "Bikram Majithia", party: "SAD", quote: "Dismissing Gen Z was a mistake.", sources: ["s6"] },
    { name: "Akhilesh Yadav", party: "SP", quote: "BJP banam CJP. BJP versus CJP.", sources: ["s6"] },
    { name: "Prashant Bhushan", party: "Activist-lawyer (ex-AAP)", quote: "CJI's remarks reflect 'deep-rooted prejudice'.", sources: ["s2"] },
    { name: "Anjali Bhardwaj", party: "RTI activist", quote: "Suggested 3 manifesto add-ons — accepted by CJP.", sources: ["s19"] },
    { name: "Ashish Joshi", party: "Ret. IAS — joined, then QUIT", quote: "Quit citing AAP-affiliation concerns. No response after 24 hours.", sources: ["s10"] },
  ],
  ndaCount: 0,
  hostile: {
    name: "Nishikant Dubey",
    party: "BJP MP",
    quote: "Is the Soros Foundation covering the expenses for his stay and food? Will you take help from foreign powers to break the country?",
    tag: "ALLEGATION" as Tag,
    note: "No evidence produced. No Soros / OSF / NED / Ford transfer document, no bank trail.",
    sources: ["s8", "s9"],
  },
  verdict: "13 opposition figures. 0 NDA endorsers. 1 hostile BJP allegation with no evidence.",
};

// ─── ACT IV — THE ECOSYSTEM (NETWORK) ────────────────────
export type NetNode = {
  id: string;
  label: string;
  cluster: "founder" | "aap" | "swaraj" | "transparency" | "youtube" | "satire";
  x: number; // 0-100
  y: number; // 0-100
  note?: string;
};
export type NetEdge = {
  from: string;
  to: string;
  label?: string;
  kind: "solid" | "dashed";
  sources: string[];
};

export const ACT_ECOSYSTEM = {
  eyebrow: "Act IV",
  title: "The web is wider than it looks.",
  nodes: [
    { id: "dipke",   label: "Abhijeet Dipke",     cluster: "founder",      x: 50, y: 50, note: "CJP founder · ex-AAP" },
    { id: "bhushan", label: "Prashant Bhushan",   cluster: "swaraj",       x: 38, y: 12, note: "Swaraj Abhiyan President · ex-AAP (expelled 2015)" },
    { id: "yadav",   label: "Yogendra Yadav",     cluster: "swaraj",       x: 62, y: 12, note: "Swaraj India President" },
    { id: "sisodia", label: "Manish Sisodia",     cluster: "aap",          x: 20, y: 25 },
    { id: "atishi",  label: "Atishi",             cluster: "aap",          x: 12, y: 50 },
    { id: "ankit",   label: "Ankit Lal",          cluster: "aap",          x: 20, y: 75 },
    { id: "anjali",  label: "Anjali Bhardwaj",    cluster: "transparency", x: 80, y: 25, note: "NCPRI · CJAR · Common Cause" },
    { id: "dey",     label: "Nikhil Dey",         cluster: "transparency", x: 88, y: 50, note: "MKSS · NCPRI · CJAR" },
    { id: "mudgal",  label: "Vipul Mudgal",       cluster: "transparency", x: 80, y: 75, note: "Common Cause CEO" },
    { id: "moitra",  label: "Mahua Moitra",       cluster: "satire",       x: 12, y: 90, note: "TMC" },
    { id: "banerjee",label: "Akash Banerjee",     cluster: "youtube",      x: 32, y: 90 },
    { id: "rathee",  label: "Dhruv Rathee",       cluster: "youtube",      x: 50, y: 92, note: "YouTube · Germany" },
    { id: "kamra",   label: "Kunal Kamra",        cluster: "satire",       x: 68, y: 90 },
    { id: "meghnad", label: "Meghnad S",          cluster: "satire",       x: 88, y: 90 },
  ] as NetNode[],
  edges: [
    // Dipke direct
    { from: "dipke", to: "sisodia", label: "Comms Fellow 2019–21 + 'commitment to AAP' tweet", kind: "solid", sources: ["s3", "s4"] },
    { from: "dipke", to: "atishi",  label: "Comms Advisor 2021–24",                            kind: "solid", sources: ["s3", "s4"] },
    { from: "dipke", to: "ankit",   label: "AAP IT-cell under Ankit Lal",                      kind: "solid", sources: ["s3"] },

    // Swaraj cluster (note: rivals of AAP — drawn dashed to mark distinction)
    { from: "bhushan", to: "yadav",  label: "Swaraj Abhiyan co-founders, Apr 2015",            kind: "solid", sources: ["s21"] },
    { from: "bhushan", to: "anjali", label: "CJAR / Common Cause / NCPRI overlap",             kind: "solid", sources: ["s21"] },
    { from: "bhushan", to: "dey",    label: "CJAR Working Committee",                          kind: "solid", sources: ["s21"] },
    { from: "anjali",  to: "mudgal", label: "Common Cause Governing Council",                  kind: "solid", sources: ["s21"] },
    { from: "anjali",  to: "dey",    label: "NCPRI co-convenors",                              kind: "solid", sources: ["s21"] },

    // YouTube cluster mutual amplification
    { from: "rathee", to: "banerjee", label: "2019 Votes Up + 2024 election cycle",            kind: "solid", sources: ["s25"] },
    { from: "rathee", to: "kamra",    label: "2019 Votes Up joint stream",                     kind: "solid", sources: ["s25"] },
    { from: "rathee", to: "bhushan",  label: "Bidirectional: 2020 contempt solidarity + 2025 Pahalgam share", kind: "solid", sources: ["s22", "s24"] },

    // CJP endorsement edges (dashed = recent convergence on CJP)
    { from: "dipke", to: "rathee",   label: "Rathee YouTube Short — 'soon join the collective'", kind: "dashed", sources: ["s2"] },
    { from: "dipke", to: "bhushan",  label: "Bhushan endorses CJP (Al Jazeera, 20 May 2026)",  kind: "dashed", sources: ["s2"] },
    { from: "dipke", to: "moitra",   label: "Moitra: 'I too would like to join'",              kind: "dashed", sources: ["s20"] },
    { from: "dipke", to: "anjali",   label: "Anjali: 3 manifesto add-ons accepted",            kind: "dashed", sources: ["s19"] },
    { from: "dipke", to: "meghnad",  label: "Meghnad hosts Dipke on livestream",               kind: "dashed", sources: ["s2"] },
    { from: "dipke", to: "banerjee", label: "Deshbhakt long-form CJP video",                   kind: "dashed", sources: ["s2"] },
    { from: "dipke", to: "kamra",    label: "Kamra follows / supports",                        kind: "dashed", sources: ["s16"] },
  ] as NetEdge[],
  honesty: {
    eyebrow: "★ The verdict",
    title: "This isn't a youth movement. It's a political payload.",
    points: [
      "Every named node has a documented anti-BJP / anti-establishment track record stretching back a decade. Not one has criticised an opposition party, leader, or opposition-ruled state.",
      "Youth unemployment (Bengal SSC — 25,753 jobs voided), drug deaths (Punjab — 782 under AAP), paper leaks, women's safety (Sandeshkhali, RG Kar) — opposition-state failures the same nodes IGNORE while amplifying every BJP attack.",
      "The 'Gen-Z exhausted by unemployment' wrapper is new. The payload — anti-Modi narrative, attacks on the ECI / CJI / armed forces / 'Godi media' — is the same dossier this cluster has been running since 2014.",
      "The broadcast runs from outside India — by design. Dipke commands CJP day-to-day from Boston University (USA). Dhruv Rathee publishes to tens of millions of Indian viewers from Germany. Rahul Gandhi reserves his sharpest allegations against the ECI, voter rolls and Indian institutions for foreign venues — Cambridge (2023), Berkeley, Boston (April 2025), Berlin (Dec 2025). Indian audience, foreign soapbox, no Indian legal or journalistic accountability.",
      "They aren't fighting FOR youth. They are USING youth-coded language to repackage a decade-old political project — and Dipke, an AAP communications operator until May 2024, is its current frontman.",
    ],
    closer: "Youth-coded costume. Foreign-soil broadcast. Anti-India payload.",
  },
};

// ─── ACT V — THE MONEY + DATA ────────────────────────────
export const ACT_MONEY = {
  eyebrow: "Act V",
  title: "Five domains. Zero disclosure. 3.5 lakh sign-ups.",
  domains: [
    { url: "cockroachjantaparty.org", donation: "None visible; 'Sponsored by no one'",            disclaimer: "Dipke flagship", official: true },
    { url: "cockroachjanata.org",     donation: "'OFFICIAL WEBSITE' branding",                    disclaimer: "—",              official: false },
    { url: "officialcjp.com",         donation: "QR donation UPI / GPay / PhonePe / Paytm; ₹50–₹5,000", disclaimer: "Calls itself 'satirical, not a registered party'", official: false },
    { url: "cockroachjantaparty.buzz",donation: "UPI cjparty@ybl · Razorpay · ₹499/₹799 merch",  disclaimer: "Explicitly disclaims affiliation with Dipke",       official: false },
    { url: "cockroachjanataparty.app",donation: "register.php · merch · Razorpay",               disclaimer: "Calls itself official",                              official: false },
  ],
  registration: {
    eci: "Not registered with the Election Commission of India.",
    mca: "No registered entity surfaced under 'Cockroach Janta Party'.",
    trademark: "3 speculative trademark applications — none linked to Dipke in reporting.",
    sources: ["s1", "s7"],
  },
  data: {
    fields: ["Name", "Email", "City", "State", "Age"],
    signups: "3,50,000+",
    storage: "Google Forms backend → data on Google's US servers",
    privacy: "No privacy policy published on any of the four live CJP-branded sites.",
    dpdp: "Indian citizens' data, by an entity not registered in India, run by a founder physically in the US. DPDP Act 2023 cross-border-transfer obligations would normally apply.",
    sources: ["s1", "s2", "s11"],
  },
  structural: {
    rule: "Section 29A RPA 1951 + ECI Symbols Order 1968",
    consequence: "An unregistered movement collecting money via UPI faces zero statutory disclosure obligation.",
  },
  bostonGap: {
    question: "Who funds Dipke's US stay?",
    fact: "No outlet has reported who pays his Boston University fees, accommodation, or living expenses. His parents told The Week they don't want him in politics; didn't address funding. No published scholarship, sponsorship, or family declaration.",
    caveat: "Absence of disclosure is not evidence of foreign funding.",
    sources: ["s3", "s5", "s13"],
  },
};

// ─── ACT V.5 — THE HIJACK (THREAT EXPLAINER) ─────────────
export const ACT_THREAT = {
  eyebrow: "Act V · continued",
  title: "Your data, your money, your phone — and the Pakistani threat actors running this ecosystem.",
  titleSources: ["s11"],
  intro: "CJP did not register. Did not publish a privacy policy. Did not build any anti-impersonation infrastructure. Did not file a single FIR. The result: 50+ fake accounts, 9+ donation-ready look-alike domains, a malware APK, and a documented Pakistani-threat-actor footprint on the ecosystem — all of it bred in this regulatory vacuum. Anyone signing up, donating, or installing a 'CJP app' here — their data, their money, their phone — can end up in anyone's hands. And in 6 days, CJP has done nothing about it.",

  // 1. MALWARE — the documented, CRITICAL, sourced threat
  malware: {
    label: "Threat 1 · A banking trojan wearing CJP's label",
    severity: "CRITICAL",
    tag: "FACT" as Tag,
    headline: "A fake 'Cockroach Janta Party' Android APK is circulating on WhatsApp and Telegram. It is a Remote Access Trojan.",
    body: "TraceX Labs' cybersecurity advisory has rated it CRITICAL severity. The APK uses CJP's branding — people are installing it thinking it is the 'official party app'. The moment it installs, it sits on the phone, runs in the background, and lifts everything that passes through.",
    capabilities: [
      "Intercepts every SMS and banking OTP (banking-trojan capability)",
      "Lifts every contact, call history, photo, and file",
      "Runs background surveillance — microphone, camera, and location access",
      "Spreads via WhatsApp and Telegram — peer-to-peer distribution",
    ],
    cjpFault: "CJP has not issued a single public warning to date saying 'an APK using our name is fake — do not install it.' No cyber-cell FIR. No tweet. No pop-up on their 'official' site. Imagine if party branding were regulated — you would not find a 'BJP-app.apk' or 'Congress.apk' floating around Twitter/Telegram this easily. CJP's unregistered status is exactly what created this environment.",
    sources: ["s40", "s41", "s42", "s43"],
  },

  // 2. IMPERSONATOR ARMY — the donation hijack
  impersonators: {
    label: "Threat 2 · 50+ fake handles and 9 donation-ready domains",
    tag: "FACT" as Tag,
    headline: "The handle you're donating ₹500 to may not even be the founder's account.",
    body: "ThePrint has documented 50+ impersonator social-media accounts — state-wise 'offshoots' with AI-generated visuals, follower counts ranging from 467 to 7 lakh. On top of that: 9+ look-alike domains, several taking donations from ₹50 to ₹5,000 via UPI handles and Razorpay accounts. One site (cockroachjantaparty.buzz) openly writes that it has 'no affiliation with Dipke' — and still collects money. And Dipke has yet to publish which UPI handles are actually his and which are fake.",
    inventory: [
      { count: "50+", what: "impersonator accounts (Instagram, X, state-wise pages — AI-generated content)", sources: ["s46"] },
      { count: "9+", what: "look-alike domains with UPI / Razorpay / merch donation flows", sources: ["s1", "s2"] },
      { count: "3", what: "speculative trademark applications — none by Dipke; squatters laying claim", sources: ["s7", "s47", "s48"] },
      { count: "₹50–₹5,000", what: "donation range across QR / UPI / Razorpay endpoints — zero statutory recourse", sources: ["s1", "s2"] },
      { count: "ZERO", what: "FIRs filed by CJP itself, zero ECI registration, zero trademark protection, zero takedown notices reported", sources: ["s1", "s7"] },
    ],
    cjpFault: "Had they registered under Section 29A RPA 1951, the ECI would have had a formal donor-disclosure obligation, there would be an official symbol, and criminal action against impersonators would be on the table. CJP has avoided all of this by design. The result: if a donor walks into a police station tomorrow saying 'I gave ₹2,000 and the money vanished' — there is no basis to register an FIR, and no path to recovery. The victim here is an Indian citizen. The fault is CJP's opacity.",
    sources: ["s1", "s46", "s47", "s48"],
  },

};

// ─── KICKER ──────────────────────────────────────────────
export const KICKER = {
  line1: "The receipts are documented.",
  line2: "The questions are public.",
  line3: "The kitchen is yours to clean.",
};
