const Scores = require('../models/Scores');

module.exports = {
  getRecords: async (req, res) => {
    console.log('getting records');
    try {
      const scores = await Scores.find();

      res.render('records.ejs', { tests: scores });
    } catch (err) {
      console.error(err);
    }
  },
};
