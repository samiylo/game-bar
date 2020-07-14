class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadGames()
    }

    fetchAndLoadGames() {
        this.adapter.getGames()
        .then(games => {games.forEach(game => this.games.push(game))
        })
        .then(() => {
            this.renderGames()
        })
    }

    renderGames() {
        console.log(this.games)
        // this.games.map(game => game.renderBookElement())
    }
}