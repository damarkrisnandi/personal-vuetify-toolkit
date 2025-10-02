<template>
    <div>
        <!-- Login Card -->
        <CodeShowcase title="Login Card" description="Complete login form with validation and modern design"
            icon="mdi-login" difficulty="Hard" :code="loginCardCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="400" elevation="8">
                        <v-card-title class="text-center text-h4 pa-6">
                            Welcome Back
                        </v-card-title>
                        <v-card-text class="pa-6">
                            <v-form ref="loginForm" v-model="loginValid">
                                <v-text-field v-model="loginEmail" :rules="emailRules" label="Email"
                                    prepend-inner-icon="mdi-email" type="email" variant="outlined"
                                    class="mb-3"></v-text-field>
                                <v-text-field v-model="loginPassword" :rules="passwordRules"
                                    :type="showPassword ? 'text' : 'password'" label="Password"
                                    prepend-inner-icon="mdi-lock"
                                    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append-inner="showPassword = !showPassword" variant="outlined"
                                    class="mb-3"></v-text-field>
                                <div class="d-flex justify-space-between align-center mb-4">
                                    <v-checkbox v-model="rememberMe" label="Remember me" density="compact"
                                        hide-details></v-checkbox>
                                    <v-btn variant="text" size="small">Forgot password?</v-btn>
                                </div>
                                <v-btn :disabled="!loginValid" :loading="loginLoading" color="primary" size="large"
                                    block @click="handleLogin">
                                    Sign In
                                </v-btn>
                                <v-divider class="my-4"></v-divider>
                                <v-btn variant="outlined" prepend-icon="mdi-google" block class="mb-3">
                                    Continue with Google
                                </v-btn>
                                <div class="text-center">
                                    <span class="text-body-2">Don't have an account? </span>
                                    <v-btn variant="text" size="small">Sign up</v-btn>
                                </div>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Weather Forecast Card -->
        <CodeShowcase title="Weather Forecast Card"
            description="Interactive weather card with current conditions and forecast" icon="mdi-weather-partly-cloudy"
            difficulty="Hard" :code="weatherCardCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="350" elevation="8">
                        <v-card-text class="pa-0">
                            <div class="weather-header pa-6 text-white text-center"
                                style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);">
                                <div class="d-flex align-center justify-space-between mb-4">
                                    <div>
                                        <div class="text-h4 font-weight-bold">{{ currentWeather.temp }}°</div>
                                        <div class="text-body-1">{{ currentWeather.condition }}</div>
                                        <div class="text-caption">{{ currentWeather.location }}</div>
                                    </div>
                                    <v-icon :icon="currentWeather.icon" size="64"></v-icon>
                                </div>
                                <div class="d-flex justify-space-between text-center">
                                    <div>
                                        <div class="text-caption">FEELS LIKE</div>
                                        <div class="text-body-2">{{ currentWeather.feelsLike }}°</div>
                                    </div>
                                    <div>
                                        <div class="text-caption">HUMIDITY</div>
                                        <div class="text-body-2">{{ currentWeather.humidity }}%</div>
                                    </div>
                                    <div>
                                        <div class="text-caption">WIND</div>
                                        <div class="text-body-2">{{ currentWeather.wind }} mph</div>
                                    </div>
                                </div>
                            </div>

                            <div class="pa-4">
                                <div class="text-subtitle-1 mb-3">5-Day Forecast</div>
                                <div v-for="day in forecast" :key="day.day"
                                    class="d-flex align-center justify-space-between py-2">
                                    <div class="text-body-2" style="width: 60px;">{{ day.day }}</div>
                                    <v-icon :icon="day.icon" class="mx-3"></v-icon>
                                    <div class="flex-grow-1 text-center">
                                        <v-progress-linear :model-value="day.chanceOfRain" height="4" color="blue"
                                            background-color="grey-lighten-3" rounded></v-progress-linear>
                                    </div>
                                    <div class="text-body-2 text-right" style="width: 80px;">
                                        <span class="font-weight-bold">{{ day.high }}°</span>
                                        <span class="text-grey"> {{ day.low }}°</span>
                                    </div>
                                </div>
                            </div>
                        </v-card-text>
                        <v-card-actions class="px-4 pb-4">
                            <v-spacer></v-spacer>
                            <v-btn prepend-icon="mdi-refresh" variant="text" size="small">
                                Update
                            </v-btn>
                            <v-btn prepend-icon="mdi-map-marker" variant="text" size="small">
                                Location
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Dashboard Stats Grid -->
        <CodeShowcase title="Dashboard Stats Grid"
            description="Comprehensive dashboard with multiple stat cards and charts" icon="mdi-view-dashboard"
            difficulty="Hard" :code="dashboardCode">
            <template #preview>
                <div>
                    <v-row class="mb-4">
                        <v-col cols="12" md="3" v-for="stat in dashboardStats" :key="stat.title">
                            <v-card :color="stat.color" dark elevation="4">
                                <v-card-text class="d-flex align-center">
                                    <div class="flex-grow-1">
                                        <div class="text-h4 font-weight-bold">{{ stat.value }}</div>
                                        <div class="text-body-2">{{ stat.title }}</div>
                                        <div class="d-flex align-center mt-2">
                                            <v-icon :icon="stat.trendIcon" size="small" class="me-1"></v-icon>
                                            <span class="text-caption">{{ stat.trend }}</span>
                                        </div>
                                    </div>
                                    <v-icon :icon="stat.icon" size="40" class="opacity-80"></v-icon>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="8">
                            <v-card elevation="4">
                                <v-card-title>Sales Overview</v-card-title>
                                <v-card-text>
                                    <div class="fake-chart d-flex align-end justify-space-between pa-4"
                                        style="height: 200px; background: #f5f5f5; border-radius: 4px;">
                                        <div v-for="(bar, i) in chartData" :key="i"
                                            :style="{ height: bar + '%', width: '12%', backgroundColor: '#1976d2', borderRadius: '2px 2px 0 0' }">
                                        </div>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-card elevation="4">
                                <v-card-title>Recent Activity</v-card-title>
                                <v-card-text class="pa-0">
                                    <v-list density="compact">
                                        <v-list-item v-for="activity in recentActivity" :key="activity.id"
                                            :prepend-icon="activity.icon">
                                            <v-list-item-title>{{ activity.title }}</v-list-item-title>
                                            <v-list-item-subtitle>{{ activity.time }}</v-list-item-subtitle>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </CodeShowcase>

        <!-- Social Media Card -->
        <CodeShowcase title="Social Media Post Card"
            description="Interactive social media post with engagement features" icon="mdi-post" difficulty="Medium"
            :code="socialCardCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="400" elevation="4">
                        <div class="d-flex align-center pa-4">
                            <v-avatar class="me-3">
                                <v-img src="https://randomuser.me/api/portraits/women/65.jpg"></v-img>
                            </v-avatar>
                            <div class="flex-grow-1">
                                <div class="text-subtitle-1 font-weight-bold">Emma Watson</div>
                                <div class="text-caption text-grey">2 hours ago</div>
                            </div>
                            <v-btn icon="mdi-dots-vertical" variant="text" size="small"></v-btn>
                        </div>

                        <v-card-text class="pt-0">
                            <p>Just finished an amazing hike in the mountains! 🏔️ The view was absolutely breathtaking.
                                Sometimes you need to disconnect to reconnect with yourself. #nature #hiking
                                #mindfulness</p>
                        </v-card-text>

                        <v-img src="https://picsum.photos/400/300?random=3" height="250" cover></v-img>

                        <v-card-text class="d-flex align-center pa-3">
                            <div class="d-flex align-center me-4">
                                <v-icon icon="mdi-heart" color="red" size="small" class="me-1"></v-icon>
                                <v-icon icon="mdi-thumb-up" color="blue" size="small" class="me-1"></v-icon>
                                <span class="text-caption">127 others</span>
                            </div>
                            <v-spacer></v-spacer>
                            <span class="text-caption">23 comments • 5 shares</span>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions class="px-3">
                            <v-btn prepend-icon="mdi-heart-outline" variant="text" block>Like</v-btn>
                            <v-btn prepend-icon="mdi-comment-outline" variant="text" block>Comment</v-btn>
                            <v-btn prepend-icon="mdi-share-outline" variant="text" block>Share</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Product Card -->
        <CodeShowcase title="E-commerce Product Card"
            description="Product showcase card with rating, pricing, and actions" icon="mdi-shopping"
            difficulty="Medium" :code="productCardCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="320" elevation="6">
                        <div class="position-relative">
                            <v-img src="https://picsum.photos/320/240?random=4" height="240" cover></v-img>
                            <v-chip color="error" size="small" class="position-absolute" style="top: 12px; left: 12px;">
                                -20%
                            </v-chip>
                            <v-btn icon="mdi-heart-outline" variant="text" color="white" class="position-absolute"
                                style="top: 8px; right: 8px;"></v-btn>
                        </div>

                        <v-card-text class="pa-4">
                            <div class="text-h6 font-weight-bold mb-2">Wireless Headphones</div>
                            <div class="text-body-2 text-grey mb-3">Premium quality sound with noise cancellation
                                technology</div>

                            <div class="d-flex align-center mb-3">
                                <v-rating :model-value="4.5" color="amber" size="small" half-increments readonly
                                    density="compact"></v-rating>
                                <span class="text-caption text-grey ms-2">(142 reviews)</span>
                            </div>

                            <div class="d-flex align-center justify-space-between mb-4">
                                <div>
                                    <span class="text-h5 font-weight-bold color-primary">$79.99</span>
                                    <span class="text-body-2 text-grey text-decoration-line-through ms-2">$99.99</span>
                                </div>
                                <v-chip color="success" size="small" variant="tonal">In Stock</v-chip>
                            </div>

                            <div class="d-flex align-center mb-3">
                                <span class="text-body-2 me-3">Color:</span>
                                <v-btn v-for="color in ['#000000', '#FFFFFF', '#FF5722']" :key="color"
                                    :style="{ backgroundColor: color }" size="small" class="me-2"
                                    style="min-width: 24px; width: 24px; height: 24px; border: 1px solid #ccc;"></v-btn>
                            </div>
                        </v-card-text>

                        <v-card-actions class="px-4 pb-4">
                            <v-btn prepend-icon="mdi-cart" color="primary" block>
                                Add to Cart
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Order Summary -->
        <CodeShowcase title="Order Summary Card"
            description="E-commerce order summary with items, totals, and promo code functionality" icon="mdi-receipt"
            difficulty="Medium" :code="orderSummaryCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="400" elevation="4">
                        <v-card-title class="text-h6 pa-4">
                            Order Summary
                            <v-chip color="primary" size="small" class="ms-2">#12345</v-chip>
                        </v-card-title>

                        <v-divider></v-divider>

                        <v-card-text class="pa-0">
                            <v-list density="compact">
                                <v-list-item prepend-avatar="https://picsum.photos/40/40?random=1">
                                    <v-list-item-title class="text-body-2 font-weight-medium">
                                        Wireless Headphones
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="text-caption">
                                        Qty: 1 × $79.99
                                    </v-list-item-subtitle>
                                    <template v-slot:append>
                                        <div class="text-body-2 font-weight-bold">$79.99</div>
                                    </template>
                                </v-list-item>
                                <v-list-item prepend-avatar="https://picsum.photos/40/40?random=2">
                                    <v-list-item-title class="text-body-2 font-weight-medium">
                                        Bluetooth Speaker
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="text-caption">
                                        Qty: 2 × $49.99
                                    </v-list-item-subtitle>
                                    <template v-slot:append>
                                        <div class="text-body-2 font-weight-bold">$99.98</div>
                                    </template>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <div class="pa-4">
                                <div class="d-flex justify-space-between mb-2">
                                    <span class="text-body-2">Subtotal:</span>
                                    <span class="text-body-2">$179.97</span>
                                </div>
                                <div class="d-flex justify-space-between mb-2">
                                    <span class="text-body-2">Shipping:</span>
                                    <span class="text-body-2">$9.99</span>
                                </div>
                                <div class="d-flex justify-space-between mb-2">
                                    <span class="text-body-2">Tax:</span>
                                    <span class="text-body-2">$14.40</span>
                                </div>
                                <v-divider class="my-3"></v-divider>
                                <div class="d-flex justify-space-between">
                                    <span class="text-h6 font-weight-bold">Total:</span>
                                    <span class="text-h6 font-weight-bold text-primary">$204.36</span>
                                </div>
                            </div>
                        </v-card-text>

                        <v-card-actions class="pa-4">
                            <v-btn color="primary" variant="elevated" prepend-icon="mdi-credit-card" block size="large">
                                Proceed to Checkout
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Notification List -->
        <CodeShowcase title="Notification List"
            description="Interactive notification center with different types and read/unread states" icon="mdi-bell"
            difficulty="Medium" :code="notificationListCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="380" elevation="4">
                        <v-card-title class="d-flex align-center pa-4">
                            <v-icon icon="mdi-bell" class="me-2"></v-icon>
                            Notifications
                            <v-spacer></v-spacer>
                            <v-chip color="error" size="small">3</v-chip>
                        </v-card-title>

                        <v-divider></v-divider>

                        <v-card-text class="pa-0" style="max-height: 400px; overflow-y: auto;">
                            <v-list density="compact">
                                <v-list-item class="bg-blue-lighten-5">
                                    <template v-slot:prepend>
                                        <v-avatar color="blue" size="40">
                                            <v-icon icon="mdi-message" color="white"></v-icon>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title class="text-body-2 font-weight-medium">
                                        New Message
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="text-caption">
                                        You have received a new message from John Doe
                                    </v-list-item-subtitle>
                                    <template v-slot:append>
                                        <div class="d-flex flex-column align-end">
                                            <span class="text-caption text-grey">5m ago</span>
                                            <v-icon icon="mdi-circle" color="primary" size="8" class="mt-1"></v-icon>
                                        </div>
                                    </template>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item class="bg-blue-lighten-5">
                                    <template v-slot:prepend>
                                        <v-avatar color="green" size="40">
                                            <v-icon icon="mdi-package" color="white"></v-icon>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title class="text-body-2 font-weight-medium">
                                        Order Shipped
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="text-caption">
                                        Your order #12345 has been shipped
                                    </v-list-item-subtitle>
                                    <template v-slot:append>
                                        <div class="d-flex flex-column align-end">
                                            <span class="text-caption text-grey">2h ago</span>
                                            <v-icon icon="mdi-circle" color="primary" size="8" class="mt-1"></v-icon>
                                        </div>
                                    </template>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-avatar color="grey" size="40">
                                            <v-icon icon="mdi-cog" color="white"></v-icon>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title class="text-body-2 font-weight-medium">
                                        System Update
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="text-caption">
                                        New features are now available
                                    </v-list-item-subtitle>
                                    <template v-slot:append>
                                        <span class="text-caption text-grey">1d ago</span>
                                    </template>
                                </v-list-item>
                            </v-list>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions class="pa-3">
                            <v-btn variant="text" size="small">Mark all as read</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn variant="text" size="small" color="primary">View all</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Chat Page -->
        <CodeShowcase title="Chat Interface"
            description="Complete chat interface with messages, typing indicators, and modern design" icon="mdi-chat"
            difficulty="Hard" :code="chatPageCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="400" height="600" class="d-flex flex-column">
                        <v-card-title class="pa-3 bg-primary">
                            <div class="d-flex align-center">
                                <v-avatar size="40" class="me-3">
                                    <v-img src="https://picsum.photos/40/40?random=5"></v-img>
                                </v-avatar>
                                <div>
                                    <div class="text-body-1 font-weight-medium text-white">Sarah Johnson</div>
                                    <div class="text-caption text-blue-lighten-3">Online</div>
                                </div>
                                <v-spacer></v-spacer>
                                <v-btn icon="mdi-phone" variant="text" color="white"></v-btn>
                                <v-btn icon="mdi-video" variant="text" color="white"></v-btn>
                            </div>
                        </v-card-title>

                        <v-card-text class="flex-grow-1 pa-3 overflow-y-auto">
                            <div class="d-flex align-start mb-3">
                                <v-avatar size="32" class="me-2">
                                    <v-img src="https://picsum.photos/32/32?random=5"></v-img>
                                </v-avatar>
                                <div class="message-bubble"
                                    style="background-color: #f5f5f5; color: #333; padding: 8px 12px; border-radius: 18px; max-width: 250px;">
                                    <div class="text-body-2">Hey! How are you doing?</div>
                                    <div class="text-caption text-grey mt-1">10:30 AM</div>
                                </div>
                            </div>

                            <div class="d-flex justify-end mb-3">
                                <div class="d-flex align-start flex-row-reverse">
                                    <v-avatar size="32" class="ms-2">
                                        <v-img src="https://picsum.photos/32/32?random=6"></v-img>
                                    </v-avatar>
                                    <div class="message-bubble"
                                        style="background-color: #1976d2; color: white; padding: 8px 12px; border-radius: 18px; max-width: 250px;">
                                        <div class="text-body-2">I'm doing great! Just working on a new project.</div>
                                        <div class="text-caption mt-1" style="opacity: 0.8;">10:32 AM</div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-start mb-3">
                                <v-avatar size="32" class="me-2">
                                    <v-img src="https://picsum.photos/32/32?random=5"></v-img>
                                </v-avatar>
                                <div class="message-bubble"
                                    style="background-color: #f5f5f5; color: #333; padding: 8px 12px; border-radius: 18px; max-width: 250px;">
                                    <div class="text-body-2">That sounds exciting! What kind of project?</div>
                                    <div class="text-caption text-grey mt-1">10:33 AM</div>
                                </div>
                            </div>
                        </v-card-text>

                        <v-divider></v-divider>
                        <div class="pa-3">
                            <v-text-field placeholder="Type a message..." variant="outlined" density="compact"
                                hide-details>
                                <template v-slot:prepend-inner>
                                    <v-btn icon="mdi-emoticon" variant="text" size="small"></v-btn>
                                </template>
                                <template v-slot:append-inner>
                                    <v-btn icon="mdi-send" variant="text" color="primary"></v-btn>
                                </template>
                            </v-text-field>
                        </div>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Form Group -->
        <CodeShowcase title="Registration Form (2 Columns)"
            description="Complete registration form with two-column layout and comprehensive validation"
            icon="mdi-form-select" difficulty="Hard" :code="formGroupCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="800" elevation="4">
                        <v-card-title class="pa-6">
                            <v-icon icon="mdi-account-plus" class="me-2"></v-icon>
                            User Registration Form
                        </v-card-title>

                        <v-card-text class="pa-6">
                            <v-form>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <h3 class="text-h6 mb-4">Personal Information</h3>
                                        <v-text-field label="First Name" prepend-inner-icon="mdi-account"
                                            variant="outlined" class="mb-3"></v-text-field>
                                        <v-text-field label="Last Name" prepend-inner-icon="mdi-account"
                                            variant="outlined" class="mb-3"></v-text-field>
                                        <v-text-field label="Email Address" prepend-inner-icon="mdi-email"
                                            variant="outlined" class="mb-3"></v-text-field>
                                        <v-text-field label="Phone Number" prepend-inner-icon="mdi-phone"
                                            variant="outlined" class="mb-3"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="6">
                                        <h3 class="text-h6 mb-4">Account & Preferences</h3>
                                        <v-text-field label="Username" prepend-inner-icon="mdi-at" variant="outlined"
                                            class="mb-3"></v-text-field>
                                        <v-text-field label="Password" type="password" prepend-inner-icon="mdi-lock"
                                            variant="outlined" class="mb-3"></v-text-field>
                                        <v-select :items="['United States', 'Canada', 'United Kingdom', 'Australia']"
                                            label="Country" prepend-inner-icon="mdi-earth" variant="outlined"
                                            class="mb-3"></v-select>
                                        <v-textarea label="Bio (Optional)" prepend-inner-icon="mdi-text"
                                            variant="outlined" rows="3"></v-textarea>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12">
                                        <v-divider class="my-4"></v-divider>
                                        <v-checkbox label="I agree to the Terms of Service and Privacy Policy"
                                            color="primary"></v-checkbox>
                                        <v-checkbox label="Subscribe to newsletter for updates"
                                            color="primary"></v-checkbox>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>

                        <v-card-actions class="pa-6 pt-0">
                            <v-btn variant="outlined">Reset</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" variant="elevated">Create Account</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Quiz Wizard -->
        <CodeShowcase title="Quiz Wizard" description="Interactive multi-step quiz with progress tracking and results"
            icon="mdi-quiz" difficulty="Hard" :code="quizWizardCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="600" elevation="8">
                        <v-card-title class="d-flex align-center justify-space-between">
                            <span>Vue.js Knowledge Quiz</span>
                            <v-chip :color="getProgressColor()" variant="tonal">
                                {{ currentStep }} / {{ totalSteps }}
                            </v-chip>
                        </v-card-title>

                        <v-card-text>
                            <v-progress-linear :model-value="(currentStep / totalSteps) * 100"
                                :color="getProgressColor()" height="8" rounded class="mb-6"></v-progress-linear>

                            <!-- Question Display -->
                            <div v-if="!quizCompleted">
                                <div class="text-h6 mb-4">{{ currentQuestion?.question ?? '' }}</div>

                                <v-radio-group v-model="selectedAnswer" class="mb-4">
                                    <v-radio v-for="(option, index) in currentQuestion?.options ?? []" :key="index"
                                        :label="option" :value="index" :disabled="answerSubmitted"></v-radio>
                                </v-radio-group>

                                <v-alert v-if="answerSubmitted" :type="isCorrectAnswer ? 'success' : 'error'"
                                    class="mb-4">
                                    <div class="font-weight-bold">
                                        {{ isCorrectAnswer ? 'Correct!' : 'Incorrect!' }}
                                    </div>
                                    <div>{{ currentQuestion?.explanation ?? '' }}</div>
                                </v-alert>
                            </div>

                            <!-- Results Display -->
                            <div v-else class="text-center">
                                <v-icon :icon="getResultIcon()" :color="getResultColor()" size="64"
                                    class="mb-4"></v-icon>
                                <div class="text-h4 mb-2">Quiz Complete!</div>
                                <div class="text-h6 mb-4">
                                    You scored {{ score }} out of {{ totalSteps }}
                                </div>
                                <div class="text-body-1 mb-4">{{ getScoreMessage() }}</div>
                            </div>
                        </v-card-text>

                        <v-card-actions class="px-6 pb-6">
                            <v-btn v-if="!quizCompleted"
                                :disabled="selectedAnswer === null || (answerSubmitted && currentStep === totalSteps)"
                                :color="answerSubmitted ? 'primary' : 'success'"
                                @click="answerSubmitted ? nextQuestion() : submitAnswer()">
                                {{ answerSubmitted ? 'Next Question' : 'Submit Answer' }}
                            </v-btn>

                            <v-spacer v-if="!quizCompleted"></v-spacer>

                            <v-btn v-if="quizCompleted" color="primary" prepend-icon="mdi-restart" @click="restartQuiz">
                                Try Again
                            </v-btn>

                            <v-btn v-if="!quizCompleted && currentStep > 1" variant="outlined" @click="previousQuestion"
                                :disabled="answerSubmitted">
                                Previous
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- AI Chat Component -->
        <CodeShowcase title="AI Chat Component"
            description="Interactive AI assistant chat interface with typing indicators and quick actions"
            icon="mdi-robot" difficulty="Hard" :code="aiChatCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="700" height="600" elevation="8">
                        <v-card-title class="d-flex align-center pa-4 bg-primary text-white">
                            <v-icon class="me-2">mdi-robot</v-icon>
                            <span>AI Assistant</span>
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-dots-vertical" variant="text" size="small"></v-btn>
                        </v-card-title>

                        <v-card-text class="pa-0" style="height: 480px; display: flex; flex-direction: column;">
                            <!-- Chat Messages -->
                            <div ref="aiMessagesContainer" class="flex-grow-1 overflow-y-auto pa-4"
                                style="max-height: 400px;">
                                <div v-for="message in aiMessages" :key="message.id" class="mb-4">
                                    <div class="d-flex" :class="message.isUser ? 'justify-end' : 'justify-start'">
                                        <div class="d-flex align-start"
                                            :class="message.isUser ? 'flex-row-reverse' : 'flex-row'">
                                            <v-avatar :color="message.isUser ? 'primary' : 'grey-lighten-7'" size="32"
                                                class="mx-2">
                                                <v-icon :icon="message.isUser ? 'mdi-account' : 'mdi-robot'"></v-icon>
                                            </v-avatar>
                                            <div :class="message.isUser ? 'text-right' : 'text-left'"
                                                style="max-width: 280px;">
                                                <v-card :color="message.isUser ? 'primary' : 'secondary'"
                                                    :text-color="message.isUser ? 'white' : 'black'" class="pa-3"
                                                    style="height: auto; white-space: normal;max-width: 250px;">
                                                    {{ message.text }}
                                                </v-card>
                                                <div class="text-caption text-grey mt-1">
                                                    {{ message.timestamp }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Typing indicator -->
                                <div v-if="aiIsTyping" class="d-flex justify-start mb-4">
                                    <div class="d-flex align-start">
                                        <v-avatar color="grey-lighten-1" size="32" class="mx-2">
                                            <v-icon icon="mdi-robot"></v-icon>
                                        </v-avatar>
                                        <v-chip color="grey-lighten-4" class="pa-3">
                                            <div class="d-flex align-center">
                                                <div class="typing-dots">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </v-chip>
                                    </div>
                                </div>
                            </div>

                            <!-- Quick Actions -->
                            <div class="pa-3 border-t">
                                <div class="text-caption text-grey mb-2">Quick Actions</div>
                                <div class="d-flex flex-wrap gap-2">
                                    <v-chip v-for="action in aiQuickActions" :key="action" size="small" class="mr-1"
                                        variant="outlined" @click="sendAiQuickMessage(action)">
                                        {{ action }}
                                    </v-chip>
                                </div>
                            </div>

                            <!-- Message Input -->
                            <div class="pa-3 border-t">
                                <v-text-field v-model="aiNewMessage" placeholder="Type your message..."
                                    variant="outlined" density="compact" hide-details @keyup.enter="sendAiMessage">
                                    <template #append-inner>
                                        <v-btn icon="mdi-send" size="small" :disabled="!aiNewMessage.trim()"
                                            @click="sendAiMessage"></v-btn>
                                    </template>
                                </v-text-field>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Multi-Step Form -->
        <CodeShowcase title="Multi-Step Form"
            description="Interactive multi-step registration form with validation and progress tracking"
            icon="mdi-form-select" difficulty="Hard" :code="multiStepFormCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card class="multi-step-form-preview" width="700" elevation="3">
                        <v-card-title class="d-flex align-center pa-4">
                            <v-icon icon="mdi-form-select" class="me-2"></v-icon>
                            Multi-Step Registration
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-close" variant="text" size="small"></v-btn>
                        </v-card-title>

                        <v-divider></v-divider>

                        <!-- Progress Stepper -->
                        <v-stepper :items="[
                            { title: 'Personal Info', value: 1 },
                            { title: 'Address', value: 2 },
                            { title: 'Payment', value: 3 },
                            { title: 'Review', value: 4 }
                        ]" v-model="multiStepCurrentStep" alt-labels>
                        </v-stepper>

                        <!-- Form Content Preview -->
                        <v-window v-model="multiStepCurrentStep" class="pa-4">
                            <!-- Step 1: Personal Information -->
                            <v-window-item :value="1">
                                <v-card-text>
                                    <p class="text-body-1 mb-4">Please enter your personal information.</p>

                                    <div class="d-flex gap-3">
                                        <v-text-field label="First Name" variant="outlined" density="comfortable"
                                            class="flex-grow-1"></v-text-field>

                                        <v-text-field label="Last Name" variant="outlined" density="comfortable"
                                            class="flex-grow-1"></v-text-field>
                                    </div>

                                    <v-text-field label="Email" type="email" variant="outlined" density="comfortable"
                                        prepend-inner-icon="mdi-email" class="mb-2"></v-text-field>

                                    <v-text-field label="Phone Number" variant="outlined" density="comfortable"
                                        prepend-inner-icon="mdi-phone" class="mb-2"></v-text-field>
                                </v-card-text>
                            </v-window-item>

                            <!-- Step 2: Address Information -->
                            <v-window-item :value="2">
                                <v-card-text>
                                    <p class="text-body-1 mb-4">Please enter your address information.</p>

                                    <v-text-field label="Street Address" variant="outlined" density="comfortable"
                                        class="mb-2"></v-text-field>

                                    <div class="d-flex gap-3">
                                        <v-text-field label="City" variant="outlined" density="comfortable"
                                            class="flex-grow-1"></v-text-field>

                                        <v-text-field label="State / Province" variant="outlined" density="comfortable"
                                            class="flex-grow-1"></v-text-field>
                                    </div>
                                </v-card-text>
                            </v-window-item>

                            <!-- Step 3: Payment Information -->
                            <v-window-item :value="3">
                                <v-card-text>
                                    <p class="text-body-1 mb-4">Please enter your payment information.</p>

                                    <div class="payment-preview-icons d-flex align-center mb-4">
                                        <v-radio-group inline>
                                            <v-radio value="credit" label="Credit Card"></v-radio>
                                            <v-radio value="debit" label="Debit Card"></v-radio>
                                            <v-radio value="paypal" label="PayPal"></v-radio>
                                        </v-radio-group>

                                        <div class="ms-auto">
                                            <v-icon icon="mdi-credit-card" color="primary" class="me-2"></v-icon>
                                            <v-icon icon="mdi-credit-card-outline" class="me-2"></v-icon>
                                            <v-icon icon="mdi-paypal" color="info"></v-icon>
                                        </div>
                                    </div>

                                    <v-text-field label="Card Number" variant="outlined" density="comfortable"
                                        prepend-inner-icon="mdi-credit-card" class="mb-2"></v-text-field>

                                    <div class="d-flex gap-3">
                                        <v-text-field label="Expiry Date (MM/YY)" variant="outlined"
                                            density="comfortable" class="flex-grow-1"></v-text-field>

                                        <v-text-field label="CVV" variant="outlined" density="comfortable"
                                            type="password" class="flex-grow-1"></v-text-field>
                                    </div>
                                </v-card-text>
                            </v-window-item>

                            <!-- Step 4: Review & Submit -->
                            <v-window-item :value="4">
                                <v-card-text>
                                    <p class="text-body-1 mb-4">Please review your information before submitting.</p>

                                    <v-card variant="outlined" class="mb-4">
                                        <v-card-title class="bg-grey-lighten-4 pa-3 text-subtitle-1">
                                            <v-icon icon="mdi-account" class="me-2"></v-icon>
                                            Personal Information
                                            <v-spacer></v-spacer>
                                            <v-btn size="small" variant="text" icon="mdi-pencil"></v-btn>
                                        </v-card-title>
                                        <v-card-text class="pa-3">
                                            <div class="review-preview-item">
                                                <span class="text-caption text-grey">Full Name:</span>
                                                <span class="text-body-2">John Smith</span>
                                            </div>
                                            <div class="review-preview-item">
                                                <span class="text-caption text-grey">Email:</span>
                                                <span class="text-body-2">john.smith@example.com</span>
                                            </div>
                                        </v-card-text>
                                    </v-card>

                                    <v-card variant="outlined">
                                        <v-card-title class="bg-grey-lighten-4 pa-3 text-subtitle-1">
                                            <v-icon icon="mdi-credit-card" class="me-2"></v-icon>
                                            Payment Method
                                            <v-spacer></v-spacer>
                                            <v-btn size="small" variant="text" icon="mdi-pencil"></v-btn>
                                        </v-card-title>
                                        <v-card-text class="pa-3">
                                            <div class="review-preview-item">
                                                <span class="text-caption text-grey">Payment Method:</span>
                                                <span class="text-body-2">Credit Card</span>
                                            </div>
                                            <div class="review-preview-item">
                                                <span class="text-caption text-grey">Card Number:</span>
                                                <span class="text-body-2">**** **** **** 1234</span>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-card-text>
                            </v-window-item>
                        </v-window>

                        <!-- Form Buttons -->
                        <v-divider></v-divider>
                        <v-card-actions class="pa-4">
                            <v-btn variant="outlined" :disabled="multiStepCurrentStep === 1">
                                <v-icon icon="mdi-arrow-left" start></v-icon>
                                Back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn v-if="multiStepCurrentStep < 4" color="primary" @click="nextMultiStepPreview">
                                Next
                                <v-icon icon="mdi-arrow-right" end></v-icon>
                            </v-btn>
                            <v-btn v-else color="success">
                                Submit
                                <v-icon icon="mdi-check" end></v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Kanban Board / Todo List -->
        <CodeShowcase title="Kanban Board / Todo List"
            description="Drag-and-drop task management board with CRUD operations and filtering"
            icon="mdi-format-list-checks" difficulty="Hard" :code="kanbanBoardCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card class="kanban-preview" elevation="1" width="900">
                        <v-card-title class="d-flex align-center pa-3">
                            <v-icon icon="mdi-format-list-checks" class="me-2"></v-icon>
                            Project Tasks
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-plus" variant="text" size="small"></v-btn>
                            <v-btn icon="mdi-filter-variant" variant="text" size="small"></v-btn>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="pa-3">
                            <div class="d-flex gap-3 overflow-x-auto py-2">
                                <!-- To Do Column -->
                                <div class="kanban-column-preview" style="min-width: 220px;">
                                    <div
                                        class="column-header-preview d-flex align-center pa-2 bg-grey-lighten-4 rounded-t">
                                        <span class="text-body-2 font-weight-medium">To Do</span>
                                        <v-chip class="ms-2" size="x-small" color="grey">2</v-chip>
                                        <v-spacer></v-spacer>
                                        <v-btn icon="mdi-dots-vertical" variant="text" density="compact"
                                            size="x-small"></v-btn>
                                    </div>
                                    <div class="task-container-preview pa-1"
                                        style="background-color: #f5f5f5; min-height: 200px; border-radius: 0 0 4px 4px;">
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="warning" size="x-small">Medium</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Research competitors</div>
                                                <div class="text-caption text-grey mb-2">Analyze main competitors and
                                                    their features</div>
                                            </v-card-text>
                                        </v-card>
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="error" size="x-small">High</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Create wireframes</div>
                                                <div class="text-caption text-grey mb-2">Design initial wireframes for
                                                    dashboard</div>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </div>

                                <!-- In Progress Column -->
                                <div class="kanban-column-preview" style="min-width: 220px;">
                                    <div
                                        class="column-header-preview d-flex align-center pa-2 bg-blue-lighten-5 rounded-t">
                                        <span class="text-body-2 font-weight-medium">In Progress</span>
                                        <v-chip class="ms-2" size="x-small" color="blue">1</v-chip>
                                        <v-spacer></v-spacer>
                                        <v-btn icon="mdi-dots-vertical" variant="text" density="compact"
                                            size="x-small"></v-btn>
                                    </div>
                                    <div class="task-container-preview pa-1"
                                        style="background-color: #f5f5f5; min-height: 200px; border-radius: 0 0 4px 4px;">
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="error" size="x-small">High</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Implement authentication
                                                </div>
                                                <div class="text-caption text-grey mb-2">Set up JWT authentication flow
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </div>

                                <!-- Review Column -->
                                <div class="kanban-column-preview" style="min-width: 220px;">
                                    <div
                                        class="column-header-preview d-flex align-center pa-2 bg-amber-lighten-5 rounded-t">
                                        <span class="text-body-2 font-weight-medium">Review</span>
                                        <v-chip class="ms-2" size="x-small" color="amber">1</v-chip>
                                        <v-spacer></v-spacer>
                                        <v-btn icon="mdi-dots-vertical" variant="text" density="compact"
                                            size="x-small"></v-btn>
                                    </div>
                                    <div class="task-container-preview pa-1"
                                        style="background-color: #f5f5f5; min-height: 200px; border-radius: 0 0 4px 4px;">
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="info" size="x-small">Low</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Landing page design</div>
                                                <div class="text-caption text-grey mb-2">Review new landing page mockups
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </div>

                                <!-- Done Column -->
                                <div class="kanban-column-preview" style="min-width: 220px;">
                                    <div
                                        class="column-header-preview d-flex align-center pa-2 bg-green-lighten-5 rounded-t">
                                        <span class="text-body-2 font-weight-medium">Done</span>
                                        <v-chip class="ms-2" size="x-small" color="green">1</v-chip>
                                        <v-spacer></v-spacer>
                                        <v-btn icon="mdi-dots-vertical" variant="text" density="compact"
                                            size="x-small"></v-btn>
                                    </div>
                                    <div class="task-container-preview pa-1"
                                        style="background-color: #f5f5f5; min-height: 200px; border-radius: 0 0 4px 4px;">
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="warning" size="x-small">Medium</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Setup project</div>
                                                <div class="text-caption text-grey mb-2">Initialize Vue project with
                                                    Vuetify</div>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Video Player -->
        <CodeShowcase title="Video Player"
            description="Customizable video player with playback controls, progress bar, and fullscreen support"
            icon="mdi-video" difficulty="Hard" :code="videoPlayerCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="600" class="video-player-preview">
                        <div class="video-container-preview">
                            <video class="video-element-preview"
                                poster="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80">
                                <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                                    type="video/mp4">
                                Your browser does not support the video tag.
                            </video>

                            <div class="video-overlay-preview">
                                <div class="video-top-controls-preview">
                                    <v-btn icon="mdi-fullscreen" variant="text" color="white" size="small"></v-btn>
                                </div>

                                <div class="video-center-controls-preview">
                                    <v-btn icon="mdi-play" size="x-large" color="white" variant="text"></v-btn>
                                </div>

                                <div class="video-bottom-controls-preview">
                                    <div class="progress-container-preview">
                                        <div class="progress-bar-preview" style="width: 35%"></div>
                                    </div>

                                    <div class="controls-container-preview">
                                        <v-btn icon="mdi-play" size="small" color="white" variant="text"></v-btn>
                                        <div class="time-display-preview">1:25 / 3:45</div>
                                        <div class="volume-control-preview">
                                            <v-btn icon="mdi-volume-high" size="small" color="white"
                                                variant="text"></v-btn>
                                        </div>
                                        <v-btn icon="mdi-speedometer" size="small" color="white" variant="text"></v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <v-card-text>
                            <div class="text-h6">Big Buck Bunny (Sample)</div>
                            <div class="text-subtitle-1 text-medium-emphasis">Sample video for demonstration</div>
                        </v-card-text>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Audio Player -->
        <CodeShowcase title="Audio Player"
            description="Feature-rich audio player with playlist support, visualizations, and mini-player mode"
            icon="mdi-music" difficulty="Hard" :code="audioPlayerCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="500" class="audio-player-preview">
                        <div class="audio-player-content-preview">
                            <div class="artwork-container-preview">
                                <v-img src="https://picsum.photos/id/1025/300/300" aspect-ratio="1" cover
                                    class="artwork-preview"></v-img>
                            </div>

                            <div class="audio-info-preview">
                                <div class="track-info-preview">
                                    <div class="text-h6 track-title-preview">Dreaming</div>
                                    <div class="text-subtitle-2 text-medium-emphasis">Acoustic Band</div>
                                </div>

                                <div class="playback-controls-preview">
                                    <div class="progress-container-preview">
                                        <div class="progress-bar-preview" style="width: 60%"></div>
                                    </div>

                                    <div class="time-display-preview">
                                        <span>2:14</span>
                                        <span>3:45</span>
                                    </div>

                                    <div class="control-buttons-preview">
                                        <v-btn icon="mdi-shuffle-variant" size="small" variant="text"></v-btn>
                                        <v-btn icon="mdi-skip-previous" size="small" variant="text"></v-btn>
                                        <v-btn icon="mdi-pause-circle" color="primary" size="large"
                                            variant="text"></v-btn>
                                        <v-btn icon="mdi-skip-next" size="small" variant="text"></v-btn>
                                        <v-btn icon="mdi-repeat" size="small" color="primary" variant="text"></v-btn>
                                    </div>
                                </div>
                            </div>

                            <div class="additional-controls-preview">
                                <div class="volume-control-preview">
                                    <v-btn icon="mdi-volume-high" size="small" variant="text"></v-btn>
                                </div>
                                <div class="right-controls-preview">
                                    <v-btn icon="mdi-playlist-music" size="small" variant="text"></v-btn>
                                </div>
                            </div>
                        </div>

                        <v-divider></v-divider>

                        <v-list density="compact" class="playlist-preview" style="max-height: 150px; overflow-y: auto">
                            <v-list-item active>
                                <template v-slot:prepend>
                                    <v-avatar size="32" class="me-2">
                                        <v-img src="https://picsum.photos/id/1025/300/300" cover></v-img>
                                    </v-avatar>
                                </template>
                                <v-list-item-title>Dreaming</v-list-item-title>
                                <v-list-item-subtitle>Acoustic Band</v-list-item-subtitle>
                                <template v-slot:append>
                                    <span class="text-caption">3:45</span>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-avatar size="32" class="me-2">
                                        <v-img src="https://picsum.photos/id/1062/300/300" cover></v-img>
                                    </v-avatar>
                                </template>
                                <v-list-item-title>Sunset Melody</v-list-item-title>
                                <v-list-item-subtitle>The Nature Sounds</v-list-item-subtitle>
                                <template v-slot:append>
                                    <span class="text-caption">4:12</span>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-avatar size="32" class="me-2">
                                        <v-img src="https://picsum.photos/id/96/300/300" cover></v-img>
                                    </v-avatar>
                                </template>
                                <v-list-item-title>Mountain High</v-list-item-title>
                                <v-list-item-subtitle>Elevation</v-list-item-subtitle>
                                <template v-slot:append>
                                    <span class="text-caption">3:28</span>
                                </template>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- File Upload Component -->
        <CodeShowcase title="File Upload with Drag & Drop"
            description="Interactive file upload with drag and drop support, file preview, and progress tracking"
            icon="mdi-file-upload" difficulty="Hard" :code="fileUploadCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="600" class="pa-4" elevation="4">
                        <v-card-title class="pb-4">
                            Upload Files
                        </v-card-title>

                        <!-- Drop Zone -->
                        <div class="file-dropzone-preview" :class="{ 'dropzone-active': isDragActive }"
                            @dragenter.prevent="onDragEnter" @dragover.prevent="onDragOver"
                            @dragleave.prevent="onDragLeave" @drop.prevent="onDrop" @click="triggerFileInput">
                            <!-- Hidden file input -->
                            <input type="file" ref="fileInputRef" multiple class="file-input-hidden"
                                @change="onFileInputChange" />

                            <div class="dropzone-content-preview">
                                <v-icon :icon="isDragActive ? 'mdi-file-upload-outline' : 'mdi-cloud-upload'"
                                    color="primary" size="48"></v-icon>
                                <div class="text-body-1 mt-4">
                                    <span v-if="isDragActive">Drop files here</span>
                                    <span v-else><span class="text-primary">Click to upload</span> or drag and
                                        drop</span>
                                </div>
                                <div class="text-body-2 text-grey mt-2">
                                    Upload multiple files (Max size: 5MB each)
                                </div>
                            </div>
                        </div>

                        <!-- Preview area for uploaded files -->
                        <div v-if="uploadFiles.length > 0" class="preview-area-preview mt-4">
                            <div class="file-list-preview">
                                <div v-for="(file, i) in uploadFiles" :key="file.id" class="file-item-preview"
                                    :class="{ 'has-preview': file.previewUrl }">
                                    <!-- File preview -->
                                    <div class="file-preview-preview">
                                        <div v-if="file.previewUrl" class="preview-image-container-preview">
                                            <img :src="file.previewUrl" class="preview-image-preview"
                                                alt="File preview" />
                                        </div>
                                        <v-icon v-else :icon="getFileIcon(file.file)" :color="getFileColor(file.file)"
                                            size="36"></v-icon>
                                    </div>

                                    <!-- File details -->
                                    <div class="file-details-preview">
                                        <div class="file-name-preview text-truncate">{{ file.file.name }}</div>
                                        <div class="file-meta-preview text-caption">
                                            {{ formatFileSize(file.file.size) }}
                                            <span v-if="file.uploadProgress !== null">
                                                • {{ file.uploadProgress === 100 ? 'Uploaded' :
                                                    `${file.uploadProgress}%` }}
                                            </span>
                                        </div>

                                        <!-- Progress bar -->
                                        <v-progress-linear
                                            v-if="file.uploadProgress !== null && file.uploadProgress < 100"
                                            :model-value="file.uploadProgress" color="primary" height="4"
                                            class="mt-1"></v-progress-linear>

                                        <!-- Status -->
                                        <div v-if="file.error" class="file-error-preview text-caption text-error mt-1">
                                            {{ file.error }}
                                        </div>
                                    </div>

                                    <!-- Actions -->
                                    <div class="file-actions-preview">
                                        <v-btn icon="mdi-close" size="small" variant="text" color="default"
                                            @click="removeFile(i)"></v-btn>
                                    </div>
                                </div>
                            </div>

                            <!-- Action buttons -->
                            <div class="file-actions-container-preview mt-4">
                                <v-btn color="primary" variant="elevated" @click="uploadAllFiles"
                                    :loading="isUploading">
                                    Upload {{ uploadFiles.length }} {{ uploadFiles.length === 1 ? 'file' : 'files' }}
                                </v-btn>

                                <v-btn variant="text" class="ms-2" @click="clearAllFiles">
                                    Clear all
                                </v-btn>
                            </div>
                        </div>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- QR Code Generator/Scanner -->
        <CodeShowcase title="QR Code Generator/Scanner"
            description="Interactive QR code generator and scanner with customization options" icon="mdi-qrcode"
            difficulty="Hard" :code="qrCodeComponentCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="600" class="pa-4" elevation="4">
                        <v-card-title class="pb-4">
                            QR Code Generator & Scanner
                        </v-card-title>

                        <v-tabs v-model="qrActiveTab">
                            <v-tab value="generate">
                                <v-icon start>mdi-qrcode-edit</v-icon>
                                Generate
                            </v-tab>
                            <v-tab value="scan">
                                <v-icon start>mdi-qrcode-scan</v-icon>
                                Scan
                            </v-tab>
                        </v-tabs>

                        <v-window v-model="qrActiveTab" class="mt-4">
                            <!-- Generator Tab -->
                            <v-window-item value="generate">
                                <div>
                                    <v-text-field v-model="qrCodeValue" label="Text or URL"
                                        placeholder="Enter text or URL to encode" variant="outlined"
                                        :rules="[v => !!v || 'Content is required']"
                                        @update:model-value="generateQRCode"></v-text-field>

                                    <div class="d-flex align-start gap-4">
                                        <div>
                                            <v-select v-model="qrCodeSize" :items="qrSizeOptions" label="Size"
                                                variant="outlined" density="compact"
                                                @update:model-value="generateQRCode"></v-select>
                                        </div>
                                        <div>
                                            <v-select v-model="qrCodeErrorCorrection" :items="qrErrorCorrectionOptions"
                                                label="Error Correction" variant="outlined" density="compact"
                                                @update:model-value="generateQRCode"></v-select>
                                        </div>
                                        <div>
                                            <v-color-picker v-model="qrCodeColor" mode="hexa" hide-canvas hide-inputs
                                                show-swatches swatches-max-height="120"
                                                @update:model-value="generateQRCode"></v-color-picker>
                                        </div>
                                    </div>

                                    <div v-if="qrCodeValue" class="text-center my-4">
                                        <div v-if="qrCodeDataUrl" class="d-inline-block border rounded pa-4">
                                            <img :src="qrCodeDataUrl" alt="Generated QR Code" />
                                        </div>
                                        <v-skeleton-loader v-else type="image" width="200"
                                            height="200"></v-skeleton-loader>
                                    </div>

                                    <div class="d-flex justify-center mt-4">
                                        <v-btn color="primary" variant="elevated" prepend-icon="mdi-download"
                                            @click="downloadQRCode" :disabled="!qrCodeDataUrl">
                                            Download QR Code
                                        </v-btn>
                                    </div>
                                </div>
                            </v-window-item>

                            <!-- Scanner Tab -->
                            <v-window-item value="scan">
                                <div>
                                    <div v-if="!isScanning">
                                        <div class="text-center mb-4">
                                            <v-btn color="primary" variant="elevated" prepend-icon="mdi-camera"
                                                @click="startScanning">
                                                Start Camera
                                            </v-btn>
                                            <div class="text-caption mt-2">
                                                Or upload a QR code image
                                            </div>
                                            <v-file-input v-model="qrFileInput" accept="image/*"
                                                label="Select QR Code Image" variant="outlined" density="compact"
                                                prepend-icon="mdi-file-image" class="mt-2" hide-details
                                                @update:model-value="scanQRFromFile"></v-file-input>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="text-center mb-4">
                                            <div class="position-relative d-inline-block">
                                                <div class="qr-scanner-container">
                                                    <video ref="qrVideoElement" class="qr-video"></video>
                                                    <div class="qr-overlay">
                                                        <div class="qr-scanner-region"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <v-btn color="error" variant="elevated" prepend-icon="mdi-camera-off"
                                                @click="stopScanning" class="mt-4">
                                                Stop Camera
                                            </v-btn>
                                        </div>
                                    </div>

                                    <v-alert v-if="qrScanResult" color="success" variant="tonal" class="mt-4">
                                        <div class="text-h6">Scanned Result:</div>
                                        <div class="mt-2 text-break">{{ qrScanResult }}</div>
                                        <v-btn v-if="isUrl(qrScanResult)" color="primary" variant="text"
                                            prepend-icon="mdi-open-in-new" :href="qrScanResult" target="_blank"
                                            class="mt-2">
                                            Open URL
                                        </v-btn>
                                    </v-alert>

                                    <v-alert v-if="qrScanError" color="error" variant="tonal" class="mt-4">
                                        {{ qrScanError }}
                                    </v-alert>
                                </div>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>

        <!-- Hero Section -->
        <CodeShowcase title="Hero Section"
            description="Modern hero section with animated elements, stats, and call-to-action buttons"
            icon="mdi-rocket-launch" difficulty="Hard" :code="heroSectionCode">
            <template #preview>
                <div class="hero-preview-container">
                    <section class="hero-section-preview">
                        <v-container fluid class="hero-container-preview">
                            <v-row align="center" justify="center" class="fill-height">
                                <v-col cols="12" md="6" lg="5" class="hero-content-preview">
                                    <div class="hero-text-preview">
                                        <h1 class="hero-title-preview">
                                            Build Amazing
                                            <span class="hero-highlight-preview">Vue.js Apps</span>
                                        </h1>
                                        <p class="hero-subtitle-preview">
                                            Create stunning, responsive web applications with our comprehensive component library and modern design system.
                                        </p>
                                        <div class="hero-features-preview">
                                            <v-chip
                                                v-for="feature in heroFeatures"
                                                :key="feature"
                                                class="ma-1"
                                                color="primary"
                                                variant="outlined"
                                                size="small"
                                            >
                                                <v-icon start>mdi-check</v-icon>
                                                {{ feature }}
                                            </v-chip>
                                        </div>
                                        <div class="hero-actions-preview">
                                            <v-btn
                                                size="large"
                                                color="primary"
                                                variant="elevated"
                                                class="me-4 mb-2"
                                                prepend-icon="mdi-rocket-launch"
                                            >
                                                Get Started
                                            </v-btn>
                                            <v-btn
                                                size="large"
                                                variant="outlined"
                                                class="mb-2"
                                                prepend-icon="mdi-play-circle"
                                            >
                                                Watch Demo
                                            </v-btn>
                                        </div>
                                        <div class="hero-stats-preview">
                                            <div class="stats-grid-preview">
                                                <div v-for="stat in heroStats" :key="stat.label" class="stat-item-preview">
                                                    <div class="stat-number-preview">{{ stat.value }}</div>
                                                    <div class="stat-label-preview">{{ stat.label }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="6" lg="7" class="hero-visual-preview">
                                    <div class="hero-image-container-preview">
                                        <v-card
                                            class="hero-card-preview"
                                            elevation="12"
                                            rounded="lg"
                                        >
                                            <v-img
                                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop"
                                                alt="Modern web development"
                                                aspect-ratio="16/10"
                                                cover
                                                class="hero-main-image-preview"
                                            >
                                                <template #placeholder>
                                                    <div class="d-flex align-center justify-center fill-height">
                                                        <v-progress-circular
                                                            color="primary"
                                                            indeterminate
                                                        ></v-progress-circular>
                                                    </div>
                                                </template>
                                            </v-img>
                                            <div class="hero-card-overlay-preview">
                                                <v-chip
                                                    color="success"
                                                    variant="elevated"
                                                    prepend-icon="mdi-trending-up"
                                                    class="floating-chip-preview"
                                                >
                                                    New Features
                                                </v-chip>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </section>
                </div>
            </template>
        </CodeShowcase>

        <!-- Comment/Reply Thread -->
        <CodeShowcase title="Comment/Reply Thread"
            description="Interactive comment and reply system with voting, sorting, and threaded conversations"
            icon="mdi-comment-text-multiple" difficulty="Hard" :code="commentThreadCode">
            <template #preview>
                <div class="d-flex justify-center">
                    <v-card width="500" class="pa-4" elevation="4">
                        <v-card-title class="pb-1">
                            Discussion ({{ comments.length }} comments)
                        </v-card-title>

                        <v-divider class="my-2"></v-divider>

                        <!-- Comment sorting -->
                        <div class="d-flex align-center pb-2">
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                    <v-btn variant="text" size="small" v-bind="props">
                                        Sort by: {{ sortOption }}
                                        <v-icon end>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list density="compact">
                                    <v-list-item @click="sortOption = 'Newest'">
                                        <v-list-item-title>Newest</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="sortOption = 'Top Rated'">
                                        <v-list-item-title>Top Rated</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>

                        <!-- Add new comment -->
                        <v-textarea v-model="newCommentText" label="Add a comment" variant="outlined" rows="2"
                            hide-details class="mb-2"></v-textarea>

                        <div class="d-flex justify-end mb-6">
                            <v-btn color="primary" @click="addComment" size="small" :disabled="!newCommentText.trim()">
                                Comment
                            </v-btn>
                        </div>

                        <!-- Comments list -->
                        <v-list class="pa-0">
                            <template v-for="comment in sortedComments" :key="comment.id">
                                <div class="comment-container mb-4">
                                    <!-- Comment header -->
                                    <div class="d-flex align-center">
                                        <v-avatar size="32" color="grey-lighten-3">
                                            <v-icon>mdi-account</v-icon>
                                        </v-avatar>
                                        <div class="ms-2">
                                            <div class="text-subtitle-2">{{ comment.author }}</div>
                                            <div class="text-caption">{{ comment.date }}</div>
                                        </div>
                                    </div>

                                    <!-- Comment content -->
                                    <div class="mt-2 mb-1 text-body-2">{{ comment.text }}</div>

                                    <!-- Comment actions -->
                                    <div class="d-flex align-center">
                                        <v-btn size="x-small" variant="text"
                                            :color="comment.userVoted === 'up' ? 'primary' : ''"
                                            @click="voteComment(comment, 'up')">
                                            <v-icon size="small">mdi-thumb-up</v-icon>
                                        </v-btn>
                                        <span class="mx-1 text-caption">{{ comment.votes }}</span>
                                        <v-btn size="x-small" variant="text"
                                            :color="comment.userVoted === 'down' ? 'primary' : ''"
                                            @click="voteComment(comment, 'down')">
                                            <v-icon size="small">mdi-thumb-down</v-icon>
                                        </v-btn>
                                        <v-btn size="x-small" variant="text" @click="toggleReplyBox(comment.id)">
                                            Reply
                                        </v-btn>
                                    </div>

                                    <!-- Reply input box -->
                                    <div v-if="replyingTo === comment.id" class="mt-2 mb-2">
                                        <v-textarea v-model="replyText" label="Add a reply" variant="outlined" rows="2"
                                            hide-details class="mb-2"></v-textarea>
                                        <div class="d-flex justify-end">
                                            <v-btn text @click="replyingTo = null" size="small" class="me-2">
                                                Cancel
                                            </v-btn>
                                            <v-btn color="primary" @click="addReply(comment.id)" size="small"
                                                :disabled="!replyText.trim()">
                                                Reply
                                            </v-btn>
                                        </div>
                                    </div>

                                    <!-- Replies -->
                                    <div v-if="comment.replies && comment.replies.length > 0" class="ps-4 mt-2">
                                        <div v-for="reply in comment.replies" :key="reply.id"
                                            class="reply-container mt-3">
                                            <div class="d-flex align-center">
                                                <v-avatar size="24" color="grey-lighten-4">
                                                    <v-icon size="small">mdi-account</v-icon>
                                                </v-avatar>
                                                <div class="ms-2">
                                                    <div class="text-subtitle-2">{{ reply.author }}</div>
                                                    <div class="text-caption">{{ reply.date }}</div>
                                                </div>
                                            </div>
                                            <div class="mt-1 text-body-2">{{ reply.text }}</div>
                                            <div class="d-flex align-center">
                                                <v-btn size="x-small" variant="text"
                                                    :color="reply.userVoted === 'up' ? 'primary' : ''"
                                                    @click="voteReply(comment.id, reply, 'up')">
                                                    <v-icon size="x-small">mdi-thumb-up</v-icon>
                                                </v-btn>
                                                <span class="mx-1 text-caption">{{ reply.votes }}</span>
                                                <v-btn size="x-small" variant="text"
                                                    :color="reply.userVoted === 'down' ? 'primary' : ''"
                                                    @click="voteReply(comment.id, reply, 'down')">
                                                    <v-icon size="x-small">mdi-thumb-down</v-icon>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </v-list>
                    </v-card>
                </div>
            </template>
        </CodeShowcase>
    </div>
</template>

<script setup lang="ts">
import CodeShowcase from '@/components/CodeShowcase.vue'
import {
    AI_CHAT_CODE,
    AUDIO_PLAYER_CODE,
    CHAT_PAGE_CODE,
    COMMENT_THREAD_CODE,
    DASHBOARD_CODE,
    FILE_UPLOAD_CODE,
    FORM_GROUP_CODE,
    HERO_SECTION_CODE,
    KANBAN_BOARD_CODE,
    LOGIN_CARD_CODE,
    MULTI_STEP_FORM_CODE,
    NOTIFICATION_LIST_CODE,
    ORDER_SUMMARY_CODE,
    PRODUCT_CARD_CODE,
    QR_CODE_COMPONENT_CODE,
    QUIZ_WIZARD_CODE,
    SOCIAL_CARD_CODE,
    VIDEO_PLAYER_CODE,
    WEATHER_CARD_CODE
} from '@/constants/complexExamples'
import { computed, nextTick, onMounted, ref } from 'vue'

interface AiMessage {
    id: number
    text: string
    isUser: boolean
    timestamp: string
}

// Login form data
const loginValid = ref(false)
const loginEmail = ref('')
const loginPassword = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loginLoading = ref(false)

// Validation rules
const emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid',
]

