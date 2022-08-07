import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { WatchButton } from '../../components/WatchButton';

describe('WatchButton watched=false', () => {
  it(' should render title correctly', () => {
    const { getByTestId } = render(<WatchButton watched={false} />);
    const title = getByTestId('title');
    expect(title.props.children).toContain('Adicionar para assistido');
  });

  it('should be background color #0f79af', () => {
    const { getByTestId } = render(<WatchButton watched={false} />);
    const button = getByTestId('button');
    expect(button.props.style.backgroundColor).toBe('#0f79af');
  });

  it('should be background color #0f79af', () => {
    const { getByTestId } = render(<WatchButton watched={false} />);
    const button = getByTestId('button');
    expect(button.props.style.borderWidth).toBe(2);
  });
});

describe('WatchButton watched=true', () => {
  it(' should render title correctly', () => {
    const { getByTestId } = render(<WatchButton watched={true} />);
    const title = getByTestId('title');
    expect(title.props.children).toContain('Remover de assistido');
  });

  it('should be background color #0f79af', () => {
    const { getByTestId } = render(<WatchButton watched={true} />);
    const button = getByTestId('button');
    expect(button.props.style.backgroundColor).toBe('transparent');
  });

  it('should be background color #0f79af', () => {
    const { getByTestId } = render(<WatchButton watched={true} />);
    const button = getByTestId('button');
    expect(button.props.style.borderWidth).toBe(2);
  });
});
