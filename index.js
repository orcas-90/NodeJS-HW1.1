const fs = require('fs');
var AsciiTable = require('ascii-table');
var csvjson = require('csvjson');
const path = require('path');
var table = new AsciiTable.factory('Calendar');
var data = fs.readFileSync(path.join(__dirname, 'sample1.csv'), {
  encoding: 'utf8',
});
var options = {
  delimiter: ',', // optional
  quote: '"', // optional
};
let rowMonth = '';
let rowAverage = ''
let rowFive =''
let rowSix = ''
let rowSeven = ''
let rowEight = ''
let rowNine = ''
let rowTen = ''
let rowEleven = ''
let rowTwelve = ''
let rowThreeth = ''
let rowFourth = ''
let rowFifth = ''

var csvObject = csvjson.toObject(data, options);

for (i=0; i< csvObject.length; i++) {
    // csvObject[i][2005],csvObject[i][2006],csvObject[i][2007],csvObject[i][2008],csvObject[i][2009],csvObject[i][2010],csvObject[i][2011],csvObject[i][2012],csvObject[i][2013],csvObject[i][2014],csvObject[i][2015],csvObject[i].Month, csvObject[i].Average
    rowMonth = csvObject[i].Month + ' '+ ',' + rowMonth;
    rowAverage = csvObject[i].Average + ' ' + rowAverage;
    rowFive= csvObject[i][2005] + ' ' + rowFive;
    rowSix = csvObject[i][2006] + ' ' + rowSix;
    rowSeven = csvObject[i][2007] + ' ' + rowSeven;
    rowEight = csvObject[i][2008] + ' ' + rowEight;
    rowNine = csvObject[i][2009] + ' ' + rowNine;
    rowTen = csvObject[i][2010] + ' ' + rowTen;
    rowEleven = csvObject[i][2011] + ' ' + rowEleven;
    rowTwelve = csvObject[i][2012] + ' ' + rowTwelve;
    rowThreeth = csvObject[i][2013] + ' ' + rowThreeth;
    rowFourth = csvObject[i][2014] + ' ' + rowFourth;
    rowFifth = csvObject[i][2015] + ' ' + rowFifth;


console.log (rowMonth)
    var table = new AsciiTable()
    table
      .setHeading(2005, 2006,2007,2008,2009,2010,2011,2012,2013,2014,2015, 'Month', 'Average')
      .addRow(rowFive)
      .addRow(rowSix)
      .addRow(rowSeven)
      .addRow(rowEight)
      .addRow(rowNine)
      .addRow(rowTen)
      .addRow(rowEleven)
      .addRow(rowTwelve)
      .addRow(rowThreeth)
      .addRow(rowFourth)
      .addRow(rowFifth)
      .addRow(rowMonth)
      .addRow(rowAverage)

console.log(table.toString())
}
/*var table = new AsciiTable().fromJSON({
  title: 'Calendar',
  heading: [2005, 2006,2007,2008,2009,2010,2011,2012,2013,2014,2015, 'Month', 'Average' ],

  rows:
    [
    [csvObject[i][2005],csvObject[i][2006],csvObject[i][2007],csvObject[i][2008],csvObject[i][2009],csvObject[i][2010],csvObject[i][2011],csvObject[i][2012],csvObject[i][2013], csvObject[i][2014], csvObject[i][2015], csvObject[i].Month, csvObject[i].Average,],

    ]

});

console.log(table.toString());*/