const passwordRules = [
    (v: string) => !!v || 'Password is required',
    (v: string) => v.length >= 6 || 'Password must be at least 6 characters',
]

const handleLogin = () => {
    loginLoading.value = true
    setTimeout(() => {
        loginLoading.value = false
    }, 2000)
}

// Quiz Wizard data
const currentStep = ref(1)
const selectedAnswer = ref<number | null>(null)
const answerSubmitted = ref(false)
const userAnswers = ref<any[]>([])
const quizCompleted = ref(false)

const questions = [
    {
        question: "What is the Vue 3 Composition API primarily used for?",
        options: [
            "Creating reusable UI components",
            "Managing component state and logic",
            "Styling components",
            "Routing between pages"
        ],
        correct: 1,
        explanation: "The Composition API provides a more flexible way to organize component logic and enables better code reuse."
    },
    {
        question: "Which directive is used for two-way data binding in Vue?",
        options: [
            "v-bind",
            "v-model",
            "v-on",
            "v-if"
        ],
        correct: 1,
        explanation: "v-model creates a two-way binding between form inputs and component data."
    },
    {
        question: "What is the purpose of 'ref' in Vue 3?",
        options: [
            "To reference DOM elements",
            "To create reactive variables",
            "To import external libraries",
            "To define component methods"
        ],
        correct: 1,
        explanation: "ref() creates a reactive reference that can hold any value type and makes it reactive."
    },
    {
        question: "Which lifecycle hook runs after the component is mounted?",
        options: [
            "beforeMount",
            "created",
            "mounted",
            "updated"
        ],
        correct: 2,
        explanation: "The mounted() hook is called after the component has been mounted to the DOM."
    },
    {
        question: "What is Vuetify?",
        options: [
            "A Vue.js testing framework",
            "A Material Design component library for Vue",
            "A Vue.js routing solution",
            "A Vue.js state management library"
        ],
        correct: 1,
        explanation: "Vuetify is a Vue UI Library with Material Design components, providing pre-built components following Material Design guidelines."
    }
]

