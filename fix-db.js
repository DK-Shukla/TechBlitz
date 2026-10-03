
const fs = require("fs");

let dataTs = fs.readFileSync("src/lib/data.ts", "utf8");
dataTs = dataTs.replace(/await dbConnect\(\);/g, `const db = await dbConnect();\n    if (!db) throw new Error("No DB");`);
fs.writeFileSync("src/lib/data.ts", dataTs);

let themeTs = fs.readFileSync("src/lib/theme.ts", "utf8");
themeTs = themeTs.replace(/await dbConnect\(\);/g, `const db = await dbConnect();\n    if (!db) return null;`);
fs.writeFileSync("src/lib/theme.ts", themeTs);

let actionsThemeTs = fs.readFileSync("src/actions/theme.ts", "utf8");
actionsThemeTs = actionsThemeTs.replace(/await dbConnect\(\);/g, `const db = await dbConnect();\n  if (!db) return null;`);
fs.writeFileSync("src/actions/theme.ts", actionsThemeTs);

