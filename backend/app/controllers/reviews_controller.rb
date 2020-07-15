class ReviewsController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]
    
    def index
        @reviews = Review.all
        render json: @reviews, status: 200
    end

    def create
        @review = Review.create(review_params)
        render json: @review, status: 200
    end


    private

    def review_params
        params.require(:review).permit(:content, :game_id)
    end

    def set_params
        @review = Review.find(params[:id])
    end

end
