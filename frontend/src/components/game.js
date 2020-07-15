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

        // Creates the Game Inso Element Container
        const gameInfo = document.createElement('div')
        gameInfo.className  = 'game-info'
        gameBlock.appendChild(gameInfo)

        this.createInfo(gameInfo)

        // Create the Review Element
        const reviewInfo = document.createElement('div')
        reviewInfo.className = "review-info"
        gameBlock.appendChild(reviewInfo)

        this.infoReview(reviewInfo)

    }

    newReviewForm(e) {
        e.preventDefault();

        const newReviewForm = document.getElementById('new-review-form')
        const submitButton = document.createElement("button")
    }

    // Creates the current Review
    createInfo(gameElement) {
        const title = document.createElement('h3')
        title.setAttribute("class", 'game-title')
        title.innerHTML = this.title
        gameElement.appendChild(title)

        const console = document.createElement('h3')
        console.setAttribute("class", 'game-console')
        console.innerHTML = `Console: ${this.console}`
        gameElement.appendChild(console)
    }

    infoReview(element) {
        const reviewTitle = document.createElement('h4')
        reviewTitle.setAttribute("class", 'review-header')
        reviewTitle.innerHTML = 'What I think:'
        element.appendChild(reviewTitle)

        const reviews = document.createElement('div')
        reviews.setAttribute("id", `review-${this.id}`)
        element.appendChild(reviews)

        // This will map through the games reviews and add to the review elements
        reviews.innerHTML = this.reviews.map(review => this.reviewBody(review)).join('')
    }

    reviewBody(review){
        console.log(review)
        return `<p>${review.content}</p>`
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