// Design Tokens Code Constants - Colors and Icons
export const COLOR_SYSTEM_CODE = `<template>
  <div>
    <!-- Primary Colors -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Primary Color Palette</h3>
      <v-row>
        <v-col v-for="(color, index) in primaryColors" :key="index" cols="6" md="3">
          <v-card :color="color.value" class="text-center pa-4" style="min-height: 120px;">
            <div class="text-white font-weight-bold">{{ color.name }}</div>
            <div class="text-white text-caption mt-2">{{ color.value }}</div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Material Design Colors -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Material Design Colors</h3>
      <v-row>
        <v-col v-for="(colorGroup, name) in materialColors" :key="name" cols="12" md="6">
          <div class="mb-4">
            <h4 class="text-subtitle-1 mb-2 text-capitalize">{{ name }}</h4>
            <v-row no-gutters>
              <v-col v-for="(shade, index) in colorGroup" :key="index" cols="3">
                <v-card
                  :color="shade.value"
                  class="text-center pa-2"
                  style="min-height: 60px; border-radius: 0;"
                >
                  <div class="text-white text-caption font-weight-bold">{{ shade.name }}</div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Color Usage Examples -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Color Usage in Components</h3>
      <v-row>
        <v-col cols="12" md="6">
          <h4 class="text-subtitle-1 mb-3">Buttons</h4>
          <div class="d-flex flex-wrap ga-2 mb-4">
            <v-btn color="primary">Primary</v-btn>
            <v-btn color="secondary">Secondary</v-btn>
            <v-btn color="success">Success</v-btn>
            <v-btn color="warning">Warning</v-btn>
            <v-btn color="error">Error</v-btn>
            <v-btn color="info">Info</v-btn>
          </div>

          <h4 class="text-subtitle-1 mb-3">Chips</h4>
          <div class="d-flex flex-wrap ga-2 mb-4">
            <v-chip color="red">Red</v-chip>
            <v-chip color="pink">Pink</v-chip>
            <v-chip color="purple">Purple</v-chip>
            <v-chip color="indigo">Indigo</v-chip>
            <v-chip color="blue">Blue</v-chip>
            <v-chip color="cyan">Cyan</v-chip>
            <v-chip color="teal">Teal</v-chip>
            <v-chip color="green">Green</v-chip>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <h4 class="text-subtitle-1 mb-3">Alerts</h4>
          <v-alert type="success" class="mb-2">Success alert</v-alert>
          <v-alert type="info" class="mb-2">Info alert</v-alert>
          <v-alert type="warning" class="mb-2">Warning alert</v-alert>
          <v-alert type="error" class="mb-2">Error alert</v-alert>

          <h4 class="text-subtitle-1 mb-3">Progress</h4>
          <v-progress-linear color="primary" :model-value="75" class="mb-2"></v-progress-linear>
          <v-progress-linear color="success" :model-value="60" class="mb-2"></v-progress-linear>
          <v-progress-linear color="warning" :model-value="40" class="mb-2"></v-progress-linear>
          <v-progress-linear color="error" :model-value="25"></v-progress-linear>
        </v-col>
      </v-row>
    </div>

    <!-- Text Colors -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Text Colors</h3>
      <div class="d-flex flex-wrap ga-4">
        <div class="text-primary">Primary Text</div>
        <div class="text-secondary">Secondary Text</div>
        <div class="text-success">Success Text</div>
        <div class="text-warning">Warning Text</div>
        <div class="text-error">Error Text</div>
        <div class="text-info">Info Text</div>
        <div class="text-grey">Grey Text</div>
        <div class="text-grey-lighten-1">Grey Lighten 1</div>
        <div class="text-grey-darken-1">Grey Darken 1</div>
      </div>
    </div>

    <!-- Background Colors -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Background Colors</h3>
      <v-row>
        <v-col v-for="bgColor in backgroundColors" :key="bgColor.name" cols="6" md="3">
          <div :class="'pa-4 text-center ' + bgColor.class" style="min-height: 80px;">
            <div :class="bgColor.textClass">{{ bgColor.name }}</div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const primaryColors = [
  { name: 'Primary', value: 'primary' },
  { name: 'Secondary', value: 'secondary' },
  { name: 'Success', value: 'success' },
  { name: 'Warning', value: 'warning' },
  { name: 'Error', value: 'error' },
  { name: 'Info', value: 'info' }
]

const materialColors = {
  red: [
    { name: 'Red', value: 'red' },
    { name: 'Lighten 2', value: 'red-lighten-2' },
    { name: 'Darken 1', value: 'red-darken-1' },
    { name: 'Darken 4', value: 'red-darken-4' }
  ],
  blue: [
    { name: 'Blue', value: 'blue' },
    { name: 'Lighten 2', value: 'blue-lighten-2' },
    { name: 'Darken 1', value: 'blue-darken-1' },
    { name: 'Darken 4', value: 'blue-darken-4' }
  ],
  green: [
    { name: 'Green', value: 'green' },
    { name: 'Lighten 2', value: 'green-lighten-2' },
    { name: 'Darken 1', value: 'green-darken-1' },
    { name: 'Darken 4', value: 'green-darken-4' }
  ],
  purple: [
    { name: 'Purple', value: 'purple' },
    { name: 'Lighten 2', value: 'purple-lighten-2' },
    { name: 'Darken 1', value: 'purple-darken-1' },
    { name: 'Darken 4', value: 'purple-darken-4' }
  ]
}

const backgroundColors = [
  { name: 'Primary BG', class: 'bg-primary', textClass: 'text-white' },
  { name: 'Success BG', class: 'bg-success', textClass: 'text-white' },
  { name: 'Warning BG', class: 'bg-warning', textClass: 'text-black' },
  { name: 'Error BG', class: 'bg-error', textClass: 'text-white' },
  { name: 'Grey BG', class: 'bg-grey-lighten-3', textClass: 'text-black' },
  { name: 'Surface BG', class: 'bg-surface', textClass: 'text-on-surface' }
]
</script>`

