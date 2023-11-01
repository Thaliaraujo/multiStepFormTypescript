//Tratamento de erros para API

export class ApiException extends Error{
    public readonly message: string = '';

    constructor(message: string) {
        super();

        this.message = message;
    };
};