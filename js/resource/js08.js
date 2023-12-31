
const text = 'apple/kiwi/orange/banana/grape';
const url = 'https://naver.com';
const input = '    abc     ';

console.log('length:', text.length);
console.log('split:', text.split('/'));
console.log('text includes strawberry?', text.includes('strawberry'));
console.log('text includes banana?', text.includes('banana'));

console.log('indexOf \'wi\':', text.indexOf('wi'));

console.log('startsWith:', url.startsWith('ftp://'));
console.log('endsWith:', url.endsWith('.net'));

console.log(url.toUpperCase());
console.log(url.toUpperCase().toLowerCase());

console.log(url.substring(3));
console.log(url.substring(3, 6));
console.log(url.substring(3, undefined));


console.log(`${input} vs ${input.trim()}`);