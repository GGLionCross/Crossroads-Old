import { required } from "@vuelidate/validators";

export const getErrorMessage = ($errors) => {
  return $errors.length ? $errors[0].$message : "";
}

export const vRequired = {
  ...required,
  $message: "Field is required"
}

export const vUsername = {
  $message: "4-16 characters. Valid: a-z A-Z 0-9 _",
  $params: { type: "username" },
  $validator: (value) => {
    const regex = /^[a-zA-Z0-9_]{4,16}$/g
    return value.match(regex);
  }
}

export const vPassword = {
  $message: "8-16 characters. Valid: a-z A-Z 0-9 _ ! @ # $ % ^ & *",
  $params: { type: "password" },
  $validator: (value) => {
    const regex = /^[a-zA-Z0-9_!@#$%^&*]{8,16}$/g
    return value.match(regex);
  }
}

export const vConfirm = ($validator) => {
  return {
    vConfirm: {
      $message: "Passwords don't match",
      $params: { type: "confirm" },
      $validator
    }
  }
}