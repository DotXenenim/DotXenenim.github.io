let number = 22
let index = 0
while (number < 0) {
    index += 1
    if (index%3 == 0) {
        console.log(0)
    } else {
        console.log(number)
    }
    number -= 2;
}
