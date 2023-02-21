import * as Vue from 'vue';
const { ref, shallowReactive, watch, reactive, computed } = Vue;

const msg = ref('Hello World!');
const obj = reactive({ exist: 1 });

watch(
  obj,
  () => {
    console.log('[watch raw] change', JSON.stringify(obj));
  },
  { deep: true }
);

watch(
  () => obj,
  () => {
    console.log('[watch func] changed', JSON.stringify(obj));
  },
  { deep: true }
);
window.obj = obj;
window.Vue = Vue;
