const Scores = require('../models/Scores');

module.exports = {
  getRecords: async (req, res) => {
    try {
      const scores = await Scores.find({ user: req.user.id });

      res.render('records.ejs', { tests: scores });
    } catch (err) {
      console.error(err);
    }
  },

  updateRecords: async (req, res) => {
    const MDL = req.body.MDL,
      SPT = req.body.SPT,
      HRP = req.body.HRP,
      SDC = req.body.SDC,
      PLK = req.body.PLK,
      TMR = req.body.TMR;
    try {
      await Scores.findOneAndUpdate(
        {
          _id: req.body.itemIdFromJSFile,
        },
        {
          MDL: MDL,
          SPT: SPT,
          HRP: HRP,
          SDC: SDC,
          PLK: PLK,
          TMR: TMR,
        }
      ).then((result) => {
        console.log(`Score changed`);
        res.json('Score Changed');
      });
    } catch (err) {
      console.error(err);
    }
  },

  deleteRecords: async (req, res) => {
    console.log(req.body.itemIdfromJSFile);
    try {
      await Scores.findOneAndDelete({ _id: req.body.itemIdFromJSFile });
      console.log('Deleted Score');
      res.json('Deleted Score');
    } catch (err) {
      console.error(err);
    }
  },
};
