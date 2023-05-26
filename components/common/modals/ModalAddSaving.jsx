import { useContext } from "react";
import { StyleSheet, Text, View, Modal, ScrollView, Image } from "react-native";

import AddSavingForm from "../forms/AddSavingForm";
import Header from "../header/Header";
import { images, icons, FONTS, COLORS, SIZES } from "../../../constants";
import { SavingModalContext } from "../../../context";

export default function ModalAddSaving() {
  const [savingModalOpen, setSavingModalOpen] = useContext(SavingModalContext);
  return (
    <Modal visible={savingModalOpen} animationType="slide">
      <View style={styles.container}>
        <Header
          leftIcon={icons.backDark}
          handlePressLeftIcon={() => setSavingModalOpen(false)}
          title={"Catat Tabunganmu"}
        ></Header>
        <ScrollView contentContainerStyle={styles.boxContainer}>
          <View style={styles.formContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={images.amonDefault}
                style={{ width: 88, height: 88 }}
              />
            </View>
            <AddSavingForm />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary2,
  },
  boxContainer: {
    // backgroundColor: "red",
    paddingTop: "18%",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  formContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    padding: 24,
  },
  title: {
    fontFamily: FONTS.semiBold,
    color: COLORS.neutral,
    fontSize: SIZES.large,
    paddingVertical: 24,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FF9696",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
});
