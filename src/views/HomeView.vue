<template>
    <div class="pa-6">
        <div class="text-h4 mb-6 d-flex align-center">
            <v-icon class="me-3">mdi-pin</v-icon>
            Pinned Components
        </div>
        <div class="text-subtitle-1 mb-8 text-medium-emphasis">
            Your frequently used and favorite components for quick access
        </div>

        <!-- Quick Actions -->
        <v-row class="mb-8">
            <v-col cols="12">
                <v-card variant="outlined" class="pa-4">
                    <div class="text-h6 mb-4">Quick Actions</div>
                    <div class="d-flex flex-wrap gap-3">
                        <v-btn color="primary" prepend-icon="mdi-plus" @click="addToPinned">
                            Add Component
                        </v-btn>
                        <v-btn color="secondary" prepend-icon="mdi-eye" @click="previewMode = !previewMode">
                            {{ previewMode ? 'Edit Mode' : 'Preview Mode' }}
                        </v-btn>
                        <v-btn prepend-icon="mdi-download" variant="outlined" @click="exportPinned">
                            Export Pinned
                        </v-btn>
                        <v-btn prepend-icon="mdi-refresh" variant="outlined" @click="resetPinned">
                            Reset
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Pinned Components Grid -->
        <v-row>
            <v-col v-for="component in pinnedComponents" :key="component.id" cols="12" md="6">
                <v-card elevation="2" class="h-100">
                    <v-card-title class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center">
                            <v-icon class="me-2" :color="component.color">{{ component.icon }}</v-icon>
                            <span>{{ component.title }}</span>
                        </div>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn icon="mdi-dots-vertical" size="small" variant="text" v-bind="props"></v-btn>
                            </template>
                            <v-list>
                                <v-list-item @click="viewFullComponent(component)">
                                    <v-list-item-title>View Full</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="copyCode(component)">
                                    <v-list-item-title>Copy Code</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="removePinned(component.id)">
                                    <v-list-item-title>Remove Pin</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>

                    <v-card-subtitle>{{ component.description }}</v-card-subtitle>

                    <v-card-text class="pt-4">
                        <!-- Mini Preview -->
                        <div class="preview-container" v-html="component.preview"></div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn size="small" prepend-icon="mdi-content-copy" @click="copyCode(component)">
                            Copy
                        </v-btn>
                        <v-btn size="small" prepend-icon="mdi-open-in-new" @click="viewFullComponent(component)">
                            View
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-chip size="small" :color="getDifficultyColor(component.difficulty)">
                            {{ component.difficulty }}
                        </v-chip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- Empty State -->
        <v-row v-if="pinnedComponents.length === 0">
            <v-col cols="12">
                <v-card variant="outlined" class="pa-8 text-center">
                    <v-icon size="64" color="grey-lighten-1" class="mb-4">mdi-pin-off</v-icon>
                    <div class="text-h6 mb-2">No Pinned Components</div>
                    <div class="text-body-1 text-medium-emphasis mb-4">
                        Browse through categories and pin your favorite components for quick access
                    </div>
                    <v-btn color="primary" prepend-icon="mdi-widgets" @click="$router.push('/basic')">
                        Browse Components
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>

        <!-- Add Component Dialog -->
        <v-dialog v-model="addDialog" max-width="800">
            <v-card>
                <v-card-title>Add Component to Pinned</v-card-title>
                <v-card-text>
                    <v-select v-model="selectedCategory" :items="categories" label="Category" item-title="title"
                        item-value="value" prepend-icon="mdi-folder" class="mb-4"></v-select>

                    <v-select v-model="selectedComponent" :items="availableComponents" label="Component"
                        item-title="title" item-value="id" prepend-icon="mdi-widgets"
                        :disabled="!selectedCategory">
                        <template v-slot:item="{ props, item }">
                            <v-list-item v-bind="props" :prepend-icon="item.raw.icon">
                                <v-list-item-title>{{ item.raw.title }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.raw.description }}</v-list-item-subtitle>
                                <template v-slot:append>
                                    <v-chip size="small" :color="getDifficultyColor(item.raw.difficulty)">
                                        {{ item.raw.difficulty }}
                                    </v-chip>
                                </template>
                            </v-list-item>
                        </template>
                        <template v-slot:selection="{ item }">
                            <div class="d-flex align-center">
                                <v-icon :icon="item.raw.icon" size="small" class="me-2"></v-icon>
                                <span>{{ item.raw.title }}</span>
                                <v-chip size="x-small" :color="getDifficultyColor(item.raw.difficulty)" class="ms-2">
                                    {{ item.raw.difficulty }}
                                </v-chip>
                            </div>
                        </template>
                    </v-select>

                    <!-- Component Preview -->
                    <div v-if="selectedComponentData" class="mt-4">
                        <v-divider class="mb-4"></v-divider>
                        <div class="text-subtitle-1 mb-3 d-flex align-center">
                            <v-icon :icon="selectedComponentData.icon" class="me-2"></v-icon>
                            Preview: {{ selectedComponentData.title }}
                        </div>
                        <v-card variant="outlined" class="pa-4">
                            <div class="preview-container" v-html="selectedComponentData.previewHtml"></div>
                        </v-card>
                        <div class="text-caption text-medium-emphasis mt-2">
                            {{ selectedComponentData.description }}
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="addDialog = false">Cancel</v-btn>
                    <v-btn color="primary" @click="confirmAdd" :disabled="!selectedComponent">Add</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Toast/Snackbar for notifications -->
        <v-snackbar v-model="showToast" :timeout="3000" :color="toastColor" location="bottom">
            {{ toastMessage }}
            <template v-slot:actions>
                <v-btn variant="text" @click="showToast = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script setup lang="ts">
