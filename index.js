const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(record) {
  let win = record.find(superbowl => superbowl.result === "W")
  return win ? win.year : undefined;
}