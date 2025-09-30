<template>
    <div>
        <!-- Grid System -->
        <CodeShowcase title="Grid System"
            description="Responsive grid layouts using Vuetify's v-row and v-col components" icon="mdi-grid"
            difficulty="Easy" :code="gridCode">
            <template #preview>
                <div>
                    <div class="mb-4">
                        <div class="text-subtitle-1 mb-2">Basic Grid</div>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-card color="primary" dark class="pa-4 text-center">
                                    <div>6 columns on medium+</div>
                                    <div>12 columns on small</div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card color="secondary" dark class="pa-4 text-center">
                                    <div>6 columns on medium+</div>
                                    <div>12 columns on small</div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>

                    <div class="mb-4">
                        <div class="text-subtitle-1 mb-2">Responsive Grid</div>
                        <v-row>
                            <v-col cols="12" sm="6" md="4" lg="3">
                                <v-card color="success" dark class="pa-3 text-center">
                                    <div class="text-caption">12/6/4/3</div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="4" lg="3">
                                <v-card color="info" dark class="pa-3 text-center">
                                    <div class="text-caption">12/6/4/3</div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="4" lg="3">
                                <v-card color="warning" dark class="pa-3 text-center">
                                    <div class="text-caption">12/6/4/3</div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="4" lg="3">
                                <v-card color="error" dark class="pa-3 text-center">
                                    <div class="text-caption">12/6/4/3</div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </template>
        </CodeShowcase>

        <!-- Containers -->
        <CodeShowcase title="Containers" description="Different container types for layout structure"
            icon="mdi-crop-free" difficulty="Easy" :code="containerCode">
            <template #preview>
                <div class="d-flex flex-column ga-4">
                    <div>
                        <div class="text-subtitle-1 mb-2">Fluid Container</div>
                        <v-container fluid class="bg-grey-lighten-4 pa-4">
                            <div class="text-center">Full width container (fluid)</div>
                        </v-container>
                    </div>

                    <div>
                        <div class="text-subtitle-1 mb-2">Fixed Container</div>
                        <v-container class="bg-grey-lighten-3 pa-4">
                            <div class="text-center">Fixed width container</div>
                        </v-container>
                    </div>
                </div>
            </template>
        </CodeShowcase>

        <!-- Spacer -->
        <CodeShowcase title="Spacer" description="Flexible spacing component for layouts"
            icon="mdi-arrow-expand-horizontal" difficulty="Easy" :code="spacerCode">
            <template #preview>
                <v-card class="pa-4">
                    <div class="d-flex align-center mb-4">
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
                </v-card>
            </template>
        </CodeShowcase>

        <!-- Dividers -->
        <CodeShowcase title="Dividers" description="Visual separators for content sections" icon="mdi-minus"
            difficulty="Easy" :code="dividerCode">
            <template #preview>
                <v-card class="pa-4">
                    <div>Section 1 content</div>
                    <v-divider class="my-4"></v-divider>
                    <div>Section 2 content</div>
                    <v-divider class="my-4" :thickness="3" color="primary"></v-divider>
                    <div>Section 3 content</div>
                    <v-divider class="my-4" vertical style="height: 40px; display: inline-block;"></v-divider>
                    <span class="mx-3">Vertical divider</span>
                    <v-divider class="my-4" vertical style="height: 40px; display: inline-block;"></v-divider>
                </v-card>
            </template>
        </CodeShowcase>

        <!-- Flex Utilities -->
        <CodeShowcase title="Flex Utilities" description="Flexbox utility classes for layout control"
            icon="mdi-view-sequential" difficulty="Medium" :code="flexCode">
            <template #preview>
                <div class="d-flex flex-column ga-4">
                    <div>
                        <div class="text-subtitle-1 mb-2">Horizontal Alignment</div>
                        <div class="d-flex justify-start bg-grey-lighten-4 pa-2 mb-2">
                            <v-chip color="primary">justify-start</v-chip>
                        </div>
                        <div class="d-flex justify-center bg-grey-lighten-4 pa-2 mb-2">
                            <v-chip color="primary">justify-center</v-chip>
                        </div>
                        <div class="d-flex justify-end bg-grey-lighten-4 pa-2 mb-2">
                            <v-chip color="primary">justify-end</v-chip>
                        </div>
                        <div class="d-flex justify-space-between bg-grey-lighten-4 pa-2">
                            <v-chip color="primary">Space</v-chip>
                            <v-chip color="secondary">Between</v-chip>
                        </div>
                    </div>

                    <div>
                        <div class="text-subtitle-1 mb-2">Vertical Alignment</div>
                        <div class="d-flex align-start bg-grey-lighten-4 pa-2" style="height: 80px;">
                            <v-chip color="info">align-start</v-chip>
                        </div>
                        <div class="d-flex align-center bg-grey-lighten-4 pa-2 my-2" style="height: 80px;">
                            <v-chip color="info">align-center</v-chip>
                        </div>
                        <div class="d-flex align-end bg-grey-lighten-4 pa-2" style="height: 80px;">
                            <v-chip color="info">align-end</v-chip>
                        </div>
                    </div>
                </div>
            </template>
        </CodeShowcase>

        <!-- Layout Examples -->
        <CodeShowcase title="Common Layout Patterns" description="Real-world layout examples and patterns"
            icon="mdi-page-layout-body" difficulty="Medium" :code="layoutPatternsCode">
            <template #preview>
                <div class="d-flex flex-column ga-6">
                    <!-- Header-Content-Footer -->
                    <div>
                        <div class="text-subtitle-1 mb-2">Header-Content-Footer Layout</div>
                        <div class="border rounded" style="height: 200px;">
                            <div class="bg-primary text-white pa-2 text-center">Header</div>
                            <div class="flex-grow-1 pa-4 text-center" style="height: 140px;">
                                <div class="h-100 d-flex align-center justify-center bg-grey-lighten-4">
                                    Main Content Area
                                </div>
                            </div>
                            <div class="bg-grey text-center pa-2">Footer</div>
                        </div>
                    </div>

                    <!-- Sidebar Layout -->
                    <div>
                        <div class="text-subtitle-1 mb-2">Sidebar Layout</div>
                        <div class="d-flex border rounded" style="height: 150px;">
                            <div class="bg-primary text-white pa-4 d-flex align-center justify-center"
                                style="width: 200px;">
                                Sidebar
                            </div>
                            <div class="flex-grow-1 pa-4 d-flex align-center justify-center bg-grey-lighten-4">
                                Main Content
                            </div>
                        </div>
                    </div>

                    <!-- Card Grid -->
                    <div>
                        <div class="text-subtitle-1 mb-2">Card Grid Layout</div>
                        <v-row>
                            <v-col cols="12" sm="6" md="4" v-for="i in 6" :key="i">
                                <v-card elevation="2" class="pa-4 text-center">
                                    <div class="text-h6">Card {{ i }}</div>
                                    <div class="text-body-2 text-grey">Card content</div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </template>
        </CodeShowcase>
    </div>
</template>

<script setup lang="ts">
import CodeShowcase from '@/components/CodeShowcase.vue'
import {
    CONTAINER_CODE,
    DIVIDER_CODE,
    FLEX_CODE,
    GRID_CODE,
    LAYOUT_PATTERNS_CODE,
    SPACER_CODE
} from '@/constants/layoutComponents'

const gridCode = GRID_CODE
const containerCode = CONTAINER_CODE
const spacerCode = SPACER_CODE
const dividerCode = DIVIDER_CODE
const flexCode = FLEX_CODE
const layoutPatternsCode = LAYOUT_PATTERNS_CODE
</script>
