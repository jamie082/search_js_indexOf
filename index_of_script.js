const str = "10, 11, 3, 20, 5";
let count = 0;
let position = str.indexOf("1");

while (position !== -1) {
    count++;
    position = str.indexOf("1", position + 1);
}

console.log(count); // 4