const totalSteps = questions.length

const currentQuestion = computed(() => questions[currentStep.value - 1])

const isCorrectAnswer = computed(() =>
    selectedAnswer.value === currentQuestion?.value?.correct
)

const score = computed(() =>
    userAnswers.value.filter(answer => answer.correct).length
)

const submitAnswer = () => {
    if (selectedAnswer.value === null) return

    const isCorrect = selectedAnswer.value === currentQuestion?.value?.correct
    userAnswers.value.push({
        question: currentStep.value,
        answer: selectedAnswer.value,
        correct: isCorrect
    })

    answerSubmitted.value = true
}

const nextQuestion = () => {
    if (currentStep.value < totalSteps) {
        currentStep.value++
        selectedAnswer.value = null
        answerSubmitted.value = false
    } else {
        quizCompleted.value = true
    }
}

const previousQuestion = () => {
    if (currentStep.value > 1) {
        currentStep.value--
        userAnswers.value.pop()
        selectedAnswer.value = null
        answerSubmitted.value = false
    }
}

const restartQuiz = () => {
    currentStep.value = 1
    selectedAnswer.value = null
    answerSubmitted.value = false
    userAnswers.value = []
    quizCompleted.value = false
}

const getProgressColor = () => {
    const progress = (currentStep.value / totalSteps) * 100
    if (progress < 40) return 'error'
    if (progress < 80) return 'warning'
    return 'success'
}

