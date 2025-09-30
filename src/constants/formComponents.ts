// Form Components Code Examples
export const TEXT_FIELD_CODE = `<template>
  <v-form class="d-flex flex-column ga-4" style="max-width: 400px;">
    <v-text-field label="Standard" placeholder="Enter text"></v-text-field>
    <v-text-field label="Outlined" variant="outlined" placeholder="Enter text"></v-text-field>
    <v-text-field label="Filled" variant="filled" placeholder="Enter text"></v-text-field>
    <v-text-field label="Solo" variant="solo" placeholder="Enter text"></v-text-field>
    <v-text-field label="With Icon" prepend-inner-icon="mdi-magnify" append-inner-icon="mdi-close"></v-text-field>
    <v-text-field label="Password" type="password" append-inner-icon="mdi-eye"></v-text-field>
  </v-form>
</template>`

export const SELECT_CODE = `<template>
  <div class="d-flex flex-column ga-4" style="max-width: 400px;">
    <v-select :items="['Option 1', 'Option 2', 'Option 3', 'Option 4']" label="Basic Select"></v-select>
    <v-select :items="['Item 1', 'Item 2', 'Item 3', 'Item 4']" label="Multiple Select" multiple chips></v-select>
    <v-autocomplete :items="['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple']" label="Autocomplete"></v-autocomplete>
    <v-combobox :items="['JavaScript', 'TypeScript', 'Vue', 'React']" label="Combobox" multiple chips></v-combobox>
  </div>
</template>`

export const CHECKBOX_RADIO_CODE = `<template>
  <div class="d-flex flex-wrap ga-6">
    <div>
      <h4 class="mb-2">Checkboxes</h4>
      <v-checkbox label="Option 1"></v-checkbox>
      <v-checkbox label="Option 2" color="success"></v-checkbox>
      <v-checkbox label="Disabled" disabled></v-checkbox>
    </div>
    <div>
      <h4 class="mb-2">Radio Buttons</h4>
      <v-radio-group>
        <v-radio label="Radio 1" value="1"></v-radio>
        <v-radio label="Radio 2" value="2"></v-radio>
        <v-radio label="Radio 3" value="3"></v-radio>
      </v-radio-group>
    </div>
    <div>
      <h4 class="mb-2">Switches</h4>
      <v-switch label="Default"></v-switch>
      <v-switch label="Success" color="success"></v-switch>
      <v-switch label="Inset" inset></v-switch>
    </div>
  </div>
</template>`

export const SLIDER_CODE = `<template>
  <div class="d-flex flex-column ga-4" style="max-width: 400px;">
    <v-slider label="Basic Slider" thumb-label></v-slider>
    <v-slider label="Step Slider" step="10" thumb-label show-ticks></v-slider>
    <v-slider label="Color Slider" color="success" thumb-label></v-slider>
    <v-range-slider label="Range Slider" thumb-label></v-range-slider>
    <v-slider label="Disabled" disabled thumb-label></v-slider>
  </div>
</template>`

export const FILE_INPUT_CODE = `<template>
  <div class="d-flex flex-column ga-4" style="max-width: 400px;">
    <v-file-input label="File input" placeholder="Select your files"></v-file-input>
    <v-file-input label="Multiple files" multiple chips placeholder="Select your files"></v-file-input>
    <v-file-input label="Show size" show-size placeholder="Select your files"></v-file-input>
    <v-file-input label="Accept images" accept="image/*" placeholder="Select images"></v-file-input>
  </div>
</template>`

export const TEXTAREA_CODE = `<template>
  <div class="d-flex flex-column ga-4" style="max-width: 400px;">
    <v-textarea label="Basic Textarea" placeholder="Enter your message"></v-textarea>
    <v-textarea label="Auto Grow" auto-grow placeholder="This will grow as you type"></v-textarea>
    <v-textarea label="With Counter" counter="120" placeholder="Limited to 120 characters"></v-textarea>
    <v-textarea label="Outlined" variant="outlined" rows="3" placeholder="Enter text"></v-textarea>
  </div>
</template>`

export const VALIDATION_CODE = `<template>
  <v-form ref="form" @submit.prevent="validate" style="max-width: 400px;">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      type="password"
      required
    ></v-text-field>

    <v-text-field
      v-model="confirmPassword"
      :rules="confirmPasswordRules"
      label="Confirm Password"
      type="password"
      required
    ></v-text-field>

    <v-btn type="submit" color="primary" class="me-2">Validate</v-btn>
    <v-btn @click="reset">Reset</v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const nameRules = [
  (v) => !!v || 'Name is required',
  (v) => v.length >= 2 || 'Name must be at least 2 characters',
]

const emailRules = [
  (v) => !!v || 'Email is required',
  (v) => /.+@.+\\..+/.test(v) || 'Email must be valid',
]

const passwordRules = [
  (v) => !!v || 'Password is required',
  (v) => v.length >= 8 || 'Password must be at least 8 characters',
]

const confirmPasswordRules = [
  (v) => !!v || 'Confirm password is required',
  (v) => v === password.value || 'Passwords must match',
]

const validate = () => {
  form.value?.validate()
}

const reset = () => {
  form.value?.reset()
}
</script>`
