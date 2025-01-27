<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, index) in templateDetails?.requirements" :key="index" class="form-group">
        <label :for="field.name">{{ field.name }}</label>
        <input
          v-if="field.type === 'text' || field.type === 'email' || field.type === 'tel'"
          :type="field.type"
          :id="field.name"
          :name="field.name"
          v-model="formData[field.name]"
          class="input-field"
          :placeholder="getPlaceholder(field.type)"
        />
        <input
          v-else-if="field.type === 'file'"
          type="file"
          :id="field.name"
          :name="field.name"
          @change="handleFileUpload"
          class="input-field"
        />
        <p v-else class="error-message">Unsupported field type: {{ field.type }}</p>
      </div>
      <p v-if="displayError" class="error-message">All fields must be filled</p>
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script setup lang='ts'>
import { ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import type { Ref } from 'vue';
import type { TemplateDetails } from '@/types/TemplateDetails';

import { generateTemplate } from '@/api/template'
import { getTemplateDetails } from '../api/template';

const route = useRoute();
const router = useRouter();

const formData = ref<Record<string, string | File | null>>({}); 
const templateDetails: Ref<TemplateDetails | undefined> = ref({
  id: 0,
  requirements:[]
});
const displayError: Ref<boolean> = ref(false);

onBeforeMount(async () => {
  templateDetails.value = await getTemplateDetails(parseInt(route.params.id as string));
  
  templateDetails.value?.requirements.forEach((requirement) => {
    formData.value[requirement.name] = requirement.type === 'file' ? null : '';
  });
});

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input?.files?.[0] || null;
  if (input?.name) {
    formData.value[input.name] = file;
  }
};

const getPlaceholder = (type: string) => {
  if (type === 'text') return 'Enter your text';
  if (type === 'email') return 'Enter your email';
  if (type === 'tel') return 'Enter your phone number';
  return '';
};

const isFormValid = () => {
  for (let key in formData.value) {
    const value = formData.value[key];
    
    if (value === "" || value === null || value === undefined) {
      return false;
    }
  }
  return true;
}

const handleSubmit = async () => {
  displayError.value = !isFormValid();
  if(displayError.value) {
    return;
  }
  await generateTemplate(formData.value, parseInt(route.params.id as string));
  router.push({name: 'generated'})
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-field:focus {
  border-color: #007bff;
  outline: none;
}

.submit-button {
  padding: 0.7rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #fff; 
  background-color: #f44336;
  border: 1px solid #d32f2f;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 10px;
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
</style>