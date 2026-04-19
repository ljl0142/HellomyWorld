<template>
  <div class="waline-wrapper">
    <div ref="walineRef"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, computed, watch, nextTick } from 'vue'
import { init } from '@waline/client'
import '@waline/client/style'
import { useData,  useRoute } from 'vitepress'

const walineRef = ref(null)
const { isDark } = useData()
const route = useRoute()
let walineInstance = null
const initWaline = async () => {
  if (walineInstance) {
    walineInstance.destroy()
    walineInstance = null
  }
  await nextTick()
  
  if (!walineRef.value) return
  try {
    walineInstance = init({
      el: walineRef.value,
      serverURL: 'https://rainbowcloudboard.vercel.app',
      lang: 'zh-CN',
      placeholder: ' ',
      locale: {
        placeholder: '咕咕嘎嘎',
        sofa: ' ',
      },
      dark: isDark.value,
      path: route.path,
    })
  } catch (e) {
    console.error('Waline 初始化失败:', e)
  }
}

const isMessageBoard = computed(() => route.path.includes('message'))

onMounted(() => {
  walineInstance = init({
    el: walineRef.value,
    serverURL: 'https://rainbowcloudboard.vercel.app',
    lang: 'zh-CN',
    dark: isDark.value,
    path: route.path,
  })
})

watch(() => route.path, () => {
  initWaline()
})

watch(isDark, (val) => {
  if (walineInstance?.update) {
    walineInstance.update({ dark: val })
  }
})

onBeforeUnmount(() => {
  if (walineInstance) {
    walineInstance.destroy()
  }
})
</script>

<style scoped>
.waline-container {
  margin-top: 2rem;
  padding: 0 1.5rem;
}
:deep(.wl-sofa) {
  display: none !important;
  visibility: hidden !important;
}
:deep(.wl-editor::placeholder) {
  color: transparent !important;
  opacity: 0 !important;
}
:deep(.wl-power) {
  display: none !important;
}
:deep(.wl-placeholder) {
  display: none !important;
}
</style>