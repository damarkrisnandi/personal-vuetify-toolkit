// Complex Examples Code Constants
export const LOGIN_CARD_CODE = `<template>
  <v-card width="400" elevation="8">
    <v-card-title class="text-center text-h4 pa-6">
      Welcome Back
    </v-card-title>
    <v-card-text class="pa-6">
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          prepend-inner-icon="mdi-email"
          variant="outlined"
          class="mb-3"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          variant="outlined"
          class="mb-3"
        ></v-text-field>
        <v-checkbox
          v-model="rememberMe"
          label="Remember me"
          density="compact"
        ></v-checkbox>
        <v-btn
          :disabled="!valid"
          :loading="loading"
          color="primary"
          block
          size="large"
          @click="handleLogin"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)

const emailRules = [
  (v) => !!v || 'Email is required',
  (v) => /.+@.+\\..+/.test(v) || 'Email must be valid',
]

const passwordRules = [
  (v) => !!v || 'Password is required',
  (v) => v.length >= 6 || 'Password must be at least 6 characters',
]

const handleLogin = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>`

export const WEATHER_CARD_CODE = `<template>
  <v-card width="350" elevation="8">
    <v-card-text class="pa-0">
      <div class="weather-header pa-6 text-white text-center"
           style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);">
        <div class="d-flex align-center justify-space-between mb-4">
          <div>
            <div class="text-h4 font-weight-light">{{ currentWeather.temp }}°</div>
            <div class="text-body-1">{{ currentWeather.condition }}</div>
            <div class="text-caption">{{ currentWeather.location }}</div>
          </div>
          <v-icon :icon="currentWeather.icon" size="64"></v-icon>
        </div>
        <div class="d-flex justify-space-between text-center">
          <div>
            <div class="text-caption">Feels like</div>
            <div class="text-body-2">{{ currentWeather.feelsLike }}°</div>
          </div>
          <div>
            <div class="text-caption">Humidity</div>
            <div class="text-body-2">{{ currentWeather.humidity }}%</div>
          </div>
          <div>
            <div class="text-caption">Wind</div>
            <div class="text-body-2">{{ currentWeather.wind }} mph</div>
          </div>
        </div>
      </div>

      <v-list density="compact">
        <v-list-item v-for="day in forecast" :key="day.day">
          <template #prepend>
            <v-icon :icon="day.icon"></v-icon>
          </template>
          <v-list-item-title>{{ day.day }}</v-list-item-title>
          <template #append>
            <span>{{ day.high }}° / {{ day.low }}°</span>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
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
  { day: 'Today', icon: 'mdi-weather-partly-cloudy', high: 75, low: 62 },
  { day: 'Tue', icon: 'mdi-weather-sunny', high: 78, low: 65 },
  { day: 'Wed', icon: 'mdi-weather-rainy', high: 70, low: 58 },
  { day: 'Thu', icon: 'mdi-weather-cloudy', high: 68, low: 55 },
  { day: 'Fri', icon: 'mdi-weather-sunny', high: 76, low: 63 },
]
</script>`

export const DASHBOARD_CODE = `<template>
  <div>
    <v-row class="mb-4">
      <v-col cols="12" md="3" v-for="stat in stats" :key="stat.title">
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
            <v-icon :icon="stat.icon" size="40" class="ms-3"></v-icon>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-card elevation="2">
          <v-card-title>Performance Chart</v-card-title>
          <v-card-text>
            <div class="text-center pa-8 text-grey">
              Chart placeholder - integrate with your preferred charting library
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="2">
          <v-card-title>Recent Activity</v-card-title>
          <v-list density="compact">
            <v-list-item v-for="activity in recentActivity" :key="activity.id">
              <template #prepend>
                <v-icon :icon="activity.icon"></v-icon>
              </template>
              <v-list-item-title>{{ activity.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ activity.time }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const stats = [
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

const recentActivity = [
  { id: 1, title: 'New order received', time: '2 min ago', icon: 'mdi-shopping' },
  { id: 2, title: 'User registered', time: '5 min ago', icon: 'mdi-account-plus' },
  { id: 3, title: 'Payment processed', time: '12 min ago', icon: 'mdi-credit-card' },
  { id: 4, title: 'Report generated', time: '1 hour ago', icon: 'mdi-file-chart' },
]
</script>`

