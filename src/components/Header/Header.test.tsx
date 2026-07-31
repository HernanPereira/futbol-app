// Header.test.tsx
// Verifica el comportamiento visible del componente Header:
// que muestre el título siempre, y el subtítulo solo cuando se lo pasamos.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('muestra el título recibido por props', () => {
    render(<Header title="Fútbol App" />);
    expect(screen.getByText('Fútbol App')).toBeInTheDocument();
  });

  it('muestra el subtítulo cuando se proporciona', () => {
    render(<Header title="Fútbol App" subtitle="Resultados en vivo" />);
    expect(screen.getByText('Resultados en vivo')).toBeInTheDocument();
  });

  it('no renderiza subtítulo si no se proporciona', () => {
    render(<Header title="Fútbol App" />);
    // queryByText devuelve null si no encuentra el elemento (no falla como getByText)
    // por eso se usa para verificar la AUSENCIA de algo.
    expect(screen.queryByText('Resultados en vivo')).not.toBeInTheDocument();
  });
})