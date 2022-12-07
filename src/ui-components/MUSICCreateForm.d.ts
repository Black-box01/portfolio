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
export declare type MUSICCreateFormInputValues = {
    source?: string;
};
export declare type MUSICCreateFormValidationValues = {
    source?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MUSICCreateFormOverridesProps = {
    MUSICCreateFormGrid?: FormProps<GridProps>;
    source?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MUSICCreateFormProps = React.PropsWithChildren<{
    overrides?: MUSICCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MUSICCreateFormInputValues) => MUSICCreateFormInputValues;
    onSuccess?: (fields: MUSICCreateFormInputValues) => void;
    onError?: (fields: MUSICCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MUSICCreateFormInputValues) => MUSICCreateFormInputValues;
    onValidate?: MUSICCreateFormValidationValues;
} & React.CSSProperties>;
export default function MUSICCreateForm(props: MUSICCreateFormProps): React.ReactElement;
