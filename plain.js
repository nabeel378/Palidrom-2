function splitInput(str) {
  var singles = [],
    doubles = [];
  for (var i in str) {
    var char = str.charAt(i);
    var pos = singles.indexOf(char); // check if already in singles
    if (pos == -1) singles.push(char);
    // add to singles
    else doubles.push(singles.splice(pos, 1)[0]); // move to doubles
  }
  return { singles: singles, doubles: doubles };
}

function generateCombinations(set) {
  var combis = [];
  addChar([], set); // start recursion with empty partial and full set
  return combis;

  function addChar(partial, set) {
    for (var i in set) {
      var setCopy = set.slice();
      var parCopy = partial.concat(setCopy.splice(i, 1)); // add char to partial
      combis.push(parCopy);
      if (setCopy.length) addChar(parCopy, setCopy); // recurse if chars left
    }
  }
}

function generatePalindromes(combis, singles) {
  var palins = singles.slice(); // each single is a palindrome
  for (var i in combis) {
    var pos = combis[i].length;
    var pal = combis[i].concat([' ']); // add space for single
    pal = pal.concat(combis[i].reverse()); // add reverse
    for (var j in singles) {
      pal.splice(pos, 1, singles[j]); // insert single in the middle
      palins.push(pal.join(''));
    }
    pal.splice(pos, 1);
    palins.push(pal.join('')); // remove single
    pal.splice(pos, 1);
    palins.push(pal.join('')); // remove repeated last char
  }
  return palins;
}

function palindromeCombinations(input) {
  var sets = splitInput(input);
  var combis = generateCombinations(sets.doubles);
  return generatePalindromes(combis, sets.singles);
}

console.log(
  palindromeCombinations('awwzaigvxuikdqlvshspsvyckttwdzqmarpxglwmpob')
);
