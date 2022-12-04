/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CONTACT } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CONTACTUpdateFormInputValues = {};
export declare type CONTACTUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CONTACTUpdateFormOverridesProps = {
    CONTACTUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type CONTACTUpdateFormProps = React.PropsWithChildren<{
    overrides?: CONTACTUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cONTACT?: CONTACT;
    onSubmit?: (fields: CONTACTUpdateFormInputValues) => CONTACTUpdateFormInputValues;
    onSuccess?: (fields: CONTACTUpdateFormInputValues) => void;
    onError?: (fields: CONTACTUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CONTACTUpdateFormInputValues) => CONTACTUpdateFormInputValues;
    onValidate?: CONTACTUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CONTACTUpdateForm(props: CONTACTUpdateFormProps): React.ReactElement;
