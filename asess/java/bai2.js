// bài 2
const number = "1, 2, 3, 4, 5";
function numberOneTriangle(number){
    for( let i = 1; i <= number; i++) {
        for(let j = 1; j <= i; J++){
            document.write("*");
        }
        document.write("*<br />")
    }
}