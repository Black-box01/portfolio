/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { INTROes } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function INTROesUpdateForm(props) {
  const {
    id,
    iNTROes,
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
    githubLink: undefined,
    linkedinLink: undefined,
    instagramLink: undefined,
    githubImage: undefined,
    linkedinImage: undefined,
    instagramImage: undefined,
    glasses: undefined,
    floatingrightImage: undefined,
    floatingrightText: undefined,
    floatingleftImage: undefined,
    floatingleftText: undefined,
    characterImage: undefined,
    blueBkImage: undefined,
    orangeBkImage: undefined,
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
  const [linkedinImage, setLinkedinImage] = React.useState(
    initialValues.linkedinImage
  );
  const [instagramImage, setInstagramImage] = React.useState(
    initialValues.instagramImage
  );
  const [glasses, setGlasses] = React.useState(initialValues.glasses);
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
  const [characterImage, setCharacterImage] = React.useState(
    initialValues.characterImage
  );
  const [blueBkImage, setBlueBkImage] = React.useState(
    initialValues.blueBkImage
  );
  const [orangeBkImage, setOrangeBkImage] = React.useState(
    initialValues.orangeBkImage
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...iNTROesRecord };
    setFirstText(cleanValues.firstText);
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setEmphasesedText(cleanValues.emphasesedText);
    setDescriptionCont(cleanValues.descriptionCont);
    setGithubLink(cleanValues.githubLink);
    setLinkedinLink(cleanValues.linkedinLink);
    setInstagramLink(cleanValues.instagramLink);
    setGithubImage(cleanValues.githubImage);
    setLinkedinImage(cleanValues.linkedinImage);
    setInstagramImage(cleanValues.instagramImage);
    setGlasses(cleanValues.glasses);
    setFloatingrightImage(cleanValues.floatingrightImage);
    setFloatingrightText(cleanValues.floatingrightText);
    setFloatingleftImage(cleanValues.floatingleftImage);
    setFloatingleftText(cleanValues.floatingleftText);
    setCharacterImage(cleanValues.characterImage);
    setBlueBkImage(cleanValues.blueBkImage);
    setOrangeBkImage(cleanValues.orangeBkImage);
    setErrors({});
  };
  const [iNTROesRecord, setINTROesRecord] = React.useState(iNTROes);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(INTROes, id) : iNTROes;
      setINTROesRecord(record);
    };
    queryData();
  }, [id, iNTROes]);
  React.useEffect(resetStateValues, [iNTROesRecord]);
  const validations = {
    firstText: [{ type: "Required" }],
    name: [{ type: "Required" }],
    description: [{ type: "Required" }],
    emphasesedText: [{ type: "Required" }],
    descriptionCont: [{ type: "Required" }],
    githubLink: [{ type: "Required" }],
    linkedinLink: [{ type: "Required" }],
    instagramLink: [{ type: "Required" }],
    githubImage: [{ type: "Required" }],
    linkedinImage: [{ type: "Required" }],
    instagramImage: [{ type: "Required" }],
    glasses: [{ type: "Required" }],
    floatingrightImage: [{ type: "Required" }],
    floatingrightText: [{ type: "Required" }],
    floatingleftImage: [{ type: "Required" }],
    floatingleftText: [{ type: "Required" }],
    characterImage: [{ type: "Required" }],
    blueBkImage: [{ type: "Required" }],
    orangeBkImage: [{ type: "Required" }],
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
          githubLink,
          linkedinLink,
          instagramLink,
          githubImage,
          linkedinImage,
          instagramImage,
          glasses,
          floatingrightImage,
          floatingrightText,
          floatingleftImage,
          floatingleftText,
          characterImage,
          blueBkImage,
          orangeBkImage,
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
            INTROes.copyOf(iNTROesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "INTROesUpdateForm")}
    >
      <TextField
        label="First text"
        isRequired={true}
        isReadOnly={false}
        defaultValue={firstText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText: value,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name: value,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description: value,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={emphasesedText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText: value,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={descriptionCont}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont: value,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        label="Github link"
        isRequired={true}
        isReadOnly={false}
        defaultValue={githubLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink: value,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={linkedinLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink: value,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={instagramLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink: value,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={githubImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage: value,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        label="Linkedin image"
        isRequired={true}
        isReadOnly={false}
        defaultValue={linkedinImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage: value,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        label="Instagram image"
        isRequired={true}
        isReadOnly={false}
        defaultValue={instagramImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage: value,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        label="Glasses"
        isRequired={true}
        isReadOnly={false}
        defaultValue={glasses}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses: value,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
            };
            const result = onChange(modelFields);
            value = result?.glasses ?? value;
          }
          if (errors.glasses?.hasError) {
            runValidationTasks("glasses", value);
          }
          setGlasses(value);
        }}
        onBlur={() => runValidationTasks("glasses", glasses)}
        errorMessage={errors.glasses?.errorMessage}
        hasError={errors.glasses?.hasError}
        {...getOverrideProps(overrides, "glasses")}
      ></TextField>
      <TextField
        label="Floatingright image"
        isRequired={true}
        isReadOnly={false}
        defaultValue={floatingrightImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage: value,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={floatingrightText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText: value,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={floatingleftImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage: value,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
        defaultValue={floatingleftText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText: value,
              characterImage,
              blueBkImage,
              orangeBkImage,
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
      <TextField
        label="Character image"
        isRequired={true}
        isReadOnly={false}
        defaultValue={characterImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage: value,
              blueBkImage,
              orangeBkImage,
            };
            const result = onChange(modelFields);
            value = result?.characterImage ?? value;
          }
          if (errors.characterImage?.hasError) {
            runValidationTasks("characterImage", value);
          }
          setCharacterImage(value);
        }}
        onBlur={() => runValidationTasks("characterImage", characterImage)}
        errorMessage={errors.characterImage?.errorMessage}
        hasError={errors.characterImage?.hasError}
        {...getOverrideProps(overrides, "characterImage")}
      ></TextField>
      <TextField
        label="Blue bk image"
        isRequired={true}
        isReadOnly={false}
        defaultValue={blueBkImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage: value,
              orangeBkImage,
            };
            const result = onChange(modelFields);
            value = result?.blueBkImage ?? value;
          }
          if (errors.blueBkImage?.hasError) {
            runValidationTasks("blueBkImage", value);
          }
          setBlueBkImage(value);
        }}
        onBlur={() => runValidationTasks("blueBkImage", blueBkImage)}
        errorMessage={errors.blueBkImage?.errorMessage}
        hasError={errors.blueBkImage?.hasError}
        {...getOverrideProps(overrides, "blueBkImage")}
      ></TextField>
      <TextField
        label="Orange bk image"
        isRequired={true}
        isReadOnly={false}
        defaultValue={orangeBkImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstText,
              name,
              description,
              emphasesedText,
              descriptionCont,
              githubLink,
              linkedinLink,
              instagramLink,
              githubImage,
              linkedinImage,
              instagramImage,
              glasses,
              floatingrightImage,
              floatingrightText,
              floatingleftImage,
              floatingleftText,
              characterImage,
              blueBkImage,
              orangeBkImage: value,
            };
            const result = onChange(modelFields);
            value = result?.orangeBkImage ?? value;
          }
          if (errors.orangeBkImage?.hasError) {
            runValidationTasks("orangeBkImage", value);
          }
          setOrangeBkImage(value);
        }}
        onBlur={() => runValidationTasks("orangeBkImage", orangeBkImage)}
        errorMessage={errors.orangeBkImage?.errorMessage}
        hasError={errors.orangeBkImage?.hasError}
        {...getOverrideProps(overrides, "orangeBkImage")}
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
