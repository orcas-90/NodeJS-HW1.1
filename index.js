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
var csvObject = csvjson.toObject(data, options);

var table = new AsciiTable().fromJSON({
  title: 'Calendar',
  heading: [2005, 2006,2007,2008,2009,2010,2011,2012,2013,2014,2015, 'Month', 'Average' ],
  rows: [
    [csvObject[0][2005],csvObject[0][2006],csvObject[0][2007],csvObject[0][2008],csvObject[0][2009],csvObject[0][2010],csvObject[0][2011],csvObject[0][2012],csvObject[0][2013], csvObject[0][2014], csvObject[0][2015], csvObject[0].Month, csvObject[0].Average,],
    [csvObject[1][2005],csvObject[1][2006],csvObject[1][2007],csvObject[1][2008],csvObject[1][2009],csvObject[1][2010],csvObject[1][2011],csvObject[1][2012],csvObject[1][2013], csvObject[1][2014], csvObject[1][2015], csvObject[1].Month, csvObject[1].Average,],
    [csvObject[2][2005],csvObject[2][2006],csvObject[2][2007],csvObject[2][2008],csvObject[2][2009],csvObject[2][2010],csvObject[2][2011],csvObject[2][2012],csvObject[2][2013], csvObject[2][2014], csvObject[2][2015], csvObject[2].Month, csvObject[2].Average,],
    [csvObject[3][2005],csvObject[3][2006],csvObject[3][2007],csvObject[3][2008],csvObject[3][2009],csvObject[3][2010],csvObject[3][2011],csvObject[3][2012],csvObject[3][2013], csvObject[3][2014], csvObject[3][2015], csvObject[3].Month, csvObject[3].Average,],
    [csvObject[4][2005],csvObject[4][2006],csvObject[4][2007],csvObject[4][2008],csvObject[4][2009],csvObject[4][2010],csvObject[4][2011],csvObject[4][2012],csvObject[4][2013], csvObject[4][2014], csvObject[4][2015], csvObject[4].Month, csvObject[4].Average,],
    [csvObject[5][2005],csvObject[5][2006],csvObject[5][2007],csvObject[5][2008],csvObject[5][2009],csvObject[5][2010],csvObject[5][2011],csvObject[5][2012],csvObject[5][2013], csvObject[5][2014], csvObject[5][2015], csvObject[5].Month, csvObject[5].Average,],
    [csvObject[6][2005],csvObject[6][2006],csvObject[6][2007],csvObject[6][2008],csvObject[6][2009],csvObject[6][2010],csvObject[6][2011],csvObject[6][2012],csvObject[6][2013], csvObject[6][2014], csvObject[6][2015], csvObject[6].Month, csvObject[6].Average,],
    [csvObject[7][2005],csvObject[7][2006],csvObject[7][2007],csvObject[7][2008],csvObject[7][2009],csvObject[7][2010],csvObject[7][2011],csvObject[7][2012],csvObject[7][2013], csvObject[7][2014], csvObject[7][2015], csvObject[7].Month, csvObject[7].Average,],
  ]
});
console.log(table.toString());
