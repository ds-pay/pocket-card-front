export interface SideBarProps { 
  img: string, 
  title: string, 
  nameMenu: string, 
  isSelected: any, 
  setIsSelected: any, 
  ContentMenu: ContentMenu[]
}

export interface IsActivate{
  isActivate: boolean,
}

export interface LeftIstrue{
  leftIsTrue: boolean,
}

export interface IsSelected{
  isSelected: boolean,
}

export interface ContainerActiveSelected{
  isActivate: boolean,
  isSelected: boolean,
  leftIsTrue: boolean,
}

export interface ContentMenu{
  id: string,
  route: any,
  img: any,
  label: string
}