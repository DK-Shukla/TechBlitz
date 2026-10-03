
const fs = require("fs");

// Fix 1: src/data/types.ts
let typesTs = fs.readFileSync("src/data/types.ts", "utf8");
typesTs = typesTs.replace(/topic\??:\s*string;/, "topic?: string;\n  title?: string;\n  gmeetLink?: string;");
fs.writeFileSync("src/data/types.ts", typesTs);

// Fix 2: src/lib/data.ts
let dataTs = fs.readFileSync("src/lib/data.ts", "utf8");
dataTs = dataTs.replace(/const cleaned = \{ \.\.\.item \};/g, "const cleaned: any = { ...item };");
fs.writeFileSync("src/lib/data.ts", dataTs);

// Fix 3: src/components/admin/modals/GenericFormModal.tsx
let modalTs = fs.readFileSync("src/components/admin/modals/GenericFormModal.tsx", "utf8");
modalTs = modalTs.replace(/type: .text. \| .textarea. \| .number. \| .date. \| .boolean.;/, "type: string;");
fs.writeFileSync("src/components/admin/modals/GenericFormModal.tsx", modalTs);

console.log("Fixed build errors.");

