// Footer.test.tsx
// Verifica el comportamiento visible del componente Footer:
// que muestre el copyright con el autor, y el link solo cuando corresponde.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('muestra el copyright con el autor y el año actual', () => {
    render(<Footer author="Hernán" />);
    const currentYear = new Date().getFullYear();
    // Usamos una regex para no depender del formato exacto del texto,
    // solo verificamos que aparezcan el año y el nombre del autor juntos.
    expect(screen.getByText(new RegExp(`${currentYear}.*Hernán`))).toBeInTheDocument();
  });

  it('muestra el link cuando se proporciona', () => {
    render(<Footer author="Hernán" link="https://github.com/test" />);
    const linkElement = screen.getByRole('link', { name: /ver repositorio/i });
    // Verificamos que el link exista Y que apunte a la URL correcta
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://github.com/test');
  });

  it('no renderiza el link si no se proporciona', () => {
    render(<Footer author="Hernán" />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});