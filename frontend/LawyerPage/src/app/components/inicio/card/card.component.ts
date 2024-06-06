import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {

  servicios = [
    {
      "id": 1,
      "img": "assets/img/img-1.jpg",
      "titulo": "Asesoría Estratégica para Emprendedores",
      "descripcionDelantera": "Obtén Orientación Legal para el Éxito de tu Empresa.",
      "descripcionTrasera": "Desde la concepción hasta el crecimiento, te guiamos en cada paso del camino para asegurar el éxito y la protección legal de tu empresa."
    },
    {
      "id": 2,
      "img": "assets/img/img-2.jpg",
      "titulo": "Defensa Legal Expertamente Construida",
      "descripcionDelantera": "Protege tus Derechos en el Sistema Judicial.",
      "descripcionTrasera": "Nuestro equipo legal altamente capacitado está listo para representarte en cada etapa del proceso legal, garantizando tus derechos y defendiendo tu libertad."
    },
    {
      "id": 3,
      "img": "assets/img/img-3.jpg",
      "titulo": "Empodera tu Ambiente Laboral con Asesoría Jurídica",
      "descripcionDelantera": "Soluciones Expertas para Desafíos Laborales.",
      "descripcionTrasera": "Desde contratos hasta litigios, nuestro equipo legal te brinda la asesoría necesaria para mantener un ambiente laboral justo y conforme a la ley."
    },
    {
      "id": 4,
      "img": "assets/img/img-4.jpeg",
      "titulo": "Protegiendo lo que más Importa: tu Familia",
      "descripcionDelantera": "Asistencia Legal Compasiva en Momentos Difíciles.",
      "descripcionTrasera": "En momentos de cambio familiar, estamos aquí para proporcionar apoyo legal y orientación, asegurando que tus seres queridos estén protegidos y tus intereses sean defendidos."
    }
  ];


  flipped: boolean[] = [false, false, false, false];

  toggleFlip(index: number, flip: boolean) {
    this.flipped[index] = flip;
  }


}
