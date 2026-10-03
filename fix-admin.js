
const fs = require("fs");

function fixPage(file) {
  let content = fs.readFileSync(file, "utf8");
  
  // Replace the .find({})... lines with a try-catch that fails fast or checks dbConnect
  content = content.replace(
    /const raw([A-Za-z]+) = await ([A-Za-z]+)\.find\(\{\}\)(.*?)\.lean\(\);/,
    `const db = await dbConnect();\n  let raw$1 = [];\n  if (db) { try { raw$1 = await $2.find({})$3.lean(); } catch(e) { console.error(e); } }`
  );
  
  fs.writeFileSync(file, content, "utf8");
}

fixPage("src/app/admin/registrations/page.tsx");
fixPage("src/app/admin/speakers/page.tsx");
console.log("Fixed.");

