import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { auth } from "../../../config/firebase";
import Button from "../button/Button";

const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Format email tidak sesuai")
    .required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

export default function LoginForm() {
  const navigation = useNavigation();
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async () => {
              await AsyncStorage.setItem("userEmail", values.email);
              await AsyncStorage.setItem("userPassword", values.password);
              navigation.navigate("UserNavigation");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <View style={styles.formInput}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <Text style={styles.errorInput}>
                <Text> </Text>
                {touched.email && errors.email}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              <Text style={styles.errorInput}>
                <Text> </Text>
                {touched.password && errors.password}
              </Text>
            </View>
            <View style={styles.formButton}>
              <Button
                text={"Masuk"}
                handlePress={handleSubmit}
                isLarge={false}
                style={{ marginVertical: 16 }}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  formInput: {
    width: "100%",
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: COLORS.primary4,
    padding: 12,
    width: "100%",
    fontFamily: FONTS.regular,
    color: COLORS.neutral,
    fontSize: SIZES.medium,
  },
  errorInput: {
    fontFamily: FONTS.regular,
    color: COLORS.red,
    fontSize: SIZES.small,
    marginBottom: 4,
  },
  formButton: {
    marginTop: 16,
  },
});
