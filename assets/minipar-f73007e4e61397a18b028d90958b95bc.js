define("minipar/app",["exports","ember","ember/resolver","ember/load-initializers","./config/environment"],function(e,t,a,n,o){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var i=t["default"].Application.extend({modulePrefix:o["default"].modulePrefix,podModulePrefix:o["default"].podModulePrefix,Resolver:a["default"]});n["default"](i,o["default"].modulePrefix),t["default"].deprecate=function(){},e["default"]=i}),define("minipar/controllers/application",["exports","ember","../models/transactions"],function(e,t,a){"use strict";e["default"]=t["default"].Controller.extend({transactions:function(){return a["default"]}.property(),columns:function(){var e=t["default"].Table.ColumnDefinition.create({savedWidth:80,textAlign:"text-align-left",headerCellName:"Date",getCellContent:function(e){return e.get("date").toLocaleDateString()}}),a=t["default"].Table.ColumnDefinition.create({savedWidth:150,canAutoResize:!0,headerCellName:"Description",contentPath:"description"}),n=t["default"].Table.ColumnDefinition.create({savedWidth:120,headerCellName:"Category",contentPath:"category"}),o=t["default"].Table.ColumnDefinition.create({savedWidth:90,headerCellName:"Amount",contentPath:"amount"});return[e,a,n,o]}.property(),categories:function(){return _.uniq(this.get("transactions").map(function(e){return e.category}))}.property("transactions"),pieData:function(){var e,t=this.get("transactions");return this.get("categories").map(function(a){return e=t.filter(function(e){return e.category===a}).reduce(function(e,t){return e+(parseFloat(t.amount)||0)},0),{label:a,value:e}})}.property("transactions.@each.{category,amount}","categories"),selectedTransaction:null})}),define("minipar/initializers/export-application-global",["exports","ember","../config/environment"],function(e,t,a){"use strict";function n(e,n){var o=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&(window[o]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("minipar/models/transactions",["exports"],function(e){"use strict";e["default"]=[{date:new Date(2015,0,25),description:"Fiesta Del Mar",category:"Restaurants",amount:"43.15"},{date:new Date(2015,0,24),description:"Safeway",category:"Groceries",amount:"43.23"},{date:new Date(2015,0,23),description:"Chipotle",category:"Restaurants",amount:"10.25"},{date:new Date(2015,0,23),description:"Shalala",category:"Restaurants",amount:"35.34"},{date:new Date(2015,0,10),description:"Starbucks",category:"Restaurants",amount:"9.79"},{date:new Date(2015,0,6),description:"PG&E Monthly",category:"Utilities",amount:"60.2"},{date:new Date(2015,0,4),description:"Check 102",category:"Rent",amount:"600"},{date:new Date(2014,11,23),description:"Safeway",category:"Groceries",amount:"93"},{date:new Date(2014,11,22),description:"Shalala",category:"Restaurants",amount:"18.22"},{date:new Date(2014,11,21),description:"Chipotle",category:"Restaurants",amount:"15.25"},{date:new Date(2014,11,16),description:"Comcast the Devil",category:"Utilities",amount:"30.56"},{date:new Date(2014,11,11),description:"La Boulange",category:"Restaurants",amount:"16.26"},{date:new Date(2014,11,10),description:"Starbucks",category:"Restaurants",amount:"7.79"},{date:new Date(2014,11,8),description:"Whole Foods",category:"Groceries",amount:"16.09"},{date:new Date(2014,11,8),description:"Safeway",category:"Groceries",amount:"56.12"},{date:new Date(2014,11,6),description:"PG&E Monthly",category:"Utilities",amount:"60.2"},{date:new Date(2014,11,4),description:"Check 101",category:"Rent",amount:"600"},{date:new Date(2014,10,23),description:"Safeway",category:"Groceries",amount:"93"},{date:new Date(2014,10,22),description:"Shalala",category:"Restaurants",amount:"50.22"},{date:new Date(2014,10,21),description:"Chipotle",category:"Restaurants",amount:"13.25"},{date:new Date(2014,10,16),description:"Comcast the Devil",category:"Utilities",amount:"30.56"},{date:new Date(2014,10,11),description:"La Boulange",category:"Restaurants",amount:"16.26"},{date:new Date(2014,10,10),description:"Starbucks",category:"Restaurants",amount:"4.79"},{date:new Date(2014,10,8),description:"Whole Foods",category:"Groceries",amount:"16.09"},{date:new Date(2014,10,8),description:"Safeway",category:"Groceries",amount:"56.12"},{date:new Date(2014,10,6),description:"PG&E Monthly",category:"Utilities",amount:"60.2"},{date:new Date(2014,10,4),description:"Check 100",category:"Rent",amount:"600"},{date:new Date(2014,9,23),description:"Safeway",category:"Groceries",amount:"93"},{date:new Date(2014,9,22),description:"Shalala",category:"Restaurants",amount:"45.22"},{date:new Date(2014,9,21),description:"Chipotle",category:"Restaurants",amount:"20.25"},{date:new Date(2014,9,16),description:"Comcast the Devil",category:"Utilities",amount:"30.56"},{date:new Date(2014,9,11),description:"La Boulange",category:"Restaurants",amount:"16.26"},{date:new Date(2014,9,10),description:"Starbucks",category:"Restaurants",amount:"4.79"},{date:new Date(2014,9,10),description:"Chez TJ",category:"Restaurants",amount:"700"},{date:new Date(2014,9,8),description:"Whole Foods",category:"Groceries",amount:"16.09"},{date:new Date(2014,9,8),description:"Safeway",category:"Groceries",amount:"56.12"},{date:new Date(2014,9,6),description:"PG&E Monthly",category:"Utilities",amount:"60.2"},{date:new Date(2014,9,4),description:"Check 99",category:"Rent",amount:"600"}]}),define("minipar/router",["exports","ember","./config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("minipar/templates/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Handlebars.template(function(e,a,n,o,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t["default"].Handlebars.helpers),i=i||{};var r,s,c="",l=n.helperMissing,u=this.escapeExpression;return i.buffer.push('<main>\n  <h1 id="title">Minipar Personal Finance</h1>\n\n  <div class="edit">\n    <!--<div class="plans">Edit</div>-->\n    <h3>Edit Transaction</h3>\n    '),i.buffer.push(u((r=n.input||a&&a.input,s={hash:{"class":"description-input",value:"selectedTransaction.description",placeholder:"Description"},hashTypes:{"class":"STRING",value:"ID",placeholder:"STRING"},hashContexts:{"class":a,value:a,placeholder:a},contexts:[],types:[],data:i},r?r.call(a,s):l.call(a,"input",s)))),i.buffer.push("\n    "),i.buffer.push(u((r=n["select-component"]||a&&a["select-component"],s={hash:{content:"categories",prompt:"Category",selection:"selectedTransaction.category",classNames:"category-select"},hashTypes:{content:"ID",prompt:"STRING",selection:"ID",classNames:"STRING"},hashContexts:{content:a,prompt:a,selection:a,classNames:a},contexts:[],types:[],data:i},r?r.call(a,s):l.call(a,"select-component",s)))),i.buffer.push("\n    "),i.buffer.push(u((r=n.input||a&&a.input,s={hash:{"class":"amount-input",value:"selectedTransaction.amount",placeholder:"Amount"},hashTypes:{"class":"STRING",value:"ID",placeholder:"STRING"},hashContexts:{"class":a,value:a,placeholder:a},contexts:[],types:[],data:i},r?r.call(a,s):l.call(a,"input",s)))),i.buffer.push('\n  </div>\n\n  <div class="chart">\n    <!--<div class="plans">Chart</div>-->\n    '),i.buffer.push(u((r=n["pie-chart"]||a&&a["pie-chart"],s={hash:{data:"pieData"},hashTypes:{data:"ID"},hashContexts:{data:a},contexts:[],types:[],data:i},r?r.call(a,s):l.call(a,"pie-chart",s)))),i.buffer.push('\n  </div>\n\n  <div class="thanks">\n    <p>This little demo is a showcase of\n      <a href="http://addepar.github.io">Addepar Open Source</a>.</p>\n    <p>If you like it, come see what\n      <a href="http://addepar.com">Addepar</a>\'s making!</p>\n  </div>\n\n  <div class="table">\n    <!--<div class="plans">Table</div>-->\n    '),i.buffer.push(u((r=n["table-component"]||a&&a["table-component"],s={hash:{hasFooter:!1,columns:"columns",content:"transactions",selection:"selectedTransaction"},hashTypes:{hasFooter:"BOOLEAN",columns:"ID",content:"ID",selection:"ID"},hashContexts:{hasFooter:a,columns:a,content:a,selection:a},contexts:[],types:[],data:i},r?r.call(a,s):l.call(a,"table-component",s)))),i.buffer.push("\n  </div>\n</main>\n"),c})}),define("minipar/config/environment",["ember"],function(e){var t="minipar";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),o=JSON.parse(unescape(n));return{"default":o}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("minipar/tests/test-helper"):require("minipar/app")["default"].create({});