/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const words = title.split(' ');

  const capitalizedWords = words.map((word) => {
    if (word.length <= 2) {
      return word.toLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  return capitalizedWords.join(' ');
};
