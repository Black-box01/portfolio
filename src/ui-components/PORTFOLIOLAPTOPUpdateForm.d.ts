/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PORTFOLIOLAPTOP } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PORTFOLIOLAPTOPUpdateFormInputValues = {
    imgLaptop?: string;
    imgContent?: string;
    projectTitle?: string;
    projectDescription?: string;
    btnText?: string;
    btnLink?: string;
};
export declare type PORTFOLIOLAPTOPUpdateFormValidationValues = {
    imgLaptop?: ValidationFunction<string>;
    imgContent?: ValidationFunction<string>;
    projectTitle?: ValidationFunction<string>;
    projectDescription?: ValidationFunction<string>;
    btnText?: ValidationFunction<string>;
    btnLink?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PORTFOLIOLAPTOPUpdateFormOverridesProps = {
    PORTFOLIOLAPTOPUpdateFormGrid?: FormProps<GridProps>;
    imgLaptop?: FormProps<TextFieldProps>;
    imgContent?: FormProps<TextFieldProps>;
    projectTitle?: FormProps<TextFieldProps>;
    projectDescription?: FormProps<TextFieldProps>;
    btnText?: FormProps<TextFieldProps>;
    btnLink?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PORTFOLIOLAPTOPUpdateFormProps = React.PropsWithChildren<{
    overrides?: PORTFOLIOLAPTOPUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pORTFOLIOLAPTOP?: PORTFOLIOLAPTOP;
    onSubmit?: (fields: PORTFOLIOLAPTOPUpdateFormInputValues) => PORTFOLIOLAPTOPUpdateFormInputValues;
    onSuccess?: (fields: PORTFOLIOLAPTOPUpdateFormInputValues) => void;
    onError?: (fields: PORTFOLIOLAPTOPUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PORTFOLIOLAPTOPUpdateFormInputValues) => PORTFOLIOLAPTOPUpdateFormInputValues;
    onValidate?: PORTFOLIOLAPTOPUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PORTFOLIOLAPTOPUpdateForm(props: PORTFOLIOLAPTOPUpdateFormProps): React.ReactElement;
