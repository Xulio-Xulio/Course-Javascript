class Tv {
    constructor() {
        this._relacaoCanais = Array(2, 12, 15, 25, 69)
        this._canalAtivo = 25
        this._voluem = 5
    }
    //getters setters
    get canalAtivo() {
        return this._canalAtivo
    }

    set canalAtivo(canal) {
        //
        if(this._relacaoCanais.indexOf(canal) !== -1){
            this._canalAtivo = `Canal: ${canal} existe`
        }
        else {
            this._canalAtivo = `Canal: ${canal} não existe`
        }
    }
}

let tv = new Tv()

tv.canalAtivo = 35

console.log(tv.canalAtivo)