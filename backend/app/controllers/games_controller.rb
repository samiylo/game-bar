class GamesController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]

    def index
        @games = Game.all 

        render json: @games, status: 200
    end

    def show
        @game = Game.find(params[:id])

        render json: @game, status: 200
    end

    def update
        @game = Game.find(params[:id])
        @game.update(game_params)
        render json: @game, status: 200
    end

    def create
        @game = Game.new(game_params)

        render json: @game, status: 200
    end

    def destroy
        @game = Game.find(params[:id])
        @game.delete

        # @game.destroy

        render json: {gameId: @note.id}
    end


    private

    def game_params
        params.require(:game).permit(:title, :console, :image)
    end

    def set_params
        @game = Game.find(params[:id])
    end
end
