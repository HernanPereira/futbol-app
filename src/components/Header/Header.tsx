// Header.tsx
// Componente de encabezado de la aplicación.
// Se encarga únicamente de mostrar el título de la app y, opcionalmente,
// un subtítulo recibido por props. No maneja lógica de negocio.

// Definimos la interfaz de las props que recibe el componente.
// Usar una interfaz (en vez de "any" o tipos sueltos) nos da autocompletado
// y errores en tiempo de compilación si alguien usa el componente mal.

import type { FC } from 'react';

interface HeaderProps {
  /** Título principal que se muestra en el header. Obligatorio. */
  title: string;
  /** Subtítulo opcional. Si no se pasa, no se renderiza. */
  subtitle?: string;
}

// Componente funcional tipado con React.FC<HeaderProps>.
// Alternativa: function Header({ title, subtitle }: HeaderProps) — ambas son válidas,
// acá usamos React.FC para dejar explícito que es un Function Component.
const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header>
      {/* Título principal, siempre presente porque "title" es obligatorio */}
      <h1>{title}</h1>

      {/* Renderizado condicional: solo se muestra si "subtitle" existe.
          El "&&" es un patrón común en React: si subtitle es undefined o "",
          no se renderiza nada; si tiene valor, se renderiza el <p>. */}
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
};

export default Header;