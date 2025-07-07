const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const conversionType = document.getElementById('conversionType');
const inputValue = document.getElementById('inputValue');
const resultBox = document.getElementById('conversionResult');

const unitMap = {
  length: ['m', 'cm', 'inch', 'ft'],
  temp: ['C', 'F', 'K']
};

conversionType.onchange = populateUnits;
convertBtn.onclick = () => {
  const from = fromUnit.value;
  const to = toUnit.value;
  const val = parseFloat(inputValue.value);

  if (conversionType.value === 'length') {
    const factors = { m: 1, cm: 100, inch: 39.37, ft: 3.281 };
    resultBox.textContent = `${(val * (factors[to] / factors[from])).toFixed(4)} ${to}`;
  } else if (conversionType.value === 'temp') {
    let result = 0;
    if (from === to) result = val;
    else if (from === 'C' && to === 'F') result = val * 9/5 + 32;
    else if (from === 'F' && to === 'C') result = (val - 32) * 5/9;
    else if (from === 'C' && to === 'K') result = val + 273.15;
    else if (from === 'K' && to === 'C') result = val - 273.15;
    else if (from === 'F' && to === 'K') result = (val - 32) * 5/9 + 273.15;
    else if (from === 'K' && to === 'F') result = (val - 273.15) * 9/5 + 32;
    resultBox.textContent = `${result.toFixed(2)} ${to}`;
  }
};

function populateUnits() {
  const units = unitMap[conversionType.value];
  fromUnit.innerHTML = toUnit.innerHTML = '';
  units.forEach(u => {
    fromUnit.innerHTML += `<option value="${u}">${u}</option>`;
    toUnit.innerHTML += `<option value="${u}">${u}</option>`;
  });
}
populateUnits();
