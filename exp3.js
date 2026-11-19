const fs = require('fs');

// 1. CREATE a file
fs.writeFileSync('student.txt', 'Hello, I am Juvyansh.');

console.log('File created successfully!');

// 2. READ the file
const data = fs.readFileSync('student.txt', 'utf8');

console.log('File contents:', data);

// 3. UPDATE the file
fs.writeFileSync('student.txt', 'Hello, I am Juvyansh Tyagi.');

console.log('File updated successfully!');

// Read updated content
const updatedData = fs.readFileSync('student.txt', 'utf8');

console.log('Updated contents:', updatedData);

// 4. DELETE the file
fs.unlinkSync('student.txt');

console.log('File deleted successfully!');