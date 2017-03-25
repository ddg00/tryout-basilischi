
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

const fs = require('fs')
  , filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;

  const text = data;
  const words = text.match(/\w+/g);
  let numbers = [];
  let uniqWords = 0;

  var counts = words.reduce(function ( stats, word ) {

    if ( stats.hasOwnProperty( word ) ) {
        stats[ word ] = stats[ word ] + 1;
        uniqWords--;
    } else {
        stats[ word ] = 1;
        uniqWords++;
    }

    if(!isNaN(word)){
      numbers.push(word);
    }

    return stats;

  }, {} );

  console.log("Jumlah semua kata: "+ words.length);
  console.log("Jumlah kata yang unik: "+ uniqWords);
  console.log("Jumlah kata yang unik dan jumlahnya masing-masing: ");
  console.log(counts);
  console.log(numbers);

});
