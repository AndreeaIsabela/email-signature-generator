<template>
  <main>
    <TemplateCard 
      v-for="template in templatesPlaceholder" 
      :key="template.id"
      @click="goToTemplateDetails(template.id)"
      >
      <div v-html="template.placeholder"> </div>
    </TemplateCard>
  </main>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';
import { getTemplates } from '../api/template';

import TemplateCard from '../components/TemplateCard.vue';
import type { TemplatePreview } from '@/types/TemplatePreview';

const router = useRouter();
const templatesPlaceholder: Ref<TemplatePreview[] | undefined> = ref([]);

onBeforeMount(async () => {
  templatesPlaceholder.value = await getTemplates();
});

const goToTemplateDetails = (id: number): void => {
  router.push({
    name: 'details',
    params: { id }
  })
}

</script>