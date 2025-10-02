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
                                        <v-text-field
                                            label="First Name"
                                            variant="outlined"
                                            density="comfortable"
                                            class="flex-grow-1"
                                        ></v-text-field>
                                        
                                        <v-text-field
                                            label="Last Name"
                                            variant="outlined"
                                            density="comfortable"
                                            class="flex-grow-1"
                                        ></v-text-field>
                                    </div>
                                    
                                    <v-text-field
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        density="comfortable"
                                        prepend-inner-icon="mdi-email"
                                        class="mb-2"
                                    ></v-text-field>
                                    
                                    <v-text-field
                                        label="Phone Number"
                                        variant="outlined"
                                        density="comfortable"
                                        prepend-inner-icon="mdi-phone"
                                        class="mb-2"
                                    ></v-text-field>
                                </v-card-text>
                            </v-window-item>

                            <!-- Step 2: Address Information -->
                            <v-window-item :value="2">
                                <v-card-text>
                                    <p class="text-body-1 mb-4">Please enter your address information.</p>
                                    
                                    <v-text-field
                                        label="Street Address"
                                        variant="outlined"
                                        density="comfortable"
                                        class="mb-2"
                                    ></v-text-field>
                                    
                                    <div class="d-flex gap-3">
                                        <v-text-field
                                            label="City"
                                            variant="outlined"
                                            density="comfortable"
                                            class="flex-grow-1"
                                        ></v-text-field>
                                        
                                        <v-text-field
                                            label="State / Province"
                                            variant="outlined"
                                            density="comfortable"
                                            class="flex-grow-1"
                                        ></v-text-field>
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
                                    
                                    <v-text-field
                                        label="Card Number"
                                        variant="outlined"
                                        density="comfortable"
                                        prepend-inner-icon="mdi-credit-card"
                                        class="mb-2"
                                    ></v-text-field>
                                    
                                    <div class="d-flex gap-3">
                                        <v-text-field
                                            label="Expiry Date (MM/YY)"
                                            variant="outlined"
                                            density="comfortable"
                                            class="flex-grow-1"
                                        ></v-text-field>
                                        
                                        <v-text-field
                                            label="CVV"
                                            variant="outlined"
                                            density="comfortable"
                                            type="password"
                                            class="flex-grow-1"
                                        ></v-text-field>
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
                                    <div class="column-header-preview d-flex align-center pa-2 bg-grey-lighten-4 rounded-t">
                                        <span class="text-body-2 font-weight-medium">To Do</span>
                                        <v-chip class="ms-2" size="x-small" color="grey">2</v-chip>
                                        <v-spacer></v-spacer>
                                        <v-btn icon="mdi-dots-vertical" variant="text" density="compact" size="x-small"></v-btn>
                                    </div>
                                    <div class="task-container-preview pa-1" style="background-color: #f5f5f5; min-height: 200px; border-radius: 0 0 4px 4px;">
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="warning" size="x-small">Medium</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Research competitors</div>
                                                <div class="text-caption text-grey mb-2">Analyze main competitors and their features</div>
                                            </v-card-text>
                                        </v-card>
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="error" size="x-small">High</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Create wireframes</div>
                                                <div class="text-caption text-grey mb-2">Design initial wireframes for dashboard</div>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </div>
                                
                                <!-- In Progress Column -->
                                <div class="kanban-column-preview" style="min-width: 220px;">
                                    <div class="column-header-preview d-flex align-center pa-2 bg-blue-lighten-5 rounded-t">
                                        <span class="text-body-2 font-weight-medium">In Progress</span>
                                        <v-chip class="ms-2" size="x-small" color="blue">1</v-chip>
                                        <v-spacer></v-spacer>
                                        <v-btn icon="mdi-dots-vertical" variant="text" density="compact" size="x-small"></v-btn>
                                    </div>
                                    <div class="task-container-preview pa-1" style="background-color: #f5f5f5; min-height: 200px; border-radius: 0 0 4px 4px;">
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="error" size="x-small">High</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Implement authentication</div>
                                                <div class="text-caption text-grey mb-2">Set up JWT authentication flow</div>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </div>
                                
                                <!-- Review Column -->
                                <div class="kanban-column-preview" style="min-width: 220px;">
                                    <div class="column-header-preview d-flex align-center pa-2 bg-amber-lighten-5 rounded-t">
                                        <span class="text-body-2 font-weight-medium">Review</span>
                                        <v-chip class="ms-2" size="x-small" color="amber">1</v-chip>
                                        <v-spacer></v-spacer>
                                        <v-btn icon="mdi-dots-vertical" variant="text" density="compact" size="x-small"></v-btn>
                                    </div>
                                    <div class="task-container-preview pa-1" style="background-color: #f5f5f5; min-height: 200px; border-radius: 0 0 4px 4px;">
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="info" size="x-small">Low</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Landing page design</div>
                                                <div class="text-caption text-grey mb-2">Review new landing page mockups</div>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </div>
                                
                                <!-- Done Column -->
                                <div class="kanban-column-preview" style="min-width: 220px;">
                                    <div class="column-header-preview d-flex align-center pa-2 bg-green-lighten-5 rounded-t">
                                        <span class="text-body-2 font-weight-medium">Done</span>
                                        <v-chip class="ms-2" size="x-small" color="green">1</v-chip>
                                        <v-spacer></v-spacer>
                                        <v-btn icon="mdi-dots-vertical" variant="text" density="compact" size="x-small"></v-btn>
                                    </div>
                                    <div class="task-container-preview pa-1" style="background-color: #f5f5f5; min-height: 200px; border-radius: 0 0 4px 4px;">
                                        <v-card class="ma-1 task-card-preview" elevation="2">
                                            <v-card-text class="pa-2">
                                                <div class="d-flex justify-space-between align-center mb-1">
                                                    <v-chip color="warning" size="x-small">Medium</v-chip>
                                                </div>
                                                <div class="text-body-2 font-weight-medium">Setup project</div>
                                                <div class="text-caption text-grey mb-2">Initialize Vue project with Vuetify</div>
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
    </div>
</template>

<script setup lang="ts">
import CodeShowcase from '@/components/CodeShowcase.vue'
import {
    AI_CHAT_CODE,
    CHAT_PAGE_CODE,
    DASHBOARD_CODE,
    FORM_GROUP_CODE,
    KANBAN_BOARD_CODE,
    LOGIN_CARD_CODE,
    MULTI_STEP_FORM_CODE,
    NOTIFICATION_LIST_CODE,
    ORDER_SUMMARY_CODE,
    PRODUCT_CARD_CODE,
    QUIZ_WIZARD_CODE,
    SOCIAL_CARD_CODE,
    WEATHER_CARD_CODE
} from '@/constants/complexExamples'
import { computed, nextTick, ref } from 'vue'

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

// Multi-step form preview
const multiStepCurrentStep = ref(1)

const nextMultiStepPreview = () => {
    if (multiStepCurrentStep.value < 4) {
        multiStepCurrentStep.value++
    }
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
    box-shadow: 0 4px 8px rgba(0,0,0,0.1) !important;
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
</style>
