import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Peliculavideojuegos} from '../models';
import {PeliculavideojuegosRepository} from '../repositories';

export class PeliculavideojuegosController {
  constructor(
    @repository(PeliculavideojuegosRepository)
    public peliculavideojuegosRepository : PeliculavideojuegosRepository,
  ) {}

  @post('/peliculavideojuegos')
  @response(200, {
    description: 'Peliculavideojuegos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Peliculavideojuegos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peliculavideojuegos, {
            title: 'NewPeliculavideojuegos',
            exclude: ['id'],
          }),
        },
      },
    })
    peliculavideojuegos: Omit<Peliculavideojuegos, 'id'>,
  ): Promise<Peliculavideojuegos> {
    return this.peliculavideojuegosRepository.create(peliculavideojuegos);
  }

  @get('/peliculavideojuegos/count')
  @response(200, {
    description: 'Peliculavideojuegos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Peliculavideojuegos) where?: Where<Peliculavideojuegos>,
  ): Promise<Count> {
    return this.peliculavideojuegosRepository.count(where);
  }

  @get('/peliculavideojuegos')
  @response(200, {
    description: 'Array of Peliculavideojuegos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Peliculavideojuegos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Peliculavideojuegos) filter?: Filter<Peliculavideojuegos>,
  ): Promise<Peliculavideojuegos[]> {
    return this.peliculavideojuegosRepository.find(filter);
  }

  @patch('/peliculavideojuegos')
  @response(200, {
    description: 'Peliculavideojuegos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peliculavideojuegos, {partial: true}),
        },
      },
    })
    peliculavideojuegos: Peliculavideojuegos,
    @param.where(Peliculavideojuegos) where?: Where<Peliculavideojuegos>,
  ): Promise<Count> {
    return this.peliculavideojuegosRepository.updateAll(peliculavideojuegos, where);
  }

  @get('/peliculavideojuegos/{id}')
  @response(200, {
    description: 'Peliculavideojuegos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Peliculavideojuegos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Peliculavideojuegos, {exclude: 'where'}) filter?: FilterExcludingWhere<Peliculavideojuegos>
  ): Promise<Peliculavideojuegos> {
    return this.peliculavideojuegosRepository.findById(id, filter);
  }

  @patch('/peliculavideojuegos/{id}')
  @response(204, {
    description: 'Peliculavideojuegos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Peliculavideojuegos, {partial: true}),
        },
      },
    })
    peliculavideojuegos: Peliculavideojuegos,
  ): Promise<void> {
    await this.peliculavideojuegosRepository.updateById(id, peliculavideojuegos);
  }

  @put('/peliculavideojuegos/{id}')
  @response(204, {
    description: 'Peliculavideojuegos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() peliculavideojuegos: Peliculavideojuegos,
  ): Promise<void> {
    await this.peliculavideojuegosRepository.replaceById(id, peliculavideojuegos);
  }

  @del('/peliculavideojuegos/{id}')
  @response(204, {
    description: 'Peliculavideojuegos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.peliculavideojuegosRepository.deleteById(id);
  }
}
