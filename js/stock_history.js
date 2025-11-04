// Given a list of historic stock prices, write a function that tells when you should have bought and sold
// You can only buy and sell once

// 1-1-2017, 130
// 2-1-2017, 150
// 3-1-2017, 132
// 4-1-2017, 147
// 5-1-2017, 110 [buy]
// 6-1-2017, 199 [sell]
// 7-1-2017, 117
// 8-1-2017, 100
//

// input takes in list,
// declare a buy stock
// declare a sell stock
// constraint - we want to buy BEFORE we sell

let stockList = [
  { date: "1-1-2017", price: 130 },
  { date: "2-1-2017", price: 150 },
  { date: "3-1-2017", price: 132 },
  { date: "4-1-2017", price: 147 },
  { date: "5-1-2017", price: 110 }, // buy
  { date: "6-1-2017", price: 199 }, // sell
  { date: "7-1-2017", price: 117 },
  { date: "8-1-2017", price: 100 },
];

const findBuySellDates = (list) => {
  let buy = { date: "0-0-0000", price: list[0]["price"], index: 0 };
  let sell = { date: "0-0-0000", price: list[0]["price"], index: 1 };
  list.forEach((stock, i) => {
    if (stock.price < buy.price) {
      if (buy.index < sell.index) {
        buy.price = stock.price; // buyPrice = 110
        buy.index = i;
        buy.date = stock.date; // buyDate =  "5-1-2017"
      }
    }
    if (stock.price > sell.price) {
      sell.price = stock.price; // sellPrice = 199
      sell.date = stock.date; // sellDate = "6-1-2017"
      if (sell.index > buy.index) {
        sell.index = i;
      }
    }
  });
  return (
    "buy date: " +
    buy.date +
    "\n" +
    "buy price: " +
    buy.price +
    "\n" +
    "sell date: " +
    sell.date +
    "\n" +
    "sell price: " +
    sell.price
  );
};

console.log(findBuySellDates(stockList));
