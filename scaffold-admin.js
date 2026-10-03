
const fs = require("fs");
const path = require("path");

const pages = [
  { name: "registrations", title: "Registrations", desc: "Manage event registrations." },
  { name: "speakers", title: "Speakers", desc: "Manage event speakers." },
  { name: "sessions", title: "Sessions", desc: "Manage workshop sessions." },
  { name: "domains", title: "Domains", desc: "Manage technology domains." },
  { name: "partners", title: "Partners", desc: "Manage outreach partners." },
  { name: "sponsors", title: "Sponsors", desc: "Manage event sponsors." },
  { name: "gallery", title: "Gallery", desc: "Manage event photos and gallery." },
  { name: "faq", title: "FAQ", desc: "Manage frequently asked questions." },
  { name: "settings", title: "Site Settings", desc: "Manage global site configuration." }
];

const adminDir = path.join(__dirname, "src/app/admin");

pages.forEach(p => {
  const dir = path.join(adminDir, p.name);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const filePath = path.join(dir, "page.tsx");
  if (!fs.existsSync(filePath)) {
    const content = `import PageHeader from "@/components/admin/PageHeader";

export default function ${p.title.replace(/\s+/g, "")}Page() {
  return (
    <div>
      <PageHeader 
        title="${p.title}" 
        description="${p.desc}" 
        action={
          <button className="bg-primary-red hover:bg-bright-red text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Add New
          </button>
        }
      />
      <div className="bg-secondary-black border border-border rounded-xl p-8 text-center text-secondary-text">
        <p>This module is currently being built. Data connection to MongoDB coming shortly.</p>
      </div>
    </div>
  );
}
`;
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Created ${p.name}`);
  }
});
console.log("Done.");

