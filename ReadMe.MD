
# Json generator data sample

Add data sample below to generate random data
https://www.json-generator.com/

```js
{
  cards: [
    '{{repeat(5, 7)}}',
    {
      // _cid: '{{objectId()}}',
      id: '{{index()}}',
      fullName: '{{firstName()}} {{surname()}}',
      cardNumber: '{{integer(0, 999999999999)}}',
      expireDate: '{{date(new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 2)), "")}}',
      transactions: [
        '{{repeat(5)}}',
        {
          _id: '{{objectId()}}',
          name: '{{lorem(3, "words")}}',
          type: function (tags) {
            var fruits = ['type1', 'type2', 'type3'];
            return fruits[tags.integer(0, fruits.length - 1)];
          },
          date: '{{date(new Date(2021,1,1), new Date(), "dd/MM/YYYY")}}',
          amount: '{{integer(100, 100000)}}'
        }
      ],
    }
  ]
}
```