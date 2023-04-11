import Mock from 'mockjs'

Mock.mock(/\/endpoint\/v1\/adopt\/list_by_user_id/, 'post', {
    code: 200,
    success: true,
    data: {
        'content|5-13': [
            {
                "title": '@ctitle(10,20)',
                "sex": 73,
                "amount": 30,
                "age": 22,
                "description": "@csentence(30)",
                "personName": "@ctitle(2,4)",
                "weChat": "@ctitle(2,4)",
                "phone": "@number(11)",
                "imgFiles": [
                    {
                        "fileName": "@ctitle(5,10)",
                        "filePath": "@url",
                        "userId": 9,
                        "fileType": 83,
                        "id": 3,
                        "gmtCreate": "2030-06-27 14:11:59",
                        "gmtModified": "2015-06-17 21:29:55",
                        "isActive": true
                    }
                ],
                "cityDto": {
                    "province": "test_984dc3a4bb3d",
                    "city": "test_eb5fdc57faaf",
                    "county": "test_b5dbcf1eed14",
                    "id": 92,
                    "gmtCreate": "2014-07-15 00:01:26",
                    "gmtModified": "2016-06-24 07:38:10",
                    "isActive": true
                },
                "supply|1": [0,1],
                "animalCategoryDto": {
                    "name": "@ctitle(2,4)",
                    "id": 29,
                    "gmtCreate": "2025-06-10 20:40:38",
                    "gmtModified": "2029-09-20 22:33:09",
                    "isActive": true
                },
                "status": 83,
                "expellingParasite": 66,
                "vaccine": 62,
                "userDto": {
                    "userName": "@ctitle(2,4)",
                    "passWord": "test_f0dd78f25660",
                    "birthday": "2024-04-04 01:53:41",
                    "sex": 70,
                    "phone": "test_72318bce6a89",
                    "email": "test_38ad1fed3de4",
                    "photoFileDto": {
                        "fileName": "test_2bc39937f967",
                        "filePath": "test_adb127cf1c97",
                        "userId": 13,
                        "fileType": 66,
                        "id": 82,
                        "gmtCreate": "2028-05-12 14:33:18",
                        "gmtModified": "2025-02-23 10:00:49",
                        "isActive": false
                    },
                    "cityDto": {
                        "province": "test_198e39e86f08",
                        "city": "test_852f53c0b68e",
                        "county": "test_f6769b2f56c1",
                        "id": 88,
                        "gmtCreate": "2022-08-08 13:39:58",
                        "gmtModified": "2031-04-09 08:15:05",
                        "isActive": false
                    },
                    "userCategoryDto": {
                        "code": 49,
                        "name": "test_eb30bcd00359",
                        "description": "test_8a8680b035a4",
                        "id": 98,
                        "gmtCreate": "2026-08-17 04:02:27",
                        "gmtModified": "2018-01-22 07:44:35",
                        "isActive": true
                    },
                    "lastActiveTime": "2019-09-23 05:33:51",
                    "id": 2,
                    "gmtCreate": "@datetime",
                    "gmtModified": "2015-09-27 00:23:21",
                    "isActive": true
                },
                "verifyDto": {
                    "bizType": 4,
                    "bizId": 14,
                    "status": 18,
                    "statusDesc": "审核成功",
                    "message": "test_c54d66bd3472",
                    "createUseruserDto": {
                        "userName": "test_935741667cd1",
                        "passWord": "test_f088f343569e",
                        "birthday": "2016-09-18 22:37:36",
                        "sex": 8,
                        "phone": "test_df1996473724",
                        "email": "test_69e6afe0f2c9",
                        "photoFileDto": {
                            "fileName": "test_7d243b70d962",
                            "filePath": "test_9a32e2f1b8ff",
                            "userId": 41,
                            "fileType": 8,
                            "id": 85,
                            "gmtCreate": "2017-10-19 11:33:22",
                            "gmtModified": "2015-08-12 18:20:43",
                            "isActive": false
                        },
                        "cityDto": {
                            "province": "test_500dddec6606",
                            "city": "test_5a2d07765bc5",
                            "county": "test_3720f2c6e1ec",
                            "id": 74,
                            "gmtCreate": "2016-08-01 22:12:24",
                            "gmtModified": "2016-09-15 07:20:32",
                            "isActive": false
                        },
                        "userCategoryDto": {
                            "code": 51,
                            "name": "test_81ab7362dcc4",
                            "description": "test_4a3c5fe404d6",
                            "id": 21,
                            "gmtCreate": "2030-11-18 00:46:16",
                            "gmtModified": "2025-04-24 14:33:10",
                            "isActive": false
                        },
                        "lastActiveTime": "2021-04-09 04:15:06",
                        "id": 34,
                        "gmtCreate": "2016-01-15 13:18:52",
                        "gmtModified": "2026-05-04 09:13:53",
                        "isActive": false
                    },
                    "verifyuserDto": {
                        "userName": "test_86fd99412e11",
                        "passWord": "test_e3984634e66d",
                        "birthday": "2021-01-15 04:00:16",
                        "sex": 63,
                        "phone": "test_8367d4f0c0a3",
                        "email": "test_58154b0d51df",
                        "photoFileDto": {
                            "fileName": "test_3c7554a5c1f4",
                            "filePath": "test_e80bb7a9c796",
                            "userId": 1,
                            "fileType": 29,
                            "id": 43,
                            "gmtCreate": "2031-12-20 14:02:16",
                            "gmtModified": "2020-11-20 11:57:25",
                            "isActive": false
                        },
                        "cityDto": {
                            "province": "test_a5f300d0f209",
                            "city": "test_3b82c9f2c21b",
                            "county": "test_c6c49539f0d4",
                            "id": 63,
                            "gmtCreate": "2018-05-07 05:43:44",
                            "gmtModified": "2022-09-17 08:52:35",
                            "isActive": false
                        },
                        "userCategoryDto": {
                            "code": 5,
                            "name": "test_273ae4a9c3bc",
                            "description": "test_d7da3fe829b1",
                            "id": 4,
                            "gmtCreate": "2015-12-31 21:05:44",
                            "gmtModified": "2026-08-03 11:41:58",
                            "isActive": true
                        },
                        "lastActiveTime": "2026-05-21 15:03:36",
                        "id": 99,
                        "gmtCreate": "2015-08-21 22:50:26",
                        "gmtModified": "2028-07-29 02:43:32",
                        "isActive": true
                    },
                    "id": 57,
                    "gmtCreate": "2025-02-11 18:02:30",
                    "gmtModified": "2020-05-04 21:36:36",
                    "isActive": false
                },
                "id": 69,
                "gmtCreate": "2020-08-15 18:26:52",
                "gmtModified": "2018-06-08 07:26:02",
                "isActive": true
            }
        ]
    }
})


