/** Combos con precio y puntos Z3 por compra (ponderado; no todos suman igual). */
export type ComboTurnoZ3 = 'mañana' | 'noche';

export interface ComboPuntosRow {
  item: string;
  price: string;
  puntos: number;
  /** Desde CHORIZO en adelante: turno noche. */
  turno: ComboTurnoZ3;
}

/** Texto fijo para tablas (precios / puntos). */
export const ETIQUETA_TURNO_COMBO: Record<ComboTurnoZ3, string> = {
  mañana: 'Turno mañana',
  noche: 'Turno noche',
};

/** Versión corta en móvil (leyenda debajo de la tabla). */
export const ETIQUETA_TURNO_COMBO_CORTA: Record<ComboTurnoZ3, string> = {
  mañana: 'Turno M',
  noche: 'Turno N',
};

export const COMBOS_PUNTOS: ComboPuntosRow[] = [
  { item: 'COMBO BUÑUELOS 1 (5 BUÑUELOS)', price: '$5.000', puntos: 1, turno: 'mañana' },
  { item: 'COMBO BUÑUELOS 2 (5 BUÑUELOS + CAFÉ/TINTO)', price: '$5.500', puntos: 1.5, turno: 'mañana' },
  { item: 'COMBO BUÑUELOS RELLENOS 1 (4 BUÑUELOS RELLENOS)', price: '$5.000', puntos: 1, turno: 'mañana' },
  { item: 'COMBO BUÑUELOS RELLENOS 2 (4 BUÑUELOS Y 1 CAFÉ/TINTO)', price: '$5.500', puntos: 1.5, turno: 'mañana' },
  { item: 'COMBO EMPANADAS 1 (3 EMPANADAS)', price: '$9.000', puntos: 2, turno: 'mañana' },
  { item: 'COMBO EMPANADAS 2 (3 EMPANADAS + VASO DE GASEOSA)', price: '$9.500', puntos: 2.5, turno: 'mañana' },
  { item: 'CHORIZO (PAPA, LIMÓN, CHORIZO, TOPPING)', price: '$9.000', puntos: 2.5, turno: 'noche' },
  {
    item: 'CHORIZO COMBO (2 CHORIZOS + 2 ACOMPAÑAMIENTOS: PAPA/AREPA/ENSALADA, 2 VASOS DE GASEOSA)',
    price: '$16.000',
    puntos: 4.5,
    turno: 'noche',
  },
  { item: 'CHUZO POLLO (PAPA,LIMÓN, CHUZO POLLO, TOPPING)', price: '$13.000', puntos: 3.5, turno: 'noche' },
  {
    item: 'CHUZO POLLO COMBO (2 CHUZOS POLLO + 2 ACOMPAÑAMIENTOS: PAPA/AREPA/ENSALADA,  2 VASOS DE GASEOSA)',
    price: '$22.000',
    puntos: 5.5,
    turno: 'noche',
  },
];

export interface NivelZ3 {
  nivel: number;
  nombre: string;
  /** Compras en el local en la semana (corte domingo). */
  comprasSemanales: number;
  /** Suma mínima de puntos base de la tabla en esa misma semana (sin multiplicar). */
  puntosMetaSemanal: number;
  /** Factor que multiplica los puntos base de la semana si cumples compras + meta. */
  multiplicador: number;
}

/**
 * Compras semanales 4 / 6 / 9 y metas de puntos base alineadas a la tabla (incluye medios).
 */
export const NIVELES_Z3: NivelZ3[] = [
  { nivel: 1, nombre: 'El antojado', comprasSemanales: 4, puntosMetaSemanal: 9, multiplicador: 1.08 },
  { nivel: 2, nombre: 'El frecuente', comprasSemanales: 6, puntosMetaSemanal: 15, multiplicador: 1.2 },
  { nivel: 3, nombre: 'El fanático', comprasSemanales: 9, puntosMetaSemanal: 28, multiplicador: 1.35 },
];

export interface BeneficioSemanaSiguienteZ3 {
  id: 'bronce' | 'plata' | 'oro';
  titulo: string;
  detalle: string;
}

/** Lo que corresponde a cada nivel la semana siguiente (rifas / descuentos). */
export const BENEFICIOS_SEMANA_SIGUIENTE_Z3: BeneficioSemanaSiguienteZ3[] = [
  {
    id: 'bronce',
    titulo: 'Bronce',
    detalle:
      'Sorteo de 1 combo a elección entre los combos del turno mañana, y 3% de descuento en los combos de ambos turnos.',
  },
  {
    id: 'plata',
    titulo: 'Plata',
    detalle: 'Sorteo de 2 combos a elección del turno mañana y 5% de descuento en los combos de ambos turnos.',
  },
  {
    id: 'oro',
    titulo: 'Oro',
    detalle: 'Sorteo de arroz para 4 personas y 10% de descuento en los combos de ambos turnos.',
  },
];
