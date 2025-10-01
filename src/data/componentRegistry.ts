// Component Registry - Maps all available components from categories
export interface ComponentData {
    id: string
    title: string
    description: string
    icon: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    category: string
    code: string
    preview?: any // Vue component preview
    previewHtml?: string // HTML string for simple previews
}

// Basic Components
export const basicComponents: ComponentData[] = [
    {
        id: 'buttons',
        title: 'Buttons',
        description: 'Various button styles and variants available in Vuetify',
        icon: 'mdi-gesture-tap-button',
        difficulty: 'Easy',
        category: 'basic',
        code: `<template>
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
</template>`,
        previewHtml: `
      <div class="d-flex flex-wrap ga-3">
        <button class="v-btn v-btn--elevated bg-primary text-white pa-2 rounded me-2 mb-2">Primary</button>
        <button class="v-btn v-btn--elevated bg-secondary text-white pa-2 rounded me-2 mb-2">Secondary</button>
        <button class="v-btn v-btn--outlined border pa-2 rounded me-2 mb-2">Outlined</button>
        <button class="v-btn pa-2 rounded me-2 mb-2">Text</button>
      </div>
    `
    },
    {
        id: 'chips',
        title: 'Chips',
        description: 'Compact elements that represent an input, attribute, or action',
        icon: 'mdi-label',
        difficulty: 'Easy',
        category: 'basic',
        code: `<template>
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
</template>`,
        previewHtml: `
      <div class="d-flex flex-wrap ga-2">
        <span class="v-chip bg-grey-lighten-2 pa-2 rounded-pill me-1 mb-1">Default</span>
        <span class="v-chip bg-primary text-white pa-2 rounded-pill me-1 mb-1">Primary</span>
        <span class="v-chip border pa-2 rounded-pill me-1 mb-1">Outlined</span>
        <span class="v-chip bg-grey-lighten-2 pa-2 rounded-pill me-1 mb-1">With Icon</span>
      </div>
    `
    },
    {
        id: 'icons',
        title: 'Icons',
        description: 'Material Design Icons integration with different sizes and colors',
        icon: 'mdi-star',
        difficulty: 'Easy',
        category: 'basic',
        code: `<template>
  <div class="d-flex flex-wrap ga-4 align-center">
    <v-icon icon="mdi-heart"></v-icon>
    <v-icon icon="mdi-star" color="amber"></v-icon>
    <v-icon icon="mdi-thumb-up" color="success" size="large"></v-icon>
    <v-icon icon="mdi-account" color="primary" size="x-large"></v-icon>
    <v-icon icon="mdi-settings" size="small"></v-icon>
  </div>
</template>`,
        previewHtml: `
      <div class="d-flex flex-wrap ga-4 align-center">
        <i class="mdi mdi-heart"></i>
        <i class="mdi mdi-star" style="color: #FFC107;"></i>
        <i class="mdi mdi-thumb-up" style="color: #4CAF50; font-size: 1.5em;"></i>
        <i class="mdi mdi-account" style="color: #1976D2; font-size: 2em;"></i>
        <i class="mdi mdi-settings" style="font-size: 0.8em;"></i>
      </div>
    `
    },
    {
        id: 'avatars',
        title: 'Avatars',
        description: 'User profile images and placeholder avatars',
        icon: 'mdi-account-circle',
        difficulty: 'Easy',
        category: 'basic',
        code: `<template>
  <div class="d-flex flex-wrap ga-3 align-center">
    <v-avatar color="primary">
      <span class="text-h5">U</span>
    </v-avatar>
    <v-avatar color="red">
      <v-icon icon="mdi-account"></v-icon>
    </v-avatar>
    <v-avatar image="https://randomuser.me/api/portraits/men/1.jpg"></v-avatar>
    <v-avatar size="large" color="green">
      <span class="text-h4">A</span>
    </v-avatar>
  </div>
</template>`,
        previewHtml: `
      <div class="d-flex flex-wrap ga-3 align-center">
        <div class="v-avatar bg-primary text-white rounded-circle d-flex align-center justify-center" style="width: 40px; height: 40px;">U</div>
        <div class="v-avatar bg-error text-white rounded-circle d-flex align-center justify-center" style="width: 40px; height: 40px;"><i class="mdi mdi-account"></i></div>
        <div class="v-avatar rounded-circle" style="width: 40px; height: 40px; background-image: url('https://randomuser.me/api/portraits/men/1.jpg'); background-size: cover;"></div>
        <div class="v-avatar bg-success text-white rounded-circle d-flex align-center justify-center" style="width: 56px; height: 56px; font-size: 1.25em;">A</div>
      </div>
    `
    },
    {
        id: 'alerts',
        title: 'Alerts',
        description: 'Informational messages and notifications',
        icon: 'mdi-alert',
        difficulty: 'Easy',
        category: 'basic',
        code: `<template>
  <div class="d-flex flex-column ga-3">
    <v-alert type="success">This is a success alert!</v-alert>
    <v-alert type="info">This is an info alert!</v-alert>
    <v-alert type="warning">This is a warning alert!</v-alert>
    <v-alert type="error">This is an error alert!</v-alert>
    <v-alert type="success" variant="tonal">Tonal success alert</v-alert>
    <v-alert type="info" variant="outlined">Outlined info alert</v-alert>
  </div>
</template>`,
        previewHtml: `
      <div class="d-flex flex-column ga-3">
        <div class="alert bg-success text-white pa-3 rounded d-flex align-center">
          <i class="mdi mdi-check-circle me-2"></i>This is a success alert!
        </div>
        <div class="alert bg-info text-white pa-3 rounded d-flex align-center">
          <i class="mdi mdi-information me-2"></i>This is an info alert!
        </div>
        <div class="alert bg-warning text-white pa-3 rounded d-flex align-center">
          <i class="mdi mdi-alert me-2"></i>This is a warning alert!
        </div>
      </div>
    `
    }
]

