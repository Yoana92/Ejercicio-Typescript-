export class Telefono {
  tipo: string;
  numero: string;
  extension?: string;

  constructor(tipo: string, numero: string, extension?: string) {
    this.tipo = tipo;
    this.numero = numero;
    this.extension = extension;
  }

  public getNumero(): string {
    return this.numero;
  }

  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public getTipo(): string {
    return this.tipo;
  }

  public setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  public getExtension(): string | undefined {
    return this.extension;
  }

  public setExtension(extension: string): void {
    this.extension = extension;
  }

  public getDireccion(): string {
    return `${this.tipo} ${this.numero}${this.extension ? ' ext. ' + this.extension : ''}`;
  }
}
