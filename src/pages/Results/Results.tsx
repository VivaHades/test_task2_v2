import { FC } from "react"

import styles from "./Results.module.scss"

interface IUserData {
  name: string
  value: number
}

const data: IUserData[] = [
  { name: "Иванов О. В.", value: 10 },
  { name: "Иванов Олег Иваныч", value: 5 },
  { name: "Иванов Илья Петрович", value: 10 },
  { name: "Петров Петр Петрович", value: 15 },
  { name: "Сидоров Сергей Иваныч", value: 10 },
  { name: "Сидоров Иван Иваныч ", value: 10 },
]

let secondNames: any = []
//taking second names from data
for (let item of data) {
  let arr: string[] = item.name.split(" ")
  secondNames.push(arr[0])
}
//deleting duplicates
secondNames = new Set(secondNames)
secondNames = Array.from(secondNames)

//initialising result object

interface IResult {
  [key: string]: number
}

let result: IResult = {}
for (let secondName of secondNames) {
  result[secondName] = 0
}
//adding to result[secondNames[j]] data[i].value if data[i].name starts with secondNames[j]
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < secondNames.length; j++) {
    if (data[i].name.split(" ")[0] === secondNames[j]) {
      result[secondNames[j]] += data[i].value
    }
  }
}

const Results: FC = () => {
  return (
    <div className={`wrapper ${styles.results}`}>
      <div className={`container padding ${styles.results_container}`}>
        {Object.entries(result).map((item) => (
          <b key={item[1]}>
            {item[0]} : {item[1]} <br />
          </b>
        ))}
      </div>
    </div>
  )
}
export default Results
