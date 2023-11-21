// Write a program to compute the frequency of the words from the input.The output should output after sorting the key alphanumerically.

// Suppose the following input is supplied to the program:

// New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.
// Then, the output should be:

// 2:2
// 3.:1
// 3?:1
// New:1
// Python:5
// Read:1
// and:1
// between:1
// choosing:1
// or:2
// to:1
function wordFrequency(inputStr) {
    const words = inputStr.split(/\s+/);
    const wordCount = {};

    words.forEach(word => {
        // Remove punctuation characters
        word = word.replace(/[.,?:;!"']/g, '');
        // Convert to lowercase to make the count case-insensitive
        word = word.toLowerCase();

        if (word.trim() !== '') {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });

    const sortedWordCount = Object.entries(wordCount).sort();

    sortedWordCount.forEach(([word, frequency]) => {
        console.log(`${word}:${frequency}`);
    });
}

const inputText = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.";
wordFrequency(inputText);
