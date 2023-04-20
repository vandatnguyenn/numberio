const GameModel = require("../models/gameModel");
const gameController = {
  postGame: async (req, res) => {
    try {
      let { description, typeOfGame, gameURL, name } = req.body;
      const game = await GameModel.findOne({
        name: name,
      });
      if (game) res.status(400).json({ message: "game is realdy exists" });
      const newGame = new GameModel({ description, typeOfGame, gameURL, name });
      await newGame.save();
      res.status(200).json({ message: "created game" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getGame: async (req, res) => {
    try {
      let game = await GameModel.findById(req.params.id);
      if (!game) res.status(400).json({ message: "game is not exists" });
      res.status(200).json(game);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
module.exports = gameController;
