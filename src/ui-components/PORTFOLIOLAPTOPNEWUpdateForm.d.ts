/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PORTFOLIOLAPTOPNEW } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PORTFOLIOLAPTOPNEWUpdateFormInputValues = {
    imgLaptop?: string;
    imgContent?: string;
    projectTitle?: string;
    projectDescription?: string;
    btnTex?: string;
    btnLink?: string;
};
export declare type PORTFOLIOLAPTOPNEWUpdateFormValidationValues = {
    imgLaptop?: ValidationFunction<string>;
    imgContent?: ValidationFunction<string>;
    projectTitle?: ValidationFunction<string>;
    projectDescription?: ValidationFunction<string>;
    btnTex?: ValidationFunction<string>;
    btnLink?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PORTFOLIOLAPTOPNEWUpdateFormOverridesProps = {
    PORTFOLIOLAPTOPNEWUpdateFormGrid?: FormProps<GridProps>;
    imgLaptop?: FormProps<TextFieldProps>;
    imgContent?: FormProps<TextFieldProps>;
    projectTitle?: FormProps<TextFieldProps>;
    projectDescription?: FormProps<TextFieldProps>;
    btnTex?: FormProps<TextFieldProps>;
    btnLink?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PORTFOLIOLAPTOPNEWUpdateFormProps = React.PropsWithChildren<{
    overrides?: PORTFOLIOLAPTOPNEWUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pORTFOLIOLAPTOPNEW?: PORTFOLIOLAPTOPNEW;
    onSubmit?: (fields: PORTFOLIOLAPTOPNEWUpdateFormInputValues) => PORTFOLIOLAPTOPNEWUpdateFormInputValues;
    onSuccess?: (fields: PORTFOLIOLAPTOPNEWUpdateFormInputValues) => void;
    onError?: (fields: PORTFOLIOLAPTOPNEWUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PORTFOLIOLAPTOPNEWUpdateFormInputValues) => PORTFOLIOLAPTOPNEWUpdateFormInputValues;
    onValidate?: PORTFOLIOLAPTOPNEWUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PORTFOLIOLAPTOPNEWUpdateForm(props: PORTFOLIOLAPTOPNEWUpdateFormProps): React.ReactElement;
