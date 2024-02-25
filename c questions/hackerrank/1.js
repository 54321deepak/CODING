// if  hackerrank contain inside a substring return true

const ha = (s) => {
    let hackerrank = "hackerrank";
    let index = 0;

    for (i = 0; i < s.length; i++) {
        if (s[i] == hackerrank[index]) { index++ }
        if (index == hackerrank.length) { return "YES" }
    }

    return "NO";
}

console.log(ha("fsahaackeradwcrankaf"))