class PiggyCoin {

    private Coins: {[denomination: number]: number} = {
      1: 0,
      3: 0,
      5: 0,
      10: 0,
    };

  addCoin(denomination: number) {
    if (this.Coins.hasOwnProperty (denomination)) {
      this.Coins[denomination]++;
      console.log(`Added ${denomination} coin.`);
    } else {
      throw new Error (`You addded ${denomination}. This is another nominal.`)     
    }
  }

  showCoins() {
    for (const denomination in this.Coins) {
      console.log(`${denomination} coin: ${this.Coins[denomination]}`);
    } 
  }

  getTotal(): number {
    let total = 0;
    for (const denomination in this.Coins) {
      total += +denomination * this.Coins[denomination];
    }
    return total;
  }

}

const piggyBank = new PiggyCoin();
piggyBank.addCoin(1);
piggyBank.addCoin(3);
piggyBank.addCoin(5);
piggyBank.addCoin(10);
piggyBank.addCoin(20);
const totalValue = piggyBank.getTotal();
console.log(`Total value of coins: ${totalValue}`);