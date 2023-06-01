const GameModel = require('../models/gameModel');
const gameController = {
  postGame: async (req, res) => {
    try {
      let { description, gameURL, name } = req.body;
      const game = await GameModel.findOne({
        name: name,
      });

      if (game) res.status(400).json({ message: 'game is realdy exists' });
      const newGame = new GameModel({ description, gameURL, name });
      await newGame.save();
      res.status(201).json({ message: 'created game' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getGameById: async (req, res, next) => {
    try {
      let game = await GameModel.findById(req.params.id);
      if (!game) res.status(400).json({ message: 'game not found' });
      res.status(200).json(game);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getAll: async (req, res, next) => {
    try {
      const result = await GameModel.find({});
      const total = result.length;
      return res.status(200).json({ total, data: result });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  updateGame: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updatedGameInfor = req.body;
      const updatedGame = await GameModel.findByIdAndUpdate(
        id,
        updatedGameInfor,
        {
          new: true,
          runValidators: true,
          context: 'query',
        }
      );

      return res.status(200).json(updatedGame);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
module.exports = gameController;
