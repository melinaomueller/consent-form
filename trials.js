const trials = [
  {
    "trialN": -1,
    "corrRes": -1,
    "image": "bart_left",
    "trialType": "practiceStudy"
  },
  {
    "trialN": -1,
    "corrRes": -1,
    "image": "bart_straight",
    "trialType": "practiceStudy"
  },
  {
    "trialN": -1,
    "corrRes": -1,
    "image": "bart_right",
    "trialType": "practiceStudy"
  },
  {
    "trialN": -1,
    "corrRes": 0,
    "image": "pract_left",
    "trialType": "practiceTest"
  },
  {
    "trialN": -1,
    "corrRes": 1,
    "image": "pract_right",
    "trialType": "practiceTest"
  },
  {
    "trialN": -1,
    "corrRes": 1,
    "image": "pract_straight",
    "trialType": "practiceTest"
  },
  {
    "trialN": 0.1,
    "corrRes": -1,
    "image": "Bob_left_study",
    "trialType": "study"
  },
  {
    "trialN": 0.2,
    "corrRes": -1,
    "image": "Bob_frontal_study",
    "trialType": "study"
  },
  {
    "trialN": 0.3,
    "corrRes": -1,
    "image": "Bob_right_study",
    "trialType": "study"
  },
  {
    "trialN": 1,
    "corrRes": 1,
    "image": "B1_Identical_Left",
    "trialType": "studyTest"
  },
  {
    "trialN": 2,
    "corrRes": 2,
    "image": "B2_Identical_Frontal",
    "trialType": "studyTest"
  },
  {
    "trialN": 3,
    "corrRes": 2,
    "image": "B3_Identical_Right",
    "trialType": "studyTest"
  },
  {
    "trialN": 3.1,
    "corrRes": -1,
    "image": "Dan_Left_Study",
    "trialType": "study"
  },
  {
    "trialN": 3.2,
    "corrRes": -1,
    "image": "Dan_frontal_study",
    "trialType": "study"
  },
  {
    "trialN": 3.3,
    "corrRes": -1,
    "image": "Dan_Right_Frontal",
    "trialType": "study"
  },
  {
    "trialN": 4,
    "corrRes": 1,
    "image": "D1_Identical_Left",
    "trialType": "studyTest"
  },
  {
    "trialN": 5,
    "corrRes": 2,
    "image": "D2_Identical_Frontal",
    "trialType": "studyTest"
  },
  {
    "trialN": 6,
    "corrRes": 2,
    "image": "D3_Identical_Right",
    "trialType": "studyTest"
  },
  {
    "trialN": 6.1,
    "corrRes": -1,
    "image": "Jim_left",
    "trialType": "study"
  },
  {
    "trialN": 6.2,
    "corrRes": -1,
    "image": "Jim_front",
    "trialType": "study"
  },
  {
    "trialN": 6.3,
    "corrRes": -1,
    "image": "Jim_right",
    "trialType": "study"
  },
  {
    "trialN": 7,
    "corrRes": 2,
    "image": "J_1_Iden_L",
    "trialType": "studyTest"
  },
  {
    "trialN": 8,
    "corrRes": 2,
    "image": "J_2_Iden_Front",
    "trialType": "studyTest"
  },
  {
    "trialN": 9,
    "corrRes": 0,
    "image": "J_3_Iden_R",
    "trialType": "studyTest"
  },
  {
    "trialN": 9.1,
    "corrRes": -1,
    "image": "Matt_left_cropped",
    "trialType": "study"
  },
  {
    "trialN": 9.2,
    "corrRes": -1,
    "image": "Matt_front",
    "trialType": "study"
  },
  {
    "trialN": 9.3,
    "corrRes": -1,
    "image": "Matt_right_cropped",
    "trialType": "study"
  },
  {
    "trialN": 10,
    "corrRes": 1,
    "image": "M_1_Iden_L",
    "trialType": "studyTest"
  },
  {
    "trialN": 11,
    "corrRes": 2,
    "image": "M_2_Iden_Front",
    "trialType": "studyTest"
  },
  {
    "trialN": 12,
    "corrRes": 0,
    "image": "M_3_Iden_R",
    "trialType": "studyTest"
  },
  {
    "trialN": 12.1,
    "corrRes": -1,
    "image": "Nate_left_cropped",
    "trialType": "study"
  },
  {
    "trialN": 12.2,
    "corrRes": -1,
    "image": "Nate_front_cropped",
    "trialType": "study"
  },
  {
    "trialN": 12.3,
    "corrRes": -1,
    "image": "Nate_right_cropped",
    "trialType": "study"
  },
  {
    "trialN": 13,
    "corrRes": 2,
    "image": "N_1_Iden_L",
    "trialType": "studyTest"
  },
  {
    "trialN": 14,
    "corrRes": 0,
    "image": "N_2_Iden_Front",
    "trialType": "studyTest"
  },
  {
    "trialN": 15,
    "corrRes": 2,
    "image": "N_3_Iden_R",
    "trialType": "studyTest"
  },
  {
    "trialN": 15.1,
    "corrRes": -1,
    "image": "Zack_Left_cropped",
    "trialType": "study"
  },
  {
    "trialN": 15.2,
    "corrRes": -1,
    "image": "Zack_Front_cropped",
    "trialType": "study"
  },
  {
    "trialN": 15.3,
    "corrRes": -1,
    "image": "Zack_Right_Cropped",
    "trialType": "study"
  },
  {
    "trialN": 16,
    "corrRes": 0,
    "image": "Z_1_Iden_L",
    "trialType": "studyTest"
  },
  {
    "trialN": 17,
    "corrRes": 2,
    "image": "Z_2_Iden_Front",
    "trialType": "studyTest"
  },
  {
    "trialN": 18,
    "corrRes": 0,
    "image": "Z_3_Iden_R",
    "trialType": "studyTest"
  },
  {
    "trialN": 19,
    "corrRes": 0,
    "image": "M_5_Front_Halflit",
    "trialType": "test"
  },
  {
    "trialN": 20,
    "corrRes": 1,
    "image": "N_8_13_R_Pro_dark",
    "trialType": "test"
  },
  {
    "trialN": 21,
    "corrRes": 0,
    "image": "Z_6_23_Pro_L",
    "trialType": "test"
  },
  {
    "trialN": 22,
    "corrRes": 2,
    "image": "D5_Halflit_Frontal",
    "trialType": "test"
  },
  {
    "trialN": 23,
    "corrRes": 2,
    "image": "B7_Bottomlit_Frontal",
    "trialType": "test"
  },
  {
    "trialN": 24,
    "corrRes": 1,
    "image": "J_6_23_L_Pro",
    "trialType": "test"
  },
  {
    "trialN": 25,
    "corrRes": 0,
    "image": "D7_Bottomlit_Frontal",
    "trialType": "test"
  },
  {
    "trialN": 26,
    "corrRes": 2,
    "image": "Z_5_Front_Half",
    "trialType": "test"
  },
  {
    "trialN": 27,
    "corrRes": 1,
    "image": "M_6_23_L_Pro",
    "trialType": "test"
  },
  {
    "trialN": 28,
    "corrRes": 2,
    "image": "J_7_Bottom_Lit",
    "trialType": "test"
  },
  {
    "trialN": 29,
    "corrRes": 1,
    "image": "N_4_23_R_Pro",
    "trialType": "test"
  },
  {
    "trialN": 30,
    "corrRes": 2,
    "image": "M_8_13_R_Pro_dark",
    "trialType": "test"
  },
  {
    "trialN": 31,
    "corrRes": 1,
    "image": "J_5_Front_Halflit",
    "trialType": "test"
  },
  {
    "trialN": 32,
    "corrRes": 0,
    "image": "N_7_Front_Bot",
    "trialType": "test"
  },
  {
    "trialN": 33,
    "corrRes": 1,
    "image": "Z_4_23_Pro_R",
    "trialType": "test"
  },
  {
    "trialN": 34,
    "corrRes": 1,
    "image": "D8_13_Profile_R",
    "trialType": "test"
  },
  {
    "trialN": 35,
    "corrRes": 1,
    "image": "M_7_Front_Bot",
    "trialType": "test"
  },
  {
    "trialN": 36,
    "corrRes": 1,
    "image": "B4_23_pro_ri",
    "trialType": "test"
  },
  {
    "trialN": 37,
    "corrRes": 0,
    "image": "D6_23_Profile_L",
    "trialType": "test"
  },
  {
    "trialN": 38,
    "corrRes": 2,
    "image": "N_5_Front_Half",
    "trialType": "test"
  },
  {
    "trialN": 39,
    "corrRes": 0,
    "image": "B6_23_pro_L",
    "trialType": "test"
  },
  {
    "trialN": 40,
    "corrRes": 1,
    "image": "Z_8_13_Pro_R_dark",
    "trialType": "test"
  },
  {
    "trialN": 41,
    "corrRes": 1,
    "image": "J_4_23_R_Pro",
    "trialType": "test"
  },
  {
    "trialN": 42,
    "corrRes": 0,
    "image": "B8_13_pro_R_HS",
    "trialType": "test"
  },
  {
    "trialN": 43,
    "corrRes": 2,
    "image": "M_4_23_R_Pro",
    "trialType": "test"
  },
  {
    "trialN": 44,
    "corrRes": 0,
    "image": "J_8_13_r_pro_dark",
    "trialType": "test"
  },
  {
    "trialN": 45,
    "corrRes": 1,
    "image": "Z_7_Front_Bot",
    "trialType": "test"
  },
  {
    "trialN": 46,
    "corrRes": 0,
    "image": "D4_23_profile_R",
    "trialType": "test"
  },
  {
    "trialN": 47,
    "corrRes": 0,
    "image": "N_6_23_L_Pro",
    "trialType": "test"
  },
  {
    "trialN": 48,
    "corrRes": 2,
    "image": "B5_halflit_frontal",
    "trialType": "test"
  },
  {
    "trialN": 49,
    "corrRes": 1,
    "image": "Z_12_Front_Noisy",
    "trialType": "test"
  },
  {
    "trialN": 50,
    "corrRes": 2,
    "image": "M_11_23_N_R_Pro",
    "trialType": "test"
  },
  {
    "trialN": 51,
    "corrRes": 0,
    "image": "D10_Noisy_13_Profile_L",
    "trialType": "test"
  },
  {
    "trialN": 52,
    "corrRes": 0,
    "image": "J_12_Frontal_HS",
    "trialType": "test"
  },
  {
    "trialN": 53,
    "corrRes": 2,
    "image": "J_11_23_pro_R",
    "trialType": "test"
  },
  {
    "trialN": 54,
    "corrRes": 0,
    "image": "N_9_Front_LS",
    "trialType": "test"
  },
  {
    "trialN": 55,
    "corrRes": 1,
    "image": "B12_Noisy_frontal_HS",
    "trialType": "test"
  },
  {
    "trialN": 56,
    "corrRes": 0,
    "image": "M_12_Front_N_HS",
    "trialType": "test"
  },
  {
    "trialN": 57,
    "corrRes": 1,
    "image": "D12_Noisy_Frontal_HS",
    "trialType": "test"
  },
  {
    "trialN": 58,
    "corrRes": 1,
    "image": "Z_11_23_Pro_R",
    "trialType": "test"
  },
  {
    "trialN": 59,
    "corrRes": 1,
    "image": "N_10_13_L_Pro_dark",
    "trialType": "test"
  },
  {
    "trialN": 60,
    "corrRes": 1,
    "image": "B9_Noisy_frontal_LS",
    "trialType": "test"
  },
  {
    "trialN": 61,
    "corrRes": 0,
    "image": "M_9_Front_N_LS",
    "trialType": "test"
  },
  {
    "trialN": 62,
    "corrRes": 1,
    "image": "J_9_N_Frontal_50",
    "trialType": "test"
  },
  {
    "trialN": 63,
    "corrRes": 0,
    "image": "N_12_Front_Noisy",
    "trialType": "test"
  },
  {
    "trialN": 64,
    "corrRes": 1,
    "image": "B10_Noisy_13_pro_L",
    "trialType": "test"
  },
  {
    "trialN": 65,
    "corrRes": 2,
    "image": "N_11_23_R_Pro",
    "trialType": "test"
  },
  {
    "trialN": 66,
    "corrRes": 0,
    "image": "J_10_13_pro_l",
    "trialType": "test"
  },
  {
    "trialN": 67,
    "corrRes": 2,
    "image": "Z_9_Front_Noisy",
    "trialType": "test"
  },
  {
    "trialN": 68,
    "corrRes": 0,
    "image": "D9_Noisy_Frontal_LS",
    "trialType": "test"
  },
  {
    "trialN": 69,
    "corrRes": 0,
    "image": "M_10_N_13_L_Pro_D",
    "trialType": "test"
  },
  {
    "trialN": 70,
    "corrRes": 0,
    "image": "Z_10_13_Pro_L",
    "trialType": "test"
  },
  {
    "trialN": 71,
    "corrRes": 0,
    "image": "B11_Noise_23_pro_R",
    "trialType": "test"
  },
  {
    "trialN": 72,
    "corrRes": 2,
    "image": "D11_Noisy_23_profile_R",
    "trialType": "test"
  },
  {
    "trialN": 73,
    "corrRes": 2,
    "image": "N_IF",
    "trialType": "test"
  },
  {
    "trialN": 74,
    "corrRes": 1,
    "image": "Z_OE",
    "trialType": "test"
  },
  {
    "trialN": 75,
    "corrRes": 1,
    "image": "D_OE",
    "trialType": "test"
  },
  {
    "trialN": 76,
    "corrRes": 1,
    "image": "M_P",
    "trialType": "test"
  },
  {
    "trialN": 77,
    "corrRes": 1,
    "image": "J_S",
    "trialType": "test"
  },
  {
    "trialN": 78,
    "corrRes": 2,
    "image": "D_HU",
    "trialType": "test"
  },
  {
    "trialN": 79,
    "corrRes": 0,
    "image": "B_S",
    "trialType": "test"
  },
  {
    "trialN": 80,
    "corrRes": 1,
    "image": "D_P",
    "trialType": "test"
  },
  {
    "trialN": 81,
    "corrRes": 0,
    "image": "Z_IF",
    "trialType": "test"
  },
  {
    "trialN": 82,
    "corrRes": 1,
    "image": "J_IF",
    "trialType": "test"
  },
  {
    "trialN": 83,
    "corrRes": 2,
    "image": "M_OE",
    "trialType": "test"
  },
  {
    "trialN": 84,
    "corrRes": 2,
    "image": "B_P",
    "trialType": "test"
  },
  {
    "trialN": 85,
    "corrRes": 2,
    "image": "M_HU",
    "trialType": "test"
  },
  {
    "trialN": 86,
    "corrRes": 2,
    "image": "Z_HU",
    "trialType": "test"
  },
  {
    "trialN": 87,
    "corrRes": 2,
    "image": "N_S",
    "trialType": "test"
  },
  {
    "trialN": 88,
    "corrRes": 2,
    "image": "D_IF",
    "trialType": "test"
  },
  {
    "trialN": 89,
    "corrRes": 1,
    "image": "B_OE",
    "trialType": "test"
  },
  {
    "trialN": 90,
    "corrRes": 0,
    "image": "M_IF",
    "trialType": "test"
  },
  {
    "trialN": 91,
    "corrRes": 1,
    "image": "N_HU",
    "trialType": "test"
  },
  {
    "trialN": 92,
    "corrRes": 2,
    "image": "J_P",
    "trialType": "test"
  },
  {
    "trialN": 93,
    "corrRes": 0,
    "image": "M_S",
    "trialType": "test"
  },
  {
    "trialN": 94,
    "corrRes": 0,
    "image": "N_OE",
    "trialType": "test"
  },
  {
    "trialN": 95,
    "corrRes": 0,
    "image": "B_IF",
    "trialType": "test"
  },
  {
    "trialN": 96,
    "corrRes": 1,
    "image": "Z_S",
    "trialType": "test"
  },
  {
    "trialN": 97,
    "corrRes": 1,
    "image": "J_HU",
    "trialType": "test"
  },
  {
    "trialN": 98,
    "corrRes": 2,
    "image": "Z_P",
    "trialType": "test"
  },
  {
    "trialN": 99,
    "corrRes": 1,
    "image": "N_P",
    "trialType": "test"
  },
  {
    "trialN": 100,
    "corrRes": 0,
    "image": "J_OE",
    "trialType": "test"
  },
  {
    "trialN": 101,
    "corrRes": 0,
    "image": "B_HU",
    "trialType": "test"
  },
  {
    "trialN": 102,
    "corrRes": 0,
    "image": "D_S",
    "trialType": "test"
  }
];