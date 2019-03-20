let teamA = [6.3, 5.9, 6.2, 6.4, 6, 6.4, 6, 6.3, 6.3, 5.11, 5.11];
let teamB = [6.4, 5.9, 6.1, 6.4, 5.10, 6, 5.9, 5.8, 5.11, 5.9, 5.9];

const canTakePicture = function(oneTeam, anotherTeam) {
  const quickSort = function(arr) {
    if(arr.length < 2) {
      return arr;
    }
    else {
      let pivot = arr[0];
      let less = [];
      let more = [];
      for (let i = 1; i <arr.length; i++) {
        if(arr[i] <= pivot) {
          less.push(arr[i])
        } else if (arr[i] >= pivot) {
          more.push(arr[i]);
        }
      }
      return quickSort(less).concat(pivot).concat(quickSort(more));
    }
  }
  teamA = quickSort(teamA);
  teamB = quickSort(teamB);
  let decider = true;
  for (let i = 0; i < teamA.length; i++) {
    if (teamA[i] <= teamB[i]) {
      decider = false;
    }
  }
  return decider;
}
