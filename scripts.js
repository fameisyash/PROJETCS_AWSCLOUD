// Add your API endpoint URL here
const API_ENDPOINT = "https://1lspd7i3j5.execute-api.ap-south-1.amazonaws.com/YASH";

// AJAX POST REQUEST to save profile data
document.getElementById("saveprofile").onclick = function () {
  const inputData = {
    empId: $('#empid').val(),
    empFirstName: $('#fname').val(),
    empLastName: $('#lname').val(),
    empAge: $('#empage').val(),
    empEmail: $('#empemail').val(), // Add email field
    empAddress: $('#empaddress').val() // Add address field
  };

  $.ajax({
    url: API_ENDPOINT,
    type: 'POST',
    data: JSON.stringify(inputData),
    contentType: 'application/json; charset=utf-8',
    success: function (response) {
      document.getElementById("profileSaved").innerHTML = "Profile Saved!";
    },
    error: function (error) {
      console.error("Error saving profile:", error);
      alert("An error occurred while saving the profile.");
    }
  });
};

// AJAX GET REQUEST to fetch profile data

document.getElementById("getprofile").onclick = function () {
  $.ajax({
    url: API_ENDPOINT,
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    success: function (response) {
      $('#employeeProfile tr').slice(1).remove(); // Clear existing table rows
      jQuery.each(response, function (i, data) {
        // Set a color based on the empColor property
        const color = data['empColor'] || 'red'; // Default to black if empColor is not defined

        // Append table row with style attribute for text color
        $("#employeeProfile").append("<tr style='color:" + color + "'> \
            <td>" + data['empId'] + "</td> \
            <td>" + data['empFirstName'] + "</td> \
            <td>" + data['empLastName'] + "</td> \
            <td>" + data['empAge'] + "</td> \
            <td>" + data['empEmail'] + "</td> \
            <td>" + data['empAddress'] + "</td> \
            </tr>");
      });
    },
    error: function (error) {
      console.error("Error fetching profiles:", error);
      alert("An error occurred while fetching profiles.");
    }
  });
};
