/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { FOOTER } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function FOOTERCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    instagramLink: undefined,
    linkedinLink: undefined,
    githubLink: undefined,
    allRights: undefined,
    email: undefined,
    developer: undefined,
  };
  const [instagramLink, setInstagramLink] = React.useState(
    initialValues.instagramLink
  );
  const [linkedinLink, setLinkedinLink] = React.useState(
    initialValues.linkedinLink
  );
  const [githubLink, setGithubLink] = React.useState(initialValues.githubLink);
  const [allRights, setAllRights] = React.useState(initialValues.allRights);
  const [email, setEmail] = React.useState(initialValues.email);
  const [developer, setDeveloper] = React.useState(initialValues.developer);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setInstagramLink(initialValues.instagramLink);
    setLinkedinLink(initialValues.linkedinLink);
    setGithubLink(initialValues.githubLink);
    setAllRights(initialValues.allRights);
    setEmail(initialValues.email);
    setDeveloper(initialValues.developer);
    setErrors({});
  };
  const validations = {
    instagramLink: [{ type: "Required" }],
    linkedinLink: [{ type: "Required" }],
    githubLink: [{ type: "Required" }],
    allRights: [{ type: "Required" }],
    email: [{ type: "Required" }],
    developer: [{ type: "Required" }],
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
          instagramLink,
          linkedinLink,
          githubLink,
          allRights,
          email,
          developer,
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
          await DataStore.save(new FOOTER(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "FOOTERCreateForm")}
    >
      <TextField
        label="Instagram link"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instagramLink: value,
              linkedinLink,
              githubLink,
              allRights,
              email,
              developer,
            };
            const result = onChange(modelFields);
            value = result?.instagramLink ?? value;
          }
          if (errors.instagramLink?.hasError) {
            runValidationTasks("instagramLink", value);
          }
          setInstagramLink(value);
        }}
        onBlur={() => runValidationTasks("instagramLink", instagramLink)}
        errorMessage={errors.instagramLink?.errorMessage}
        hasError={errors.instagramLink?.hasError}
        {...getOverrideProps(overrides, "instagramLink")}
      ></TextField>
      <TextField
        label="Linkedin link"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instagramLink,
              linkedinLink: value,
              githubLink,
              allRights,
              email,
              developer,
            };
            const result = onChange(modelFields);
            value = result?.linkedinLink ?? value;
          }
          if (errors.linkedinLink?.hasError) {
            runValidationTasks("linkedinLink", value);
          }
          setLinkedinLink(value);
        }}
        onBlur={() => runValidationTasks("linkedinLink", linkedinLink)}
        errorMessage={errors.linkedinLink?.errorMessage}
        hasError={errors.linkedinLink?.hasError}
        {...getOverrideProps(overrides, "linkedinLink")}
      ></TextField>
      <TextField
        label="Github link"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instagramLink,
              linkedinLink,
              githubLink: value,
              allRights,
              email,
              developer,
            };
            const result = onChange(modelFields);
            value = result?.githubLink ?? value;
          }
          if (errors.githubLink?.hasError) {
            runValidationTasks("githubLink", value);
          }
          setGithubLink(value);
        }}
        onBlur={() => runValidationTasks("githubLink", githubLink)}
        errorMessage={errors.githubLink?.errorMessage}
        hasError={errors.githubLink?.hasError}
        {...getOverrideProps(overrides, "githubLink")}
      ></TextField>
      <TextField
        label="All rights"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instagramLink,
              linkedinLink,
              githubLink,
              allRights: value,
              email,
              developer,
            };
            const result = onChange(modelFields);
            value = result?.allRights ?? value;
          }
          if (errors.allRights?.hasError) {
            runValidationTasks("allRights", value);
          }
          setAllRights(value);
        }}
        onBlur={() => runValidationTasks("allRights", allRights)}
        errorMessage={errors.allRights?.errorMessage}
        hasError={errors.allRights?.hasError}
        {...getOverrideProps(overrides, "allRights")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instagramLink,
              linkedinLink,
              githubLink,
              allRights,
              email: value,
              developer,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Developer"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instagramLink,
              linkedinLink,
              githubLink,
              allRights,
              email,
              developer: value,
            };
            const result = onChange(modelFields);
            value = result?.developer ?? value;
          }
          if (errors.developer?.hasError) {
            runValidationTasks("developer", value);
          }
          setDeveloper(value);
        }}
        onBlur={() => runValidationTasks("developer", developer)}
        errorMessage={errors.developer?.errorMessage}
        hasError={errors.developer?.hasError}
        {...getOverrideProps(overrides, "developer")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
