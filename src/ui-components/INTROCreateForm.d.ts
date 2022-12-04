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
export declare type INTROCreateFormInputValues = {
    firstText?: string;
    name?: string;
    description?: string;
    emphasesedText?: string;
    descriptionCont?: string;
    hireMeLink?: string;
    githubLink?: string;
    linkedinLink?: string;
    instagramLink?: string;
    githubImage?: string;
    instagramImage?: string;
    linkedinImage?: string;
    glasse?: string;
    floatingrightImage?: string;
    floatingrightText?: string;
    floatingleftImage?: string;
    floatingleftText?: string;
};
export declare type INTROCreateFormValidationValues = {
    firstText?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    emphasesedText?: ValidationFunction<string>;
    descriptionCont?: ValidationFunction<string>;
    hireMeLink?: ValidationFunction<string>;
    githubLink?: ValidationFunction<string>;
    linkedinLink?: ValidationFunction<string>;
    instagramLink?: ValidationFunction<string>;
    githubImage?: ValidationFunction<string>;
    instagramImage?: ValidationFunction<string>;
    linkedinImage?: ValidationFunction<string>;
    glasse?: ValidationFunction<string>;
    floatingrightImage?: ValidationFunction<string>;
    floatingrightText?: ValidationFunction<string>;
    floatingleftImage?: ValidationFunction<string>;
    floatingleftText?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type INTROCreateFormOverridesProps = {
    INTROCreateFormGrid?: FormProps<GridProps>;
    firstText?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    emphasesedText?: FormProps<TextFieldProps>;
    descriptionCont?: FormProps<TextFieldProps>;
    hireMeLink?: FormProps<TextFieldProps>;
    githubLink?: FormProps<TextFieldProps>;
    linkedinLink?: FormProps<TextFieldProps>;
    instagramLink?: FormProps<TextFieldProps>;
    githubImage?: FormProps<TextFieldProps>;
    instagramImage?: FormProps<TextFieldProps>;
    linkedinImage?: FormProps<TextFieldProps>;
    glasse?: FormProps<TextFieldProps>;
    floatingrightImage?: FormProps<TextFieldProps>;
    floatingrightText?: FormProps<TextFieldProps>;
    floatingleftImage?: FormProps<TextFieldProps>;
    floatingleftText?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type INTROCreateFormProps = React.PropsWithChildren<{
    overrides?: INTROCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: INTROCreateFormInputValues) => INTROCreateFormInputValues;
    onSuccess?: (fields: INTROCreateFormInputValues) => void;
    onError?: (fields: INTROCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: INTROCreateFormInputValues) => INTROCreateFormInputValues;
    onValidate?: INTROCreateFormValidationValues;
} & React.CSSProperties>;
export default function INTROCreateForm(props: INTROCreateFormProps): React.ReactElement;
