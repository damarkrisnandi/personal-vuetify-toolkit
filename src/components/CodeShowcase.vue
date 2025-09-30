<template>
    <v-card class="mb-6 full-width-card" elevation="2">
        <v-card-title class="d-flex align-center">
            <v-icon :icon="icon" class="me-2"></v-icon>
            {{ title }}
            <v-spacer></v-spacer>
            <v-chip :color="chipColor" size="small" variant="tonal">
                {{ difficulty }}
            </v-chip>
        </v-card-title>

        <v-card-text>
            <p v-if="description" class="mb-4">{{ description }}</p>

            <!-- Live Preview -->
            <v-card variant="outlined" class="mb-4">
                <v-card-subtitle>Preview</v-card-subtitle>
                <v-card-text class="pa-4">
                    <slot name="preview"></slot>
                </v-card-text>
            </v-card>

            <!-- Code Display -->
            <v-expansion-panels v-model="panel">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <v-icon icon="mdi-code-tags" class="me-2"></v-icon>
                        View Code
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="position-relative">
                            <v-btn icon="mdi-content-copy" variant="text" size="small" class="copy-btn"
                                @click="copyCode">
                            </v-btn>
                            <div class="code-container">
                                <pre><code ref="codeRef" class="language-vue">{{ code }}</code></pre>
                            </div>
                            <v-snackbar v-model="copied" timeout="2000" color="success">
                                Code copied to clipboard!
                                <template v-slot:actions>
                                    <v-btn variant="text" @click="copied = false">
                                        Close
                                    </v-btn>
                                </template>
                            </v-snackbar>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type { HLJSApi } from 'highlight.js'
import { computed, inject, onMounted, ref } from 'vue'

interface Props {
    title: string
    description?: string
    code: string
    icon?: string
    difficulty?: 'Easy' | 'Medium' | 'Hard'
}

const props = withDefaults(defineProps<Props>(), {
    icon: 'mdi-widgets',
    difficulty: 'Easy'
})

const panel = ref([])
const copied = ref(false)
const codeRef = ref<HTMLElement>()
const hljs = inject<HLJSApi>('hljs')

const chipColor = computed(() => {
    switch (props.difficulty) {
        case 'Easy': return 'success'
        case 'Medium': return 'warning'
        case 'Hard': return 'error'
        default: return 'primary'
    }
})

onMounted(() => {
    if (codeRef.value && hljs) {
        hljs.highlightElement(codeRef.value)
    }
})

async function copyCode() {
    try {
        await navigator.clipboard.writeText(props.code)
        copied.value = true
    } catch (err) {
        console.error('Failed to copy code:', err)
    }
}
</script>

<style scoped>
.full-width-card {
    width: 100%;
    max-width: none;
}

.copy-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.9);
}

.copy-btn:hover {
    background-color: rgba(255, 255, 255, 1);
}

.code-container {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.code-container pre {
    margin: 0;
    padding: 16px;
    overflow-x: auto;
    background-color: #f6f8fa;
    border-radius: 4px;
}

.code-container code {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
    font-size: 14px;
    line-height: 1.5;
    display: block;
    white-space: pre;
}

/* Ensure the copy button container has relative positioning */
.position-relative {
    position: relative;
}

/* Dark theme support */
.v-theme--dark .code-container pre {
    background-color: #0d1117;
    color: #e6edf3;
}

.code-block {
    background-color: #2d3748;
    color: #e2e8f0;
    border-radius: 4px;
    padding: 16px;
    overflow-x: auto;
    margin: 0;
    position: relative;
}

.code-block code {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
    line-height: 1.5;
}
</style>
