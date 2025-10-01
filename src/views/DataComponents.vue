<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="warning">mdi-table</v-icon>
            Data Display
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Components for displaying and organizing data
        </div>

        <DataExamples />
    </div>
</template>

<script setup lang="ts">
import DataExamples from '../components/categories/DataComponents.vue';
</script>
