const displayData = (content)=>{
    userinput.value += content
}

const clearcalcScreen = ()=>{
    userinput.value = ""
}
const evaluatateExpr = ()=>{
    try{
        userinput.value = eval(user-input.value)
    }catch{
        userinput.value = "Invalid Expression"
    }
}
const removelastCalcItem = ()=>{
    userinput.value = userinput.value.slice(0,-1)
}