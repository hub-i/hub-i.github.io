function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const bruce = {
   name: "Bruce"
  };

const madeline = {
     name: "Madeline"
  };

const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
console.log(bruce);

//bind 처리된 후에 this는 변경이 불가능하다.
updateBruce.call(madeline, 1274, "king");
console.log(madeline);
