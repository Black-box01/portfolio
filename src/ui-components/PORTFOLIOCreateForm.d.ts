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
export declare type PORTFOLIOCreateFormInputValues = {
    recent?: string;
    portfolio?: string;
    text?: string;
};
export declare type PORTFOLIOCreateFormValidationValues = {
    recent?: ValidationFunction<string>;
    portfolio?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PORTFOLIOCreateFormOverridesProps = {
    PORTFOLIOCreateFormGrid?: FormProps<GridProps>;
    recent?: FormProps<TextFieldProps>;
    portfolio?: FormProps<TextFieldProps>;
    text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PORTFOLIOCreateFormProps = React.PropsWithChildren<{
    overrides?: PORTFOLIOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PORTFOLIOCreateFormInputValues) => PORTFOLIOCreateFormInputValues;
    onSuccess?: (fields: PORTFOLIOCreateFormInputValues) => void;
    onError?: (fields: PORTFOLIOCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PORTFOLIOCreateFormInputValues) => PORTFOLIOCreateFormInputValues;
    onValidate?: PORTFOLIOCreateFormValidationValues;
} & React.CSSProperties>;
export default function PORTFOLIOCreateForm(props: PORTFOLIOCreateFormProps): React.ReactElement;
