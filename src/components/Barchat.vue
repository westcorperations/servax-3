<template>
   
  <div style="max-width: 600px">
    <vue3-chart-js v-bind="{ ...barChart }" />
     </div>
</template>

<script>
 import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "Barchat",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "center",
          },
        },
        scales: {
          y: {
            min: -100,
            max: 100,
            ticks: {
              callback: function (value) {
                return `${value}%`;
              },
            },
          },
        },
      },
      data: {
        labels: ["", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: ["#1abc9c", "#f1c40f", "#2980b9", "#34495e"],
            data: [40, 20, 50, 10],
          },
          {
            label: "My Second Dataset",
            backgroundColor: ["#2ecc71", "#e67e22", "#9b59b6", "#bdc3c7"],
            data: [-40, -20, -10, -10],
          },
        ],
      },
    };

    return {
      barChart,
    };
  },
};
</script>
 

