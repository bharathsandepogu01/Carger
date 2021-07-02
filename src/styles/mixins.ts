import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size:number) => (WINDOW_WIDTH/guidelineBaseWidth) * size;

export const scaleFont = (size:number) => size * PixelRatio.getFontScale();

export const boxShadow = (
    color:string, 
    offset:MixinNS.IOffSet = {height:2,width:2},
    radius:number = 8, 
    opacity:number = 0.2
) => {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
};

