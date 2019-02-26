module.exports = function makeExchange(currency) {
  if (currency <= 0) return {};
  if (currency > 10000 ) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  let coins = {}, h = 50, q = 25, d = 10, n = 5, p = 1; 
  if (currency >= h) coins.H = Math.floor(currency / h), currency = currency % h;
  if (currency >= q) coins.Q = Math.floor(currency / q), currency = currency % q;
  if (currency >= d) coins.D = Math.floor(currency / d), currency = currency % d;
  if (currency >= n) coins.N = Math.floor(currency / n), currency = currency % n;
  if (currency >= p) coins.P = Math.floor(currency / p);
  return coins;
}
