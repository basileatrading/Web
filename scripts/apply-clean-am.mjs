import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const amPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "../src/i18n/locales/am.ts"
);

let s = readFileSync(amPath, "utf8");

/** @type {[string, string][]} */
const rules = [
  // home.commitment — corrupted Arabic/Spanish fragments
  [
    '"በመላክ ጊዜ  مستقل የጥራት ማረጋገጫ"',
    '"በመላክ ጊዜ ነጻ የጥራት ማረጋገጫ"',
  ],
  [
    '"የፋርማሲ እና የግንባታ መሳሪያዎች የተሞላበት ዘመናዊ የስ  distribución መጋዘን"',
    '"የፋርማሲ እና የግንባታ መሳሪያዎች የተሞላበት ዘመናዊ መጋዘን"',
  ],

  // about.hero.body
  [
    "Basilea Trading was founded on a simple principle: serious sectors deserve serious suppliers. We bring the same operational discipline to a pallet of medicine as we do to a truckload of building materials.",
    "ባሲሊያ ትሬዲንግ በ«ሳላሳ የሆኑ ዘርፎች ተስማሚ አቅራቢዎችን ይጠብቃሉ» የሚለው ቀላል መርሆ ተመሠሯ ነው። በመድሃኒት ፓሌት እንደምንቀልጥ ሁሉ፣ በግንባታ መሳሪያዎች ትራክ ጭን ውስጥም ተመሳሳይ የስራ ትኩረት እንሰጣለን።",
  ],

  // about.mission.body
  [
    "We exist to make the supply of critical goods predictable, traceable, and accountable. Our partners count on us not because we promise the most, but because we document everything we deliver.",
    "ዓላማችን ወሳኝ ዕቃዎች አቅርቦት ትጥብታል፣ መከታተል የሚችል እና ተገዢነት የሚያሳይ እንዲሆን ነው። አጋሮች ብዙ ስላልና በሚያቀርብን ነገር ሁሉ ስላለ ሰነድ ይታመኑናል።",
  ],

  // about.principles
  [
    "Regulatory standards drive every sourcing decision — not the other way around.",
    "የሕግ መመዘኛዎች እያንዳንዱ የምንጭ ውሳኔ ይመራሉ — በተቃራኒው አይደለም።",
  ],
  [
    "Every batch, lot, and shipment is inspected, recorded, and traceable.",
    "እያንዳንዱ batch፣ lot እና ስርጭት ይጣራል፣ ይመዘገባል እና መከታተል ይቻላል።",
  ],
  [
    "We partner only with approved international manufacturers with verified credentials.",
    "የተፈቀዱ እና ምስክር ወረቀታቸው የተረጋገጠ ዓለም አቀፍ አምራችዎች ብቻ ነው የምንተባበራቸው።",
  ],
  [
    "We measure success in renewed agreements, not single transactions.",
    "ሥኬት በድጋሚ የሚደረደሩ ስምምነቶች ይሄላል፣ በነጸብራቅ ግብይት አይደለም።",
  ],

  // about.blocks[0]
  [
    "We work only with approved manufacturers. Products are received, inspected, and stored under regulated conditions, then dispatched through validated logistics with full batch traceability — so pharmacies, clinics, and healthcare facilities receive exactly what they ordered, intact.",
    "የተፈቀዱ አምራች ብቻ ነው የምንሰራባቸው። ምርቶች ይቀበላሉ፣ ይጣራሉ፣ በተቆጣጠረ ሁኔታ ይከማቻሉ፣ ከዚያም በሙሉ batch መከታተል የሚያገለግል የተረጋገጠ ሎጂስቲክስ ይላካሉ — ፋርማሲዎች፣ ክሊኒኮች እና የጤና ተቋማት የወደዷቸውን እንክንል ይቀበላሉ።",
  ],
  ['"Approved manufacturers only"', '"የተፈቀዱ አምራች ብቻ"'],
  ['"Validated cold-chain logistics"', '"የተረጋገጠ የቀዝቃዛ ሰሌዳ ሎጂስቲክስ"'],
  ['"Full batch & lot traceability"', '"ሙሉ batch እና lot መከታተል"'],

  // about.blocks[1] — fix corrupted title + body + points
  [
    'title: "በመመዘኛ የተሰሩ መሳሪያዎች፣ በሰፊው ይደርሳ\uFFFDል።"',
    'title: "በመመዘኛ የተሰሩ መሳሪያዎች፣ በሰፊው ይደርሳሉ።"',
  ],
  [
    "From cement and steel to finishing materials, our construction division sources for performance and consistency. Contractors, developers, and infrastructure projects depend on materials that meet specification and arrive on schedule — and that is the standard we hold.",
    "ከሲሚንት እና ብረት እስከ ጨረሮች ድረስ፣ የግንባታ ክፍላችን አፈጻጸም እና ወጥነት ለማሳካት ይመርምራል። ግንባቸኞች፣ አበልጫዮች እና የመሠረተ ልማት ፕሮጀክቶች መመዘኛ የሚያሟላ እና በጊዜ የሚደርስ መሳሪያ ይፈልጋሉ — ይህም የእኛ መመዘኛ ነው።",
  ],
  ['"Specification-matched sourcing"', '"ከመመዘኛ ጋር የሚዛመድ ምንጭ"'],
  ['"Bulk supply for major projects"', '"ለትላልቅ ፕሮጀክቶች የጅምላ አቅርቦት"'],
  ['"Scheduled, accountable delivery"', '"በጊዜ የሚደርስ እና ተገዢ አቅርቦት"'],

  // about.blocks[2]
  ['eyebrow: "Our Promise"', 'eyebrow: "የእኛ ቃል ኪዳን"'],
  [
    "Every Basilea Trading shipment carries a chain of verification behind it. If something is not right, we trace it, fix it, and learn from it. That is what it means to build long-term partnerships in regulated, high-stakes sectors.",
    "እያንዳንዱ የባሲሊያ ትሬዲንግ ስርጭት የማረጋገጫ ሰንሰለት ይዘዋል። ነገር ትክክል ካልሆነ እንከታተለው፣ እንስተካከለው እና እንማራለን። በተቆጣጠሩ እና ከፍተኛ ደረጃ ዘርፎች ውስጥ የረዥም ጊዜ አጋርነት መገንባት ይህን ማለት ነው።",
  ],

  // about.cta
  [
    "Considering Basilea for a supply agreement?",
    "ለአቅርቦት ስምምነት ባሲሊያን እያሰቡ ነው?",
  ],
  [
    "We will walk you through our sourcing standards, certifications, and fulfilment process before any commitment.",
    "ከቁርጠኝነት በፊት የምንጭ መመዘኛዎቻችንን፣ የምስክር ወረቀቶችን እና የማሟላት ሂደታችንን እናሳያለን።",
  ],

  // projects.meta
  [
    "Explore Basilea Trading's pharmaceutical distribution, construction materials supply, and partnership programs.",
    "የባሲሊያ ትሬዲንግ የፋርማሲ ስርጭት፣ የግንባታ መሳሪያዎች አቅርቦት እና የአጋርነት ፕሮግራሞችን ይመልከቱ።",
  ],
  [
    "Pharmaceutical distribution, construction materials supply, and strategic partnerships at Basilea Trading.",
    "የፋርማሲ ስርጭት፣ የግንባታ መሳሪያዎች አቅርቦት እና ስትራቴጂያዊ አጋርነት በባሲሊያ ትሬዲንግ።",
  ],

  // projects.hero
  [
    "What we supply, and who relies on us.",
    "ምን እንሰጣለን፣ እና ማን ይመካናል።",
  ],
  [
    "Two specialized divisions, one shared standard of operational discipline. Here is how each one serves its sector.",
    "ሁለት ልዩ ክፍሎች፣ አንድ የተጋራ የስራ ትኩረት መመዘኛ። እያንዳንዱ ክፍል ዘርፉን እንዴት እንደሚያገለግል ይከተሉ።",
  ],

  // projects.divisions[0]
  ['eyebrow: "Division 01"', 'eyebrow: "ክፍል 01"'],
  ['title: "Pharmaceutical Distribution"', 'title: "የፋርማሲ ስርጭት"'],
  [
    "Certified medicines and medical supplies serving pharmacies, clinics, and healthcare facilities. We source only from approved manufacturers and maintain documented chain-of-custody from intake to delivery.",
    "ለፋርማሲዎች፣ ክሊኒኮች እና የጤና ተቋማት የተረጋገጡ መድሃኒቶች እና የጤና መገልገያዎች። የተፈቀዱ አምራች ብቻ ነው የምንገኝባቸው፣ ከመቀበል እስከ አቅርቦት ድረስ የተመዘገበ የባለቤትነት ሰንሰለት እንጠብቃለን።",
  ],
  ['"Prescription and OTC medicines"', '"የህክምና ትእዛዝ እና ከትእዛዝ ውጭ መድሃኒቶች"'],
  ['"Medical consumables and devices"', '"የጤና ፍጆታዎች እና መሳሪያዎች"'],
  ['"Cold-chain capable logistics"', '"የቀዝቃዛ ሰሌዳ ሎጂስቲክስ"'],
  ['"Batch and lot traceability"', '"batch እና lot መከታተል"'],
  [
    '"Regulatory documentation on every shipment"',
    '"በእያንዳንዱ ስርጭት የሕግ ሰነድ"',
  ],

  // projects.divisions[1]
  ['eyebrow: "Division 02"', 'eyebrow: "ክፍል 02"'],
  ['title: "Construction Materials Supply"', 'title: "የግንባታ መሳሪያዎች አቅርቦት"'],
  [
    "Precision-manufactured construction materials for contractors, developers, and infrastructure projects. Specifications, performance, and timelines treated with the same rigor.",
    "ለግንባቸኞች፣ አበልጫዮች እና የመሠረተ ልማት ፕሮጀክቶች በትክክል የተሰሩ የግንባታ መሳሪያዎች። መመዘኛ፣ አፈጻጸም እና ጊዜ ሰሌዳ በተመሳሳይ ትኩረት ይታዩ።",
  ],
  [
    '"Cement, aggregates, and reinforcement steel"',
    '"ሲሚንት፣ አጠቃላይ እቃዎች እና የማጣመሚያ ብረት"',
  ],
  ['"Finishing and structural materials"', '"ጨረሮች እና መዋቅራዊ መሳሪያዎች"'],
  [
    '"Bulk and project-based supply contracts"',
    '"የጅምላ እና በፕሮጀክት የተመሠረቱ የአቅርቦት ውሎች"',
  ],
  [
    '"Specification matching and substitution support"',
    '"መመዘኛ ማዛመድ እና ተካ ድጋፍ"',
  ],
  [
    '"Coordinated delivery to active sites"',
    '"ወደ ንቁ ግንባታ ቦታዎች ተቀናጅቶ አቅርቦት"',
  ],

  // projects.partnerships
  ['eyebrow: "Growth & Partnerships"', 'eyebrow: "እድገት እና አጋርነት"'],
  [
    "Long-term agreements with measurable performance.",
    "በመለካት የሚታይ አፈጻጸም ያለው የረዥም ጊዜ ስምምነት።",
  ],
  [
    "Basilea Trading partners with healthcare networks, contractors, and infrastructure programs on multi-year supply agreements with documented KPIs — fill rate, lead time, defect rate, and incident response.",
    "ባሲሊያ ትሬዲንግ ከጤና አውታሮች፣ ግንባቸኞች እና የመሠረተ ልማት ፕሮግራሞች ጋር በሰነድ የተደገፉ KPI — የመሙላት መጠን፣ የመራመድ ጊዜ፣ የጉድለት መጠን እና የአደጋ ምላሽ — በብዙ ዓመት የአቅርቦት ስምምነቶች ይተባበራል።",
  ],
  [
    "Our growth is driven by repeat business. We invest in capacity, certifications, and people so that our partners can scale with confidence.",
    "እድገታችን በድጋሚ የሚመጣ ንግድ ይመራል። አጋሮች በእምነት እንዲያሳድጉ ብቃት፣ የምስክር ወረቀቶች እና ሰዎችን እንዘልቅራለን።",
  ],
  ['button: "Discuss a partnership"', 'button: "ስለ አጋርነት ይወያዩ"'],
  [
    "Distribution center supporting partnership growth",
    "የአጋርነት እድገትን የሚደግፍ የስርጭት ማዕከል",
  ],
];

