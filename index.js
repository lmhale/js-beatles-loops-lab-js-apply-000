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
