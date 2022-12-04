/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NAVBAR } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NAVBARUpdateFormInputValues = {
    name?: string;
};
export declare type NAVBARUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NAVBARUpdateFormOverridesProps = {
    NAVBARUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NAVBARUpdateFormProps = React.PropsWithChildren<{
    overrides?: NAVBARUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nAVBAR?: NAVBAR;
    onSubmit?: (fields: NAVBARUpdateFormInputValues) => NAVBARUpdateFormInputValues;
    onSuccess?: (fields: NAVBARUpdateFormInputValues) => void;
    onError?: (fields: NAVBARUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NAVBARUpdateFormInputValues) => NAVBARUpdateFormInputValues;
    onValidate?: NAVBARUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NAVBARUpdateForm(props: NAVBARUpdateFormProps): React.ReactElement;
