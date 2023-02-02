export interface InputTextProps {
    dataTextList: dataText[],
}

// export interface dataExtra {
//     id: any,
//     tipe: string,
//     onChange: () => {},
//     onBlur: any

// }

export interface dataText {
    name: string,
    color: boolean,
    type: string,
    regis: object
    eyetrue: boolean
    id: string,
    onChange: () => {},
    value: string,
    label: string,
    onBlur: any
    disabled: boolean
}

export interface ContainTextProps {
    IsColor: boolean
}

