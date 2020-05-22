const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }

  createTransaction({ type: 'credit',   value: 50})
  createTransaction({ type: 'credit',   value: 2450})
  createTransaction({ type: 'debit',   value: 100})
  createTransaction({ type: 'debit',   value: 140})
  createTransaction({ type: 'debit',   value: 880})

  function createTransaction (transaction){
      
      if (transaction.type === "credit") {
    user.transactions.push(transaction)
             user.balance += transaction.value
      }else if (transaction.type === 'debit'){
          user.transactions.push(transaction)
          user.balance -= transaction.value
 }
// console.log(user)
}

//   createTransaction(transaction)

  function getHigherTransactionByType(type){

    let highestCredit = 0
    let typeOfTransaction

    for (transaction of user.transactions)  
    if (transaction.type == type && transaction.value > highestCredit){
        highestCredit = transaction.value
        typeOfTransaction = transaction.type
         obj = transaction // variavel obj vai guardar o array
    }
console.log(obj)
    }
    getHigherTransactionByType("credit")



    function getAverageTransactionValue(){
        let value = 0

        for (transaction of user.transactions)
        value += transaction.value
        total = value / user.transactions.length
        console.log(total)
    }
    getAverageTransactionValue()

    function getTransactionsCount(){
        creditAndDebit= []
        let debit = 0
        let credit= 0
        for (transaction of user.transactions)
        if (transaction.type == "credit"){
            creditAndDebit.push(transaction.type)
            credit += 1
    }else if (transaction.type == "debit"){
        creditAndDebit.push(transaction.type)
        debit += 1
    }
    const totalCreditDebit= {
        credit:`${credit}`,
        debit:`${debit}`
    }
    console.log(totalCreditDebit)

    }

    getTransactionsCount()