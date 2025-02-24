let categories = ["Any", "Misc", "Programming", "Dark", "Pun"] // Array di categorie selezionabili di barzellette
let baseUrl = "https://v2.jokeapi.dev/joke/" // URL di base delle API
let params = "?type=single&blacklistFlags=nsfw,racist,sexist,explicit" // Parametri da appendere nell'URL
let url = baseUrl + "Programming" + params // URL di default

/**
 * Composizione dell'URL secondo le API:
 * baseUrl + '/nome_categoria/' + params
 */

export {
  url,
  categories,
  baseUrl,
  params
}