// Form Components
export const formComponents: ComponentData[] = [
    {
        id: 'text-fields',
        title: 'Text Fields',
        description: 'Input fields for text data collection',
        icon: 'mdi-form-textbox',
        difficulty: 'Medium',
        category: 'forms',
        code: `<template>
  <div class="d-flex flex-column ga-4">
    <v-text-field label="Standard" variant="underlined"></v-text-field>
    <v-text-field label="Filled" variant="filled"></v-text-field>
    <v-text-field label="Outlined" variant="outlined"></v-text-field>
    <v-text-field label="Solo" variant="solo"></v-text-field>
    <v-text-field label="With Icon" prepend-inner-icon="mdi-account" variant="outlined"></v-text-field>
  </div>
</template>`,
        previewHtml: `
      <div class="d-flex flex-column ga-4">
        <input class="v-text-field pa-3 border-bottom" placeholder="Standard" style="border: none; border-bottom: 1px solid #ccc;">
        <input class="v-text-field pa-3 border rounded" placeholder="Outlined" style="border: 1px solid #ccc;">
        <div class="d-flex align-center border rounded pa-2">
          <i class="mdi mdi-account me-2"></i>
          <input placeholder="With Icon" style="border: none; outline: none; flex: 1;">
        </div>
      </div>
    `
    },
    {
        id: 'selects',
        title: 'Selects',
        description: 'Dropdown selection components',
        icon: 'mdi-form-dropdown',
        difficulty: 'Medium',
        category: 'forms',
        code: `<template>
  <div class="d-flex flex-column ga-4">
    <v-select
      :items="['Option 1', 'Option 2', 'Option 3']"
      label="Standard Select"
      variant="outlined"
    ></v-select>
    <v-select
      :items="items"
      item-title="name"
      item-value="id"
      label="Object Select"
      variant="outlined"
    ></v-select>
  </div>
</template>`,
        previewHtml: `
      <div class="d-flex flex-column ga-4">
        <div class="v-select border rounded pa-3 d-flex justify-space-between align-center" style="border: 1px solid #ccc;">
          <span>Standard Select</span>
          <i class="mdi mdi-chevron-down"></i>
        </div>
        <div class="v-select border rounded pa-3 d-flex justify-space-between align-center" style="border: 1px solid #ccc;">
          <span>Object Select</span>
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </div>
    `
    },
    {
        id: 'checkboxes',
        title: 'Checkboxes',
        description: 'Selection controls for multiple choices',
        icon: 'mdi-checkbox-marked',
        difficulty: 'Easy',
        category: 'forms',
        code: `<template>
  <div class="d-flex flex-column ga-2">
    <v-checkbox label="Default Checkbox"></v-checkbox>
    <v-checkbox label="Checked" model-value="true"></v-checkbox>
    <v-checkbox label="Disabled" disabled></v-checkbox>
    <v-checkbox label="Indeterminate" indeterminate></v-checkbox>
    <v-checkbox label="Custom Color" color="success"></v-checkbox>
  </div>
</template>`,
        previewHtml: `
      <div class="d-flex flex-column ga-2">
        <div class="d-flex align-center">
          <div class="checkbox border me-2" style="width: 20px; height: 20px; border: 2px solid #ccc;"></div>
          <span>Default Checkbox</span>
        </div>
        <div class="d-flex align-center">
          <div class="checkbox bg-primary border me-2 d-flex align-center justify-center" style="width: 20px; height: 20px; border: 2px solid #1976D2;">
            <i class="mdi mdi-check text-white" style="font-size: 12px;"></i>
          </div>
          <span>Checked</span>
        </div>
        <div class="d-flex align-center text-grey">
          <div class="checkbox border me-2" style="width: 20px; height: 20px; border: 2px solid #ccc; opacity: 0.5;"></div>
          <span>Disabled</span>
        </div>
      </div>
    `
    },
    {
        id: 'radio-buttons',
        title: 'Radio Buttons',
        description: 'Selection controls for single choice',
        icon: 'mdi-radiobox-marked',
        difficulty: 'Easy',
        category: 'forms',
        code: `<template>
  <v-radio-group v-model="selection">
    <v-radio label="Option 1" value="1"></v-radio>
    <v-radio label="Option 2" value="2"></v-radio>
    <v-radio label="Option 3" value="3"></v-radio>
    <v-radio label="Disabled" value="4" disabled></v-radio>
  </v-radio-group>
</template>`,
        previewHtml: `
      <div class="d-flex flex-column ga-2">
        <div class="d-flex align-center">
          <div class="radio-button border rounded-circle me-2 d-flex align-center justify-center" style="width: 20px; height: 20px; border: 2px solid #1976D2;">
            <div class="bg-primary rounded-circle" style="width: 8px; height: 8px;"></div>
          </div>
          <span>Option 1</span>
        </div>
        <div class="d-flex align-center">
          <div class="radio-button border rounded-circle me-2" style="width: 20px; height: 20px; border: 2px solid #ccc;"></div>
          <span>Option 2</span>
        </div>
        <div class="d-flex align-center">
          <div class="radio-button border rounded-circle me-2" style="width: 20px; height: 20px; border: 2px solid #ccc;"></div>
          <span>Option 3</span>
        </div>
      </div>
    `
    }
]

