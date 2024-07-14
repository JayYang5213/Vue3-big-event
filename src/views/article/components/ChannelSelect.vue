<script setup>
import { artGetChannelsService } from '@/api/article'
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: [Number, String],
  },
  width: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

const channelList = ref([])

const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
}

getChannelList()
</script>

<template>
  <!-- 子传父 -->
  <el-select
    placeholder="请选择"
    style="width: 240px"
    :modelValue="modelValue"
    :style="{ width }"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <el-option
      v-for="channel in channelList"
      :key="channel.id"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
  </el-select>
</template>
