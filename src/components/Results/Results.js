import React from 'react'
import './Results.scss'
const data = [
  {name: "Иванов О. В.", value: 10 },
  {name: "Иванов Олег Иваныч", value: 5 },
  {name: "Иванов Илья Петрович", value: 10 },
  {name: "Петров Петр Петрович", value: 15 },
  {name: "Сидоров Сергей Иваныч", value: 10 },
  {name: "Сидоров Иван Иваныч ", value: 10 },
];


let secondNames = []
//taking second names from data
for (let item of data) {
  let arr = item.name.split(' ')
  secondNames.push(arr[0])
}
//deleting duplicates
secondNames = new Set(secondNames)
secondNames = Array.from(secondNames)

//initialising result object
let result = {}
for (let secondName of secondNames){
  result[secondName] = 0;
}
//adding to result[secondNames[j]] data[i].value if data[i].name starts with secondNames[j]

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < secondNames.length; j++){
    if (data[i].name.split(' ')[0] === secondNames[j]) {
      result[secondNames[j]] += data[i].value;
    }
  }
}


export default function Results() {
  return (
    <div className="wrapper results">
      <div className="container padding results__container">
      { Object.entries(result).map((item) => <b>{item[0]} : {item[1]} <br /></b>) }
      </div>
    </div>
  )
}
