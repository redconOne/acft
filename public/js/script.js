const deleteBtn = document.querySelectorAll('.del');
const invItem = document.querySelectorAll('.invItem');
const changeQuantity = document.querySelectorAll('.changeQuantity');

const MDLSlider = document.getElementById('MDL-slider');
const MDLPoints = document.getElementById('MDL-points');
MDLPoints.innerHTML = MDLSlider.value;
MDLSlider.oninput = function () {
  MDLPoints.innerHTML = this.value;
};

const SPTSlider = document.getElementById('SPT-slider');
const SPTPoints = document.getElementById('SPT-points');
SPTPoints.innerHTML = SPTSlider.value / 10;
SPTSlider.oninput = function () {
  SPTPoints.innerHTML = this.value / 10;
};

const HRPSlider = document.getElementById('HRP-slider');
const HRPPoints = document.getElementById('HRP-points');
HRPPoints.innerHTML = HRPSlider.value;
HRPSlider.oninput = function () {
  HRPPoints.innerHTML = this.value;
};

const SDCMinutes = document.getElementById('SDC-minutes');
const SDCSeconds = document.getElementById('SDC-seconds');
const SDCPoints = document.getElementById('SDC-points');
SDCPoints.innerHTML = SDCMinutes.value + ':' + SDCSeconds.value;
SDCMinutes.oninput = function () {
  SDCPoints.innerHTML = this.value + ':' + SDCSeconds.value;
};
SDCSeconds.oninput = function () {
  SDCPoints.innerHTML = SDCMinutes.value + ':' + this.value;
};

const PLKMinutes = document.getElementById('PLK-minutes');
const PLKSeconds = document.getElementById('PLK-seconds');
const PLKPoints = document.getElementById('PLK-points');
PLKPoints.innerHTML = PLKMinutes.value + ':' + PLKSeconds.value;
PLKMinutes.oninput = function () {
  PLKPoints.innerHTML = this.value + ':' + PLKSeconds.value;
};
PLKSeconds.oninput = function () {
  PLKPoints.innerHTML = PLKMinutes.value + ':' + this.value;
};

const TMRMinutes = document.getElementById('TMR-minutes');
const TMRSeconds = document.getElementById('TMR-seconds');
const TMRPoints = document.getElementById('TMR-points');
TMRPoints.innerHTML = TMRMinutes.value + ':' + TMRSeconds.value;
TMRMinutes.oninput = function () {
  TMRPoints.innerHTML = this.value + ':' + TMRSeconds.value;
};
TMRSeconds.oninput = function () {
  TMRPoints.innerHTML = TMRMinutes.value + ':' + this.value;
};

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteItem);
});

Array.from(changeQuantity).forEach((el) => {
  el.addEventListener('click', setQuantity);
});

async function deleteItem() {
  const invItem = this.parentNode.dataset.id;
  try {
    const response = await fetch('invItems/deleteInvItem', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        itemIdFromJSFile: invItem,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function setQuantity() {
  const invItem = this.parentNode.parentNode.dataset.id;
  console.log(invItem);
  const quantity = this.previousElementSibling.value;
  console.log(quantity);
  try {
    const response = await fetch('invItems/setQuantity', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        itemIdFromJSFile: invItem,
        quantity: quantity,
      }),
    });
    const data = await response.json();
    console.log(data);
    console.log("this is what's logging to console");
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