// Layout Components
export const layoutComponents: ComponentData[] = [
    {
        id: 'grid-system',
        title: 'Grid System',
        description: 'Responsive grid layout using Vuetify\'s grid system',
        icon: 'mdi-grid',
        difficulty: 'Medium',
        category: 'layout',
        code: `<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card class="pa-4">Column 1</v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card class="pa-4">Column 2</v-card>
      </v-col>
      <v-col cols="12" md="12" lg="4">
        <v-card class="pa-4">Column 3</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>`,
        previewHtml: `
      <div class="d-flex flex-wrap ga-2">
        <div class="flex-grow-1 pa-3 border rounded">Column 1</div>
        <div class="flex-grow-1 pa-3 border rounded">Column 2</div>
        <div class="flex-grow-1 pa-3 border rounded">Column 3</div>
      </div>
    `
    },
    {
        id: 'dividers',
        title: 'Dividers',
        description: 'Visual separators for content sections',
        icon: 'mdi-minus',
        difficulty: 'Easy',
        category: 'layout',
        code: `<template>
  <div>
    <p>Content above</p>
    <v-divider></v-divider>
    <p>Content below</p>
    <v-divider vertical></v-divider>
    <p>Vertical divider</p>
    <v-divider inset></v-divider>
    <p>Inset divider</p>
  </div>
</template>`,
        previewHtml: `
      <div>
        <p class="pa-2">Content above</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 8px 0;">
        <p class="pa-2">Content below</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 8px 16px;">
        <p class="pa-2">Inset divider</p>
      </div>
    `
    }
]

