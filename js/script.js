function getTriangleArea (a, h) {
  if ((a > 0 ) && (h > 0)) {
    return (a*h/2);
  }
    return ("Podales nieprawidlowe dane");
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(-9, 15);
var triangle2Area = getTriangleArea(4,5);

var a = prompt('Podaj bok trójkąta');
var h = prompt('Podaj wysokość trójkąta');
var triangle3Area = getTriangleArea(a,h);

console.log(triangle1Area);
console.log(triangle2Area);
alert("Pole trójkąta wynosi: " + triangle3Area);
