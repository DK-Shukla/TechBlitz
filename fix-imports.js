const fs = require("fs");
const path = require("path");

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir(path.join(__dirname, "src"));

const models = ["Domain", "Speaker", "Session", "OutreachPartner", "Sponsor", "Gallery", "Faq", "Registration", "SiteSettings", "Theme"];

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  let modified = content;
  
  models.forEach(model => {
    const regex = new RegExp(`import \\{\\s*${model}\\s*\\}\\s*from\\s+['"]@/models/${model}['"];?`, "g");
    modified = modified.replace(regex, `import ${model} from "@/models/${model}";`);
  });
  
  if (content !== modified) {
    fs.writeFileSync(file, modified, "utf8");
    console.log(`Updated imports in ${file}`);
  }
});
console.log("Done.");
