import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { signout } from "../feature/authentication";
import { useGetUserInforQuery } from "../services/hairsalon.service";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    navigation.navigate("AuthIntroScreen");
    dispatch(signout());
  };

  //Fetch api
  const { data: userInfo } = useGetUserInforQuery();
  const role =
    userInfo?.user?.role && Array.isArray(userInfo?.user?.role)
      ? userInfo?.user?.role[0]
      : "Unknown role";

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      {/* Avatar và thông tin khách hàng */}
      <View style={styles.header}>
        <View style={styles.statusTag}>
          <Text style={styles.statusText}>{role}</Text>
        </View>
        <Pressable style={styles.avatarContainer}>
          <Image
            source={{
              uri:
                userInfo?.user?.avatar ||
                "https://i.pinimg.com/236x/fb/6c/1f/fb6c1fd4a4f1f239bd6ec960b7b81783.jpg", // Default image URL
            }}
            style={styles.avatar}
          />
        </Pressable>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userInfo?.user?.name}</Text>
          <View style={styles.loyaltyTag}>
            <Text style={styles.loyaltyText}>
              {userInfo?.user?.loyaltyPoints} Loyalty Points
            </Text>
          </View>
        </View>
        <Text style={styles.userEmail}>{userInfo?.user?.email}</Text>
      </View>

      {/* Danh sách các mục điều hướng */}
      <View style={styles.menuContainer}>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("EditInfo")}
        >
          <Icon name="person-circle-outline" size={24} color="#fff" />
          <Text style={styles.menuText}>Chỉnh sửa thông tin</Text>
        </Pressable>
        {/* <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Icon name="lock-closed-outline" size={24} color="#fff" />
          <Text style={styles.menuText}>Chỉnh sửa mật khẩu</Text>
        </Pressable> */}
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("FavoriteStylist")}
        >
          <Icon name="cut-outline" size={24} color="#fff" />
          <Text style={styles.menuText}>Nhà tạo mẫu yêu thích</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("Voucher")}
        >
          <Icon name="gift-outline" size={24} color="#fff" />
          <Text style={styles.menuText}>Voucher của bạn</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("ServiceHistory")}
        >
          <Icon name="time-outline" size={24} color="#fff" />
          <Text style={styles.menuText}>Lịch sử sử dụng dịch vụ</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => navigation.navigate("CustomerSupport")}
        >
          <Icon name="help-circle-outline" size={24} color="#fff" />
          <Text style={styles.menuText}>Thông tin hỗ trợ khách hàng</Text>
        </Pressable>
        <Pressable
          style={[styles.menuItem, styles.logoutButton]}
          onPress={() => handleSignOut()}
        >
          <Icon name="log-out-outline" size={24} color="#E74C3C" />
          <Text style={[styles.menuText, styles.logoutText]}>Đăng xuất</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3E0",
    paddingHorizontal: 20,
    paddingTop: 20, // Thêm padding trên để tạo khoảng cách từ mép trên
  },
  header: {
    alignItems: "center",
    paddingVertical: 40,
    marginBottom: 30,
    backgroundColor: "#5D3A29", // Màu nền của header
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  statusTag: {
    position: "absolute",
    top: 10,
    backgroundColor: "#FF6B6B",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    zIndex: 1,
  },
  statusText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#FF6B6B",
    marginBottom: 10,
    marginTop: 30,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10, // Khoảng cách giữa avatar và thông tin
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 10,
  },
  loyaltyTag: {
    backgroundColor: "#FF6B6B",
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  loyaltyText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#fff",
    marginTop: 8,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#5D3A29",
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 15,
  },
  logoutText: {
    color: "#E74C3C",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FFF0F0",
  },
});

export default ProfileScreen;
