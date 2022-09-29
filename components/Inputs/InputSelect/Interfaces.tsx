export interface ContentPropsDrop {
    contentdropDown: ContentDropDown[],
    isSelection: boolean,
    selectNewValue: (id: string) => void,
};

export interface ContentDropDown {
    id: string,
    icon: any,
    label: string
};

export interface InputSelect {
    input: any,
}