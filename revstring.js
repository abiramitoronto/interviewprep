var revString = "god is dog";
function stringName(revString){
  //for (let i=0; i < str.length; i++)
  {
    const strSplit = revString.split(" ");
    console.log("splitstring", strSplit);

    const arrReverse = strSplit.reverse();
    console.log("arrreverse", arrReverse);

    const arrJoin = arrReverse.join(" ");
    console.log("arrjoin", arrJoin);

    
  }
  
}
stringName(revString);