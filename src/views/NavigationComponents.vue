<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="cyan">mdi-navigation</v-icon>
            Navigation Components
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Navigation patterns and wayfinding components
        </div>

        <NavigationExamples />
    </div>
</template>

<script setup lang="ts">
import NavigationExamples from '../components/categories/NavigationComponents.vue';
</script>
