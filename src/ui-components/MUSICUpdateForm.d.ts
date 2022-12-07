/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MUSIC } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MUSICUpdateFormInputValues = {
    source?: string;
};
export declare type MUSICUpdateFormValidationValues = {
    source?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MUSICUpdateFormOverridesProps = {
    MUSICUpdateFormGrid?: FormProps<GridProps>;
    source?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MUSICUpdateFormProps = React.PropsWithChildren<{
    overrides?: MUSICUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mUSIC?: MUSIC;
    onSubmit?: (fields: MUSICUpdateFormInputValues) => MUSICUpdateFormInputValues;
    onSuccess?: (fields: MUSICUpdateFormInputValues) => void;
    onError?: (fields: MUSICUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MUSICUpdateFormInputValues) => MUSICUpdateFormInputValues;
    onValidate?: MUSICUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MUSICUpdateForm(props: MUSICUpdateFormProps): React.ReactElement;
