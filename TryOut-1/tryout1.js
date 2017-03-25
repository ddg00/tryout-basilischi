if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// get file using fs and initiate filename by get file name from commandline
const fs = require('fs')
const filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
  //throw err
  if (err) throw err;
  //inisiate vars
  const text = data; //assign string from file to variable text
  const words = text.match(/\w+/g); //make array base on regex
  let numbers = []; //array of numbers
  let uniqWords = 0; //count for uniqWords

  //start to cuunt
  const counts = words.reduce(function ( stats, word ) {

    if ( stats.hasOwnProperty( word ) ) {
        stats[ word ] = stats[ word ] + 1;
        uniqWords--;
    } else {
        stats[ word ] = 1;
        uniqWords++;
    }

    //check and count if word equal number
    if(!isNaN(word)){
      numbers.push(Number(word)); // push number to numbers array
    }

    return stats;

  }, {} );

  //sum numbers
  let totalNumbers = numbers.reduce(function (a, b) {
      return a + b;
  }, 0);

  console.log("Jumlah semua kata: "+ words.length);
  console.log("Jumlah kata yang unik: "+ uniqWords);
  console.log("Jumlah kata yang unik dan jumlahnya masing-masing: ");
  console.log(counts);
  console.log("Ada "+numbers.length+" angka: "+numbers.join());
  console.log("Jumlah semua angka: "+totalNumbers);
});
