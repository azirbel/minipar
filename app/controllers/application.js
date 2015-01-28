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

  categories: function() {
    return _.uniq(this.get('transactions').map(function(transaction) {
      return transaction.category;
    }));
  }.property('transactions.@each.category'),

  pieData: function() {
    var transactions = this.get('transactions');
    var total;
    return this.get('categories').map(function(category) {
      total = transactions.filter(function(transaction) {
        return transaction.category === category;
      }).reduce(function(a, b) {
        return a + (parseFloat(b.amount) || 0);
      }, 0);
      return {
        'label': category,
        'value': total
      };
    });
  }.property('transactions.@each.{category,amount}', 'categories'),
});
