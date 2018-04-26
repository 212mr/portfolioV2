//plug from  charts.js

$(document).ready(function () {

// new Chart(null, {}); //this goes wrong
//* * important! //any element CANNOT be a null

    var smart_doughnut_chart = document.getElementById("smart-doughnut-chart");
    if (smart_doughnut_chart != null) {
        new Chart(smart_doughnut_chart, {
            type: 'doughnut',
            data: {
                labels: ["Too many emails", "Lost track of packages", "Forget purchases", "Forget to pick up packages", "Shopping emails in trash box"],
                datasets: [
                    {
                        label: 'percentage',
                        backgroundColor: ["#8d40d4", "#68C4DD", "#8A9EDE", "#3ad6d4", "#499BFC"],
                        data: [91, 63, 34, 15, 53],
                        lineHeight: 3
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Online Shopping and Delivery Pain Points',
                    lineHeight: 3
                }
            }
        });
    }

    var smart_radar_chart = document.getElementById("smart-radar-chart");
    if (smart_radar_chart) {
        new Chart(smart_radar_chart, {
            type: 'radar',
            data: {
                labels: ["General Online Stores", "Online Shopping every month", "Market Places", "Large Retailer Sites", "Independent Boutiques"],
                datasets: [
                    {
                        label: "General American",
                        fill: true,
                        backgroundColor: "rgba(179,181,198,0.2)",
                        borderColor: "#8A9EDE",
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        data: [96, 80, 39, 46, 18]
                    },
                    {
                        label: "American Seniors",
                        fill: true,
                        backgroundColor: "rgba(179,181,198,0.2)",
                        borderColor: "#68C4DD",
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        data: [44, 9, 51, 66, 30]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'American Shopping Preference 2016'
                }
            }

        });
    }

    var china_radar_chart = document.getElementById("china-radar-chart");
    if (china_radar_chart)
        new Chart(china_radar_chart, {
            type: 'radar',
            data: {
                labels: ["Logo", "Color Theme", "Advertisements", "Menus", "Websites"],
                datasets: [
                    {
                        label: "Restaurant Customers",
                        fill: true,
                        backgroundColor: "rgba(248,182,45,0.4)",
                        borderColor: "#f8b62d",
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        data: [71, 37, 39, 51, 91]
                    },
                    {
                        label: "Restaurant Staffs",
                        fill: true,
                        backgroundColor: "rgba(146,150,254,0.4)",
                        borderColor: "#9296fe",
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        data: [44, 69, 11, 78, 44]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'What do customers and staffs want to change?'
                }
            }

        });

    var china_bar_chart_horizontal = document.getElementById("china-bar-chart-horizontal");
    if (china_bar_chart_horizontal) new Chart(china_bar_chart_horizontal, {
        type: 'horizontalBar',
        data: {
            labels: ["Logo", "Color Theme", "Website", "Menu", "Advertisement"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#f8b62d", "#8e5ea2", "#44449f", "#f8a124", "#8A9EDE"],
                    data: [41, 66, 59, 44, 39]
                }
            ]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: 'What do customers want to change?'
            }
        }
    });

});