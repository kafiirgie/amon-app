import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { auth } from "../../../config/firebase";
import { db } from "../../../config/firebase";
import Button from "../button/Button";

const RegisterSchema = Yup.object({
  email: Yup.string()
    .email("Format email tidak sesuai")
    .required("Email wajib diisi")
    .test(
      "is-email-used",
      "Oops, email tersebut sudahhh digunakan",
      async (email) => {
        return await isEmailNotUsed(email);
      }
    ),
  password: Yup.string()
    .trim()
    .min(8, "Password terlalu singkat")
    .required("Password wajib diisi"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password tidak sesuai"
  ),
});

export default function RegisterForm() {
  const navigation = useNavigation();
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async () => {
              try {
                await setDoc(doc(db, "parents", values.email), {
                  email: values.email,
                });
                navigation.navigate("UserNavigation");
              } catch (err) {
                console.error("Error saving user data:", err);
              }
            })
            .catch((er) => {
              console.log(er);
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
              <TextInput
                style={styles.input}
                placeholder="Konfirmasi Password"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              <Text style={styles.errorInput}>
                <Text> </Text>
                {touched.confirmPassword && errors.confirmPassword}
              </Text>
            </View>
            <View style={styles.formButton}>
              <Button
                text={"Daftar"}
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

const isEmailNotUsed = async (email) => {
  try {
    const docRef = doc(db, "parents", email);
    const docSnap = await getDoc(docRef);
    return !docSnap.exists();
  } catch (error) {
    console.error("Error checking email existence:", error);
    return false;
  }
};

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
