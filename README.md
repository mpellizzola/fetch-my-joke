# Fetch my joke

App React + Vite + TypeScript che mostra una lista di utenti, un pulsante e una barzelletta.

## Installazione e uso

```bash
yarn
yarn dev
```

Apri `http://localhost:5173/` (o la porta indicata nel terminale).

Altri comandi:

```bash
yarn build    # build di produzione
yarn preview  # anteprima della build
yarn lint     # ESLint
```

## Cosa fa

- **Users** — elenco di utenti (`firstName`, `lastName`, `age`) da `src/users/`
- **SimpleButton** — pulsante stilizzato in `src/simpleButton/`
- **Joke** — barzelletta mostrata da `src/joke/` (al momento da mock, non ancora dalla API)

## API barzellette

`src/Utility.ts` espone l’URL di [JokeAPI](https://v2.jokeapi.dev/) e le categorie selezionabili:

`Any`, `Misc`, `Programming`, `Dark`, `Pun`

Composizione URL: `baseUrl` + categoria + `params` (tipo `single`, con blacklist nsfw/racist/sexist/explicit).
<!-- Decora l'app con un minimo di CSS a piacimento.


DEMO: https://codesandbox.io/p/github/mpellizzola/fetch-my-joke/main -->