const getResultIcon = () => {
    const percentage = (score.value / totalSteps) * 100
    if (percentage >= 80) return 'mdi-trophy'
    if (percentage >= 60) return 'mdi-medal'
    return 'mdi-emoticon-sad'
}

const getResultColor = () => {
    const percentage = (score.value / totalSteps) * 100
    if (percentage >= 80) return 'success'
    if (percentage >= 60) return 'warning'
    return 'error'
}

const getScoreMessage = () => {
    const percentage = (score.value / totalSteps) * 100
    if (percentage >= 80) return 'Excellent! You have a strong understanding of Vue.js!'
    if (percentage >= 60) return 'Good job! You have a solid foundation in Vue.js.'
    if (percentage >= 40) return 'Not bad! Consider reviewing some Vue.js concepts.'
    return 'Keep learning! Vue.js has many powerful features to explore.'
}

// Weather data
const currentWeather = {
    temp: 72,
    condition: 'Partly Cloudy',
    location: 'San Francisco, CA',
    feelsLike: 75,
    humidity: 65,
    wind: 12,
    icon: 'mdi-weather-partly-cloudy'
}

const forecast = [
    { day: 'Today', icon: 'mdi-weather-partly-cloudy', high: 75, low: 62, chanceOfRain: 20 },
    { day: 'Tue', icon: 'mdi-weather-sunny', high: 78, low: 65, chanceOfRain: 5 },
    { day: 'Wed', icon: 'mdi-weather-rainy', high: 70, low: 58, chanceOfRain: 80 },
    { day: 'Thu', icon: 'mdi-weather-cloudy', high: 68, low: 55, chanceOfRain: 40 },
    { day: 'Fri', icon: 'mdi-weather-sunny', high: 76, low: 63, chanceOfRain: 10 },
]

