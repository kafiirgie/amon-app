import { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { doc, setDoc } from "firebase/firestore";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { db } from "../../../config/firebase";
import Button from "../button/Button";
import { UserContext, ChildrenContext } from "../../../context";

const AddChildSchema = Yup.object({
  name: Yup.string()
    .min(2, "Nama anak terlalu singkat")
    .max(10, "Oops, nama terlalu panjang, masukan nama panggilan saja ya")
    .required("Nama wajib diisi"),
  passcode: Yup.number()
    .min(1000, "Passcode terlalu singkat")
    .required("Passcode wajib diisi"),
  confirmPasscode: Yup.number().oneOf(
    [Yup.ref("passcode")],
    "Passcode tidak sesuai"
  ),
});

export default function AddChildForm() {
  const navigation = useNavigation();
  const [email, setEmail] = useContext(UserContext);
  const [children, setChildren] = useContext(ChildrenContext);
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ name: "", birthyear: "", passcode: "" }}
        validationSchema={AddChildSchema}
        onSubmit={async (values) => {
          try {
            const id = values.name.trim().toLowerCase();
            const newChild = {
              name: values.name,
              passcode: parseInt(values.passcode),
              total_points: 0,
              total_savings: 0,
            };
            await setDoc(doc(db, "parents", email, "children", id), newChild);
            setChildren((children) => [...children, { ...newChild, id: id }]);
            navigation.navigate("SelectChild");
          } catch (err) {
            console.error("Error saving child data:", err);
          }
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
                {touched.name && errors.name}
                <Text> </Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Passcode"
                onChangeText={handleChange("passcode")}
                onBlur={handleBlur("passcode")}
                value={values.passcode}
                keyboardType="number-pad"
                secureTextEntry
              />
              <Text style={styles.errorInput}>
                {touched.passcode && errors.passcode}
                <Text> </Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Konfirmasi Passcode"
                onChangeText={handleChange("confirmPasscode")}
                onBlur={handleBlur("confirmPasscode")}
                value={values.confirmPasscode}
                keyboardType="number-pad"
                secureTextEntry
              />
              <Text style={styles.errorInput}>
                <Text> </Text>
                {touched.confirmPasscode && errors.confirmPasscode}
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
    marginBottom: 8,
    marginLeft: 8,
  },
  formButton: {
    marginTop: 16,
  },
});