Mock.mock(/\/endpoint\/v1\/adopt\/list/, 'post', {
    code: 200,
    success: true,
    data: {
        'content|5-13': [
            {
                "title": '@ctitle(10,20)',
                "sex": 73,
                "amount": 30,
                "age": 22,
                "description": "@csentence(30)",
                "personName": "@ctitle(2,4)",
                "weChat": "@ctitle(2,4)",
                "phone": "@number(11)",
                "imgFiles": [
                    {
                        "fileName": "@ctitle(5,10)",
                        "filePath": "@url",
                        "userId": 9,
                        "fileType": 83,
                        "id": 3,
                        "gmtCreate": "2030-06-27 14:11:59",
                        "gmtModified": "2015-06-17 21:29:55",
                        "isActive": true
                    }
                ],
                "cityDto": {
                    "province": "test_984dc3a4bb3d",
                    "city": "test_eb5fdc57faaf",
                    "county": "test_b5dbcf1eed14",
                    "id": 92,
                    "gmtCreate": "2014-07-15 00:01:26",
                    "gmtModified": "2016-06-24 07:38:10",
                    "isActive": true
                },
                "supply|1": [0,1],
                "animalCategoryDto": {
                    "name": "@ctitle(2,4)",
                    "id": 29,
                    "gmtCreate": "2025-06-10 20:40:38",
                    "gmtModified": "2029-09-20 22:33:09",
                    "isActive": true
                },
                "status": 83,
                "expellingParasite": 66,
                "vaccine": 62,
                "userDto": {
                    "userName": "@ctitle(2,4)",
                    "passWord": "test_f0dd78f25660",
                    "birthday": "2024-04-04 01:53:41",
                    "sex": 70,
                    "phone": "test_72318bce6a89",
                    "email": "test_38ad1fed3de4",
                    "photoFileDto": {
                        "fileName": "test_2bc39937f967",
                        "filePath": "test_adb127cf1c97",
                        "userId": 13,
                        "fileType": 66,
                        "id": 82,
                        "gmtCreate": "2028-05-12 14:33:18",
                        "gmtModified": "2025-02-23 10:00:49",
                        "isActive": false
                    },
                    "cityDto": {
                        "province": "test_198e39e86f08",
                        "city": "test_852f53c0b68e",
                        "county": "test_f6769b2f56c1",
                        "id": 88,
                        "gmtCreate": "2022-08-08 13:39:58",
                        "gmtModified": "2031-04-09 08:15:05",
                        "isActive": false
                    },
                    "userCategoryDto": {
                        "code": 49,
                        "name": "test_eb30bcd00359",
                        "description": "test_8a8680b035a4",
                        "id": 98,
                        "gmtCreate": "2026-08-17 04:02:27",
                        "gmtModified": "2018-01-22 07:44:35",
                        "isActive": true
                    },
                    "lastActiveTime": "2019-09-23 05:33:51",
                    "id": 2,
                    "gmtCreate": "@datetime",
                    "gmtModified": "2015-09-27 00:23:21",
                    "isActive": true
                },
                "verifyDto": {
                    "bizType": 4,
                    "bizId": 14,
                    "status": 18,
                    "statusDesc": "审核成功",
                    "message": "test_c54d66bd3472",
                    "createUseruserDto": {
                        "userName": "test_935741667cd1",
                        "passWord": "test_f088f343569e",
                        "birthday": "2016-09-18 22:37:36",
                        "sex": 8,
                        "phone": "test_df1996473724",
                        "email": "test_69e6afe0f2c9",
                        "photoFileDto": {
                            "fileName": "test_7d243b70d962",
                            "filePath": "test_9a32e2f1b8ff",
                            "userId": 41,
                            "fileType": 8,
                            "id": 85,
                            "gmtCreate": "2017-10-19 11:33:22",
                            "gmtModified": "2015-08-12 18:20:43",
                            "isActive": false
                        },
                        "cityDto": {
                            "province": "test_500dddec6606",
                            "city": "test_5a2d07765bc5",
                            "county": "test_3720f2c6e1ec",
                            "id": 74,
                            "gmtCreate": "2016-08-01 22:12:24",
                            "gmtModified": "2016-09-15 07:20:32",
                            "isActive": false
                        },
                        "userCategoryDto": {
                            "code": 51,
                            "name": "test_81ab7362dcc4",
                            "description": "test_4a3c5fe404d6",
                            "id": 21,
                            "gmtCreate": "2030-11-18 00:46:16",
                            "gmtModified": "2025-04-24 14:33:10",
                            "isActive": false
                        },
                        "lastActiveTime": "2021-04-09 04:15:06",
                        "id": 34,
                        "gmtCreate": "2016-01-15 13:18:52",
                        "gmtModified": "2026-05-04 09:13:53",
                        "isActive": false
                    },
                    "verifyuserDto": {
                        "userName": "test_86fd99412e11",
                        "passWord": "test_e3984634e66d",
                        "birthday": "2021-01-15 04:00:16",
                        "sex": 63,
                        "phone": "test_8367d4f0c0a3",
                        "email": "test_58154b0d51df",
                        "photoFileDto": {
                            "fileName": "test_3c7554a5c1f4",
                            "filePath": "test_e80bb7a9c796",
                            "userId": 1,
                            "fileType": 29,
                            "id": 43,
                            "gmtCreate": "2031-12-20 14:02:16",
                            "gmtModified": "2020-11-20 11:57:25",
                            "isActive": false
                        },
                        "cityDto": {
                            "province": "test_a5f300d0f209",
                            "city": "test_3b82c9f2c21b",
                            "county": "test_c6c49539f0d4",
                            "id": 63,
                            "gmtCreate": "2018-05-07 05:43:44",
                            "gmtModified": "2022-09-17 08:52:35",
                            "isActive": false
                        },
                        "userCategoryDto": {
                            "code": 5,
                            "name": "test_273ae4a9c3bc",
                            "description": "test_d7da3fe829b1",
                            "id": 4,
                            "gmtCreate": "2015-12-31 21:05:44",
                            "gmtModified": "2026-08-03 11:41:58",
                            "isActive": true
                        },
                        "lastActiveTime": "2026-05-21 15:03:36",
                        "id": 99,
                        "gmtCreate": "2015-08-21 22:50:26",
                        "gmtModified": "2028-07-29 02:43:32",
                        "isActive": true
                    },
                    "id": 57,
                    "gmtCreate": "2025-02-11 18:02:30",
                    "gmtModified": "2020-05-04 21:36:36",
                    "isActive": false
                },
                "id": 69,
                "gmtCreate": "2020-08-15 18:26:52",
                "gmtModified": "2018-06-08 07:26:02",
                "isActive": true
            }
        ]
    }
})


