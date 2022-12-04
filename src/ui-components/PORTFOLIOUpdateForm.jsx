/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { PORTFOLIO } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PORTFOLIOUpdateForm(props) {
  const {
    id,
    pORTFOLIO,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    recent: undefined,
    portfolio: undefined,
    text: undefined,
  };
  const [recent, setRecent] = React.useState(initialValues.recent);
  const [portfolio, setPortfolio] = React.useState(initialValues.portfolio);
  const [text, setText] = React.useState(initialValues.text);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...pORTFOLIORecord };
    setRecent(cleanValues.recent);
    setPortfolio(cleanValues.portfolio);
    setText(cleanValues.text);
    setErrors({});
  };
  const [pORTFOLIORecord, setPORTFOLIORecord] = React.useState(pORTFOLIO);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(PORTFOLIO, id) : pORTFOLIO;
      setPORTFOLIORecord(record);
    };
    queryData();
  }, [id, pORTFOLIO]);
  React.useEffect(resetStateValues, [pORTFOLIORecord]);
  const validations = {
    recent: [{ type: "Required" }],
    portfolio: [{ type: "Required" }],
    text: [{ type: "Required" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          recent,
          portfolio,
          text,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            PORTFOLIO.copyOf(pORTFOLIORecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "PORTFOLIOUpdateForm")}
    >
      <TextField
        label="Recent"
        isRequired={true}
        isReadOnly={false}
        defaultValue={recent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recent: value,
              portfolio,
              text,
            };
            const result = onChange(modelFields);
            value = result?.recent ?? value;
          }
          if (errors.recent?.hasError) {
            runValidationTasks("recent", value);
          }
          setRecent(value);
        }}
        onBlur={() => runValidationTasks("recent", recent)}
        errorMessage={errors.recent?.errorMessage}
        hasError={errors.recent?.hasError}
        {...getOverrideProps(overrides, "recent")}
      ></TextField>
      <TextField
        label="Portfolio"
        isRequired={true}
        isReadOnly={false}
        defaultValue={portfolio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recent,
              portfolio: value,
              text,
            };
            const result = onChange(modelFields);
            value = result?.portfolio ?? value;
          }
          if (errors.portfolio?.hasError) {
            runValidationTasks("portfolio", value);
          }
          setPortfolio(value);
        }}
        onBlur={() => runValidationTasks("portfolio", portfolio)}
        errorMessage={errors.portfolio?.errorMessage}
        hasError={errors.portfolio?.hasError}
        {...getOverrideProps(overrides, "portfolio")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={true}
        isReadOnly={false}
        defaultValue={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recent,
              portfolio,
              text: value,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
