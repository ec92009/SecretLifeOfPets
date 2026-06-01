# Secret Life of Pets

A standalone static web app for tracking what pets are up to while the house is quiet. It includes pet profiles, daily status metrics, activity logging, routines, and a local timeline backed by `localStorage`.

## Run Locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Published Site

GitHub Pages URL: `https://ec92009.github.io/SecretLifeOfPets/`

## Project Structure

```text
.
├── AGENTS.md
├── README.md
├── index.html
├── package.json
├── assets/
│   ├── pets-apartment.png
│   └── styles.css
└── src/
    └── app.js
```

## Notes

- No package install is required for the current app.
- `assets/pets-apartment.png` is an original generated bitmap created for this project. It does not depict or reference franchise characters.
- Activity data is stored locally in the browser and can be reset from the app.
