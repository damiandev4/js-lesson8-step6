var hobbies = ["swimming", "chess", "choir", "hiking", "drawing", "volunteering"]
console.log(hobbies.length);
hobbies.push("surfing");
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "yoga", "climbing");
console.log(hobbies);
hobbies.shift ();
hobbies.unshift("knitting");
console.log(hobbies);

var goals = ["geting stronger", "saving", "traveling"];
var allTheThings = hobbies.concat(goals);
console.log(allTheThings);
console.log(allTheThings.indexOf("hiking"));
allTheThings.splice(5, 1);
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});
console.log(plans);
