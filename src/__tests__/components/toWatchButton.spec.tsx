import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ToWatchButton } from '../../components/ToWatchButton';

describe('WatchButton watched=false', () => {
  it(' should render title correctly', () => {
    const { getByTestId } = render(<ToWatchButton watched={false} />);
    const title = getByTestId('title');
    expect(title.props.children).toContain('Adicionar para assistir');
  });

  it('should be background color #0f79af', () => {
    const { getByTestId } = render(<ToWatchButton watched={false} />);
    const button = getByTestId('button');
    expect(button.props.style.backgroundColor).toBe('#0f79af');
  });

  it('should be background color #0f79af', () => {
    const { getByTestId } = render(<ToWatchButton watched={false} />);
    const button = getByTestId('button');
    expect(button.props.style.borderWidth).toBe(2);
  });
});

describe('ToWatchButton watched=true', () => {
  it(' should render title correctly', () => {
    const { getByTestId } = render(<ToWatchButton watched={true} />);
    const title = getByTestId('title');
    expect(title.props.children).toContain('Remover de assistir');
  });

  it('should be background color #0f79af', () => {
    const { getByTestId } = render(<ToWatchButton watched={true} />);
    const button = getByTestId('button');
    expect(button.props.style.backgroundColor).toBe('transparent');
  });

  it('should be background color #0f79af', () => {
    const { getByTestId } = render(<ToWatchButton watched={true} />);
    const button = getByTestId('button');
    expect(button.props.style.borderWidth).toBe(2);
  });
});
