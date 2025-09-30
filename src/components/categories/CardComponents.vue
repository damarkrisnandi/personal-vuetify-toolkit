<template>
    <div>
        <!-- Basic Cards -->
        <CodeShowcase title="Basic Cards" description="Simple card layouts with different content structures"
            icon="mdi-card" difficulty="Easy" :code="basicCardCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-4">
                    <v-card width="300">
                        <v-card-title>Simple Card</v-card-title>
                        <v-card-text>
                            This is a simple card with just title and text content.
                        </v-card-text>
                    </v-card>

                    <v-card width="300">
                        <v-card-title>Card with Actions</v-card-title>
                        <v-card-text>
                            This card includes action buttons at the bottom.
                        </v-card-text>
                        <v-card-actions>
                            <v-btn variant="text">Action 1</v-btn>
                            <v-btn variant="text">Action 2</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Image Cards -->
        <CodeShowcase title="Image Cards" description="Cards with images and media content" icon="mdi-image"
            difficulty="Easy" :code="imageCardCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-4">
                    <v-card width="300">
                        <v-img src="https://picsum.photos/300/200?random=1" height="200" cover></v-img>
                        <v-card-title>Beautiful Landscape</v-card-title>
                        <v-card-text>
                            A stunning view of nature captured in this beautiful photograph.
                        </v-card-text>
                        <v-card-actions>
                            <v-btn prepend-icon="mdi-heart" variant="text">Like</v-btn>
                            <v-btn prepend-icon="mdi-share" variant="text">Share</v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card width="300">
                        <v-card-title>Card with Avatar</v-card-title>
                        <v-card-subtitle>by John Doe</v-card-subtitle>
                        <div class="d-flex align-center pa-4">
                            <v-avatar class="me-3">
                                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                            </v-avatar>
                            <div>
                                <div class="text-h6">John Doe</div>
                                <div class="text-caption">5 minutes ago</div>
                            </div>
                        </div>
                        <v-card-text>
                            This is an example of a card with user information and avatar.
                        </v-card-text>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Feature Cards -->
        <CodeShowcase title="Feature Cards" description="Cards designed to showcase features or services"
            icon="mdi-star" difficulty="Medium" :code="featureCardCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-4">
                    <v-card width="280" variant="outlined">
                        <div class="text-center pa-4">
                            <v-icon icon="mdi-rocket" size="48" color="primary" class="mb-3"></v-icon>
                            <v-card-title class="text-h6">Fast Performance</v-card-title>
                            <v-card-text>
                                Lightning fast performance with optimized code and efficient algorithms.
                            </v-card-text>
                            <v-btn color="primary" variant="outlined">Learn More</v-btn>
                        </div>
                    </v-card>

                    <v-card width="280" variant="elevated" elevation="8">
                        <div class="text-center pa-4">
                            <v-icon icon="mdi-shield-check" size="48" color="success" class="mb-3"></v-icon>
                            <v-card-title class="text-h6">Secure</v-card-title>
                            <v-card-text>
                                Bank-level security with end-to-end encryption and secure protocols.
                            </v-card-text>
                            <v-btn color="success" variant="elevated">Get Started</v-btn>
                        </div>
                    </v-card>

                    <v-card width="280" color="purple" dark>
                        <div class="text-center pa-4">
                            <v-icon icon="mdi-heart" size="48" class="mb-3"></v-icon>
                            <v-card-title class="text-h6">User Friendly</v-card-title>
                            <v-card-text>
                                Intuitive design that makes complex tasks simple and enjoyable.
                            </v-card-text>
                            <v-btn variant="outlined">Try Now</v-btn>
                        </div>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Pricing Cards -->
        <CodeShowcase title="Pricing Cards" description="Professional pricing plan cards" icon="mdi-currency-usd"
            difficulty="Medium" :code="pricingCardCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-4">
                    <v-card width="280" variant="outlined">
                        <v-card-title class="text-center text-h5 pa-4">Basic</v-card-title>
                        <v-divider></v-divider>
                        <div class="text-center pa-6">
                            <div class="text-h3 font-weight-bold">$9</div>
                            <div class="text-caption text-grey">per month</div>
                        </div>
                        <v-card-text>
                            <v-list density="compact">
                                <v-list-item prepend-icon="mdi-check">
                                    <v-list-item-title>5 Projects</v-list-item-title>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-check">
                                    <v-list-item-title>10GB Storage</v-list-item-title>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-check">
                                    <v-list-item-title>Email Support</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                        <v-card-actions class="pa-4">
                            <v-btn variant="outlined" block>Choose Plan</v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card width="280" color="primary" dark>
                        <v-card-title class="text-center text-h5 pa-4">Pro</v-card-title>
                        <v-divider></v-divider>
                        <div class="text-center pa-6">
                            <div class="text-h3 font-weight-bold">$29</div>
                            <div class="text-caption">per month</div>
                        </div>
                        <v-card-text>
                            <v-list density="compact" color="transparent">
                                <v-list-item prepend-icon="mdi-check">
                                    <v-list-item-title>Unlimited Projects</v-list-item-title>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-check">
                                    <v-list-item-title>100GB Storage</v-list-item-title>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-check">
                                    <v-list-item-title>Priority Support</v-list-item-title>
                                </v-list-item>
                                <v-list-item prepend-icon="mdi-check">
                                    <v-list-item-title>Advanced Analytics</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                        <v-card-actions class="pa-4">
                            <v-btn variant="elevated" color="white" block>Choose Plan</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Statistics Cards -->
        <CodeShowcase title="Statistics Cards" description="Cards for displaying metrics and statistics"
            icon="mdi-chart-line" difficulty="Medium" :code="statsCardCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-4">
                    <v-card width="200" color="success" dark>
                        <v-card-text class="d-flex align-center">
                            <div class="flex-grow-1">
                                <div class="text-h4 font-weight-bold">1,234</div>
                                <div class="text-body-2">Total Users</div>
                            </div>
                            <v-icon icon="mdi-account-group" size="40"></v-icon>
                        </v-card-text>
                    </v-card>

                    <v-card width="200" color="primary" dark>
                        <v-card-text class="d-flex align-center">
                            <div class="flex-grow-1">
                                <div class="text-h4 font-weight-bold">$56.7K</div>
                                <div class="text-body-2">Revenue</div>
                            </div>
                            <v-icon icon="mdi-currency-usd" size="40"></v-icon>
                        </v-card-text>
                    </v-card>

                    <v-card width="200" color="warning" dark>
                        <v-card-text class="d-flex align-center">
                            <div class="flex-grow-1">
                                <div class="text-h4 font-weight-bold">89%</div>
                                <div class="text-body-2">Satisfaction</div>
                            </div>
                            <v-icon icon="mdi-heart" size="40"></v-icon>
                        </v-card-text>
                    </v-card>

                    <v-card width="200" color="error" dark>
                        <v-card-text class="d-flex align-center">
                            <div class="flex-grow-1">
                                <div class="text-h4 font-weight-bold">12</div>
                                <div class="text-body-2">Issues</div>
                            </div>
                            <v-icon icon="mdi-alert" size="40"></v-icon>
                        </v-card-text>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Profile Cards -->
        <CodeShowcase title="Profile Cards" description="User profile and team member cards"
            icon="mdi-account-card-details" difficulty="Medium" :code="profileCardCode">
            <template #preview>
                <div class="d-flex flex-wrap ga-4">
                    <v-card width="300">
                        <v-img src="https://picsum.photos/300/150?random=2" height="150"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                            <v-card-title class="text-white">Sarah Johnson</v-card-title>
                        </v-img>
                        <div class="d-flex justify-center" style="margin-top: -40px;">
                            <v-avatar size="80" class="border-4 border-white">
                                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                            </v-avatar>
                        </div>
                        <v-card-text class="text-center pt-4">
                            <div class="text-h6">Sarah Johnson</div>
                            <div class="text-subtitle-1 text-grey">Senior Developer</div>
                            <div class="text-body-2 mt-2">
                                Passionate developer with 5+ years of experience in Vue.js and modern web technologies.
                            </div>
                        </v-card-text>
                        <v-card-actions class="justify-center pb-4">
                            <v-btn icon="mdi-twitter" variant="text"></v-btn>
                            <v-btn icon="mdi-linkedin" variant="text"></v-btn>
                            <v-btn icon="mdi-github" variant="text"></v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card width="300" variant="outlined">
                        <v-card-text class="text-center pa-6">
                            <v-avatar size="100" class="mb-4">
                                <v-img src="https://randomuser.me/api/portraits/men/32.jpg"></v-img>
                            </v-avatar>
                            <div class="text-h5">Mike Chen</div>
                            <div class="text-subtitle-1 text-grey mb-3">Product Manager</div>
                            <v-chip color="primary" size="small" class="me-2">Product</v-chip>
                            <v-chip color="success" size="small">Strategy</v-chip>
                            <div class="text-body-2 mt-4">
                                Strategic thinker focused on creating exceptional user experiences.
                            </div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions class="justify-center">
                            <v-btn prepend-icon="mdi-email" variant="text">Contact</v-btn>
                            <v-btn prepend-icon="mdi-account-details" variant="text">Profile</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>
    </div>
</template>

<script setup lang="ts">
import CodeShowcase from '@/components/CodeShowcase.vue'
import {
    BASIC_CARD_CODE,
    FEATURE_CARD_CODE,
    IMAGE_CARD_CODE,
    PRICING_CARD_CODE,
    PROFILE_CARD_CODE,
    STATS_CARD_CODE
} from '@/constants/cardComponents'

const basicCardCode = BASIC_CARD_CODE
const imageCardCode = IMAGE_CARD_CODE
const featureCardCode = FEATURE_CARD_CODE
const pricingCardCode = PRICING_CARD_CODE
const statsCardCode = STATS_CARD_CODE
const profileCardCode = PROFILE_CARD_CODE
</script>
