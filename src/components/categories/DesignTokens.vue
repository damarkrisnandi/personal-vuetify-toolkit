<template>
  <div>
    <h2 class="text-h4 mb-6">Design Tokens</h2>
    <p class="text-body-1 mb-8">
      Explore Vuetify's design system including colors, icons, typography, and theming capabilities.
    </p>

    <!-- Color System -->
    <CodeShowcase
      title="Color System"
      description="Comprehensive color palette including primary colors, Material Design colors, and usage examples"
      :code="COLOR_SYSTEM_CODE"
      keywords="color,palette,primary,secondary,material,design,background,text"
    >
      <template #preview>
        <div>
          <!-- Primary Colors Preview -->
          <div class="mb-6">
            <h4 class="text-subtitle-1 mb-3">Primary Color Palette</h4>
            <div class="d-flex flex-wrap ga-2">
              <v-chip color="primary">Primary</v-chip>
              <v-chip color="secondary">Secondary</v-chip>
              <v-chip color="success">Success</v-chip>
              <v-chip color="warning">Warning</v-chip>
              <v-chip color="error">Error</v-chip>
              <v-chip color="info">Info</v-chip>
            </div>
          </div>
          
          <!-- Material Colors Preview -->
          <div class="mb-6">
            <h4 class="text-subtitle-1 mb-3">Material Design Colors</h4>
            <div class="d-flex flex-wrap ga-2">
              <v-chip color="red">Red</v-chip>
              <v-chip color="pink">Pink</v-chip>
              <v-chip color="purple">Purple</v-chip>
              <v-chip color="indigo">Indigo</v-chip>
              <v-chip color="blue">Blue</v-chip>
              <v-chip color="cyan">Cyan</v-chip>
              <v-chip color="teal">Teal</v-chip>
              <v-chip color="green">Green</v-chip>
              <v-chip color="lime">Lime</v-chip>
              <v-chip color="yellow">Yellow</v-chip>
              <v-chip color="amber">Amber</v-chip>
              <v-chip color="orange">Orange</v-chip>
            </div>
          </div>
          
          <!-- Text Colors Preview -->
          <div>
            <h4 class="text-subtitle-1 mb-3">Text Colors</h4>
            <div class="d-flex flex-wrap ga-4">
              <span class="text-primary">Primary Text</span>
              <span class="text-secondary">Secondary Text</span>
              <span class="text-success">Success Text</span>
              <span class="text-warning">Warning Text</span>
              <span class="text-error">Error Text</span>
              <span class="text-info">Info Text</span>
            </div>
          </div>
        </div>
      </template>
    </CodeShowcase>

    <!-- MDI Icons -->
    <CodeShowcase
      title="MDI Icons"
      description="Material Design Icons integration with Vuetify, including sizes, colors, and usage patterns"
      :code="MDI_ICONS_CODE"
      keywords="icon,mdi,material,design,size,color,button,list,navigation"
    >
      <template #preview>
        <div>
          <!-- Icon Sizes -->
          <div class="mb-6">
            <h4 class="text-subtitle-1 mb-3">Icon Sizes</h4>
            <div class="d-flex align-center ga-6">
              <div class="text-center">
                <v-icon icon="mdi-heart" size="x-small" class="mb-1"></v-icon>
                <div class="text-caption">x-small</div>
              </div>
              <div class="text-center">
                <v-icon icon="mdi-heart" size="small" class="mb-1"></v-icon>
                <div class="text-caption">small</div>
              </div>
              <div class="text-center">
                <v-icon icon="mdi-heart" size="default" class="mb-1"></v-icon>
                <div class="text-caption">default</div>
              </div>
              <div class="text-center">
                <v-icon icon="mdi-heart" size="large" class="mb-1"></v-icon>
                <div class="text-caption">large</div>
              </div>
              <div class="text-center">
                <v-icon icon="mdi-heart" size="x-large" class="mb-1"></v-icon>
                <div class="text-caption">x-large</div>
              </div>
            </div>
          </div>
          
          <!-- Icon Colors -->
          <div class="mb-6">
            <h4 class="text-subtitle-1 mb-3">Icon Colors</h4>
            <div class="d-flex align-center ga-4">
              <v-icon icon="mdi-star" color="primary" size="28"></v-icon>
              <v-icon icon="mdi-star" color="success" size="28"></v-icon>
              <v-icon icon="mdi-star" color="warning" size="28"></v-icon>
              <v-icon icon="mdi-star" color="error" size="28"></v-icon>
              <v-icon icon="mdi-star" color="info" size="28"></v-icon>
              <v-icon icon="mdi-star" color="purple" size="28"></v-icon>
            </div>
          </div>
          
          <!-- Popular Icons -->
          <div>
            <h4 class="text-subtitle-1 mb-3">Popular Icons</h4>
            <div class="d-flex flex-wrap ga-4">
              <v-tooltip text="Home" v-for="icon in previewIcons" :key="icon.icon">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" :icon="icon.icon" size="24"></v-icon>
                </template>
              </v-tooltip>
            </div>
          </div>
        </div>
      </template>
    </CodeShowcase>

    <!-- Theme System -->
    <CodeShowcase
      title="Theme System"
      description="Dark/light theme switching, surface colors, typography, and elevation system"
      :code="THEME_SYSTEM_CODE"
      keywords="theme,dark,light,surface,background,typography,elevation,material"
    >
      <template #preview>
        <div>
          <!-- Theme Toggle -->
          <div class="mb-6">
            <h4 class="text-subtitle-1 mb-3">Theme Toggle</h4>
            <div class="d-flex align-center ga-3">
              <v-icon icon="mdi-weather-sunny"></v-icon>
              <v-switch
                v-model="previewDarkMode"
                color="primary"
                hide-details
                @update:model-value="togglePreviewTheme"
              ></v-switch>
              <v-icon icon="mdi-weather-night"></v-icon>
            </div>
          </div>
          
          <!-- Surface Examples -->
          <div class="mb-6">
            <h4 class="text-subtitle-1 mb-3">Surface Variants</h4>
            <div class="d-flex ga-3">
              <v-card class="pa-3" variant="elevated">
                <div class="text-caption">Elevated</div>
              </v-card>
              <v-card class="pa-3" variant="outlined">
                <div class="text-caption">Outlined</div>
              </v-card>
              <v-card class="pa-3" variant="flat">
                <div class="text-caption">Flat</div>
              </v-card>
              <v-card class="pa-3" variant="tonal">
                <div class="text-caption">Tonal</div>
              </v-card>
            </div>
          </div>
          
          <!-- Typography -->
          <div>
            <h4 class="text-subtitle-1 mb-3">Typography Scale</h4>
            <div class="text-h4 mb-1">Display Large</div>
            <div class="text-h5 mb-1">Display Medium</div>
            <div class="text-h6 mb-1">Headline Large</div>
            <div class="text-subtitle-1 mb-1">Title Large</div>
            <div class="text-body-1 mb-1">Body Large</div>
            <div class="text-body-2 mb-1">Body Medium</div>
            <div class="text-caption">Label Small</div>
          </div>
        </div>
      </template>
    </CodeShowcase>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import CodeShowcase from '../CodeShowcase.vue'
import {
  COLOR_SYSTEM_CODE,
  MDI_ICONS_CODE,
  THEME_SYSTEM_CODE
} from '../../constants/designTokens'

const theme = useTheme()
const previewDarkMode = ref(theme.global.current.value.dark)

const togglePreviewTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const previewIcons = [
  { icon: 'mdi-home' },
  { icon: 'mdi-heart' },
  { icon: 'mdi-star' },
  { icon: 'mdi-plus' },
  { icon: 'mdi-delete' },
  { icon: 'mdi-pencil' },
  { icon: 'mdi-magnify' },
  { icon: 'mdi-cog' },
  { icon: 'mdi-account' },
  { icon: 'mdi-email' },
  { icon: 'mdi-phone' },
  { icon: 'mdi-calendar' },
  { icon: 'mdi-clock' },
  { icon: 'mdi-bell' },
  { icon: 'mdi-share' },
  { icon: 'mdi-download' }
]
</script>