<script setup>
import { ref } from 'vue'
import CryptoJS from 'crypto-js'

const props=defineProps(['hash'])
const userInput = ref('')
const isCorrect = ref(false)
const error = ref(false)

const verify=() => {
  const inputHash = CryptoJS.SHA256(userInput.value).toString()
  if (inputHash === props.hash) {
    isCorrect.value = true
    error.value = false
  } else {
    error.value = true
    userInput.value = ''
  }
}
</script>

<template>
    <div class="password-box">
        <div v-if="!isCorrect">
            <input
            v-model="userInput"
            type="password"
            placeholder="请输入门钥匙"
            @keyup.enter="verify"
            />
            <button @click="verify">完成</button>
            <p v-if="isCorrect" class="success">欢迎访问！</p>
            <p v-if="error" class="error">密码错误。请重试。</p>
        </div>

        <div v-else class="vp-doc">
            <p class="success">欢迎访问！</p>
            <slot /> 
        </div>
    </div>
</template>

