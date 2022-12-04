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
export declare type PORTFOLIOLAPTOPCreateFormInputValues = {
    imgLaptop?: string;
    imgContent?: string;
    projectTitle?: string;
    projectDescription?: string;
    btnText?: string;
    btnLink?: string;
};
export declare type PORTFOLIOLAPTOPCreateFormValidationValues = {
    imgLaptop?: ValidationFunction<string>;
    imgContent?: ValidationFunction<string>;
    projectTitle?: ValidationFunction<string>;
    projectDescription?: ValidationFunction<string>;
    btnText?: ValidationFunction<string>;
    btnLink?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PORTFOLIOLAPTOPCreateFormOverridesProps = {
    PORTFOLIOLAPTOPCreateFormGrid?: FormProps<GridProps>;
    imgLaptop?: FormProps<TextFieldProps>;
    imgContent?: FormProps<TextFieldProps>;
    projectTitle?: FormProps<TextFieldProps>;
    projectDescription?: FormProps<TextFieldProps>;
    btnText?: FormProps<TextFieldProps>;
    btnLink?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PORTFOLIOLAPTOPCreateFormProps = React.PropsWithChildren<{
    overrides?: PORTFOLIOLAPTOPCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PORTFOLIOLAPTOPCreateFormInputValues) => PORTFOLIOLAPTOPCreateFormInputValues;
    onSuccess?: (fields: PORTFOLIOLAPTOPCreateFormInputValues) => void;
    onError?: (fields: PORTFOLIOLAPTOPCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PORTFOLIOLAPTOPCreateFormInputValues) => PORTFOLIOLAPTOPCreateFormInputValues;
    onValidate?: PORTFOLIOLAPTOPCreateFormValidationValues;
} & React.CSSProperties>;
export default function PORTFOLIOLAPTOPCreateForm(props: PORTFOLIOLAPTOPCreateFormProps): React.ReactElement;
