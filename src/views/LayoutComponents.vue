<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="success">mdi-view-dashboard</v-icon>
            Layout Components
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Structural components for organizing your layout
        </div>

        <LayoutExamples />
    </div>
</template>

<script setup lang="ts">
import LayoutExamples from '../components/categories/LayoutComponents.vue';
</script>
