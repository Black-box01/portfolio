/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { PORTFOLIOLAPTOPNEW } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PORTFOLIOLAPTOPNEWUpdateForm(props) {
  const {
    id,
    pORTFOLIOLAPTOPNEW,
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
    btnTex: undefined,
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
  const [btnTex, setBtnTex] = React.useState(initialValues.btnTex);
  const [btnLink, setBtnLink] = React.useState(initialValues.btnLink);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...pORTFOLIOLAPTOPNEWRecord };
    setImgLaptop(cleanValues.imgLaptop);
    setImgContent(cleanValues.imgContent);
    setProjectTitle(cleanValues.projectTitle);
    setProjectDescription(cleanValues.projectDescription);
    setBtnTex(cleanValues.btnTex);
    setBtnLink(cleanValues.btnLink);
    setErrors({});
  };
  const [pORTFOLIOLAPTOPNEWRecord, setPORTFOLIOLAPTOPNEWRecord] =
    React.useState(pORTFOLIOLAPTOPNEW);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(PORTFOLIOLAPTOPNEW, id)
        : pORTFOLIOLAPTOPNEW;
      setPORTFOLIOLAPTOPNEWRecord(record);
    };
    queryData();
  }, [id, pORTFOLIOLAPTOPNEW]);
  React.useEffect(resetStateValues, [pORTFOLIOLAPTOPNEWRecord]);
  const validations = {
    imgLaptop: [],
    imgContent: [],
    projectTitle: [],
    projectDescription: [],
    btnTex: [],
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
          imgLaptop,
          imgContent,
          projectTitle,
          projectDescription,
          btnTex,
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
            PORTFOLIOLAPTOPNEW.copyOf(pORTFOLIOLAPTOPNEWRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PORTFOLIOLAPTOPNEWUpdateForm")}
    >
      <TextField
        label="Img laptop"
        isRequired={false}
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
              btnTex,
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
        isRequired={false}
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
              btnTex,
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
        isRequired={false}
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
              btnTex,
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
        isRequired={false}
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
              btnTex,
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
        label="Btn tex"
        isRequired={false}
        isReadOnly={false}
        defaultValue={btnTex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imgLaptop,
              imgContent,
              projectTitle,
              projectDescription,
              btnTex: value,
              btnLink,
            };
            const result = onChange(modelFields);
            value = result?.btnTex ?? value;
          }
          if (errors.btnTex?.hasError) {
            runValidationTasks("btnTex", value);
          }
          setBtnTex(value);
        }}
        onBlur={() => runValidationTasks("btnTex", btnTex)}
        errorMessage={errors.btnTex?.errorMessage}
        hasError={errors.btnTex?.hasError}
        {...getOverrideProps(overrides, "btnTex")}
      ></TextField>
      <TextField
        label="Btn link"
        isRequired={false}
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
              btnTex,
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
