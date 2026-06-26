Before starting work, also read parent instruction file `~/Dev/AGENTS.md` if it exists, then apply this repo file last.

# AGENTS.md

Project-level working preferences for `/Users/ecohen/Dev/SecretLifeOfPets`.

## Project Shape

- This is a standalone static web app.
- Keep it self-contained unless the user asks for a build system or external services.
- Do not add this project to the Webapps hub unless explicitly requested.

## Local Preview

- From this project root, run `python3 -m http.server 8000`.
- Open `http://localhost:8000/`.

## Editing Preferences

- Prefer small, direct edits.
- Keep generated or borrowed assets documented in `README.md`.
- Keep runtime code dependency-free unless a feature clearly needs a package.