export const SOCIAL_CARD_CODE = `<template>
  <v-card width="400" elevation="4">
    <div class="d-flex align-center pa-4">
      <v-avatar class="me-3">
        <v-img src="https://randomuser.me/api/portraits/women/1.jpg"></v-img>
      </v-avatar>
      <div class="flex-grow-1">
        <div class="text-subtitle-1 font-weight-bold">Emma Watson</div>
        <div class="text-caption text-grey">2 hours ago</div>
      </div>
      <v-btn icon="mdi-dots-vertical" variant="text" size="small"></v-btn>
    </div>

    <v-card-text class="pt-0">
      <p>Just finished an amazing hike! 🏔️ The views were absolutely breathtaking. Nature never fails to inspire me! #nature #hiking #adventure</p>
    </v-card-text>

    <v-img src="https://picsum.photos/400/250?random=3" height="250" cover></v-img>

    <v-card-actions class="px-4 py-2">
      <v-btn prepend-icon="mdi-heart" variant="text" color="red">
        <span>124</span>
      </v-btn>
      <v-btn prepend-icon="mdi-comment" variant="text">
        <span>28</span>
      </v-btn>
      <v-btn prepend-icon="mdi-share" variant="text">
        <span>Share</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-bookmark-outline" variant="text"></v-btn>
    </v-card-actions>
  </v-card>
</template>`

export const QUIZ_WIZARD_CODE = `<template>
  <v-card width="600" elevation="8">
    <v-card-title class="d-flex align-center justify-space-between">
      <span>Vue.js Knowledge Quiz</span>
      <v-chip :color="getProgressColor()" variant="tonal">
        {{ currentStep }} / {{ totalSteps }}
      </v-chip>
    </v-card-title>

    <v-card-text>
      <v-progress-linear
        :model-value="(currentStep / totalSteps) * 100"
        :color="getProgressColor()"
        height="8"
        rounded
        class="mb-6"
      ></v-progress-linear>

      <!-- Question Display -->
      <div v-if="!quizCompleted">
        <div class="text-h6 mb-4">{{ currentQuestion.question }}</div>

        <v-radio-group v-model="selectedAnswer" class="mb-4">
          <v-radio
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            :label="option"
            :value="index"
            :disabled="answerSubmitted"
          ></v-radio>
        </v-radio-group>

        <v-alert
          v-if="answerSubmitted"
          :type="isCorrectAnswer ? 'success' : 'error'"
          class="mb-4"
        >
          <div class="font-weight-bold">
            {{ isCorrectAnswer ? 'Correct!' : 'Incorrect!' }}
          </div>
          <div>{{ currentQuestion.explanation }}</div>
        </v-alert>
      </div>

      <!-- Results Display -->
      <div v-else class="text-center">
        <v-icon
          :icon="getResultIcon()"
          :color="getResultColor()"
          size="64"
          class="mb-4"
        ></v-icon>
        <div class="text-h4 mb-2">Quiz Complete!</div>
        <div class="text-h6 mb-4">
          You scored {{ score }} out of {{ totalSteps }}
        </div>
        <div class="text-body-1 mb-4">{{ getScoreMessage() }}</div>
      </div>
    </v-card-text>

    <v-card-actions class="px-6 pb-6">
      <v-btn
        v-if="!quizCompleted"
        :disabled="selectedAnswer === null || (answerSubmitted && currentStep === totalSteps)"
        :color="answerSubmitted ? 'primary' : 'success'"
        @click="answerSubmitted ? nextQuestion() : submitAnswer()"
      >
        {{ answerSubmitted ? 'Next Question' : 'Submit Answer' }}
      </v-btn>

      <v-spacer v-if="!quizCompleted"></v-spacer>

      <v-btn
        v-if="quizCompleted"
        color="primary"
        prepend-icon="mdi-restart"
        @click="restartQuiz"
      >
        Try Again
      </v-btn>

      <v-btn
        v-if="!quizCompleted && currentStep > 1"
        variant="outlined"
        @click="previousQuestion"
        :disabled="answerSubmitted"
      >
        Previous
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentStep = ref(1)
const selectedAnswer = ref(null)
const answerSubmitted = ref(false)
const userAnswers = ref([])
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
  selectedAnswer.value === currentQuestion.value.correct
)

const score = computed(() =>
  userAnswers.value.filter(answer => answer.correct).length
)

const submitAnswer = () => {
  if (selectedAnswer.value === null) return

  const isCorrect = selectedAnswer.value === currentQuestion.value.correct
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
</script>`

