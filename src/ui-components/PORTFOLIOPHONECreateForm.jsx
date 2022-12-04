/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { PORTFOLIOPHONE } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PORTFOLIOPHONECreateForm(props) {
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
    imgPhone: undefined,
    imgContent: undefined,
    projectTitle: undefined,
    projectDescription: undefined,
    btnText: undefined,
    btnLink: undefined,
  };
  const [imgPhone, setImgPhone] = React.useState(initialValues.imgPhone);
  const [imgContent, setImgContent] = React.useState(initialValues.imgContent);
  const [projectTitle, setProjectTitle] = React.useState(
    initialValues.projectTitle
  );
  const [projectDescription, setProjectDescription] = React.useState(
    initialValues.projectDescription
  );
  const [btnText, setBtnText] = React.useState(initialValues.btnText);
  const [btnLink, setBtnLink] = React.useState(initialValues.btnLink);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImgPhone(initialValues.imgPhone);
    setImgContent(initialValues.imgContent);
    setProjectTitle(initialValues.projectTitle);
    setProjectDescription(initialValues.projectDescription);
    setBtnText(initialValues.btnText);
    setBtnLink(initialValues.btnLink);
    setErrors({});
  };
  const validations = {
    imgPhone: [{ type: "Required" }],
    imgContent: [{ type: "Required" }],
    projectTitle: [{ type: "Required" }],
    projectDescription: [{ type: "Required" }],
    btnText: [{ type: "Required" }],
    btnLink: [],
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
          imgPhone,
          imgContent,
          projectTitle,
          projectDescription,
          btnText,
          btnLink,
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
          await DataStore.save(new PORTFOLIOPHONE(modelFields));
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
      {...getOverrideProps(overrides, "PORTFOLIOPHONECreateForm")}
    >
      <TextField
        label="Img phone"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgPhone: value,
              imgContent,
              projectTitle,
              projectDescription,
              btnText,
              btnLink,
            };
            const result = onChange(modelFields);
            value = result?.imgPhone ?? value;
          }
          if (errors.imgPhone?.hasError) {
            runValidationTasks("imgPhone", value);
          }
          setImgPhone(value);
        }}
        onBlur={() => runValidationTasks("imgPhone", imgPhone)}
        errorMessage={errors.imgPhone?.errorMessage}
        hasError={errors.imgPhone?.hasError}
        {...getOverrideProps(overrides, "imgPhone")}
      ></TextField>
      <TextField
        label="Img content"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgPhone,
              imgContent: value,
              projectTitle,
              projectDescription,
              btnText,
              btnLink,
            };
            const result = onChange(modelFields);
            value = result?.imgContent ?? value;
          }
          if (errors.imgContent?.hasError) {
            runValidationTasks("imgContent", value);
          }
          setImgContent(value);
        }}
        onBlur={() => runValidationTasks("imgContent", imgContent)}
        errorMessage={errors.imgContent?.errorMessage}
        hasError={errors.imgContent?.hasError}
        {...getOverrideProps(overrides, "imgContent")}
      ></TextField>
      <TextField
        label="Project title"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgPhone,
              imgContent,
              projectTitle: value,
              projectDescription,
              btnText,
              btnLink,
            };
            const result = onChange(modelFields);
            value = result?.projectTitle ?? value;
          }
          if (errors.projectTitle?.hasError) {
            runValidationTasks("projectTitle", value);
          }
          setProjectTitle(value);
        }}
        onBlur={() => runValidationTasks("projectTitle", projectTitle)}
        errorMessage={errors.projectTitle?.errorMessage}
        hasError={errors.projectTitle?.hasError}
        {...getOverrideProps(overrides, "projectTitle")}
      ></TextField>
      <TextField
        label="Project description"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgPhone,
              imgContent,
              projectTitle,
              projectDescription: value,
              btnText,
              btnLink,
            };
            const result = onChange(modelFields);
            value = result?.projectDescription ?? value;
          }
          if (errors.projectDescription?.hasError) {
            runValidationTasks("projectDescription", value);
          }
          setProjectDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("projectDescription", projectDescription)
        }
        errorMessage={errors.projectDescription?.errorMessage}
        hasError={errors.projectDescription?.hasError}
        {...getOverrideProps(overrides, "projectDescription")}
      ></TextField>
      <TextField
        label="Btn text"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgPhone,
              imgContent,
              projectTitle,
              projectDescription,
              btnText: value,
              btnLink,
            };
            const result = onChange(modelFields);
            value = result?.btnText ?? value;
          }
          if (errors.btnText?.hasError) {
            runValidationTasks("btnText", value);
          }
          setBtnText(value);
        }}
        onBlur={() => runValidationTasks("btnText", btnText)}
        errorMessage={errors.btnText?.errorMessage}
        hasError={errors.btnText?.hasError}
        {...getOverrideProps(overrides, "btnText")}
      ></TextField>
      <TextField
        label="Btn link"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgPhone,
              imgContent,
              projectTitle,
              projectDescription,
              btnText,
              btnLink: value,
            };
            const result = onChange(modelFields);
            value = result?.btnLink ?? value;
          }
          if (errors.btnLink?.hasError) {
            runValidationTasks("btnLink", value);
          }
          setBtnLink(value);
        }}
        onBlur={() => runValidationTasks("btnLink", btnLink)}
        errorMessage={errors.btnLink?.errorMessage}
        hasError={errors.btnLink?.hasError}
        {...getOverrideProps(overrides, "btnLink")}
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
