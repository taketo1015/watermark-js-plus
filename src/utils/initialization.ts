import { AdvancedStyleParamsType, TextAlignType, TextBaselineType, WatermarkOptions } from '../types'
import { getMultiLineData, isUndefined } from './index'

export const initializeOptions = (canvas: HTMLCanvasElement, options: WatermarkOptions, args: Partial<WatermarkOptions>) => {
  const ctx = canvas.getContext('2d')
  if (ctx === null) {
    throw new Error('get context error')
  }
  if (options?.rotate) {
    options.rotate = (360 - options.rotate % 360) * (Math.PI / 180)
  }
  if (isUndefined(args.textRowMaxWidth)) {
    options.textRowMaxWidth = options.width
  }
  const result = {
    image: {
      rect: {
        width: options.imageWidth,
        height: options.imageHeight
      },
      position: {
        x: 0,
        y: 0
      }
    },
    multiLine: {
      data: [] as string[]
    },
    advancedStyleParams: {
      linear: {
        x0: 0,
        x1: 0
      },
      radial: {
        x0: 0,
        y0: 0,
        r0: 0,
        x1: 0,
        y1: 0,
        r1: 0
      },
      conic: {},
      pattern: {}
    } as AdvancedStyleParamsType
  }
  switch (options.contentType) {
    // case 'text':
    //   break
    case 'image':
      // const image = new Image()
      // image.setAttribute('crossOrigin', 'Anonymous')
      // image.src = <string> options.image
      // image.onload = () => {
      //   const { width: imageWidth, height: imageHeight } = this.getImageRect(image)
      //   const imagePosition = this.getDrawImagePosition(imageWidth, imageHeight)
      // }
      break
    case 'multi-line-text':
      result.multiLine.data = getMultiLineData(ctx, options.content, <number> options.textRowMaxWidth)
      break
    case 'rich-text':
      break
  }
  let translateX: number = options.width / 2
  let translateY: number = options.height / 2
  let textBaseline: TextBaselineType = 'middle'
  let textAlign: TextAlignType = 'center'

  if (!isUndefined(args?.translateX) && !isUndefined(args?.translateY)) {
    translateX = <number> args?.translateX
    translateY = <number> args?.translateY
    textBaseline = 'top'
    textAlign = 'left'
  } else {
    // default middle
    // translateX = options.width / 2
    // translateY = options.height / 2
    // TextBaselineType = 'middle'
    // textAlign = 'center'
    result.advancedStyleParams.linear.x0 = -options.width / 2
    result.advancedStyleParams.linear.x1 = options.width / 2
    // this.result.advancedStyleParams.radial.x0 = 0
    // this.result.advancedStyleParams.radial.y0 = 0
    // this.result.advancedStyleParams.radial.r0 = 0
    // this.result.advancedStyleParams.radial.x1 = 0
    // this.result.advancedStyleParams.radial.y1 = 0
    result.advancedStyleParams.radial.r1 = options.width / 2
    // result.advancedStyleParams.conic.x = 0
    // result.advancedStyleParams.conic.y = 0
  }
  switch (args.translatePlacement) {
    case 'top':
      translateX = options.width / 2
      translateY = 0
      textBaseline = 'top'
      // textAlign = 'center'
      result.advancedStyleParams.linear.x0 = -options.width / 2
      result.advancedStyleParams.linear.x1 = options.width / 2
      // this.result.advancedStyleParams.radial.x0 = 0
      // this.result.advancedStyleParams.radial.y0 = 0
      // this.result.advancedStyleParams.radial.r0 = 0
      // this.result.advancedStyleParams.radial.x1 = 0
      // this.result.advancedStyleParams.radial.y1 = 0
      result.advancedStyleParams.radial.r1 = options.width / 2
      // result.advancedStyleParams.conic.x = 0
      // result.advancedStyleParams.conic.y = 0
      break
    case 'top-start':
      translateX = 0
      translateY = 0
      textBaseline = 'top'
      textAlign = 'start'
      result.advancedStyleParams.linear.x0 = 0
      result.advancedStyleParams.linear.x1 = options.width
      // this.result.advancedStyleParams.radial.x0 = 0
      // this.result.advancedStyleParams.radial.y0 = 0
      // this.result.advancedStyleParams.radial.r0 = 0
      // this.result.advancedStyleParams.radial.x1 = 0
      // this.result.advancedStyleParams.radial.y1 = 0
      result.advancedStyleParams.radial.r1 = options.width
      break
    case 'top-end':
      translateX = options.width
      translateY = 0
      textBaseline = 'top'
      textAlign = 'end'
      result.advancedStyleParams.linear.x0 = 0
      result.advancedStyleParams.linear.x1 = -options.width
      break
    case 'bottom':
      translateX = options.width / 2
      translateY = options.height
      textBaseline = 'bottom'
      // textAlign = 'center'
      result.advancedStyleParams.linear.x0 = -options.width / 2
      result.advancedStyleParams.linear.x1 = options.width / 2
      // this.result.advancedStyleParams.radial.x0 = 0
      // this.result.advancedStyleParams.radial.y0 = 0
      // this.result.advancedStyleParams.radial.r0 = 0
      // this.result.advancedStyleParams.radial.x1 = 0
      // this.result.advancedStyleParams.radial.y1 = 0
      result.advancedStyleParams.radial.r1 = options.width / 2
      break
    case 'bottom-start':
      translateX = 0
      translateY = options.height
      textBaseline = 'bottom'
      textAlign = 'start'
      result.advancedStyleParams.linear.x0 = 0
      result.advancedStyleParams.linear.x1 = options.width
      break
    case 'bottom-end':
      translateX = options.width
      translateY = options.height
      textBaseline = 'bottom'
      textAlign = 'end'
      result.advancedStyleParams.linear.x0 = 0
      result.advancedStyleParams.linear.x1 = -options.width
      break
    case 'left':
      translateX = 0
      translateY = options.height / 2
      // TextBaselineType = 'middle'
      textAlign = 'start'
      result.advancedStyleParams.linear.x0 = 0
      result.advancedStyleParams.linear.x1 = options.width
      break
    case 'right':
      translateX = options.width
      translateY = options.height / 2
      // TextBaselineType = 'middle'
      textAlign = 'end'
      result.advancedStyleParams.linear.x0 = 0
      result.advancedStyleParams.linear.x1 = -options.width
      break
  }
  options.translateX = translateX
  options.translateY = translateY
  options.textBaseline = textBaseline
  options.textAlign = textAlign

  return result
}