const applied = [];
const skipped = [];

for (const [from, to] of rules) {
  if (s.includes(from)) {
    s = s.split(from).join(to);
    applied.push(from.slice(0, 60) + (from.length > 60 ? "…" : ""));
  } else {
    skipped.push(from.slice(0, 60) + (from.length > 60 ? "…" : ""));
  }
}

writeFileSync(amPath, s, "utf8");

console.log(`Applied ${applied.length} / ${rules.length} replacements`);
if (applied.length) {
  console.log("\nApplied:");
  for (const a of applied) console.log("  ✓", a);
}
if (skipped.length) {
  console.log("\nSkipped (not found):");
  for (const x of skipped) console.log("  -", x);
}

// Post-check: flag foreign scripts in about/projects/home.commitment
const foreignPattern =
  /[\u0600-\u06FF\u0750-\u077F\u4E00-\u9FFF\uAC00-\uD7AF\u0400-\u04FF]/;
const sections = s.match(
  /(?:home:\s*\{[\s\S]*?commitment:[\s\S]*?\},\s*cta:|about:\s*\{[\s\S]*?\},\s*projects:\s*\{[\s\S]*?\},)/
);
const checkText = sections ? sections[0] : s;
const foreignHits = checkText.match(
  /[^\n]*[\u0600-\u06FF\u0750-\u077F\u4E00-\u9FFF\uAC00-\uD7AF\u0400-\u04FF][^\n]*/g
);
if (foreignHits?.length) {
  console.log("\n⚠ Foreign script remnants:");
  for (const line of foreignHits) console.log(" ", line.trim().slice(0, 100));
} else {
  console.log("\n✓ No Arabic/Cyrillic/CJK scripts in about/projects/commitment");
}
