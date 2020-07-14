class GameSerializer < ActiveModel::Serializer
    attributes :id, :title, :console, :image
    has_many :reviews
end