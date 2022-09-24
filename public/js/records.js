const deleteButton = document.querySelectorAll('#delete');
Array.from(deleteButton).forEach((el) => {
  el.addEventListener('click', deleteRecords);
});
async function deleteRecords() {
  console.log('trying to delete');
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
