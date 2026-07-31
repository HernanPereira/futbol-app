// football.types.ts
// Define la forma de los datos que devuelve la API de football-data.org.
// Tener estos tipos centralizados nos permite reusarlos en servicios,
// componentes y tests, y evita repetir estructuras "a mano" por todo el proyecto.

/**
 * Estados posibles de un partido según la API.
 * Usamos un "union type" en vez de "string" a secas: esto le dice a TypeScript
 * que MatchStatus solo puede ser uno de estos valores exactos, nada más.
 * Si en algún lado del código escribimos mal un estado (ej: "SCHEDULE"),
 * TypeScript nos va a marcar error en tiempo de compilación.
 */
export type MatchStatus =
  | 'SCHEDULED'
  | 'LIVE'
  | 'IN_PLAY'
  | 'PAUSED'
  | 'FINISHED'
  | 'POSTPONED'
  | 'SUSPENDED'
  | 'CANCELLED';


/**
 * Representa un equipo de fútbol dentro de un partido.
 * Es una interfaz porque describe la "forma" de un objeto (sus propiedades),
 * que es el uso más común de interface en TypeScript.
 */
export interface Team {
  /** Identificador único del equipo, provisto por la API. */
  id: number;
  /** Nombre completo del equipo (ej: "Real Madrid CF"). */
  name: string;
  /** Nombre corto, útil para mostrar en espacios reducidos (ej: "Real Madrid"). */
  shortName: string;
  /** URL del escudo/logo del equipo. Puede venir null si la API no lo tiene cargado. */
  crest: string | null;
}

/**
 * Resultado del partido en el momento consultado.
 * Los campos "home" y "away" son "number | null" porque, si el partido
 * todavía no empezó, la API devuelve null en vez de 0.
 * Es importante distinguir "no hay dato todavía" (null) de "el resultado es 0".
 */
export interface MatchScore {
  /** Ganador del partido: "HOME_TEAM", "AWAY_TEAM", "DRAW", o null si no terminó. */
  winner: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null;
  fullTime: {
    home: number | null;
    away: number | null;
  };
}

/**
 * Información básica de la competición a la que pertenece el partido.
 */
export interface Competition {
  id: number;
  name: string;
}

/**
 * Representa un partido completo, combinando los tipos anteriores.
 * Esta es la interfaz "principal" que vamos a usar en los componentes.
 */
export interface Match {
  id: number;
  /** Fecha y hora del partido en formato ISO 8601 UTC (ej: "2026-08-15T18:30:00Z"). */
  utcDate: string;
  /** type definido */
  status: MatchStatus;
  /** Número de jornada dentro de la competición. */
  matchday: number;
  /** interface definido */
  homeTeam: Team;
  /** interface definido */
  awayTeam: Team;
  /** interface definido */
  score: MatchScore;
  /** interface definido */
  competition: Competition;
}

/**
 * Forma completa de la respuesta del endpoint /v4/competitions/{code}/matches.
 * Tipar la respuesta completa (no solo el array de partidos) nos permite
 * validar que estamos leyendo el JSON de la API correctamente en el servicio.
 */
export interface MatchesResponse {
  /** interface definido */
  matches: Match[]; 
}