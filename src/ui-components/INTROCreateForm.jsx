/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { INTRO } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function INTROCreateForm(props) {
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
    firstText: undefined,
    name: undefined,
    description: undefined,
    emphasesedText: undefined,
    descriptionCont: undefined,
    hireMeLink: undefined,
    githubLink: undefined,
    linkedinLink: undefined,
    instagramLink: undefined,
    githubImage: undefined,
    instagramImage: undefined,
    linkedinImage: undefined,
    glasse: undefined,
    floatingrightImage: undefined,
    floatingrightText: undefined,
    floatingleftImage: undefined,
    floatingleftText: undefined,
  };
  const [firstText, setFirstText] = React.useState(initialValues.firstText);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [emphasesedText, setEmphasesedText] = React.useState(
    initialValues.emphasesedText
  );
  const [descriptionCont, setDescriptionCont] = React.useState(
    initialValues.descriptionCont
  );
  const [hireMeLink, setHireMeLink] = React.useState(initialValues.hireMeLink);
  const [githubLink, setGithubLink] = React.useState(initialValues.githubLink);
  const [linkedinLink, setLinkedinLink] = React.useState(
    initialValues.linkedinLink
  );
  const [instagramLink, setInstagramLink] = React.useState(
    initialValues.instagramLink
  );
  const [githubImage, setGithubImage] = React.useState(
    initialValues.githubImage
  );
  const [instagramImage, setInstagramImage] = React.useState(
    initialValues.instagramImage
  );
  const [linkedinImage, setLinkedinImage] = React.useState(
    initialValues.linkedinImage
  );
  const [glasse, setGlasse] = React.useState(initialValues.glasse);
  const [floatingrightImage, setFloatingrightImage] = React.useState(
    initialValues.floatingrightImage
  );
  const [floatingrightText, setFloatingrightText] = React.useState(
    initialValues.floatingrightText
  );
  const [floatingleftImage, setFloatingleftImage] = React.useState(
    initialValues.floatingleftImage
  );
  const [floatingleftText, setFloatingleftText] = React.useState(
    initialValues.floatingleftText
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstText(initialValues.firstText);
    setName(initialValues.name);
    setDescription(initialValues.description);
    setEmphasesedText(initialValues.emphasesedText);
    setDescriptionCont(initialValues.descriptionCont);
    setHireMeLink(initialValues.hireMeLink);
    setGithubLink(initialValues.githubLink);
    setLinkedinLink(initialValues.linkedinLink);
    setInstagramLink(initialValues.instagramLink);
    setGithubImage(initialValues.githubImage);
    setInstagramImage(initialValues.instagramImage);
    setLinkedinImage(initialValues.linkedinImage);
    setGlasse(initialValues.glasse);
    setFloatingrightImage(initialValues.floatingrightImage);
    setFloatingrightText(initialValues.floatingrightText);
    setFloatingleftImage(initialValues.floatingleftImage);
    setFloatingleftText(initialValues.floatingleftText);
    setErrors({});
  };
  const validations = {
    firstText: [{ type: "Required" }],
    name: [{ type: "Required" }],
    description: [{ type: "Required" }],
    emphasesedText: [{ type: "Required" }],
    descriptionCont: [{ type: "Required" }],
    hireMeLink: [{ type: "Required" }],
    githubLink: [{ type: "Required" }],
    linkedinLink: [{ type: "Required" }],
    instagramLink: [{ type: "Required" }],
    githubImage: [{ type: "Required" }],
    instagramImage: [{ type: "Required" }],
    linkedinImage: [{ type: "Required" }],
    glasse: [{ type: "Required" }],
    floatingrightImage: [{ type: "Required" }],
    floatingrightText: [{ type: "Required" }],
    floatingleftImage: [{ type: "Required" }],
    floatingleftText: [{ type: "Required" }],
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
          firstText,
          name,
          description,
          emphasesedText,
          descriptionCont,
          hireMeLink,
          githubLink,
          linkedinLink,
          instagramLink,
          githubImage,
          instagramImage,
          linkedinImage,
          glasse,
          floatingrightImage,
          floatingrightText,
          floatingleftImage,
          floatingleftText,
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
          await DataStore.save(new INTRO(modelFields));
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
      {...getOverrideProps(overrides, "INTROCreateForm")}
    >
      <TextField
        label="First text"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText: value,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.firstText ?? value;
          }
          if (errors.firstText?.hasError) {
            runValidationTasks("firstText", value);
          }
          setFirstText(value);
        }}
        onBlur={() => runValidationTasks("firstText", firstText)}
        errorMessage={errors.firstText?.errorMessage}
        hasError={errors.firstText?.hasError}
        {...getOverrideProps(overrides, "firstText")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name: value,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description: value,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Emphasesed text"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText: value,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.emphasesedText ?? value;
          }
          if (errors.emphasesedText?.hasError) {
            runValidationTasks("emphasesedText", value);
          }
          setEmphasesedText(value);
        }}
        onBlur={() => runValidationTasks("emphasesedText", emphasesedText)}
        errorMessage={errors.emphasesedText?.errorMessage}
        hasError={errors.emphasesedText?.hasError}
        {...getOverrideProps(overrides, "emphasesedText")}
      ></TextField>
      <TextField
        label="Description cont"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont: value,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.descriptionCont ?? value;
          }
          if (errors.descriptionCont?.hasError) {
            runValidationTasks("descriptionCont", value);
          }
          setDescriptionCont(value);
        }}
        onBlur={() => runValidationTasks("descriptionCont", descriptionCont)}
        errorMessage={errors.descriptionCont?.errorMessage}
        hasError={errors.descriptionCont?.hasError}
        {...getOverrideProps(overrides, "descriptionCont")}
      ></TextField>
      <TextField
        label="Hire me link"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink: value,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.hireMeLink ?? value;
          }
          if (errors.hireMeLink?.hasError) {
            runValidationTasks("hireMeLink", value);
          }
          setHireMeLink(value);
        }}
        onBlur={() => runValidationTasks("hireMeLink", hireMeLink)}
        errorMessage={errors.hireMeLink?.errorMessage}
        hasError={errors.hireMeLink?.hasError}
        {...getOverrideProps(overrides, "hireMeLink")}
      ></TextField>
      <TextField
        label="Github link"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink: value,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
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
        label="Linkedin link"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink: value,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
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
        label="Instagram link"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink: value,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
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
        label="Github image"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage: value,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.githubImage ?? value;
          }
          if (errors.githubImage?.hasError) {
            runValidationTasks("githubImage", value);
          }
          setGithubImage(value);
        }}
        onBlur={() => runValidationTasks("githubImage", githubImage)}
        errorMessage={errors.githubImage?.errorMessage}
        hasError={errors.githubImage?.hasError}
        {...getOverrideProps(overrides, "githubImage")}
      ></TextField>
      <TextField
        label="Instagram image"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage: value,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.instagramImage ?? value;
          }
          if (errors.instagramImage?.hasError) {
            runValidationTasks("instagramImage", value);
          }
          setInstagramImage(value);
        }}
        onBlur={() => runValidationTasks("instagramImage", instagramImage)}
        errorMessage={errors.instagramImage?.errorMessage}
        hasError={errors.instagramImage?.hasError}
        {...getOverrideProps(overrides, "instagramImage")}
      ></TextField>
      <TextField
        label="Linkedin image"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage: value,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.linkedinImage ?? value;
          }
          if (errors.linkedinImage?.hasError) {
            runValidationTasks("linkedinImage", value);
          }
          setLinkedinImage(value);
        }}
        onBlur={() => runValidationTasks("linkedinImage", linkedinImage)}
        errorMessage={errors.linkedinImage?.errorMessage}
        hasError={errors.linkedinImage?.hasError}
        {...getOverrideProps(overrides, "linkedinImage")}
      ></TextField>
      <TextField
        label="Glasse"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse: value,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.glasse ?? value;
          }
          if (errors.glasse?.hasError) {
            runValidationTasks("glasse", value);
          }
          setGlasse(value);
        }}
        onBlur={() => runValidationTasks("glasse", glasse)}
        errorMessage={errors.glasse?.errorMessage}
        hasError={errors.glasse?.hasError}
        {...getOverrideProps(overrides, "glasse")}
      ></TextField>
      <TextField
        label="Floatingright image"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage: value,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.floatingrightImage ?? value;
          }
          if (errors.floatingrightImage?.hasError) {
            runValidationTasks("floatingrightImage", value);
          }
          setFloatingrightImage(value);
        }}
        onBlur={() =>
          runValidationTasks("floatingrightImage", floatingrightImage)
        }
        errorMessage={errors.floatingrightImage?.errorMessage}
        hasError={errors.floatingrightImage?.hasError}
        {...getOverrideProps(overrides, "floatingrightImage")}
      ></TextField>
      <TextField
        label="Floatingright text"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText: value,
              floatingleftImage,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.floatingrightText ?? value;
          }
          if (errors.floatingrightText?.hasError) {
            runValidationTasks("floatingrightText", value);
          }
          setFloatingrightText(value);
        }}
        onBlur={() =>
          runValidationTasks("floatingrightText", floatingrightText)
        }
        errorMessage={errors.floatingrightText?.errorMessage}
        hasError={errors.floatingrightText?.hasError}
        {...getOverrideProps(overrides, "floatingrightText")}
      ></TextField>
      <TextField
        label="Floatingleft image"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage: value,
              floatingleftText,
            };
            const result = onChange(modelFields);
            value = result?.floatingleftImage ?? value;
          }
          if (errors.floatingleftImage?.hasError) {
            runValidationTasks("floatingleftImage", value);
          }
          setFloatingleftImage(value);
        }}
        onBlur={() =>
          runValidationTasks("floatingleftImage", floatingleftImage)
        }
        errorMessage={errors.floatingleftImage?.errorMessage}
        hasError={errors.floatingleftImage?.hasError}
        {...getOverrideProps(overrides, "floatingleftImage")}
      ></TextField>
      <TextField
        label="Floatingleft text"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              hireMeLink,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              instagramImage,
              linkedinImage,
              glasse,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText: value,
            };
            const result = onChange(modelFields);
            value = result?.floatingleftText ?? value;
          }
          if (errors.floatingleftText?.hasError) {
            runValidationTasks("floatingleftText", value);
          }
          setFloatingleftText(value);
        }}
        onBlur={() => runValidationTasks("floatingleftText", floatingleftText)}
        errorMessage={errors.floatingleftText?.errorMessage}
        hasError={errors.floatingleftText?.hasError}
        {...getOverrideProps(overrides, "floatingleftText")}
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
