/*=============================================
=              Populating an Array            =
=============================================*/

/*----------  Using loops  ----------*/
let randomNum = [];

for (let i = 0; i < 100; i++) {
    randomNum.push(Math.floor(Math.random() * 100));
}


/*----------  Using .map()  ----------*/




/*=============================================
=          Checking data - absolute           =
=============================================*/

/*----------  Using loops  ----------*/
function checkAllNums(nums) {
    for (const num of nums) {
        if (typeof num !== 'number') {
            return false;
        }
    }

    return true;
}

/*----------  Using .every()  ----------*/



/*=============================================
=         Checking data - contains            =
=============================================*/

/*----------  Using loops  ----------*/
function anyLessThanTen(nums) {
    for (const num of nums) {
        if (num < 10) {
            return true;
        }
    }

    return false;
}

/*----------  Using .some()  ----------*/


/*=============================================
=                   Filter data               =
=============================================*/

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

/*----------  Using .filter()  ----------*/


/*=============================================
=                   Find data                 =
=============================================*/

/*----------  Using loops  ----------*/
function findTerm(query, list) {

    for (const item of list) {
        if (item.toLowerCase() === query.toLowerCase()) {
            return item;
        }
    }

    return undefined;
}

/*----------  Using .find()  ----------*/


/*=============================================
=                 Repeat operation            =
=============================================*/

/*----------  Using loops  ----------*/

for (let i = 0; i < count.length; i++) {
    count[i] = Math.pow(count[i], 2);
}

/*----------  Using .forEach()  ----------*/


/*=============================================
=            Compute your data            =
=============================================*/

/*----------  Using loops  ----------*/

function sum(values) {
    let sum = 0;

    for (const value of values) {
        sum += value;
    }

    return sum;
}

/*----------  Using .reduce()  ----------*/


/*=============================================
=                     Sort data               =
=============================================*/

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

/*----------  Using .sort()  ----------*/