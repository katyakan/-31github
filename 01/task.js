var judgeCircle = function (moves) {
  let horizontal = 0;
  let vertical = 0;
  let allmoves = moves.split('');

  for (let i = 0; i < allmoves.length; i++) {
    if (allmoves[i] === 'U') {
      vertical++;
    } else if (allmoves[i] === 'D') {
      vertical--;
    } else if (allmoves[i] === 'L') {
      horizontal++;
    } else if (allmoves[i] === 'R') {
      horizontal--;
    }
  }

  return horizontal === 0 && vertical === 0;
};