export const MDI_ICONS_CODE = `<template>
  <div>
    <!-- Icon Categories -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Icon Categories</h3>
      <v-row>
        <v-col v-for="(category, name) in iconCategories" :key="name" cols="12" md="6" lg="4">
          <v-card class="pa-4">
            <h4 class="text-subtitle-1 mb-3 text-capitalize">{{ name }}</h4>
            <div class="d-flex flex-wrap ga-3">
              <div
                v-for="icon in category"
                :key="icon.name"
                class="text-center"
                style="min-width: 60px;"
              >
                <v-icon :icon="icon.icon" size="24" class="mb-1"></v-icon>
                <div class="text-caption">{{ icon.name }}</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Icon Sizes -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Icon Sizes</h3>
      <v-card class="pa-6">
        <div class="d-flex align-center justify-space-around flex-wrap ga-4">
          <div class="text-center">
            <v-icon icon="mdi-home" size="x-small" class="mb-2"></v-icon>
            <div class="text-caption">x-small</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-home" size="small" class="mb-2"></v-icon>
            <div class="text-caption">small</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-home" size="default" class="mb-2"></v-icon>
            <div class="text-caption">default</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-home" size="large" class="mb-2"></v-icon>
            <div class="text-caption">large</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-home" size="x-large" class="mb-2"></v-icon>
            <div class="text-caption">x-large</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-home" size="48" class="mb-2"></v-icon>
            <div class="text-caption">custom (48px)</div>
          </div>
        </div>
      </v-card>
    </div>

    <!-- Icon Colors -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Icon Colors</h3>
      <v-card class="pa-6">
        <div class="d-flex flex-wrap ga-6 align-center">
          <div class="text-center">
            <v-icon icon="mdi-heart" color="primary" size="32" class="mb-2"></v-icon>
            <div class="text-caption">Primary</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-heart" color="secondary" size="32" class="mb-2"></v-icon>
            <div class="text-caption">Secondary</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-heart" color="success" size="32" class="mb-2"></v-icon>
            <div class="text-caption">Success</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-heart" color="warning" size="32" class="mb-2"></v-icon>
            <div class="text-caption">Warning</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-heart" color="error" size="32" class="mb-2"></v-icon>
            <div class="text-caption">Error</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-heart" color="info" size="32" class="mb-2"></v-icon>
            <div class="text-caption">Info</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-heart" color="red" size="32" class="mb-2"></v-icon>
            <div class="text-caption">Red</div>
          </div>
          <div class="text-center">
            <v-icon icon="mdi-heart" color="purple" size="32" class="mb-2"></v-icon>
            <div class="text-caption">Purple</div>
          </div>
        </div>
      </v-card>
    </div>

    <!-- Icon Usage in Components -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Icons in Components</h3>
      <v-row>
        <v-col cols="12" md="6">
          <h4 class="text-subtitle-1 mb-3">Buttons with Icons</h4>
          <div class="d-flex flex-wrap ga-2 mb-4">
            <v-btn prepend-icon="mdi-plus" color="primary">Add</v-btn>
            <v-btn append-icon="mdi-arrow-right" color="secondary">Next</v-btn>
            <v-btn icon="mdi-heart" color="error"></v-btn>
            <v-btn prepend-icon="mdi-download" variant="outlined">Download</v-btn>
          </div>

          <h4 class="text-subtitle-1 mb-3">List Items with Icons</h4>
          <v-list density="compact">
            <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Profile"></v-list-item>
            <v-list-item prepend-icon="mdi-cog" title="Settings"></v-list-item>
            <v-list-item prepend-icon="mdi-help-circle" title="Help"></v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="6">
          <h4 class="text-subtitle-1 mb-3">Text Fields with Icons</h4>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            label="Search"
            variant="outlined"
            class="mb-3"
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-email"
            label="Email"
            variant="outlined"
            class="mb-3"
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-lock"
            append-inner-icon="mdi-eye"
            label="Password"
            type="password"
            variant="outlined"
            class="mb-4"
          ></v-text-field>

          <h4 class="text-subtitle-1 mb-3">Chips with Icons</h4>
          <div class="d-flex flex-wrap ga-2">
            <v-chip prepend-icon="mdi-check" color="success">Completed</v-chip>
            <v-chip prepend-icon="mdi-clock" color="warning">Pending</v-chip>
            <v-chip prepend-icon="mdi-close" color="error">Failed</v-chip>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Popular Icons Grid -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Popular MDI Icons</h3>
      <v-card class="pa-4">
        <v-row>
          <v-col
            v-for="icon in popularIcons"
            :key="icon.icon"
            cols="6" sm="4" md="3" lg="2"
          >
            <div class="text-center pa-2 rounded hover:bg-grey-lighten-4 cursor-pointer">
              <v-icon :icon="icon.icon" size="32" class="mb-2"></v-icon>
              <div class="text-caption">{{ icon.name }}</div>
              <div class="text-caption text-grey">{{ icon.icon }}</div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const iconCategories = {
  navigation: [
    { name: 'Home', icon: 'mdi-home' },
    { name: 'Menu', icon: 'mdi-menu' },
    { name: 'Back', icon: 'mdi-arrow-left' },
    { name: 'Forward', icon: 'mdi-arrow-right' },
    { name: 'Up', icon: 'mdi-arrow-up' },
    { name: 'Down', icon: 'mdi-arrow-down' }
  ],
  actions: [
    { name: 'Add', icon: 'mdi-plus' },
    { name: 'Delete', icon: 'mdi-delete' },
    { name: 'Edit', icon: 'mdi-pencil' },
    { name: 'Save', icon: 'mdi-content-save' },
    { name: 'Search', icon: 'mdi-magnify' },
    { name: 'Filter', icon: 'mdi-filter' }
  ],
  communication: [
    { name: 'Email', icon: 'mdi-email' },
    { name: 'Phone', icon: 'mdi-phone' },
    { name: 'Message', icon: 'mdi-message' },
    { name: 'Chat', icon: 'mdi-chat' },
    { name: 'Video', icon: 'mdi-video' },
    { name: 'Bell', icon: 'mdi-bell' }
  ],
  social: [
    { name: 'Share', icon: 'mdi-share' },
    { name: 'Like', icon: 'mdi-heart' },
    { name: 'Star', icon: 'mdi-star' },
    { name: 'Follow', icon: 'mdi-account-plus' },
    { name: 'Comment', icon: 'mdi-comment' },
    { name: 'Bookmark', icon: 'mdi-bookmark' }
  ],
  files: [
    { name: 'File', icon: 'mdi-file' },
    { name: 'Folder', icon: 'mdi-folder' },
    { name: 'Download', icon: 'mdi-download' },
    { name: 'Upload', icon: 'mdi-upload' },
    { name: 'Attachment', icon: 'mdi-attachment' },
    { name: 'Cloud', icon: 'mdi-cloud' }
  ],
  status: [
    { name: 'Success', icon: 'mdi-check-circle' },
    { name: 'Warning', icon: 'mdi-alert' },
    { name: 'Error', icon: 'mdi-close-circle' },
    { name: 'Info', icon: 'mdi-information' },
    { name: 'Loading', icon: 'mdi-loading' },
    { name: 'Help', icon: 'mdi-help-circle' }
  ]
}

const popularIcons = [
  { name: 'Home', icon: 'mdi-home' },
  { name: 'Settings', icon: 'mdi-cog' },
  { name: 'Account', icon: 'mdi-account' },
  { name: 'Heart', icon: 'mdi-heart' },
  { name: 'Star', icon: 'mdi-star' },
  { name: 'Plus', icon: 'mdi-plus' },
  { name: 'Delete', icon: 'mdi-delete' },
  { name: 'Edit', icon: 'mdi-pencil' },
  { name: 'Search', icon: 'mdi-magnify' },
  { name: 'Close', icon: 'mdi-close' },
  { name: 'Check', icon: 'mdi-check' },
  { name: 'Arrow Right', icon: 'mdi-arrow-right' },
  { name: 'Menu', icon: 'mdi-menu' },
  { name: 'Email', icon: 'mdi-email' },
  { name: 'Phone', icon: 'mdi-phone' },
  { name: 'Calendar', icon: 'mdi-calendar' },
  { name: 'Clock', icon: 'mdi-clock' },
  { name: 'Location', icon: 'mdi-map-marker' },
  { name: 'Download', icon: 'mdi-download' },
  { name: 'Share', icon: 'mdi-share' },
  { name: 'Camera', icon: 'mdi-camera' },
  { name: 'Image', icon: 'mdi-image' },
  { name: 'Music', icon: 'mdi-music' },
  { name: 'Video', icon: 'mdi-video' },
  { name: 'File', icon: 'mdi-file' },
  { name: 'Folder', icon: 'mdi-folder' },
  { name: 'Bell', icon: 'mdi-bell' },
  { name: 'Lock', icon: 'mdi-lock' },
  { name: 'Eye', icon: 'mdi-eye' },
  { name: 'Info', icon: 'mdi-information' }
]
</script>`

