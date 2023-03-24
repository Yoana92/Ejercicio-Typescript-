export class Mail {
  direccion: string;
  tipo: string;

  constructor(direccion: string, tipo: string) {
    this.direccion = direccion;
    this.tipo = tipo;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public getTipo(): string {
    return this.tipo;
  }

  public setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  public setTipo(tipo: string): void {
    this.tipo = tipo;
  }
}

export default Mail;
