// Card Components Code Examples
export const BASIC_CARD_CODE = `<template>
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
</template>`

export const IMAGE_CARD_CODE = `<template>
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
          <v-img src="https://randomuser.me/api/portraits/men/1.jpg"></v-img>
        </v-avatar>
        <div>
          <div class="font-weight-bold">John Doe</div>
          <div class="text-caption text-grey">Content Creator</div>
        </div>
      </div>
    </v-card>
  </div>
</template>`

export const FEATURE_CARD_CODE = `<template>
  <div class="d-flex flex-wrap ga-4">
    <v-card width="300" class="text-center">
      <v-card-text class="pa-6">
        <v-icon size="48" color="primary" class="mb-4">mdi-rocket</v-icon>
        <div class="text-h6 mb-2">Fast Performance</div>
        <div class="text-body-2 text-grey">
          Lightning fast loading times and optimized performance for the best user experience.
        </div>
      </v-card-text>
      <v-card-actions class="justify-center pb-4">
        <v-btn variant="outlined">Learn More</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="300" class="text-center">
      <v-card-text class="pa-6">
        <v-icon size="48" color="success" class="mb-4">mdi-shield-check</v-icon>
        <div class="text-h6 mb-2">Secure</div>
        <div class="text-body-2 text-grey">
          Enterprise-grade security with end-to-end encryption and secure data handling.
        </div>
      </v-card-text>
      <v-card-actions class="justify-center pb-4">
        <v-btn variant="outlined">Try Now</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>`

export const PRICING_CARD_CODE = `<template>
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
        </v-list>
      </v-card-text>
      <v-card-actions class="pa-4">
        <v-btn variant="elevated" block>Choose Plan</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>`

export const STATS_CARD_CODE = `<template>
  <div class="d-flex flex-wrap ga-4">
    <v-card width="200" color="primary" dark>
      <v-card-text class="text-center pa-6">
        <v-icon size="32" class="mb-2">mdi-account-group</v-icon>
        <div class="text-h4 font-weight-bold">1,234</div>
        <div class="text-body-2">Active Users</div>
      </v-card-text>
    </v-card>

    <v-card width="200" color="success" dark>
      <v-card-text class="text-center pa-6">
        <v-icon size="32" class="mb-2">mdi-chart-line</v-icon>
        <div class="text-h4 font-weight-bold">89%</div>
        <div class="text-body-2">Growth Rate</div>
      </v-card-text>
    </v-card>

    <v-card width="200" color="info" dark>
      <v-card-text class="text-center pa-6">
        <v-icon size="32" class="mb-2">mdi-currency-usd</v-icon>
        <div class="text-h4 font-weight-bold">$50K</div>
        <div class="text-body-2">Revenue</div>
      </v-card-text>
    </v-card>
  </div>
</template>`

export const PROFILE_CARD_CODE = `<template>
  <div class="d-flex flex-wrap ga-4">
    <v-card width="300">
      <div class="text-center pa-6">
        <v-avatar size="80" class="mb-4">
          <v-img src="https://randomuser.me/api/portraits/women/1.jpg"></v-img>
        </v-avatar>
        <div class="text-h6">Sarah Johnson</div>
        <div class="text-body-2 text-grey mb-4">Frontend Developer</div>
        <div class="d-flex justify-center ga-2 mb-4">
          <v-chip size="small" color="primary">Vue.js</v-chip>
          <v-chip size="small" color="success">TypeScript</v-chip>
          <v-chip size="small" color="info">UI/UX</v-chip>
        </div>
        <v-btn variant="outlined" prepend-icon="mdi-email">Contact</v-btn>
      </div>
    </v-card>

    <v-card width="300">
      <v-img src="https://picsum.photos/300/150?random=2" height="150"></v-img>
      <v-card-text class="text-center">
        <v-avatar size="60" class="mt-n8 mb-2">
          <v-img src="https://randomuser.me/api/portraits/men/2.jpg"></v-img>
        </v-avatar>
        <div class="text-h6">Alex Chen</div>
        <div class="text-body-2 text-grey">Full Stack Developer</div>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn icon="mdi-twitter" variant="text"></v-btn>
        <v-btn icon="mdi-linkedin" variant="text"></v-btn>
        <v-btn icon="mdi-github" variant="text"></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>`
