const games = {
  physical: [
    { title: "Zip Zap Zop", description: "Players stand in a circle, passing energy with 'Zip', 'Zap', 'Zop' while pointing to the next player. Keep the rhythm fast and unbroken." },
    { title: "Space Jump", description: "Walk around the space; when the leader calls 'jump', everyone freezes and jumps to a new imaginary location, instantly adjusting posture and mood." },
    { title: "Mirror Exercise", description: "Pair up and mirror each other's movements exactly, taking turns leading. Builds focus and physical listening." },
    { title: "The Wave", description: "Standing in a circle, pass a physical impulse (a gesture, sound, or motion) around the group like a stadium wave, keeping it consistent." },
    { title: "Freeze Tag Improv", description: "Two players improvise a scene; anyone can call 'freeze', tap one player out, and start a new scene from that exact physical position." },
    { title: "Body Part Orchestra", description: "Each player is assigned a body part and a movement; the leader 'conducts' by pointing to players to add or remove their movement, building a physical orchestra." }
  ],
  brainy: [
    { title: "Word Association", description: "Standing in a circle, each player says a word associated with the previous one, as fast as possible, without long pauses." },
    { title: "Three Things", description: "One player answers 'name three things you'd find in a...' as fast as they can before time runs out, encouraging quick creative thinking." },
    { title: "Alphabet Game", description: "Two players improvise a scene where each new line must start with the next letter of the alphabet, in order." },
    { title: "Yes, And", description: "Two players build a story together, each line starting with 'Yes, and...' to practice accepting and building on ideas." },
    { title: "Categories", description: "The group calls out a category; players take turns naming items in it without repeating or hesitating too long." },
    { title: "Question Only", description: "Two players improvise a scene speaking only in questions — if you hesitate or make a statement, you're out." }
  ]
};

const toggle = document.getElementById('category-toggle');
const labelPhysical = document.getElementById('label-physical');
const labelBrainy = document.getElementById('label-brainy');
const fetchBtn = document.getElementById('fetch-btn');
const gameTitle = document.getElementById('game-title');
const gameDescription = document.getElementById('game-description');

function updateLabels() {
  const isBrainy = toggle.checked;
  labelPhysical.classList.toggle('active', !isBrainy);
  labelBrainy.classList.toggle('active', isBrainy);
}

toggle.addEventListener('change', updateLabels);

fetchBtn.addEventListener('click', () => {
  const category = toggle.checked ? 'brainy' : 'physical';
  const list = games[category];
  const game = list[Math.floor(Math.random() * list.length)];
  gameTitle.textContent = game.title;
  gameDescription.textContent = game.description;
});

updateLabels();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}