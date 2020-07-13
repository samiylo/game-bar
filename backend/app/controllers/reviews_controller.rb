class ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render json: @reviews, status: 200
    end

    def create
        @review = Review.create(review_params)
        render json: @review, status: 200
    end
end

private

def review_params
    params.require(:review).permit(:content, :game_id)
end
