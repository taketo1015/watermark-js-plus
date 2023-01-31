import { getCurrentInstance } from 'vue'
import { useData } from 'vitepress'
import { Watermark } from '../../src'

const app = getCurrentInstance()
const { isDark } = useData()

export default () => {
  const watermark = new Watermark({
    content: 'hello my text watermark',
    width: 200,
    height: 200,
    onSuccess: () => {
      app?.appContext.config.globalProperties.$message({
        message: 'The text watermark added successfully!',
        type: 'success'
      })
    }
  })
  return {
    create: () => {
      if (isDark.value) {
        watermark.changeOptions({
          fontColor: '#fff'
        })
      }
      watermark.create()
    },
    destroy: watermark.destroy
  }
}
