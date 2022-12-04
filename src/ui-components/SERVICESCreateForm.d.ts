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
export declare type SERVICESCreateFormInputValues = {
    awesome?: string;
    services?: string;
    text?: string;
    cardDesign?: string;
    cardDeveloper?: string;
    cardUi?: string;
};
export declare type SERVICESCreateFormValidationValues = {
    awesome?: ValidationFunction<string>;
    services?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    cardDesign?: ValidationFunction<string>;
    cardDeveloper?: ValidationFunction<string>;
    cardUi?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SERVICESCreateFormOverridesProps = {
    SERVICESCreateFormGrid?: FormProps<GridProps>;
    awesome?: FormProps<TextFieldProps>;
    services?: FormProps<TextFieldProps>;
    text?: FormProps<TextFieldProps>;
    cardDesign?: FormProps<TextFieldProps>;
    cardDeveloper?: FormProps<TextFieldProps>;
    cardUi?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SERVICESCreateFormProps = React.PropsWithChildren<{
    overrides?: SERVICESCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SERVICESCreateFormInputValues) => SERVICESCreateFormInputValues;
    onSuccess?: (fields: SERVICESCreateFormInputValues) => void;
    onError?: (fields: SERVICESCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SERVICESCreateFormInputValues) => SERVICESCreateFormInputValues;
    onValidate?: SERVICESCreateFormValidationValues;
} & React.CSSProperties>;
export default function SERVICESCreateForm(props: SERVICESCreateFormProps): React.ReactElement;