// Dashboard data
const dashboardStats = [
    {
        title: 'Total Revenue',
        value: '$12.4K',
        icon: 'mdi-currency-usd',
        color: 'success',
        trend: '+12.5%',
        trendIcon: 'mdi-trending-up'
    },
    {
        title: 'New Users',
        value: '1,234',
        icon: 'mdi-account-group',
        color: 'primary',
        trend: '+8.2%',
        trendIcon: 'mdi-trending-up'
    },
    {
        title: 'Orders',
        value: '856',
        icon: 'mdi-shopping',
        color: 'warning',
        trend: '-2.4%',
        trendIcon: 'mdi-trending-down'
    },
    {
        title: 'Bounce Rate',
        value: '2.4%',
        icon: 'mdi-chart-line',
        color: 'error',
        trend: '-0.8%',
        trendIcon: 'mdi-trending-down'
    }
]

const chartData = [45, 67, 89, 34, 56, 78, 90, 23, 67, 45, 78, 89]

const recentActivity = [
    { id: 1, title: 'New order received', time: '2 min ago', icon: 'mdi-shopping' },
    { id: 2, title: 'User registered', time: '5 min ago', icon: 'mdi-account-plus' },
    { id: 3, title: 'Payment processed', time: '12 min ago', icon: 'mdi-credit-card' },
    { id: 4, title: 'Report generated', time: '1 hour ago', icon: 'mdi-file-chart' },
]

