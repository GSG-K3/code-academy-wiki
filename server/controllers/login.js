const query = require('../queries/getUserinfo');
exports.checkvalidation = (req, res) => {
  query(req.parmas.id)
    .then((data) => {
      if (data.length != 0) {
        res.json(data);
      } else {
        res.status(404).json({ message: ' User not found 404' });
      }
    })
    .catch(() => res.status(500).json({ err: 'Error for get User' }));
};
