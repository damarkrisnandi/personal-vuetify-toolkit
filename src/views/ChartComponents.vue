<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="primary">mdi-chart-line</v-icon>
            Charts & Graphs
        </div>
        <div class="text-subtitle-1 mb-4 text-medium-emphasis">
            Interactive chart components powered by Chart.js for data visualization
        </div>

        <v-alert type="info" variant="tonal" class="mb-6">
            <strong>Note:</strong> These components require Chart.js and vue-chartjs dependencies.
            Install with: <code>npm install chart.js vue-chartjs</code>
        </v-alert>

        <ChartExamples />
    </div>
</template>

<script setup lang="ts">
import ChartExamples from '../components/categories/ChartComponents.vue';
</script>
