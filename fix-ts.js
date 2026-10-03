
const fs = require("fs");
let f1 = fs.readFileSync("src/app/admin/registrations/page.tsx", "utf8");
f1 = f1.replace("let rawRegistrations = [];", "let rawRegistrations: any[] = [];");
fs.writeFileSync("src/app/admin/registrations/page.tsx", f1);

let f2 = fs.readFileSync("src/app/admin/speakers/page.tsx", "utf8");
f2 = f2.replace("let rawSpeakers = [];", "let rawSpeakers: any[] = [];");
fs.writeFileSync("src/app/admin/speakers/page.tsx", f2);

