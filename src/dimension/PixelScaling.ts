import { Dimensions, PixelRatio } from 'react-native';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  const scale = SCREEN_WIDTH / 375;
  const scaleVertical = SCREEN_HEIGHT / 812;
  export function actuatedNormalize(size) {
    const newSize = size * scale
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
  }
  export function actuatedNormalizeVertical(size) {
    const newSize = size * scaleVertical
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
  }
  export function isTab() {
    if (SCREEN_WIDTH > 550) {
      return true
    } else {
      return false
    }
  }
  
  export function isScreenHeight770() {
    if (SCREEN_HEIGHT > 740 && SCREEN_HEIGHT < 760 ) {
      return true
    } else {
      return false
    }
  }
  