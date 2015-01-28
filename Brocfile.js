/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Addepar Open Source dependencies
app.import(app.bowerDirectory + '/lodash/dist/lodash.js');
app.import(app.bowerDirectory + '/d3/d3.js');
app.import(app.bowerDirectory + '/jquery-ui/ui/jquery-ui.custom.js');
app.import(app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.js');
app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
app.import(app.bowerDirectory + '/antiscroll/antiscroll.js');
app.import('vendor/list-view.js');

// CSS dependencies
app.import(app.bowerDirectory + '/antiscroll/antiscroll.css');
app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');

// Addepar Open Source libraries
app.import(app.bowerDirectory + '/ember-table/dist/ember-table.js');
app.import(app.bowerDirectory + '/ember-widgets/dist/js/ember-widgets.js');
app.import(app.bowerDirectory + '/ember-charts/dist/ember-charts.js');

// Addepar Open Source CSS dependencies
app.import(app.bowerDirectory + '/ember-table/dist/ember-table.css');
app.import(app.bowerDirectory + '/ember-widgets/dist/css/ember-widgets.css');
app.import(app.bowerDirectory + '/ember-charts/dist/ember-charts.css');

// Image dependencies
app.import(app.bowerDirectory + '/ember-widgets/dist/img/select2.png', {
  destDir: 'img'
});
app.import(app.bowerDirectory + '/ember-widgets/dist/img/spinner.gif', {
  destDir: 'img'
});

module.exports = app.toTree();