export const PRODUCT_CARD_CODE = `<template>
  <v-card width="320" elevation="6">
    <div class="position-relative">
      <v-img src="https://picsum.photos/320/240?random=4" height="240" cover></v-img>
      <v-chip color="error" size="small" class="position-absolute" style="top: 12px; left: 12px;">
        -20%
      </v-chip>
      <v-btn icon="mdi-heart-outline" variant="elevated" size="small"
             class="position-absolute" style="top: 12px; right: 12px;"></v-btn>
    </div>

    <v-card-text class="pa-4">
      <div class="text-h6 font-weight-bold mb-2">Wireless Headphones</div>
      <div class="text-body-2 text-grey mb-3">Premium quality wireless headphones with noise cancellation</div>

      <div class="d-flex align-center mb-3">
        <v-rating :model-value="4.5" color="amber" size="small" readonly density="compact"></v-rating>
        <span class="text-caption text-grey ms-2">(142 reviews)</span>
      </div>

      <div class="d-flex align-center justify-space-between mb-3">
        <div>
          <span class="text-h5 font-weight-bold text-primary">$79.99</span>
          <span class="text-body-2 text-grey text-decoration-line-through ms-2">$99.99</span>
        </div>
        <v-chip color="success" size="small" variant="tonal">In Stock</v-chip>
      </div>
    </v-card-text>

    <v-card-actions class="px-4 pb-4">
      <v-btn prepend-icon="mdi-cart" color="primary" variant="elevated" block>
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>`

export const ORDER_SUMMARY_CODE = `<template>
  <v-card width="400" elevation="4">
    <v-card-title class="text-h6 pa-4">
      Order Summary
      <v-chip color="primary" size="small" class="ms-2">#12345</v-chip>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="pa-0">
      <!-- Order Items -->
      <v-list density="compact">
        <v-list-item
          v-for="item in orderItems"
          :key="item.id"
          :prepend-avatar="item.image"
        >
          <v-list-item-title class="text-body-2 font-weight-medium">
            $\{item.name}
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            Qty: $\{item.quantity} × $$\{item.price}
          </v-list-item-subtitle>

          <template v-slot:append>
            <div class="text-body-2 font-weight-bold">
              $$\{(item.quantity * item.price).toFixed(2)}
            </div>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- Order Totals -->
      <div class="pa-4">
        <div class="d-flex justify-space-between mb-2">
          <span class="text-body-2">Subtotal:</span>
          <span class="text-body-2">$$\{subtotal.toFixed(2)}</span>
        </div>
        <div class="d-flex justify-space-between mb-2">
          <span class="text-body-2">Shipping:</span>
          <span class="text-body-2">$$\{shipping.toFixed(2)}</span>
        </div>
        <div class="d-flex justify-space-between mb-2">
          <span class="text-body-2">Tax:</span>
          <span class="text-body-2">$$\{tax.toFixed(2)}</span>
        </div>
        <v-divider class="my-3"></v-divider>
        <div class="d-flex justify-space-between">
          <span class="text-h6 font-weight-bold">Total:</span>
          <span class="text-h6 font-weight-bold text-primary">
            $$\{total.toFixed(2)}
          </span>
        </div>
      </div>

      <!-- Promo Code -->
      <v-divider></v-divider>
      <div class="pa-4">
        <v-text-field
          v-model="promoCode"
          label="Promo Code"
          density="compact"
          variant="outlined"
          append-inner-icon="mdi-tag"
          @click:append-inner="applyPromo"
        >
          <template v-slot:append>
            <v-btn
              color="primary"
              variant="text"
              size="small"
              @click="applyPromo"
            >
              Apply
            </v-btn>
          </template>
        </v-text-field>
      </div>
    </v-card-text>

    <v-card-actions class="pa-4">
      <v-btn
        color="primary"
        variant="elevated"
        prepend-icon="mdi-credit-card"
        block
        size="large"
      >
        Proceed to Checkout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const promoCode = ref('')

const orderItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    quantity: 1,
    image: 'https://picsum.photos/40/40?random=1'
  },
  {
    id: 2,
    name: 'Bluetooth Speaker',
    price: 49.99,
    quantity: 2,
    image: 'https://picsum.photos/40/40?random=2'
  },
  {
    id: 3,
    name: 'Phone Case',
    price: 19.99,
    quantity: 1,
    image: 'https://picsum.photos/40/40?random=3'
  }
]

const subtotal = computed(() => {
  return orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const shipping = ref(9.99)
const tax = computed(() => subtotal.value * 0.08)
const total = computed(() => subtotal.value + shipping.value + tax.value)

const applyPromo = () => {
  console.log('Applying promo code:', promoCode.value)
}
</script>`

