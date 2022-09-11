import { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import { Title } from './styles';

type LabelProps = TextProps & {
	color: string;
	children: ReactNode;
};

export function Label({ color, children, ...rest }: LabelProps) {
	return (
		<Title color={color} {...rest}>
			{children}
		</Title>
	);
}
