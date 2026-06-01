const storageKey = "secret-life-of-pets:v2";
const languageKey = "secret-life-of-pets:language";
const themeKey = "secret-life-of-pets:theme";

const pets = {
  olivia: {
    name: "Olivia",
    species: "5-year-old female dog",
    initials: "OL",
    mood: "Content",
    energy: "Steady",
    napHours: 3.25,
    location: "front of the photo",
    weight: "10 kg",
    coat: "all-black coat",
    trait: "The first dog in the photo, calm and picture-ready",
    routine: [
      ["07:10", "Breakfast check-in"],
      ["10:20", "Photo patrol"],
      ["14:00", "Quiet lounge"],
      ["18:30", "Evening walk watch"]
    ]
  },
  bruno: {
    name: "Bruno",
    species: "4-year-old male dog",
    initials: "BR",
    mood: "Easygoing",
    energy: "Medium",
    napHours: 3.5,
    location: "behind Olivia in the photo",
    weight: "10 kg",
    coat: "dark coat",
    trait: "The second dog in the photo, hanging just behind Olivia",
    routine: [
      ["07:25", "Breakfast follow-up"],
      ["11:45", "Window watch"],
      ["15:15", "Nap rotation"],
      ["20:05", "Kitchen shadowing"]
    ]
  },
  lola: {
    name: "Lola",
    species: "10-year-old female dog",
    initials: "LO",
    mood: "Gentle",
    energy: "Low",
    napHours: 5.75,
    location: "not shown in the photo",
    weight: "8 kg",
    coat: "smaller senior companion",
    trait: "A little smaller than Olivia and Bruno, and keeping her own schedule",
    routine: [
      ["08:00", "Slow morning stretch"],
      ["12:35", "Snack search"],
      ["16:10", "Soft-bed nap"],
      ["20:40", "Calm evening check"]
    ]
  }
};

const seedLogs = [
  {
    id: "seed-1",
    petId: "olivia",
    type: "Patrol",
    intensity: 3,
    note: "Held the front position while the camera caught the good side.",
    timestamp: Date.now() - 1000 * 60 * 21
  },
  {
    id: "seed-2",
    petId: "bruno",
    type: "Window watch",
    intensity: 2,
    note: "Stayed just behind Olivia and kept the room under review.",
    timestamp: Date.now() - 1000 * 60 * 53
  },
  {
    id: "seed-3",
    petId: "lola",
    type: "Snack search",
    intensity: 2,
    note: "Made a quiet senior inspection from off camera.",
    timestamp: Date.now() - 1000 * 60 * 96
  }
];

