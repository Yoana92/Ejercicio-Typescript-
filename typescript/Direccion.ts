export class Direccion {
  calle: string;
  numero: number;
  piso?: number;
  letra?: string;
  codigoPostal: string;
  poblacion: string;
  provincia: string;
  tipo: string;

  constructor(
    calle: string,
    numero: number,
    codigoPostal: string,
    poblacion: string,
    provincia: string,
    tipo: string,
    piso?: number,
    letra?: string
  ) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
    this.tipo = tipo;
  }

  public getCalle(): string {
    return this.calle;
  }

  public getNumero(): number {
    return this.numero;
  }

  public getPiso(): number | undefined {
    return this.piso;
  }

  public getLetra(): string | undefined {
    return this.letra;
  }

  public getCodigoPostal(): string {
    return this.codigoPostal;
  }

  public getPoblacion(): string {
    return this.poblacion;
  }

  public getProvincia(): string {
    return this.provincia;
  }

  public getTipo(): string {
    return this.tipo;
  }
}
