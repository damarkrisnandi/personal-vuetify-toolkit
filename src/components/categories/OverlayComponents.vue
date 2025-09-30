<template>
    <div>
        <h2 class="text-h4 mb-6">Overlay Components</h2>
        <p class="text-body-1 mb-8">
            Interactive overlay components including modals, drawers, toasts, tooltips, and more overlay elements that
            appear above the main content.
        </p>

        <!-- Modal Examples -->
        <CodeShowcase title="Modal Dialogs"
            description="Interactive modal dialogs for confirmations, forms, and content display" :code="MODAL_CODE"
            keywords="modal,dialog,popup,confirmation,overlay">
            <template #preview>
                <div class="d-flex flex-wrap ga-3">
                    <v-btn color="primary" @click="basicModal = true">Open Basic Modal</v-btn>
                    <v-btn color="error" @click="confirmModal = true">Delete Item</v-btn>
                </div>

                <v-dialog v-model="basicModal" width="500">
                    <v-card>
                        <v-card-title>
                            <span class="text-h6">Basic Modal</span>
                        </v-card-title>
                        <v-card-text>
                            This is a basic modal dialog. It can contain any content you need to display in an overlay.
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="basicModal = false">
                                Close
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="basicModal = false">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <v-dialog v-model="confirmModal" width="400">
                    <v-card>
                        <v-card-title class="text-h6">
                            Confirm Delete
                        </v-card-title>
                        <v-card-text>
                            Are you sure you want to delete this item? This action cannot be undone.
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn variant="text" @click="confirmModal = false">Cancel</v-btn>
                            <v-btn color="error" variant="text" @click="confirmDelete">Delete</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </template>
        </CodeShowcase>

        <!-- Drawer Examples -->
        <CodeShowcase title="Navigation Drawers" description="Sliding drawers for navigation and side content"
            :code="DRAWER_CODE" keywords="drawer,navigation,sidebar,slide,menu">
            <template #preview>
                <div class="d-flex flex-wrap ga-3">
                    <v-btn color="primary" @click="temporaryDrawer = true">Open Temporary Drawer</v-btn>
                    <v-btn color="secondary" @click="miniDrawer = !miniDrawer">
                        Toggle Mini Drawer
                    </v-btn>
                </div>

                <v-navigation-drawer v-model="temporaryDrawer" temporary location="right" width="500">
                    <v-card flat>
                        <v-card-title>Temporary Drawer</v-card-title>
                        <v-card-text>
                            <p>This drawer appears temporarily and can be closed by clicking outside or using the close
                                button.</p>
                            <v-list>
                                <v-list-item title="Menu Item 1" prepend-icon="mdi-home"></v-list-item>
                                <v-list-item title="Menu Item 2" prepend-icon="mdi-account"></v-list-item>
                                <v-list-item title="Menu Item 3" prepend-icon="mdi-cog"></v-list-item>
                            </v-list>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="temporaryDrawer = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-navigation-drawer>
            </template>
        </CodeShowcase>

        <!-- Toast/Snackbar Examples -->
        <CodeShowcase title="Toast Notifications"
            description="Toast messages and snackbars for user feedback and notifications" :code="TOAST_CODE"
            keywords="toast,snackbar,notification,message,alert">
            <template #preview>
                <div class="d-flex flex-wrap ga-3">
                    <v-btn color="success" @click="showSuccess">Success Toast</v-btn>
                    <v-btn color="error" @click="showError">Error Toast</v-btn>
                    <v-btn color="warning" @click="showWarning">Warning Toast</v-btn>
                    <v-btn color="info" @click="showInfo">Info Toast</v-btn>
                    <v-btn color="primary" @click="showAction">Action Toast</v-btn>
                </div>

                <!-- Success Snackbar -->
                <v-snackbar v-model="successSnackbar" color="success" :timeout="3000">
                    Operation completed successfully!
                    <template v-slot:actions>
                        <v-btn variant="text" @click="successSnackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>

                <!-- Error Snackbar -->
                <v-snackbar v-model="errorSnackbar" color="error" :timeout="5000">
                    An error occurred. Please try again.
                    <template v-slot:actions>
                        <v-btn variant="text" @click="errorSnackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>

                <!-- Warning Snackbar -->
                <v-snackbar v-model="warningSnackbar" color="warning" :timeout="4000">
                    Warning: Please check your input.
                    <template v-slot:actions>
                        <v-btn variant="text" @click="warningSnackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>

                <!-- Info Snackbar -->
                <v-snackbar v-model="infoSnackbar" color="info" :timeout="3000">
                    Here's some helpful information.
                </v-snackbar>

                <!-- Action Snackbar -->
                <v-snackbar v-model="actionSnackbar" :timeout="6000" color="primary">
                    Item added to cart
                    <template v-slot:actions>
                        <v-btn variant="text" @click="undoAction">
                            Undo
                        </v-btn>
                        <v-btn variant="text" @click="actionSnackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
            </template>
        </CodeShowcase>

        <!-- Tooltip Examples -->
        <CodeShowcase title="Tooltips" description="Hover tooltips for providing additional information and context"
            :code="TOOLTIP_CODE" keywords="tooltip,hover,hint,help,info">
            <template #preview>
                <div class="d-flex flex-wrap ga-6 align-center">
                    <v-tooltip text="This is a basic tooltip">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" color="primary">
                                Hover me
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <v-tooltip text="Top tooltip" location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" color="success">
                                Top
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <v-tooltip text="Bottom tooltip" location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" color="error">
                                Bottom
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <v-tooltip text="Left tooltip" location="left">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" color="warning">
                                Left
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <v-tooltip text="Right tooltip" location="right">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" color="info">
                                Right
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <v-tooltip>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" color="purple">
                                Rich Tooltip
                            </v-btn>
                        </template>
                        <div>
                            <div class="text-subtitle-2">Custom Tooltip</div>
                            <div class="text-caption">With multiple lines</div>
                            <div class="text-caption">And rich content</div>
                        </div>
                    </v-tooltip>

                    <v-tooltip text="Settings">
                        <template v-slot:activator="{ props }">
                            <v-icon v-bind="props" icon="mdi-cog" size="large"></v-icon>
                        </template>
                    </v-tooltip>
                </div>
            </template>
        </CodeShowcase>

        <!-- Overlay Examples -->
        <CodeShowcase title="Overlays" description="Loading overlays and backdrop elements" :code="OVERLAY_CODE"
            keywords="overlay,loading,backdrop,modal,screen">
            <template #preview>
                <div class="d-flex flex-wrap ga-3">
                    <v-btn color="primary" @click="showOverlay = true">Show Overlay</v-btn>
                    <v-btn color="secondary" @click="showLoading">
                        Simulate Loading
                    </v-btn>
                </div>

                <v-overlay v-model="showOverlay" class="align-center justify-center">
                    <v-card width="400" class="pa-6 text-center">
                        <v-icon icon="mdi-loading" size="48" class="mb-4" color="primary"></v-icon>
                        <div class="text-h6 mb-4">Loading...</div>
                        <div class="text-body-2 mb-4">Please wait while we process your request.</div>
                        <v-btn color="primary" @click="showOverlay = false">Cancel</v-btn>
                    </v-card>
                </v-overlay>

                <v-overlay v-model="loadingOverlay" class="align-center justify-center">
                    <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
                </v-overlay>
            </template>
        </CodeShowcase>

        <!-- Menu Examples -->
        <CodeShowcase title="Menus" description="Dropdown menus and context menus for actions and options"
            :code="MENU_CODE" keywords="menu,dropdown,context,options,actions">
            <template #preview>
                <div class="d-flex flex-wrap ga-6">
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" v-bind="props">
                                Basic Menu
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, i) in items" :key="i" :value="item" @click="handleClick(item)">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
                        </template>
                        <v-list>
                            <v-list-item prepend-icon="mdi-account" title="Profile"></v-list-item>
                            <v-list-item prepend-icon="mdi-cog" title="Settings"></v-list-item>
                            <v-divider></v-divider>
                            <v-list-item prepend-icon="mdi-logout" title="Logout"></v-list-item>
                        </v-list>
                    </v-menu>

                    <v-card width="200" height="100" class="d-flex align-center justify-center"
                        @contextmenu.prevent="showContextMenu">
                        Right-click me
                    </v-card>
                </div>

                <v-menu v-model="contextMenu" :style="{ position: 'absolute', left: x + 'px', top: y + 'px' }"
                    location="bottom right">
                    <v-list>
                        <v-list-item prepend-icon="mdi-content-copy" title="Copy"></v-list-item>
                        <v-list-item prepend-icon="mdi-content-cut" title="Cut"></v-list-item>
                        <v-list-item prepend-icon="mdi-content-paste" title="Paste"></v-list-item>
                        <v-divider></v-divider>
                        <v-list-item prepend-icon="mdi-delete" title="Delete"></v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </CodeShowcase>

        <!-- Bottom Sheet Examples -->
        <CodeShowcase title="Bottom Sheets" description="Mobile-friendly bottom sheets for actions and content"
            :code="BOTTOM_SHEET_CODE" keywords="bottom,sheet,mobile,actions,slide">
            <template #preview>
                <div class="d-flex flex-wrap ga-3">
                    <v-btn color="primary" @click="bottomSheet = true">Open Bottom Sheet</v-btn>
                    <v-btn color="secondary" @click="persistentSheet = !persistentSheet">
                        Toggle Persistent Sheet
                    </v-btn>
                </div>

                <v-bottom-sheet v-model="bottomSheet">
                    <v-card>
                        <v-card-title>
                            <span class="text-h6">Bottom Sheet</span>
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-close" variant="text" @click="bottomSheet = false"></v-btn>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <h3>Share this item</h3>
                                        <p>Choose how you'd like to share this content with others.</p>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col v-for="option in shareOptions" :key="option.title" cols="4"
                                        class="text-center">
                                        <v-btn :icon="option.icon" :color="option.color" size="large" class="mb-2"
                                            @click="share(option.title)"></v-btn>
                                        <div class="text-caption">{{ option.title }}</div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="bottomSheet = false">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-bottom-sheet>

                <v-bottom-sheet v-model="persistentSheet" persistent>
                    <v-card>
                        <v-card-title>Persistent Bottom Sheet</v-card-title>
                        <v-card-text>
                            This bottom sheet is persistent and won't close when clicking outside.
                            You must use the close button to dismiss it.
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="persistentSheet = false">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-bottom-sheet>
            </template>
        </CodeShowcase>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    BOTTOM_SHEET_CODE,
    DRAWER_CODE,
    MENU_CODE,
    MODAL_CODE,
    OVERLAY_CODE,
    TOAST_CODE,
    TOOLTIP_CODE
} from '../../constants/overlayComponents'
import CodeShowcase from '../CodeShowcase.vue'

