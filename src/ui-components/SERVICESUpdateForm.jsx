/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { SERVICES } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SERVICESUpdateForm(props) {
  const {
    id,
    sERVICES,
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
    awesome: undefined,
    services: undefined,
    text: undefined,
    cardDesign: undefined,
    cardDeveloper: undefined,
    cardUi: undefined,
  };
  const [awesome, setAwesome] = React.useState(initialValues.awesome);
  const [services, setServices] = React.useState(initialValues.services);
  const [text, setText] = React.useState(initialValues.text);
  const [cardDesign, setCardDesign] = React.useState(initialValues.cardDesign);
  const [cardDeveloper, setCardDeveloper] = React.useState(
    initialValues.cardDeveloper
  );
  const [cardUi, setCardUi] = React.useState(initialValues.cardUi);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...sERVICESRecord };
    setAwesome(cleanValues.awesome);
    setServices(cleanValues.services);
    setText(cleanValues.text);
    setCardDesign(cleanValues.cardDesign);
    setCardDeveloper(cleanValues.cardDeveloper);
    setCardUi(cleanValues.cardUi);
    setErrors({});
  };
  const [sERVICESRecord, setSERVICESRecord] = React.useState(sERVICES);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(SERVICES, id) : sERVICES;
      setSERVICESRecord(record);
    };
    queryData();
  }, [id, sERVICES]);
  React.useEffect(resetStateValues, [sERVICESRecord]);
  const validations = {
    awesome: [{ type: "Required" }],
    services: [{ type: "Required" }],
    text: [{ type: "Required" }],
    cardDesign: [{ type: "Required" }],
    cardDeveloper: [{ type: "Required" }],
    cardUi: [{ type: "Required" }],
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
          awesome,
          services,
          text,
          cardDesign,
          cardDeveloper,
          cardUi,
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
            SERVICES.copyOf(sERVICESRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SERVICESUpdateForm")}
    >
      <TextField
        label="Awesome"
        isRequired={true}
        isReadOnly={false}
        defaultValue={awesome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              awesome: value,
              services,
              text,
              cardDesign,
              cardDeveloper,
              cardUi,
            };
            const result = onChange(modelFields);
            value = result?.awesome ?? value;
          }
          if (errors.awesome?.hasError) {
            runValidationTasks("awesome", value);
          }
          setAwesome(value);
        }}
        onBlur={() => runValidationTasks("awesome", awesome)}
        errorMessage={errors.awesome?.errorMessage}
        hasError={errors.awesome?.hasError}
        {...getOverrideProps(overrides, "awesome")}
      ></TextField>
      <TextField
        label="Services"
        isRequired={true}
        isReadOnly={false}
        defaultValue={services}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              awesome,
              services: value,
              text,
              cardDesign,
              cardDeveloper,
              cardUi,
            };
            const result = onChange(modelFields);
            value = result?.services ?? value;
          }
          if (errors.services?.hasError) {
            runValidationTasks("services", value);
          }
          setServices(value);
        }}
        onBlur={() => runValidationTasks("services", services)}
        errorMessage={errors.services?.errorMessage}
        hasError={errors.services?.hasError}
        {...getOverrideProps(overrides, "services")}
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
              awesome,
              services,
              text: value,
              cardDesign,
              cardDeveloper,
              cardUi,
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
      <TextField
        label="Card design"
        isRequired={true}
        isReadOnly={false}
        defaultValue={cardDesign}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              awesome,
              services,
              text,
              cardDesign: value,
              cardDeveloper,
              cardUi,
            };
            const result = onChange(modelFields);
            value = result?.cardDesign ?? value;
          }
          if (errors.cardDesign?.hasError) {
            runValidationTasks("cardDesign", value);
          }
          setCardDesign(value);
        }}
        onBlur={() => runValidationTasks("cardDesign", cardDesign)}
        errorMessage={errors.cardDesign?.errorMessage}
        hasError={errors.cardDesign?.hasError}
        {...getOverrideProps(overrides, "cardDesign")}
      ></TextField>
      <TextField
        label="Card developer"
        isRequired={true}
        isReadOnly={false}
        defaultValue={cardDeveloper}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              awesome,
              services,
              text,
              cardDesign,
              cardDeveloper: value,
              cardUi,
            };
            const result = onChange(modelFields);
            value = result?.cardDeveloper ?? value;
          }
          if (errors.cardDeveloper?.hasError) {
            runValidationTasks("cardDeveloper", value);
          }
          setCardDeveloper(value);
        }}
        onBlur={() => runValidationTasks("cardDeveloper", cardDeveloper)}
        errorMessage={errors.cardDeveloper?.errorMessage}
        hasError={errors.cardDeveloper?.hasError}
        {...getOverrideProps(overrides, "cardDeveloper")}
      ></TextField>
      <TextField
        label="Card ui"
        isRequired={true}
        isReadOnly={false}
        defaultValue={cardUi}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              awesome,
              services,
              text,
              cardDesign,
              cardDeveloper,
              cardUi: value,
            };
            const result = onChange(modelFields);
            value = result?.cardUi ?? value;
          }
          if (errors.cardUi?.hasError) {
            runValidationTasks("cardUi", value);
          }
          setCardUi(value);
        }}
        onBlur={() => runValidationTasks("cardUi", cardUi)}
        errorMessage={errors.cardUi?.errorMessage}
        hasError={errors.cardUi?.hasError}
        {...getOverrideProps(overrides, "cardUi")}
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