import {
    categoryMapping,
    getComponentById,
    getComponentsByCategory,
    type ComponentData
} from '@/data/componentRegistry'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface PinnedComponent {
    id: string
    title: string
    description: string
    icon: string
    color: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    category: string
    code: string
    preview: string
    componentId: string // Reference to the actual component ID
}

const STORAGE_KEY = 'vuetify-toolkit-pinned-components'

const previewMode = ref(false)
const addDialog = ref(false)
const selectedCategory = ref('')
const selectedComponent = ref('')

// Toast notification system
const showToast = ref(false)
const toastMessage = ref('')
const toastColor = ref('success')

const showToastNotification = (message: string, color: string = 'success') => {
    toastMessage.value = message
    toastColor.value = color
    showToast.value = true
}

// Load pinned components from localStorage
const loadPinnedComponents = (): PinnedComponent[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
            return JSON.parse(stored)
        }
    } catch (error) {
        console.error('Error loading pinned components from localStorage:', error)
    }

    // Return default components if nothing in localStorage - using real component data
    const buttonsComponent = getComponentById('buttons')
    const loginComponent = getComponentById('login-card')
    const alertsComponent = getComponentById('alerts')

    const defaults: PinnedComponent[] = []

    if (buttonsComponent) {
        defaults.push(createPinnedFromComponent(buttonsComponent))
    }
    if (loginComponent) {
        defaults.push(createPinnedFromComponent(loginComponent))
    }
    if (alertsComponent) {
        defaults.push(createPinnedFromComponent(alertsComponent))
    }

    return defaults
}

// Helper function to create pinned component from registry component
const createPinnedFromComponent = (component: ComponentData): PinnedComponent => {
    return {
        id: `pinned-${component.id}-${Date.now()}`,
        title: component.title,
        description: component.description,
        icon: component.icon,
        color: getColorForCategory(component.category),
        difficulty: component.difficulty,
        category: component.category,
        code: component.code,
        preview: component.previewHtml || `<div class="pa-2 text-center">Preview for ${component.title}</div>`,
        componentId: component.id
    }
}

// Save pinned components to localStorage
const savePinnedComponents = (components: PinnedComponent[]) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(components))
    } catch (error) {
        console.error('Error saving pinned components to localStorage:', error)
    }
}

