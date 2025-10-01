<template>
    <div class="pa-6">
        <div class="text-h4 mb-2 d-flex align-center">
            <v-icon class="me-3" color="purple">mdi-layers</v-icon>
            Overlay Components
        </div>
        <div class="text-subtitle-1 mb-6 text-medium-emphasis">
            Modal dialogs, drawers, and overlay interfaces
        </div>

        <OverlayComponents />
    </div>
</template>

<script setup lang="ts">
import OverlayComponents from '../components/categories/OverlayComponents.vue';
</script>
