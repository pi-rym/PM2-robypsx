// console.log(tempData);
const renderCards = require("./renderCards");

// Peticion
$.ajax({
    url: "https://students-api.2.us-1.fl0.io/movies",
    dataType: "json",
    success: function (data) {
      renderCards(data);
    },
    error: function (error) {
      console.error("Error fetching movies:", error);
      $("#error-message").removeClass("d-none");
    }
  });
