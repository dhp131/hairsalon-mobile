const endpoints = {
  LOGIN: "/login",
  REGISTER: "/register",
  SEND_OTP: "/send-otp",
  VERIFY_OTP_CHANGE_PASSWORD: "/verify-otp-and-change-password",
  GET_INFOR_USER: "/get-infor",
  CREATE_APPOINTMENT: "/create-appointment",
  APPROVE_APPOINTMENT: "/approve/:appointmentId",
  REJECT_APPOINTMENT: "/reject/:appointmentId",
  CREATE_FEEDBACK: "/create-feedback",
  ADD_FAVORITE_STYLIST: "/add-favorite-stylist",
  RECOMMENDED_STYLIST: "/recommended-stylists",
  CREATE_SERVICE: "/create-service",
  VIEW_SERVICE: "/view-service",
  UPDATE_SERVICE: "/update-service",
  DELETE_SERVICE: "/delete-service",
  UPDATE_USER: "/update-user",
  GET_USER_ROLE: "/get-user-role",
  CREATE_VOUCHER: "/create-voucher",
  VIEW_VOUCHER: "/view-voucher",
  UPDATE_VOUCHER: "/update-voucher",
  DELETE_VOUCHER: "/delete-voucher",
  VIEW_STYLISTS: "/get-all-stylists",
  SCHEDULE_STYLISTS_APPOINTMENTS: "/available-time-slots",
  GET_APPOINTMENT_USER: "/get-appointment-user",
  };


export default endpoints;
