<template>
    <div>
        <!-- Tabs -->
        <CodeShowcase title="Tabs" description="Horizontal navigation tabs" icon="mdi-tab" difficulty="Easy"
            :code="tabsCode">
            <template #preview>
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
                                    <p>This is the overview tab content.</p>
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
        </CodeShowcase>

        <!-- Pagination -->
        <CodeShowcase title="Pagination" description="Page navigation for large datasets" icon="mdi-page-next"
            difficulty="Easy" :code="paginationCode">
            <template #preview>
                <div class="d-flex flex-column ga-4 align-center">
                    <v-pagination v-model="currentPage" :length="10" color="primary"></v-pagination>

                    <v-pagination v-model="currentPage2" :length="15" :total-visible="5" color="success"></v-pagination>
                </div>
            </template>
        </CodeShowcase>

        <!-- Breadcrumbs -->
        <CodeShowcase title="Breadcrumbs" description="Navigation trail showing current location"
            icon="mdi-chevron-right" difficulty="Easy" :code="breadcrumbsCode">
            <template #preview>
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
        </CodeShowcase>

        <!-- Bottom Navigation -->
        <CodeShowcase title="Bottom Navigation" description="Mobile-friendly bottom navigation bar"
            icon="mdi-navigation" difficulty="Medium" :code="bottomNavigationCode">
            <template #preview>
                <div class="position-relative" style="height: 300px;">
                    <v-card height="250" class="d-flex align-center justify-center">
                        <div class="text-center">
                            <h3>Selected: {{ bottomNavValue }}</h3>
                            <p>Content for the selected navigation item would appear here.</p>
                        </div>
                    </v-card>

                    <v-bottom-navigation v-model="bottomNavValue" color="primary" grow>
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
        </CodeShowcase>
    </div>
</template>

<script setup lang="ts">
import CodeShowcase from '@/components/CodeShowcase.vue'
import {
    BOTTOM_NAVIGATION_CODE,
    BREADCRUMBS_CODE,
    PAGINATION_CODE,
    TABS_CODE
} from '@/constants/navigationComponents'
import { ref } from 'vue'

const currentTab = ref('overview')
const currentPage = ref(1)
const currentPage2 = ref(1)
const bottomNavValue = ref('recent')

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

const tabsCode = TABS_CODE
const paginationCode = PAGINATION_CODE
const breadcrumbsCode = BREADCRUMBS_CODE
const bottomNavigationCode = BOTTOM_NAVIGATION_CODE
</script>