Mock.mock(/\/endpoint\/v1\/adopt\/get/, 'post', {
    code: 200,
    success: true,
    data: {
        "title": "刚满月的小狗找主人",
        "sex": 0,
        "amount": 1,
        "age": 3,
        "description": "这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息这个是详细的描述信息!",
        "personName": "志哥哥",
        "weChat": "jf000101",
        "phone": "13594711234",
        "imgFiles": [
            {
                "fileName": "test_410672bbe677",
                "filePath": "https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304",
                "userId": 29,
                "fileType": 85,
                "id": 17,
                "gmtCreate": "2024-11-10 13:41:17",
                "gmtModified": "2033-02-02 04:03:40",
                "isActive": true
            }, {
                "fileName": "test_410672bbe677",
                "filePath": "https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304",
                "userId": 29,
                "fileType": 85,
                "id": 17,
                "gmtCreate": "2024-11-10 13:41:17",
                "gmtModified": "2033-02-02 04:03:40",
                "isActive": true
            }, {
                "fileName": "test_410672bbe677",
                "filePath": "https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304",
                "userId": 29,
                "fileType": 85,
                "id": 17,
                "gmtCreate": "2024-11-10 13:41:17",
                "gmtModified": "2033-02-02 04:03:40",
                "isActive": true
            }, {
                "fileName": "test_410672bbe677",
                "filePath": "https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304",
                "userId": 29,
                "fileType": 85,
                "id": 17,
                "gmtCreate": "2024-11-10 13:41:17",
                "gmtModified": "2033-02-02 04:03:40",
                "isActive": true
            }
        ],
        "cityDto": {
            "province": "四川省",
            "city": "成都市",
            "county": "武侯区",
            "id": 5,
            "gmtCreate": "2026-02-11 09:24:32",
            "gmtModified": "2016-05-12 14:00:03",
            "isActive": false
        },
        "supply": 0,
        "animalCategoryDto": {
            "name": "狗狗",
            "bindCount": 96,
            "id": 45,
            "gmtCreate": "2032-06-28 16:08:37",
            "gmtModified": "2018-05-31 11:58:53",
            "isActive": true
        },
        "status": 0,
        "expellingParasite": 0,
        "vaccine": 54,
        "userDto": {
            "userName": "管理员",
            "passWord": "test_60a50bd21708",
            "birthday": "2017-07-25 02:37:02",
            "sex": 35,
            "phone": "test_2daa3ce4e133",
            "email": "test_f0c1da39d518",
            "photoFileDto": {
                "fileName": "test_658a3818bf87",
                "filePath": "test_e274e0fdaa71",
                "userId": 76,
                "fileType": 56,
                "id": 52,
                "gmtCreate": "2025-10-26 15:23:14",
                "gmtModified": "2027-01-12 22:38:35",
                "isActive": true
            },
            "cityDto": {
                "province": "test_daa64701b221",
                "city": "test_44e9ede1e346",
                "county": "test_cf0391ad2bed",
                "id": 56,
                "gmtCreate": "2026-07-04 20:11:48",
                "gmtModified": "2028-04-10 01:58:51",
                "isActive": true
            },
            "userCategoryDto": {
                "code": 36,
                "name": "test_7056789bbce2",
                "description": "test_1c2e283ba716",
                "id": 36,
                "gmtCreate": "2030-01-06 10:19:31",
                "gmtModified": "2024-11-12 14:29:51",
                "isActive": false
            },
            "lastActiveTime": "2029-03-10 03:15:08",
            "isAdmin": true,
            "id": 2,
            "gmtCreate": "2014-10-21 00:52:52",
            "gmtModified": "2020-11-16 08:27:54",
            "isActive": false
        },
        "verifyDto": {
            "bizType": 4,
            "bizId": 80,
            "status": 31,
            "statusDesc": "test_caf69d3505a3",
            "message": "test_65e985ae2338",
            "createUseruserDto": {
                "userName": "test_b378f79619be",
                "passWord": "test_6e023cde24c6",
                "birthday": "2015-02-10 10:05:42",
                "sex": 19,
                "phone": "test_aa096995d799",
                "email": "test_0032a684e8b7",
                "photoFileDto": {
                    "fileName": "test_ffea6900d1ce",
                    "filePath": "test_eaa18ace8212",
                    "userId": 75,
                    "fileType": 34,
                    "id": 96,
                    "gmtCreate": "2030-06-22 04:55:27",
                    "gmtModified": "2023-10-27 03:55:37",
                    "isActive": false
                },
                "cityDto": {
                    "province": "test_ab61df95aede",
                    "city": "test_1572e0494558",
                    "county": "test_d9bb0ada4bb4",
                    "id": 75,
                    "gmtCreate": "2015-07-30 02:47:25",
                    "gmtModified": "2017-09-16 20:19:03",
                    "isActive": false
                },
                "userCategoryDto": {
                    "code": 90,
                    "name": "test_a3c15c1563cc",
                    "description": "test_d24fade8169d",
                    "id": 99,
                    "gmtCreate": "2013-09-18 14:23:46",
                    "gmtModified": "2016-02-19 12:47:40",
                    "isActive": false
                },
                "lastActiveTime": "2020-08-20 09:04:25",
                "isAdmin": false,
                "id": 77,
                "gmtCreate": "2027-01-16 00:25:12",
                "gmtModified": "2024-06-06 21:58:40",
                "isActive": true
            },
            "verifyuserDto": {
                "userName": "test_d04f159aa73b",
                "passWord": "test_390e94e9db4f",
                "birthday": "2020-07-23 21:23:45",
                "sex": 24,
                "phone": "test_e8bf83188817",
                "email": "test_1292733d5914",
                "photoFileDto": {
                    "fileName": "test_eeec61b8151e",
                    "filePath": "test_9bbb332261d1",
                    "userId": 1,
                    "fileType": 24,
                    "id": 79,
                    "gmtCreate": "2029-01-21 10:47:16",
                    "gmtModified": "2032-02-15 00:17:29",
                    "isActive": true
                },
                "cityDto": {
                    "province": "test_4eb3cc7c0a4a",
                    "city": "test_6cbe37ce6c8f",
                    "county": "test_d7bd5c8f8343",
                    "id": 16,
                    "gmtCreate": "2032-12-24 00:02:18",
                    "gmtModified": "2014-10-21 23:28:05",
                    "isActive": false
                },
                "userCategoryDto": {
                    "code": 21,
                    "name": "test_165534afe16c",
                    "description": "test_f94cdfdc084b",
                    "id": 38,
                    "gmtCreate": "2016-09-02 19:41:41",
                    "gmtModified": "2017-12-02 17:06:43",
                    "isActive": true
                },
                "lastActiveTime": "2020-02-29 20:00:23",
                "isAdmin": false,
                "id": 67,
                "gmtCreate": "2023-10-15 06:09:40",
                "gmtModified": "2029-12-31 20:46:30",
                "isActive": false
            },
            "id": 75,
            "gmtCreate": "2020-01-15 23:33:49",
            "gmtModified": "2017-02-04 10:22:12",
            "isActive": true
        },
        "id": 86,
        "gmtCreate": "2023-02-26 17:10:50",
        "gmtModified": "2023-05-02 10:06:55",
        "isActive": true
    }
})
