/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SERVICES } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SERVICESUpdateFormInputValues = {
    awesome?: string;
    services?: string;
    text?: string;
    cardDesign?: string;
    cardDeveloper?: string;
    cardUi?: string;
};
export declare type SERVICESUpdateFormValidationValues = {
    awesome?: ValidationFunction<string>;
    services?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    cardDesign?: ValidationFunction<string>;
    cardDeveloper?: ValidationFunction<string>;
    cardUi?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SERVICESUpdateFormOverridesProps = {
    SERVICESUpdateFormGrid?: FormProps<GridProps>;
    awesome?: FormProps<TextFieldProps>;
    services?: FormProps<TextFieldProps>;
    text?: FormProps<TextFieldProps>;
    cardDesign?: FormProps<TextFieldProps>;
    cardDeveloper?: FormProps<TextFieldProps>;
    cardUi?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SERVICESUpdateFormProps = React.PropsWithChildren<{
    overrides?: SERVICESUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sERVICES?: SERVICES;
    onSubmit?: (fields: SERVICESUpdateFormInputValues) => SERVICESUpdateFormInputValues;
    onSuccess?: (fields: SERVICESUpdateFormInputValues) => void;
    onError?: (fields: SERVICESUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SERVICESUpdateFormInputValues) => SERVICESUpdateFormInputValues;
    onValidate?: SERVICESUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SERVICESUpdateForm(props: SERVICESUpdateFormProps): React.ReactElement;
