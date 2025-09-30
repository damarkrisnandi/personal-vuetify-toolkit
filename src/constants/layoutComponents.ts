// Layout Components Code Examples
export const GRID_CODE = `<template>
  <!-- Basic Grid -->
  <v-row>
    <v-col cols="12" md="6">
      <v-card color="primary" dark class="pa-4 text-center">
        6 columns on medium+, 12 on small
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card color="secondary" dark class="pa-4 text-center">
        6 columns on medium+, 12 on small
      </v-card>
    </v-col>
  </v-row>

  <!-- Responsive Grid -->
  <v-row>
    <v-col cols="12" sm="6" md="4" lg="3">
      <v-card color="success" dark class="pa-3 text-center">
        Responsive column
      </v-card>
    </v-col>
    <!-- Repeat for more columns -->
  </v-row>
</template>`

export const CONTAINER_CODE = `<template>
  <!-- Fluid Container -->
  <v-container fluid class="bg-grey-lighten-4 pa-4">
    <div class="text-center">Full width container (fluid)</div>
  </v-container>

  <!-- Fixed Container -->
  <v-container class="bg-grey-lighten-3 pa-4">
    <div class="text-center">Fixed width container</div>
  </v-container>
</template>`

export const SPACER_CODE = `<template>
  <div class="d-flex align-center">
    <span>Left content</span>
    <v-spacer></v-spacer>
    <span>Right content</span>
  </div>

  <div class="d-flex align-center">
    <v-btn color="primary">Button 1</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="secondary">Button 2</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="success">Button 3</v-btn>
  </div>
</template>`

export const DIVIDER_CODE = `<template>
  <div>
    <div>Section 1 content</div>
    <v-divider class="my-4"></v-divider>
    <div>Section 2 content</div>
    <v-divider class="my-4" :thickness="3" color="primary"></v-divider>
    <div>Section 3 content</div>

    <!-- Vertical divider -->
    <v-divider vertical class="mx-2" style="height: 40px;"></v-divider>
  </div>
</template>`

export const FLEX_CODE = `<template>
  <!-- Horizontal Alignment -->
  <div class="d-flex justify-start">
    <v-chip>justify-start</v-chip>
  </div>
  <div class="d-flex justify-center">
    <v-chip>justify-center</v-chip>
  </div>
  <div class="d-flex justify-end">
    <v-chip>justify-end</v-chip>
  </div>
  <div class="d-flex justify-space-between">
    <v-chip>Space</v-chip>
    <v-chip>Between</v-chip>
  </div>

  <!-- Vertical Alignment -->
  <div class="d-flex align-start" style="height: 80px;">
    <v-chip>align-start</v-chip>
  </div>
  <div class="d-flex align-center" style="height: 80px;">
    <v-chip>align-center</v-chip>
  </div>
  <div class="d-flex align-end" style="height: 80px;">
    <v-chip>align-end</v-chip>
  </div>
</template>`

export const LAYOUT_PATTERNS_CODE = `<template>
  <!-- Header-Content-Footer Layout -->
  <div class="d-flex flex-column" style="height: 100vh;">
    <div class="bg-primary text-white pa-4">Header</div>
    <div class="flex-grow-1 pa-4">Main Content</div>
    <div class="bg-grey pa-4">Footer</div>
  </div>

  <!-- Sidebar Layout -->
  <div class="d-flex" style="height: 100vh;">
    <div class="bg-primary text-white pa-4" style="width: 250px;">
      Sidebar
    </div>
    <div class="flex-grow-1 pa-4">
      Main Content
    </div>
  </div>

  <!-- Card Grid -->
  <v-row>
    <v-col cols="12" sm="6" md="4" v-for="i in 6" :key="i">
      <v-card class="pa-4">
        <div class="text-h6">Card {{ i }}</div>
        <div class="text-body-2">Card content</div>
      </v-card>
    </v-col>
  </v-row>
</template>`
