// Bahir Hakimy's Challange
function gradingStudents(grades) {
  let result = [];
  grades.forEach((g) => {
    if (g > 37) {
      let diffrence_to_next_multiple = 5 - (g % 5);
      if (diffrence_to_next_multiple < 3) {
        result.push(g + diffrence_to_next_multiple);
      } else {
        result.push(g);
      }
    } else {
      result.push(g);
    }
  });
  return result;
}
