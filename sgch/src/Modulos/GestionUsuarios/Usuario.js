class Usuario {
    constructor(Nombre, Email, Password, Tipo_Usuario){
        this.Nombre
        this.Email
        this.Password
        this.Tipo_Usuario
    }
}


class Alumno extends Usuario {
    constructor(Matricula, Carrera){
        this.Matricula
        this.Carrera
    }
}

class Profesor extends Usuario{
    constructor(MatriculaP){
        this.MatriculaP
    }
}

class Coordinador extends Usuario{
    constructor(MatriculaC){
        this.MatriculaC
    }
}