export const NOTIFICATION_LIST_CODE = `<template>
  <v-card width="380" elevation="4">
    <v-card-title class="d-flex align-center pa-4">
      <v-icon icon="mdi-bell" class="me-2"></v-icon>
      Notifications
      <v-spacer></v-spacer>
      <v-chip color="error" size="small">{{ unreadCount }}</v-chip>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="pa-0" style="max-height: 400px; overflow-y: auto;">
      <v-list density="compact">
        <template v-for="(notification, index) in notifications" :key="notification.id">
          <v-list-item
            :class="{ 'bg-blue-lighten-5': !notification.read }"
            @click="markAsRead(notification.id)"
          >
            <template v-slot:prepend>
              <v-avatar :color="getNotificationColor(notification.type)" size="40">
                <v-icon :icon="getNotificationIcon(notification.type)" color="white"></v-icon>
              </v-avatar>
            </template>

            <v-list-item-title class="text-body-2 font-weight-medium">
              {{ notification.title }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-caption text-wrap">
              {{ notification.message }}
            </v-list-item-subtitle>

            <template v-slot:append>
              <div class="d-flex flex-column align-end">
                <span class="text-caption text-grey">
                  {{ formatTime(notification.timestamp) }}
                </span>
                <v-icon
                  v-if="!notification.read"
                  icon="mdi-circle"
                  color="primary"
                  size="8"
                  class="mt-1"
                ></v-icon>
              </div>
            </template>
          </v-list-item>

          <v-divider v-if="index < notifications.length - 1"></v-divider>
        </template>
      </v-list>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="pa-3">
      <v-btn variant="text" size="small" @click="markAllAsRead">
        Mark all as read
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="text" size="small" color="primary">
        View all
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const notifications = ref([
  {
    id: 1,
    type: 'message',
    title: 'New Message',
    message: 'You have received a new message from John Doe',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    read: false
  },
  {
    id: 2,
    type: 'order',
    title: 'Order Shipped',
    message: 'Your order #12345 has been shipped and is on its way',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false
  },
  {
    id: 3,
    type: 'system',
    title: 'System Update',
    message: 'New features are now available in your dashboard',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    read: true
  },
  {
    id: 4,
    type: 'warning',
    title: 'Payment Required',
    message: 'Your subscription expires in 3 days. Renew now to continue',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    read: false
  },
  {
    id: 5,
    type: 'success',
    title: 'Account Verified',
    message: 'Your account has been successfully verified',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    read: true
  }
])

const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read).length
})

const markAsRead = (id) => {
  const notification = notifications.value.find(n => n.id === id)
  if (notification) {
    notification.read = true
  }
}

const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true)
}

const getNotificationColor = (type) => {
  const colors = {
    message: 'blue',
    order: 'green',
    system: 'grey',
    warning: 'orange',
    success: 'success'
  }
  return colors[type] || 'grey'
}

const getNotificationIcon = (type) => {
  const icons = {
    message: 'mdi-message',
    order: 'mdi-package',
    system: 'mdi-cog',
    warning: 'mdi-alert',
    success: 'mdi-check-circle'
  }
  return icons[type] || 'mdi-bell'
}

const formatTime = (timestamp) => {
  const now = new Date()
  const diff = now - timestamp
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (minutes < 60) return \`\${minutes}m ago\`
  if (hours < 24) return \`\${hours}h ago\`
  return \`\${days}d ago\`
}
</script>`

