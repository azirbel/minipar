import Ember from 'ember';
import Transactions from '../models/transactions';

export default Ember.Controller.extend({
  transactions: function() {
    return Transactions;
  }.property(),

  columns: function() {
    var dateColumn = Ember.Table.ColumnDefinition.create({
      savedWidth: 80,
      headerCellName: 'Date',
      getCellContent: function(row) {
        return row.get('date').toLocaleDateString();
      }
    });
    var descriptionColumn = Ember.Table.ColumnDefinition.create({
      savedWidth: 150,
      canAutoResize: true,
      headerCellName: 'Description',
      contentPath: 'description'
    });
    var categoryColumn = Ember.Table.ColumnDefinition.create({
      savedWidth: 120,
      headerCellName: 'Category',
      contentPath: 'category'
    });
    var amountColumn = Ember.Table.ColumnDefinition.create({
      savedWidth: 90,
      headerCellName: 'Amount',
      contentPath: 'amount'
    });
    return [dateColumn, descriptionColumn, categoryColumn, amountColumn];
  }.property(),
});
