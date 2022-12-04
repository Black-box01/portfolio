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
export declare type INTROesCreateFormInputValues = {
    firstText?: string;
    name?: string;
    description?: string;
    emphasesedText?: string;
    descriptionCont?: string;
    githubLink?: string;
    linkedinLink?: string;
    instagramLink?: string;
    githubImage?: string;
    linkedinImage?: string;
    instagramImage?: string;
    glasses?: string;
    floatingrightImage?: string;
    floatingrightText?: string;
    floatingleftImage?: string;
    floatingleftText?: string;
    characterImage?: string;
    blueBkImage?: string;
    orangeBkImage?: string;
};
export declare type INTROesCreateFormValidationValues = {
    firstText?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    emphasesedText?: ValidationFunction<string>;
    descriptionCont?: ValidationFunction<string>;
    githubLink?: ValidationFunction<string>;
    linkedinLink?: ValidationFunction<string>;
    instagramLink?: ValidationFunction<string>;
    githubImage?: ValidationFunction<string>;
    linkedinImage?: ValidationFunction<string>;
    instagramImage?: ValidationFunction<string>;
    glasses?: ValidationFunction<string>;
    floatingrightImage?: ValidationFunction<string>;
    floatingrightText?: ValidationFunction<string>;
    floatingleftImage?: ValidationFunction<string>;
    floatingleftText?: ValidationFunction<string>;
    characterImage?: ValidationFunction<string>;
    blueBkImage?: ValidationFunction<string>;
    orangeBkImage?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type INTROesCreateFormOverridesProps = {
    INTROesCreateFormGrid?: FormProps<GridProps>;
    firstText?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    emphasesedText?: FormProps<TextFieldProps>;
    descriptionCont?: FormProps<TextFieldProps>;
    githubLink?: FormProps<TextFieldProps>;
    linkedinLink?: FormProps<TextFieldProps>;
    instagramLink?: FormProps<TextFieldProps>;
    githubImage?: FormProps<TextFieldProps>;
    linkedinImage?: FormProps<TextFieldProps>;
    instagramImage?: FormProps<TextFieldProps>;
    glasses?: FormProps<TextFieldProps>;
    floatingrightImage?: FormProps<TextFieldProps>;
    floatingrightText?: FormProps<TextFieldProps>;
    floatingleftImage?: FormProps<TextFieldProps>;
    floatingleftText?: FormProps<TextFieldProps>;
    characterImage?: FormProps<TextFieldProps>;
    blueBkImage?: FormProps<TextFieldProps>;
    orangeBkImage?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type INTROesCreateFormProps = React.PropsWithChildren<{
    overrides?: INTROesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: INTROesCreateFormInputValues) => INTROesCreateFormInputValues;
    onSuccess?: (fields: INTROesCreateFormInputValues) => void;
    onError?: (fields: INTROesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: INTROesCreateFormInputValues) => INTROesCreateFormInputValues;
    onValidate?: INTROesCreateFormValidationValues;
} & React.CSSProperties>;
export default function INTROesCreateForm(props: INTROesCreateFormProps): React.ReactElement;
