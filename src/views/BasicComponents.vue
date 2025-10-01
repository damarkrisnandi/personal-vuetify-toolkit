<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="primary">mdi-widgets</v-icon>
            Basic Components
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Essential UI components for building your interface
        </div>

        <BasicExamples />
    </div>
</template>

<script setup lang="ts">
import BasicExamples from '../components/categories/BasicComponents.vue';
</script>
