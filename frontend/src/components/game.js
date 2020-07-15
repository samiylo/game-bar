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

        deleteButton.addEventListener('click', () => {
            gameBlock.remove()
            this.deleteGame(`${this.id}`)
        })

        const reviewButton = document.createElement("BUTTON")
        reviewButton.setAttribute("id", `review-button-${this.id}`)
        reviewButton.setAttribute("onclick", "openForm()")
        reviewButton.innerHTML = "Add Game Review"
        gameBlock.appendChild(reviewButton)

        reviewButton.addEventListener('click', this.newReviewForm.bind(this))

        const image = document.createElement('img')
        image.setAttribute("class", "image")
        image.src = this.image
        gameBlock.appendChild(image)

    }

    newReviewForm(e) {

    }

    deleteGame(id){
        console.log(id)
        return fetch('http://localhost:3000/games' + '/' + id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        })
    }
}