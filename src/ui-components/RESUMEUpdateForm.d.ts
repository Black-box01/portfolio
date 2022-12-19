/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { RESUME } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RESUMEUpdateFormInputValues = {
    source?: string;
};
export declare type RESUMEUpdateFormValidationValues = {
    source?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RESUMEUpdateFormOverridesProps = {
    RESUMEUpdateFormGrid?: FormProps<GridProps>;
    source?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RESUMEUpdateFormProps = React.PropsWithChildren<{
    overrides?: RESUMEUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rESUME?: RESUME;
    onSubmit?: (fields: RESUMEUpdateFormInputValues) => RESUMEUpdateFormInputValues;
    onSuccess?: (fields: RESUMEUpdateFormInputValues) => void;
    onError?: (fields: RESUMEUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RESUMEUpdateFormInputValues) => RESUMEUpdateFormInputValues;
    onValidate?: RESUMEUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RESUMEUpdateForm(props: RESUMEUpdateFormProps): React.ReactElement;
