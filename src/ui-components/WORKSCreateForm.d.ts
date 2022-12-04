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
export declare type WORKSCreateFormInputValues = {
    works?: string;
    brands?: string;
    text?: string;
};
export declare type WORKSCreateFormValidationValues = {
    works?: ValidationFunction<string>;
    brands?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WORKSCreateFormOverridesProps = {
    WORKSCreateFormGrid?: FormProps<GridProps>;
    works?: FormProps<TextFieldProps>;
    brands?: FormProps<TextFieldProps>;
    text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WORKSCreateFormProps = React.PropsWithChildren<{
    overrides?: WORKSCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WORKSCreateFormInputValues) => WORKSCreateFormInputValues;
    onSuccess?: (fields: WORKSCreateFormInputValues) => void;
    onError?: (fields: WORKSCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WORKSCreateFormInputValues) => WORKSCreateFormInputValues;
    onValidate?: WORKSCreateFormValidationValues;
} & React.CSSProperties>;
export default function WORKSCreateForm(props: WORKSCreateFormProps): React.ReactElement;
