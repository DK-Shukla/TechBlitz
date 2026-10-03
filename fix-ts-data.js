
const fs = require("fs");
let f = fs.readFileSync("src/lib/data.ts", "utf8");
f = f.replace(/cleaned\.id = cleaned\._id\.toString\(\);/g, "cleaned.id = String((cleaned as any)._id);");
f = f.replace(/delete cleaned\._id;/g, "delete (cleaned as any)._id;");
f = f.replace(/delete cleaned\.__v;/g, "delete (cleaned as any).__v;");
fs.writeFileSync("src/lib/data.ts", f);

