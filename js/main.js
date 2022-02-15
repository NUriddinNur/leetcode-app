const conditionDescription = document.querySelector(".condition-description")
const conditionHeader = document.querySelector(".condition-header")
const exampleSolution = document.querySelector('#exampleSolution')
const problemsHeader = document.querySelector(".problems-header")
const listExampl = document.querySelector('#list-example')
const resultList = document.querySelector("#result-list")
const problemList = document.querySelector("#problem")
  

let [option] = createElements('option')
option.setAttribute('value', problem.problemCount)
option.textContent = 'Select Problem'
problemList.append(option)

for (let problem of problems) {
    let [option] = createElements('option')
    
    option.setAttribute('value', problem.problemCount)
    option.textContent = "Problem"+problem.problemCount
    problemList.append(option)

}

problemList.addEventListener('change', (event) => {
    exampleSolution.value = ''

    for (let problem of problems) {
        if (+event.target.value === problem.problemCount) {
            conditionHeader.textContent = problem.problemCount+ ' '+problem.condition
            conditionDescription.textContent = problem.definition

            let listExample = ''
            let count = 1
            for (let test of problem.tests) {
                if ( count > 2) break 
                listExample += `
                    <li>
                        <div class="stdio-header">
                            Example ${count++}:
                        </div>
                        <div class="stdio-content">
                        <div class="stdio-code">
                            <span>Input: </span> <code>${test.test}</code>
                        </div>
                        <div class="stdio-code">
                            <span>Output: </span> <code>${test.answer}</code>
                        </div>
                        <div class="stdio-code">
                            <span>Explanation:</span> <code>${test.explanation}</code>
                        </div>
                        </div>
                    </li>
                `
            }
            listExampl.innerHTML = listExample
        }
    }
})


submitBtn.onclick = (event) => {
    event.preventDefault()
    try{

    if(!exampleSolution.value) return
    if(!problemList.value) return

    for (let problem of problems) {
        if (problemList.value == problem.problemCount) {
            let func = new Function('array', `
                ${exampleSolution.value}

                return ${problem.condition}(array)
            `)

            let count = 1
            resultList.textContent = null

            for (let test of problem.tests) {
                if (func(test.test) === test.answer) {
                    let [li, span, i] = createElements("li", "span", "i")
                    li.textContent = `${count++}`+"."
                    span.classList.add("status")
                    span.textContent = "Success"
                    i.classList.add("fas")
                    i.classList.add("fa-check")

                    span.append(i)
                    li.append(span)
                    resultList.append(li)
                }
                else{
                    let [li, span, i] = createElements("li", "span", "i")
                    li.textContent = `${count++}`+"."
                    span.classList.add("status")
                    span.textContent = "Fail"
                    i.classList.add("fas")
                    i.classList.add("fa-times")

                    span.append(i)
                    li.append(span)
                    resultList.append(li)
                }
            }
        }
    }
}catch(error) {
    resultList.textContent = error
}
}

