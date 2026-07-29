// Test de verificación: confirma que el entorno de testing está correctamente configurado.
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Configuración de testing', () => {
  it('renderiza App sin errores', () => {
    render(<App />);
    // Buscamos el texto que dejamos en App.tsx en el paso anterior
    expect(screen.getByText(/Proyecto en construcción/i)).toBeInTheDocument();
  });
});