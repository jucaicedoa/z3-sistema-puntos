import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface ComboRow {
  item: string;
  price: string;
}

@Component({
  selector: 'app-precios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.scss',
})
export class PreciosComponent {
  readonly combos: ComboRow[] = [
    { item: 'COMBO BUÑUELOS (5 BUÑUELOS)', price: '$5.000' },
    { item: 'COMBO BUÑUELOS (5 BUÑUELOS) + CAFÉ/TINTO', price: '$5.500' },
    { item: 'COMBO BUÑUELOS RELLENOS (4 BUÑUELOS)', price: '$5.000' },
    { item: 'COMBO BUÑUELOS RELLENOS (4 BUÑUELOS Y 1 CAFÉ/TINTO)', price: '$5.500' },
    { item: 'COMBO EMPANADAS (3 EMPANADAS)', price: '$9.000' },
    { item: 'COMBO EMPANADAS (3 EMPANADAS + GASEOSA)', price: '$9.500' },
    { item: 'CHORIZO (PAPA, LIMÓN, CHORIZO, TOPPING)', price: '$9.000' },
    { item: 'CHORIZO COMBO (2 CHORIZOS + 2 ACOMPAÑAMIENTOS: PAPA/AREPA/ENSALADA, 2 VASOS DE GASEOSA)', price: '$16.000' },
    { item: 'CHUZO POLLO (PAPA,LIMÓN, CHUZO POLLO, TOPPING)', price: '$13.000' },
    { item: 'CHUZO POLLO COMBO (2 CHUZOS POLLO + 2 ACOMPAÑAMIENTOS: PAPA/AREPA/ENSALADA,  2 VASOS DE GASEOSA)', price: '$22.000' },
  ];
}
