
function getInputValue(){
    const firstIncome = document.getElementById('income-total');
    const firstTotal = firstIncome.value;
    const firstValue = parseFloat(firstTotal);
    return firstValue;
} 
 
document.getElementById('calculate-btn').addEventListener('click',function(){
    // const firstIncome = document.getElementById('income-total');
    // const firstTotal = firstIncome.value;
    // const firstValue = parseFloat(firstTotal);
    const firstValue = getInputValue();
 
     
    const foodExpense = document.getElementById('food-expense');
    const foodValue = foodExpense.value;
     const foodExpenseAmount = parseFloat(foodValue);
    //  console.log(foodExpenseAmount);
     foodExpense.value = '';
    
     
    const rentExpense = document.getElementById('rent-expense');
    const rentValue = rentExpense.value;
     const rentExpenseAmount = parseFloat(rentValue);
     rentExpense.value = '';
     
     
     

    const clotheExpense = document.getElementById('clothe-expense');
    const clotheValue = clotheExpense.value;
     const clotheExpenseAmount = parseFloat(clotheValue);
     clotheExpense.value = '';
    
     
     

     const totalExpenses = foodExpenseAmount + rentExpenseAmount + clotheExpenseAmount; 
     const totalBalance = firstValue - totalExpenses;
      
     
     const finalExpense = document.getElementById('total-expense');
     finalExpense.innerText = totalExpenses;

     const firstBalance = document.getElementById('last-balance');
     firstBalance.innerText = totalBalance;
    })

    document.getElementById('save-btn').addEventListener('click',function(){

        const firstIncome = document.getElementById('income-total');
        const firstTotal = firstIncome.value;
        const firstValue = parseFloat(firstTotal);

        const savePercent = document.getElementById('save-parcent').value;
        const savePercentValue = parseFloat(savePercent);

        const saveAmount = document.getElementById('save-amount') ;
       saveAmount.innerText =  firstValue * (savePercentValue/100);

        const remainAmount = document.getElementById('remain-balance');
          
    })