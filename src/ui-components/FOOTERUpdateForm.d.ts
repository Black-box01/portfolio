/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FOOTER } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FOOTERUpdateFormInputValues = {
    instagramLink?: string;
    linkedinLink?: string;
    githubLink?: string;
    allRights?: string;
    email?: string;
    developer?: string;
};
export declare type FOOTERUpdateFormValidationValues = {
    instagramLink?: ValidationFunction<string>;
    linkedinLink?: ValidationFunction<string>;
    githubLink?: ValidationFunction<string>;
    allRights?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    developer?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FOOTERUpdateFormOverridesProps = {
    FOOTERUpdateFormGrid?: FormProps<GridProps>;
    instagramLink?: FormProps<TextFieldProps>;
    linkedinLink?: FormProps<TextFieldProps>;
    githubLink?: FormProps<TextFieldProps>;
    allRights?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    developer?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FOOTERUpdateFormProps = React.PropsWithChildren<{
    overrides?: FOOTERUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fOOTER?: FOOTER;
    onSubmit?: (fields: FOOTERUpdateFormInputValues) => FOOTERUpdateFormInputValues;
    onSuccess?: (fields: FOOTERUpdateFormInputValues) => void;
    onError?: (fields: FOOTERUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FOOTERUpdateFormInputValues) => FOOTERUpdateFormInputValues;
    onValidate?: FOOTERUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FOOTERUpdateForm(props: FOOTERUpdateFormProps): React.ReactElement;
