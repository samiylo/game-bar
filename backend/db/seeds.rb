# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create Game Seeds
g1 = Game.create(title: "Minecraft", console: "All Consoles", image: "https://cdn.vox-cdn.com/thumbor/5dsDXMRKEkkO33LydtdgP4-xSBo=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15957232/0fe20042_0bb8_4781_82f4_7130f928b021.jpg")
g2 = Game.create(title: "Grant Theft Auto", console: "PC", image: "https://vignette.wikia.nocookie.net/gtawiki/images/7/76/CoverArt-GTAV.png/revision/latest?cb=20130826184215")
g3 = Game.create(title: "CS:GO", console: "PC", image: "https://signalscv.com/wp-content/uploads/2020/02/2-800x800.png")

# Create Reviews Seeds
r1 = Review.create(content: "Minecraft if one of my favorite games. A 10/10", game_id: 1)
r2 = Review.create(content: "GTA 5 is fun to play online with other player. Doing missions is fun.", game_id: 2)
r3 = Review.create(content: "CS:GO is one of my favorite FPS games. It is an old fps, and has a unique take called 'spray patterns'.", game_id: 3)
