class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :content
    belongs_to :game
end

# The belongs_to will associate the Reaview with the Author so we can do something like @game.review.id