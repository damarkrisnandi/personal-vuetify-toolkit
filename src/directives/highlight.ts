// import { DirectiveBinding, ObjectDirective } from 'vue'
// import type { HLJSApi } from 'highlight.js'

// // Create a custom directive for highlight.js
// export const highlightDirective: ObjectDirective = {
//   mounted(el: HTMLElement, binding: DirectiveBinding) {
//     const hljs = binding.instance?.$root.$.appContext.app.config.globalProperties.$hljs as HLJSApi

//     if (hljs) {
//       // Immediately highlight the element
//       hljs.highlightElement(el)
//     }
//   },

//   updated(el: HTMLElement, binding: DirectiveBinding) {
//     const hljs = binding.instance?.$root.$.appContext.app.config.globalProperties.$hljs as HLJSApi

//     if (hljs) {
//       // Re-highlight on update
//       hljs.highlightElement(el)
//     }
//   }
// }
