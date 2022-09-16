// PROBLEMA 1

for (let x: number = 1; x <= 10; x++) {
    console.log('-----------')
    for (let y: number = 1; y <= 10; y++) {
        console.log(`${x} X ${y} = ` + x * y)
    }
}

// PROBLEMA 2

// CEP: 01311-100 
let regexCEP = /^[0-9]{5}\-[0-9]{3}$/
// EMAIL: email@fiap.com.br
let regexEMAIL = /^[a-z0-9._]+@[a-z0-9._]+\.([a-z]+)?$/i
// CPF: 333.111.222-00
let regexCPF = /^[0-9]{3}\.+[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/
// CNPJ: 12.321.123/0001-02
let regexCNPJ = /^[0-9]{2}\.+[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/i
// RG: 22.455.213-2
let regexRG = /^[0-9]{2}\.+[0-9]{3}\.[0-9]{3}\-[0-9]{1}$/i
// 123.456.abc.def && 2123.456.abc.def 
let regexNumber = /^[0-9]{3,4}\.+[0-9]{3}\.[a-z]{3}\.[a-z]{3}$/i


