export interface Reserva {
  turno?: String,
  cod_instalacion?: number,
  cod_reserva?: number,
  usuario?: string,
  total?: number,
  num_pases: number,
  pagado?: boolean,
  fecha?: Date,
  img?: String,
  nombre?: String
}