export const CHAT_PAGE_CODE = `<template>
  <v-card width="400" height="600" class="d-flex flex-column">
    <!-- Chat Header -->
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
        <v-btn icon="mdi-dots-vertical" variant="text" color="white"></v-btn>
      </div>
    </v-card-title>

    <!-- Chat Messages -->
    <v-card-text class="flex-grow-1 pa-0 overflow-y-auto" ref="chatContainer">
      <div class="pa-3">
        <div
          v-for="message in messages"
          :key="message.id"
          class="mb-3"
          :class="{ 'd-flex justify-end': message.sender === 'me' }"
        >
          <div class="d-flex align-start" :class="{ 'flex-row-reverse': message.sender === 'me' }">
            <v-avatar size="32" class="me-2" :class="{ 'ms-2 me-0': message.sender === 'me' }">
              <v-img :src="message.sender === 'me' ? 'https://picsum.photos/32/32?random=6' : 'https://picsum.photos/32/32?random=5'"></v-img>
            </v-avatar>

            <div class="message-bubble" :class="message.sender === 'me' ? 'message-sent' : 'message-received'">
              <div class="text-body-2">{{ message.text }}</div>
              <div class="text-caption text-grey mt-1">{{ formatMessageTime(message.timestamp) }}</div>
            </div>
          </div>
        </div>

        <!-- Typing indicator -->
        <div v-if="isTyping" class="d-flex align-center mb-3">
          <v-avatar size="32" class="me-2">
            <v-img src="https://picsum.photos/32/32?random=5"></v-img>
          </v-avatar>
          <div class="message-bubble message-received">
            <div class="typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>

    <!-- Message Input -->
    <v-divider></v-divider>
    <div class="pa-3">
      <v-text-field
        v-model="newMessage"
        placeholder="Type a message..."
        variant="outlined"
        density="compact"
        hide-details
        @keyup.enter="sendMessage"
      >
        <template v-slot:prepend-inner>
          <v-btn icon="mdi-emoticon" variant="text" size="small"></v-btn>
          <v-btn icon="mdi-attachment" variant="text" size="small"></v-btn>
        </template>
        <template v-slot:append-inner>
          <v-btn
            icon="mdi-send"
            variant="text"
            color="primary"
            @click="sendMessage"
            :disabled="!newMessage.trim()"
          ></v-btn>
        </template>
      </v-text-field>
    </div>
  </v-card>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const newMessage = ref('')
const isTyping = ref(false)
const chatContainer = ref(null)

const messages = ref([
  {
    id: 1,
    sender: 'other',
    text: 'Hey! How are you doing?',
    timestamp: new Date(Date.now() - 10 * 60 * 1000)
  },
  {
    id: 2,
    sender: 'me',
    text: 'I\'m doing great! Just working on a new project.',
    timestamp: new Date(Date.now() - 8 * 60 * 1000)
  },
  {
    id: 3,
    sender: 'other',
    text: 'That sounds exciting! What kind of project?',
    timestamp: new Date(Date.now() - 6 * 60 * 1000)
  },
  {
    id: 4,
    sender: 'me',
    text: 'It\'s a Vue.js application with Vuetify components. Really enjoying the development process!',
    timestamp: new Date(Date.now() - 4 * 60 * 1000)
  },
  {
    id: 5,
    sender: 'other',
    text: 'Nice! I love Vue.js too. The component system is so clean and intuitive.',
    timestamp: new Date(Date.now() - 2 * 60 * 1000)
  }
])

const sendMessage = async () => {
  if (!newMessage.value.trim()) return

  const message = {
    id: messages.value.length + 1,
    sender: 'me',
    text: newMessage.value,
    timestamp: new Date()
  }

  messages.value.push(message)
  newMessage.value = ''

  await nextTick()
  scrollToBottom()

  // Simulate typing and response
  setTimeout(() => {
    isTyping.value = true
    setTimeout(() => {
      isTyping.value = false
      const responses = [
        'That\'s awesome!',
        'Sounds great!',
        'I agree!',
        'Tell me more about it!',
        'Interesting perspective!'
      ]
      const response = {
        id: messages.value.length + 1,
        sender: 'other',
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      }
      messages.value.push(response)
      nextTick(() => scrollToBottom())
    }, 2000)
  }, 1000)
}

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.$el.scrollTop = chatContainer.value.$el.scrollHeight
  }
}

const formatMessageTime = (timestamp) => {
  return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
</script>

<style scoped>
.message-bubble {
  max-width: 250px;
  padding: 8px 12px;
  border-radius: 18px;
  word-wrap: break-word;
}

.message-sent {
  background-color: #1976d2;
  color: white;
}

.message-received {
  background-color: #f5f5f5;
  color: #333;
}

.typing-dots {
  display: flex;
  align-items: center;
  height: 20px;
}

.typing-dots span {
  height: 6px;
  width: 6px;
  background-color: #999;
  border-radius: 50%;
  display: inline-block;
  margin: 0 1px;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-dots span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>`

