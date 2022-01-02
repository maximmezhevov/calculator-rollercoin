function result(AverageDuration, DivisionMethod, TotalPower,
  RemunerationRate__RLT, WeeklyMultiplier__RLT, NetworkPower__RLT, Rate__RLT,
  BlockReward__RLT, DailyReward__RLT, DailyRewardСurrency__RLT,
  RemunerationRate__BTC, WeeklyMultiplier__BTC, NetworkPower__BTC, Rate__BTC,
  BlockReward__BTC, DailyReward__BTC, DailyRewardСurrency__BTC,
  RemunerationRate__ETH, WeeklyMultiplier__ETH, NetworkPower__ETH, Rate__ETH,
  BlockReward__ETH, DailyReward__ETH, DailyRewardСurrency__ETH,
  RemunerationRate__BNB, WeeklyMultiplier__BNB, NetworkPower__BNB, Rate__BNB,
  BlockReward__BNB, DailyReward__BNB, DailyRewardСurrency__BNB,
  RemunerationRate__MATIC, WeeklyMultiplier__MATIC, NetworkPower__MATIC, Rate__MATIC,
  BlockReward__MATIC, DailyReward__MATIC, DailyRewardСurrency__MATIC,
  RemunerationRate__DOGE, WeeklyMultiplier__DOGE, NetworkPower__DOGE, Rate__DOGE,
  BlockReward__DOGE, DailyReward__DOGE, DailyRewardСurrency__DOGE,
  ) {
  AverageDuration = document.getElementById('AverageDuration').value;
  DivisionMethod =document.getElementById('DivisionMethod').value;
  TotalPower = document.getElementById('TotalPower').value;
  var year = 144;

  // RLT
  RemunerationRate__RLT = document.getElementById('RemunerationRate__RLT').value;
  NetworkPower__RLT = document.getElementById('NetworkPower__RLT').value;
  WeeklyMultiplier__RLT = document.getElementById('WeeklyMultiplier__RLT').value;
  Rate__RLT = document.getElementById('Rate__RLT').value;

  BlockReward__RLT = RemunerationRate__RLT * WeeklyMultiplier__RLT / NetworkPower__RLT * TotalPower / AverageDuration / DivisionMethod;
  DailyReward__RLT = BlockReward__RLT * year;
  DailyRewardСurrency__RLT = DailyReward__RLT / Rate__RLT;
  
  document.getElementById('BlockReward__RLT').innerHTML = BlockReward__RLT.toFixed(4);
  document.getElementById('DailyReward__RLT').innerHTML = DailyReward__RLT.toFixed(4);
  document.getElementById('DailyRewardСurrency__RLT').innerHTML = '&#36;' + DailyRewardСurrency__RLT.toFixed(2);

  // BTC
  RemunerationRate__BTC = document.getElementById('RemunerationRate__BTC').value;
  NetworkPower__BTC = document.getElementById('NetworkPower__BTC').value;
  WeeklyMultiplier__BTC = document.getElementById('WeeklyMultiplier__BTC').value;
  Rate__BTC = document.getElementById('Rate__BTC').value;

  BlockReward__BTC = RemunerationRate__BTC * WeeklyMultiplier__BTC / NetworkPower__BTC * TotalPower / AverageDuration / DivisionMethod;
  DailyReward__BTC = BlockReward__BTC * year;
  DailyRewardСurrency__BTC = DailyReward__BTC / Rate__BTC;

  document.getElementById('BlockReward__BTC').innerHTML = BlockReward__BTC.toFixed(8);
  document.getElementById('DailyReward__BTC').innerHTML = DailyReward__BTC.toFixed(8);
  document.getElementById('DailyRewardСurrency__BTC').innerHTML = '&#36;' + DailyRewardСurrency__BTC.toFixed(2);

  // ETH
  RemunerationRate__ETH = document.getElementById('RemunerationRate__ETH').value;
  NetworkPower__ETH = document.getElementById('NetworkPower__ETH').value;
  WeeklyMultiplier__ETH = document.getElementById('WeeklyMultiplier__ETH').value;
  Rate__ETH = document.getElementById('Rate__ETH').value;

  BlockReward__ETH = RemunerationRate__ETH * WeeklyMultiplier__ETH / NetworkPower__ETH * TotalPower / AverageDuration / DivisionMethod;
  DailyReward__ETH = BlockReward__ETH * year;
  DailyRewardСurrency__ETH = DailyReward__ETH / Rate__ETH;

  document.getElementById('BlockReward__ETH').innerHTML = BlockReward__ETH.toFixed(6);
  document.getElementById('DailyReward__ETH').innerHTML = DailyReward__ETH.toFixed(6);
  document.getElementById('DailyRewardСurrency__ETH').innerHTML = '&#36;' + DailyRewardСurrency__ETH.toFixed(2);

  // BNB
  RemunerationRate__BNB = document.getElementById('RemunerationRate__BNB').value;
  NetworkPower__BNB = document.getElementById('NetworkPower__BNB').value;
  WeeklyMultiplier__BNB = document.getElementById('WeeklyMultiplier__BNB').value;
  Rate__BNB = document.getElementById('Rate__BNB').value;

  BlockReward__BNB = RemunerationRate__BNB * WeeklyMultiplier__BNB / NetworkPower__BNB * TotalPower / AverageDuration / DivisionMethod;
  DailyReward__BNB = BlockReward__BNB * year;
  DailyRewardСurrency__BNB = DailyReward__BNB / Rate__BNB;

  document.getElementById('BlockReward__BNB').innerHTML = BlockReward__BNB.toFixed(6);
  document.getElementById('DailyReward__BNB').innerHTML = DailyReward__BNB.toFixed(6);
  document.getElementById('DailyRewardСurrency__BNB').innerHTML = '&#36;' + DailyRewardСurrency__BNB.toFixed(2);

  // MATIC
  RemunerationRate__MATIC = document.getElementById('RemunerationRate__MATIC').value;
  NetworkPower__MATIC = document.getElementById('NetworkPower__MATIC').value;
  WeeklyMultiplier__MATIC = document.getElementById('WeeklyMultiplier__MATIC').value;
  Rate__MATIC = document.getElementById('Rate__MATIC').value;


  BlockReward__MATIC = RemunerationRate__MATIC * WeeklyMultiplier__MATIC / NetworkPower__MATIC * TotalPower / AverageDuration / DivisionMethod;
  DailyReward__MATIC = BlockReward__MATIC * year;
  DailyRewardСurrency__MATIC = DailyReward__MATIC / Rate__MATIC;

  document.getElementById('BlockReward__MATIC').innerHTML = BlockReward__MATIC.toFixed(6);
  document.getElementById('DailyReward__MATIC').innerHTML = DailyReward__MATIC.toFixed(6);
  document.getElementById('DailyRewardСurrency__MATIC').innerHTML = '&#36;' + DailyRewardСurrency__MATIC.toFixed(2);

  // DOGE
  RemunerationRate__DOGE = document.getElementById('RemunerationRate__DOGE').value;
  NetworkPower__DOGE = document.getElementById('NetworkPower__DOGE').value;
  WeeklyMultiplier__DOGE = document.getElementById('WeeklyMultiplier__DOGE').value;
  Rate__DOGE = document.getElementById('Rate__DOGE').value;

  BlockReward__DOGE = RemunerationRate__DOGE * WeeklyMultiplier__DOGE / NetworkPower__DOGE * TotalPower / AverageDuration / DivisionMethod;
  DailyReward__DOGE = BlockReward__DOGE * year;
  DailyRewardСurrency__DOGE = DailyReward__DOGE / Rate__DOGE;

  document.getElementById('BlockReward__DOGE').innerHTML = BlockReward__DOGE.toFixed(4);
  document.getElementById('DailyReward__DOGE').innerHTML = DailyReward__DOGE.toFixed(4);
  document.getElementById('DailyRewardСurrency__DOGE').innerHTML = '&#36;' + DailyRewardСurrency__DOGE.toFixed(2);
}
