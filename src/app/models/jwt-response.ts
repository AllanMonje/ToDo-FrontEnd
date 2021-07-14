export interface JwtResponseI {
    dataUser: {
      id_usuario: string, 
      email: string,
      accessToken: string,
      expiresIn: string
    }
  }