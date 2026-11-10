import fs from 'node:fs';
import path from 'node:path';

function buildResumePdf() {
  // Construct a clean, valid PDF 1.4 document
  // Coordinates in points: 1 pt = 1/72 inch. Standard Letter is 612 x 792 pt.
  const lines = [
    "%PDF-1.4",
    "%",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj"
  ];

  // Text streams for resume
  // F2 = Helvetica-Bold, F1 = Helvetica
  const streamLines = [
    "BT",
    "/F2 22 Tf",
    "50 740 Td",
    "(MD. SHAHIL) Tj",
    "ET",
    "BT",
    "/F2 12 Tf",
    "50 722 Td",
    "(Web Developer | React - Next.js - TypeScript) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 706 Td",
    "(Rajshahi, Bangladesh  |  personalshahil69@gmail.com  |  +8801303723701  |  github.com/sahilrahman69) Tj",
    "ET",
    // Horizontal Rule
    "0.7 0.7 0.7 RG",
    "1 w",
    "50 696 m 562 696 l S",
    // Summary
    "BT",
    "/F2 11 Tf",
    "0 0 0 rg",
    "50 680 Td",
    "(PROFESSIONAL SUMMARY) Tj",
    "ET",
    "BT",
    "/F1 9.5 Tf",
    "50 666 Td",
    "(Web developer building responsive, user-focused web apps using React, Next.js, TypeScript and Tailwind CSS.) Tj",
    "0 -13 Td",
    "(Experienced in building encrypted chat platforms, book discovery journals, and country explorer portals.) Tj",
    "0 -13 Td",
    "(Brings background in freelance content writing and tutoring with strong analytical & communication skills.) Tj",
    "ET",
    // Skills
    "BT",
    "/F2 11 Tf",
    "50 622 Td",
    "(TECHNICAL SKILLS) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 607 Td",
    "(Frontend: ) Tj",
    "/F1 9.5 Tf",
    "60 0 Td",
    "(React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Bootstrap, shadcn/ui) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 593 Td",
    "(Backend: ) Tj",
    "/F1 9.5 Tf",
    "60 0 Td",
    "(Node.js, Express.js (learning), REST APIs, HTTP, WebSockets) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 579 Td",
    "(Data & Auth: ) Tj",
    "/F1 9.5 Tf",
    "70 0 Td",
    "(MongoDB Atlas, Better Auth, Web Crypto API, Local Storage, Open Library API, PGlite) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 565 Td",
    "(Tools: ) Tj",
    "/F1 9.5 Tf",
    "45 0 Td",
    "(Git, GitHub, Vercel, VS Code, npm, Postman) Tj",
    "ET",
    // Projects
    "BT",
    "/F2 11 Tf",
    "50 538 Td",
    "(KEY PROJECTS) Tj",
    "ET",
    // Luna
    "BT",
    "/F2 10 Tf",
    "50 522 Td",
    "(Luna - Anonymous Ephemeral Conversation App) Tj",
    "/F1 9 Tf",
    "240 0 Td",
    "(Next.js, TypeScript, Web Crypto API, PGlite) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "60 508 Td",
    "(- Built zero-trace anonymous messaging with client-side ECDH key generation via Web Crypto API.) Tj",
    "0 -12 Td",
    "(- Synthesized acoustic audio feedback via Web Audio API; local ephemeral SQL with in-browser PGlite.) Tj",
    "ET",
    // Book Vibe
    "BT",
    "/F2 10 Tf",
    "50 480 Td",
    "(Book Vibe - Book Discovery & Reading Journal) Tj",
    "/F1 9 Tf",
    "235 0 Td",
    "(Next.js, React, TypeScript, Open Library API) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "60 466 Td",
    "(- Connected Open Library API with debounced search, custom reading shelves, and reading stats.) Tj",
    "0 -12 Td",
    "(- Implemented offline local caching and optimistic UI updates for instant interaction.) Tj",
    "ET",
    // Countries Explorer
    "BT",
    "/F2 10 Tf",
    "50 438 Td",
    "(Countries Explorer - Interactive Country Atlas) Tj",
    "/F1 9 Tf",
    "240 0 Td",
    "(React 19, TypeScript, Tailwind CSS v4, REST APIs) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "60 424 Td",
    "(- Filter across 250+ countries with zero lag; border-hopping navigation and travel wishlist planner.) Tj",
    "ET",
    // Bazar Dor
    "BT",
    "/F2 10 Tf",
    "50 398 Td",
    "(Bazar Dor - Bengali Daily Commodity Price Tracker) Tj",
    "/F1 9 Tf",
    "250 0 Td",
    "(Next.js, TypeScript, shadcn/ui, MongoDB) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "60 384 Td",
    "(- Daily market price tracker with Bengali and English typography, price trends, and shopping budget calculator.) Tj",
    "ET",
    // Experience
    "BT",
    "/F2 11 Tf",
    "50 356 Td",
    "(PROFESSIONAL EXPERIENCE) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 341 Td",
    "(Freelance Web Content Writer) Tj",
    "/F1 9 Tf",
    "170 0 Td",
    "(Remote | 2021 - 2023) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "60 328 Td",
    "(- Researched technical subjects and published 100+ articles and guides for international audiences.) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 308 Td",
    "(Independent Private Tutor) Tj",
    "/F1 9 Tf",
    "150 0 Td",
    "(Rajshahi | 2020 - 2023) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "60 295 Td",
    "(- Provided 1-on-1 personalized academic mentorship, adapting explanations to diverse learning styles.) Tj",
    "ET",
    // Education
    "BT",
    "/F2 11 Tf",
    "50 268 Td",
    "(EDUCATION) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 252 Td",
    "(Honours in Management) Tj",
    "/F1 9 Tf",
    "130 0 Td",
    "(- Rajshahi College (National University) | 2019 - 2024 | CGPA: 3.00) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 237 Td",
    "(Higher Secondary Certificate (HSC)) Tj",
    "/F1 9 Tf",
    "180 0 Td",
    "(- Varendra College, Rajshahi | 2017 - 2019 | GPA: 4.00) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 222 Td",
    "(Secondary School Certificate (SSC)) Tj",
    "/F1 9 Tf",
    "180 0 Td",
    "(- Rajshahi Bholanath Bisweswar Hindu Academy | GPA: 3.75) Tj",
    "ET"
  ];

  const streamContent = streamLines.join("\n");
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  const obj6 = [
    "6 0 obj",
    `<< /Length ${streamLength} >>`,
    "stream",
    streamContent,
    "endstream",
    "endobj"
  ];

  const allParts = [...lines, ...obj6];

  let body = "";
  const xrefOffsets = [0];

  for (const part of allParts) {
    if (part.endsWith(" 0 obj")) {
      xrefOffsets.push(body.length);
    }
    body += part + "\n";
  }

  const xrefStart = body.length;
  let xref = `xref\n0 ${xrefOffsets.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < xrefOffsets.length; i++) {
    xref += String(xrefOffsets[i]).padStart(10, '0') + " 00000 n \n";
  }

  const trailer = `trailer\n<< /Size ${xrefOffsets.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  const finalPdf = body + xref + trailer;

  const targetPath = path.resolve('public', 'MD_Shahil_Resume.pdf');
  fs.writeFileSync(targetPath, finalPdf, 'binary');
  console.log(`Generated ${targetPath} successfully! Length: ${finalPdf.length} bytes`);
}

buildResumePdf();