export const FORM_GROUP_CODE = `<template>
  <v-card width="800" elevation="4">
    <v-card-title class="pa-6">
      <v-icon icon="mdi-account-plus" class="me-2"></v-icon>
      User Registration Form
    </v-card-title>

    <v-card-text class="pa-6">
      <v-form ref="form" v-model="valid">
        <v-row>
          <!-- Left Column -->
          <v-col cols="12" md="6">
            <h3 class="text-h6 mb-4">Personal Information</h3>

            <v-text-field
              v-model="formData.firstName"
              :rules="nameRules"
              label="First Name"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="formData.lastName"
              :rules="nameRules"
              label="Last Name"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="formData.email"
              :rules="emailRules"
              label="Email Address"
              prepend-inner-icon="mdi-email"
              variant="outlined"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="formData.phone"
              :rules="phoneRules"
              label="Phone Number"
              prepend-inner-icon="mdi-phone"
              variant="outlined"
              class="mb-3"
            ></v-text-field>

            <v-menu v-model="dateMenu">
              <template v-slot:activator="{ props }">
                <v-text-field
                  v-model="formData.birthDate"
                  :rules="dateRules"
                  label="Date of Birth"
                  prepend-inner-icon="mdi-calendar"
                  variant="outlined"
                  readonly
                  v-bind="props"
                  class="mb-3"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="datePickerValue"
                @update:model-value="onDateSelected"
              ></v-date-picker>
            </v-menu>

            <v-select
              v-model="formData.gender"
              :rules="genderRules"
              :items="genderOptions"
              label="Gender"
              prepend-inner-icon="mdi-human-male-female"
              variant="outlined"
              class="mb-3"
            ></v-select>
          </v-col>

          <!-- Right Column -->
          <v-col cols="12" md="6">
            <h3 class="text-h6 mb-4">Account & Preferences</h3>

            <v-text-field
              v-model="formData.username"
              :rules="usernameRules"
              label="Username"
              prepend-inner-icon="mdi-at"
              variant="outlined"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="formData.password"
              :rules="passwordRules"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showPassword = !showPassword"
              variant="outlined"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="formData.confirmPassword"
              :rules="confirmPasswordRules"
              label="Confirm Password"
              :type="showConfirmPassword ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock-check"
              :append-inner-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showConfirmPassword = !showConfirmPassword"
              variant="outlined"
              class="mb-3"
            ></v-text-field>

            <v-select
              v-model="formData.country"
              :rules="countryRules"
              :items="countryOptions"
              label="Country"
              prepend-inner-icon="mdi-earth"
              variant="outlined"
              class="mb-3"
            ></v-select>

            <v-autocomplete
              v-model="formData.interests"
              :items="interestOptions"
              label="Interests"
              prepend-inner-icon="mdi-heart"
              variant="outlined"
              multiple
              chips
              closable-chips
              class="mb-3"
            ></v-autocomplete>

            <v-textarea
              v-model="formData.bio"
              label="Bio (Optional)"
              prepend-inner-icon="mdi-text"
              variant="outlined"
              rows="3"
              class="mb-3"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- Agreement Section -->
        <v-row>
          <v-col cols="12">
            <v-divider class="my-4"></v-divider>
            <v-checkbox
              v-model="formData.agreeTerms"
              :rules="termsRules"
              color="primary"
            >
              <template v-slot:label>
                <div>
                  I agree to the
                  <a href="#" @click.prevent class="text-primary">Terms of Service</a>
                  and
                  <a href="#" @click.prevent class="text-primary">Privacy Policy</a>
                </div>
              </template>
            </v-checkbox>

            <v-checkbox
              v-model="formData.newsletter"
              label="Subscribe to our newsletter for updates and promotions"
              color="primary"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>

    <v-card-actions class="pa-6 pt-0">
      <v-btn variant="outlined" @click="resetForm">
        Reset
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        variant="elevated"
        :disabled="!valid"
        :loading="loading"
        @click="submitForm"
      >
        Create Account
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const valid = ref(false)
const loading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const dateMenu = ref(false)
const datePickerValue = ref(null)

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: '',
  gender: '',
  username: '',
  password: '',
  confirmPassword: '',
  country: '',
  interests: [],
  bio: '',
  agreeTerms: false,
  newsletter: false
})

const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say']
const countryOptions = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Japan', 'Other']
const interestOptions = ['Technology', 'Sports', 'Music', 'Art', 'Travel', 'Cooking', 'Reading', 'Gaming', 'Photography', 'Fitness']

// Validation rules
const nameRules = [
  v => !!v || 'Name is required',
  v => (v && v.length >= 2) || 'Name must be at least 2 characters'
]

const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const phoneRules = [
  v => !!v || 'Phone number is required',
  v => /^[+]?[1-9][\d-\s()]+$/.test(v) || 'Phone number must be valid'
]

const dateRules = [
  v => !!v || 'Date of birth is required'
]

const genderRules = [
  v => !!v || 'Gender is required'
]

const usernameRules = [
  v => !!v || 'Username is required',
  v => (v && v.length >= 3) || 'Username must be at least 3 characters',
  v => /^[a-zA-Z0-9_]+$/.test(v) || 'Username can only contain letters, numbers, and underscores'
]

const passwordRules = [
  v => !!v || 'Password is required',
  v => (v && v.length >= 8) || 'Password must be at least 8 characters',
  v => /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(v) || 'Password must contain uppercase, lowercase, and number'
]

const confirmPasswordRules = [
  v => !!v || 'Password confirmation is required',
  v => v === formData.value.password || 'Passwords must match'
]

const countryRules = [
  v => !!v || 'Country is required'
]

const termsRules = [
  v => !!v || 'You must agree to the terms and conditions'
]

const onDateSelected = (date) => {
  if (date) {
    formData.value.birthDate = new Date(date).toLocaleDateString()
    dateMenu.value = false
  }
}

const resetForm = () => {
  formData.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    username: '',
    password: '',
    confirmPassword: '',
    country: '',
    interests: [],
    bio: '',
    agreeTerms: false,
    newsletter: false
  }
}

const submitForm = async () => {
  loading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log('Form submitted:', formData.value)
  loading.value = false

  // Show success message or redirect
  alert('Account created successfully!')
}
</script>`