// Initialize pinned components
const pinnedComponents = ref<PinnedComponent[]>(loadPinnedComponents())

// Watch for changes in pinnedComponents and save to localStorage
watch(pinnedComponents, (newComponents) => {
    savePinnedComponents(newComponents)
}, { deep: true })

// Load data on component mount
onMounted(() => {
    pinnedComponents.value = loadPinnedComponents()
})

const categories = Object.entries(categoryMapping).map(([value, title]) => ({
    title,
    value
}))

const availableComponents = computed(() => {
    if (!selectedCategory.value) return []

    return getComponentsByCategory(selectedCategory.value).map(component => ({
        id: component.id,
        title: component.title,
        description: component.description,
        difficulty: component.difficulty,
        icon: component.icon
    }))
})

const selectedComponentData = computed(() => {
    if (!selectedComponent.value) return null
    return getComponentById(selectedComponent.value)
})

const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
        case 'Easy': return 'success'
        case 'Medium': return 'warning'
        case 'Hard': return 'error'
        default: return 'grey'
    }
}

const addToPinned = () => {
    addDialog.value = true
}

const confirmAdd = () => {
    if (!selectedComponent.value || !selectedCategory.value) return

    // Get the actual component data from registry
    const componentData = getComponentById(selectedComponent.value)
    if (!componentData) {
        showToastNotification('Component not found!', 'error')
        return
    }

    // Check if component is already pinned
    const exists = pinnedComponents.value.some(c => c.componentId === componentData.id)

    if (!exists) {
        const newPinnedComponent = createPinnedFromComponent(componentData)
        pinnedComponents.value.push(newPinnedComponent)
        showToastNotification(`${componentData.title} added to pinned components!`, 'success')
    } else {
        showToastNotification('Component is already pinned!', 'warning')
    }

    addDialog.value = false
    selectedCategory.value = ''
    selectedComponent.value = ''
}

const getIconForCategory = (category: string): string => {
    const icons: Record<string, string> = {
        basic: 'mdi-widgets',
        forms: 'mdi-form-select',
        layout: 'mdi-view-dashboard',
        cards: 'mdi-card',
        data: 'mdi-table',
        overlay: 'mdi-layers',
        design: 'mdi-palette',
        navigation: 'mdi-navigation',
        complex: 'mdi-rocket'
    }
    return icons[category] || 'mdi-widgets'
}

const getColorForCategory = (category: string): string => {
    const colors: Record<string, string> = {
        basic: 'primary',
        forms: 'secondary',
        layout: 'success',
        cards: 'info',
        data: 'warning',
        overlay: 'purple',
        design: 'pink',
        navigation: 'cyan',
        complex: 'orange'
    }
    return colors[category] || 'primary'
}

const removePinned = (id: string) => {
    const index = pinnedComponents.value.findIndex(c => c.id === id)
    if (index > -1) {
        const component = pinnedComponents.value[index]
        pinnedComponents.value.splice(index, 1)
        showToastNotification(`${component?.title || 'Component'} removed from pinned components`, 'info')
    }
}

const resetPinned = () => {
    pinnedComponents.value = []
    showToastNotification('All pinned components have been reset', 'info')
}

const exportPinned = () => {
    const dataStr = JSON.stringify(pinnedComponents.value, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'pinned-components.json'
    link.click()
    URL.revokeObjectURL(url)
    showToastNotification('Pinned components exported successfully!', 'success')
}

const copyCode = async (component: PinnedComponent) => {
    try {
        await navigator.clipboard.writeText(component.code)
        showToastNotification('Code copied to clipboard!', 'success')
    } catch (err) {
        console.error('Failed to copy code:', err)
        showToastNotification('Failed to copy code to clipboard', 'error')
    }
}

const viewFullComponent = (component: PinnedComponent) => {
    router.push(`/${component.category}`)
}
</script>

<style scoped>
.preview-container {
    min-height: 80px;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.alert {
    border-radius: 4px;
}

.border {
    border: 1px solid #ccc;
}

.gap-2>*+* {
    margin-top: 8px;
}
</style>
