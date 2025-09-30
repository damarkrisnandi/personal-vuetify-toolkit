// Navigation Components Code Constants
export const TABS_CODE = `<template>
  <div>
    <v-tabs v-model="currentTab" color="primary">
      <v-tab value="overview">Overview</v-tab>
      <v-tab value="analytics">Analytics</v-tab>
      <v-tab value="settings">Settings</v-tab>
    </v-tabs>

    <v-tabs-window v-model="currentTab">
      <v-tabs-window-item value="overview">
        <v-card flat>
          <v-card-text>
            <h3>Overview Content</h3>
            <p>This is the overview tab content with important information.</p>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="analytics">
        <v-card flat>
          <v-card-text>
            <h3>Analytics Dashboard</h3>
            <p>Charts and metrics would be displayed here.</p>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="settings">
        <v-card flat>
          <v-card-text>
            <h3>Settings Panel</h3>
            <p>Configuration options and preferences.</p>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentTab = ref('overview')
</script>`

export const PAGINATION_CODE = `<template>
  <div class="d-flex flex-column ga-4 align-center">
    <v-pagination
      v-model="currentPage"
      :length="10"
      color="primary"
    ></v-pagination>

    <v-pagination
      v-model="currentPage2"
      :length="15"
      :total-visible="5"
      color="success"
    ></v-pagination>

    <v-pagination
      v-model="currentPage3"
      :length="20"
      :total-visible="7"
      color="purple"
      variant="elevated"
    ></v-pagination>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentPage = ref(1)
const currentPage2 = ref(1)
const currentPage3 = ref(1)
</script>`

export const BREADCRUMBS_CODE = `<template>
  <div class="d-flex flex-column ga-4">
    <v-breadcrumbs :items="breadcrumbItems">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>

    <v-breadcrumbs :items="breadcrumbItems2" color="primary">
      <template v-slot:divider>
        <v-icon icon="mdi-forward"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script setup>
const breadcrumbItems = [
  { title: 'Home', disabled: false },
  { title: 'Components', disabled: false },
  { title: 'Navigation', disabled: true },
]

const breadcrumbItems2 = [
  { title: 'Dashboard', disabled: false },
  { title: 'Users', disabled: false },
  { title: 'Profile', disabled: false },
  { title: 'Settings', disabled: true },
]
</script>`

export const BOTTOM_NAVIGATION_CODE = `<template>
  <div class="position-relative" style="height: 300px;">
    <v-card height="250" class="d-flex align-center justify-center">
      <div class="text-center">
        <h3>Selected: {{ bottomNavValue }}</h3>
        <p>Content for the selected navigation item would appear here.</p>
      </div>
    </v-card>

    <v-bottom-navigation
      v-model="bottomNavValue"
      color="primary"
      grow
    >
      <v-btn value="recent">
        <v-icon>mdi-history</v-icon>
        <span>Recent</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>
        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>
        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bottomNavValue = ref('recent')
</script>`
