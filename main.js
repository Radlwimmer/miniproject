// The below code fetches the .json data using a HTTP GET request
// Define our data source as JSON file
var sourceURL = 'data/deaths.json';
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(sourceURL)
  .then(function (response) {
    // Extract the JSON body content from the response
    return response.json();
  })
  .then(function (data) {
    // We have received our data, let's create a variable called persons and which will hold the data of this JSON file
    var persons = data;
    // Below is a for-loop, which iterates through all persons one by one.
    for (key in persons) {
      // For every person we'll call the function "outputData", which will process and display the table rows. See that function below.
      outputData(persons[key]);
    }
  });

// Change inside this function for experimenting
function outputData(person) {
  // POPULATING THE TABLE
  // Get the name from the link
  var name = person.link.split(/[/]+/).pop();
  // Make the name more readable, test with: document.write(prettyName + "<br />");
  var prettyName = name.replace(/_/g, ' ');
  // Get the table HTML element
  var table = document.getElementById('persons-table');
  // Create an empty <tr> element and add it to the 2st position of the table:
  var row = table.insertRow(-1);
  // Insert new cells (<td> elements) at the first 4 positions of the "new" <tr> element:
  var cell_1 = row.insertCell(0);
  var cell_2 = row.insertCell(1);
  var cell_3 = row.insertCell(2);
  var cell_4 = row.insertCell(3);
  // Add some text to the new cells:
  cell_1.innerHTML = person.birthyear;
  cell_2.innerHTML = '<a href="'+person.link+'" target="_blank">'+prettyName+'</a>';
  cell_3.innerHTML = person.profession;
  cell_4.innerHTML = person.day + ' ' + person.month + ' 2011';

  // REGEX RULES AND ADDING CSS CLASSES TO ROWS FOR TOGGLING
  // Add classes to different professions
  if ((new RegExp(/musician|singer|composer|pianist/gi)).test(person.profession)) {
    row.classList.add('musician');
  }
  if ((new RegExp(/actor|actress/gi)).test(person.profession)) {
    row.classList.add('actor');
  }
  if ((new RegExp(/politician|prince|prinz|president/gi)).test(person.profession)) {
    row.classList.add('politician');
  }
  if ((new RegExp(/author|writer/gi)).test(person.profession)) {
    row.classList.add('author');

    // Add classes to different months
  }
  if ((new RegExp(/January/gi)).test(person.month)) {
    row.classList.add('January');
  }
  if ((new RegExp(/February/gi)).test(person.month)) {
    row.classList.add('Febuary');
  }
  if ((new RegExp(/March/gi)).test(person.month)) {
    row.classList.add('March');
  }
  if ((new RegExp(/April/gi)).test(person.month)) {
    row.classList.add('April');
  }
  if ((new RegExp(/May/gi)).test(person.month)) {
    row.classList.add('May');
  }
  if ((new RegExp(/June/gi)).test(person.month)) {
    row.classList.add('June');
  }
  if ((new RegExp(/July/gi)).test(person.month)) {
    row.classList.add('July');
  }
  if ((new RegExp(/August/gi)).test(person.month)) {
    row.classList.add('August');
  }
  if ((new RegExp(/September/gi)).test(person.month)) {
    row.classList.add('September');
  }
  if ((new RegExp(/Oktober/gi)).test(person.month)) {
    row.classList.add('Oktober');
  }
  if ((new RegExp(/November/gi)).test(person.month)) {
    row.classList.add('November');
  }
  if ((new RegExp(/December/gi)).test(person.month)) {
    row.classList.add('December');
  }
// Add classes to different countries

  if ((new RegExp(/americ/gi)).test(person.profession)) {
    row.classList.add('American');
  }
  if ((new RegExp(/engl|brit/gi)).test(person.profession)) {
    row.classList.add('Great Britain');
  }
  if ((new RegExp(/iran/gi)).test(person.profession)) {
    row.classList.add('Iran');
  }
  if ((new RegExp(/scott/gi)).test(person.profession)) {
    row.classList.add('Scottland');
  }
  if ((new RegExp(/german/gi)).test(person.profession)) {
    row.classList.add('Germany');
  }
  if ((new RegExp(/france|french/gi)).test(person.profession)) {
    row.classList.add('France');
  }


}

// The below function will get called when the window finishes loading our data
window.onload = function() {
  // Get all options from our index.html
  var options = document.getElementsByTagName('option');
  // Add an event listener for the mouse click on these options to call the below toggleRows() function
  for (var i = 0, length = options.length; i < length; i++) {
    options[i].addEventListener('click', toggleRows, false);
  }

  // This function is responsible for toggling the relevant rows visible/hidden
  function toggleRows() {
    // Get all rows of our table
    var tableRows = document.getElementsByTagName('tr');
    // Loop through all of those rows (i.e.: <tr>...</tr> elements)
    for (var i = 1, length = tableRows.length; i < length; i++) {
      // If the option's value is reset show all table rows. "table-row" is here a CSS style attribute for visible rows!
      if (this.value == 'reset') {
        tableRows[i].style.display = "table-row";
      // If the option's value (for example "austrian") is included in the CSS classes of the table row (for example <tr class="austrian actor">...</tr>) then show it
      } else if (tableRows[i].classList.contains(this.value)) {
        tableRows[i].style.display = "table-row";
      } else {
      // If not hide this row, meaning that this row is not matched by the selected option
        tableRows[i].style.display = "none";
      }
    }
  }
};
