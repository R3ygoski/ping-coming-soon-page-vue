<script setup>
import {reactive} from 'vue'

    let errorMessage = 'Please provide a valid email address'

    const inputEmail = reactive({
    email: '',
    error: false
    })

    const inputErrorHandler = (err) => {
    errorMessage = err
    inputEmail.error = true
    console.log(errorMessage)
    }

    const checkInput = () => {
        if (inputEmail.email===''){
            inputErrorHandler('Email is empty')
        } else if (!inputEmail.email.includes('@')){
            inputErrorHandler('Email needs at least one @')
        } else if (!inputEmail.email.includes('.com')){
            inputErrorHandler('Email needs .com')
        } else {
            inputEmail.error = false
        }
    }
</script>
<template>
    <form @submit.prevent class="page__form">
      <input :class="[inputEmail.error?'page__form-email input_error':'page__form-email']" type="email" placeholder="Your email address..." v-model="inputEmail.email"/>      
      <p v-if="inputEmail.error" class="page__form-error">{{ errorMessage }}</p>
      <button @:click="checkInput" class="page__form-btn" type="submit">Notify Me</button>
    </form>
</template>