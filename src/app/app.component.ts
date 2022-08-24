import { Component, VERSION } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { single } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  single: any[];
  multi: any[];

  view: [number, number] = [700, 400];
  id = 'chart1';
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

  imprimir() {
    window.print();
  }

  descargarGrafica() {
    html2canvas(document.querySelector('#chart2')).then((canvas) => {
      const doc = new jsPDF();
      const img = canvas.toDataURL();
      doc.addImage(img, 'PNG', 0, 0, 100, 100);
      doc.save('gráfica.pdf');
    });
  }
}
