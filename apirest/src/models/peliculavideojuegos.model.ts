import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Peliculavideojuegos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
  })
  imagen?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  comentario?: object[];


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Peliculavideojuegos>) {
    super(data);
  }
}

export interface PeliculavideojuegosRelations {
  // describe navigational properties here
}

export type PeliculavideojuegosWithRelations = Peliculavideojuegos & PeliculavideojuegosRelations;
