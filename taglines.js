const taglines = [
  "idk what im doing",
  "day it 🤣",
  "🤔",
  "ok i goon",
  "so cute 🥺 rabbit 🐇🐰",
  "H",
  "George Harris SR: Hi",
  'HelloWorld("print")',
  "bros a bro😂",
  "gift call🙏 🥺",
];

function randomTagline() {
  const randomIndex = Math.floor(Math.random() * taglines.length);
  document.getElementById('tagline').textContent = taglines[randomIndex];
}

randomTagline();
