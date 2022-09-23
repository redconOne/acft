const Scores = require('../models/Scores');

module.exports = {
  getScores: async (req, res) => {
    try {
      const scores = await Scores.find();

      res.render('scores.ejs', { scores: 'score here' });
    } catch (err) {
      console.error(err);
    }
  },

  setScores: async (req, res) => {
    try {
      await Scores.create({
        user: req.user.id,
        MDL: req.body.MDL,
        SPT: req.body.SPT,
        HRP: req.body.HRP,
        SDC: req.body.SDC,
        PLK: req.body.PLK,
        TMR: req.body.TMR,
      });
      console.log('Score has been added!');
      res.json('Score successfully added');
    } catch (err) {
      console.error(err);
    }
  },
};
