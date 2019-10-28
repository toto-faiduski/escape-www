import { Component, OnInit } from '@angular/core';

interface Error {
  code: number;
  description: string;
}

const ERRORS: Error[] = [
	{
		code: 0,
		description: 'Aucune erreur',
	},
	{
		code: 1,
		description: 'Exception BOOST (interpréteur de la ligne de commande)',
	},
	{
		code: 2,
		description: 'Erreur d’ouverture du fichier d’entrée',
	},
	{
		code: 3,
		description: 'Erreur d’ouverture du fichier de sortie',
	},
	{
		code: 4,
		description: 'Erreur buffer incorrect',
	},
	{
		code: 5,
		description: 'Nombre de pages à supprimer incompatible avec nombre de pages du PDF',
	},
	{
		code: 6,
		description: 'Erreur DLI',
	},
	{
		code: 7,
		description: 'Paramètre incorrecte',
	},
	{
		code: 8,
		description: 'Erreur de conversion du texte avec un encodage de police personnalisé',
	},
	{
		code: 9,
		description: 'Elément de texte partiellement caché',
	},
	{
		code: 10,
		description: 'Détection de transparence dans la zone définie',
	},
	{
		code: 11,
		description: 'Plusieurs erreurs rencontrées',
	},
	{
		code: 12,
		description: 'Erreur lors de la mémorisation d’une liste de PDF',
	},
	{
		code: 13,
		description: 'Erreur de création de la log',
	},
	{
		code: 14,
		description: 'Numéro de page non valide avec l’option PageNum',
	}
];

@Component({
  selector: 'app-errors-extract-text-pdf',
  templateUrl: './errors-extract-text-pdf.component.html',
  styleUrls: ['./errors-extract-text-pdf.component.css']
})
export class ErrorsExtractTextPdfComponent implements OnInit {

  errors = ERRORS;

  constructor() { }

  ngOnInit() {
  }

}
