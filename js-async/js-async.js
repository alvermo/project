class IceCreamShop {
constructor() {
this.flavors = ['vanilla', 'chocolate', 'strawberry'];
this.inventory = {
vanilla: 10,
chocolate: 5,
strawberry: 3
};
}

async order(flavor, amount) {
try {
const stock = await this.checkStock(flavor);
if (stock < amount) {
throw new Error(`є тільки ${stock} ${flavor} морозива.`);
}

await this.updateInventory(flavor, amount);
const totalPrice = this.calculatePrice(flavor, amount);
return `ваше замовлення ${amount} ${flavor} морозива готово. Вартість: $${totalPrice}.`;
} catch (error) {
return error.message;
}
}

async checkStock(flavor) {
return new Promise((resolve, reject) => {
setTimeout(() => {
const stock = this.inventory[flavor];
if (stock) {
resolve(stock);
} else {
reject(new Error(`немає стільки ${flavor} морозива.`));
}
}, 1000);
});
}

async updateInventory(flavor, amount) {
return new Promise((resolve, reject) => {
setTimeout(() => {
this.inventory[flavor] -= amount;
resolve();
}, 2000);
});
}

calculatePrice(flavor, amount) {
const pricePerScoop = 2.5;
return pricePerScoop * amount;
}
}


const shop = new IceCreamShop();
(async () => {
console.log(await shop.order('vanilla', 2));
console.log(await shop.order('chocolate', 3));
console.log(await shop.order('strawberry', 5));
console.log(await shop.order('mint', 1));
})();