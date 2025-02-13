jQuery(document).ready(function ($) {
  // For Play Pause Button
  jQuery(".play_btn").click(function () {
    jQuery(this).toggleClass("pause_btn");
  });

  jQuery(".menu_toggle").on("click", function () {
    jQuery(".theme_header").toggleClass("toggle_menu");
  });

  // Get the canvas element
  var ctx = document.getElementById("dailySeatsChart").getContext("2d");

  var data = {
    labels: ["3/10", "3/20", "4/01", "4/10", "4/20", "5/01", "5/10"],
    datasets: [
      {
        label: "Active Seats",
        data: [30, 25, 30, 15, 10, 25, 30],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.3)", // Green transparent fill
        fill: true,
        pointRadius: 0, // Remove points
        pointHoverRadius: 0, // No hover effect on points
      },
      {
        label: "Inactive Seats",
        data: [10, 10, 5, 10, 5, 50, 10],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.3)", // Red transparent fill
        fill: true,
        pointRadius: 0, // Remove points
        pointHoverRadius: 0, // No hover effect on points
      },
    ],
  };

  var config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        tooltip: { enabled: true, mode: "index", intersect: false },
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        x: { title: { display: true, text: "Date" } },
        y: { title: { display: true, text: "Seats" } },
      },
    },
  };

  new Chart(ctx, config);
});
