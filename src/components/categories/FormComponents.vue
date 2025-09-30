<template>
    <div>
        <!-- Text Fields -->
        <CodeShowcase title="Text Fields" description="Various text input field styles and variants"
            icon="mdi-form-textbox" difficulty="Easy" :code="textFieldCode">
            <template #preview>
                <v-form class="d-flex flex-column ga-4" style="max-width: 400px;">
                    <v-text-field label="Standard" placeholder="Enter text"></v-text-field>
                    <v-text-field label="Outlined" variant="outlined" placeholder="Enter text"></v-text-field>
                    <v-text-field label="Filled" variant="filled" placeholder="Enter text"></v-text-field>
                    <v-text-field label="Solo" variant="solo" placeholder="Enter text"></v-text-field>
                    <v-text-field label="With Icon" prepend-inner-icon="mdi-magnify"
                        append-inner-icon="mdi-close"></v-text-field>
                    <v-text-field label="Password" type="password" append-inner-icon="mdi-eye"></v-text-field>
                </v-form>
            </template>
        </CodeShowcase>

        <!-- Selects -->
        <CodeShowcase title="Select Fields" description="Dropdown selection components" icon="mdi-form-dropdown"
            difficulty="Easy" :code="selectCode">
            <template #preview>
                <div class="d-flex flex-column ga-4" style="max-width: 400px;">
                    <v-select :items="['Option 1', 'Option 2', 'Option 3', 'Option 4']" label="Basic Select"></v-select>
                    <v-select :items="['Item 1', 'Item 2', 'Item 3', 'Item 4']" label="Multiple Select" multiple
                        chips></v-select>
                    <v-autocomplete :items="['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple']"
                        label="Autocomplete"></v-autocomplete>
                    <v-combobox :items="['JavaScript', 'TypeScript', 'Vue', 'React']" label="Combobox" multiple
                        chips></v-combobox>
                </div>
            </template>
        </CodeShowcase>

        <!-- Checkboxes and Radio -->
        <CodeShowcase title="Checkboxes & Radio Buttons" description="Boolean and selection inputs"
            icon="mdi-checkbox-marked" difficulty="Easy" :code="checkboxRadioCode">
            <template #preview>
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
                        <v-switch label="Switch 1"></v-switch>
                        <v-switch label="Switch 2" color="success"></v-switch>
                        <v-switch label="Inset" inset></v-switch>
                    </div>
                </div>
            </template>
        </CodeShowcase>

        <!-- Sliders -->
        <CodeShowcase title="Sliders" description="Range input components" icon="mdi-tune" difficulty="Easy"
            :code="sliderCode">
            <template #preview>
                <div class="d-flex flex-column ga-6" style="max-width: 400px;">
                    <div>
                        <h4>Basic Slider</h4>
                        <v-slider v-model="sliderValue1" :max="100" :min="0" hide-details></v-slider>
                    </div>
                    <div>
                        <h4>Stepped Slider</h4>
                        <v-slider v-model="sliderValue2" :max="10" :min="0" :step="1" show-ticks
                            tick-size="4"></v-slider>
                    </div>
                    <div>
                        <h4>Range Slider</h4>
                        <v-range-slider v-model="rangeValue" :max="100" :min="0" hide-details></v-range-slider>
                    </div>
                </div>
            </template>
        </CodeShowcase>

        <!-- File Input -->
        <CodeShowcase title="File Input" description="File upload components" icon="mdi-file-upload" difficulty="Easy"
            :code="fileInputCode">
            <template #preview>
                <div class="d-flex flex-column ga-4" style="max-width: 400px;">
                    <v-file-input label="Single File" prepend-icon="mdi-camera"></v-file-input>
                    <v-file-input label="Multiple Files" multiple accept="image/*"
                        prepend-icon="mdi-image-multiple"></v-file-input>
                    <v-file-input label="Chips Display" multiple chips show-size></v-file-input>
                </div>
            </template>
        </CodeShowcase>

        <!-- Textarea -->
        <CodeShowcase title="Textarea" description="Multi-line text input" icon="mdi-text" difficulty="Easy"
            :code="textareaCode">
            <template #preview>
                <div class="d-flex flex-column ga-4" style="max-width: 400px;">
                    <v-textarea label="Basic Textarea" placeholder="Enter your message"></v-textarea>
                    <v-textarea label="Auto Grow" auto-grow rows="2" row-height="20"></v-textarea>
                    <v-textarea label="Character Counter" counter="120" max-length="120"></v-textarea>
                </div>
            </template>
        </CodeShowcase>

        <!-- Form Validation -->
        <CodeShowcase title="Form Validation" description="Built-in form validation examples" icon="mdi-shield-check"
            difficulty="Medium" :code="validationCode">
            <template #preview>
                <v-form ref="form" v-model="valid" class="d-flex flex-column ga-4" style="max-width: 400px;">
                    <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules" label="Password" type="password"
                        required></v-text-field>
                    <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" label="Confirm Password"
                        type="password" required></v-text-field>
                    <v-btn :disabled="!valid" color="success" @click="validate">
                        Validate
                    </v-btn>
                    <v-btn @click="reset">Reset</v-btn>
                </v-form>
            </template>
        </CodeShowcase>
    </div>
</template>

<script setup lang="ts">
import CodeShowcase from '@/components/CodeShowcase.vue'
import {
    CHECKBOX_RADIO_CODE,
    FILE_INPUT_CODE,
    SELECT_CODE,
    SLIDER_CODE,
    TEXT_FIELD_CODE,
    TEXTAREA_CODE,
    VALIDATION_CODE
} from '@/constants/formComponents'
import { ref } from 'vue'

// Form validation data
const valid = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const form = ref()

// Slider values
const sliderValue1 = ref(40)
const sliderValue2 = ref(5)
const rangeValue = ref([20, 80])

// Validation rules
const emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid',
]

const passwordRules = [
    (v: string) => !!v || 'Password is required',
    (v: string) => v.length >= 8 || 'Password must be at least 8 characters',
]

const confirmPasswordRules = [
    (v: string) => !!v || 'Confirm password is required',
    (v: string) => v === password.value || 'Passwords must match',
]

const validate = () => {
    form.value?.validate()
}

const reset = () => {
    form.value?.reset()
}

const textFieldCode = TEXT_FIELD_CODE
const selectCode = SELECT_CODE
const checkboxRadioCode = CHECKBOX_RADIO_CODE
const sliderCode = SLIDER_CODE
const fileInputCode = FILE_INPUT_CODE
const textareaCode = TEXTAREA_CODE
const validationCode = VALIDATION_CODE
</script>
