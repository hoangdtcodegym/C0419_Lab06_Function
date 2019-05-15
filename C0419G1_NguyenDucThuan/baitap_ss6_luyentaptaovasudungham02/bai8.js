let Array=[2,3,55,1,2,3,4,66,777,421];
function example() {
    let lastPositionIndex=Array.length-1;
    let firstPositionIndex=0;
    let newArray=[];

    for (;firstPositionIndex<=lastPositionIndex;firstPositionIndex++) {

        let firstPosition=Array[firstPositionIndex];

        let lastPosition=Array[lastPositionIndex];

        newArray[firstPositionIndex]=lastPosition;
       newArray[lastPositionIndex]=firstPosition;
       lastPositionIndex--;
    }
    return newArray;
}
let x=example();
alert(x);