function countChocolates(totalMoney, chocolateCost) {
  
    const money = parseFloat(totalMoney);
    const cost = parseFloat(chocolateCost);
  
    
    if (isNaN(money) || isNaN(cost) || money < 0) {
      return "Invalid Input";
    }
  
    // Calculate the initial number of chocolates Ashi can buy
    let chocolates = Math.floor(money / cost);
  
    // Calculate the number of additional chocolates Ashi can get through wrapper
    let wrapper = chocolates;
    while (wrapper >= 3) {
      const additionalChocolates = Math.floor(wrapper / 3);
      chocolates += additionalChocolates;
      wrapper = additionalChocolates + (wrapper % 3);
    }
  
    return chocolates;
  }
  
  
  console.log(countChocolates("4$", "1$"));
  console.log(countChocolates("55 $", "5$"));
  console.log(countChocolates("68$", "2$"));
  console.log(countChocolates(" -68$", "2$"));