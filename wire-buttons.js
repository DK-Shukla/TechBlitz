
const fs = require("fs");
const path = require("path");

const config = {
  "speakers": {
    model: "Speaker",
    fields: [
      { name: "name", label: "Speaker Name", type: "text", required: true },
      { name: "designation", label: "Designation", type: "text", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "domain", label: "Domain", type: "text", required: true }
    ]
  },
  "sessions": {
    model: "Session",
    fields: [
      { name: "title", label: "Session Title", type: "text", required: true },
      { name: "date", label: "Date", type: "text", required: true },
      { name: "time", label: "Time", type: "text", required: true },
      { name: "number", label: "Session Number", type: "number", required: true }
    ]
  },
  "domains": {
    model: "Domain",
    fields: [
      { name: "title", label: "Domain Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea", required: true }
    ]
  },
  "partners": {
    model: "OutreachPartner",
    fields: [
      { name: "name", label: "Partner Name", type: "text", required: true },
      { name: "type", label: "Type (e.g. Club)", type: "text", required: true }
    ]
  },
  "sponsors": {
    model: "Sponsor",
    fields: [
      { name: "name", label: "Sponsor Name", type: "text", required: true },
      { name: "tier", label: "Tier", type: "text", required: true }
    ]
  },
  "gallery": {
    model: "Gallery",
    fields: [
      { name: "alt", label: "Description", type: "text", required: true },
      { name: "category", label: "Category", type: "text", required: true }
    ]
  },
  "faq": {
    model: "Faq",
    fields: [
      { name: "question", label: "Question", type: "text", required: true },
      { name: "answer", label: "Answer", type: "textarea", required: true }
    ]
  }
};

const adminDir = path.join(__dirname, "src/app/admin");

for (const [page, settings] of Object.entries(config)) {
  const filePath = path.join(adminDir, page, "page.tsx");
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");
    
    // Add import
    if (!content.includes("GenericFormModal")) {
      content = content.replace(
        "import PageHeader",
        "import GenericFormModal from \"@/components/admin/modals/GenericFormModal\";\nimport PageHeader"
      );
    }
    
    // Replace action button
    const fieldsJson = JSON.stringify(settings.fields);
    const replacement = `<GenericFormModal title="Add ${settings.model}" buttonText="Add New" modelName="${settings.model}" fields={${fieldsJson}} />`;
    
    content = content.replace(
      /<button className="bg-primary-red .*?<\/button>/s,
      replacement
    );
    
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Wired up", page);
  }
}

