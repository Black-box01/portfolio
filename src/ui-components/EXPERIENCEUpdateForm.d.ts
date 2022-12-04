/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EXPERIENCE } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EXPERIENCEUpdateFormInputValues = {
    yearsExperience?: string;
    completedProjects?: string;
    companiesWord?: string;
};
export declare type EXPERIENCEUpdateFormValidationValues = {
    yearsExperience?: ValidationFunction<string>;
    completedProjects?: ValidationFunction<string>;
    companiesWord?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EXPERIENCEUpdateFormOverridesProps = {
    EXPERIENCEUpdateFormGrid?: FormProps<GridProps>;
    yearsExperience?: FormProps<TextFieldProps>;
    completedProjects?: FormProps<TextFieldProps>;
    companiesWord?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EXPERIENCEUpdateFormProps = React.PropsWithChildren<{
    overrides?: EXPERIENCEUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eXPERIENCE?: EXPERIENCE;
    onSubmit?: (fields: EXPERIENCEUpdateFormInputValues) => EXPERIENCEUpdateFormInputValues;
    onSuccess?: (fields: EXPERIENCEUpdateFormInputValues) => void;
    onError?: (fields: EXPERIENCEUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EXPERIENCEUpdateFormInputValues) => EXPERIENCEUpdateFormInputValues;
    onValidate?: EXPERIENCEUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EXPERIENCEUpdateForm(props: EXPERIENCEUpdateFormProps): React.ReactElement;
