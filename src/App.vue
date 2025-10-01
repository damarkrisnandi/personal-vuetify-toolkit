<template>
  <v-app>
    <v-app-bar color="primary" prominent dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" class="text-decoration-none text-white">
          Vuetify Component Toolkit
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ $vuetify.theme.current.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider"
        subtitle="john@vuetifyjs.com" nav>
        <template v-slot:append>
          <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Search Input -->
      <div class="pa-3" v-show="!rail">
        <v-text-field v-model="searchQuery" label="Search components..." prepend-inner-icon="mdi-magnify"
          variant="outlined" density="compact" clearable hide-details></v-text-field>
      </div>

      <v-list density="compact" nav>
        <v-list-item v-for="item in filteredMenuItems" :key="item.title" :prepend-icon="item.icon" :title="item.title"
          :value="item.value" :to="item.route" router exact></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="width: calc(100vw - 100px) !important;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const drawer = ref(true)
const rail = ref(false)
const searchQuery = ref('')
const searchTimeout = ref<number | null>(null)
const debouncedSearchQuery = ref('')

const menuItems = [
  { title: 'Pinned Components', icon: 'mdi-pin', value: 'home', route: '/', keywords: ['pinned', 'favorite', 'quick', 'access'] },
  { title: 'Basic Components', icon: 'mdi-widgets', value: 'basic', route: '/basic', keywords: ['button', 'chip', 'icon', 'avatar', 'badge', 'progress', 'alert'] },
  { title: 'Form Components', icon: 'mdi-form-select', value: 'forms', route: '/forms', keywords: ['input', 'text', 'select', 'checkbox', 'radio', 'slider', 'file', 'textarea', 'validation'] },
  { title: 'Layout Components', icon: 'mdi-view-dashboard', value: 'layout', route: '/layout', keywords: ['grid', 'container', 'spacer', 'divider', 'flex', 'row', 'column'] },
  { title: 'Cards & Surfaces', icon: 'mdi-card', value: 'cards', route: '/cards', keywords: ['card', 'surface', 'pricing', 'profile', 'feature', 'stats'] },
  { title: 'Data Display', icon: 'mdi-table', value: 'data', route: '/data', keywords: ['table', 'list', 'timeline', 'tree', 'virtual', 'scroll', 'expansion', 'panel'] },
  { title: 'Overlay Components', icon: 'mdi-layers', value: 'overlay', route: '/overlay', keywords: ['modal', 'dialog', 'drawer', 'toast', 'snackbar', 'tooltip', 'menu', 'overlay', 'bottom', 'sheet', 'popup'] },
  { title: 'Design Tokens', icon: 'mdi-palette', value: 'design', route: '/design', keywords: ['color', 'icon', 'mdi', 'theme', 'dark', 'light', 'typography', 'elevation', 'surface', 'palette'] },
  { title: 'Navigation', icon: 'mdi-navigation', value: 'navigation', route: '/navigation', keywords: ['tabs', 'pagination', 'breadcrumb', 'bottom', 'nav', 'menu'] },
  { title: 'Complex Examples', icon: 'mdi-rocket', value: 'complex', route: '/complex', keywords: ['login', 'weather', 'dashboard', 'social', 'product', 'quiz', 'wizard', 'order', 'summary', 'notification', 'list', 'chat', 'form', 'registration', 'two', 'column', 'ai'] },
]

// Debounced search implementation
watch(searchQuery, (newValue) => {
  if (searchTimeout.value) {
    clearTimeout(searchTimeout.value)
  }

  searchTimeout.value = setTimeout(() => {
    debouncedSearchQuery.value = newValue || ''
  }, 300)
}, { immediate: true })

// Filtered menu items based on search
const filteredMenuItems = computed(() => {
  if (!debouncedSearchQuery.value) {
    return menuItems
  }

  const query = debouncedSearchQuery.value.toLowerCase()
  return menuItems.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.keywords.some(keyword => keyword.toLowerCase().includes(query))
  )
})

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
