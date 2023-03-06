function calculateRectangleArea(length, width) {
  let area = length * width;
  return length < 0 || width < 0 ? undefined : area;
}

function calculateTriangleArea(base, height) {
  let area = base * (height/2);
  return height < 0 || base < 0 ? undefined : area;
}

function calculateCircleArea(radius) {
  let area = (Math.PI)*(radius*radius);
  return radius < 0 ? undefined : area;
}