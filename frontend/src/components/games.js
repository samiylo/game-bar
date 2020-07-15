class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadGames()
    }

    initBindingsAndEventListeners() {
        this.newGameForm = document.getElementById('new-game-form')
        this.newGameTitle = document.getElementById('new-game-title')
        this.newGameConsole = document.getElementById('new-game-console')
        this.newGameImage = document.getElementById('new-game-image')
        this.newGameForm.addEventListener('submit', this.createGame.bind(this))
        
    }

    createGame(e) {
        e.preventDefault();
        const titleValue = this.newGameTitle.value
        const consoleValue = this.newGameConsole.value
        const imageValue = this.newGameImage.value

        this.adapter.createGame(titleValue, consoleValue, imageValue)
        .then(game => {
            const newGame = new Game(game)
            this.games.push(newGame)
            this.newGameTitle.value = ' '
            this.newGameConsole.value = ' '
            this.newGameImage.value = ' '
            newGame.renderGameElement()
        })
    }

    fetchAndLoadGames() {
        this.adapter.getGames()
        .then(games => {games.forEach(game => this.games.push(new Game(game)))
            console.log(this.games)
        })
        .then(() => {
            this.renderGames()
        })
    }

    renderGames() {
        console.log(this.games)
        // this.games.map(game => game.renderGameElement())

        const gamesContainer = document.getElementById('games-container')
        gamesContainer
    }
}