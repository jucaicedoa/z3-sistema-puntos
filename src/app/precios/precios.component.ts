import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  COMBOS_PUNTOS,
  ETIQUETA_TURNO_COMBO,
  ETIQUETA_TURNO_COMBO_CORTA,
  type ComboPuntosRow,
} from '../data/combos-puntos.data';

export type { ComboPuntosRow as ComboRow };

@Component({
  selector: 'app-precios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.scss',
})
export class PreciosComponent {
  readonly combos: ComboPuntosRow[] = COMBOS_PUNTOS;
  readonly etiquetaTurnoCombo = ETIQUETA_TURNO_COMBO;
  readonly etiquetaTurnoComboCorta = ETIQUETA_TURNO_COMBO_CORTA;
}