export const THEME_SYSTEM_CODE = `<template>
  <div>
    <!-- Theme Toggle -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Theme System</h3>
      <v-card class="pa-6">
        <div class="d-flex align-center justify-space-between mb-4">
          <div>
            <h4 class="text-subtitle-1">Current Theme</h4>
            <p class="text-body-2 text-grey">Switch between light and dark themes</p>
          </div>
          <v-switch
            v-model="isDark"
            :prepend-icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
            @update:model-value="toggleTheme"
            color="primary"
          ></v-switch>
        </div>

        <v-alert type="info" variant="tonal">
          Theme changes are automatically applied to all components and respect user preferences.
        </v-alert>
      </v-card>
    </div>

    <!-- Surface Colors -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Surface & Background Colors</h3>
      <v-row>
        <v-col v-for="surface in surfaceColors" :key="surface.name" cols="6" md="4" lg="3">
          <v-card :class="surface.class" class="pa-4 text-center" style="min-height: 120px;">
            <div :class="surface.textClass + ' font-weight-bold'">{{ surface.name }}</div>
            <div :class="surface.textClass + ' text-caption mt-2'">{{ surface.class }}</div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Typography with Theme -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Typography & Text Colors</h3>
      <v-card class="pa-6">
        <div class="text-h3 mb-2">Heading 1 - Display Large</div>
        <div class="text-h4 mb-2">Heading 2 - Display Medium</div>
        <div class="text-h5 mb-2">Heading 3 - Display Small</div>
        <div class="text-h6 mb-2">Heading 4 - Headline Large</div>
        <div class="text-subtitle-1 mb-2">Subtitle 1 - Headline Medium</div>
        <div class="text-subtitle-2 mb-2">Subtitle 2 - Headline Small</div>
        <div class="text-body-1 mb-2">Body 1 - Body Large</div>
        <div class="text-body-2 mb-2">Body 2 - Body Medium</div>
        <div class="text-caption mb-2">Caption - Body Small</div>
        <div class="text-overline">Overline - Label Small</div>

        <v-divider class="my-4"></v-divider>

        <div class="text-high-emphasis mb-2">High Emphasis Text (87% opacity)</div>
        <div class="text-medium-emphasis mb-2">Medium Emphasis Text (60% opacity)</div>
        <div class="text-disabled">Disabled Text (38% opacity)</div>
      </v-card>
    </div>

    <!-- Theme-aware Components -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Theme-aware Components</h3>
      <v-row>
        <v-col cols="12" md="6">
          <h4 class="text-subtitle-1 mb-3">Cards & Surfaces</h4>
          <v-card class="mb-3">
            <v-card-title>Default Card</v-card-title>
            <v-card-text>This card adapts to the current theme automatically.</v-card-text>
          </v-card>

          <v-card variant="elevated" class="mb-3">
            <v-card-title>Elevated Card</v-card-title>
            <v-card-text>Higher elevation for important content.</v-card-text>
          </v-card>

          <v-card variant="outlined">
            <v-card-title>Outlined Card</v-card-title>
            <v-card-text>Subtle border for content separation.</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <h4 class="text-subtitle-1 mb-3">Interactive Elements</h4>
          <div class="mb-4">
            <v-btn class="me-2 mb-2">Default Button</v-btn>
            <v-btn variant="elevated" class="me-2 mb-2">Elevated</v-btn>
            <v-btn variant="outlined" class="me-2 mb-2">Outlined</v-btn>
            <v-btn variant="text" class="mb-2">Text</v-btn>
          </div>

          <v-text-field
            label="Theme-aware Input"
            variant="outlined"
            class="mb-3"
          ></v-text-field>

          <v-select
            :items="['Option 1', 'Option 2', 'Option 3']"
            label="Theme-aware Select"
            variant="outlined"
            class="mb-3"
          ></v-select>

          <v-textarea
            label="Theme-aware Textarea"
            variant="outlined"
            rows="3"
          ></v-textarea>
        </v-col>
      </v-row>
    </div>

    <!-- Elevation System -->
    <div class="mb-8">
      <h3 class="text-h6 mb-4">Elevation System</h3>
      <v-row>
        <v-col v-for="elevation in elevations" :key="elevation.level" cols="6" md="4" lg="3">
          <v-card :elevation="elevation.level" class="pa-4 text-center" style="min-height: 100px;">
            <div class="font-weight-bold">{{ elevation.name }}</div>
            <div class="text-caption mt-2">elevation="{{ elevation.level }}"</div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  isDark.value = theme.global.current.value.dark
}

const surfaceColors = [
  { name: 'Background', class: 'bg-background', textClass: 'text-on-background' },
  { name: 'Surface', class: 'bg-surface', textClass: 'text-on-surface' },
  { name: 'Surface Variant', class: 'bg-surface-variant', textClass: 'text-on-surface-variant' },
  { name: 'Primary Container', class: 'bg-primary-container', textClass: 'text-on-primary-container' },
  { name: 'Secondary Container', class: 'bg-secondary-container', textClass: 'text-on-secondary-container' },
  { name: 'Error Container', class: 'bg-error-container', textClass: 'text-on-error-container' }
]

const elevations = [
  { name: 'Elevation 0', level: 0 },
  { name: 'Elevation 1', level: 1 },
  { name: 'Elevation 2', level: 2 },
  { name: 'Elevation 4', level: 4 },
  { name: 'Elevation 6', level: 6 },
  { name: 'Elevation 8', level: 8 },
  { name: 'Elevation 12', level: 12 },
  { name: 'Elevation 16', level: 16 }
]
</script>`
