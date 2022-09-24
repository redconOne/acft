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

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', setScores);

async function setScores() {
  try {
    const response = await fetch('scores/setScores', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        MDL: Number(MDLSlider.value),
        SPT: Number(SPTSlider.value),
        HRP: Number(HRPSlider.value),
        SDC: String(SDCMinutes.value + ':' + SDCSeconds.value),
        PLK: String(PLKMinutes.value + ':' + PLKSeconds.value),
        TMR: String(TMRMinutes.value + ':' + TMRSeconds.value),
      }),
    });
    const data = await response.json();
    alert('Your scores have been successfully added');
    location.reload();
  } catch (err) {
    console.log('yeah');
    console.log(err);
  }
}
