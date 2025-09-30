<template>
    <div>
        <!-- Basic Table -->
        <CodeShowcase title="Data Tables" description="Structured data display with sorting and pagination"
            icon="mdi-table" difficulty="Medium" :code="tableCode">
            <template #preview>
                <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1">
                    <template v-slot:item.calories="{ item }">
                        <v-chip :color="item.calories > 300 ? 'red' : 'green'" dark small>
                            {{ item.calories }}
                        </v-chip>
                    </template>
                </v-data-table>
            </template>
        </CodeShowcase>

        <!-- Lists -->
        <CodeShowcase title="Lists" description="Various list layouts for displaying items"
            icon="mdi-format-list-bulleted" difficulty="Easy" :code="listCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-4">
                    <v-card width="300">
                        <v-card-title>Simple List</v-card-title>
                        <v-list density="compact">
                            <v-list-item v-for="item in simpleList" :key="item.title" :prepend-icon="item.icon"
                                :title="item.title" :subtitle="item.subtitle"></v-list-item>
                        </v-list>
                    </v-card>

                    <v-card width="300">
                        <v-card-title>Avatar List</v-card-title>
                        <v-list>
                            <v-list-item v-for="user in users" :key="user.name" :prepend-avatar="user.avatar"
                                :title="user.name" :subtitle="user.email">
                                <template v-slot:append>
                                    <v-btn icon="mdi-heart" variant="text" size="small"></v-btn>
                                </template>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Timeline -->
        <CodeShowcase title="Timeline" description="Chronological display of events or activities" icon="mdi-timeline"
            difficulty="Medium" :code="timelineCode">
            <template #preview>
                <v-timeline side="end" align="start">
                    <v-timeline-item v-for="event in timelineEvents" :key="event.id" :dot-color="event.color"
                        size="small">
                        <template v-slot:opposite>
                            <span class="text-caption">{{ event.time }}</span>
                        </template>
                        <v-card>
                            <v-card-title class="text-h6">{{ event.title }}</v-card-title>
                            <v-card-text>{{ event.description }}</v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </template>
        </CodeShowcase>

        <!-- Virtual Scroller -->
        <CodeShowcase title="Virtual Scroller" description="Efficiently render large lists with virtual scrolling"
            icon="mdi-view-list" difficulty="Medium" :code="virtualScrollerCode">
            <template #preview>
                <v-card>
                    <v-card-title>Virtual Scroller (100,000 items)</v-card-title>
                    <v-virtual-scroll :items="virtualItems" height="300" item-height="48">
                        <template v-slot:default="{ item }">
                            <v-list-item>
                                <v-list-item-title>Item #{{ item.id }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
                            </v-list-item>
                        </template>
                    </v-virtual-scroll>
                </v-card>
            </template>
        </CodeShowcase>

        <!-- Expansion Panels -->
        <CodeShowcase title="Expansion Panels" description="Collapsible content sections" icon="mdi-chevron-down"
            difficulty="Easy" :code="expansionPanelCode">
            <template #preview>
                <v-expansion-panels v-model="panel">
                    <v-expansion-panel v-for="(faq, i) in faqs" :key="i" :title="faq.question"
                        :text="faq.answer"></v-expansion-panel>
                </v-expansion-panels>
            </template>
        </CodeShowcase>

        <!-- Tree View -->
        <CodeShowcase title="Tree View" description="Hierarchical data structure display" icon="mdi-file-tree"
            difficulty="Medium" :code="treeViewCode">
            <template #preview>
                <v-card>
                    <v-card-title>Project Structure</v-card-title>
                    <v-card-text>
                        <v-treeview :items="treeItems" item-key="id" item-title="name" item-children="children"
                            activatable open-on-click>
                            <template v-slot:prepend="{ item }">
                                <v-icon :icon="item.icon"></v-icon>
                            </template>
                        </v-treeview>
                    </v-card-text>
                </v-card>
            </template>
        </CodeShowcase>
    </div>
</template>