// Card Components
export const cardComponents: ComponentData[] = [
    {
        id: 'basic-cards',
        title: 'Basic Cards',
        description: 'Simple card layouts for content display',
        icon: 'mdi-card',
        difficulty: 'Easy',
        category: 'cards',
        code: `<template>
  <v-card>
    <v-card-title>Card Title</v-card-title>
    <v-card-subtitle>Card Subtitle</v-card-subtitle>
    <v-card-text>
      This is the main content of the card. It can contain any type of content.
    </v-card-text>
    <v-card-actions>
      <v-btn>Action 1</v-btn>
      <v-btn>Action 2</v-btn>
    </v-card-actions>
  </v-card>
</template>`,
        previewHtml: `
      <div class="v-card border rounded pa-4" style="box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div class="text-h6 mb-1">Card Title</div>
        <div class="text-subtitle-2 text-grey mb-3">Card Subtitle</div>
        <div class="mb-4">This is the main content of the card. It can contain any type of content.</div>
        <div class="d-flex ga-2">
          <button class="v-btn pa-2 rounded">Action 1</button>
          <button class="v-btn pa-2 rounded">Action 2</button>
        </div>
      </div>
    `
    },
    {
        id: 'profile-card',
        title: 'Profile Card',
        description: 'User profile card with avatar and information',
        icon: 'mdi-account-card',
        difficulty: 'Medium',
        category: 'cards',
        code: `<template>
  <v-card width="300">
    <v-card-text class="text-center">
      <v-avatar size="80" color="primary" class="mb-4">
        <span class="text-h4">JD</span>
      </v-avatar>
      <div class="text-h6">John Doe</div>
      <div class="text-subtitle-2 text-grey mb-4">Software Developer</div>
      <div class="text-body-2">
        Passionate developer with 5+ years of experience in Vue.js and modern web technologies.
      </div>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn color="primary">Follow</v-btn>
      <v-btn variant="outlined">Message</v-btn>
    </v-card-actions>
  </v-card>
</template>`,
        previewHtml: `
      <div class="v-card border rounded pa-4 text-center" style="width: 250px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div class="v-avatar bg-primary text-white rounded-circle d-flex align-center justify-center mb-3" style="width: 60px; height: 60px; margin: 0 auto;">JD</div>
        <div class="text-h6 mb-1">John Doe</div>
        <div class="text-subtitle-2 text-grey mb-3">Software Developer</div>
        <div class="text-body-2 mb-4">Passionate developer with 5+ years of experience.</div>
        <div class="d-flex justify-center ga-2">
          <button class="v-btn bg-primary text-white pa-2 rounded">Follow</button>
          <button class="v-btn border pa-2 rounded">Message</button>
        </div>
      </div>
    `
    }
]

