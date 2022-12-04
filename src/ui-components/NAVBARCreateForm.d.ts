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
export declare type NAVBARCreateFormInputValues = {
    name?: string;
};
export declare type NAVBARCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NAVBARCreateFormOverridesProps = {
    NAVBARCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NAVBARCreateFormProps = React.PropsWithChildren<{
    overrides?: NAVBARCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NAVBARCreateFormInputValues) => NAVBARCreateFormInputValues;
    onSuccess?: (fields: NAVBARCreateFormInputValues) => void;
    onError?: (fields: NAVBARCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NAVBARCreateFormInputValues) => NAVBARCreateFormInputValues;
    onValidate?: NAVBARCreateFormValidationValues;
} & React.CSSProperties>;
export default function NAVBARCreateForm(props: NAVBARCreateFormProps): React.ReactElement;
