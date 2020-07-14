class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadGames()
    }

    fetchAndLoadGames() {
        this.adapter.getGames()
        .then(games => {console.log(games)})
    }
}