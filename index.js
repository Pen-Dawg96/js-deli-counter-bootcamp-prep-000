<<<<<<< HEAD
var line = [];
function takeANumber(line, name){
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
  if(!line.length){
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${line.shift()}.`
}
function currentLine(line){
  if(!line.length){
=======
var katzDeliLine = [];
function takeANumber(line, name){
 katzDeliLine.push(name)
 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(line){
  if(!katzDeliLine.length){
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${line.shift}.`
}
function currentLine(line){
  if(!katzDeliLine.length){
>>>>>>> ad703175deee6d2350da04f5b176d268dc2dc649
    return 'The line is currently empty.'
  }
  
  const numbersAndNames = []
<<<<<<< HEAD
    for( let i = 0, l = line.length; i < l; i++){
    numbersAndNames.push(`${i+1}. ${line[i]}`) 
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
=======
  for( let i = 0, l = line.length; i < l; i++)
  numbersAndNames.push(`${i+1}. ${line[i]}.`)
  return `The line is currently ${numberAndNames.join(', ')}`
>>>>>>> ad703175deee6d2350da04f5b176d268dc2dc649
}