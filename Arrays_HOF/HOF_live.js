// #region map 

/*----------  Using loops  ----------*/

let randomNum = [];
for (let i = 0; i < 100; i++) {
    randomNum.push(Math.floor(Math.random() * 100));
}

[...Array(100)].forEach(_ => randomNum.push(Math.floor(Math.random() * 100)));

console.log(randomNum.length)
randomNum


/*----------  Using .map()  ----------*/

const anotherRandNum = [...Array(100)].map(_ => Math.floor(Math.random() * 100));
anotherRandNum

// #endregion

// #region every

/*----------  Using loops  ----------*/
function checkAllNums(nums) {
    for (const num of nums) {
        if (typeof num !== 'number') {
            return false;
        }
    }

    return true;
}

// Check works for all numbers
const allNums = checkAllNums(randomNum);
allNums

// Check for one non-number
randomNum[0] = 'string';
randomNum
const allNums2 = checkAllNums(randomNum);
allNums2

/*----------  Using .every()  ----------*/

// Check works for all numbers
const allNums3 = anotherRandNum.every(num => typeof num === 'number');
allNums3

// Check for one non-number
anotherRandNum[0] = 'string';
const allNums4 = anotherRandNum.every(num => typeof num === 'number');
allNums4

// #endregion

// #region some

/*----------  Using loops  ----------*/
const randNum3 = [...Array(100)].map(_ => Math.floor(Math.random() * 100));

function anyLessThanTen(nums) {
    for (const num of nums) {
        if (num < 10) {
            return true;
        }
    }

    return false;
}

const someLow = anyLessThanTen(randNum3);
someLow

// Check for no value below 10
const randNum4 = [...Array(100)].map(_ => Math.floor(10 + Math.random() * 100));
const nonLow = anyLessThanTen(randNum4)
nonLow

/*----------  Using .some()  ----------*/
const randNum5 = [...Array(100)].map(_ => Math.floor(Math.random() * 100));
const someLow2 = randNum5.some(num => num < 10);
someLow

// Check for no value below 10
const randNum6 = [...Array(100)].map(_ => Math.floor(10 + Math.random() * 100));
const nonLow2 = randNum6.some(num => num < 10);
nonLow2

// #endregion

// #region filter

let searchTerms = [
    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
    'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief',
    'Business', 'Camus', 'Cervantes', 'Christie', 'Classics',
    'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai',
    'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing',
    'Dumas', 'Education', 'Everything', 'Fantasy', 'Film',
    'Finance', 'First', 'Fitness', 'Football', 'Future',
    'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo',
    'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri',
    'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage',
    'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
    'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming',
    'React', 'Redux', 'River', 'Robotics', 'Rowling',
    'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
    'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
    'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
];

/*----------  Using loops  ----------*/
function filterAs(list) {
    let found = [];

    for (const item of list) {
        if (/^a/i.test(item)) {
            found.push(item);
        }
    }

    return found;
}

const allAs = filterAs(searchTerms);
allAs

/*----------  Using .filter()  ----------*/
const allAs2 = searchTerms.filter(item => /^a/i.test(item));
allAs2

// #endregion

// #region find

/*----------  Using loops  ----------*/
function findTerm(query, list) {

    for (const item of list) {
        if (item.toLowerCase() === query.toLowerCase()) {
            return item;
        }
    }

    return undefined;
}

const search1 = findTerm('money', searchTerms);
search1

const search2 = findTerm('not in there', searchTerms);
search2

/*----------  Usign .find()  ----------*/
let query = { term: 'money' };

// arrow
const search3 = searchTerms.find(item => item.toLowerCase() === 'money'.toLowerCase());
search3

// thisArg - Cannot use arrows
const search4 = searchTerms.find(function (item) { return item.toLocaleLowerCase() === this.term.toLowerCase() }, query);
search4

// Passing function
function findTerm2(item) {
    return item.toLowerCase() === this.term.toLowerCase();
}

const search5 = searchTerms.find(findTerm2, query);
search5

// #endregion

// #region forEach

/*----------  Using loops  ----------*/
let count = [...Array(10)].map((_, i) => i + 1);
count

for (let i = 0; i < count.length; i++) {
    console.log(count[i]);
}
count

/*----------  Using .forEach()  ----------*/
// Inline
count.forEach(item => console.log(item));

// Passing functions
function log(item) {
    console.log(item);
}

count.forEach(log);

// Using this
function logThis(_, index) {
    console.log(this[index])
}

count.forEach(logThis, count);

let count2 = [...Array(10)].map((_, i) => i * 2);
count2.forEach(logThis, count2);

// #endregion

// #region reduce

/*----------  Using loops  ----------*/
const cost = [...Array(10)].map((_, i) => i + 1);
cost

function sum(values) {
    let sum = 0;

    for (const value of values) {
        sum += value;
    }

    return sum;
}

const total = sum(cost);
total

/*----------  Using .reduce()  ----------*/
// Sum
const total2 = cost.reduce((acc, value) => acc + value);
total2

// Initial value - flatten
const multiArr = [
    1,
    [2, 1],
    1,
    [3, 1, 1],
    1,
    1,
    [4, 1, 1, 1, 1]
];

const flattened = multiArr.reduce((acc, value) => acc.concat(value), []);
flattened

// #endregion

// #region sort
const mixedNums = [...Array(5)].map(_ => Math.floor(Math.random() * 100));
mixedNums

/*----------  Using loops  ----------*/
// Bubble sort
function bubbleSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    return nums;
}

const sortedNums = bubbleSort(mixedNums);
sortedNums

// Quick sort
function quickSort(nums) {

    const findPivot = (b, e) => Math.round((b + e) / 2);

    function _quickSort(begin, end){
        let temp;
        let pivot = findPivot(begin, end);

        // swap list[pivot] and list[end]
        temp = nums[pivot];
        nums[pivot] = nums[end];
        nums[end] = temp;

        pivot = end;

        let i = begin, j = end - 1;

        let iterationCompleted = false;
        while (!iterationCompleted)
        {
            while (nums[i] < nums[pivot])
                i++;
            while ((j >= 0) && (nums[pivot] < nums[j]))
                j--;

            if (i < j)
            {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;

                i++;
                j--;
            } else
                iterationCompleted = true;
        }

        temp = nums[i];
        nums[i] = nums[pivot];
        nums[pivot] = temp;

        if (begin < i - 1) {
            _quickSort(begin, i - 1);
        }
            
        if (i + 1 < end) {
            _quickSort(i + 1, end);
        }
            
            
    } 

    _quickSort(0, nums.length -1);

    return nums;
}

const sortedNums2 =  quickSort(mixedNums)
sortedNums2

/*----------  Using .sort()  ----------*/
const sortedNums3 = mixedNums.sort((a, b) => a-b);
sortedNums3

const sortedNums4 = mixedNums.sort((a, b) => b-a)
sortedNums4

const revTerms = searchTerms.sort((a,b) => b.localeCompare(a));
revTerms

// #endregion
