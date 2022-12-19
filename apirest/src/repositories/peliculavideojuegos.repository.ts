import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Peliculavideojuegos, PeliculavideojuegosRelations} from '../models';

export class PeliculavideojuegosRepository extends DefaultCrudRepository<
  Peliculavideojuegos,
  typeof Peliculavideojuegos.prototype.id,
  PeliculavideojuegosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Peliculavideojuegos, dataSource);
  }
}