// Code examples
const loginCardCode = LOGIN_CARD_CODE
const weatherCardCode = WEATHER_CARD_CODE
const dashboardCode = DASHBOARD_CODE
const socialCardCode = SOCIAL_CARD_CODE
const productCardCode = PRODUCT_CARD_CODE
const quizWizardCode = QUIZ_WIZARD_CODE
const orderSummaryCode = ORDER_SUMMARY_CODE
const notificationListCode = NOTIFICATION_LIST_CODE
const chatPageCode = CHAT_PAGE_CODE
const formGroupCode = FORM_GROUP_CODE
const aiChatCode = AI_CHAT_CODE
const kanbanBoardCode = KANBAN_BOARD_CODE
const multiStepFormCode = MULTI_STEP_FORM_CODE
const commentThreadCode = COMMENT_THREAD_CODE
const videoPlayerCode = VIDEO_PLAYER_CODE
const audioPlayerCode = AUDIO_PLAYER_CODE
const fileUploadCode = FILE_UPLOAD_CODE
const qrCodeComponentCode = QR_CODE_COMPONENT_CODE
const heroSectionCode = HERO_SECTION_CODE

// Multi-step form preview
const multiStepCurrentStep = ref(1)

const nextMultiStepPreview = () => {
    if (multiStepCurrentStep.value < 4) {
        multiStepCurrentStep.value++
    }
}

