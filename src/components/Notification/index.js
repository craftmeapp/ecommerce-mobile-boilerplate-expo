import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    }
  }

  componentDidMount() {
    const { onAnimationEnd } = this.props;

    this.getAnimation().start(onAnimationEnd);
  }

  getAnimation() {
    return Animated.sequence([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 100,
          duration: 1000,
        }
      ),
      Animated.timing(
        this.state.fadeAnim,
        {
          delay: 2000,
          toValue: 0,
          duration: 1000,
        }
      )
    ]);
  }

  getBackgroundColor() {
    const { type } = this.props;

    if (type === 'error')
      return 'tomato';
    
    if (type === 'warning')
      return 'yellow';

    return 'limegreen';
  }

  render() {
    const { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          top: -100,
          position: 'absolute',
          height: 100,
          backgroundColor: this.getBackgroundColor(),
          transform: [{translateY: fadeAnim}],
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