const translations = {
  en: {
    dashboardEyebrow: "Household dashboard",
    statusEyebrow: "Now watching",
    statusTitle: "Current Status",
    moodLabel: "Mood",
    energyLabel: "Energy",
    napLabel: "Nap bank",
    clueLabel: "Clue score",
    routineTitle: "Routine",
    activityEyebrow: "Activity log",
    addEntryTitle: "Add Entry",
    activityLabel: "Activity",
    intensityLabel: "Intensity",
    noteLabel: "Note",
    addEntryButton: "Add Entry",
    activePetButton: "Active Pet",
    allPetsButton: "All Pets",
    resetButton: "Reset",
    timelineEyebrow: "Latest clues",
    timelineTitle: "Timeline",
    tutorialEyebrow: "Tutorial",
    tutorialTitle: "How To Use It",
    closeHelp: "Close help",
    themeDark: "Dark",
    themeLight: "Light",
    tutorialOneTitle: "Pick a dog",
    tutorialOneText: "Use Olivia, Bruno, or Lola to switch the active profile.",
    tutorialTwoTitle: "Check the status",
    tutorialTwoText: "Review mood, energy, nap bank, clue score, and the daily routine.",
    tutorialThreeTitle: "Add a clue",
    tutorialThreeText: "Choose an activity, set intensity, add a note, and save it to the timeline.",
    tutorialFourTitle: "Review history",
    tutorialFourText: "Toggle between the active dog and all dogs, or reset to the starter entries.",
    notePlaceholder: "Sofa cushions rearranged",
    emptyTimeline: "No entries yet.",
    summary: "{name} is {mood} near the {location}. {trait}.",
    defaultNote: "{type} recorded for {name}.",
    intensityTag: "Intensity {value}/5",
    activities: {
      "Patrol": "Patrol",
      "Snack search": "Snack search",
      "Nap": "Nap",
      "Zoomies": "Zoomies",
      "Toy audit": "Toy audit",
      "Window watch": "Window watch"
    },
    moods: {
      Content: "content",
      Easygoing: "easygoing",
      Gentle: "gentle"
    },
    energy: {
      Steady: "Steady",
      Medium: "Medium",
      Low: "Low"
    },
    locations: {
      olivia: "front of the photo",
      bruno: "behind Olivia in the photo",
      lola: "not shown in the photo"
    },
    traits: {
      olivia: "The first dog in the photo, calm and picture-ready",
      bruno: "The second dog in the photo, hanging just behind Olivia",
      lola: "A little smaller than Olivia and Bruno, and keeping her own schedule"
    },
    coats: {
      olivia: "all-black coat",
      bruno: "dark coat",
      lola: "smaller senior companion"
    }
  },
  es: {
    dashboardEyebrow: "Panel de casa",
    statusEyebrow: "Vigilando ahora",
    statusTitle: "Estado actual",
    moodLabel: "Animo",
    energyLabel: "Energia",
    napLabel: "Siestas",
    clueLabel: "Pistas",
    routineTitle: "Rutina",
    activityEyebrow: "Registro",
    addEntryTitle: "Nueva entrada",
    activityLabel: "Actividad",
    intensityLabel: "Intensidad",
    noteLabel: "Nota",
    addEntryButton: "Agregar",
    activePetButton: "Perro activo",
    allPetsButton: "Todos",
    resetButton: "Reiniciar",
    timelineEyebrow: "Ultimas pistas",
    timelineTitle: "Linea de tiempo",
    tutorialEyebrow: "Tutorial",
    tutorialTitle: "Como usarlo",
    closeHelp: "Cerrar ayuda",
    themeDark: "Oscuro",
    themeLight: "Claro",
    tutorialOneTitle: "Elige un perro",
    tutorialOneText: "Usa Olivia, Bruno o Lola para cambiar el perfil activo.",
    tutorialTwoTitle: "Mira el estado",
    tutorialTwoText: "Revisa animo, energia, siestas, pistas y la rutina diaria.",
    tutorialThreeTitle: "Agrega una pista",
    tutorialThreeText: "Elige actividad, ajusta intensidad, escribe una nota y guardala.",
    tutorialFourTitle: "Revisa historial",
    tutorialFourText: "Cambia entre el perro activo y todos, o reinicia las entradas.",
    notePlaceholder: "Cojines del sofa reorganizados",
    emptyTimeline: "Todavia no hay entradas.",
    summary: "{name} esta {mood} cerca de {location}. {trait}.",
    defaultNote: "{type} registrado para {name}.",
    intensityTag: "Intensidad {value}/5",
    activities: {
      "Patrol": "Patrulla",
      "Snack search": "Busqueda de snack",
      "Nap": "Siesta",
      "Zoomies": "Carreras",
      "Toy audit": "Revision de juguetes",
      "Window watch": "Vigilia en ventana"
    },
    moods: {
      Content: "tranquila",
      Easygoing: "relajado",
      Gentle: "dulce"
    },
    energy: {
      Steady: "Constante",
      Medium: "Media",
      Low: "Baja"
    },
    locations: {
      olivia: "la parte delantera de la foto",
      bruno: "detras de Olivia en la foto",
      lola: "fuera de la foto"
    },
    traits: {
      olivia: "Es la primera perra en la foto, tranquila y lista para la camara",
      bruno: "Es el segundo perro en la foto, justo detras de Olivia",
      lola: "Es un poco mas pequena que Olivia y Bruno, con su propio ritmo"
    },
    coats: {
      olivia: "pelaje negro",
      bruno: "pelaje oscuro",
      lola: "companera senior mas pequena"
    }
  },
  fr: {
    dashboardEyebrow: "Tableau de maison",
    statusEyebrow: "En observation",
    statusTitle: "Etat actuel",
    moodLabel: "Humeur",
    energyLabel: "Energie",
    napLabel: "Siestes",
    clueLabel: "Indices",
    routineTitle: "Routine",
    activityEyebrow: "Journal",
    addEntryTitle: "Ajouter",
    activityLabel: "Activite",
    intensityLabel: "Intensite",
    noteLabel: "Note",
    addEntryButton: "Ajouter",
    activePetButton: "Chien actif",
    allPetsButton: "Tous",
    resetButton: "Reinitialiser",
    timelineEyebrow: "Derniers indices",
    timelineTitle: "Chronologie",
    tutorialEyebrow: "Tutoriel",
    tutorialTitle: "Mode d'emploi",
    closeHelp: "Fermer l'aide",
    themeDark: "Sombre",
    themeLight: "Clair",
    tutorialOneTitle: "Choisir un chien",
    tutorialOneText: "Utilisez Olivia, Bruno ou Lola pour changer le profil actif.",
    tutorialTwoTitle: "Voir le statut",
    tutorialTwoText: "Consultez humeur, energie, siestes, indices et routine.",
    tutorialThreeTitle: "Ajouter un indice",
    tutorialThreeText: "Choisissez une activite, reglez l'intensite, ajoutez une note.",
    tutorialFourTitle: "Voir l'historique",
    tutorialFourText: "Affichez le chien actif, tous les chiens, ou reinitialisez.",
    notePlaceholder: "Coussins du canape remis en place",
    emptyTimeline: "Aucune entree pour le moment.",
    summary: "{name} est {mood} pres de {location}. {trait}.",
    defaultNote: "{type} note pour {name}.",
    intensityTag: "Intensite {value}/5",
    activities: {
      "Patrol": "Patrouille",
      "Snack search": "Recherche de snack",
      "Nap": "Sieste",
      "Zoomies": "Course folle",
      "Toy audit": "Controle des jouets",
      "Window watch": "Vigie fenetre"
    },
    moods: {
      Content: "calme",
      Easygoing: "detendu",
      Gentle: "douce"
    },
    energy: {
      Steady: "Stable",
      Medium: "Moyenne",
      Low: "Basse"
    },
    locations: {
      olivia: "l'avant de la photo",
      bruno: "derriere Olivia sur la photo",
      lola: "hors de la photo"
    },
    traits: {
      olivia: "C'est la premiere chienne sur la photo, calme et prete pour l'objectif",
      bruno: "C'est le deuxieme chien sur la photo, juste derriere Olivia",
      lola: "Elle est un peu plus petite qu'Olivia et Bruno, avec son propre rythme"
    },
    coats: {
      olivia: "pelage noir",
      bruno: "pelage fonce",
      lola: "compagne senior plus petite"
    }
  }
};

