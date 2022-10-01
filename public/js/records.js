const deleteButton = document.querySelectorAll('#delete');
Array.from(deleteButton).forEach((el) => {
  el.addEventListener('click', deleteRecords);
});

const submitButton = document.querySelectorAll('#submit');
Array.from(submitButton).forEach((el) => {
  el.addEventListener('click', updateRecords);
});

async function deleteRecords() {
  const record = this.dataset.id;
  try {
    const response = await fetch('records/deleteRecords', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        itemIdFromJSFile: record,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function updateRecords() {
  const record = this.dataset.id;
  const collection = this.parentNode;
  const MDL =
    collection.children[1].children[1].value ||
    collection.children[1].children[1].getAttribute('placeholder');
  const SPT =
    collection.children[2].children[1].value ||
    collection.children[2].children[1].getAttribute('placeholder');
  const HRP =
    collection.children[3].children[1].value ||
    collection.children[3].children[1].getAttribute('placeholder');
  const SDCMinutes =
    collection.children[4].children[1].value ||
    collection.children[4].children[1].getAttribute('placeholder');
  const SDCSeconds =
    collection.children[4].children[3].value ||
    collection.children[4].children[3].getAttribute('placeholder');
  const PLKMinutes =
    collection.children[5].children[1].value ||
    collection.children[5].children[1].getAttribute('placeholder');
  const PLKSeconds =
    collection.children[5].children[3].value ||
    collection.children[5].children[3].getAttribute('placeholder');
  const TMRMinutes =
    collection.children[6].children[1].value ||
    collection.children[6].children[1].getAttribute('placeholder');
  const TMRSeconds =
    collection.children[6].children[3].value ||
    collection.children[6].children[3].getAttribute('placeholder');

  console.log('MDL:', MDL);
  console.log('SPT:', SPT);
  console.log(HRP);
  console.log(SDCMinutes);
  console.log();
  console.log();

  try {
    const response = await fetch('records/updateRecords', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        itemIdFromJSFile: record,
        MDL: MDL,
        SPT: SPT * 10,
        HRP: HRP,
        SDC: SDCMinutes + ':' + SDCSeconds,
        PLK: PLKMinutes + ':' + PLKSeconds,
        TMR: TMRMinutes + ':' + TMRSeconds,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