export const AI_CHAT_CODE = `<template>
  <v-card width="700" height="600" elevation="8">
    <v-card-title class="d-flex align-center pa-4 bg-primary text-white">
      <v-icon class="me-2">mdi-robot</v-icon>
      <span>AI Assistant</span>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-dots-vertical" variant="text" size="small"></v-btn>
    </v-card-title>

    <v-card-text class="pa-0" style="height: 480px; display: flex; flex-direction: column;">
      <!-- Chat Messages -->
      <div ref="messagesContainer" class="flex-grow-1 overflow-y-auto pa-4" style="max-height: 400px;">
        <div v-for="message in messages" :key="message.id" class="mb-4">
          <div class="d-flex" :class="message.isUser ? 'justify-end' : 'justify-start'">
            <div class="d-flex align-start" :class="message.isUser ? 'flex-row-reverse' : 'flex-row'">
              <v-avatar :color="message.isUser ? 'primary' : 'grey-lighten-1'" size="32" class="mx-2">
                <v-icon :icon="message.isUser ? 'mdi-account' : 'mdi-robot'"></v-icon>
              </v-avatar>
              <div :class="message.isUser ? 'text-right' : 'text-left'" style="max-width: 280px;">
                <v-card
                  :color="message.isUser ? 'primary' : 'secondary'"
                  :text-color="message.isUser ? 'white' : 'black'"
                  class="pa-3"
                  style="height: auto; white-space: normal;"
                >
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
        <div v-if="isTyping" class="d-flex justify-start mb-4">
          <div class="d-flex align-start">
            <v-avatar color="grey-lighten-1" size="32" class="mx-2">
              <v-icon icon="mdi-robot"></v-icon>
            </v-avatar>
            <v-card color="grey-lighten-4" class="pa-3">
              <div class="d-flex align-center">
                <div class="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="pa-3 border-t">
        <div class="text-caption text-grey mb-2">Quick Actions</div>
        <div class="d-flex flex-wrap gap-2">
          <v-chip
            v-for="action in quickActions"
            :key="action"
            size="small"
            variant="outlined"
            @click="sendQuickMessage(action)"
            class="mr-1"
          >
            {{ action }}
          </v-chip>
        </div>
      </div>

      <!-- Message Input -->
      <div class="pa-3 border-t">
        <v-text-field
          v-model="newMessage"
          placeholder="Type your message..."
          variant="outlined"
          density="compact"
          hide-details
          @keyup.enter="sendMessage"
        >
          <template #append-inner>
            <v-btn
              icon="mdi-send"
              size="small"
              :disabled="!newMessage.trim()"
              @click="sendMessage"
            ></v-btn>
          </template>
        </v-text-field>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const messages = ref([
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

const newMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)

const quickActions = [
  'Explain Vue.js',
  'Help with code',
  'Best practices',
  'Common errors'
]

const sendMessage = async () => {
  if (!newMessage.value.trim()) return

  // Add user message
  const userMessage = {
    id: Date.now(),
    text: newMessage.value,
    isUser: true,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  messages.value.push(userMessage)
  newMessage.value = ''

  // Scroll to bottom
  await nextTick()
  scrollToBottom()

  // Show typing indicator
  isTyping.value = true

  // Simulate AI response
  setTimeout(async () => {
    isTyping.value = false

    const responses = [
      "That's a great question! Let me help you with that.",
      "I understand what you're looking for. Here's what I can tell you...",
      "Thanks for asking! Based on your question, I'd recommend...",
      "Good point! Here's how you can approach this problem...",
      "I see what you mean. The best way to handle this is..."
    ]

    const aiMessage = {
      id: Date.now() + 1,
      text: responses[Math.floor(Math.random() * responses.length)],
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    messages.value.push(aiMessage)

    await nextTick()
    scrollToBottom()
  }, 1500)
}

const sendQuickMessage = (message) => {
  newMessage.value = message
  sendMessage()
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
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
  0%, 60%, 100% {
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
</style>`
