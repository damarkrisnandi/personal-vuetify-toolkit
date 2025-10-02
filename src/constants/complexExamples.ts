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
    text: "I'm doing great! Just working on a new project.",
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
    text: "It's a Vue.js application with Vuetify components. Really enjoying the development process!",
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
        "That's awesome!",
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
  v => /.+@.+[.].+/.test(v) || 'Email must be valid'
]

const phoneRules = [
  v => !!v || 'Phone number is required',
  v => /^[+]?[1-9][0-9-s()]+$/.test(v) || 'Phone number must be valid'
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
  v => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(v) || 'Password must contain uppercase, lowercase, and number'
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

export const COMMENT_THREAD_CODE = `<template>
  <div class="comment-system">
    <!-- Comment Input -->
    <v-card elevation="1" class="mb-6">
      <v-card-title class="text-h6">
        Discussion ({{ totalComments }})
      </v-card-title>

      <v-card-text>
        <div class="d-flex comment-input-container">
          <v-avatar color="primary" size="40" class="me-3">
            <span class="text-white">{{ getInitials(currentUser.name) }}</span>
          </v-avatar>

          <div class="flex-grow-1">
            <v-textarea
              v-model="newComment"
              :rules="commentRules"
              :counter="1000"
              rows="3"
              auto-grow
              variant="outlined"
              hide-details="auto"
              density="comfortable"
              placeholder="Share your thoughts..."
              class="mb-2"
            ></v-textarea>

            <div class="d-flex align-center">
              <v-btn-group variant="outlined" density="comfortable" class="me-auto">
                <v-btn prepend-icon="mdi-format-bold" @click="formatText('bold')"></v-btn>
                <v-btn prepend-icon="mdi-format-italic" @click="formatText('italic')"></v-btn>
                <v-btn prepend-icon="mdi-link" @click="addLink"></v-btn>
              </v-btn-group>

              <v-btn
                variant="text"
                @click="clearComment"
                :disabled="!newComment"
                class="me-2"
              >
                Cancel
              </v-btn>

              <v-btn
                color="primary"
                :disabled="!newComment.trim()"
                @click="submitComment(null)"
              >
                Comment
              </v-btn>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Comment List -->
    <div v-if="comments.length" class="comments-list">
      <!-- Comment Sorting -->
      <div class="comment-sorting mb-4 d-flex align-center">
        <span class="me-3 text-subtitle-1">Sort by:</span>
        <v-chip-group v-model="sortOption" mandatory>
          <v-chip value="newest">Newest</v-chip>
          <v-chip value="oldest">Oldest</v-chip>
          <v-chip value="popular">Most Popular</v-chip>
        </v-chip-group>
      </div>

      <!-- List of Comments -->
      <v-expand-transition group>
        <comment-item
          v-for="comment in sortedComments"
          :key="comment.id"
          :comment="comment"
          :current-user="currentUser"
          class="mb-6"
          @reply="startReply"
          @edit="startEdit"
          @delete="deleteComment"
          @like="toggleLike"
        ></comment-item>
      </v-expand-transition>

      <!-- Load More -->
      <div v-if="hasMoreComments" class="text-center mt-4">
        <v-btn
          variant="outlined"
          @click="loadMoreComments"
          :loading="isLoadingMore"
        >
          Load More Comments
        </v-btn>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-comments text-center py-8">
      <v-icon icon="mdi-comment-outline" size="64" color="grey-lighten-1" class="mb-4"></v-icon>
      <div class="text-h6 text-grey">No comments yet</div>
      <div class="text-body-2 text-grey">Be the first to share your thoughts!</div>
    </div>

    <!-- Reply Dialog -->
    <v-dialog v-model="replyDialog" max-width="600">
      <v-card>
        <v-card-title class="text-h6">
          {{ editingComment ? 'Edit Comment' : \`Reply to \${replyingTo?.author.name}\` }}
        </v-card-title>

        <v-card-text>
          <v-textarea
            v-model="replyContent"
            :rules="commentRules"
            auto-grow
            rows="3"
            variant="outlined"
            density="comfortable"
            :placeholder="editingComment ? 'Edit your comment...' : 'Write your reply...'"
            :counter="1000"
            class="mb-2"
          ></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="cancelReply">Cancel</v-btn>
          <v-btn
            color="primary"
            :disabled="!replyContent.trim()"
            @click="submitReply"
          >
            {{ editingComment ? 'Save Changes' : 'Reply' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import CommentItem from './CommentItem.vue'

const props = defineProps({
  initialComments: {
    type: Array,
    default: () => []
  },
  currentUser: {
    type: Object,
    required: true
  }
})

// State variables
const comments = ref([...props.initialComments])
const newComment = ref('')
const replyDialog = ref(false)
const replyContent = ref('')
const replyingTo = ref(null)
const editingComment = ref(null)
const sortOption = ref('newest')
const isLoadingMore = ref(false)
const hasMoreComments = ref(true)
const commentsPerPage = 10
const currentPage = ref(1)

// Validation rules
const commentRules = [
  v => (v && v.length <= 1000) || 'Comment must be less than 1000 characters'
]

// Computed properties
const sortedComments = computed(() => {
  let sorted = [...comments.value]

  switch (sortOption.value) {
    case 'newest':
      sorted.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      break
    case 'oldest':
      sorted.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
      break
    case 'popular':
      sorted.sort((a, b) => b.likes.length - a.likes.length)
      break
  }

  return sorted
})

const totalComments = computed(() => {
  // Count all comments including replies
  let count = comments.value.length
  comments.value.forEach(comment => {
    count += comment.replies?.length || 0
  })
  return count
})

// Methods
function getInitials(name) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

function formatText(format) {
  // Implement text formatting (bold, italic, etc.)
  switch (format) {
    case 'bold':
      newComment.value += '**bold text**'
      break
    case 'italic':
      newComment.value += '_italic text_'
      break
  }
}

function addLink() {
  newComment.value += '[link text](https://example.com)'
}

function clearComment() {
  newComment.value = ''
}

function submitComment(parentId) {
  const comment = {
    id: \`comment-\${Date.now()}\`,
    author: {
      id: currentUser.id,
      name: currentUser.name,
      avatar: currentUser.avatar
    },
    content: newComment.value,
    timestamp: new Date().toISOString(),
    likes: [],
    replies: [],
    edited: false
  }

  comments.value.unshift(comment)
  newComment.value = ''
}

function startReply(comment) {
  replyingTo.value = comment
  editingComment.value = null
  replyContent.value = ''
  replyDialog.value = true
}

function startEdit(comment) {
  editingComment.value = comment
  replyingTo.value = null
  replyContent.value = comment.content
  replyDialog.value = true
}

function cancelReply() {
  replyDialog.value = false
  replyContent.value = ''
  replyingTo.value = null
  editingComment.value = null
}

function submitReply() {
  if (editingComment.value) {
    // Handle edit
    editingComment.value.content = replyContent.value
    editingComment.value.edited = true
  } else if (replyingTo.value) {
    // Handle reply
    const reply = {
      id: \`reply-\${Date.now()}\`,
      author: {
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.avatar
      },
      content: replyContent.value,
      timestamp: new Date().toISOString(),
      likes: [],
      edited: false,
      parentId: replyingTo.value.id
    }

    const parent = comments.value.find(c => c.id === replyingTo.value.id)
    if (parent) {
      if (!parent.replies) parent.replies = []
      parent.replies.push(reply)
    }
  }

  cancelReply()
}

function deleteComment(comment) {
  if (comment.parentId) {
    // It's a reply, find the parent comment
    const parent = comments.value.find(c => c.id === comment.parentId)
    if (parent && parent.replies) {
      parent.replies = parent.replies.filter(r => r.id !== comment.id)
    }
  } else {
    // It's a top-level comment
    comments.value = comments.value.filter(c => c.id !== comment.id)
  }
}

function toggleLike(comment) {
  const userId = currentUser.id
  const index = comment.likes.findIndex(id => id === userId)

  if (index === -1) {
    comment.likes.push(userId)
  } else {
    comment.likes.splice(index, 1)
  }
}

function loadMoreComments() {
  isLoadingMore.value = true

  // Simulate loading delay
  setTimeout(() => {
    // In a real app, you would fetch more comments from the server
    // For this example, we'll just set hasMoreComments to false
    hasMoreComments.value = false
    isLoadingMore.value = false
    currentPage.value++
  }, 1000)
}

// Watch for changes in sort option to save user preference
watch(sortOption, (newValue) => {
  // In a real app, you could save this preference to localStorage or user settings
  console.log(\`Sort option changed to: \${newValue}\`)
})
</script>

<style scoped>
.comment-system {
  max-width: 900px;
  margin: 0 auto;
}

.comment-input-container {
  align-items: flex-start;
}

.comments-list {
  position: relative;
}

.comment-item-enter-active,
.comment-item-leave-active {
  transition: all 0.3s ease;
}

.comment-item-enter-from,
.comment-item-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>`

export const COMMENT_ITEM_CODE = `<template>
  <v-card variant="outlined" class="comment-item" :class="{ 'comment-reply': isReply }">
    <v-card-text class="pa-4">
      <!-- Comment Header -->
      <div class="d-flex comment-header">
        <v-avatar size="40" class="me-3">
          <v-img v-if="comment.author.avatar" :src="comment.author.avatar" alt="Avatar"></v-img>
          <span v-else class="text-white">{{ getInitials(comment.author.name) }}</span>
        </v-avatar>

        <div class="flex-grow-1 d-flex flex-column justify-center">
          <div class="d-flex align-center">
            <span class="font-weight-medium me-2">{{ comment.author.name }}</span>
            <v-chip v-if="isAuthor" size="x-small" color="primary" class="me-2">Author</v-chip>
            <span class="text-caption text-grey">{{ formatTimestamp(comment.timestamp) }}</span>
            <span v-if="comment.edited" class="text-caption text-grey ms-2">(edited)</span>
          </div>
        </div>

        <v-menu v-if="canModify">
          <template v-slot:activator="{ props }">
            <v-btn
              icon="mdi-dots-vertical"
              variant="text"
              density="comfortable"
              v-bind="props"
            ></v-btn>
          </template>

          <v-list density="compact">
            <v-list-item @click="$emit('edit', comment)">
              <template v-slot:prepend>
                <v-icon icon="mdi-pencil" size="small"></v-icon>
              </template>
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item>

            <v-list-item @click="confirmDelete">
              <template v-slot:prepend>
                <v-icon icon="mdi-delete" size="small"></v-icon>
              </template>
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Comment Content -->
      <div class="comment-content my-3" v-html="formattedContent"></div>

      <!-- Comment Actions -->
      <div class="d-flex comment-actions align-center mt-2">
        <v-btn
          :color="isLiked ? 'primary' : undefined"
          prepend-icon="mdi-thumb-up"
          variant="text"
          size="small"
          @click="$emit('like', comment)"
          :disabled="isAuthor"
        >
          {{ comment.likes.length > 0 ? comment.likes.length : '' }}
          {{ isLiked ? 'Liked' : 'Like' }}
        </v-btn>

        <v-btn
          v-if="!isReply"
          prepend-icon="mdi-reply"
          variant="text"
          size="small"
          @click="$emit('reply', comment)"
        >
          Reply
        </v-btn>

        <v-btn
          v-if="isAuthor && comment.edited"
          prepend-icon="mdi-history"
          variant="text"
          size="small"
        >
          History
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          v-if="!isReply && hasReplies"
          :icon="showReplies ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          variant="text"
          size="small"
          @click="showReplies = !showReplies"
        >
          {{ showReplies ? 'Hide' : 'Show' }} {{ comment.replies.length }} {{ comment.replies.length === 1 ? 'reply' : 'replies' }}
        </v-btn>
      </div>
    </v-card-text>

    <!-- Nested Replies -->
    <v-expand-transition>
      <div v-if="showReplies && hasReplies" class="replies-container ms-6">
        <div v-for="reply in comment.replies" :key="reply.id" class="reply-item">
          <!-- Recursively render nested comments -->
          <comment-item
            :comment="{ ...reply, parentId: comment.id }"
            :current-user="currentUser"
            class="mb-2"
            @reply="$emit('reply', reply)"
            @edit="$emit('edit', reply)"
            @delete="$emit('delete', reply)"
            @like="$emit('like', reply)"
          ></comment-item>
        </div>
      </div>
    </v-expand-transition>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6">Delete {{ isReply ? 'Reply' : 'Comment' }}</v-card-title>

        <v-card-text>
          Are you sure you want to delete this {{ isReply ? 'reply' : 'comment' }}? This action cannot be undone.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" @click="handleDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { computed, ref, getCurrentInstance } from 'vue'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

const props = defineProps({
  comment: {
    type: Object,
    required: true
  },
  currentUser: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['reply', 'edit', 'delete', 'like'])

const deleteDialog = ref(false)
const showReplies = ref(true)

// Computed properties
const isReply = computed(() => !!props.comment.parentId)
const isAuthor = computed(() => props.comment.author.id === props.currentUser.id)
const canModify = computed(() => isAuthor.value)
const hasReplies = computed(() => props.comment.replies && props.comment.replies.length > 0)
const isLiked = computed(() => props.comment.likes.includes(props.currentUser.id))

// Format timestamp
function formatTimestamp(timestamp) {
  const date = new Date(timestamp)
  const now = new Date()
  const diffMs = now - date
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHour = Math.floor(diffMin / 60)
  const diffDay = Math.floor(diffHour / 24)

  if (diffSec < 60) {
    return 'just now'
  } else if (diffMin < 60) {
    return \`\${diffMin} \${diffMin === 1 ? 'minute' : 'minutes'} ago\`
  } else if (diffHour < 24) {
    return \`\${diffHour} \${diffHour === 1 ? 'hour' : 'hours'} ago\`
  } else if (diffDay < 7) {
    return \`\${diffDay} \${diffDay === 1 ? 'day' : 'days'} ago\`
  } else {
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
}

// Format comment content with markdown
const formattedContent = computed(() => {
  // Convert markdown to HTML and sanitize
  const html = marked.parse(props.comment.content)
  return DOMPurify.sanitize(html)
})

// Get user initials for avatar fallback
function getInitials(name) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

// Handle comment deletion
function confirmDelete() {
  deleteDialog.value = true
}

function handleDelete() {
  deleteDialog.value = false
  emit('delete', props.comment)
}
</script>

<style scoped>
.comment-item {
  transition: background-color 0.2s ease;
}

.comment-reply {
  border-left: 3px solid var(--v-primary-base, #1976d2);
}

.comment-content {
  white-space: pre-wrap;
  word-break: break-word;
}

.comment-content :deep(p) {
  margin-bottom: 0.75rem;
}

.comment-content :deep(p:last-child) {
  margin-bottom: 0;
}

.comment-content :deep(a) {
  color: #1976d2;
  text-decoration: none;
}

.comment-content :deep(a:hover) {
  text-decoration: underline;
}

.comment-content :deep(code) {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

.comment-content :deep(blockquote) {
  border-left: 4px solid #e0e0e0;
  margin-left: 0;
  padding-left: 1em;
  color: #757575;
}

.replies-container {
  padding: 0 16px 16px 16px;
}
</style>`

export const MULTI_STEP_FORM_CODE = `<template>
  <v-card class="multi-step-form" elevation="3">
    <v-card-title class="d-flex align-center pa-4">
      <v-icon icon="mdi-form-select" class="me-2"></v-icon>
      {{ formTitle }}
      <v-spacer></v-spacer>
      <v-btn icon="mdi-close" variant="text" @click="handleCancel"></v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <!-- Progress Stepper -->
    <v-stepper :items="steps" v-model="currentStep" alt-labels>
      <template v-slot:item="{ props, item }">
        <v-stepper-item
          v-bind="props"
          :value="item"
          :complete="completedSteps[item.value - 1]"
          :disabled="!isStepAvailable(item.value)"
          @click="handleStepClick(item.value)"
        >
          <template v-slot:default>
            <span class="text-body-2">{{ item.title }}</span>
          </template>
        </v-stepper-item>
      </template>
    </v-stepper>

    <!-- Form Content -->
    <v-window v-model="currentStep" class="pa-4">
      <!-- Step 1: Personal Information -->
      <v-window-item :value="1">
        <v-card-text>
          <v-form ref="personalForm" v-model="forms.personalValid" @submit.prevent>
            <p class="text-body-1 mb-4">Please enter your personal information.</p>

            <div class="d-flex gap-3">
              <v-text-field
                v-model="formData.firstName"
                label="First Name"
                variant="outlined"
                density="comfortable"
                :rules="[v => !!v || 'First name is required']"
                class="flex-grow-1"
              ></v-text-field>

              <v-text-field
                v-model="formData.lastName"
                label="Last Name"
                variant="outlined"
                density="comfortable"
                :rules="[v => !!v || 'Last name is required']"
                class="flex-grow-1"
              ></v-text-field>
            </div>

            <v-text-field
              v-model="formData.email"
              label="Email"
              type="email"
              variant="outlined"
              density="comfortable"
              :rules="emailRules"
              prepend-inner-icon="mdi-email"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="formData.phone"
              label="Phone Number"
              variant="outlined"
              density="comfortable"
              :rules="phoneRules"
              prepend-inner-icon="mdi-phone"
              class="mb-2"
            ></v-text-field>

            <v-select
              v-model="formData.gender"
              label="Gender"
              :items="['Male', 'Female', 'Non-binary', 'Prefer not to say']"
              variant="outlined"
              density="comfortable"
              class="mb-2"
            ></v-select>

            <v-text-field
              v-model="formData.dob"
              label="Date of Birth"
              type="date"
              variant="outlined"
              density="comfortable"
              :rules="[v => !!v || 'Date of birth is required']"
              class="mb-2"
            ></v-text-field>
          </v-form>
        </v-card-text>
      </v-window-item>

      <!-- Step 2: Address Information -->
      <v-window-item :value="2">
        <v-card-text>
          <v-form ref="addressForm" v-model="forms.addressValid" @submit.prevent>
            <p class="text-body-1 mb-4">Please enter your address information.</p>

            <v-text-field
              v-model="formData.street"
              label="Street Address"
              variant="outlined"
              density="comfortable"
              :rules="[v => !!v || 'Street address is required']"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="formData.apartment"
              label="Apartment / Suite / Unit (optional)"
              variant="outlined"
              density="comfortable"
              class="mb-2"
            ></v-text-field>

            <div class="d-flex gap-3">
              <v-text-field
                v-model="formData.city"
                label="City"
                variant="outlined"
                density="comfortable"
                :rules="[v => !!v || 'City is required']"
                class="flex-grow-1"
              ></v-text-field>

              <v-text-field
                v-model="formData.state"
                label="State / Province"
                variant="outlined"
                density="comfortable"
                :rules="[v => !!v || 'State is required']"
                class="flex-grow-1"
              ></v-text-field>
            </div>

            <div class="d-flex gap-3">
              <v-text-field
                v-model="formData.zipCode"
                label="ZIP / Postal Code"
                variant="outlined"
                density="comfortable"
                :rules="[v => !!v || 'ZIP code is required']"
                class="flex-grow-1"
              ></v-text-field>

              <v-autocomplete
                v-model="formData.country"
                label="Country"
                :items="countries"
                variant="outlined"
                density="comfortable"
                :rules="[v => !!v || 'Country is required']"
                class="flex-grow-1"
              ></v-autocomplete>
            </div>

            <v-checkbox
              v-model="formData.billingIsSame"
              label="Billing address is same as shipping address"
            ></v-checkbox>
          </v-form>
        </v-card-text>
      </v-window-item>

      <!-- Step 3: Payment Information -->
      <v-window-item :value="3">
        <v-card-text>
          <v-form ref="paymentForm" v-model="forms.paymentValid" @submit.prevent>
            <p class="text-body-1 mb-4">Please enter your payment information.</p>

            <div class="payment-card-container mb-3">
              <v-radio-group v-model="formData.paymentMethod" inline>
                <v-radio value="credit" label="Credit Card"></v-radio>
                <v-radio value="debit" label="Debit Card"></v-radio>
                <v-radio value="paypal" label="PayPal"></v-radio>
              </v-radio-group>

              <div class="payment-icons">
                <v-icon icon="mdi-credit-card" color="primary" class="me-2"></v-icon>
                <v-icon icon="mdi-credit-card-outline" class="me-2"></v-icon>
                <v-icon icon="mdi-paypal" color="info"></v-icon>
              </div>
            </div>

            <div v-if="formData.paymentMethod !== 'paypal'">
              <v-text-field
                v-model="formData.cardName"
                label="Name on Card"
                variant="outlined"
                density="comfortable"
                :rules="[v => !!v || 'Name on card is required']"
                class="mb-2"
              ></v-text-field>

              <v-text-field
                v-model="formData.cardNumber"
                label="Card Number"
                variant="outlined"
                density="comfortable"
                :rules="cardRules"
                maxlength="19"
                @input="formatCardNumber"
                prepend-inner-icon="mdi-credit-card"
                class="mb-2"
              ></v-text-field>

              <div class="d-flex gap-3">
                <v-text-field
                  v-model="formData.expiryDate"
                  label="Expiry Date (MM/YY)"
                  variant="outlined"
                  density="comfortable"
                  :rules="expiryRules"
                  maxlength="5"
                  @input="formatExpiryDate"
                  class="flex-grow-1"
                ></v-text-field>

                <v-text-field
                  v-model="formData.cvv"
                  label="CVV"
                  variant="outlined"
                  density="comfortable"
                  :rules="[v => !!v && /^\\d{3,4}$/.test(v) || 'Valid CVV required']"
                  maxlength="4"
                  type="password"
                  class="flex-grow-1"
                ></v-text-field>
              </div>
            </div>

            <div v-else>
              <v-alert type="info" variant="tonal" class="mb-3">
                You will be redirected to PayPal to complete your payment after form submission.
              </v-alert>
            </div>
          </v-form>
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
              <v-btn size="small" variant="text" icon="mdi-pencil" @click="currentStep = 1"></v-btn>
            </v-card-title>
            <v-card-text class="pa-3">
              <div class="review-item">
                <span class="text-caption text-grey">Full Name:</span>
                <span class="text-body-2">{{ formData.firstName }} {{ formData.lastName }}</span>
              </div>
              <div class="review-item">
                <span class="text-caption text-grey">Email:</span>
                <span class="text-body-2">{{ formData.email }}</span>
              </div>
              <div class="review-item">
                <span class="text-caption text-grey">Phone:</span>
                <span class="text-body-2">{{ formData.phone }}</span>
              </div>
              <div class="review-item">
                <span class="text-caption text-grey">Date of Birth:</span>
                <span class="text-body-2">{{ formatDate(formData.dob) }}</span>
              </div>
            </v-card-text>
          </v-card>

          <v-card variant="outlined" class="mb-4">
            <v-card-title class="bg-grey-lighten-4 pa-3 text-subtitle-1">
              <v-icon icon="mdi-map-marker" class="me-2"></v-icon>
              Address Information
              <v-spacer></v-spacer>
              <v-btn size="small" variant="text" icon="mdi-pencil" @click="currentStep = 2"></v-btn>
            </v-card-title>
            <v-card-text class="pa-3">
              <div class="review-item">
                <span class="text-caption text-grey">Street:</span>
                <span class="text-body-2">{{ formData.street }}</span>
              </div>
              <div v-if="formData.apartment" class="review-item">
                <span class="text-caption text-grey">Apartment/Suite:</span>
                <span class="text-body-2">{{ formData.apartment }}</span>
              </div>
              <div class="review-item">
                <span class="text-caption text-grey">City, State ZIP:</span>
                <span class="text-body-2">{{ formData.city }}, {{ formData.state }} {{ formData.zipCode }}</span>
              </div>
              <div class="review-item">
                <span class="text-caption text-grey">Country:</span>
                <span class="text-body-2">{{ formData.country }}</span>
              </div>
            </v-card-text>
          </v-card>

          <v-card variant="outlined">
            <v-card-title class="bg-grey-lighten-4 pa-3 text-subtitle-1">
              <v-icon icon="mdi-credit-card" class="me-2"></v-icon>
              Payment Method
              <v-spacer></v-spacer>
              <v-btn size="small" variant="text" icon="mdi-pencil" @click="currentStep = 3"></v-btn>
            </v-card-title>
            <v-card-text class="pa-3">
              <div class="review-item">
                <span class="text-caption text-grey">Payment Method:</span>
                <span class="text-body-2">
                  {{ formData.paymentMethod === 'credit' ? 'Credit Card' :
                     formData.paymentMethod === 'debit' ? 'Debit Card' : 'PayPal' }}
                </span>
              </div>
              <div v-if="formData.paymentMethod !== 'paypal'">
                <div class="review-item">
                  <span class="text-caption text-grey">Card Number:</span>
                  <span class="text-body-2">**** **** **** {{ formData.cardNumber.slice(-4) }}</span>
                </div>
                <div class="review-item">
                  <span class="text-caption text-grey">Card Holder:</span>
                  <span class="text-body-2">{{ formData.cardName }}</span>
                </div>
                <div class="review-item">
                  <span class="text-caption text-grey">Expiry Date:</span>
                  <span class="text-body-2">{{ formData.expiryDate }}</span>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-window-item>
    </v-window>

    <!-- Form Buttons -->
    <v-divider></v-divider>
    <v-card-actions class="pa-4">
      <v-btn variant="outlined" @click="prevStep" :disabled="currentStep === 1">
        <v-icon icon="mdi-arrow-left" start></v-icon>
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="currentStep < steps.length" color="primary" @click="nextStep">
        Next
        <v-icon icon="mdi-arrow-right" end></v-icon>
      </v-btn>
      <v-btn v-else color="success" @click="submitForm" :loading="isSubmitting">
        Submit
        <v-icon icon="mdi-check" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const formTitle = "Multi-Step Registration"
const currentStep = ref(1)
const isSubmitting = ref(false)
const personalForm = ref(null)
const addressForm = ref(null)
const paymentForm = ref(null)

const steps = [
  { title: 'Personal Info', value: 1 },
  { title: 'Address', value: 2 },
  { title: 'Payment', value: 3 },
  { title: 'Review', value: 4 }
]

const completedSteps = reactive([false, false, false, false])

const forms = reactive({
  personalValid: false,
  addressValid: false,
  paymentValid: false
})

const formData = reactive({
  // Step 1: Personal Information
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  gender: '',
  dob: '',

  // Step 2: Address
  street: '',
  apartment: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'United States',
  billingIsSame: true,

  // Step 3: Payment
  paymentMethod: 'credit',
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: ''
})

// Validation rules
const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\\..+/.test(v) || 'Email must be valid'
]

const phoneRules = [
  v => !!v || 'Phone number is required',
  v => /^[\\d\\s\\(\\)\\-\\+]+$/.test(v) || 'Phone number must be valid'
]

const cardRules = [
  v => !!v || 'Card number is required',
  v => /^\\d{4}(\\s\\d{4}){3}$|^\\d{16}$/.test(v.replace(/\\s/g, '')) || 'Card number must be valid'
]

const expiryRules = [
  v => !!v || 'Expiry date is required',
  v => /^(0[1-9]|1[0-2])\\/\\d{2}$/.test(v) || 'Format must be MM/YY'
]

// List of countries
const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
  'France', 'Japan', 'Brazil', 'India', 'China', 'South Korea'
]

// Form navigation functions
const nextStep = async () => {
  if (currentStep.value === 1) {
    const valid = await personalForm.value?.validate()
    if (!valid.valid) return
    completedSteps[0] = true
  } else if (currentStep.value === 2) {
    const valid = await addressForm.value?.validate()
    if (!valid.valid) return
    completedSteps[1] = true
  } else if (currentStep.value === 3) {
    const valid = await paymentForm.value?.validate()
    if (!valid.valid) return
    completedSteps[2] = true
  }

  if (currentStep.value < steps.length) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const isStepAvailable = (step) => {
  if (step === 1) return true
  if (step === 2) return completedSteps[0]
  if (step === 3) return completedSteps[0] && completedSteps[1]
  if (step === 4) return completedSteps[0] && completedSteps[1] && completedSteps[2]
  return false
}

const handleStepClick = (step) => {
  if (isStepAvailable(step)) {
    currentStep.value = step
  }
}

const handleCancel = () => {
  // Here you would typically confirm before canceling
  console.log('Form canceled')
}

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Simulating API submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    // Here you would typically show a success message or redirect
  } finally {
    isSubmitting.value = false
  }
}

// Format card number with spaces for better readability
const formatCardNumber = () => {
  let value = formData.cardNumber.replace(/\\s/g, '')
  let formattedValue = ''

  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += ' '
    }
    formattedValue += value[i]
  }

  formData.cardNumber = formattedValue
}

// Format expiry date to add slash between month and year
const formatExpiryDate = () => {
  let value = formData.expiryDate.replace(/\\D/g, '')

  if (value.length > 2) {
    formData.expiryDate = \`\${value.substring(0, 2)}/\${value.substring(2, 4)}\`
  } else {
    formData.expiryDate = value
  }
}

// Format date for display
const formatDate = (dateString) => {
  if (!dateString) return ''

  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>

<style scoped>
.multi-step-form {
  max-width: 800px;
  margin: 0 auto;
}

.payment-card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.review-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
}

@media (min-width: 600px) {
  .review-item {
    flex-direction: row;
  }

  .review-item .text-caption {
    width: 150px;
    padding-right: 16px;
  }
}
</style>`

export const KANBAN_BOARD_CODE = `<template>
  <v-card class="kanban-board" elevation="1">
    <v-card-title class="d-flex align-center pa-4">
      <v-icon icon="mdi-format-list-checks" class="me-2"></v-icon>
      Project Tasks
      <v-spacer></v-spacer>
      <v-btn icon="mdi-plus" variant="text" @click="openNewTaskDialog"></v-btn>
      <v-btn icon="mdi-filter-variant" variant="text"></v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="pa-4">
      <!-- Drag and drop container for task columns -->
      <div class="d-flex gap-4 kanban-container">
        <div
          v-for="(column, columnIndex) in columns"
          :key="column.id"
          class="kanban-column"
        >
          <!-- Column header -->
          <div class="column-header d-flex align-center pa-3" :class="\`bg-\${column.color}-lighten-4\`">
            <span class="text-subtitle-1 font-weight-medium">{{ column.title }}</span>
            <v-chip class="ms-2" size="x-small" :color="column.color">{{ column.tasks.length }}</v-chip>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" variant="text" size="small" v-bind="props"></v-btn>
              </template>
              <v-list density="compact">
                <v-list-item @click="addTaskToColumn(columnIndex)">
                  <template v-slot:prepend>
                    <v-icon icon="mdi-plus"></v-icon>
                  </template>
                  <v-list-item-title>Add task</v-list-item-title>
                </v-list-item>
                <v-list-item @click="clearColumn(columnIndex)">
                  <template v-slot:prepend>
                    <v-icon icon="mdi-delete-sweep"></v-icon>
                  </template>
                  <v-list-item-title>Clear column</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <!-- Task container -->
          <div
            class="task-container pa-2"
            :data-column-id="column.id"
            @dragover="onDragOver($event)"
            @dragenter.prevent
            @dragleave="onDragLeave($event)"
            @drop="onDrop($event, column)"
          >
            <!-- Tasks in the column -->
            <v-card
              v-for="task in column.tasks"
              :key="task.id"
              class="task-card ma-2"
              elevation="2"
              draggable="true"
              @dragstart="onDragStart($event, task, column)"
            >
              <v-card-text class="pa-3">
                <div class="d-flex justify-space-between align-center mb-2">
                  <v-chip :color="getPriorityColor(task.priority)" size="x-small">
                    {{ task.priority }}
                  </v-chip>
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn icon="mdi-dots-vertical" variant="text" density="compact" size="x-small" v-bind="props"></v-btn>
                    </template>
                    <v-list density="compact">
                      <v-list-item @click="editTask(task)">
                        <template v-slot:prepend>
                          <v-icon icon="mdi-pencil"></v-icon>
                        </template>
                        <v-list-item-title>Edit</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="deleteTask(column, task)">
                        <template v-slot:prepend>
                          <v-icon icon="mdi-delete"></v-icon>
                        </template>
                        <v-list-item-title>Delete</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>

                <div class="text-subtitle-2 font-weight-medium mb-1">{{ task.title }}</div>
                <div class="text-caption text-grey mb-3">{{ task.description }}</div>

                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-avatar size="24" class="me-1" v-if="task.assignee">
                      <v-img :src="task.assignee.avatar"></v-img>
                    </v-avatar>
                    <span class="text-caption">{{ task.assignee ? task.assignee.name : 'Unassigned' }}</span>
                  </div>

                  <div class="text-caption d-flex align-center" v-if="task.dueDate">
                    <v-icon icon="mdi-calendar" size="small" class="me-1"></v-icon>
                    {{ formatDate(task.dueDate) }}
                  </div>
                </div>
              </v-card-text>
            </v-card>

            <!-- Empty state -->
            <div v-if="column.tasks.length === 0" class="empty-column pa-4 d-flex align-center justify-center">
              <div class="text-center">
                <v-icon icon="mdi-tray" size="24" class="text-grey mb-2"></v-icon>
                <div class="text-caption text-grey">No tasks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>

    <!-- New Task Dialog -->
    <v-dialog v-model="newTaskDialog" max-width="500">
      <v-card>
        <v-card-title>{{ editingTask ? 'Edit Task' : 'New Task' }}</v-card-title>
        <v-card-text>
          <v-form ref="taskForm">
            <v-text-field
              v-model="taskForm.title"
              label="Task Title"
              variant="outlined"
              density="comfortable"
              class="mb-2"
              :rules="[v => !!v || 'Title is required']"
            ></v-text-field>

            <v-textarea
              v-model="taskForm.description"
              label="Description"
              variant="outlined"
              density="comfortable"
              class="mb-2"
              rows="2"
            ></v-textarea>

            <v-select
              v-model="taskForm.priority"
              label="Priority"
              :items="['Low', 'Medium', 'High', 'Urgent']"
              variant="outlined"
              density="comfortable"
              class="mb-2"
            ></v-select>

            <v-select
              v-model="taskForm.columnId"
              label="Status"
              :items="columns.map(col => ({ title: col.title, value: col.id }))"
              variant="outlined"
              density="comfortable"
              item-title="title"
              item-value="value"
              class="mb-2"
            ></v-select>

            <v-select
              v-model="taskForm.assigneeId"
              label="Assignee"
              :items="team"
              variant="outlined"
              density="comfortable"
              item-title="name"
              item-value="id"
              class="mb-2"
            >
              <template v-slot:item="{ item, props }">
                <v-list-item v-bind="props">
                  <template v-slot:prepend>
                    <v-avatar size="24">
                      <v-img :src="item.raw.avatar"></v-img>
                    </v-avatar>
                  </template>
                  <v-list-item-title>{{ item.raw.name }}</v-list-item-title>
                </v-list-item>
              </template>
            </v-select>

            <v-text-field
              v-model="taskForm.dueDate"
              label="Due Date"
              type="date"
              variant="outlined"
              density="comfortable"
              class="mb-2"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="newTaskDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="saveTask">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Task dialog
const newTaskDialog = ref(false)
const taskForm = reactive({
  id: null,
  title: '',
  description: '',
  priority: 'Medium',
  columnId: '',
  assigneeId: null,
  dueDate: null
})
const editingTask = ref(false)
const editingColumn = ref(null)

// Columns data
const columns = reactive([
  {
    id: 'todo',
    title: 'To Do',
    color: 'grey',
    tasks: [
      {
        id: 't1',
        title: 'Research competitors',
        description: 'Analyze main competitors and their features',
        priority: 'Medium',
        assignee: { id: 1, name: 'Alex Smith', avatar: 'https://i.pravatar.cc/150?img=1' },
        dueDate: '2025-10-10'
      },
      {
        id: 't2',
        title: 'Create wireframes',
        description: 'Design initial wireframes for dashboard',
        priority: 'High',
        assignee: { id: 2, name: 'Emma Johnson', avatar: 'https://i.pravatar.cc/150?img=5' },
        dueDate: '2025-10-12'
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'blue',
    tasks: [
      {
        id: 't3',
        title: 'Implement authentication',
        description: 'Set up JWT authentication flow',
        priority: 'High',
        assignee: { id: 3, name: 'Michael Brown', avatar: 'https://i.pravatar.cc/150?img=8' },
        dueDate: '2025-10-08'
      }
    ]
  },
  {
    id: 'review',
    title: 'Review',
    color: 'amber',
    tasks: [
      {
        id: 't4',
        title: 'Landing page design',
        description: 'Review new landing page mockups',
        priority: 'Low',
        assignee: { id: 4, name: 'Sarah Wilson', avatar: 'https://i.pravatar.cc/150?img=9' },
        dueDate: '2025-10-05'
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    color: 'green',
    tasks: [
      {
        id: 't5',
        title: 'Setup project',
        description: 'Initialize Vue project with Vuetify',
        priority: 'Medium',
        assignee: { id: 1, name: 'Alex Smith', avatar: 'https://i.pravatar.cc/150?img=1' },
        dueDate: '2025-10-01'
      }
    ]
  }
])

// Team members
const team = [
  { id: 1, name: 'Alex Smith', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Emma Johnson', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, name: 'Michael Brown', avatar: 'https://i.pravatar.cc/150?img=8' },
  { id: 4, name: 'Sarah Wilson', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 5, name: 'David Lee', avatar: 'https://i.pravatar.cc/150?img=3' }
]

// Drag and drop functionality
const draggedTask = ref(null)
const draggedColumn = ref(null)

function onDragStart(event, task, column) {
  draggedTask.value = task
  draggedColumn.value = column
  event.dataTransfer.effectAllowed = 'move'

  // Add some data to the drag event
  event.dataTransfer.setData('text/plain', task.id)

  // Add styling to indicate dragging
  if (event.target.classList) {
    setTimeout(() => {
      event.target.classList.add('dragging')
    }, 0)
  }
}

function onDragOver(event) {
  event.preventDefault()
  // Add visual cue for drop target
  event.currentTarget.classList.add('drag-over')
}

function onDragLeave(event) {
  // Remove visual cue when drag leaves
  event.currentTarget.classList.remove('drag-over')
}

function onDrop(event, targetColumn) {
  event.preventDefault()

  // Remove drag-over class
  event.currentTarget.classList.remove('drag-over')

  // Remove dragging class from all elements
  const draggingElements = document.querySelectorAll('.dragging')
  draggingElements.forEach(el => el.classList.remove('dragging'))

  if (draggedTask.value && draggedColumn.value) {
    // Remove task from original column
    const taskIndex = draggedColumn.value.tasks.findIndex(t => t.id === draggedTask.value.id)
    if (taskIndex !== -1) {
      draggedColumn.value.tasks.splice(taskIndex, 1)

      // Add task to target column
      targetColumn.tasks.push(draggedTask.value)
    }
  }
  draggedTask.value = null
  draggedColumn.value = null
}

// Task CRUD operations
function openNewTaskDialog() {
  editingTask.value = false
  taskForm.id = null
  taskForm.title = ''
  taskForm.description = ''
  taskForm.priority = 'Medium'
  taskForm.columnId = columns[0].id
  taskForm.assigneeId = null
  taskForm.dueDate = null
  newTaskDialog.value = true
}

function addTaskToColumn(columnIndex) {
  editingTask.value = false
  taskForm.id = null
  taskForm.title = ''
  taskForm.description = ''
  taskForm.priority = 'Medium'
  taskForm.columnId = columns[columnIndex].id
  taskForm.assigneeId = null
  taskForm.dueDate = null
  editingColumn.value = columns[columnIndex]
  newTaskDialog.value = true
}

function editTask(task) {
  editingTask.value = true
  taskForm.id = task.id
  taskForm.title = task.title
  taskForm.description = task.description
  taskForm.priority = task.priority
  taskForm.columnId = columns.find(col => col.tasks.includes(task)).id
  taskForm.assigneeId = task.assignee?.id
  taskForm.dueDate = task.dueDate
  newTaskDialog.value = true
}

function saveTask() {
  if (!taskForm.title) return

  const assignee = team.find(t => t.id === taskForm.assigneeId)
  const newTask = {
    id: editingTask.value ? taskForm.id : \`t\${Date.now()}\`,
    title: taskForm.title,
    description: taskForm.description,
    priority: taskForm.priority,
    assignee: assignee,
    dueDate: taskForm.dueDate
  }

  if (editingTask.value) {
    // Update existing task
    columns.forEach(column => {
      const existingTaskIndex = column.tasks.findIndex(t => t.id === newTask.id)
      if (existingTaskIndex !== -1) {
        column.tasks.splice(existingTaskIndex, 1)
      }
    })
  }

  // Add task to selected column
  const targetColumn = columns.find(col => col.id === taskForm.columnId)
  if (targetColumn) {
    targetColumn.tasks.push(newTask)
  }

  newTaskDialog.value = false
}

function deleteTask(column, task) {
  const index = column.tasks.findIndex(t => t.id === task.id)
  if (index !== -1) {
    column.tasks.splice(index, 1)
  }
}

function clearColumn(columnIndex) {
  columns[columnIndex].tasks = []
}

// Utility functions
function getPriorityColor(priority) {
  const colors = {
    'Low': 'info',
    'Medium': 'success',
    'High': 'warning',
    'Urgent': 'error'
  }
  return colors[priority] || 'grey'
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
</script>

<style scoped>
.kanban-board {
  min-height: 600px;
}

.kanban-container {
  overflow-x: auto;
  min-height: 480px;
}

.kanban-column {
  min-width: 280px;
  width: 280px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.column-header {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.task-container {
  flex-grow: 1;
  min-height: 100px;
  overflow-y: auto;
  max-height: 500px;
}

.task-card {
  cursor: grab;
  transition: transform 0.2s, box-shadow 0.2s;
  user-select: none; /* Prevent text selection */
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1) !important;
}

.task-card:active {
  cursor: grabbing;
}

.empty-column {
  height: 100px;
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
}

/* Drag and drop styles */
.dragging {
  opacity: 0.7;
  border: 2px dashed #2196F3 !important;
}

.drag-over {
  background-color: rgba(33, 150, 243, 0.1) !important;
  border: 2px dashed #2196F3 !important;
  border-radius: 8px;
}

/* Prevent text selection across the entire kanban board */
.kanban-container, .kanban-column, .column-header, .task-container {
  user-select: none;
}
</style>`

export const FILE_UPLOAD_CODE = `<template>
  <div class="file-uploader-container">
    <!-- Drop zone -->
    <div
      class="dropzone"
      :class="{
        'dropzone-active': isDragActive,
        'dropzone-error': hasError,
        'dropzone-disabled': disabled
      }"
      @dragenter.prevent="onDragEnter"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
      @click="triggerFileInput"
    >
      <!-- Hidden file input -->
      <input
        type="file"
        ref="fileInputRef"
        :multiple="multiple"
        :accept="accept"
        class="file-input"
        @change="onFileInputChange"
        :disabled="disabled"
      />

      <div class="dropzone-content">
        <slot name="icon">
          <v-icon
            :icon="hasError ? 'mdi-alert-circle' : (isDragActive ? 'mdi-file-upload-outline' : 'mdi-cloud-upload')"
            :color="hasError ? 'error' : 'primary'"
            size="64"
          ></v-icon>
        </slot>

        <div class="text-body-1 mt-4">
          <slot name="title">
            <span v-if="hasError">{{ errorMessage || 'Error uploading files' }}</span>
            <span v-else-if="isDragActive">Drop {{ multiple ? 'files' : 'file' }} here</span>
            <span v-else>
              <span class="text-primary">Click to upload</span> or drag and drop
              {{ multiple ? 'files' : 'a file' }} here
            </span>
          </slot>
        </div>

        <div class="text-body-2 text-grey mt-2">
          <slot name="subtitle">
            <div v-if="!hasError">
              {{ acceptDescription || (multiple ? 'Upload multiple files' : 'Upload a file') }}
              {{ maxFileSizeMB ? \`(Max size: \${maxFileSizeMB}MB each)\` : '' }}
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- Preview area for uploaded files -->
    <div v-if="files.length > 0" class="preview-area">
      <transition-group name="file-list" tag="div" class="file-list">
        <div
          v-for="(file, index) in files"
          :key="file.id"
          class="file-item"
          :class="{'has-preview': file.previewUrl}"
        >
          <!-- File preview -->
          <div class="file-preview">
            <div v-if="file.previewUrl" class="preview-image-container">
              <img
                :src="file.previewUrl"
                class="preview-image"
                alt="File preview"
                @error="onPreviewError(file)"
              />
            </div>
            <v-icon
              v-else
              :icon="getFileIcon(file)"
              :color="getFileColor(file)"
              size="36"
            ></v-icon>
          </div>

          <!-- File details -->
          <div class="file-details">
            <div class="file-name text-truncate">{{ file.file.name }}</div>
            <div class="file-meta text-caption">
              {{ formatFileSize(file.file.size) }}
              <span v-if="file.uploadProgress !== null">
                • {{ file.uploadProgress === 100 ? 'Uploaded' : \`\${file.uploadProgress}%\` }}
              </span>
            </div>

            <!-- Progress bar -->
            <v-progress-linear
              v-if="file.uploadProgress !== null && file.uploadProgress < 100"
              :model-value="file.uploadProgress"
              color="primary"
              height="4"
              class="mt-1"
            ></v-progress-linear>

            <!-- Status -->
            <div
              v-if="file.error"
              class="file-error text-caption text-error mt-1"
            >
              {{ file.error }}
            </div>
          </div>

          <!-- Actions -->
          <div class="file-actions">
            <v-btn
              v-if="!isUploading || file.uploadProgress === 100 || file.error"
              icon="mdi-close"
              size="small"
              variant="text"
              color="default"
              @click="removeFile(index)"
            ></v-btn>
            <v-progress-circular
              v-else-if="isUploading && file.uploadProgress !== null && file.uploadProgress < 100"
              :model-value="file.uploadProgress"
              size="24"
              width="2"
              color="primary"
            ></v-progress-circular>
          </div>
        </div>
      </transition-group>

      <!-- Action buttons -->
      <div class="file-actions-container mt-4">
        <v-btn
          v-if="files.length > 0 && !autoUpload && !isUploading"
          color="primary"
          variant="elevated"
          :disabled="hasAnyError || disabled || files.length === 0"
          @click="uploadFiles"
          :loading="isUploading"
        >
          Upload {{ files.length }} {{ files.length === 1 ? 'file' : 'files' }}
        </v-btn>

        <v-btn
          v-if="files.length > 0"
          variant="text"
          :disabled="isUploading"
          @click="clearFiles"
          class="ml-2"
        >
          Clear all
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

interface UploadedFile {
  id: string;
  file: File;
  previewUrl: string | null;
  uploadProgress: number | null;
  uploaded: boolean;
  error: string | null;
}

// Props
const props = defineProps({
  // File selection options
  multiple: {
    type: Boolean,
    default: true
  },
  accept: {
    type: String,
    default: '*/*'
  },
  acceptDescription: {
    type: String,
    default: ''
  },
  maxFiles: {
    type: Number,
    default: 10
  },
  maxFileSizeMB: {
    type: Number,
    default: 5
  },

  // Validation options
  validateFiles: {
    type: Function,
    default: null
  },

  // Upload options
  uploadUrl: {
    type: String,
    default: ''
  },
  autoUpload: {
    type: Boolean,
    default: false
  },
  uploadHeaders: {
    type: Object,
    default: () => ({})
  },
  uploadMethod: {
    type: String,
    default: 'POST'
  },
  uploadFieldName: {
    type: String,
    default: 'files'
  },
  uploadWithCredentials: {
    type: Boolean,
    default: false
  },
  simulateUpload: {
    type: Boolean,
    default: false
  },

  // UI states
  disabled: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits([
  'files-selected',
  'files-removed',
  'upload-start',
  'upload-progress',
  'upload-success',
  'upload-error',
  'upload-complete',
  'error'
])

// Refs
const fileInputRef = ref<HTMLInputElement | null>(null)
const files = ref<UploadedFile[]>([])
const isDragActive = ref(false)
const isUploading = ref(false)
const hasError = ref(false)
const errorMessage = ref('')
const abortControllers = ref<Map<string, AbortController>>(new Map())

// Computed
const hasAnyError = computed(() => {
  return files.value.some(file => file.error !== null)
})

// Methods
const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

const triggerFileInput = () => {
  if (!props.disabled) {
    fileInputRef.value?.click()
  }
}

const onDragEnter = (event: DragEvent) => {
  if (props.disabled) return
  isDragActive.value = true
  hasError.value = false
}

const onDragOver = (event: DragEvent) => {
  if (props.disabled) return
  isDragActive.value = true
  // Add dataTransfer effect to show the drop is possible
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'copy'
  }
}

const onDragLeave = (event: DragEvent) => {
  if (props.disabled) return

  // Only set to false if leaving the dropzone (not when entering a child element)
  // Check if the related target is not a child of the dropzone
  const target = event.target as HTMLElement
  const relatedTarget = event.relatedTarget as HTMLElement

  if (!target.contains(relatedTarget)) {
    isDragActive.value = false
  }
}

const onDrop = (event: DragEvent) => {
  if (props.disabled) return
  isDragActive.value = false

  if (event.dataTransfer?.files) {
    processFiles(event.dataTransfer.files)
  }
}

const onFileInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    processFiles(input.files)
    // Reset input value so that selecting the same file again triggers an event
    input.value = ''
  }
}

const processFiles = (fileList: FileList) => {
  hasError.value = false
  errorMessage.value = ''

  // Convert FileList to array
  const newFiles = Array.from(fileList)

  // Check max files
  if (!props.multiple && files.value.length + newFiles.length > 1) {
    hasError.value = true
    errorMessage.value = 'Only one file can be uploaded'
    return
  }

  if (props.multiple && props.maxFiles > 0 && files.value.length + newFiles.length > props.maxFiles) {
    hasError.value = true
    errorMessage.value = \`Maximum \${props.maxFiles} files allowed\`
    return
  }

  // Process each file
  const filesToAdd: UploadedFile[] = []

  for (const file of newFiles) {
    // Check file size
    if (props.maxFileSizeMB > 0 && file.size > props.maxFileSizeMB * 1024 * 1024) {
      const rejectedFile: UploadedFile = {
        id: generateId(),
        file,
        previewUrl: null,
        uploadProgress: null,
        uploaded: false,
        error: \`File exceeds maximum size of \${props.maxFileSizeMB}MB\`
      }
      filesToAdd.push(rejectedFile)
      continue
    }

    // Check if the file is already added (by name and size)
    const isDuplicate = files.value.some(
      f => f.file.name === file.name && f.file.size === file.size
    )

    if (isDuplicate) {
      continue
    }

    // Create new file record
    const newFile: UploadedFile = {
      id: generateId(),
      file,
      previewUrl: null,
      uploadProgress: null,
      uploaded: false,
      error: null
    }

    // Create preview URL for images
    if (file.type.startsWith('image/')) {
      newFile.previewUrl = URL.createObjectURL(file)
    }

    filesToAdd.push(newFile)
  }

  // Custom validation if provided
  if (props.validateFiles && filesToAdd.length > 0) {
    try {
      const filesToValidate = filesToAdd.map(f => f.file)
      const validationResult = props.validateFiles(filesToValidate)

      // If validation returns false or a string error message
      if (typeof validationResult === 'string') {
        hasError.value = true
        errorMessage.value = validationResult

        // Mark all files as error
        filesToAdd.forEach(file => {
          file.error = validationResult
        })
      } else if (validationResult === false) {
        hasError.value = true
        errorMessage.value = 'Files validation failed'

        // Mark all files as error
        filesToAdd.forEach(file => {
          file.error = 'Invalid file'
        })
      }
    } catch (err) {
      hasError.value = true
      errorMessage.value = 'Error validating files'
      console.error('File validation error:', err)

      // Mark all files as error
      filesToAdd.forEach(file => {
        file.error = 'Validation error'
      })
    }
  }

  // Add valid files to the list
  if (filesToAdd.length > 0) {
    files.value.push(...filesToAdd)

    // Emit event
    emit('files-selected', filesToAdd.map(f => f.file))

    // If auto upload is enabled, start upload
    if (props.autoUpload && !hasError.value) {
      uploadFiles()
    }
  }
}

const removeFile = (index: number) => {
  const file = files.value[index]

  // Revoke object URL to prevent memory leaks
  if (file.previewUrl) {
    URL.revokeObjectURL(file.previewUrl)
  }

  // Abort upload if in progress
  if (isUploading.value && file.uploadProgress !== null && file.uploadProgress < 100) {
    abortControllers.value.get(file.id)?.abort()
    abortControllers.value.delete(file.id)
  }

  // Remove file from list
  const removedFile = files.value.splice(index, 1)[0]
  emit('files-removed', [removedFile.file])
}

const clearFiles = () => {
  // Abort all uploads
  if (isUploading.value) {
    abortControllers.value.forEach(controller => {
      controller.abort()
    })
    abortControllers.value.clear()
    isUploading.value = false
  }

  // Revoke object URLs
  files.value.forEach(file => {
    if (file.previewUrl) {
      URL.revokeObjectURL(file.previewUrl)
    }
  })

  // Clear files
  const removedFiles = files.value.map(f => f.file)
  files.value = []

  emit('files-removed', removedFiles)
}

const uploadFiles = async () => {
  if (isUploading.value || files.value.length === 0 || hasAnyError.value) return

  isUploading.value = true
  emit('upload-start', files.value.map(f => f.file))

  // Get files that need to be uploaded
  const filesToUpload = files.value.filter(
    file => !file.uploaded && !file.error
  )

  if (filesToUpload.length === 0) {
    isUploading.value = false
    return
  }

  // If no upload URL provided, simulate upload
  const simulateMode = props.simulateUpload || !props.uploadUrl

  if (simulateMode) {
    // Simulate upload with delays
    await Promise.all(
      filesToUpload.map(async (file) => {
        file.uploadProgress = 0

        // Create abort controller
        const controller = new AbortController()
        abortControllers.value.set(file.id, controller)

        try {
          // Simulate upload progress
          for (let i = 0; i <= 10; i++) {
            if (controller.signal.aborted) {
              file.uploadProgress = null
              file.error = 'Upload cancelled'
              throw new Error('Upload cancelled')
            }

            await new Promise(resolve => setTimeout(resolve, 300))
            file.uploadProgress = i * 10
            emit('upload-progress', {
              file: file.file,
              progress: file.uploadProgress
            })
          }

          file.uploaded = true
          emit('upload-success', {
            file: file.file,
            response: { success: true }
          })
        } catch (err) {
          if (!controller.signal.aborted) {
            file.error = 'Simulation error'
            emit('upload-error', {
              file: file.file,
              error: 'Simulation error'
            })
          }
        } finally {
          abortControllers.value.delete(file.id)
        }
      })
    )

    isUploading.value = false
    emit('upload-complete', files.value.map(f => f.file))
    return
  }

  // Real upload to server
  await Promise.all(
    filesToUpload.map(async (file) => {
      file.uploadProgress = 0

      // Create FormData
      const formData = new FormData()

      // Single or multiple file field name
      if (props.multiple) {
        formData.append(props.uploadFieldName, file.file)
      } else {
        formData.append(props.uploadFieldName, file.file)
      }

      // Create abort controller
      const controller = new AbortController()
      abortControllers.value.set(file.id, controller)

      try {
        const response = await fetch(props.uploadUrl, {
          method: props.uploadMethod,
          headers: props.uploadHeaders as HeadersInit,
          body: formData,
          credentials: props.uploadWithCredentials ? 'include' : 'same-origin',
          signal: controller.signal
        })

        if (!response.ok) {
          throw new Error(\`Server responded with \${response.status}: \${response.statusText}\`)
        }

        const result = await response.json()
        file.uploadProgress = 100
        file.uploaded = true

        emit('upload-success', {
          file: file.file,
          response: result
        })
      } catch (err) {
        if (controller.signal.aborted) {
          file.uploadProgress = null
          file.error = 'Upload cancelled'
        } else {
          file.uploadProgress = null
          file.error = err instanceof Error ? err.message : 'Upload failed'

          emit('upload-error', {
            file: file.file,
            error: file.error
          })
        }
      } finally {
        abortControllers.value.delete(file.id)
      }
    })
  )

  isUploading.value = false
  emit('upload-complete', files.value.map(f => f.file))
}

const onPreviewError = (file: UploadedFile) => {
  // Preview failed to load, remove preview URL
  if (file.previewUrl) {
    URL.revokeObjectURL(file.previewUrl)
    file.previewUrl = null
  }
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const getFileIcon = (file: UploadedFile): string => {
  const type = file.file.type

  if (type.startsWith('image/')) {
    return 'mdi-file-image'
  } else if (type.startsWith('video/')) {
    return 'mdi-file-video'
  } else if (type.startsWith('audio/')) {
    return 'mdi-file-music'
  } else if (type.includes('pdf')) {
    return 'mdi-file-pdf'
  } else if (type.includes('word') || type.includes('document')) {
    return 'mdi-file-word'
  } else if (type.includes('excel') || type.includes('spreadsheet')) {
    return 'mdi-file-excel'
  } else if (type.includes('powerpoint') || type.includes('presentation')) {
    return 'mdi-file-powerpoint'
  } else if (type.includes('zip') || type.includes('compressed') || type.includes('archive')) {
    return 'mdi-zip-box'
  } else if (type.includes('text/')) {
    return 'mdi-file-document'
  } else if (type.includes('code') || file.file.name.match(/\\.(html|css|js|ts|jsx|tsx|vue|php|py|java|rb|go)$/i)) {
    return 'mdi-file-code'
  }

  return 'mdi-file'
}

const getFileColor = (file: UploadedFile): string => {
  const type = file.file.type

  if (type.startsWith('image/')) {
    return 'blue'
  } else if (type.startsWith('video/')) {
    return 'purple'
  } else if (type.startsWith('audio/')) {
    return 'deep-purple'
  } else if (type.includes('pdf')) {
    return 'red'
  } else if (type.includes('word') || type.includes('document')) {
    return 'blue-darken-4'
  } else if (type.includes('excel') || type.includes('spreadsheet')) {
    return 'green-darken-2'
  } else if (type.includes('powerpoint') || type.includes('presentation')) {
    return 'orange-darken-2'
  } else if (type.includes('zip') || type.includes('compressed') || type.includes('archive')) {
    return 'amber-darken-2'
  } else if (type.includes('text/')) {
    return 'grey-darken-1'
  } else if (type.includes('code') || file.file.name.match(/\\.(html|css|js|ts|jsx|tsx|vue|php|py|java|rb|go)$/i)) {
    return 'cyan-darken-2'
  }

  return 'grey'
}

// Clean up on unmount
onBeforeUnmount(() => {
  // Cancel all uploads
  abortControllers.value.forEach(controller => {
    controller.abort()
  })

  // Clean up preview URLs
  files.value.forEach(file => {
    if (file.previewUrl) {
      URL.revokeObjectURL(file.previewUrl)
    }
  })
})
</script>

<style scoped>
.file-uploader-container {
  width: 100%;
}

.dropzone {
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

.dropzone-content {
  position: relative;
  z-index: 1;
}

.dropzone:hover {
  border-color: var(--v-theme-primary);
  background-color: rgba(var(--v-theme-primary), 0.04);
}

.dropzone-active {
  border-color: var(--v-theme-primary);
  background-color: rgba(var(--v-theme-primary), 0.08);
}

.dropzone-error {
  border-color: var(--v-theme-error);
  background-color: rgba(var(--v-theme-error), 0.04);
}

.dropzone-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  border-color: rgba(0, 0, 0, 0.12) !important;
  background-color: rgba(0, 0, 0, 0.04) !important;
}

.file-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.preview-area {
  margin-top: 24px;
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.file-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
}

.file-item:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.file-item.has-preview .file-preview {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.preview-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.file-preview {
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-details {
  flex: 1;
  min-width: 0; /* Needed for text-truncate to work */
}

.file-name {
  font-weight: 500;
  margin-bottom: 2px;
}

.file-meta {
  color: rgba(0, 0, 0, 0.6);
}

.file-error {
  color: var(--v-theme-error);
}

.file-actions {
  margin-left: 8px;
}

.file-actions-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

/* Animation for file list items */
.file-list-enter-active,
.file-list-leave-active {
  transition: all 0.3s ease;
}

.file-list-enter-from,
.file-list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>`
export const VIDEO_PLAYER_CODE = `<template>
  <v-card class="video-player-card" :elevation="4">
    <!-- Video Container -->
    <div class="video-container">
      <video
        ref="videoRef"
        class="video-element"
        @timeupdate="updateProgress"
        @ended="videoEnded"
        @click="togglePlay"
        :poster="poster"
      >
        <source :src="source" :type="videoType">
        Your browser does not support the video tag.
      </video>

      <!-- Overlay controls (shown on hover) -->
      <div class="video-overlay" :class="{ 'hide-overlay': hideControls && isPlaying }">
        <div class="video-top-controls">
          <v-btn
            v-if="fullscreenEnabled"
            icon="mdi-fullscreen"
            variant="text"
            color="white"
            size="small"
            @click="toggleFullscreen"
          ></v-btn>
        </div>

        <div class="video-center-controls" @click="togglePlay">
          <v-btn
            v-if="!isPlaying || (!hideControls || isHovering)"
            :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
            size="x-large"
            color="white"
            variant="text"
          ></v-btn>
        </div>

        <div class="video-bottom-controls">
          <!-- Progress bar -->
          <div class="progress-container">
            <input
              type="range"
              class="progress-slider"
              min="0"
              max="100"
              step="0.1"
              :value="progress"
              @input="seek"
            >
            <div class="progress-bar" :style="{ width: \`\${progress}%\` }"></div>
          </div>

          <!-- Controls -->
          <div class="controls-container">
            <v-btn
              :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
              size="small"
              color="white"
              variant="text"
              @click.stop="togglePlay"
            ></v-btn>

            <div class="time-display">
              {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
            </div>

            <div class="volume-control">
              <v-btn
                :icon="volume > 0 ? (volume > 0.5 ? 'mdi-volume-high' : 'mdi-volume-medium') : 'mdi-volume-off'"
                size="small"
                color="white"
                variant="text"
                @click.stop="toggleMute"
              ></v-btn>
              <input
                type="range"
                class="volume-slider"
                min="0"
                max="1"
                step="0.05"
                :value="volume"
                @input="adjustVolume"
              >
            </div>

            <v-btn
              :icon="playbackRate === 1 ? 'mdi-speedometer' : 'mdi-numeric-' + playbackRate + '-box'"
              size="small"
              color="white"
              variant="text"
              @click.stop="togglePlaybackRate"
            ></v-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Information (Optional) -->
    <v-card-text v-if="title || description">
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle-1 text-medium-emphasis">{{ description }}</div>
    </v-card-text>

    <!-- Playlist (Optional) -->
    <v-list v-if="playlist && playlist.length > 0" density="compact" bg-color="grey-darken-4">
      <v-list-item
        v-for="(item, index) in playlist"
        :key="index"
        :active="currentVideoIndex === index"
        @click="changeVideo(index)"
      >
        <template v-slot:prepend>
          <v-avatar size="36" class="me-2">
            <v-img :src="item.thumbnail" cover></v-img>
          </v-avatar>
        </template>
        <v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle class="text-grey">{{ item.duration }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

// Props
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  source: {
    type: String,
    default: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
  },
  videoType: {
    type: String,
    default: 'video/mp4'
  },
  poster: {
    type: String,
    default: ''
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  hideControls: {
    type: Boolean,
    default: true
  },
  playlist: {
    type: Array,
    default: () => []
  }
})

// Refs
const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)
const progress = ref(0)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(1)
const lastVolume = ref(1)
const playbackRate = ref(1)
const isHovering = ref(false)
const currentVideoIndex = ref(0)
const fullscreenEnabled = ref(
  document.fullscreenEnabled ||
  (document as any).webkitFullscreenEnabled ||
  (document as any).mozFullScreenEnabled ||
  (document as any).msFullscreenEnabled
)

// Computed
const currentVideo = computed(() => {
  if (props.playlist && props.playlist.length > 0) {
    return props.playlist[currentVideoIndex.value]
  }
  return { source: props.source, type: props.videoType, poster: props.poster }
})

// Methods
const togglePlay = () => {
  if (!videoRef.value) return

  if (videoRef.value.paused || videoRef.value.ended) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}

const updateProgress = () => {
  if (!videoRef.value) return

  currentTime.value = videoRef.value.currentTime
  duration.value = videoRef.value.duration
  progress.value = (videoRef.value.currentTime / videoRef.value.duration) * 100
}

const seek = (event: Event) => {
  if (!videoRef.value) return

  const target = event.target as HTMLInputElement
  const seekTime = (parseFloat(target.value) / 100) * videoRef.value.duration
  videoRef.value.currentTime = seekTime
}

const adjustVolume = (event: Event) => {
  if (!videoRef.value) return

  const target = event.target as HTMLInputElement
  const newVolume = parseFloat(target.value)
  videoRef.value.volume = newVolume
  volume.value = newVolume
  lastVolume.value = newVolume > 0 ? newVolume : lastVolume.value
}

const toggleMute = () => {
  if (!videoRef.value) return

  if (volume.value > 0) {
    lastVolume.value = volume.value
    volume.value = 0
  } else {
    volume.value = lastVolume.value
  }
  videoRef.value.volume = volume.value
}

const togglePlaybackRate = () => {
  const rates = [0.5, 1, 1.5, 2]
  const currentIndex = rates.indexOf(playbackRate.value)
  const nextIndex = (currentIndex + 1) % rates.length
  playbackRate.value = rates[nextIndex]

  if (videoRef.value) {
    videoRef.value.playbackRate = playbackRate.value
  }
}

const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds)) return '0:00'

  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = Math.floor(timeInSeconds % 60)
  return \`\${minutes}:\${seconds < 10 ? '0' : ''}\${seconds}\`
}

const videoEnded = () => {
  isPlaying.value = false

  // Auto-play next video if available
  if (props.playlist && props.playlist.length > 0 && currentVideoIndex.value < props.playlist.length - 1) {
    currentVideoIndex.value++
  }
}

const changeVideo = (index: number) => {
  currentVideoIndex.value = index

  // Reset video state
  if (videoRef.value) {
    videoRef.value.currentTime = 0
    progress.value = 0

    // Start playing the new video
    setTimeout(() => {
      if (videoRef.value && isPlaying.value) {
        videoRef.value.play()
      }
    }, 50)
  }
}

const toggleFullscreen = () => {
  if (!videoRef.value) return

  const videoContainer = videoRef.value.parentElement
  if (!videoContainer) return

  if (!document.fullscreenElement) {
    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen()
    } else if ((videoContainer as any).webkitRequestFullscreen) {
      (videoContainer as any).webkitRequestFullscreen()
    } else if ((videoContainer as any).msRequestFullscreen) {
      (videoContainer as any).msRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen()
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen()
    }
  }
}

// Event handlers for hover state
const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

// Keyboard shortcuts
const handleKeydown = (event: KeyboardEvent) => {
  if (!videoRef.value) return

  switch(event.code) {
    case 'Space':
      event.preventDefault()
      togglePlay()
      break
    case 'ArrowRight':
      videoRef.value.currentTime += 10
      break
    case 'ArrowLeft':
      videoRef.value.currentTime -= 10
      break
    case 'ArrowUp':
      volume.value = Math.min(1, volume.value + 0.1)
      videoRef.value.volume = volume.value
      break
    case 'ArrowDown':
      volume.value = Math.max(0, volume.value - 0.1)
      videoRef.value.volume = volume.value
      break
    case 'KeyM':
      toggleMute()
      break
  }
}

// Lifecycle hooks
onMounted(() => {
  if (videoRef.value) {
    duration.value = videoRef.value.duration || 0
    videoRef.value.volume = volume.value

    if (props.autoplay) {
      videoRef.value.play().then(() => {
        isPlaying.value = true
      }).catch(() => {
        console.warn('Autoplay was prevented by the browser')
      })
    }

    // Add event listeners
    const videoContainer = videoRef.value.parentElement
    if (videoContainer) {
      videoContainer.addEventListener('mouseenter', handleMouseEnter)
      videoContainer.addEventListener('mouseleave', handleMouseLeave)
    }

    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (videoRef.value) {
    const videoContainer = videoRef.value.parentElement
    if (videoContainer) {
      videoContainer.removeEventListener('mouseenter', handleMouseEnter)
      videoContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }

  window.removeEventListener('keydown', handleKeydown)
})

// Watch for playlist changes
watch(
  () => currentVideo.value,
  (newVideo) => {
    if (videoRef.value && newVideo) {
      videoRef.value.src = newVideo.source
      videoRef.value.poster = newVideo.poster || ''
    }
  }
)
</script>

<style scoped>
.video-player-card {
  max-width: 100%;
  overflow: hidden;
  background-color: #121212;
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #000;
  overflow: hidden;
}

.video-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0) 70%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 1;
  transition: opacity 0.3s;
}

.video-overlay.hide-overlay {
  opacity: 0;
}

.video-overlay:hover {
  opacity: 1;
}

.video-top-controls, .video-bottom-controls {
  display: flex;
  padding: 8px;
  width: 100%;
}

.video-top-controls {
  justify-content: flex-end;
}

.video-center-controls {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-bottom-controls {
  flex-direction: column;
  gap: 8px;
}

.progress-container {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  border-radius: 2px;
  overflow: hidden;
}

.progress-slider {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  outline: none;
  margin: 0;
  padding: 0;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
}

.progress-bar {
  position: absolute;
  height: 100%;
  background-color: #f44336;
  border-radius: 2px;
  transition: width 0.1s;
}

.controls-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.time-display {
  color: white;
  font-size: 12px;
  margin: 0 10px;
}

.volume-control {
  display: flex;
  align-items: center;
  width: 120px;
}

.volume-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  outline: none;
  border-radius: 2px;
  transition: all 0.2s;
  margin-left: 4px;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

.volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  border: none;
}
</style>`

export const AUDIO_PLAYER_CODE = `<template>
  <v-card class="audio-player-card" :class="{ 'player-mini': mini }" :elevation="4">
    <!-- Artwork and Track Info -->
    <div class="audio-player-content" :class="{ 'mini-layout': mini }">
      <div class="artwork-container" :class="{ 'mini-artwork': mini }">
        <v-img
          :src="currentTrack.artwork || 'https://via.placeholder.com/300x300?text=No+Image'"
          :aspect-ratio="1"
          cover
          class="artwork"
          :class="{ 'artwork-spinning': isPlaying && showDiscAnimation }"
        ></v-img>

        <div class="artwork-overlay" v-if="!mini" @click="togglePlay">
          <v-icon :icon="isPlaying ? 'mdi-pause-circle' : 'mdi-play-circle'" size="64" color="white"></v-icon>
        </div>
      </div>

      <div class="audio-info" :class="{ 'mini-info': mini }">
        <div class="track-info">
          <div class="text-h6 track-title">{{ currentTrack.title || 'Unknown Track' }}</div>
          <div class="text-subtitle-2 text-medium-emphasis">{{ currentTrack.artist || 'Unknown Artist' }}</div>
        </div>

        <div class="playback-controls" v-if="!mini">
          <div class="progress-container">
            <input
              type="range"
              class="progress-slider"
              min="0"
              max="100"
              step="0.1"
              :value="progress"
              @input="seek"
            >
            <div class="progress-bar" :style="{ width: \`\${progress}%\` }"></div>
          </div>

          <div class="time-display">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(duration) }}</span>
          </div>

          <div class="control-buttons">
            <v-btn
              icon="mdi-shuffle-variant"
              size="small"
              :color="shuffle ? 'primary' : ''"
              variant="text"
              @click="toggleShuffle"
            ></v-btn>

            <v-btn
              icon="mdi-skip-previous"
              size="small"
              @click="playPrevious"
              :disabled="!hasPrevious"
              variant="text"
            ></v-btn>

            <v-btn
              :icon="isPlaying ? 'mdi-pause-circle' : 'mdi-play-circle'"
              color="primary"
              size="large"
              @click="togglePlay"
              variant="text"
            ></v-btn>

            <v-btn
              icon="mdi-skip-next"
              size="small"
              @click="playNext"
              :disabled="!hasNext"
              variant="text"
            ></v-btn>

            <v-btn
              :icon="repeat ? (repeatOne ? 'mdi-repeat-once' : 'mdi-repeat') : 'mdi-repeat-off'"
              size="small"
              :color="repeat ? 'primary' : ''"
              variant="text"
              @click="toggleRepeat"
            ></v-btn>
          </div>
        </div>

        <!-- Mini player controls -->
        <div class="mini-controls" v-if="mini">
          <v-btn
            :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
            size="small"
            color="primary"
            variant="text"
            @click="togglePlay"
          ></v-btn>

          <v-btn
            icon="mdi-skip-next"
            size="small"
            @click="playNext"
            :disabled="!hasNext"
            variant="text"
          ></v-btn>
        </div>
      </div>

      <!-- Additional controls -->
      <div class="additional-controls" v-if="!mini">
        <div class="volume-control">
          <v-btn
            :icon="volume > 0 ? (volume > 0.5 ? 'mdi-volume-high' : 'mdi-volume-medium') : 'mdi-volume-off'"
            size="small"
            variant="text"
            @click="toggleMute"
          ></v-btn>
          <input
            type="range"
            class="volume-slider"
            min="0"
            max="1"
            step="0.05"
            :value="volume"
            @input="adjustVolume"
          >
        </div>

        <div class="right-controls">
          <v-btn
            :icon="mini ? 'mdi-arrow-expand' : 'mdi-arrow-collapse'"
            size="small"
            variant="text"
            @click="toggleMiniPlayer"
          ></v-btn>

          <v-btn
            icon="mdi-playlist-music"
            size="small"
            variant="text"
            @click="togglePlaylist"
          ></v-btn>
        </div>
      </div>

      <!-- Mini player progress bar -->
      <div class="mini-progress" v-if="mini">
        <div class="mini-progress-bar" :style="{ width: \`\${progress}%\` }"></div>
      </div>
    </div>

    <!-- Audio element -->
    <audio
      ref="audioRef"
      @timeupdate="updateProgress"
      @loadedmetadata="loadedMetadata"
      @ended="handleTrackEnd"
    >
      <source :src="currentTrack.source" :type="currentTrack.type || 'audio/mp3'">
      Your browser does not support the audio element.
    </audio>

    <!-- Playlist -->
    <v-expand-transition>
      <div class="playlist-container" v-if="showPlaylist && !mini">
        <v-divider></v-divider>
        <div class="playlist-header">
          <div class="text-subtitle-1 font-weight-bold">Playlist</div>
          <v-spacer></v-spacer>
          <v-btn
            icon="mdi-close"
            size="small"
            variant="text"
            @click="showPlaylist = false"
          ></v-btn>
        </div>

        <v-list density="compact" class="playlist-list">
          <v-list-item
            v-for="(track, index) in tracks"
            :key="index"
            :active="currentTrackIndex === index"
            @click="playTrack(index)"
            :ripple="true"
          >
            <template v-slot:prepend>
              <v-avatar size="32" class="me-2">
                <v-img :src="track.artwork || 'https://via.placeholder.com/32x32'" cover></v-img>
              </v-avatar>
              <v-icon v-if="currentTrackIndex === index && isPlaying" class="playing-icon">mdi-volume-high</v-icon>
            </template>
            <v-list-item-title>{{ track.title || 'Unknown Track' }}</v-list-item-title>
            <v-list-item-subtitle>{{ track.artist || 'Unknown Artist' }}</v-list-item-subtitle>
            <template v-slot:append>
              <span class="text-caption">{{ track.duration || '--:--' }}</span>
            </template>
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

// Define track interface
interface Track {
  title: string
  artist: string
  source: string
  type?: string
  artwork?: string
  duration?: string
}

// Props
const props = defineProps({
  tracks: {
    type: Array as () => Track[],
    default: () => ([
      {
        title: 'Sample Track 1',
        artist: 'Artist Name',
        source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        artwork: 'https://via.placeholder.com/300x300/2196F3/FFFFFF?text=Track+1'
      },
      {
        title: 'Sample Track 2',
        artist: 'Another Artist',
        source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        artwork: 'https://via.placeholder.com/300x300/E91E63/FFFFFF?text=Track+2'
      },
      {
        title: 'Sample Track 3',
        artist: 'Third Artist',
        source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        artwork: 'https://via.placeholder.com/300x300/4CAF50/FFFFFF?text=Track+3'
      }
    ])
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  startMini: {
    type: Boolean,
    default: false
  },
  showDiscAnimation: {
    type: Boolean,
    default: true
  }
})

// Refs
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const currentTrackIndex = ref(0)
const progress = ref(0)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(1)
const lastVolume = ref(1)
const shuffle = ref(false)
const repeat = ref(false)
const repeatOne = ref(false)
const showPlaylist = ref(false)
const mini = ref(props.startMini)

// Computed
const currentTrack = computed(() => {
  return props.tracks[currentTrackIndex.value] || {
    title: 'No Track Available',
    artist: 'Please add tracks to playlist',
    source: '',
    artwork: ''
  }
})

const hasNext = computed(() => {
  if (shuffle.value) return props.tracks.length > 1
  return currentTrackIndex.value < props.tracks.length - 1
})

const hasPrevious = computed(() => {
  if (shuffle.value) return props.tracks.length > 1
  return currentTrackIndex.value > 0
})

// Methods
const togglePlay = () => {
  if (!audioRef.value || !currentTrack.value.source) return

  if (audioRef.value.paused) {
    audioRef.value.play()
    isPlaying.value = true
  } else {
    audioRef.value.pause()
    isPlaying.value = false
  }
}

const updateProgress = () => {
  if (!audioRef.value) return

  currentTime.value = audioRef.value.currentTime
  progress.value = (audioRef.value.currentTime / audioRef.value.duration) * 100 || 0
}

const loadedMetadata = () => {
  if (!audioRef.value) return

  duration.value = audioRef.value.duration
}

const seek = (event: Event) => {
  if (!audioRef.value) return

  const target = event.target as HTMLInputElement
  const seekTime = (parseFloat(target.value) / 100) * audioRef.value.duration
  audioRef.value.currentTime = seekTime
  currentTime.value = seekTime
}

const adjustVolume = (event: Event) => {
  if (!audioRef.value) return

  const target = event.target as HTMLInputElement
  const newVolume = parseFloat(target.value)
  audioRef.value.volume = newVolume
  volume.value = newVolume
  lastVolume.value = newVolume > 0 ? newVolume : lastVolume.value
}

const toggleMute = () => {
  if (!audioRef.value) return

  if (volume.value > 0) {
    lastVolume.value = volume.value
    volume.value = 0
  } else {
    volume.value = lastVolume.value
  }
  audioRef.value.volume = volume.value
}

const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds)) return '0:00'

  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = Math.floor(timeInSeconds % 60)
  return \`\${minutes}:\${seconds < 10 ? '0' : ''}\${seconds}\`
}

const playTrack = (index: number) => {
  if (index < 0 || index >= props.tracks.length) return

  currentTrackIndex.value = index

  // Reset audio state
  if (audioRef.value) {
    audioRef.value.currentTime = 0
    progress.value = 0

    // Start playing the new track
    setTimeout(() => {
      if (audioRef.value) {
        audioRef.value.play()
          .then(() => {
            isPlaying.value = true
          })
          .catch((error) => {
            console.error('Error playing audio:', error)
            isPlaying.value = false
          })
      }
    }, 50)
  }
}

const playNext = () => {
  if (props.tracks.length === 0) return

  let nextIndex

  if (shuffle.value) {
    // Get random track but not the same as current
    let possibleIndices = Array.from({ length: props.tracks.length }, (_, i) => i)
      .filter(i => i !== currentTrackIndex.value)

    if (possibleIndices.length > 0) {
      const randomIndex = Math.floor(Math.random() * possibleIndices.length)
      nextIndex = possibleIndices[randomIndex]
    } else {
      nextIndex = currentTrackIndex.value
    }
  } else {
    nextIndex = (currentTrackIndex.value + 1) % props.tracks.length
  }

  playTrack(nextIndex)
}

const playPrevious = () => {
  if (props.tracks.length === 0) return

  // If current time > 3 seconds, restart the current track
  if (audioRef.value && audioRef.value.currentTime > 3) {
    audioRef.value.currentTime = 0
    return
  }

  let prevIndex

  if (shuffle.value) {
    // Get random track but not the same as current
    let possibleIndices = Array.from({ length: props.tracks.length }, (_, i) => i)
      .filter(i => i !== currentTrackIndex.value)

    if (possibleIndices.length > 0) {
      const randomIndex = Math.floor(Math.random() * possibleIndices.length)
      prevIndex = possibleIndices[randomIndex]
    } else {
      prevIndex = currentTrackIndex.value
    }
  } else {
    prevIndex = currentTrackIndex.value - 1
    if (prevIndex < 0) prevIndex = props.tracks.length - 1
  }

  playTrack(prevIndex)
}

const handleTrackEnd = () => {
  if (repeatOne.value) {
    // Replay the same track
    playTrack(currentTrackIndex.value)
  } else if (repeat.value) {
    // Continue to next track, looping to beginning if needed
    playNext()
  } else if (currentTrackIndex.value < props.tracks.length - 1) {
    // Continue to next track if not the last one
    playNext()
  } else {
    // Stop playback if last track and no repeat
    isPlaying.value = false
  }
}

const toggleShuffle = () => {
  shuffle.value = !shuffle.value
}

const toggleRepeat = () => {
  if (!repeat.value) {
    repeat.value = true
    repeatOne.value = false
  } else if (!repeatOne.value) {
    repeatOne.value = true
  } else {
    repeat.value = false
    repeatOne.value = false
  }
}

const togglePlaylist = () => {
  showPlaylist.value = !showPlaylist.value
}

const toggleMiniPlayer = () => {
  mini.value = !mini.value
  showPlaylist.value = false // Always close playlist when toggling size
}

// Keyboard shortcuts
const handleKeydown = (event: KeyboardEvent) => {
  if (!audioRef.value) return

  switch(event.code) {
    case 'Space':
      if (document.activeElement?.tagName !== 'BUTTON' &&
          document.activeElement?.tagName !== 'INPUT') {
        event.preventDefault()
        togglePlay()
      }
      break
    case 'ArrowRight':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        playNext()
      } else {
        audioRef.value.currentTime += 5
      }
      break
    case 'ArrowLeft':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        playPrevious()
      } else {
        audioRef.value.currentTime -= 5
      }
      break
    case 'ArrowUp':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        volume.value = Math.min(1, volume.value + 0.1)
        audioRef.value.volume = volume.value
      }
      break
    case 'ArrowDown':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        volume.value = Math.max(0, volume.value - 0.1)
        audioRef.value.volume = volume.value
      }
      break
    case 'KeyM':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        toggleMute()
      }
      break
  }
}

// Lifecycle hooks
onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = volume.value

    if (props.autoplay && currentTrack.value.source) {
      audioRef.value.play().then(() => {
        isPlaying.value = true
      }).catch(() => {
        console.warn('Autoplay was prevented by the browser')
      })
    }
  }

  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Watch for track changes
watch(
  () => currentTrack.value,
  (newTrack) => {
    if (audioRef.value && newTrack && newTrack.source) {
      // Reset progress
      progress.value = 0
      currentTime.value = 0
      duration.value = 0
    }
  }
)
</script>

<style scoped>
.audio-player-card {
  max-width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
}

.audio-player-card.player-mini {
  border-radius: 8px;
}

.audio-player-content {
  display: flex;
  padding: 16px;
  align-items: center;
}

.audio-player-content.mini-layout {
  padding: 8px;
}

.artwork-container {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 16px;
}

.mini-artwork {
  width: 48px;
  height: 48px;
  margin-right: 12px;
}

.artwork {
  border-radius: 8px;
  transition: transform 1s ease-in-out;
}

.artwork-spinning {
  animation: spin 20s linear infinite;
}

.artwork-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
}

.artwork-overlay:hover {
  opacity: 1;
}

.audio-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.track-info {
  margin-bottom: 16px;
}

.mini-info {
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

.mini-info .track-info {
  flex: 1;
  margin-bottom: 0;
  min-width: 0;
}

.track-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mini-info .track-title {
  font-size: 0.875rem;
  line-height: 1.25;
}

.playback-controls {
  width: 100%;
}

.progress-container {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-slider {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  outline: none;
  margin: 0;
  padding: 0;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
}

.progress-bar {
  position: absolute;
  height: 100%;
  background-color: var(--v-theme-primary);
  border-radius: 2px;
  transition: width 0.1s;
}

.time-display {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 8px;
}

.control-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.additional-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.volume-control {
  display: flex;
  align-items: center;
  width: 120px;
}

.volume-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 80px;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  outline: none;
  border-radius: 2px;
  transition: all 0.2s;
  margin-left: 4px;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--v-theme-primary);
  cursor: pointer;
}

.volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--v-theme-primary);
  cursor: pointer;
  border: none;
}

.right-controls {
  display: flex;
}

.mini-controls {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.mini-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.mini-progress-bar {
  height: 100%;
  background-color: var(--v-theme-primary);
}

.playlist-container {
  max-height: 300px;
  overflow-y: auto;
}

.playlist-header {
  display: flex;
  align-items: center;
  padding: 8px 16px;
}

.playlist-list {
  max-height: 250px;
  overflow-y: auto;
}

.playing-icon {
  animation: pulse 2s infinite;
  margin-right: 8px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>`

export const QR_CODE_COMPONENT_CODE = `<template>
  <v-card class="qr-code-component">
    <v-tabs v-model="activeTab" grow>
      <v-tab value="generate">Generate</v-tab>
      <v-tab value="scan">Scan</v-tab>
    </v-tabs>

    <v-card-text class="pa-4">
      <!-- Generate QR Code Tab -->
      <v-window v-model="activeTab">
        <v-window-item value="generate">
          <v-form @submit.prevent="generateQR">
            <v-text-field
              v-model="qrContent"
              label="Enter text or URL"
              variant="outlined"
              :rules="[v => !!v || 'This field is required']"
              class="mb-3"
            ></v-text-field>

            <div class="mb-4">
              <div class="text-subtitle-2 mb-2">QR Code Options</div>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="errorCorrection"
                    label="Error Correction"
                    :items="errorCorrectionLevels"
                    variant="outlined"
                    density="compact"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-slider
                    v-model="qrSize"
                    label="Size"
                    min="100"
                    max="300"
                    step="10"
                    thumb-label
                    class="mt-5"
                  ></v-slider>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-color-picker
                    v-model="foregroundColor"
                    hide-inputs
                    hide-canvas
                    mode="hexa"
                    flat
                    :swatches="colorSwatches"
                    show-swatches
                  ></v-color-picker>
                  <div class="text-caption text-center mt-1">Foreground Color</div>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-color-picker
                    v-model="backgroundColor"
                    hide-inputs
                    hide-canvas
                    mode="hexa"
                    flat
                    :swatches="colorSwatches"
                    show-swatches
                  ></v-color-picker>
                  <div class="text-caption text-center mt-1">Background Color</div>
                </v-col>
              </v-row>
            </div>

            <v-btn
              type="submit"
              color="primary"
              block
              :disabled="!qrContent"
              class="mb-6"
            >
              Generate QR Code
            </v-btn>
          </v-form>

          <!-- QR Code Result -->
          <div v-if="qrCodeUrl" class="qr-code-result text-center">
            <img
              :src="qrCodeUrl"
              :width="qrSize"
              :height="qrSize"
              alt="Generated QR Code"
              class="qr-image"
            />

            <div class="mt-4 d-flex justify-center">
              <v-btn
                prepend-icon="mdi-download"
                color="primary"
                variant="outlined"
                @click="downloadQrCode"
                class="me-2"
              >
                Download
              </v-btn>

              <v-btn
                prepend-icon="mdi-content-copy"
                variant="outlined"
                @click="copyQrImage"
              >
                Copy
              </v-btn>
            </div>
          </div>
        </v-window-item>

        <!-- Scan QR Code Tab -->
        <v-window-item value="scan">
          <div class="mb-4">
            <div class="scanner-container">
              <div v-if="!isScanning" class="scanner-placeholder d-flex flex-column align-center justify-center">
                <v-icon icon="mdi-qrcode-scan" size="64" color="primary" class="mb-4"></v-icon>
                <div class="text-body-1">Click the button below to scan a QR code</div>
              </div>

              <video
                v-show="isScanning"
                ref="videoRef"
                class="scanner-video"
                autoplay
                playsinline
              ></video>

              <canvas ref="canvasRef" class="scanner-canvas"></canvas>

              <div v-if="isScanning" class="scanner-overlay">
                <div class="scanner-frame"></div>
              </div>
            </div>

            <div class="mt-6 d-flex justify-center">
              <v-btn
                :color="isScanning ? 'error' : 'primary'"
                :prepend-icon="isScanning ? 'mdi-stop' : 'mdi-play'"
                @click="toggleScanner"
                class="me-2"
              >
                {{ isScanning ? 'Stop' : 'Start' }} Scanner
              </v-btn>

              <v-btn
                prepend-icon="mdi-image"
                variant="outlined"
                @click="openImageDialog"
              >
                Upload Image
              </v-btn>

              <input
                type="file"
                ref="fileInputRef"
                accept="image/*"
                class="d-none"
                @change="processImageFile"
              />
            </div>
          </div>

          <!-- Scan Results -->
          <v-expand-transition>
            <div v-if="scanResult" class="scan-result pa-4 mt-4 rounded">
              <div class="text-subtitle-1 font-weight-bold mb-2">Scan Result:</div>
              <div class="text-body-1 mb-2">{{ scanResult }}</div>

              <div class="d-flex">
                <v-chip
                  v-if="isUrl(scanResult)"
                  prepend-icon="mdi-link-variant"
                  color="primary"
                  class="me-2"
                  link
                  :href="scanResult"
                  target="_blank"
                >
                  Open Link
                </v-chip>

                <v-chip
                  prepend-icon="mdi-content-copy"
                  @click="copyToClipboard(scanResult)"
                >
                  Copy Text
                </v-chip>
              </div>
            </div>
          </v-expand-transition>
        </v-window-item>
      </v-window>
    </v-card-text>

    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

// For QR code scanning
let qrScanner: any = null;
let scannerInterval: number | null = null;

// Tabs
const activeTab = ref('generate');

// QR Generation variables
const qrContent = ref('https://example.com');
const qrCodeUrl = ref('');
const qrSize = ref(200);
const foregroundColor = ref('#000000');
const backgroundColor = ref('#FFFFFF');
const errorCorrection = ref('M');
const errorCorrectionLevels = ['L', 'M', 'Q', 'H'];
const colorSwatches = [
  ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF'],
  ['#FFFF00', '#FF00FF', '#00FFFF', '#FF5733', '#4CAF50'],
  ['#2196F3', '#9C27B0', '#607D8B', '#FFC107', '#795548'],
];

// QR Scanning variables
const isScanning = ref(false);
const scanResult = ref('');
const videoRef = ref<HTMLVideoElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
const stream = ref<MediaStream | null>(null);

// Feedback
const snackbar = ref({
  show: false,
  text: '',
  color: 'success'
});

// Methods - QR Generation
const generateQR = () => {
  // In a real implementation, we would use a QR library
  // For our demo, we'll generate a placeholder URL
  const params = new URLSearchParams({
    data: qrContent.value,
    size: \`\${qrSize.value}x\${qrSize.value}\`,
    color: foregroundColor.value.replace('#', ''),
    bgcolor: backgroundColor.value.replace('#', ''),
    ecc: errorCorrection.value.toLowerCase()
  });

  // In a real app, use a QR code library like qrcode.js
  // Here we're using a placeholder service
  qrCodeUrl.value = \`https://api.qrserver.com/v1/create-qr-code/?\${params.toString()}\`;

  snackbar.value = {
    show: true,
    text: 'QR Code generated successfully!',
    color: 'success'
  };
};

const downloadQrCode = () => {
  const link = document.createElement('a');
  link.download = 'qrcode.png';
  link.href = qrCodeUrl.value;
  link.click();

  snackbar.value = {
    show: true,
    text: 'QR Code downloaded',
    color: 'success'
  };
};

const copyQrImage = async () => {
  try {
    const response = await fetch(qrCodeUrl.value);
    const blob = await response.blob();
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ]);

    snackbar.value = {
      show: true,
      text: 'QR Code copied to clipboard',
      color: 'success'
    };
  } catch (err) {
    snackbar.value = {
      show: true,
      text: 'Failed to copy image',
      color: 'error'
    };
  }
};

// Methods - QR Scanning
const toggleScanner = async () => {
  if (isScanning.value) {
    stopScanner();
  } else {
    await startScanner();
  }
};

const startScanner = async () => {
  try {
    // Request camera permission
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    if (videoRef.value && stream.value) {
      videoRef.value.srcObject = stream.value;
      isScanning.value = true;

      // In a real app, we'd use a library like jsQR
      // For our demo, we'll simulate scanning after a timeout
      scannerInterval = window.setTimeout(() => {
        simulateQrDetection();
      }, 3000);
    }
  } catch (err) {
    console.error('Error accessing camera:', err);
    snackbar.value = {
      show: true,
      text: 'Could not access camera',
      color: 'error'
    };
  }
};

const stopScanner = () => {
  if (stream.value) {
    stream.value.getTracks().forEach(track => track.stop());
    stream.value = null;
  }

  if (scannerInterval !== null) {
    clearTimeout(scannerInterval);
    scannerInterval = null;
  }

  isScanning.value = false;
};

// This would actually use a QR code detection library like jsQR in a real app
const simulateQrDetection = () => {
  // Simulate detection of a QR code
  const possibleResults = [
    'https://example.com',
    'Hello World!',
    'Contact: John Doe, john@example.com',
    'WIFI:S:MyNetwork;T:WPA;P:password123;H:true;'
  ];

  scanResult.value = possibleResults[Math.floor(Math.random() * possibleResults.length)];
  stopScanner();

  snackbar.value = {
    show: true,
    text: 'QR Code detected!',
    color: 'success'
  };
};

const openImageDialog = () => {
  fileInputRef.value?.click();
};

const processImageFile = (event: Event) => {
  const input = event.target as HTMLInputElement;

  if (input?.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result) {
        const image = new Image();
        image.onload = () => {
          // In a real app, we would process the image with a QR code library
          // For the demo, we'll simulate detecting a QR code
          setTimeout(() => {
            scanResult.value = 'https://vuetifyjs.com';

            snackbar.value = {
              show: true,
              text: 'QR Code detected in image!',
              color: 'success'
            };
          }, 1000);
        };

        image.src = e.target.result as string;
      }
    };

    reader.readAsDataURL(file);

    // Reset the input
    input.value = '';
  }
};

// Helper functions
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    snackbar.value = {
      show: true,
      text: 'Copied to clipboard',
      color: 'success'
    };
  } catch (err) {
    snackbar.value = {
      show: true,
      text: 'Failed to copy',
      color: 'error'
    };
  }
};

const isUrl = (text: string): boolean => {
  try {
    new URL(text);
    return true;
  } catch {
    return false;
  }
};

// Lifecycle hooks
onMounted(() => {
  // Generate initial QR code
  generateQR();
});

onBeforeUnmount(() => {
  // Clean up resources
  stopScanner();
});

// Watch for tab changes to stop scanner when switching tabs
watch(activeTab, (newValue) => {
  if (newValue !== 'scan' && isScanning.value) {
    stopScanner();
  }
});
</script>

<style scoped>
.qr-code-component {
  max-width: 100%;
  overflow: hidden;
}

.qr-code-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
}

.qr-image {
  border: 1px solid #e0e0e0;
  padding: 8px;
  background-color: white;
}

.scanner-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.scanner-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  color: #666;
}

.scanner-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scanner-canvas {
  display: none;
}

.scanner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
}

.scanner-frame {
  width: 200px;
  height: 200px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
}

.scan-result {
  background-color: #f0f9ff;
  border: 1px solid #d1e9ff;
  word-break: break-all;
}
</style>`
