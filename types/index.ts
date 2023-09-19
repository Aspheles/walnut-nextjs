import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  disabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacterer: string) => void;
}

export interface BrandCardProps {
  name: string;
  logo: string;
  identifier: string;
}

export interface BrandModalProps {
  
  isOpen?:boolean;
}

export interface BrandModalFormData {
  name: string;
  logo: string;
  primaryColor: string;
  secondColor: string;
  thirdColor: string;
  organizationId?:string;
}
