// this is a code snippet
class Student {
    private _matricula: string;
    private _name: string;
    private _prova1: number | undefined;
    private _prova2: number | undefined;
    private _prova3: number | undefined;
    private _prova4: number | undefined;
    private _trabalho1: number | undefined;
    private _trabalho2: number | undefined;

    constructor (matricula: string, name: string) {
        this._matricula = matricula;
        this._name = name;
    }

    get somaNotas(): number {
        return (this._prova1 || 0) + (this._prova2 || 0) + (this._prova3 || 0) + (this._prova4 || 0);
    }

    get mediaNotas(): number {
        const notas: (number | undefined)[] = [this._prova1, this._prova2, this._prova3, this._prova4];
        let valid = 0;
        let somaNotas: number = 0;
        for (let i = 0; i < notas.length; i += 1) {
            if (notas[i] !== undefined) {
                valid += 1;
                somaNotas += notas[i] as number;
            }
        }

        return somaNotas / valid;
    }
}