
const fs = require("fs");
const path = require("path");

const components = [
  { file: "src/components/domains/Domains.tsx", propName: "domains", propType: "any[]", oldImport: "import { domains } from \"@/data/domains\";" },
  { file: "src/components/speakers/Speakers.tsx", propName: "speakers", propType: "any[]", oldImport: "import { speakers } from \"@/data/speakers\";" },
  { file: "src/components/company-slider/CompanySlider.tsx", propName: "companyLogos", propType: "any[]", oldImport: "import { companyLogos } from \"@/data/gallery\";" },
  { file: "src/components/outreach-partners/OutreachPartners.tsx", propName: "outreachPartners", propType: "any[]", oldImport: "import { outreachPartners } from \"@/data/outreachPartners\";" },
  { file: "src/components/sponsors/Sponsors.tsx", propName: "sponsors", propType: "any[]", oldImport: "import { sponsors } from \"@/data/sponsors\";" },
  { file: "src/components/gallery/Gallery.tsx", propName: "galleryItems", propType: "any[]", oldImport: "import { galleryItems } from \"@/data/gallery\";" },
  { file: "src/components/faq/FAQ.tsx", propName: "faqs", propType: "any[]", oldImport: "import { faqs } from \"@/data/faq\";" },
  { file: "src/components/workshop-series/WorkshopSeries.tsx", propName: "sessions", propType: "any[]", oldImport: "import { sessions } from \"@/data/sessions\";" }
];

components.forEach(comp => {
  let content = fs.readFileSync(comp.file, "utf8");
  
  // Remove old import
  content = content.replace(comp.oldImport + "\n", "");
  
  // Update component signature
  const funcRegex = /export default function ([A-Za-z]+)\(\) {/;
  content = content.replace(funcRegex, `export default function $1({ ${comp.propName} }: { ${comp.propName}: ${comp.propType} }) {`);
  
  fs.writeFileSync(comp.file, content, "utf8");
  console.log(`Refactored ${comp.file}`);
});
console.log("Done.");

