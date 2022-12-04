/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { EXPERIENCE } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function EXPERIENCEUpdateForm(props) {
  const {
    id,
    eXPERIENCE,
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
    yearsExperience: undefined,
    completedProjects: undefined,
    companiesWord: undefined,
  };
  const [yearsExperience, setYearsExperience] = React.useState(
    initialValues.yearsExperience
  );
  const [completedProjects, setCompletedProjects] = React.useState(
    initialValues.completedProjects
  );
  const [companiesWord, setCompaniesWord] = React.useState(
    initialValues.companiesWord
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...eXPERIENCERecord };
    setYearsExperience(cleanValues.yearsExperience);
    setCompletedProjects(cleanValues.completedProjects);
    setCompaniesWord(cleanValues.companiesWord);
    setErrors({});
  };
  const [eXPERIENCERecord, setEXPERIENCERecord] = React.useState(eXPERIENCE);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(EXPERIENCE, id) : eXPERIENCE;
      setEXPERIENCERecord(record);
    };
    queryData();
  }, [id, eXPERIENCE]);
  React.useEffect(resetStateValues, [eXPERIENCERecord]);
  const validations = {
    yearsExperience: [{ type: "Required" }],
    completedProjects: [{ type: "Required" }],
    companiesWord: [{ type: "Required" }],
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
          yearsExperience,
          completedProjects,
          companiesWord,
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
            EXPERIENCE.copyOf(eXPERIENCERecord, (updated) => {
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
      {...getOverrideProps(overrides, "EXPERIENCEUpdateForm")}
    >
      <TextField
        label="Years experience"
        isRequired={true}
        isReadOnly={false}
        defaultValue={yearsExperience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              yearsExperience: value,
              completedProjects,
              companiesWord,
            };
            const result = onChange(modelFields);
            value = result?.yearsExperience ?? value;
          }
          if (errors.yearsExperience?.hasError) {
            runValidationTasks("yearsExperience", value);
          }
          setYearsExperience(value);
        }}
        onBlur={() => runValidationTasks("yearsExperience", yearsExperience)}
        errorMessage={errors.yearsExperience?.errorMessage}
        hasError={errors.yearsExperience?.hasError}
        {...getOverrideProps(overrides, "yearsExperience")}
      ></TextField>
      <TextField
        label="Completed projects"
        isRequired={true}
        isReadOnly={false}
        defaultValue={completedProjects}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              yearsExperience,
              completedProjects: value,
              companiesWord,
            };
            const result = onChange(modelFields);
            value = result?.completedProjects ?? value;
          }
          if (errors.completedProjects?.hasError) {
            runValidationTasks("completedProjects", value);
          }
          setCompletedProjects(value);
        }}
        onBlur={() =>
          runValidationTasks("completedProjects", completedProjects)
        }
        errorMessage={errors.completedProjects?.errorMessage}
        hasError={errors.completedProjects?.hasError}
        {...getOverrideProps(overrides, "completedProjects")}
      ></TextField>
      <TextField
        label="Companies word"
        isRequired={true}
        isReadOnly={false}
        defaultValue={companiesWord}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              yearsExperience,
              completedProjects,
              companiesWord: value,
            };
            const result = onChange(modelFields);
            value = result?.companiesWord ?? value;
          }
          if (errors.companiesWord?.hasError) {
            runValidationTasks("companiesWord", value);
          }
          setCompaniesWord(value);
        }}
        onBlur={() => runValidationTasks("companiesWord", companiesWord)}
        errorMessage={errors.companiesWord?.errorMessage}
        hasError={errors.companiesWord?.hasError}
        {...getOverrideProps(overrides, "companiesWord")}
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
