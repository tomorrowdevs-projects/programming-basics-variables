/ first 1 human year is equivalent 10.5 dog yaer
// second human year is equivalent 10.5 dog yaer
// from the third humam year in poi are 4 dog yaer

const humanYear = prompt("Write the amount of Human Year")

if (humanYear <=0){
  alert(`Plese Enter a valid Number`);
}else if(humanYear =>2){
   let firstYear = humanYear * 10.5;
   console.log(`${firstYear} Dog Years`);
}else {
  const firstTwoYear = 2 * 10.5;
  const restHumanYear = (humanYear - 2) * 4;
  let dogYear = firstTwoYear + restHumanYear
  console.log(`${dogYear} Dog Years`);
} 
