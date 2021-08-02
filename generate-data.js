const faker = require('faker');
const fs = require('fs');

const randomCardList = (n) => {
  const cardList = []

  if(n <= 0) return []

  for (let index = 0; index < n; index++) {
    const card = {
      id: faker.datatype.uuid(),
      fullName: faker.name.findName(),
      cardNumber: faker.finance.creditCardNumber(),
      expireDate: new Date(new Date().setFullYear(new Date().getFullYear() + 2))
    };

    cardList.push(card)
  }

  return cardList
}
const randomTransactionList = (cardList, numberOfTransaction) => {
  const transactionList = []

  if(numberOfTransaction <= 0) return []

  for (const card of cardList) {
    for (let index = 0; index < numberOfTransaction; index++) {
      const transaction = {
        cardId: card.id,
        id: faker.datatype.uuid(),
        type: faker.finance.transactionType(),
        name: faker.finance.transactionDescription(),
        amount: faker.finance.amount(),
        date: new Date()
      };
  
      transactionList.push(transaction)
    }
  }

  return transactionList
}

(() => {
  // random data
  const cardList = randomCardList(4);
  const transactionList = randomTransactionList(cardList, 5);

  // write data to db file
  const db = {
    cards: cardList,
    transactions: transactionList
  }

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data success')
  })
})();