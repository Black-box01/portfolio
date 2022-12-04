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
export declare type TESTIMONIALSCreateFormInputValues = {
    img?: string;
    review?: string;
};
export declare type TESTIMONIALSCreateFormValidationValues = {
    img?: ValidationFunction<string>;
    review?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TESTIMONIALSCreateFormOverridesProps = {
    TESTIMONIALSCreateFormGrid?: FormProps<GridProps>;
    img?: FormProps<TextFieldProps>;
    review?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TESTIMONIALSCreateFormProps = React.PropsWithChildren<{
    overrides?: TESTIMONIALSCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TESTIMONIALSCreateFormInputValues) => TESTIMONIALSCreateFormInputValues;
    onSuccess?: (fields: TESTIMONIALSCreateFormInputValues) => void;
    onError?: (fields: TESTIMONIALSCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TESTIMONIALSCreateFormInputValues) => TESTIMONIALSCreateFormInputValues;
    onValidate?: TESTIMONIALSCreateFormValidationValues;
} & React.CSSProperties>;
export default function TESTIMONIALSCreateForm(props: TESTIMONIALSCreateFormProps): React.ReactElement;
