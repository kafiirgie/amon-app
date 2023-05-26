import { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { db } from "../../../config/firebase";
import Button from "../button/Button";
import {
  UserContext,
  SelectedChildIdContext,
  GoalsContext,
  GoalModalContext,
} from "../../../context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform } from "react-native";

const AddChildSchema = Yup.object({
  name: Yup.string()
    .min(2, "Deskripsi terlalu singkat")
    .required("Target wajib diisi"),
  target: Yup.number()
    .min(1000, "Target kamu terlalu kecil :(")
    .required("Jumlah target wajib diisi"),
  endDate: Yup.date().required("Batas akhir waktu wajib diisi"),
});

export default function AddGoalForm() {
  const [email, setEmail] = useContext(UserContext);
  const [selectedChildId, setSelectedChildId] = useContext(
    SelectedChildIdContext
  );
  const [goals, setGoals] = useContext(GoalsContext);
  const [goalModalOpen, setGoalModalOpen] = useContext(GoalModalContext);

  // DATE
  const [endDatePicker, setEndDatePicker] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setEndDatePicker(currentDate);
      }
    } else {
      toggleDatePicker();
    }
  };
  // ==========

  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ name: "", endDate: date, target: "" }}
        validationSchema={AddChildSchema}
        onSubmit={async (values) => {
          try {
            console.log(values.name);
            console.log(values.endDate);
            console.log(values.target);
            const newGoals = {
              name: values.name,
              created_date: new Date(),
              end_date: new Date(endDatePicker.toDateString()),
              reward: 100,
              target: values.target,
              current_value: 0,
              is_completed: false,
            };
            const goalRef = await addDoc(
              collection(
                db,
                "parents",
                email,
                "children",
                selectedChildId,
                "goals"
              ),
              newGoals
            );
            setGoals((goals) => [...goals, { ...newGoals, id: goalRef.id }]);
            console.log("PUNTEN");
            setGoalModalOpen(false);
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
              <Text style={styles.titleInput}>Deskripsi Target</Text>
              <TextInput
                style={styles.input}
                placeholder="Target kamu"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <Text style={styles.errorInput}>
                {touched.name && errors.name}
                <Text> </Text>
              </Text>
              <Text style={styles.titleInput}>Jumlah Target Keuangan</Text>
              <TextInput
                style={styles.input}
                placeholder="0"
                onChangeText={handleChange("target")}
                onBlur={handleBlur("target")}
                value={values.target.toString()}
                keyboardType="number-pad"
              />
              <Text style={styles.errorInput}>
                {touched.target && errors.target}
                <Text> </Text>
              </Text>
              {showPicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChangeDate}
                />
              )}
              <Text style={styles.titleInput}>Batas Waktu Target</Text>
              <Pressable onPress={toggleDatePicker}>
                <TextInput
                  style={styles.input}
                  placeholder="Masukkan batas waktu"
                  // onChangeText={setEndDatePicker}
                  onChangeText={handleChange("endDate")}
                  onBlur={handleBlur("endDate")}
                  value={endDatePicker.toDateString()}
                  editable={false}
                />
              </Pressable>
              <Text style={styles.errorInput}>
                <Text> </Text>
                {touched.endDate && errors.endDate}
              </Text>
            </View>
            <View style={styles.formButton}>
              <Button
                text={"Buat Target"}
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
  titleInput: {
    fontFamily: FONTS.regular,
    color: COLORS.neutral,
    fontSize: SIZES.medium,
    marginBottom: 8,
    marginLeft: 8,
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
