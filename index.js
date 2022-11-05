/**
 * Group Array Elements Solution
 * @param {number[]} elements - array of numbers to be grouped
 * @param {number} totalGroups - total groups
 * @returns {Array<Array<number>>} - Grouped array
 */
const groupArrayElements = (elements, totalGroups) => {
  const result = [];

  const numberOfElementsInEachEqualGroup = Math.ceil(elements.length / totalGroups);
  const numberOfEqualGroups = elements.length % totalGroups || totalGroups;

  let trackElementIndex = 0;

  // build beginning of equally sized groups
  for (let i = 0; i < numberOfEqualGroups; i++) {
    const group = [];
    for (let j = 0; j < numberOfElementsInEachEqualGroup; j++) {
      group.push(elements[trackElementIndex]);
      trackElementIndex++;
    }
    result.push(group);
  }

  // build last groups with remaining elements
  const remainingGroups = totalGroups - numberOfEqualGroups;
  const remainingElements = elements.length - numberOfEqualGroups * numberOfElementsInEachEqualGroup;
  const remainingElementsInEachGroup = remainingElements / remainingGroups;
  for (let i = 0; i < remainingGroups; i++) {
    const group = [];
    for (let j = 0; j < remainingElementsInEachGroup; j++) {
      group.push(elements[trackElementIndex]);
      trackElementIndex++;
    }
    result.push(group);
  }

  return result;
};

module.exports = { groupArrayElements };