// Complex Components
export const complexComponents: ComponentData[] = [
    {
        id: 'login-card',
        title: 'Login Card',
        description: 'Complete login form with validation and modern design',
        icon: 'mdi-login',
        difficulty: 'Hard',
        category: 'complex',
        code: `<template>
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
          type="password"
          prepend-inner-icon="mdi-lock"
          variant="outlined"
          class="mb-3"
        ></v-text-field>
        <v-btn color="primary" block size="large">
          Sign In
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>`,
        previewHtml: `
      <div class="v-card border rounded pa-4" style="width: 300px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <div class="text-center text-h6 mb-4">Welcome Back</div>
        <div class="d-flex flex-column ga-3">
          <div class="d-flex align-center border rounded pa-2">
            <i class="mdi mdi-email me-2"></i>
            <input placeholder="Email" style="border: none; outline: none; flex: 1;">
          </div>
          <div class="d-flex align-center border rounded pa-2">
            <i class="mdi mdi-lock me-2"></i>
            <input placeholder="Password" type="password" style="border: none; outline: none; flex: 1;">
          </div>
          <button class="v-btn bg-primary text-white pa-3 rounded" style="width: 100%;">Sign In</button>
        </div>
      </div>
    `
    },
    {
        id: 'ai-chat',
        title: 'AI Chat Component',
        description: 'Interactive AI assistant chat interface with typing indicators and quick actions',
        icon: 'mdi-robot',
        difficulty: 'Hard',
        category: 'complex',
        code: `<template>
  <v-card width="400" height="600" elevation="8">
    <v-card-title class="d-flex align-center pa-4 bg-primary text-white">
      <v-icon class="me-2">mdi-robot</v-icon>
      <span>AI Assistant</span>
    </v-card-title>
    <v-card-text class="pa-0" style="height: 480px; display: flex; flex-direction: column;">
      <!-- Chat Messages -->
      <div class="flex-grow-1 overflow-y-auto pa-4">
        <div class="mb-4">
          <div class="d-flex justify-start">
            <v-chip color="grey-lighten-4" class="pa-3">
              Hello! How can I help you today?
            </v-chip>
          </div>
        </div>
      </div>
      <!-- Message Input -->
      <div class="pa-3 border-t">
        <v-text-field
          placeholder="Type your message..."
          variant="outlined"
          density="compact"
          hide-details
        >
          <template #append-inner>
            <v-btn icon="mdi-send" size="small"></v-btn>
          </template>
        </v-text-field>
      </div>
    </v-card-text>
  </v-card>
</template>`,
        previewHtml: `
      <div class="v-card border rounded" style="width: 300px; height: 400px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <div class="d-flex align-center pa-3 bg-primary text-white">
          <i class="mdi mdi-robot me-2"></i>
          <span>AI Assistant</span>
        </div>
        <div class="pa-3" style="height: 300px; display: flex; flex-direction: column;">
          <div class="flex-grow-1 mb-3">
            <div class="d-flex justify-start mb-2">
              <span class="pa-2 bg-grey-lighten-2 rounded">Hello! How can I help?</span>
            </div>
            <div class="d-flex justify-end">
              <span class="pa-2 bg-primary text-white rounded">Hi there!</span>
            </div>
          </div>
          <div class="d-flex align-center border rounded pa-2">
            <input placeholder="Type message..." style="border: none; outline: none; flex: 1;">
            <i class="mdi mdi-send"></i>
          </div>
        </div>
      </div>
    `
    },
    {
        id: 'weather-card',
        title: 'Weather Forecast Card',
        description: 'Interactive weather card with current conditions and forecast',
        icon: 'mdi-weather-partly-cloudy',
        difficulty: 'Hard',
        category: 'complex',
        code: `<template>
  <v-card width="350" elevation="8">
    <v-card-text class="pa-0">
      <div class="weather-header pa-6 text-white text-center"
           style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);">
        <div class="d-flex align-center justify-space-between mb-4">
          <div>
            <div class="text-h4 font-weight-bold">72°</div>
            <div class="text-body-1">Partly Cloudy</div>
            <div class="text-caption">San Francisco</div>
          </div>
          <v-icon icon="mdi-weather-partly-cloudy" size="64"></v-icon>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>`,
        previewHtml: `
      <div class="v-card border rounded" style="width: 280px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <div class="pa-4 text-white text-center" style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);">
          <div class="d-flex align-center justify-space-between mb-3">
            <div>
              <div class="text-h4 font-weight-bold">72°</div>
              <div class="text-body-1">Partly Cloudy</div>
              <div class="text-caption">San Francisco</div>
            </div>
            <i class="mdi mdi-weather-partly-cloudy" style="font-size: 3em;"></i>
          </div>
        </div>
      </div>
    `
    }
]

// All components registry
export const allComponents: ComponentData[] = [
    ...basicComponents,
    ...formComponents,
    ...layoutComponents,
    ...cardComponents,
    ...complexComponents
]

// Helper function to get components by category
export const getComponentsByCategory = (category: string): ComponentData[] => {
    return allComponents.filter(component => component.category === category)
}

// Helper function to get component by id
export const getComponentById = (id: string): ComponentData | undefined => {
    return allComponents.find(component => component.id === id)
}

// Categories mapping
export const categoryMapping = {
    basic: 'Basic Components',
    forms: 'Form Components',
    layout: 'Layout Components',
    cards: 'Cards & Surfaces',
    data: 'Data Display',
    overlay: 'Overlay Components',
    design: 'Design Tokens',
    navigation: 'Navigation',
    complex: 'Complex Examples'
}
