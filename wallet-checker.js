// wallet-checker.js
// Fake wallet balance lookup

const wallets = {
  "0xA1": 10.5,
  "0xB2": 0.8,
  "0xC3": 5.2,
};

function checkBalance(address) {
  if (wallets[address]) {
    console.log(`💰 Balance of ${address}: ${wallets[address]} ETH`);
  } else {
    console.log("❌ Wallet not found.");
  }
}

checkBalance("0xA1");
checkBalance("0xXYZ");
