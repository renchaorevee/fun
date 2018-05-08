const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

function setAsOcean(map, x, y) {
  const l = map[x].substring(0, y);
  const r = map[x].substring(y + 1, map[x].length);
  map[x] = l + 'O' + r;
}

function findOcean(map, x, y) {
  if (x < 0 || map.length < x + 1) {
    // console.log('DEBUG: x is out of bound, $x: ', x);
    return;
  }
  if (y < 0 || map[0].length < y + 1) {
    // console.log('DEBUG: y is out of bound, $y: ', y);
    return;
  }

  if (map[x][y] === 'O' || map[x][y] === 'L') {
    // console.log('DEBUG: x, y is already set, $x: %s, $y: %s', x, y);
    return;
  }

  // console.log('DEBUG: setting x, y as O, $x: %s, $y: %s', x, y);
  setAsOcean(map, x, y);

  // Loop through 4 directions:
  directions.forEach(direction => {
    const newX = x + direction[0];
    const newY = y + direction[1];
    findOcean(map, newX, newY);
  });
}

module.exports.findOcean = findOcean;
