import { StyleSheet, View } from "react-native";

import { SPACING } from "@/theme/spacing";

import { DsIcon } from "./DsIcon";
import { DsLink } from "./DsLink";
import { DsText } from "./DsText";

export const DsFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <DsIcon icon="WhiteLogo" />
        <DsText i18nKey="logo.title" style={styles.logo_title} />
      </View>
      <DsText i18nKey="footer.message" style={styles.text_container} />

      <View style={styles.socialmedia_container}>
        <DsLink to="https://www.facebook.com/digitalcollegebr/">
          <DsIcon icon="Facebook" style={styles.socialmedia_icon} />
        </DsLink>
        <DsLink to="https://www.instagram.com/digitalcollegebr/">
          <DsIcon icon="Instagram" style={styles.socialmedia_icon} />
        </DsLink>
        <DsLink to="https://www.instagram.com/digitalcollegebr/">
          <DsIcon icon="X" style={styles.socialmedia_icon} />
        </DsLink>
      </View>

      <View style={styles.informations_container}>
        <View style={styles.informationsContainer_group}>
          <DsText
            i18nKey="footer.infomation.tite"
            style={styles.title_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.infomation.about_us"
            style={styles.text_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.infomation.security"
            style={styles.text_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.infomation.wishlist"
            style={styles.text_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.infomation.work_with_us"
            style={styles.text_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.infomation.my_orders"
            style={styles.text_container}
          />
        </View>
        <View style={styles.informationsContainer_group}>
          <DsText
            i18nKey="footer.section.title"
            style={styles.title_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.section.t-shirt"
            style={styles.text_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.section.pants"
            style={styles.text_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.section.caps"
            style={styles.text_container}
          />
          <DsLink
            to="/"
            i18nKey="footer.section.shoes"
            style={styles.text_container}
          />
        </View>
        <View style={styles.informationsContainer_group}>
          <DsText
            i18nKey="footer.contacts.title"
            style={styles.title_container}
          />
          <DsText
            i18nKey="footer.contacts.address"
            style={styles.text_container}
          />
          <DsText
            i18nKey="footer.contacts.phone"
            style={styles.text_container}
          />
        </View>
      </View>
      <View style={styles.copyright_constainer}>
        <DsText i18nKey="footer.copyright" style={styles.copyright_message} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: SPACING.NORMAL,
  },
  logo_container: {
    flexDirection: "row",
    gap: SPACING.SMALLER,
    alignItems: "center",
    marginVertical: SPACING.LARGE,
  },
  logo_title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  text_container: {
    color: "white",
    fontSize: 20,
  },
  title_container: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  socialmedia_container: {
    display: "flex",
    flexDirection: "row",
    gap: SPACING.LARGE,
    alignItems: "flex-start",
    marginVertical: SPACING.LARGE,
  },
  socialmedia_icon: {
    height: 30,
    width: 30,
  },
  informations_container: {
    display: "flex",
    flexDirection: "row",
    gap: SPACING.NORMAL,
    rowGap: SPACING.LARGE,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  informationsContainer_group: {
    display: "flex",
    flexDirection: "column",
    gap: SPACING.NORMAL,
    minWidth: "40%",
    flex: 1,
  },
  copyright_constainer: {
    borderWidth: 1,
    borderTopColor: "white",
    padding: 10,
    marginTop: SPACING.NORMAL,
  },
  copyright_message: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
});
