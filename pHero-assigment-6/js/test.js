rabbi = ['rabbi', 'sakil', 'babu'];
for(let i=0; i<rabbi.length; i++){
    console.log(rabbi[i]);
}


let sortByDate = data.sort(function (a, b) {
    var c = new Date(a.published_in);
    var d = new Date(b.published_in);
    return c - d;
});