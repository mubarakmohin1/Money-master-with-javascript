
function getInputcalculation(inputId){
    const firstIncome = document.getElementById(inputId);
    const firstTotal = firstIncome.value;
    const firstValue = parseFloat(firstTotal);
    // firstIncome.value = "";
    return firstValue;
   
} 
 
document.getElementById('calculate-btn').addEventListener('click',function(){
   
    const firstValue = getInputcalculation('income-total');
 
     const foodExpenseAmount = getInputcalculation('food-expense');
     
     const rentExpenseAmount = getInputcalculation('rent-expense');
     
     const clotheExpenseAmount = getInputcalculation('clothe-expense');
     
     

     const totalExpenses = foodExpenseAmount + rentExpenseAmount + clotheExpenseAmount; 
     const totalBalance = firstValue - totalExpenses;
      
     
     const finalExpense = document.getElementById('total-expense');
     finalExpense.innerText = totalExpenses;

     const firstBalance = document.getElementById('last-balance');
     firstBalance.innerText = totalBalance;
    })


    function getInputcalculation(calcInput){
        const firstIncome = document.getElementById(calcInput);
        const firstTotal = firstIncome.value;
        const firstValue = parseFloat(firstTotal);
        // firstIncome.value = "";
        return firstValue;
       
    } 

    document.getElementById('save-btn').addEventListener('click',function(){

        const firstValue = getInputcalculation('income-total');


        const foodExpenseAmount = getInputcalculation('food-expense');
     
        const rentExpenseAmount = getInputcalculation('rent-expense');
        
        const clotheExpenseAmount = getInputcalculation('clothe-expense');
        
        
   
        const totalExpenses = foodExpenseAmount + rentExpenseAmount + clotheExpenseAmount; 
        const totalBalance = firstValue - totalExpenses;
         
        
        const finalExpense = document.getElementById('total-expense');
        finalExpense.innerText = totalExpenses;
   
        const firstBalance = document.getElementById('last-balance');
        firstBalance.innerText = totalBalance;




       
        const savePercentValue = getInputcalculation('save-parcent');

        const saveAmount = document.getElementById('save-amount') ;
        // const saveAmount = getInputcalculation('save-amount');
        
       saveAmount.innerText =  firstValue * (savePercentValue/100);

        const remainAmount = document.getElementById('remain-balance');
        remainAmount.innerText = totalBalance - saveAmount.innerText;
        
          
    })