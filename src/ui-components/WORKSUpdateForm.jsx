/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { WORKS } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function WORKSUpdateForm(props) {
  const {
    id,
    wORKS,
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
    works: undefined,
    brands: undefined,
    text: undefined,
  };
  const [works, setWorks] = React.useState(initialValues.works);
  const [brands, setBrands] = React.useState(initialValues.brands);
  const [text, setText] = React.useState(initialValues.text);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...wORKSRecord };
    setWorks(cleanValues.works);
    setBrands(cleanValues.brands);
    setText(cleanValues.text);
    setErrors({});
  };
  const [wORKSRecord, setWORKSRecord] = React.useState(wORKS);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(WORKS, id) : wORKS;
      setWORKSRecord(record);
    };
    queryData();
  }, [id, wORKS]);
  React.useEffect(resetStateValues, [wORKSRecord]);
  const validations = {
    works: [{ type: "Required" }],
    brands: [{ type: "Required" }],
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
          works,
          brands,
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
            WORKS.copyOf(wORKSRecord, (updated) => {
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
      {...getOverrideProps(overrides, "WORKSUpdateForm")}
    >
      <TextField
        label="Works"
        isRequired={true}
        isReadOnly={false}
        defaultValue={works}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              works: value,
              brands,
              text,
            };
            const result = onChange(modelFields);
            value = result?.works ?? value;
          }
          if (errors.works?.hasError) {
            runValidationTasks("works", value);
          }
          setWorks(value);
        }}
        onBlur={() => runValidationTasks("works", works)}
        errorMessage={errors.works?.errorMessage}
        hasError={errors.works?.hasError}
        {...getOverrideProps(overrides, "works")}
      ></TextField>
      <TextField
        label="Brands"
        isRequired={true}
        isReadOnly={false}
        defaultValue={brands}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              works,
              brands: value,
              text,
            };
            const result = onChange(modelFields);
            value = result?.brands ?? value;
          }
          if (errors.brands?.hasError) {
            runValidationTasks("brands", value);
          }
          setBrands(value);
        }}
        onBlur={() => runValidationTasks("brands", brands)}
        errorMessage={errors.brands?.errorMessage}
        hasError={errors.brands?.hasError}
        {...getOverrideProps(overrides, "brands")}
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
              works,
              brands,
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
