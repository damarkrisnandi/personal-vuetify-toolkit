<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="secondary">mdi-form-select</v-icon>
            Form Components
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Input controls and form elements for data collection
        </div>

        <FormExamples />
    </div>
</template>

<script setup lang="ts">
import FormExamples from '../components/categories/FormComponents.vue';
</script>
