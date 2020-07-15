
// The adapter talks to the API
class GamesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/games'
    }

    getGames() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }

    createGame(titleValue, consoleValue, imageValue) {
        const game = {
            title: titleValue,
            console: consoleValue,
            image: imageValue
    
        };
        return fetch(this.baseUrl, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(game)
        })
        .then(res => (res.json()))
        .catch(error => console.log("Error: " + error))
    }
}