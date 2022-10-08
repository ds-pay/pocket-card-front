export interface InputSelectProps {
    dataSelectList: dataSelect[]
    useIcons?: boolean
}

export interface DropDownProps {
    dataSelectList: dataSelect[]
    isActive: boolean
    handleSelect: (slection: dataSelect) => void
    setIsActive: (value: boolean) => void
};

export interface dataSelect {
    id: string
    icon?: any
    label: string
    value: any
};

export interface ContainerDropProps {
    isActive: boolean
    ref?:any
  }
