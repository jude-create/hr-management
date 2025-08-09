<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const values = [60, 80, 95, 30, 80, 85, 100]

// Create segments
const blueSegment = values.map(v => Math.min(v, 60))
const yellowSegment = values.map(v => Math.max(0, Math.min(v - 60, 30)))
const redSegment = values.map(v => Math.max(0, v - 90))

const chartData = {
  labels,
  datasets: [
    {
      label: '0–60%',
      data: blueSegment,
      backgroundColor: '#3B82F6',
      barThickness: 10,
      borderSkipped: false, // don't skip borders
      borderRadius: {
         topLeft: 6,
        topRight: 6,
        bottomLeft: 6,
        bottomRight: 6,
      },
      stack: 'stacked',
    },
    {
      label: '61–90%',
      data: yellowSegment,
      backgroundColor: '#FACC15',
      barThickness: 10,
      borderSkipped: false,
      borderRadius: {
        topLeft: 6,
        topRight: 6,
        bottomLeft: 6,
        bottomRight: 6,
      },
      stack: 'stacked',
    },
    {
      label: '91–100%',
      data: redSegment,
      backgroundColor: '#EF4444',
      barThickness: 10,
      borderSkipped: false,
      borderRadius: {
        topLeft: 6,
        topRight: 6,
      },
      stack: 'stacked',
    },
  ],
}

const chartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      stacked: true,
     ticks: {
       callback: val => `${val}%`,
       stepSize: 20, // adjust step size for better readability
       padding: 3,           // adds space between tick lines
       font: {
     size: 14,            // adjust font size if needed
  },
},

      grid: {
        drawBorder: false,
        color: '#A2A1A833', // ← make horizontal lines invisible
      },
    },
    x: {
      stacked: true,
      grid: {
        drawBorder: false,
        color: 'transparent', // ← make vertical lines invisible
      },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}%`,
      },
    },
  },
}

</script>

<template>
  <div class="max-w-2xl mx-auto h-[315px] mt-8 ">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>