<template>
    <div>
        <!-- Buttons -->
        <CodeShowcase title="Buttons" description="Various button styles and variants available in Vuetify"
            icon="mdi-gesture-tap-button" difficulty="Easy" :code="buttonCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-3">
                    <v-btn color="primary">Primary</v-btn>
                    <v-btn color="secondary">Secondary</v-btn>
                    <v-btn variant="outlined">Outlined</v-btn>
                    <v-btn variant="text">Text</v-btn>
                    <v-btn variant="tonal">Tonal</v-btn>
                    <v-btn variant="elevated">Elevated</v-btn>
                    <v-btn prepend-icon="mdi-heart">With Icon</v-btn>
                    <v-btn icon="mdi-heart" size="small"></v-btn>
                    <v-btn color="error" size="large">Large Error</v-btn>
                    <v-btn disabled>Disabled</v-btn>
                </div>
            </template>
        </CodeShowcase>

        <!-- Chips -->
        <CodeShowcase title="Chips" description="Compact elements that represent an input, attribute, or action"
            icon="mdi-label" difficulty="Easy" :code="chipCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-2">
                    <v-chip>Default</v-chip>
                    <v-chip color="primary">Primary</v-chip>
                    <v-chip variant="outlined">Outlined</v-chip>
                    <v-chip prepend-icon="mdi-account">With Icon</v-chip>
                    <v-chip closable>Closable</v-chip>
                    <v-chip size="small">Small</v-chip>
                    <v-chip size="large">Large</v-chip>
                    <v-chip link>Link</v-chip>
                </div>
            </template>
        </CodeShowcase>

        <!-- Icons -->
        <CodeShowcase title="Icons" description="Material Design Icons integration with different sizes and colors"
            icon="mdi-star" difficulty="Easy" :code="iconCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-4 align-center">
                    <v-icon icon="mdi-heart"></v-icon>
                    <v-icon icon="mdi-star" color="amber"></v-icon>
                    <v-icon icon="mdi-thumb-up" color="success" size="large"></v-icon>
                    <v-icon icon="mdi-account" color="primary" size="x-large"></v-icon>
                    <v-icon icon="mdi-settings" size="small"></v-icon>
                </div>
            </template>
        </CodeShowcase>

        <!-- Avatars -->
        <CodeShowcase title="Avatars" description="Display user profile pictures or initials" icon="mdi-account-circle"
            difficulty="Easy" :code="avatarCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-3 align-center">
                    <v-avatar color="primary">
                        <span class="text-h6">JD</span>
                    </v-avatar>
                    <v-avatar color="red">
                        <v-icon icon="mdi-account"></v-icon>
                    </v-avatar>
                    <v-avatar image="https://randomuser.me/api/portraits/men/85.jpg"></v-avatar>
                    <v-avatar size="small" color="purple">JS</v-avatar>
                    <v-avatar size="large" color="green">LG</v-avatar>
                </div>
            </template>
        </CodeShowcase>

        <!-- Badges -->
        <CodeShowcase title="Badges" description="Small status descriptors for UI elements" icon="mdi-circle"
            difficulty="Easy" :code="badgeCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-6 align-center">
                    <v-badge content="6" color="error">
                        <v-icon icon="mdi-email" size="large"></v-icon>
                    </v-badge>
                    <v-badge dot color="success">
                        <v-avatar image="https://randomuser.me/api/portraits/women/85.jpg"></v-avatar>
                    </v-badge>
                    <v-badge content="99+" color="primary">
                        <v-btn icon="mdi-bell"></v-btn>
                    </v-badge>
                    <v-badge content="NEW" color="pink">
                        <v-chip>Feature</v-chip>
                    </v-badge>
                </div>
            </template>
        </CodeShowcase>

        <!-- Progress -->
        <CodeShowcase title="Progress Indicators" description="Linear and circular progress indicators"
            icon="mdi-progress-check" difficulty="Easy" :code="progressCode">
            <template #preview>
                <div class="d-flex flex-column ga-4">
                    <v-progress-linear model-value="40" color="primary"></v-progress-linear>
                    <v-progress-linear model-value="65" color="success" height="8" rounded></v-progress-linear>
                    <div class="d-flex ga-4 align-center">
                        <v-progress-circular model-value="20" color="primary"></v-progress-circular>
                        <v-progress-circular model-value="40" color="orange" :size="60"
                            :width="8"></v-progress-circular>
                        <v-progress-circular indeterminate color="purple"></v-progress-circular>
                    </div>
                </div>
            </template>
        </CodeShowcase>

        <!-- Alerts -->
        <CodeShowcase title="Alerts" description="Contextual feedback messages for user actions" icon="mdi-alert"
            difficulty="Easy" :code="alertCode">
            <template #preview>
                <div class="d-flex flex-column ga-3">
                    <v-alert type="success" title="Success!">This is a success alert.</v-alert>
                    <v-alert type="info" title="Information">This is an info alert.</v-alert>
                    <v-alert type="warning" title="Warning!">This is a warning alert.</v-alert>
                    <v-alert type="error" title="Error!">This is an error alert.</v-alert>
                    <v-alert variant="outlined" type="success" closable>
                        This is a closable outlined alert.
                    </v-alert>
                </div>
            </template>
        </CodeShowcase>
    </div>
</template>

<script setup lang="ts">
import CodeShowcase from '@/components/CodeShowcase.vue'
import {
    ALERT_CODE,
    AVATAR_CODE,
    BADGE_CODE,
    BUTTON_CODE,
    CHIP_CODE,
    ICON_CODE,
    PROGRESS_CODE
} from '@/constants/basicComponents'

const buttonCode = BUTTON_CODE
const chipCode = CHIP_CODE
const iconCode = ICON_CODE
const avatarCode = AVATAR_CODE
const badgeCode = BADGE_CODE
const progressCode = PROGRESS_CODE
const alertCode = ALERT_CODE
</script>
