fetch(
  "https://script.googleusercontent.com/macros/echo?user_content_key=30dMvTcp4WN7K5ELk8KUCCachui7aU1MViOA1YP8GYf4yRypWSEsQu3_eUYb5lWqASGI-A24UIa9vnvIY8o3RjvtuG2_nDP-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG9ZkC7bgMr4ijgweD9CqL_X4HkQDCslWCcqiV2FnPk-7miTf5mZuQZpGOmHULiE3vKfVnhjI6Uu&lib=MTl5aA3YoLQJD9Z7_RtDsF-4i4rVxlq36"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson["students"].length));
    // Get a reference to the table
    let tableRef = document.getElementById("resultTable");
    for (let i = 0; i < myJson["students"].length; i++) {
      // Insert a row at the end of the table
      let newRow = tableRef.insertRow(-1);
      // Insert a cell in the row at index 0
      let newCell_name = newRow.insertCell(0);
      let newCell_job = newRow.insertCell(1);
      let newCell_marks = newRow.insertCell(2);

      // Append a text node to the cell
      let name = document.createTextNode(myJson["students"][i].name);
      newCell_name.appendChild(name);
      let job = document.createTextNode(myJson["students"][i].job);
      newCell_job.appendChild(job);
      let marks = document.createTextNode(myJson["students"][i].marks);
      newCell_marks.appendChild(marks);
    }
  });

function addRow(tableID) {}
