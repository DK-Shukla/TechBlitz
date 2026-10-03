
const fs = require("fs");
const path = require("path");

const colorMap = {
  "\\[#050505\\]": "primary-black",
  "\\[#0D0D0D\\]": "secondary-black",
  "\\[#151515\\]": "card",
  "\\[#292929\\]": "border",
  "\\[#FFFFFF\\]": "white",
  "\\[#F5F5F5\\]": "soft-white",
  "\\[#A3A3A3\\]": "secondary-text",
  "\\[#E50914\\]": "primary-red",
  "\\[#FF1E2D\\]": "bright-red",
  "\\[rgba\\(229,9,20,0\\.3\\)\\]": "primary-red/30",
  "\\[#1a1a1a\\]": "secondary-black", // approximate for tag background
  "\\[#555\\]": "secondary-text/50" // approximate placeholder
};

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir(path.join(__dirname, "src"));

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  let modified = content;
  
  for (const [hex, token] of Object.entries(colorMap)) {
    // We want to replace bg-[#050505] with bg-primary-black
    // The regex matches prefix-[hex]
    const regex = new RegExp(`([a-z]+)-${hex}`, "g");
    modified = modified.replace(regex, `$1-${token}`);
  }
  
  if (content !== modified) {
    fs.writeFileSync(file, modified, "utf8");
    console.log(`Updated ${file}`);
  }
});
console.log("Done.");

