class Game {
    constructor(gameJSON) {
        this.id = gameJSON.id
        this.title = gameJSON.title
        this.console = gameJSON.console
        this.image = gameJSON.image
        this.reviews = gameJSON.reviews
    }

    renderGameElement() {
        const gamesContainer = document.getElementById('games-container')
        // console.log(gamesContainer)

        const gameBlock = document.createElement('div')
        gameBlock.className = 'game-container'
        gamesContainer.appendChild(gameBlock)

        const deleteButton = document.createElement('BUTTON')
        deleteButton.setAttribute("id", `delete-button-${this.id}`)
        deleteButton.innerHTML = "Delete Game"
        gameBlock.appendChild(deleteButton)

    }
}