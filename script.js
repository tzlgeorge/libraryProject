const url = "https://raw.githubusercontent.com/tzlgeorge/datafiles/main/US%20Incarcerated%20Population%2C%20Per%20Race%2C%20Ethnicity%2C%20and%20Region.csv";
//console.log(getColumn(url,2));

const regions = getColumn(url,1);
const stateTotIncar = getColumn(url,2);
const incarPerK = getColumn(url,20);
const totPop = getColumn(url,11);
const whitePop = getColumn(url,12);
const blackPop = getColumn(url,13);
const nativePop = getColumn(url,14);
const asianPop = getColumn(url,15);
const hpiPop = getColumn(url,16);
const otherPop = getColumn(url,17);
const multiPop = getColumn(url,18);
const hislatPop = getColumn(url,19);



//input the state, returns the state's total incarcertaed.
function getStateIncar(state){
  for (var i in regions){
    if(regions[i] == state){
      return Number(stateTotIncar[i]);
    }
  }
  return 'State not found, check your spelling.';
}

//console.log(getStateIncar('United States')+getStateIncar('Virginia'));

//Takes no input. Returns the list of 53 regions (including United States average) in the order of highest to lowest incarceration rate.
function incarRateRank(){
  var initList = [];
  var finalList = [];
  for(var i in regions){
    initList.push(i);
  }
  var maxRate = Number(incarPerK[0]);
  var spliceLoc = 0;
  for (var j in regions){
    maxRate = Number(incarPerK[initList[0]]);
    spliceLoc = 0;
    for (var i in initList){
      if (Number(incarPerK[initList[i]]) > maxRate){
        maxRate = Number(incarPerK[initList[i]]);
        spliceLoc = i;
      }
    }
    finalList.push(initList[spliceLoc]);
    initList.splice(spliceLoc, 1);
    
  }
  var retList = [];
  
  for (var i in finalList){
    retList.push(regions[finalList[i]]);
  }
  return retList;
}

//console.log(incarRateRank());
/*
var prevRate = Number(incarPerK[19]);
for (var i in regions){
  for (var j in regions){
    if(regions[j] == incarRateRank()[i]){
      console.log(Number(incarPerK[j]) <= prevRate);
      prevRate = incarPerK[j];
    }
  }
}
*/
//console.log(incarRateRank().length);
//console.log(typeof incarRateRank());

//Input two states name string, output the name of the state that has a higher incarceration rate.
function compareIncarRate(state1, state2){
  var index1 = -1;
  var index2 = -1;
  for (var i in regions){
    if (regions[i] == state1){
      index1 = i;
    }
    if (regions[i] == state2){
      index2 = i;
    }
  }
  if(index1 == -1 || index2 == -1){
    return 'State not found, check your spelling and make sure there are two arguments.';
  }
  if(Number(incarPerK[index1]) > Number(incarPerK[index2])){
    return state1;
  }
  else if(Number(incarPerK[index1]) < Number(incarPerK[index2])){
    return state2;
  }
  else{
    return 'equal incarceration rate';
  }
}

//console.log(compareIncarRate());

//Takes a state's name (or "United States") as the argument, and prints out the total population as well as the population distribution of the state. 
function populationDistribution(state){
  for (var i in regions){
    if (regions[i] == state){
      var retStr = `Total Population in ${state}: ${totPop[i]}\nPercentage of white adults: ${100*Number(whitePop[i])/Number(totPop[i])}%\nPercentage of black or African American adults: ${100*Number(blackPop[i])/Number(totPop[i])}%\nPercentage of American Indian and Alaska Native adults: ${100*Number(nativePop[i])/Number(totPop[i])}%\nPercentage of Asian adults: ${100*Number(asianPop[i])/Number(totPop[i])}%\nPercentage of Native Hawaiian and other Pacific Islander adults: ${100*Number(hpiPop[i])/Number(totPop[i])}%/nPercentage of some other race adults: ${100*Number(otherPop[i])/Number(totPop[i])}%Percentage of adults of two or more races: ${100*Number(multiPop[i])/Number(totPop[i])}%Percentage of Hispanic or Latino adults: ${100*Number(hislatPop[i])/Number(totPop[i])}%`
      return retStr;
    }
  }
  return 'State not found, check your spelling.';
}

//console.log(populationDistribution('Puerto Rico'));


function populationRank(){
  var initList = [];
  var finalList = [];
  for(var i in regions){
    initList.push(i);
  }
  var maxPop = Number(totPop[0]);
  var spliceLoc = 0;
  for (var j in regions){
    maxPop = Number(totPop[initList[0]]);
    spliceLoc = 0;
    for (var i in initList){
      if (Number(totPop[initList[i]]) > maxPop){
        maxPop = Number(totPop[initList[i]]);
        spliceLoc = i;
      }
    }
    finalList.push(initList[spliceLoc]);
    initList.splice(spliceLoc, 1);
    
  }
  var retList = [];
  for (var i in finalList){
    retList.push(regions[finalList[i]]);
  }
  retList.splice(0,1);
  return retList;
}


//console.log(populationRank());
/*
var prevPop = Number(totPop[5]);
for (var i in populationRank()){
  for (var j in regions){
    if(regions[j] == populationRank()[i]){
      console.log(prevPop >= Number(totPop[j]));
      prevPop = totPop[j];
    }
  }
}
*/
//console.log(populationRank().length);
/*
for (var i in populationRank()){
  console.log(typeof populationRank()[i]);
}
*/
//--------------------------------------------------------------------------------------------------------------------------


function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
