<template>
    <div class="full-width-content">
        <div class="px-6 py-4">
            <h1 class="text-h3 mb-4">{{ getCategoryTitle(selectedCategory) }}</h1>
            <p class="text-body-1 mb-6">{{ getCategoryDescription(selectedCategory) }}</p>
        </div>

        <div class="px-6">
            <component :is="getCurrentComponent()" style="width: 100%;" />
        </div>
    </div>
</template>

<script setup lang="ts">
import BasicComponents from './categories/BasicComponents.vue'
import CardComponents from './categories/CardComponents.vue'
import ComplexExamples from './categories/ComplexExamples.vue'
import DataComponents from './categories/DataComponents.vue'
import DesignTokens from './categories/DesignTokens.vue'
import FormComponents from './categories/FormComponents.vue'
import LayoutComponents from './categories/LayoutComponents.vue'
import NavigationComponents from './categories/NavigationComponents.vue'
import OverlayComponents from './categories/OverlayComponents.vue'

interface Props {
    selectedCategory: string
}

const props = defineProps<Props>()

const componentMap = {
    basic: BasicComponents,
    forms: FormComponents,
    layout: LayoutComponents,
    cards: CardComponents,
    data: DataComponents,
    overlay: OverlayComponents,
    design: DesignTokens,
    navigation: NavigationComponents,
    complex: ComplexExamples,
}

const categoryInfo = {
    basic: {
        title: 'Basic Components',
        description: 'Essential Vuetify components like buttons, chips, icons, and basic UI elements.'
    },
    forms: {
        title: 'Form Components',
        description: 'Input fields, selects, checkboxes, and other form-related components.'
    },
    layout: {
        title: 'Layout Components',
        description: 'Grid system, containers, and layout helpers for structuring your pages.'
    },
    cards: {
        title: 'Cards & Surfaces',
        description: 'Card components, sheets, and surface elements for content organization.'
    },
    data: {
        title: 'Data Display',
        description: 'Tables, lists, and components for displaying structured data.'
    },
    overlay: {
        title: 'Overlay Components',
        description: 'Modals, drawers, toasts, tooltips, and other overlay elements that appear above content.'
    },
    design: {
        title: 'Design Tokens',
        description: 'Color system, Material Design Icons, theming, typography, and design foundations.'
    },
    navigation: {
        title: 'Navigation',
        description: 'Tabs, pagination, breadcrumbs, and navigation components.'
    },
    complex: {
        title: 'Complex Examples',
        description: 'Complete examples like login forms, dashboards, and feature-rich components.'
    },
}

const getCurrentComponent = () => {
    return componentMap[props.selectedCategory as keyof typeof componentMap] || BasicComponents
}

const getCategoryTitle = (category: string) => {
    return categoryInfo[category as keyof typeof categoryInfo]?.title || 'Components'
}

const getCategoryDescription = (category: string) => {
    return categoryInfo[category as keyof typeof categoryInfo]?.description || ''
}
</script>

<style scoped>
.full-width-content {
    width: 100%;
    /* max-width: none; */
}
</style>
