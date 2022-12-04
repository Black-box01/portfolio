/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CONTACTCreateFormInputValues = {};
export declare type CONTACTCreateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CONTACTCreateFormOverridesProps = {
    CONTACTCreateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type CONTACTCreateFormProps = React.PropsWithChildren<{
    overrides?: CONTACTCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CONTACTCreateFormInputValues) => CONTACTCreateFormInputValues;
    onSuccess?: (fields: CONTACTCreateFormInputValues) => void;
    onError?: (fields: CONTACTCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CONTACTCreateFormInputValues) => CONTACTCreateFormInputValues;
    onValidate?: CONTACTCreateFormValidationValues;
} & React.CSSProperties>;
export default function CONTACTCreateForm(props: CONTACTCreateFormProps): React.ReactElement;
