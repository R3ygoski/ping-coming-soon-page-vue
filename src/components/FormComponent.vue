<script setup>
import {reactive} from 'vue'

    let submitStatusMessage = 'Please provide a valid email address'

    const inputEmail = reactive({
    email: '',
    error: false,
    success: false
    })

    const inputErrorHandler = (err) => {
    submitStatusMessage = err
    inputEmail.error = true
    console.log(submitStatusMessage)
    }

    const inputClear = () => {
        submitStatusMessage = 'Email successfully sent'
        inputEmail.email = ''
    }

    const checkInput = () => {
        if (inputEmail.email===''){
            inputErrorHandler('Email is empty')
        } else if (!inputEmail.email.includes('@')){
            inputErrorHandler('Email needs at least one @')
        } else if (!inputEmail.email.includes('.com')){
            inputErrorHandler('Email needs .com')
        } else {
            inputClear()
            inputEmail.success = true
            inputEmail.error = false
        }
    }
</script>
<template>
    <form @submit.prevent class="page__form">
      <input type="email" placeholder="Your email address..." v-model="inputEmail.email" 
      :class="[
        inputEmail.error?'page__form-email input_error':'page__form-email', 
        inputEmail.success?'page__form-email input_success':'page__form-email']" 
        />      
      <p v-if="inputEmail.error" class="page__form-error">{{ submitStatusMessage }}</p>
      <p v-if="inputEmail.success" class="page__form-success">{{ submitStatusMessage }}</p>
      <button @:click="checkInput" class="page__form-btn" type="submit">Notify Me</button>
    </form>
</template>