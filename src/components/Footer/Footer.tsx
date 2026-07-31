// Footer.tsx
// Componente de pie de página de la aplicación.
// Muestra el copyright con el año actual calculado dinámicamente,
// y opcionalmente un link (por ejemplo, al repositorio del proyecto).

import type { FC } from "react";

// Definimos la interfaz de las props que recibe el componente.
interface FooterProps {
  /** Nombre del autor/proyecto para mostrar en el copyright. Obligatorio. */
  author: string;
  /** URL opcional (ej: GitHub, LinkedIn). Si no se pasa, no se renderiza el link. */
  link?: string;
}

const Footer: FC<FooterProps> = ({author, link}) => {
  // Calculamos el año actual con el objeto Date de JavaScript.
  // Esto evita tener que actualizar el año a mano cada vez que pasa un año.
  // "currentYear" es de tipo "number" (inferido automáticamente por TypeScript).
  const currentYear = new Date().getFullYear();

  return(
    <footer>
      {/* Template literal para combinar texto fijo con variables dinámicas */}
      <p>© {currentYear} {author}</p>

      {/* Renderizado condicional: el link solo se muestra si "link" tiene valor */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">Ver repositorio</a>
      )}
    </footer>
  )
}

export default Footer;