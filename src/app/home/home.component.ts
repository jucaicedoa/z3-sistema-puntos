import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  BENEFICIOS_SEMANA_SIGUIENTE_Z3,
  COMBOS_PUNTOS,
  ETIQUETA_TURNO_COMBO,
  ETIQUETA_TURNO_COMBO_CORTA,
  NIVELES_Z3,
} from '../data/combos-puntos.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly combosPuntos = COMBOS_PUNTOS;
  readonly nivelesZ3 = NIVELES_Z3;
  readonly beneficiosSemanaSiguiente = BENEFICIOS_SEMANA_SIGUIENTE_Z3;
  readonly etiquetaTurnoCombo = ETIQUETA_TURNO_COMBO;
  readonly etiquetaTurnoComboCorta = ETIQUETA_TURNO_COMBO_CORTA;

  /** Multiplicador semanal (coma decimal). */
  formatoMultiplicador(valor: number): string {
    return `×${valor.toFixed(2).replace('.', ',')}`;
  }

  /** Puntos base en pantalla (coma decimal; sin ,0 en enteros). */
  formatoPuntosBase(valor: number): string {
    if (valor % 1 === 0) {
      return String(valor);
    }
    return valor.toFixed(1).replace('.', ',');
  }

  /** Nombre del combo para el home, sin el detalle entre paréntesis al final. */
  nombreComboSinDetalle(item: string): string {
    return item.replace(/\s*\([^)]*\)\s*$/u, '').trim();
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
