/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { WORKS } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WORKSUpdateFormInputValues = {
    works?: string;
    brands?: string;
    text?: string;
};
export declare type WORKSUpdateFormValidationValues = {
    works?: ValidationFunction<string>;
    brands?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WORKSUpdateFormOverridesProps = {
    WORKSUpdateFormGrid?: FormProps<GridProps>;
    works?: FormProps<TextFieldProps>;
    brands?: FormProps<TextFieldProps>;
    text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WORKSUpdateFormProps = React.PropsWithChildren<{
    overrides?: WORKSUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    wORKS?: WORKS;
    onSubmit?: (fields: WORKSUpdateFormInputValues) => WORKSUpdateFormInputValues;
    onSuccess?: (fields: WORKSUpdateFormInputValues) => void;
    onError?: (fields: WORKSUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WORKSUpdateFormInputValues) => WORKSUpdateFormInputValues;
    onValidate?: WORKSUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WORKSUpdateForm(props: WORKSUpdateFormProps): React.ReactElement;
