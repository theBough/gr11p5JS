let rooms = [];

function fillRooms(){
  rooms = [
    [roomZero, roomOne, roomTwo,startPage],
    [roomThree, roomFour, roomFive]
    ]
}//end fillRooms

let roomZero = function(){
  backColour = "pink"
  w = []
  w.push(new Wall (0,0,300,10,"purple"))
  w.push(new Wall (290,0,10,300,"purple"))
}//end RoomZero
let roomOne = function(){
  w = []
  backColour = "red"
}//end RoomOne
let roomTwo = function(){
  backColour = "purple"
}//end RoomTwo
let roomThree = function(){
  backColour = "brown"
}//end RoomZero
let roomFour = function(){
  backColour = "black"
}//end RoomOne
let roomFive = function(){
  backColour = "grey"
}//end RoomTwo