const state = loadState();
let timelineMode = "active";
let currentLanguage = loadLanguage();
let currentTheme = loadTheme();

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
  helpButton: document.querySelector("#helpButton"),
  helpDialog: document.querySelector("#helpDialog"),
  closeHelp: document.querySelector("#closeHelp"),
  languageButtons: document.querySelectorAll("[data-lang]"),
  themeToggle: document.querySelector("#themeToggle"),
  translated: document.querySelectorAll("[data-i18n]"),
  activityOptions: document.querySelectorAll("[data-activity]"),
  timeline: document.querySelector("#timeline")
};

function loadState() {
  const fallback = { activePet: "olivia", logs: [...seedLogs] };

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

function loadLanguage() {
  const stored = localStorage.getItem(languageKey);
  return translations[stored] ? stored : "en";
}

function loadTheme() {
  const stored = localStorage.getItem(themeKey);
  return stored === "dark" ? "dark" : "light";
}

function t(key) {
  return translations[currentLanguage][key] ?? translations.en[key] ?? key;
}

function formatTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function translateActivity(type) {
  return t("activities")[type] ?? type;
}

function applyLanguage() {
  elements.translated.forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  elements.activityOptions.forEach((option) => {
    option.textContent = translateActivity(option.dataset.activity);
  });

  elements.note.placeholder = t("notePlaceholder");
  elements.helpButton.title = t("tutorialTitle");
  elements.closeHelp.title = t("closeHelp");
  elements.languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyTheme() {
  const isDark = currentTheme === "dark";
  document.documentElement.dataset.theme = currentTheme;
  elements.themeToggle.setAttribute("aria-pressed", String(isDark));
  elements.themeToggle.querySelector("span").textContent = isDark ? t("themeLight") : t("themeDark");
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
  const language = translations[currentLanguage];
  const location = language.locations[state.activePet];
  const mood = language.moods[pet.mood] ?? pet.mood.toLowerCase();

  elements.currentSummary.textContent = formatTemplate(t("summary"), {
    name: pet.name,
    mood,
    location,
    trait: language.traits[state.activePet]
  });
  elements.petBadge.textContent = pet.initials;
  elements.petName.textContent = pet.name;
  elements.petContext.textContent = `${pet.species} - ${pet.weight} - ${language.coats[state.activePet]}`;
  elements.mood.textContent = mood;
  elements.energy.textContent = language.energy[pet.energy] ?? pet.energy;
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

    message.textContent = t("emptyTimeline");
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
    title.textContent = `${pet.name} - ${translateActivity(log.type)}`;
    time.textContent = formatTime(log.timestamp);
    note.textContent = log.note;
    tag.className = "tag";
    tag.textContent = formatTemplate(t("intensityTag"), { value: log.intensity });

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
  const note = elements.note.value.trim() || formatTemplate(t("defaultNote"), {
    type: translateActivity(type),
    name: pets[state.activePet].name
  });

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
  state.activePet = "olivia";
  state.logs = [...seedLogs];
  timelineMode = "active";
  saveState();
  setTimelineMode("active");
  render();
}

function openHelp() {
  if (typeof elements.helpDialog.showModal === "function") {
    elements.helpDialog.showModal();
    return;
  }

  elements.helpDialog.setAttribute("open", "");
}

function closeHelp() {
  elements.helpDialog.close();
}

function setLanguage(nextLanguage) {
  if (!translations[nextLanguage]) {
    return;
  }

  currentLanguage = nextLanguage;
  localStorage.setItem(languageKey, currentLanguage);
  render();
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem(themeKey, currentTheme);
  applyTheme();
}

function render() {
  applyLanguage();
  applyTheme();
  renderPetSwitcher();
  renderStatus();
  renderTimeline();
}

elements.form.addEventListener("submit", addLog);
elements.showActive.addEventListener("click", () => setTimelineMode("active"));
elements.showAll.addEventListener("click", () => setTimelineMode("all"));
elements.reset.addEventListener("click", resetData);
elements.helpButton.addEventListener("click", openHelp);
elements.closeHelp.addEventListener("click", closeHelp);
elements.helpDialog.addEventListener("click", (event) => {
  if (event.target === elements.helpDialog) {
    closeHelp();
  }
});
elements.languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
elements.themeToggle.addEventListener("click", toggleTheme);

render();
