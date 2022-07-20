// palindromic permutations alphabetically
 
class GFG {
 
MAX_CHAR = 26;
 
 
// Function to count frequency
// of each char in the string.
// freq[0] for 'a', ...., freq[25] for 'z'
static void countFreq(char ,freq, n){
                 
    for (let i = 0; i < n; i++)
        freq[str[i] - 'a']++;
}
 
// Cases to check whether a palindromic
// string can be formed or not
static canMakePalindrome
            (freq, n){
                     
    // count_odd to count no of
    // chars with odd frequency
    let count_odd = 0;
     
    for (let i = 0; i < MAX_CHAR; i++)
        if (freq[i] % 2 != 0)
            count_odd++;
 
    // For even length string
    // no odd freq character
    if (n % 2 == 0) {
        if (count_odd > 0)
            return false;
        else
            return true;
    }
 
    // For odd length string
    // one odd freq character
    if (count_odd != 1)
        return false;
 
    return true;
}
 
// Function for odd freq char and
// reducing its freq by 1, returns
// garbage value if odd freq
// char is not present
static  findOddAndRemoveItsFreq(freq)
{
     
    let odd_char = 'a';
 
    for (let i = 0; i < MAX_CHAR; i++)
    {
        if (freq[i] % 2 != 0) {
            freq[i]--;
            odd_char = (char)(i + 'a');
            break;
        }
    }
 
    return odd_char;
}
 
// To find lexicographically
// first palindromic string.
static findPalindromicString
            ( str,  n)
{
     freq = new int[MAX_CHAR] ;
    countFreq(str, freq, n);
 
    // check whether a palindromic
    // string can be formed or not
    // with the characters of 'str'
    if (!canMakePalindrome(freq, n))
        return false;
 
    // Assigning odd freq character if
    // present else some garbage value
     let odd_char =
        findOddAndRemoveItsFreq(freq);
 
    // indexes to store characters
    // from the front and end
    let  front_index = 0,
        rear_index = n - 1;
 
    // Traverse characters
    // in alphabetical order
    for (let i = 0; i < MAX_CHAR; i++)
    {
        if (freq[i] != 0) {
            char ch = (char)(i + 'a');
 
            // store 'ch' to half its frequency
            // times from the front and rear
            // end. Note that odd character is
            // removed by findOddAndRemoveItsFreq()
            for (let j = 1; j <= freq[i] / 2; j++){
                str[front_index++] = ch;
                str[rear_index--] = ch;
            }
        }
    }
 
    // if true then odd frequency char exists
    // store it to its corresponding index
    if (front_index == rear_index)
        str[front_index] = odd_char;
 
    // palindromic string can be formed
    return true;
}
 
// function to reverse the characters
// in the range i to j in 'str'
static void reverse(char[] str, let i, let j)
{
    char temp;
    while (i < j) {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
         
        i++;
        j--;
    }
}
 
// function to find next higher
// palindromic string using the
// same set of characters
static Boolean nextPalin(char[] str, let n)
{
    // if length of 'str' is less
    // than '3' then no higher
    // palindromic string can be formed
    if (n <= 3)
        return false;
 
    // find the index of last character
    // in the 1st half of 'str'
    let mid = n / 2 - 1;
    int i, j;
 
    // Start from the (mid-1)th character
    // and find the first character
    // that is alphabetically smaller
    // than the character next to it.
    for (i = mid - 1; i >= 0; i--)
        if (str[i] < str[i + 1])
            break;
 
    // If no such character is found,
    // then all characters are in
    // descending order (alphabetically)
    // which means there cannot be a
    // higher palindromic string
    // with same set of characters
    if (i < 0)
        return false;
 
    // Find the alphabetically smallest
    // character on right side of ith
    // character which is greater than
    // str[i] up to index 'mid'
    let smallest = i + 1;
    for (j = i + 2; j <= mid; j++)
        if (str[j] > str[i] && str[j]
                     < str[smallest])
            smallest = j;
             
let temp;
 
    // swap str[i] with str[smallest]
    temp = str[i];
    str[i] = str[smallest];
    str[smallest] = temp;
 
    // as the string is a palindrome,
    // the same swap of characters
    // should be performed in the
    // 2nd half of 'str'
    temp = str[n - i - 1];
    str[n - i - 1] = str[n - smallest - 1];
    str[n - smallest - 1] = temp;
         
    // reverse characters in the
    // range (i+1) to mid
    reverse(str, i + 1, mid);
 
    // if n is even, then reverse
    // characters in the range
    // mid+1 to n-i-2
    if (n % 2 == 0)
        reverse(str, mid + 1, n - i - 2);
 
    // else if n is odd, then
    // reverse characters in
    // the range mid+2 to n-i-2
    else
        reverse(str, mid + 2, n - i - 2);
 
    // next alphabetically higher
    // palindromic string can be formed
    return true;
}
 
// function to print all palindromic
// permutations alphabetically
static   printAllPalinPermutations
            (  str,    n) {
             
    // check if lexicographically
    // first palindromic string can
    // be formed or not using the
    // characters of 'str'
    if (!(findPalindromicString(str, n)))
    {
        // cannot be formed
        System.out.print("-1");
        return;
    }
 
    // print all palindromic permutations
    do {
        System.out.println(str);
            break;

    } while (nextPalin(str, n));
}
 
// Driver program
  static   main(  args)
{
     
      str = ("ddbawwzigvxkqlsptmmtpslqkxvgizwwabdd").toCharArray();
      n = str.length;
     
    printAllPalinPermutations(str, n);
}
}
 
// This code is contributed by Gitanjali.
