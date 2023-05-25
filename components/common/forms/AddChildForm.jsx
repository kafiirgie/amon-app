import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { auth } from "../../../config/firebase";
import { db } from "../../../config/firebase";
import Button from "../button/Button";

const currentYear = new Date().getFullYear();
const AddChildSchema = Yup.object({
  name: Yup.string()
    .min(2, "Nama anak terlalu singkat")
    .required("Nama wajib diisi"),
  birthyear: Yup.number().required("Tahun kelahiran wajib diisi"),
  passcode: Yup.string()
    .trim()
    .min(4, "Passcode terlalu singkat")
    .max(4, "Passcode terlalu panjang")
    .required("Passcode wajib diisi"),
});

export default function AddChildForm() {
  // const navigation = useNavigation();
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ name: "", birthyear: "", passcode: "" }}
        validationSchema={AddChildSchema}
        onSubmit={(values) => {
          console.log(values);
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
                placeholder="Nama Anak"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <Text style={styles.errorInput}>
                <Text> </Text>
                {touched.name && errors.name}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Tahun Kelahiran"
                onChangeText={handleChange("birthyear")}
                onBlur={handleBlur("birthyear")}
                value={values.birthyear}
              />
              <Text style={styles.errorInput}>
                <Text> </Text>
                {touched.birthyear && errors.birthyear}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Passcode"
                onChangeText={handleChange("passcode")}
                onBlur={handleBlur("passcode")}
                value={values.passcode}
                secureTextEntry
              />
              <Text style={styles.errorInput}>
                <Text> </Text>
                {touched.passcode && errors.passcode}
              </Text>
            </View>
            <View style={styles.formButton}>
              <Button
                text={"Buat Akun"}
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
