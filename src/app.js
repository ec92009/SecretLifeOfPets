const storageKey = "secret-life-of-pets:v1";

const pets = {
  clover: {
    name: "Clover",
    species: "mixed-breed dog",
    initials: "CL",
    mood: "Proud",
    energy: "High",
    napHours: 2.5,
    location: "living room perimeter",
    trait: "Checks every window before settling",
    routine: [
      ["07:10", "Breakfast inspection"],
      ["10:20", "Sunbeam patrol"],
      ["14:00", "Toy inventory"],
      ["18:30", "Doorway greeting shift"]
    ]
  },
  miso: {
    name: "Miso",
    species: "tabby cat",
    initials: "MI",
    mood: "Selective",
    energy: "Medium",
    napHours: 5.25,
    location: "sofa command post",
    trait: "Claims warm laundry within six seconds",
    routine: [
      ["06:50", "Countertop audit"],
      ["11:45", "Window watch"],
      ["15:15", "Blanket nest"],
      ["22:05", "Hallway sprint"]
    ]
  },
  pip: {
    name: "Pip",
    species: "small terrier",
    initials: "PI",
    mood: "Alert",
    energy: "Turbo",
    napHours: 1.75,
    location: "front door lookout",
    trait: "Treats mail slots as breaking news",
    routine: [
      ["08:00", "Leash negotiations"],
      ["12:35", "Snack search"],
      ["16:10", "Cushion tunneling"],
      ["20:40", "Kitchen shadowing"]
    ]
  }
};

const seedLogs = [
  {
    id: "seed-1",
    petId: "clover",
    type: "Toy audit",
    intensity: 4,
    note: "Moved the rope toy from the basket to the sunny rug.",
    timestamp: Date.now() - 1000 * 60 * 21
  },
  {
    id: "seed-2",
    petId: "miso",
    type: "Window watch",
    intensity: 2,
    note: "Observed sidewalk traffic from the sofa arm.",
    timestamp: Date.now() - 1000 * 60 * 53
  },
  {
    id: "seed-3",
    petId: "pip",
    type: "Snack search",
    intensity: 5,
    note: "Checked every chair leg after lunch prep.",
    timestamp: Date.now() - 1000 * 60 * 96
  }
];

const state = loadState();
let timelineMode = "active";

const elements = {
  switcher: document.querySelector("#petSwitcher"),
  currentSummary: document.querySelector("#currentSummary"),
  petBadge: document.querySelector("#petBadge"),
  petName: document.querySelector("#petName"),
  petContext: document.querySelector("#petContext"),
  mood: document.querySelector("#moodMetric"),
  energy: document.querySelector("#energyMetric"),
  nap: document.querySelector("#napMetric"),
  clue: document.querySelector("#clueMetric"),
  routine: document.querySelector("#routineList"),
  form: document.querySelector("#activityForm"),
  activityType: document.querySelector("#activityType"),
  intensity: document.querySelector("#intensity"),
  note: document.querySelector("#activityNote"),
  showActive: document.querySelector("#showActive"),
  showAll: document.querySelector("#showAll"),
  reset: document.querySelector("#resetData"),
  timeline: document.querySelector("#timeline")
};

function loadState() {
  const fallback = { activePet: "clover", logs: seedLogs };

  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (!stored || !pets[stored.activePet] || !Array.isArray(stored.logs)) {
      return fallback;
    }

    return stored;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function renderPetSwitcher() {
  elements.switcher.innerHTML = "";

  Object.entries(pets).forEach(([petId, pet]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = pet.name;
    button.className = petId === state.activePet ? "is-active" : "";
    button.setAttribute("aria-pressed", String(petId === state.activePet));
    button.addEventListener("click", () => {
      state.activePet = petId;
      saveState();
      render();
    });
    elements.switcher.append(button);
  });
}

function renderStatus() {
  const pet = pets[state.activePet];
  const petLogs = state.logs.filter((log) => log.petId === state.activePet);
  const clueScore = petLogs.reduce((total, log) => total + Number(log.intensity), 0);

  elements.currentSummary.textContent = `${pet.name} is ${pet.mood.toLowerCase()} near the ${pet.location}. ${pet.trait}.`;
  elements.petBadge.textContent = pet.initials;
  elements.petName.textContent = pet.name;
  elements.petContext.textContent = `${pet.species} - ${pet.location}`;
  elements.mood.textContent = pet.mood;
  elements.energy.textContent = pet.energy;
  elements.nap.textContent = `${pet.napHours}h`;
  elements.clue.textContent = clueScore.toString();

  elements.routine.innerHTML = "";
  pet.routine.forEach(([time, task]) => {
    const item = document.createElement("li");
    const timeElement = document.createElement("time");
    const taskElement = document.createElement("span");

    timeElement.textContent = time;
    taskElement.textContent = task;
    item.append(timeElement, taskElement);
    elements.routine.append(item);
  });
}

function renderTimeline() {
  const visibleLogs = state.logs
    .filter((log) => timelineMode === "all" || log.petId === state.activePet)
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 8);

  elements.timeline.innerHTML = "";

  if (visibleLogs.length === 0) {
    const empty = document.createElement("li");
    const message = document.createElement("p");

    message.textContent = "No entries yet.";
    empty.append(message);
    elements.timeline.append(empty);
    return;
  }

  visibleLogs.forEach((log) => {
    const pet = pets[log.petId];
    const item = document.createElement("li");
    const top = document.createElement("div");
    const title = document.createElement("strong");
    const time = document.createElement("time");
    const note = document.createElement("p");
    const tag = document.createElement("span");

    top.className = "timeline__top";
    title.textContent = `${pet.name} - ${log.type}`;
    time.textContent = formatTime(log.timestamp);
    note.textContent = log.note;
    tag.className = "tag";
    tag.textContent = `Intensity ${log.intensity}/5`;

    top.append(title, time);
    item.append(top, note, tag);
    elements.timeline.append(item);
  });
}

function formatTime(timestamp) {
  return new Intl.DateTimeFormat([], {
    hour: "numeric",
    minute: "2-digit"
  }).format(timestamp);
}

function addLog(event) {
  event.preventDefault();

  const type = elements.activityType.value;
  const intensity = elements.intensity.value;
  const note = elements.note.value.trim() || `${type} recorded for ${pets[state.activePet].name}.`;

  state.logs.unshift({
    id: makeId(),
    petId: state.activePet,
    type,
    intensity,
    note,
    timestamp: Date.now()
  });

  elements.note.value = "";
  saveState();
  render();
}

function makeId() {
  if (globalThis.crypto?.randomUUID) {
    return crypto.randomUUID();
  }

  return `log-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function setTimelineMode(nextMode) {
  timelineMode = nextMode;
  elements.showActive.classList.toggle("is-active", nextMode === "active");
  elements.showAll.classList.toggle("is-active", nextMode === "all");
  renderTimeline();
}

function resetData() {
  localStorage.removeItem(storageKey);
  state.activePet = "clover";
  state.logs = [...seedLogs];
  timelineMode = "active";
  saveState();
  setTimelineMode("active");
  render();
}

function render() {
  renderPetSwitcher();
  renderStatus();
  renderTimeline();
}

elements.form.addEventListener("submit", addLog);
elements.showActive.addEventListener("click", () => setTimelineMode("active"));
elements.showAll.addEventListener("click", () => setTimelineMode("all"));
elements.reset.addEventListener("click", resetData);

render();
