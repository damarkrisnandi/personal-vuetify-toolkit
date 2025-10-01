<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="orange">mdi-rocket</v-icon>
            Complex Examples
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Advanced component combinations and real-world examples
        </div>

        <ComplexExamples />
    </div>
</template>

<script setup lang="ts">
import ComplexExamples from '../components/categories/ComplexExamples.vue';
</script>
