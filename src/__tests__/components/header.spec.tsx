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

  it('should be title font size 18', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('header-title');
    expect(title.props.style[0].fontSize).toBe(18);
  });

  it('should be title color', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('header-title');
    expect(title.props.style[0].color).toBe('#FFFFFF');
  });

  it('should be title weight bold', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('header-title');
    expect(title.props.style[0].fontWeight).toBe('bold');
  });

  it('should render goBackButton when exists onGoBackPress', () => {
    const { getByTestId } = render(<Header onGoBackPress={() => {}} />);
    const goBackButton = getByTestId('goBackButton');
    expect(goBackButton).toBeTruthy();
  });
});