<script setup lang="ts">
import CodeShowcase from '@/components/CodeShowcase.vue'
import {
    EXPANSION_PANEL_CODE,
    LIST_CODE,
    TABLE_CODE,
    TIMELINE_CODE,
    TREE_VIEW_CODE,
    VIRTUAL_SCROLLER_CODE
} from '@/constants/dataComponents'
import { ref } from 'vue'

// Table data
const headers = [
    { title: 'Dessert (100g serving)', key: 'name' },
    { title: 'Calories', key: 'calories' },
    { title: 'Fat (g)', key: 'fat' },
    { title: 'Carbs (g)', key: 'carbs' },
    { title: 'Protein (g)', key: 'protein' },
]

const desserts = [
    { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0 },
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
    { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0 },
    { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0.0 },
    { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
]

// List data
const simpleList = [
    { title: 'Home', subtitle: 'Dashboard overview', icon: 'mdi-home' },
    { title: 'Users', subtitle: 'Manage users', icon: 'mdi-account-group' },
    { title: 'Settings', subtitle: 'App configuration', icon: 'mdi-cog' },
    { title: 'Reports', subtitle: 'Analytics and reports', icon: 'mdi-chart-line' },
]

const users = [
    { name: 'John Doe', email: 'john@example.com', avatar: 'https://randomuser.me/api/portraits/men/85.jpg' },
    { name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://randomuser.me/api/portraits/women/85.jpg' },
    { name: 'Bob Johnson', email: 'bob@example.com', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
]

// Timeline data
const timelineEvents = [
    {
        id: 1,
        title: 'Project Started',
        description: 'Initial planning and setup phase',
        time: '9:00 AM',
        color: 'primary'
    },
    {
        id: 2,
        title: 'Design Phase',
        description: 'UI/UX design and wireframing',
        time: '11:00 AM',
        color: 'success'
    },
    {
        id: 3,
        title: 'Development',
        description: 'Frontend and backend implementation',
        time: '2:00 PM',
        color: 'warning'
    },
    {
        id: 4,
        title: 'Testing',
        description: 'Quality assurance and bug fixes',
        time: '4:00 PM',
        color: 'error'
    },
]

// Virtual scroller data
const virtualItems = Array.from({ length: 100000 }, (_, i) => ({
    id: i + 1,
    text: `This is item number ${i + 1} in the virtual scroller`
}))

// Expansion panels data
const panel = ref([])
const faqs = [
    {
        question: 'What is Vuetify?',
        answer: 'Vuetify is a Vue UI Library with beautifully handcrafted Material Components.'
    },
    {
        question: 'How do I install Vuetify?',
        answer: 'You can install Vuetify using npm: npm install vuetify'
    },
    {
        question: 'Is Vuetify free?',
        answer: 'Yes, Vuetify is completely free and open source under the MIT license.'
    },
    {
        question: 'Does Vuetify support Vue 3?',
        answer: 'Yes, Vuetify 3 provides full support for Vue 3 with Composition API.'
    },
]

// Tree view data
const treeItems = [
    {
        id: 1,
        name: 'src',
        icon: 'mdi-folder',
        children: [
            {
                id: 2,
                name: 'components',
                icon: 'mdi-folder',
                children: [
                    { id: 3, name: 'App.vue', icon: 'mdi-vuejs' },
                    { id: 4, name: 'HelloWorld.vue', icon: 'mdi-vuejs' },
                ]
            },
            {
                id: 5,
                name: 'assets',
                icon: 'mdi-folder',
                children: [
                    { id: 6, name: 'logo.png', icon: 'mdi-image' },
                    { id: 7, name: 'style.css', icon: 'mdi-language-css3' },
                ]
            },
            { id: 8, name: 'main.js', icon: 'mdi-language-javascript' },
        ]
    },
    { id: 9, name: 'package.json', icon: 'mdi-npm' },
    { id: 10, name: 'README.md', icon: 'mdi-markdown' },
]

// Code examples
const tableCode = TABLE_CODE
const listCode = LIST_CODE
const timelineCode = TIMELINE_CODE
const virtualScrollerCode = VIRTUAL_SCROLLER_CODE
const expansionPanelCode = EXPANSION_PANEL_CODE
const treeViewCode = TREE_VIEW_CODE
</script>
