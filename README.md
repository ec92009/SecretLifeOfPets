# Secret Life of Pets

Secret Life of Pets is a standalone static web app for tracking what pets are up to while the house is quiet. It ships as plain HTML, CSS, and JavaScript with no runtime dependencies or external services.

Live site: `https://ec92009.github.io/SecretLifeOfPets/`

## Features

- Pet profile switcher for Olivia, Bruno, and Lola.
- Current status panel with mood, energy, nap bank, clue score, location, and routine.
- Activity form for adding local timeline entries with type, intensity, and note.
- Active-pet and all-pets timeline filters.
- Local reset control that restores the seeded demo data.
- Top-right utility bar with EN/SP/FR language switching, Light/Dark theme toggle, version badge, and help.
- Hero artwork using the San Francisco skateboard-dogs image in `assets/skateboard-dogs-hero.jpg`.

## Run Locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

If port 8000 is already in use, run the same command with another port:

```bash
python3 -m http.server 8001
```

## Validation

```bash
npm run check
```

The check runs `node --check src/app.js`. There is no build step.

## Deployment

The public GitHub repository is `ec92009/SecretLifeOfPets`. GitHub Pages is enabled from the `main` branch at the repository root, so pushing `main` publishes the static app.

## Project Structure

```text
.
├── AGENTS.md
├── README.md
├── SUMMARY.md
├── index.html
├── package.json
├── assets/
│   ├── pets-apartment.png
│   ├── skateboard-dogs-hero.jpg
│   └── styles.css
└── src/
    └── app.js
```

## Data And Assets

- Activity data is stored locally in the browser under `localStorage` key `secret-life-of-pets:v2`.
- `assets/skateboard-dogs-hero.jpg` is a user-provided hero image showing Olivia in front with Bruno behind her.
- `assets/pets-apartment.png` is original generated bitmap artwork kept in the repo as an alternate project asset. It does not depict or reference franchise characters.
- `SUMMARY.md` records the project handoff summary and current backlog.
