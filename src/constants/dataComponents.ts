// Data Components Code Constants
export const TABLE_CODE = `<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.calories="{ item }">
      <v-chip
        :color="item.calories > 300 ? 'red' : 'green'"
        dark
        small
      >
        {{ item.calories }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script setup>
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
]
</script>`

export const LIST_CODE = `<template>
  <div class="d-flex flex-wrap ga-4">
    <v-card width="300">
      <v-card-title>Simple List</v-card-title>
      <v-list density="compact">
        <v-list-item
          v-for="item in simpleList"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          :subtitle="item.subtitle"
        ></v-list-item>
      </v-list>
    </v-card>

    <v-card width="300">
      <v-card-title>Avatar List</v-card-title>
      <v-list>
        <v-list-item
          v-for="user in users"
          :key="user.name"
          :prepend-avatar="user.avatar"
          :title="user.name"
          :subtitle="user.email"
        ></v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
const simpleList = [
  { title: 'Home', subtitle: 'Dashboard overview', icon: 'mdi-home' },
  { title: 'Users', subtitle: 'Manage users', icon: 'mdi-account-group' },
  { title: 'Settings', subtitle: 'App configuration', icon: 'mdi-cog' },
]

const users = [
  { name: 'John Doe', email: 'john@example.com', avatar: 'https://randomuser.me/api/portraits/men/85.jpg' },
  { name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://randomuser.me/api/portraits/women/85.jpg' },
]
</script>`

export const TIMELINE_CODE = `<template>
  <v-timeline side="end" align="start">
    <v-timeline-item
      v-for="event in timelineEvents"
      :key="event.id"
      :dot-color="event.color"
      size="small"
    >
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

<script setup>
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
]
</script>`

export const VIRTUAL_SCROLLER_CODE = `<template>
  <v-card>
    <v-card-title>Virtual Scroller (100,000 items)</v-card-title>
    <v-virtual-scroll
      :items="virtualItems"
      height="300"
      item-height="48"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-title>Item #{{ item.id }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script setup>
const virtualItems = Array.from({ length: 100000 }, (_, i) => ({
  id: i + 1,
  text: \`This is item number \${i + 1} in the virtual scroller\`
}))
</script>`

export const EXPANSION_PANEL_CODE = `<template>
  <v-expansion-panels v-model="panel">
    <v-expansion-panel
      v-for="(faq, i) in faqs"
      :key="i"
      :title="faq.question"
      :text="faq.answer"
    ></v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue'

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
]
</script>`

export const TREE_VIEW_CODE = `<template>
  <v-card>
    <v-card-title>Project Structure</v-card-title>
    <v-card-text>
      <v-treeview
        :items="treeItems"
        item-key="id"
        item-title="name"
        item-children="children"
        activatable
        open-on-click
      >
        <template v-slot:prepend="{ item }">
          <v-icon :icon="item.icon"></v-icon>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>

<script setup>
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
      { id: 5, name: 'main.js', icon: 'mdi-language-javascript' },
    ]
  },
  { id: 6, name: 'package.json', icon: 'mdi-npm' },
]
</script>`
