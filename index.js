const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(superbowls){
  let win = superbowls.find(superbowl => superbowl.result === "W")
  return win ? win.year : undefined;
}