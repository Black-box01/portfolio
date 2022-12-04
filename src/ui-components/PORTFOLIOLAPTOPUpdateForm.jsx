/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { PORTFOLIOLAPTOP } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PORTFOLIOLAPTOPUpdateForm(props) {
  const {
    id,
    pORTFOLIOLAPTOP,
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
    imgLaptop: undefined,
    imgContent: undefined,
    projectTitle: undefined,
    projectDescription: undefined,
    btnText: undefined,
    btnLink: undefined,
  };
  const [imgLaptop, setImgLaptop] = React.useState(initialValues.imgLaptop);
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
    const cleanValues = { ...initialValues, ...pORTFOLIOLAPTOPRecord };
    setImgLaptop(cleanValues.imgLaptop);
    setImgContent(cleanValues.imgContent);
    setProjectTitle(cleanValues.projectTitle);
    setProjectDescription(cleanValues.projectDescription);
    setBtnText(cleanValues.btnText);
    setBtnLink(cleanValues.btnLink);
    setErrors({});
  };
  const [pORTFOLIOLAPTOPRecord, setPORTFOLIOLAPTOPRecord] =
    React.useState(pORTFOLIOLAPTOP);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(PORTFOLIOLAPTOP, id)
        : pORTFOLIOLAPTOP;
      setPORTFOLIOLAPTOPRecord(record);
    };
    queryData();
  }, [id, pORTFOLIOLAPTOP]);
  React.useEffect(resetStateValues, [pORTFOLIOLAPTOPRecord]);
  const validations = {
    imgLaptop: [{ type: "Required" }],
    imgContent: [{ type: "Required" }],
    projectTitle: [{ type: "Required" }],
    projectDescription: [{ type: "Required" }],
    btnText: [{ type: "Required" }],
    btnLink: [{ type: "Required" }],
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
          imgLaptop,
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
          await DataStore.save(
            PORTFOLIOLAPTOP.copyOf(pORTFOLIOLAPTOPRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PORTFOLIOLAPTOPUpdateForm")}
    >
      <TextField
        label="Img laptop"
        isRequired={true}
        isReadOnly={false}
        defaultValue={imgLaptop}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgLaptop: value,
              imgContent,
              projectTitle,
              projectDescription,
              btnText,
              btnLink,
            };
            const result = onChange(modelFields);
            value = result?.imgLaptop ?? value;
          }
          if (errors.imgLaptop?.hasError) {
            runValidationTasks("imgLaptop", value);
          }
          setImgLaptop(value);
        }}
        onBlur={() => runValidationTasks("imgLaptop", imgLaptop)}
        errorMessage={errors.imgLaptop?.errorMessage}
        hasError={errors.imgLaptop?.hasError}
        {...getOverrideProps(overrides, "imgLaptop")}
      ></TextField>
      <TextField
        label="Img content"
        isRequired={true}
        isReadOnly={false}
        defaultValue={imgContent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgLaptop,
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
        defaultValue={projectTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgLaptop,
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
        defaultValue={projectDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgLaptop,
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
        defaultValue={btnText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgLaptop,
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
        isRequired={true}
        isReadOnly={false}
        defaultValue={btnLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgLaptop,
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
