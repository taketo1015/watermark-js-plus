---
layout: doc
---
# Text Watermark

<script setup lang="ts">
import { reactive, getCurrentInstance, onMounted } from 'vue';
import { Watermark } from '../../../src';
import { useData } from 'vitepress';
import WatermarkOptionsForm from '../../components/WatermarkOptionsForm.vue';

const { isDark } = useData();
const app = getCurrentInstance();
// const watermarkOptions = reactive({
//   width: 200,
//   height: 200,
//   rotate: 45,
//   contentType: 'text',
//   content: 'this is my new watermark'
// });
const watermarkOptions = reactive({
  width: 200,
  height: 200,
  rotate: 45,
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
  advancedStyle: ''
  // extraDrawFunc: '',
  // onSuccess: '',
  // onBeforeDestroy: '',
  // onDestroyed: ''
});

// text watermark
const textWatermark = new Watermark(watermarkOptions);
const handleAddTextWatermark = () => {
  // if (isDark.value) {
  //   textWatermark.options.fontColor = '#fff'
  // }
  textWatermark.create();
};
const handleRemoveTextWatermark = () => {
  textWatermark.destroy();
};
const handleChangeOptions = () => {
  textWatermark.changeOptions(watermarkOptions);
};
</script>

<WatermarkOptionsForm
  v-model="watermarkOptions"
  @change="handleChangeOptions"
/>

```js-vue
import { Watermark } from 'watermark-js-plus' // import watermark plugin

const watermark = new Watermark({{ watermarkOptions }})

watermark.create() // add watermark

watermark.destroy() // remove watermark
```

<el-space>
  <el-button round type="primary" @click="handleAddTextWatermark">Add Watermark</el-button>
  <el-button round type="danger" @click="handleRemoveTextWatermark">Remove Watermark</el-button>
</el-space>
