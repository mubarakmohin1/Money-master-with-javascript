//  compulsory part////
/////////////////////////////

function getInputvalue(inputId){
    const firstIncome = document.getElementById(inputId);
    const firstTotal = firstIncome.value;
       
    //   error handling for all positive number/////

    if(firstTotal > 0){
        const firstValue = parseFloat(firstTotal);
        // firstIncome.value = "";
        return firstValue;
    }
    
    
   
} 
 
document.getElementById('calculate-btn').addEventListener('click',function(){
        // function call////

        const firstValue = getInputvalue('income-total');
       
 
     const foodExpenseAmount = getInputvalue('food-expense');
     
     const rentExpenseAmount = getInputvalue('rent-expense');
     
     const clotheExpenseAmount = getInputvalue('clothe-expense');
     
    
    const totalExpenses = foodExpenseAmount + rentExpenseAmount + clotheExpenseAmount; 
    const totalBalance = firstValue - totalExpenses;
       
     // const firstValue = getInputvalue('income-total');
  
    
     const finalExpense = document.getElementById('total-expense');
     finalExpense.innerText = totalExpenses;

     const firstBalance = document.getElementById('last-balance');
     firstBalance.innerText = totalBalance;
    })


    // bonus part////
    //////////////////


    function getInputcalculation(calcInput){
        const incomeFirst = document.getElementById(calcInput);
        const totalFirst = incomeFirst.value;
        const valueFirst = parseFloat(totalFirst);
        // firstIncome.value = "";
        return valueFirst;
       
    } 

    document.getElementById('save-btn').addEventListener('click',function(){

        const valueFirst = getInputcalculation('income-total');


        const amountFoodExpense = getInputcalculation('food-expense');
     
        const amountRentExpense = getInputcalculation('rent-expense');
        
        const amountClotheExpense = getInputcalculation('clothe-expense');
        
        
   
        const expenseTotal = amountFoodExpense + amountRentExpense + amountClotheExpense; 
        const balanceTotal = valueFirst - expenseTotal;
         
        
        const finalExpense = document.getElementById('total-expense');
        finalExpense.innerText = expenseTotal;
   
        const firstBalance = document.getElementById('last-balance');
        firstBalance.innerText = balanceTotal;

         const savePercentValue = getInputcalculation('save-parcent');

        const saveAmount = document.getElementById('save-amount') ;
        // const saveAmount = getInputcalculation('save-amount');


        // error handling //////
        ///////////////////////////

        if(savePercentValue > 0 && savePercentValue <= 100){
            const successMsg = document.getElementById('verify-success');
            successMsg.style.display = 'block';
            saveAmount.innerText =  valueFirst * (savePercentValue/100);

            const remainAmount = document.getElementById('remain-balance');
            remainAmount.innerText = balanceTotal - saveAmount.innerText;
        }
        else{
            const errorMsg = document.getElementById('verify-fail');
            errorMsg.style.display = 'block';
        }
        
          
    })