let a = 0, b = 1, c;
function fun(num) {
    console.log(a)
    c = a + b
    a = b
    b = c
    if (num > 1) {
        fun(num - 1)
    }
}

fun(7)