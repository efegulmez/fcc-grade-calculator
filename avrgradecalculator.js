/**
 * Calculates the average of an array of scores.
 * @param {number[]} scores - An array of numeric scores.
 * @returns {number} The average score.
 */

/**
 * Determines the letter grade for a given score.
 * @param {number} score - The numeric score to grade.
 * @returns {string} The letter grade ("A++", "A", "B", "C", "D", or "F").
 */

/**
 * Checks if a given score is a passing grade.
 * @param {number} score - The numeric score to check.
 * @returns {boolean} True if the grade is passing (not "F"), otherwise false.
 */

/**
 * Generates a message for a student based on class average and their score.
 * @param {number[]} totalScores - Array of all students' scores in the class.
 * @param {number} studentScore - The individual student's score.
 * @returns {string} A message indicating the class average, the student's grade, and whether they passed or failed.
 */
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  if (getAverage(totalScores) > studentScore) {
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
  } else {
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

