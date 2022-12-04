/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PORTFOLIO } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PORTFOLIOUpdateFormInputValues = {
    recent?: string;
    portfolio?: string;
    text?: string;
};
export declare type PORTFOLIOUpdateFormValidationValues = {
    recent?: ValidationFunction<string>;
    portfolio?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PORTFOLIOUpdateFormOverridesProps = {
    PORTFOLIOUpdateFormGrid?: FormProps<GridProps>;
    recent?: FormProps<TextFieldProps>;
    portfolio?: FormProps<TextFieldProps>;
    text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PORTFOLIOUpdateFormProps = React.PropsWithChildren<{
    overrides?: PORTFOLIOUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pORTFOLIO?: PORTFOLIO;
    onSubmit?: (fields: PORTFOLIOUpdateFormInputValues) => PORTFOLIOUpdateFormInputValues;
    onSuccess?: (fields: PORTFOLIOUpdateFormInputValues) => void;
    onError?: (fields: PORTFOLIOUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PORTFOLIOUpdateFormInputValues) => PORTFOLIOUpdateFormInputValues;
    onValidate?: PORTFOLIOUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PORTFOLIOUpdateForm(props: PORTFOLIOUpdateFormProps): React.ReactElement;
