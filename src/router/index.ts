import { createRouter, createWebHistory } from 'vue-router'
import BasicComponents from '../views/BasicComponents.vue'
import CardsComponents from '../views/CardsComponents.vue'
import ChartComponents from '../views/ChartComponents.vue'
import ComplexExamples from '../views/ComplexExamples.vue'
import DataComponents from '../views/DataComponents.vue'
import DesignTokens from '../views/DesignTokens.vue'
import FormComponents from '../views/FormComponents.vue'
import HomeView from '../views/HomeView.vue'
import LayoutComponents from '../views/LayoutComponents.vue'
import NavigationComponents from '../views/NavigationComponents.vue'
import OverlayComponents from '../views/OverlayComponents.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Pinned Components',
                icon: 'mdi-pin'
            }
        },
        {
            path: '/basic',
            name: 'basic',
            component: BasicComponents,
            meta: {
                title: 'Basic Components',
                icon: 'mdi-widgets'
            }
        },
        {
            path: '/forms',
            name: 'forms',
            component: FormComponents,
            meta: {
                title: 'Form Components',
                icon: 'mdi-form-select'
            }
        },
        {
            path: '/layout',
            name: 'layout',
            component: LayoutComponents,
            meta: {
                title: 'Layout Components',
                icon: 'mdi-view-dashboard'
            }
        },
        {
            path: '/cards',
            name: 'cards',
            component: CardsComponents,
            meta: {
                title: 'Cards & Surfaces',
                icon: 'mdi-card'
            }
        },
        {
            path: '/data',
            name: 'data',
            component: DataComponents,
            meta: {
                title: 'Data Display',
                icon: 'mdi-table'
            }
        },
        {
            path: '/overlay',
            name: 'overlay',
            component: OverlayComponents,
            meta: {
                title: 'Overlay Components',
                icon: 'mdi-layers'
            }
        },
        {
            path: '/design',
            name: 'design',
            component: DesignTokens,
            meta: {
                title: 'Design Tokens',
                icon: 'mdi-palette'
            }
        },
        {
            path: '/navigation',
            name: 'navigation',
            component: NavigationComponents,
            meta: {
                title: 'Navigation',
                icon: 'mdi-navigation'
            }
        },
        {
            path: '/complex',
            name: 'complex',
            component: ComplexExamples,
            meta: {
                title: 'Complex Examples',
                icon: 'mdi-rocket'
            }
        },
        {
            path: '/charts',
            name: 'charts',
            component: ChartComponents,
            meta: {
                title: 'Charts & Graphs',
                icon: 'mdi-chart-line'
            }
        }
    ]
})

export default router
