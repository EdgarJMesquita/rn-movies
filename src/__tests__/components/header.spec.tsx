import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { Header } from '../../components/Header';

describe('Header', () => {
  it('should exist title', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('header-title');
    expect(title.props.children).toContain('Filmes');
  });

  it('should be title font size 20', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('header-title');
    expect(title.props.style[0].fontSize).toBe(20);
  });

  it('should be title color #e5e5e5', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('header-title');
    expect(title.props.style[0].color).toBe('#e5e5e5');
  });

  it('should be title weight Inter_700Bold', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('header-title');
    expect(title.props.style[0].fontFamily).toBe('Inter_700Bold');
  });

  it('should render goBackButton when exists onGoBackPress', () => {
    const { getByTestId } = render(<Header onGoBackPress={() => {}} />);
    const goBackButton = getByTestId('goBackButton');
    expect(goBackButton).toBeTruthy();
  });
});
