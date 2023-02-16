<template>
  <div>
    <el-descriptions title="Basic" :column="2" border>
      <el-descriptions-item label="Width">
        <el-input-number v-model="modelValue.width" :min="1" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Height">
        <el-input-number v-model="modelValue.height" :min="1" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Rotate">
        <el-input-number v-model="modelValue.rotate" :max="360" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Mutation Observe">
        <el-switch v-model="modelValue.mutationObserve" active-text="Open" inactive-text="Close" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Unique">
        <el-switch v-model="modelValue.unique" active-text="Yes" inactive-text="No" @change="handleChange" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="Content" :column="2" border>
      <el-descriptions-item label="Content Type" :span="2">
        <el-select v-model="modelValue.contentType" placeholder="please select content type" @change="handleChange">
          <el-option label="text" value="text" />
          <el-option label="multi-line-text" value="multi-line-text" />
          <el-option label="image" value="image" />
          <el-option label="rich-text" value="rich-text" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item label="Content" :span="2">
        <el-input v-model="modelValue.content" :rows="3" type="textarea" placeholder="please input content" @input="handleChange" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="Position" :column="2" border>
      <el-descriptions-item label="Translate Placement" :span="2">
        <el-select v-model="modelValue.translatePlacement" placeholder="please select translate placement" @change="handleChange">
          <el-option label="middle" value="middle" />
          <el-option label="top" value="top" />
          <el-option label="top-start" value="top-start" />
          <el-option label="top-end" value="top-end" />
          <el-option label="bottom" value="bottom" />
          <el-option label="bottom-start" value="bottom-start" />
          <el-option label="bottom-end" value="bottom-end" />
          <el-option label="left" value="left" />
          <el-option label="right" value="right" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item label="Translate X">
        <el-input-number v-model="modelValue.translateX" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Translate Y">
        <el-input-number v-model="modelValue.translateY" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Background Position">
        <el-input v-model="modelValue.backgroundPosition" placeholder="please input background position" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Background Repeat">
        <el-input v-model="modelValue.backgroundRepeat" placeholder="please input background repeat"  @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Parent">
        <el-input v-model="modelValue.parent" placeholder="please input parent" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Z-Index">
        <el-input-number v-model="modelValue.zIndex" @input="handleChange" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="Rich Text" :column="2" border>
      <el-descriptions-item label="Rich Text Width">
        <el-input-number v-model="modelValue.richTextWidth" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Rich Text Height">
        <el-input-number v-model="modelValue.richTextHeight" @input="handleChange" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="Image" :column="2" border>
      <el-descriptions-item label="Image" :span="2">
        <el-input v-model="modelValue.image" :rows="3" type="textarea" placeholder="please input image url" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Image Width">
        <el-input-number v-model="modelValue.imageWidth" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Image Height">
        <el-input-number v-model="modelValue.imageHeight" @input="handleChange" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="Style" :column="2" border>
      <el-descriptions-item label="Global Alpha">
        <el-input-number v-model="modelValue.globalAlpha" :max="1" :precision="2" :step="0.1" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Mode">
        <el-select v-model="modelValue.mode" placeholder="please select mode" @change="handleChange">
          <el-option label="default" value="default" />
          <el-option label="blind" value="blind" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item label="Text Type">
        <el-select v-model="modelValue.textType" placeholder="please select text type" @change="handleChange">
          <el-option label="fill" value="fill" />
          <el-option label="stroke" value="stroke" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item label="Line Height">
        <el-input-number v-model="modelValue.lineHeight" @change="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Font Size">
        <el-input v-model="modelValue.fontSize" placeholder="please input font size" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Font Family">
        <el-input v-model="modelValue.fontFamily" placeholder="please input font family" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Font Style">
        <el-input v-model="modelValue.fontStyle" placeholder="please input font style" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Font Variant">
        <el-input v-model="modelValue.fontVariant" placeholder="please input font variant" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Font Color">
        <el-input v-model="modelValue.fontColor" placeholder="please input font color" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Font Weight">
        <el-input v-model="modelValue.fontWeight" placeholder="please input font weight" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="Text Align">
        <el-select v-model="modelValue.textAlign" placeholder="please select text align" @change="handleChange">
          <el-option label="center" value="center" />
          <el-option label="end" value="end" />
          <el-option label="left" value="left" />
          <el-option label="right" value="right" />
          <el-option label="start" value="start" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item label="Text Baseline">
        <el-select v-model="modelValue.textAlign" placeholder="please select text baseline" @change="handleChange">
          <el-option label="alphabetic" value="alphabetic" />
          <el-option label="hanging" value="hanging" />
          <el-option label="ideographic" value="ideographic" />
          <el-option label="top" value="top" />
          <el-option label="bottom" value="bottom" />
          <el-option label="middle" value="middle" />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item label="Filter">
        <el-input v-model="modelValue.filter" placeholder="please input filter" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="TextRowMaxWidth">
        <el-input-number v-model="modelValue.textRowMaxWidth" @input="handleChange" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="Shadow" :column="2" border>
      <template #title>
        <el-checkbox v-model="form.shadow.enabled" @change="handleChangeShadowEnabled">Shadow</el-checkbox>
      </template>
      <el-descriptions-item label="shadowBlur">
        <el-input-number v-model="modelValue.shadowStyle.shadowBlur" :disabled="!form.shadow.enabled" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="shadowColor">
        <el-input v-model="modelValue.shadowStyle.shadowColor" :disabled="!form.shadow.enabled" placeholder="please input shadow color" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="shadowOffsetX">
        <el-input-number v-model="modelValue.shadowStyle.shadowOffsetX" :disabled="!form.shadow.enabled" @input="handleChange" />
      </el-descriptions-item>
      <el-descriptions-item label="shadowOffsetY">
        <el-input-number v-model="modelValue.shadowStyle.shadowOffsetY" :disabled="!form.shadow.enabled" @input="handleChange" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="Advanced Style" :column="2" border>
      <template #title>
        <el-checkbox v-model="form.advancedStyle.enabled" @change="handleChangeAdvancedStyleEnabled">Advanced Style</el-checkbox>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const props = defineProps({
  options: {
    type: Object
  },
  modelValue: {
    type: Object,
    required: true,
    default: () => ({
      width: 200,
      height: 200,
      rotate: 0,
      globalAlpha: 0.5,
      zIndex: 10000,
      mutationObserve: true,
      unique: true,
      mode: 'default',
      parent: 'body',
      backgroundPosition: '0 0, 0 0',
      backgroundRepeat: 'repeat',
      translatePlacement: 'middle',
      translateX: undefined,
      translateY: undefined,
      contentType: 'text',
      content: 'this is my new watermark',
      textType: 'fill',
      textRowMaxWidth: undefined,
      lineHeight: 30,
      fontSize: '20px',
      fontFamily: 'sans-serif',
      fontStyle: '',
      fontVariant: '',
      fontColor: '#000',
      fontWeight: 'normal',
      textAlign: undefined,
      textBaseline: undefined,
      filter: 'none',
      richTextWidth: undefined,
      richTextHeight: undefined,
      image: '',
      imageWidth: undefined,
      imageHeight: undefined,
      shadowStyle: {
        shadowBlur: 0,
        shadowColor: '#00000000',
        shadowOffsetX: 0,
        shadowOffsetY: 0
      },
      advancedStyle: '',
      extraDrawFunc: '',
      onSuccess: '',
      onBeforeDestroy: '',
      onDestroyed: ''
    })
  },
})

const form = reactive({
  shadow: {
    enabled: false
  },
  advancedStyle: {
    enabled: false
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

let eventFlag: NodeJS.Timeout

// watch(mdl, (newVal: any) => emit('update:modelValue', newVal), {
//   deep: true
// })

const handleChange = () => {
  if (eventFlag) {
    clearTimeout(eventFlag)
  }
  eventFlag = setTimeout(() => {
    emit('update:modelValue', props.modelValue)
    emit('change', props.modelValue)
  }, 100)
}

const handleChangeShadowEnabled = () => {
  if (form.shadow.enabled) {
  }
}

const handleChangeAdvancedStyleEnabled = () => {
}
</script>

<style scoped>
:deep(table) {
  display: table;
  margin: 0;
}
.el-descriptions :deep(.el-descriptions__header) {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