// File Upload Component Data
const fileInputRef = ref<HTMLInputElement | null>(null);
const isDragActive = ref(false);
const isUploading = ref(false);

const uploadFiles = ref<Array<{
    id: string;
    file: { name: string; size: number; type: string };
    previewUrl: string | null;
    uploadProgress: number | null;
    error: string | null;
}>>([
    {
        id: '1',
        file: {
            name: 'project-proposal.pdf',
            size: 2540000,
            type: 'application/pdf'
        },
        previewUrl: null,
        uploadProgress: 100,
        error: null
    },
    {
        id: '2',
        file: {
            name: 'company-logo.png',
            size: 1250000,
            type: 'image/png'
        },
        previewUrl: 'https://picsum.photos/id/237/100/100',
        uploadProgress: 100,
        error: null
    },
    {
        id: '3',
        file: {
            name: 'large-video.mp4',
            size: 15200000,
            type: 'video/mp4'
        },
        previewUrl: null,
        uploadProgress: null,
        error: 'File exceeds maximum size of 5MB'
    }
])

// File upload methods
const triggerFileInput = () => {
    fileInputRef.value?.click();
}

const onDragEnter = (event: DragEvent) => {
    isDragActive.value = true;
}

const onDragOver = (event: DragEvent) => {
    isDragActive.value = true;
    // Add dataTransfer effect to show the drop is possible
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'copy';
    }
}

const onDragLeave = (event: DragEvent) => {
    // Only set to false if leaving the dropzone (not when entering a child element)
    const target = event.target as HTMLElement;
    const relatedTarget = event.relatedTarget as HTMLElement;

    if (!target.contains(relatedTarget)) {
        isDragActive.value = false;
    }
}

const onDrop = (event: DragEvent) => {
    isDragActive.value = false;

    if (event.dataTransfer?.files) {
        handleFiles(event.dataTransfer.files);
    }
}

const onFileInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
        handleFiles(input.files);
        // Reset input value so that selecting the same file again triggers an event
        input.value = '';
    }
}

const handleFiles = (fileList: FileList) => {
    const maxSizeMB = 5;
    const filesToAdd: typeof uploadFiles.value = [];

    // Convert FileList to array
    const newFiles = Array.from(fileList);

    for (const file of newFiles) {
        // Check file size
        const isTooBig = file.size > maxSizeMB * 1024 * 1024;

        // Generate random ID
        const id = Math.random().toString(36).substring(2, 9);

        // Check if the file is already added (by name and size)
        const isDuplicate = uploadFiles.value.some(
            f => f.file.name === file.name && f.file.size === file.size
        );

        // Skip duplicates
        if (isDuplicate) {
            continue;
        }

        // Create file object
        const newFile = {
            id,
            file: {
                name: file.name,
                size: file.size,
                type: file.type
            },
            previewUrl: null as string | null,
            uploadProgress: isTooBig ? null : 0,
            error: isTooBig ? `File exceeds maximum size of ${maxSizeMB}MB` : null
        };

        // Create preview URL for images
        if (file.type.startsWith('image/') && !isTooBig) {
            newFile.previewUrl = URL.createObjectURL(file);
        }

        filesToAdd.push(newFile);
    }

    // Simulate upload for valid files
    filesToAdd.forEach(file => {
        if (!file.error) {
            simulateUpload(file);
        }
    });

    // Add files to the list
    uploadFiles.value = [...uploadFiles.value, ...filesToAdd];
}

const simulateUpload = (file: (typeof uploadFiles.value)[0]) => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        file.uploadProgress = progress;

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 300);
}

const removeFile = (index: number) => {
    // Revoke object URL to prevent memory leaks
    const file = uploadFiles.value[index];
    if (file && file.previewUrl) {
        URL.revokeObjectURL(file.previewUrl);
    }

    // Remove file from the list
    uploadFiles.value.splice(index, 1);
}

const clearAllFiles = () => {
    // Revoke all object URLs
    uploadFiles.value.forEach((file) => {
        if (file && file.previewUrl) {
            URL.revokeObjectURL(file.previewUrl);
        }
    });

    // Clear the files array
    uploadFiles.value = [];
}

const uploadAllFiles = () => {
    if (isUploading.value || uploadFiles.value.length === 0) return;

    isUploading.value = true;

    // Get files that need to be uploaded (no errors and not already uploaded)
    const filesToUpload = uploadFiles.value.filter(
        file => !file.error && (!file.uploadProgress || file.uploadProgress < 100)
    );

    if (filesToUpload.length === 0) {
        isUploading.value = false;
        return;
    }

    // Simulate upload for all files
    let completedUploads = 0;

    filesToUpload.forEach(file => {
        let progress = file.uploadProgress || 0;
        const interval = setInterval(() => {
            progress += 10;
            file.uploadProgress = progress;

            if (progress >= 100) {
                clearInterval(interval);
                completedUploads++;

                if (completedUploads === filesToUpload.length) {
                    isUploading.value = false;
                }
            }
        }, 300);
    });
}

const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const getFileIcon = (file: { type: string; name: string }): string => {
    if (file.type.startsWith('image/')) {
        return 'mdi-file-image'
    } else if (file.type.startsWith('video/')) {
        return 'mdi-file-video'
    } else if (file.type.includes('pdf')) {
        return 'mdi-file-pdf'
    } else if (file.type.includes('document') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        return 'mdi-file-word'
    } else if (file.type.includes('sheet') || file.name.endsWith('.xls') || file.name.endsWith('.xlsx')) {
        return 'mdi-file-excel'
    } else if (file.name.match(/\.(zip|rar|tar|gz)$/i)) {
        return 'mdi-zip-box'
    }
    return 'mdi-file'
}

const getFileColor = (file: { type: string; name: string }): string => {
    if (file.type.startsWith('image/')) {
        return 'blue'
    } else if (file.type.startsWith('video/')) {
        return 'purple'
    } else if (file.type.includes('pdf')) {
        return 'red'
    } else if (file.type.includes('document') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        return 'blue-darken-4'
    } else if (file.type.includes('sheet') || file.name.endsWith('.xls') || file.name.endsWith('.xlsx')) {
        return 'green'
    } else if (file.name.match(/\.(zip|rar|tar|gz)$/i)) {
        return 'amber-darken-2'
    }
    return 'grey'
}

// AI Chat Component Data
const aiMessages = ref<AiMessage[]>([
    {
        id: 1,
        text: "Hello! I'm your AI assistant. How can I help you today?",
        isUser: false,
        timestamp: '10:30 AM'
    },
    {
        id: 2,
        text: "Hi! Can you help me with Vue.js questions?",
        isUser: true,
        timestamp: '10:31 AM'
    },
    {
        id: 3,
        text: "Absolutely! I'd be happy to help you with Vue.js. What specific topic would you like to learn about?",
        isUser: false,
        timestamp: '10:31 AM'
    }
])

const aiNewMessage = ref('')
const aiIsTyping = ref(false)
const aiMessagesContainer = ref<HTMLDivElement | null>(null)

// QR Code Generator/Scanner variables
const qrActiveTab = ref('generate')
const qrCodeValue = ref('https://example.com')
const qrCodeSize = ref(200)
const qrCodeColor = ref('#000000')
const qrCodeErrorCorrection = ref('M')
const qrCodeDataUrl = ref('')
const qrSizeOptions = [
    { title: 'Small (100px)', value: 100 },
    { title: 'Medium (200px)', value: 200 },
    { title: 'Large (300px)', value: 300 },
    { title: 'Extra Large (400px)', value: 400 }
]
const qrErrorCorrectionOptions = [
    { title: 'Low (L)', value: 'L' },
    { title: 'Medium (M)', value: 'M' },
    { title: 'Quartile (Q)', value: 'Q' },
    { title: 'High (H)', value: 'H' }
]
const isScanning = ref(false)
const qrVideoElement = ref<HTMLVideoElement | null>(null)
const qrScanResult = ref('')
const qrScanError = ref('')
const qrFileInput = ref<File | null>(null)

// Generate QR code when component mounts
onMounted(() => {
    generateQRCode()
})