// Modal state
const basicModal = ref(false)
const confirmModal = ref(false)

// Drawer state
const temporaryDrawer = ref(false)
const miniDrawer = ref(true)
const rail = ref(false)

// Toast state
const successSnackbar = ref(false)
const errorSnackbar = ref(false)
const warningSnackbar = ref(false)
const infoSnackbar = ref(false)
const actionSnackbar = ref(false)

// Overlay state
const showOverlay = ref(false)
const loadingOverlay = ref(false)

// Menu state
const contextMenu = ref(false)
const x = ref(0)
const y = ref(0)

// Bottom sheet state
const bottomSheet = ref(false)
const persistentSheet = ref(false)

// Methods
const confirmDelete = () => {
    confirmModal.value = false
    // Delete logic here
}

const showSuccess = () => {
    successSnackbar.value = true
}

const showError = () => {
    errorSnackbar.value = true
}

const showWarning = () => {
    warningSnackbar.value = true
}

const showInfo = () => {
    infoSnackbar.value = true
}

const showAction = () => {
    actionSnackbar.value = true
}

const undoAction = () => {
    actionSnackbar.value = false
    // Undo logic here
}

const showLoading = () => {
    loadingOverlay.value = true
    setTimeout(() => {
        loadingOverlay.value = false
    }, 3000)
}

const items = [
    { title: 'Option 1' },
    { title: 'Option 2' },
    { title: 'Option 3' },
    { title: 'Option 4' },
]

const handleClick = (item: any) => {
    console.log('Clicked:', item.title)
}

const showContextMenu = (e: MouseEvent) => {
    e.preventDefault()
    contextMenu.value = false
    x.value = e.clientX
    y.value = e.clientY
    setTimeout(() => {
        contextMenu.value = true
    })
}

const shareOptions = [
    { title: 'Email', icon: 'mdi-email', color: 'blue' },
    { title: 'Twitter', icon: 'mdi-twitter', color: 'light-blue' },
    { title: 'Facebook', icon: 'mdi-facebook', color: 'indigo' },
    { title: 'WhatsApp', icon: 'mdi-whatsapp', color: 'green' },
    { title: 'LinkedIn', icon: 'mdi-linkedin', color: 'blue' },
    { title: 'Copy Link', icon: 'mdi-link', color: 'grey' },
]

const share = (platform: string) => {
    bottomSheet.value = false
    console.log('Share via:', platform)
}
</script>
