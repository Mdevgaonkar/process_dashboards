var Promise = require('bluebird');
var config = require('../knexfile');
var knex = require('knex')(config);


/**
 * GET /
 */
exports.index = function (req, res) {
  knex.withSchema('proctracker').select('*').from('proc_updates')
    .then(function (rows) {

      res.render('home', {
        title: 'Dashboard',
        tb_upd_rows: rows
      });
    });
};


exports.getTableData = (req, res) => {
  knex.withSchema('proctracker').select('*').from('proc_updates')
    .then(function (rows) {

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(rows));


      // return _.pluck(rows, 'name');
    })


}