function computeGeometries(r, array1, array2, array3) {
  let area1 = (22 / 7) * r * r;
  let d = 2 * r;
  let p1 = 2 * (22 / 7) * r;
  let a2 = array1[0] * array1[1];
  let p2 = 2 * array1[0] + 2 * array1[1];
  let a3 = array2[0] * array2[1];
  let p3 = 2 * array2[0] + 2 * array2[1];
  var a4 = 0;
  var v4 = (22 / 7) * array3[0] * array3[0] * array3[0] * array3[1];
  return [
    [area1, p1],
    [a2, p2],
    [a3, p3],
    [a4, v4],
  ];
}

let areas = computeGeometries(2, [3, 4], [4, 5], [3, 7]);
console.log(areas);

// function computeGeometries(r, array1, array2, array3) {
//   //     a1 = areaOfCircle(r);
//   //     p1 = circumferenceOfCircle(r);
//   //     a2 = areaOfRectangle(array1);
//   //     p2 = perimeterOfRectangle(array2);
//   //     a3 = areaOfRectangle(array1);
//   //     p3 = perimeterOfRectangle(array2);
//   //     a4 = 0;
//   //     v4 = volumeOfCylinder(array3);

//   //     return [
//   //     [a1, p1],
//   //     [a2, p2],
//   //     [a3, p3],
//   //     [a4, v4],
//   //   ];
//   return [
//     [areaOfCircle(r), circumferenceOfCircle(r)],
//     [areaOfRectangle(array1), perimeterOfRectangle(array2)],
//     [areaOfRectangle(array1), perimeterOfRectangle(array2)],
//     [0, volumeOfCylinder(array3)],
//   ];
// }

// const PI = 22 / 7;

// function areaOfCircle(radius) {
//   return PI * Math.pow(radius, 2);
// }

// function circumferenceOfCircle(radius) {
//   return 2 * Math.PI * radius;
// }

// function areaOfRectangle(arrayX) {
//   return arrayX[0] * arrayX[1];
// }

// function perimeterOfRectangle(arrayY) {
//   return 2 * (arrayY[0] + arrayY[1]);
// }

// function volumeOfCylinder(arrayZ) {
//   return PI * Math.pow(arrayZ[0], 3) * arrayZ[1];
// }

// let areas = computeGeometries(2, [3, 4], [4, 5], [3, 7]);
// console.log(areas);
