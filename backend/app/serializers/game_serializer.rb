class GameSerializer < ActiveModel::Serializer

    attributes :id, :title, :console, :image
    has_many :reviews
end

# Serializer will nest the JSON requests without us having to specify it.
# The serializer is implicitly called when calling render json: @game for example