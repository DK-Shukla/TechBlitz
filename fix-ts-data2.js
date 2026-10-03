
const fs = require("fs");
let f = fs.readFileSync("src/lib/data.ts", "utf8");
f = f.replace("const cleaned = { ...data };", "const cleaned: any = { ...data };");
fs.writeFileSync("src/lib/data.ts", f);

