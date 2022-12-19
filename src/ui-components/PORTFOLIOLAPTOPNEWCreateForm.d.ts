/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PORTFOLIOLAPTOPNEWCreateFormInputValues = {
    imgLaptop?: string;
    imgContent?: string;
    projectTitle?: string;
    projectDescription?: string;
    btnTex?: string;
    btnLink?: string;
};
export declare type PORTFOLIOLAPTOPNEWCreateFormValidationValues = {
    imgLaptop?: ValidationFunction<string>;
    imgContent?: ValidationFunction<string>;
    projectTitle?: ValidationFunction<string>;
    projectDescription?: ValidationFunction<string>;
    btnTex?: ValidationFunction<string>;
    btnLink?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PORTFOLIOLAPTOPNEWCreateFormOverridesProps = {
    PORTFOLIOLAPTOPNEWCreateFormGrid?: FormProps<GridProps>;
    imgLaptop?: FormProps<TextFieldProps>;
    imgContent?: FormProps<TextFieldProps>;
    projectTitle?: FormProps<TextFieldProps>;
    projectDescription?: FormProps<TextFieldProps>;
    btnTex?: FormProps<TextFieldProps>;
    btnLink?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PORTFOLIOLAPTOPNEWCreateFormProps = React.PropsWithChildren<{
    overrides?: PORTFOLIOLAPTOPNEWCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PORTFOLIOLAPTOPNEWCreateFormInputValues) => PORTFOLIOLAPTOPNEWCreateFormInputValues;
    onSuccess?: (fields: PORTFOLIOLAPTOPNEWCreateFormInputValues) => void;
    onError?: (fields: PORTFOLIOLAPTOPNEWCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PORTFOLIOLAPTOPNEWCreateFormInputValues) => PORTFOLIOLAPTOPNEWCreateFormInputValues;
    onValidate?: PORTFOLIOLAPTOPNEWCreateFormValidationValues;
} & React.CSSProperties>;
export default function PORTFOLIOLAPTOPNEWCreateForm(props: PORTFOLIOLAPTOPNEWCreateFormProps): React.ReactElement;
