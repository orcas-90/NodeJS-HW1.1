const fs = require('fs');
let AsciiTable = require('ascii-table');
let csvjson = require('csvjson');
const path = require('path');
var table = new AsciiTable.factory('Calendar');
let data = fs.readFileSync(path.join(__dirname, 'sample1.csv'), {
  encoding: 'utf8',
});
var options = {
  delimiter: ',', // optional
  quote: '"', // optional
};

let arrayMonth = ['Month'];
let arrayAverage = ['Averrage'];
let arrayFive = ['2005'];
let arraySix = ['2006'];
let arraySeven = ['2007'];
let arrayEight = ['2008'];
let arrayNine = ['2009'];
let arrayTen = ['2010'];
let arrayEleven = ['2011'];
let arrayTwelve = ['2012'];
let arrayThreeth = ['2013'];
let arrayFourth = ['2014'];
let arrayFifth = ['2015'];

let csvObject = csvjson.toObject(data, options);

for (i = 0; i < csvObject.length; i++) {
  arrayMonth.push(csvObject[i].Month);
  arrayAverage.push(csvObject[i].Average);
  arrayFive.push(csvObject[i][2005]);
  arraySix.push(csvObject[i][2006]);
  arraySeven.push(csvObject[i][2007]);
  arrayEight.push(csvObject[i][2008]);
  arrayNine.push(csvObject[i][2009]);
  arrayTen.push(csvObject[i][2010]);
  arrayEleven.push(csvObject[i][2011]);
  arrayTwelve.push(csvObject[i][2012]);
  arrayThreeth.push(csvObject[i][2013]);
  arrayFourth.push(csvObject[i][2014]);
  arrayFifth.push(csvObject[i][2015]);
}

table = new AsciiTable().fromJSON({
  title: 'Calendar',
  rows: [
    arrayFive,
    arraySix,
    arraySeven,
    arrayEight,
    arrayNine,
    arrayTen,
    arrayEleven,
    arrayTwelve,
    arrayThreeth,
    arrayFourth,
    arrayFifth,
    arrayMonth,
    arrayAverage,
  ],
});

console.log(table.toString());
