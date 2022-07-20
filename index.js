// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

//abdsfdcfqb
let palindirom = (argStr) => {
  let count = {};
  let str = '';
  let dp = 0;
  for (const item of argStr) {
    if (count[item]) {
      if (count[item] == 1) {
        dp--;
      }
      count[item]++;
    } else {
      dp++;
      count[item] = 1;
    }
  }
  let isRmd = false;
  let isOdd = false;
  let remove = [];
  Object.keys(count).forEach((item) => {
    if (count[item] == 1) {
      remove.push(item);
    } else if (count[item] % 2 != 0) {
      if (isOdd == false) {
        isOdd = true;

        let text = item;
        let result = text.repeat(count[item]);

        // let res = new Array(4).join(item);
        str += result;
      } else {
        let text = item;
        let result = text.repeat(count[item] - 1);

        // Array(count[item]).join(item);
        str += result;
      }
    } else {
      let text = item;
      let result = text.repeat(count[item]);

      // Array(count[item] + 1).join(item);
      str += result;
    }
  });
  if (remove.length > 0) {
    str += remove[0];
  }
  console.log(str, 'strxx');
  return str;
};

// bbddsffcq
// abdsfdcfqb
let time = new Date().getTime();

function createPalindrome0(st) {
  // st = palindirom(st);
  let strCount = {};
  let strCount2 = {};
  for (const item of st) {
    if (strCount[item]) {
      strCount[item]++;
    } else strCount[item] = 1;
  }

  Object.keys(strCount)
    .sort()
    .forEach(function (v, i) {
      strCount2[v] = strCount[v];
    });

  let left = '';
  let right = '';
  let center = '';
  let isCenter = false;
  let rev = Object.keys(strCount2).reverse();
  rev.forEach((item, index) => {
    console.log(item);

    let dv = 2;
    console.log(item, 'itemitemitemitemitemitemitemitemitemitemitemitem');
    if (strCount[item] > 1) {
      if (!isCenter && strCount[item] % 2 != 0) {
        center = item;
        strCount[item]--;
      }

      dv = strCount[item] / 2;
      let text = item;
      let result = text.repeat(dv);

      left += result;
      // left += Array(dv + 1).join(item);
      right += result;
    } else if (strCount[item] == 1) {
      center = item;
    }
  });
  left = left.split('').sort().join('');
  right = right.split('').sort().join('');
  let ans = left + center + Array.from(right).reverse().join('');
  return ans;
}
function createPalindrome(st) {
  // st = palindirom(st);
  let strCount = {};
  let strCount2 = {};
  for (const item of st) {
    if (strCount[item]) {
      strCount[item]++;
    } else strCount[item] = 1;
  }

  Object.keys(strCount)
    .sort()
    .forEach(function (v, i) {
      strCount2[v] = strCount[v];
    });

  let left = '';
  let right = '';
  let center2 = '';
  let center = '';
  let isCenter = false;
  let rev = Object.keys(strCount2).reverse();

  rev.forEach((item, index) => {
    console.log(item, 'item');

    let dv = 2;
    if (strCount[item] > 1) {
      if (!isCenter && strCount[item] % 2 != 0) {
        if (!center2) {
          center2 = item;
          center = item;
        }
        strCount[item]--;
        console.log(center, 'center2');
      }

      dv = strCount[item] / 2;
      let text = item;
      let result = text.repeat(dv);

      left += result;
      // left += Array(dv + 1).join(item);
      right += result;
    } else if (strCount[item] == 1) {
      center = item;
    }
  });
  left = left.split('').sort().join('');
  right = right.split('').sort().join('');

  console.log(center, 'center');
  // center = center ? center : center2;
  let ans = left + center + Array.from(right).reverse().join('');
  return ans;
}

function isPalindrome(st) {
  let reverse = '';
  for (let i = st.length - 1; i >= 0; i--) {
    reverse += st[i];
  }

  return reverse === st;
}

function createPalindrome3(st) {
  // st = palindirom(st);
  let strCount = {};
  let strCount2 = {};
  for (const item of st) {
    if (strCount[item]) {
      strCount[item]++;
    } else strCount[item] = 1;
  }

  // Object.keys(strCount)
  //   .sort()
  //   .forEach(function (v, i) {
  //     strCount2[v] = strCount[v];
  //   });
  strCount2 = strCount;
  let left = '';
  let right = '';
  let center = '';
  let center2 = '';
  let isCenter = false;
  let rev = Object.keys(strCount2);
  rev.forEach((item, index) => {
    let dv = 2;
    if (strCount[item] > 1) {
      if (!isCenter && strCount[item] % 2 != 0) {
        console.log(item, 'center2x');
        if (!center2) {
          center2 = item;
        }
        center = item;
        strCount[item]--;
      }

      dv = strCount[item] / 2;
      let text = item;
      let result = text.repeat(dv);

      left += result;
      // left += Array(dv + 1).join(item);
      right += result;
    } else if (strCount[item] == 1) {
      center = item;
    }
  });
  left = left.split('').sort().join('');
  right = right.split('').sort().join('');
  console.log(left[left.length - 1], center2, 'centerd', center);

  if (left[left.length - 1] == center2) {
    center = center2;
  } else if (left[left.length - 1] !== center2) {
    center = center;
  } else {
    center = center2 ? center2 : center;
  }
  let ans = left + center + Array.from(right).reverse().join('');
  return ans;
}

// aaaabbbccc
// ddeeccc

// 2
// awwzaigvxuikdqlvshspsvyckttwdzqmarpxglwmpob
// dtisfxyobndu
// Your Output (stdout)
// addgiklmpqstvwwxzazxwwvtsqpmlkigdda
// Expected Output

// Download
// abddgiklmpqstvwwxzzxwwvtsqpmlkigddba

// 3
// Input (stdin)

// Run as Custom Input
// |
// Download
// mgbgikhvjyiigxhsrgekjmjkrs
// cikmqfxpcybzyhbdrhudjmsoaqdurgjsnjlqogrkcmdtxbyazfxvbprimbcblpnriyvndntmpvjun
// Your Output (stdout)
// abbbccddfggghhiijjjkklmmmnnoppqrrrsstuvxyyzxzyyxvutssrrrqpponnmmmlkkjjjiihhgggfddccbbba
// Expected Output

// Download
// abbbccddfggghhiiijjjkklmmmnnoppqrrrsstuvxyyzzyyxvutssrrrqpponnmmmlkkjjjiiihhgggfddccbbba

// aaaabbbccc
// ddeeccc
// let r1 = createPalindrome3('aaaabbbccc');
// let r2 = createPalindrome3('ddeeccc');
let r1 = createPalindrome3('aaaabbbccc');
let r2 = createPalindrome3('ddeeccc');
// abbbccddfggghhiijjjkklmmmnnoppqrrrsstuvxyyzxzyyxvutssrrrqpponnmmmlkkjjjiihhgggfddccbbba;
// abbbccddfggghhiiijjjkklmmmnnoppqrrrsstuvxyyzzyyxvutssrrrqpponnmmmlkkjjjiiihhgggfddccbbba;
let r3 = createPalindrome(r1 + r2);
console.log('r1', r1);
console.log('r2', r2);
console.log('aabcccdeedcccbaa', r3);
// // console.log('result', createPalindrome('dtisfxyobndu'));
// let co = new Date().getTime() - time;
// console.log(co / 1000 + ' sec');

///
