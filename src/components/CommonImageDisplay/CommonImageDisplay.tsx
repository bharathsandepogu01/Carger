import React from 'react';
import { View, Image} from 'react-native';

import Styles from './CommonImageDisplay.styles';

const CommonImageDisplay = (props: CommonComponentsNS.IDisplayImageProps) => {

    return (
        <View style={[Styles.container, props.imageContainerStyle]}>
            <Image
                style={[Styles.tinyLogo, props.imgStyle]}
                source={props.imagePath}
            />
        </View>
    );
}

export default React.memo(CommonImageDisplay);