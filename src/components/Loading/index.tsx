import AnimatedLottieView, {
  AnimatedLottieViewProps,
} from 'lottie-react-native';
import LoadingMovie from '../../assets/animations/loading.json';

type Props = {
  size?: number;
  style?: AnimatedLottieViewProps['style'];
};

export function Loading({ size = 30, style }: Props) {
  return (
    <AnimatedLottieView
      source={LoadingMovie}
      autoPlay
      loop
      style={[{ width: size, height: size, marginLeft: -3 }, style]}
    />
  );
}
