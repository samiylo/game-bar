class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadGames()
    }

    fetchAndLoadGames() {
        this.adapter.getGames()
        .then(games => {games.forEach(game => this.games.push(new Game(game)))
        })
        .then(() => {
            this.renderGames()
        })
    }

    renderGames() {
        this.games.map(game => game.renderBookElement())
    }
}