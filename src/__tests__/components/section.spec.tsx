import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Section } from '../../components/Section';

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('Section', () => {
  it('should exist title', () => {
    const { getByTestId } = render(
      <Section title="Populares" category="popular" />,
      { wrapper },
    );
    const title = getByTestId('title');
    expect(title.props.children).toContain('Populares');
  });

  it("title's font size should be 18", () => {
    const { getByTestId } = render(
      <Section title="Populares" category="popular" />,
      { wrapper },
    );
    const title = getByTestId('title');
    expect(title.props.style[0].fontSize).toBe(20);
  });

  it("title's color should be #e5e5e5", () => {
    const { getByTestId } = render(
      <Section title="Populares" category="popular" />,
      { wrapper },
    );
    const title = getByTestId('title');
    expect(title.props.style[0].color).toBe('#e5e5e5');
  });

  it("title's font family should be Inter_700Bold", () => {
    const { getByTestId } = render(
      <Section title="Populares" category="popular" />,
      { wrapper },
    );
    const title = getByTestId('title');
    expect(title.props.style[0].fontFamily).toBe('Inter_700Bold');
  });
});
