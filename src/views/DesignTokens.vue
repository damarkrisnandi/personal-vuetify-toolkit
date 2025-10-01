<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="pink">mdi-palette</v-icon>
            Design Tokens
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Colors, icons, and design system components
        </div>

        <DesignTokens />
    </div>
</template>

<script setup lang="ts">
import DesignTokens from '../components/categories/DesignTokens.vue';
</script>
