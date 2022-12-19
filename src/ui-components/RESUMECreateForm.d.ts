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
export declare type RESUMECreateFormInputValues = {
    source?: string;
};
export declare type RESUMECreateFormValidationValues = {
    source?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RESUMECreateFormOverridesProps = {
    RESUMECreateFormGrid?: FormProps<GridProps>;
    source?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RESUMECreateFormProps = React.PropsWithChildren<{
    overrides?: RESUMECreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RESUMECreateFormInputValues) => RESUMECreateFormInputValues;
    onSuccess?: (fields: RESUMECreateFormInputValues) => void;
    onError?: (fields: RESUMECreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RESUMECreateFormInputValues) => RESUMECreateFormInputValues;
    onValidate?: RESUMECreateFormValidationValues;
} & React.CSSProperties>;
export default function RESUMECreateForm(props: RESUMECreateFormProps): React.ReactElement;