// Generate QR code function
const generateQRCode = () => {
    if (!qrCodeValue.value) return

    // In a real implementation, you'd use a library like qrcode-generator or qrcode.vue
    // Here we simulate the generation with a timeout
    qrCodeDataUrl.value = ''
    setTimeout(() => {
        // Simulate QR code generation (would use actual QR library in real implementation)
        // This is just a placeholder URL for demo purposes
        qrCodeDataUrl.value = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeValue.value)}&size=${qrCodeSize.value}x${qrCodeSize.value}&color=${qrCodeColor.value.substring(1)}&ecc=${qrCodeErrorCorrection.value}`
    }, 500)
}

// Download QR code
const downloadQRCode = () => {
    if (!qrCodeDataUrl.value) return

    const link = document.createElement('a')
    link.href = qrCodeDataUrl.value
    link.download = 'qrcode.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

// Start camera for QR scanning
const startScanning = () => {
    isScanning.value = true
    qrScanResult.value = ''
    qrScanError.value = ''

    // In real implementation, you would use a library like jsQR or a browser API
    // Here we simulate finding a QR code after a delay
    setTimeout(() => {
        // Simulate successful scan
        qrScanResult.value = 'https://example.com/scanned-result'
        // In a real implementation, we would continue scanning until stopped
    }, 3000)
}

// Stop camera scanning
const stopScanning = () => {
    isScanning.value = false
}

// Scan QR from uploaded file
const scanQRFromFile = () => {
    if (!qrFileInput.value) return

    qrScanResult.value = ''
    qrScanError.value = ''

    // Simulate processing uploaded image
    setTimeout(() => {
        // Simulate successful scan from file
        qrScanResult.value = 'https://example.com/file-scan-result'
    }, 1000)
}

// Check if string is a URL
const isUrl = (str: string): boolean => {
    try {
        new URL(str)
        return true
    } catch {
        return false
    }
}

// Hero Section variables
const heroFeatures = ref([
    'Modern Design',
    'Responsive',
    'Customizable',
    'TypeScript Ready'
])

const heroStats = ref([
    { value: '50+', label: 'Components' },
    { value: '99%', label: 'Satisfaction' },
    { value: '24/7', label: 'Support' }
])

const aiQuickActions = [
    'Explain Vue.js',
    'Help with code',
    'Best practices',
    'Common errors'
]

const sendAiMessage = async () => {
    if (!aiNewMessage.value.trim()) return

    // Add user message
    const userMessage: AiMessage = {
        id: Date.now(),
        text: aiNewMessage.value,
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    aiMessages.value.push(userMessage)
    aiNewMessage.value = ''

    // Scroll to bottom
    await nextTick()
    scrollAiToBottom()

    // Show typing indicator
    aiIsTyping.value = true

    // Simulate AI response
    setTimeout(async () => {
        aiIsTyping.value = false

        const responses = [
            "That's a great question! Let me help you with that.",
            "I understand what you're looking for. Here's what I can tell you...",
            "Thanks for asking! Based on your question, I'd recommend...",
            "Good point! Here's how you can approach this problem...",
            "I see what you mean. The best way to handle this is..."
        ]

        const aiMessage: AiMessage = {
            id: Date.now() + 1,
            text: responses[Math.floor(Math.random() * responses.length)] || "I'm here to help!",
            isUser: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        aiMessages.value.push(aiMessage)

        await nextTick()
        scrollAiToBottom()
    }, 1500)
}

const sendAiQuickMessage = (message: string) => {
    aiNewMessage.value = message
    sendAiMessage()
}

const scrollAiToBottom = () => {
    if (aiMessagesContainer.value) {
        aiMessagesContainer.value.scrollTop = aiMessagesContainer.value.scrollHeight
    }
}

// Comment Thread data
const newCommentText = ref('')
const replyText = ref('')
const replyingTo = ref<number | null>(null)
const sortOption = ref('Newest')

const comments = ref([
    {
        id: 1,
        author: 'Sarah Johnson',
        date: '2 days ago',
        text: 'This is a great article! I really enjoyed the insights about Vue 3 composition API.',
        votes: 5,
        userVoted: null as string | null,
        replies: [
            {
                id: 101,
                author: 'Mike Chen',
                date: '1 day ago',
                text: 'I agree! I particularly liked the section on reactive references vs. reactive objects.',
                votes: 2,
                userVoted: null as string | null,
            }
        ]
    },
    {
        id: 2,
        author: 'Alex Thompson',
        date: '3 days ago',
        text: 'Does anyone know if there are any performance concerns when using the composition API with large datasets?',
        votes: 3,
        userVoted: null as string | null,
        replies: []
    }
])

const sortedComments = computed(() => {
    const commentsCopy = [...comments.value]

    if (sortOption.value === 'Newest') {
        // For demo purposes, we'll just reverse the array since we don't have actual timestamps
        return commentsCopy.reverse()
    } else {
        return commentsCopy.sort((a, b) => b.votes - a.votes)
    }
})

const addComment = () => {
    if (!newCommentText.value.trim()) return

    const newComment = {
        id: Date.now(),
        author: 'You',
        date: 'Just now',
        text: newCommentText.value,
        votes: 0,
        userVoted: null,
        replies: []
    }

    comments.value.unshift(newComment)
    newCommentText.value = ''
}

const toggleReplyBox = (commentId: number) => {
    replyingTo.value = replyingTo.value === commentId ? null : commentId
    replyText.value = ''
}

const addReply = (commentId: number) => {
    if (!replyText.value.trim()) return

    const newReply = {
        id: Date.now(),
        author: 'You',
        date: 'Just now',
        text: replyText.value,
        votes: 0,
        userVoted: null
    }

    const comment = comments.value.find(c => c.id === commentId)
    if (comment) {
        if (!comment.replies) {
            comment.replies = []
        }
        comment.replies.push(newReply)
    }

    replyText.value = ''
    replyingTo.value = null
}

const voteComment = (comment: any, voteType: 'up' | 'down') => {
    if (comment.userVoted === voteType) {
        // User is un-voting
        comment.votes += voteType === 'up' ? -1 : 1
        comment.userVoted = null
    } else {
        // User is changing their vote or voting for the first time
        if (comment.userVoted === 'up' && voteType === 'down') {
            comment.votes -= 2
        } else if (comment.userVoted === 'down' && voteType === 'up') {
            comment.votes += 2
        } else {
            comment.votes += voteType === 'up' ? 1 : -1
        }
        comment.userVoted = voteType
    }
}

const voteReply = (commentId: number, reply: any, voteType: 'up' | 'down') => {
    if (reply.userVoted === voteType) {
        // User is un-voting
        reply.votes += voteType === 'up' ? -1 : 1
        reply.userVoted = null
    } else {
        // User is changing their vote or voting for the first time
        if (reply.userVoted === 'up' && voteType === 'down') {
            reply.votes -= 2
        } else if (reply.userVoted === 'down' && voteType === 'up') {
            reply.votes += 2
        } else {
            reply.votes += voteType === 'up' ? 1 : -1
        }
        reply.userVoted = voteType
    }
}
</script>

<style scoped>
.typing-dots {
    display: flex;
    align-items: center;
    gap: 4px;
}

.typing-dots span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #666;
    animation: typing 1.4s infinite;
}

.typing-dots span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-dots span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {

    0%,
    60%,
    100% {
        transform: translateY(0);
        opacity: 0.5;
    }

    30% {
        transform: translateY(-10px);
        opacity: 1;
    }
}

.border-t {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
}

/* Kanban preview styles */
.kanban-preview {
    overflow: hidden;
}

.kanban-column-preview {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #f5f5f5;
}

.task-card-preview {
    cursor: grab;
    transition: transform 0.2s, box-shadow 0.2s;
    user-select: none;
}

.task-card-preview:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
}

.task-card-preview:active {
    cursor: grabbing;
}

/* Multi-step form preview styles */
.multi-step-form-preview {
    overflow: hidden;
}

.review-preview-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
}

@media (min-width: 600px) {
    .review-preview-item {
        flex-direction: row;
    }

    .review-preview-item .text-caption {
        width: 150px;
        padding-right: 16px;
    }
}

/* Comment thread styles */
.comment-container {
    border-left: 3px solid transparent;
    padding-left: 10px;
    transition: border-color 0.2s;
}

.comment-container:hover {
    border-left-color: var(--v-theme-primary);
}

.reply-container {
    border-left: 2px solid rgba(0, 0, 0, 0.08);
    padding-left: 10px;
    transition: border-color 0.2s;
}

.reply-container:hover {
    border-left-color: var(--v-theme-secondary);
}

/* Video Player Preview Styles */
.video-player-preview {
    background-color: #121212;
    overflow: hidden;
}

.video-container-preview {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    /* 16:9 Aspect Ratio */
    background-color: #000;
    overflow: hidden;
}

.video-element-preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* QR Code Scanner Styles */
.qr-scanner-container {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;
}

.qr-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.qr-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.qr-scanner-region {
    width: 70%;
    height: 70%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 5000px rgba(0, 0, 0, 0.5);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5), 0 0 0 5000px rgba(0, 0, 0, 0.5);
    }

    70% {
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0), 0 0 0 5000px rgba(0, 0, 0, 0.5);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0), 0 0 0 5000px rgba(0, 0, 0, 0.5);
    }
}

.video-overlay-preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0) 30%,
            rgba(0, 0, 0, 0) 70%,
            rgba(0, 0, 0, 0.7) 100%);
}

.video-top-controls-preview,
.video-bottom-controls-preview {
    display: flex;
    padding: 8px;
    width: 100%;
}

.video-top-controls-preview {
    justify-content: flex-end;
}

.video-center-controls-preview {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video-bottom-controls-preview {
    flex-direction: column;
    gap: 8px;
}

.progress-container-preview {
    position: relative;
    width: 100%;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    overflow: hidden;
}

.progress-bar-preview {
    position: absolute;
    height: 100%;
    background-color: #f44336;
    border-radius: 2px;
}

.controls-container-preview {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.time-display-preview {
    color: white;
    font-size: 12px;
    margin: 0 10px;
}

.volume-control-preview {
    display: flex;
    align-items: center;
}

/* Audio Player Preview Styles */
.audio-player-preview {
    overflow: hidden;
}

.audio-player-content-preview {
    display: flex;
    padding: 16px;
    align-items: center;
    position: relative;
}

.artwork-container-preview {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 16px;
}

.artwork-preview {
    border-radius: 8px;
}

.audio-info-preview {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.track-info-preview {
    margin-bottom: 16px;
}

.track-title-preview {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.playback-controls-preview {
    width: 100%;
}

.progress-container-preview {
    position: relative;
    width: 100%;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 8px;
}

.time-display-preview {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 8px;
}

.control-buttons-preview {
    display: flex;
    align-items: center;
    justify-content: center;
}

.additional-controls-preview {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.right-controls-preview {
    display: flex;
}

.playlist-preview {
    max-height: 150px;
    overflow-y: auto;
}

/* File Upload Preview Styles */
.file-dropzone-preview {
    width: 100%;
    border: 2px dashed rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    padding: 32px 16px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.dropzone-content-preview {
    position: relative;
    z-index: 1;
}

.file-dropzone-preview:hover {
    border-color: var(--v-theme-primary);
    background-color: rgba(0, 123, 255, 0.04);
}

.file-dropzone-preview.dropzone-active {
    border-color: var(--v-theme-primary);
    background-color: rgba(0, 123, 255, 0.08);
}

.file-input-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

.preview-area-preview {
    margin-top: 24px;
}

.file-list-preview {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.file-item-preview {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.03);
    transition: all 0.2s ease;
}

.file-item-preview:hover {
    background-color: rgba(0, 0, 0, 0.06);
}

.file-item-preview.has-preview .file-preview-preview {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #f5f5f5;
}

.preview-image-container-preview {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.preview-image-preview {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.file-preview-preview {
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.file-details-preview {
    flex: 1;
    min-width: 0;
    /* Needed for text-truncate to work */
}

.file-name-preview {
    font-weight: 500;
    margin-bottom: 2px;
}

.file-meta-preview {
    color: rgba(0, 0, 0, 0.6);
}

.file-error-preview {
    color: var(--v-theme-error);
}

.file-actions-preview {
    margin-left: 8px;
}

.file-actions-container-preview {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

/* Hero Section Preview Styles */
.hero-preview-container {
    width: 100%;
    max-width: none;
    margin: 0;
    border-radius: 8px;
    overflow: hidden;
}

.hero-section-preview {
    min-height: 500px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
}

.hero-container-preview {
    height: 500px;
    padding: 2rem 1rem;
}

.hero-content-preview {
    z-index: 2;
}

.hero-title-preview {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    color: #ffffff;
    margin-bottom: 1rem;
}

.hero-highlight-preview {
    background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle-preview {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.hero-features-preview {
    margin-bottom: 1.5rem;
}

.hero-actions-preview {
    margin-bottom: 2rem;
}

.hero-stats-preview {
    margin-top: 1rem;
}

.stats-grid-preview {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.stat-item-preview {
    text-align: center;
}

.stat-number-preview {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
}

.stat-label-preview {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.hero-visual-preview {
    position: relative;
    z-index: 1;
}

.hero-image-container-preview {
    position: relative;
}

.hero-card-preview {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
    animation: cardFloat 4s ease-in-out infinite;
}

@keyframes cardFloat {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

.hero-main-image-preview {
    border-radius: 8px;
}

.hero-card-overlay-preview {
    position: absolute;
    top: 1rem;
    right: 1rem;
}

.floating-chip-preview {
    animation: chipFloat 3s ease-in-out infinite;
}

@keyframes chipFloat {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-5px);
    }
}

/* Responsive adjustments for hero preview */
@media (max-width: 960px) {
    .hero-container-preview {
        height: auto;
        min-height: 500px;
        padding: 1rem;
    }
    
    .hero-content-preview {
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .stats-grid-preview {
        justify-content: center;
    }
    
    .hero-actions-preview .v-btn {
        display: block;
        width: 100%;
        margin-bottom: 0.5rem;
    }
}

@media (max-width: 600px) {
    .hero-title-preview {
        font-size: 2rem;
    }
    
    .hero-subtitle-preview {
        font-size: 1rem;
    }
    
    .stats-grid-preview {
        gap: 1rem;
    }
    
    .stat-number-preview {
        font-size: 1.25rem;
    }
}
</style>
