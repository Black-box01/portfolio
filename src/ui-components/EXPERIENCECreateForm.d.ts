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
export declare type EXPERIENCECreateFormInputValues = {
    yearsExperience?: string;
    completedProjects?: string;
    companiesWord?: string;
};
export declare type EXPERIENCECreateFormValidationValues = {
    yearsExperience?: ValidationFunction<string>;
    completedProjects?: ValidationFunction<string>;
    companiesWord?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EXPERIENCECreateFormOverridesProps = {
    EXPERIENCECreateFormGrid?: FormProps<GridProps>;
    yearsExperience?: FormProps<TextFieldProps>;
    completedProjects?: FormProps<TextFieldProps>;
    companiesWord?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EXPERIENCECreateFormProps = React.PropsWithChildren<{
    overrides?: EXPERIENCECreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EXPERIENCECreateFormInputValues) => EXPERIENCECreateFormInputValues;
    onSuccess?: (fields: EXPERIENCECreateFormInputValues) => void;
    onError?: (fields: EXPERIENCECreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EXPERIENCECreateFormInputValues) => EXPERIENCECreateFormInputValues;
    onValidate?: EXPERIENCECreateFormValidationValues;
} & React.CSSProperties>;
export default function EXPERIENCECreateForm(props: EXPERIENCECreateFormProps): React.ReactElement;
