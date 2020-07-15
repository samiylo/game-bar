class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        this.bindEventListeners()
        this.fetchAndLoadGames()
    }

    bindEventListeners() {
        this.newGameForm = document.getElementById('new-game-form')
        this.newGameTitle = document.getElementById('new-game-title')
        this.newGameConsole = document.getElementById('new-game-console')
        this.newGameImage = document.getElementById('new-game-image')
        this.newGameForm.addEventListener('submit', this.createGame.bind(this))
        
    }

    createGame(e) {
        console.log(this)
        e.preventDefault();
        const titleValue = this.newGameTitle.value
        console.log(titleValue)
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
        })
        .then(() => {
            this.renderGames()
        })
    }

    renderGames() {
        this.games.map(game => game.renderGameElement())
    }
}