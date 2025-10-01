<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="info">mdi-card</v-icon>
            Cards & Surfaces
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Card layouts and surface components for content display
        </div>

        <CardExamples />
    </div>
</template>

<script setup lang="ts">
import CardExamples from '../components/categories/CardComponents.vue';
</script>
