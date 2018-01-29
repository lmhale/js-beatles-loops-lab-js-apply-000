var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments =["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (arr1,arr2){
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments =["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var empArray = [];
  for(var i = 0;i < musicians.length; i++){
     var inst = instruments[i];
     empArray.push(musicians[i] + ' plays ' + inst);


}
return empArray;
}

function johnLennonFacts (arr) {
var results = [];
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  var i = 0;
  while (i < facts.length){
    results.push(facts[i] + '!!!');
      i++;
}
return results;
}
