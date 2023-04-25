const dataLayer = window.dataLayer;

const filteredData = dataLayer.filter(entry => {
  if (entry.event === "xhr response" && (entry.requestBody != null && entry.requestBody != undefined)) {
    return true;
  }
});

console.log(filteredData);