import Mock from 'mockjs'

Mock.mock(/\/endpoint\/v1\/common\/animal_category_list/, 'post', {
    code: 200,
    success: true,
    data: {
        "content|6": [
            {
                "name": '@cword(2,5)',
                "bindCount": '@integer(0,20)',
                "id": '@increment()',
                "gmtCreate": '@datetime',
                "gmtModified": '@datetime',
                "isActive": true
            }
        ]
    }
})

Mock.mock(/\/endpoint\/v1\/common\/news_category_list/, 'post', {
    code: 200,
    success: true,
    data: {
        "content|6": [
            {
                "name": '@cword(2,5)',
                "bindCount": '@integer(0,20)',
                "id": '@increment()',
                "gmtCreate": '@datetime',
                "gmtModified": '@datetime',
                "isActive": true
            }
        ]
    }
})

Mock.mock(/\/endpoint\/v1\/common\/city_list/, 'post', {
    code: 200,
    success: true,
    data: {
        "content|6": [
            {
                "name": '@cword(2,5)',
                "bindCount": '@integer(0,20)',
                "id": '@increment()',
                "gmtCreate": '@datetime',
                "gmtModified": '@datetime',
                "isActive": true
            }
        ]
    }
})

Mock.mock(/\/endpoint\/v1\/common\/hot_adopt_list/, 'post', {
    code: 200,
    success: true,
    data: {
        "content|10": [
            {
                "title": "@ctitle(20,15)",
                "sex": '@integer(1,20)',
                "amount": '@number(1,20)',
                "age": '@number(1,20)',
                "description": '@cword(30,100)',
                "personName": '@cword(3,5)',
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
        ]
    }
})

Mock.mock(/\/endpoint\/v1\/common\/hot_seek_list/, 'post', {
    code: 200,
    success: true,
    data: {
        "content|10": [
            {
                "title": "@ctitle(10,20)",
                "animalCategoryDto": {
                    "name": "@ctitle(2,5)",
                    "bindCount": 77,
                    "id": 46,
                    "gmtCreate": "2033-03-21 14:40:11",
                    "gmtModified": "2013-10-20 23:42:55",
                    "isActive": true
                },
                "personName": "@ctitle(2,5)",
                "phone": "@ctitle(10,20)",
                "money": 39,
                "cityDto": {
                    "province": "四川省",
                    "city": "成都市",
                    "county": "武侯区",
                    "id": 5,
                    "gmtCreate": "2026-02-11 09:24:32",
                    "gmtModified": "2016-05-12 14:00:03",
                    "isActive": false
                },
                "userDto": {
                    "userName": "管理员",
                    "passWord": "test_b135ab895ae8",
                    "birthday": "2015-06-17 16:27:23",
                    "sex": 71,
                    "phone": "test_9867311f2a8d",
                    "email": "test_9d0f117ea22b",
                    "photoFileDto": {
                        "fileName": "test_d55970a9562a",
                        "filePath": "test_432f60c6d11c",
                        "userId": 70,
                        "fileType": 84,
                        "id": 76,
                        "gmtCreate": "2013-07-12 17:33:53",
                        "gmtModified": "2023-08-21 02:06:25",
                        "isActive": true
                    },
                    "cityDto": {
                        "province": "test_e5eb221d876d",
                        "city": "test_dfd2640882c6",
                        "county": "test_930ca34696b1",
                        "id": 62,
                        "gmtCreate": "2027-03-03 02:48:44",
                        "gmtModified": "2018-10-02 07:20:53",
                        "isActive": true
                    },
                    "userCategoryDto": {
                        "code": 0,
                        "name": "test_ac9e8c94e241",
                        "description": "test_b8d40c3e0f69",
                        "id": 99,
                        "gmtCreate": "2032-11-16 20:03:36",
                        "gmtModified": "2015-11-28 08:25:49",
                        "isActive": true
                    },
                    "lastActiveTime": "2021-05-14 07:57:13",
                    "isAdmin": false,
                    "id": 63,
                    "gmtCreate": "2014-05-26 18:47:02",
                    "gmtModified": "2027-12-01 20:54:25",
                    "isActive": true
                },
                "address": "@ctitle(10,20)",
                "sex": 12,
                "age": 85,
                "status|1": [0, 1, 2],
                "description": "@ctitle(10,100)",
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
                    }
                ],
                "verifyDto": {
                    "bizType|1": [1, 2, 4, 8, 16],
                    "bizId": '@id',
                    "status|1": [1, 2, 3, 4],
                    "statusDesc|1": ['未审核', '审核成功', '审核失败', '举报下架'],
                    "message": "@ctitle(20,30)",
                    "createUserUserDto": {
                        "userName": "test_6a64cecba843",
                        "passWord": "test_b3673c3e3371",
                        "birthday": "2025-11-27 17:35:05",
                        "sex": 12,
                        "phone": "test_3fb9f16878d7",
                        "email": "test_9c5b818e8565",
                        "photoFileDto": {
                            "fileName": "test_efcd2ef25410",
                            "filePath": "test_f55ba181ac56",
                            "userId": 69,
                            "fileType": 81,
                            "id": 50,
                            "gmtCreate": "2018-03-24 23:52:23",
                            "gmtModified": "2028-05-22 04:02:03",
                            "isActive": false
                        },
                        "cityDto": {
                            "province": "test_3ed1230936ab",
                            "city": "test_f85272c0571e",
                            "county": "test_00aef633f2da",
                            "id": 78,
                            "gmtCreate": "2031-04-20 18:49:59",
                            "gmtModified": "2029-07-19 07:53:35",
                            "isActive": true
                        },
                        "userCategoryDto": {
                            "code": 59,
                            "name": "test_fa6e1eb0fb54",
                            "description": "test_d2a28fcab05e",
                            "id": 57,
                            "gmtCreate": "2032-08-08 15:21:13",
                            "gmtModified": "2032-01-29 22:26:42",
                            "isActive": true
                        },
                        "lastActiveTime": "2024-08-22 08:06:04",
                        "isAdmin": false,
                        "id": 23,
                        "gmtCreate": "2025-08-20 15:05:02",
                        "gmtModified": "2029-07-29 06:04:53",
                        "isActive": false
                    },
                    "verifyUserDto": {
                        "userName": "test_f4ea48176b8e",
                        "passWord": "test_78e6a4bc66b5",
                        "birthday": "2021-10-08 21:45:53",
                        "sex": 43,
                        "phone": "test_4111bba78958",
                        "email": "test_1dce348ab60d",
                        "photoFileDto": {
                            "fileName": "test_e0a704dcb9ce",
                            "filePath": "test_5638526c567c",
                            "userId": 9,
                            "fileType": 92,
                            "id": 31,
                            "gmtCreate": "2016-08-09 08:17:32",
                            "gmtModified": "2019-03-23 06:50:17",
                            "isActive": true
                        },
                        "cityDto": {
                            "province": "test_b6f53f598b6b",
                            "city": "test_54aa940d672e",
                            "county": "test_3bc1a05afe4d",
                            "id": 53,
                            "gmtCreate": "2014-10-30 11:21:07",
                            "gmtModified": "2025-08-08 04:18:47",
                            "isActive": false
                        },
                        "userCategoryDto": {
                            "code": 26,
                            "name": "test_2d4f36724cd9",
                            "description": "test_6314b7d8a97d",
                            "id": 20,
                            "gmtCreate": "2030-03-02 12:02:26",
                            "gmtModified": "2029-07-18 01:59:29",
                            "isActive": false
                        },
                        "lastActiveTime": "2031-02-27 02:47:02",
                        "isAdmin": true,
                        "id": 65,
                        "gmtCreate": "2017-08-11 13:28:01",
                        "gmtModified": "2018-12-02 19:14:47",
                        "isActive": true
                    },
                    "id": 8,
                    "gmtCreate": "2032-07-14 20:42:17",
                    "gmtModified": "2029-07-02 01:28:37",
                    "isActive": true
                },
                "type|1": [true, false],
                "id": 47,
                "gmtCreate": "2028-07-30 21:40:46",
                "gmtModified": "2022-02-11 23:36:52",
                "isActive": true
            }
        ]
    }
})

Mock.mock(/\/endpoint\/v1\/common\/hot_news_list/, 'post', {
    code: 200,
    success: true,
    data: {
        "content|10": [
            {
                "title": "@ctitle(10,20)",
                "fileDto": {
                    "fileName": "test_e441620f3c01",
                    "filePath": "test_5b59ba3a4138",
                    "userId": 69,
                    "fileType": 48,
                    "id": 6,
                    "gmtCreate": "2021-09-03 11:54:40",
                    "gmtModified": "2032-07-14 04:09:28",
                    "isActive": false
                },
                "description": "test_9f7c648d1996",
                "content": "@cword(30,200)",
                "userDto": {
                    "userName": "管理员",
                    "passWord": "test_7e24a0cc2985",
                    "birthday": "2028-09-13 08:26:25",
                    "sex": 34,
                    "phone": "test_40f66e19fa86",
                    "email": "test_c8984c041410",
                    "photoFileDto": {
                        "fileName": "test_7c31a1140f4d",
                        "filePath": "test_c6e8728a7296",
                        "userId": 54,
                        "fileType": 99,
                        "id": 86,
                        "gmtCreate": "2019-06-20 04:05:16",
                        "gmtModified": "2014-07-02 17:08:23",
                        "isActive": false
                    },
                    "cityDto": {
                        "province": "test_28f9f9193252",
                        "city": "test_6a14ca5a81dd",
                        "county": "test_384765309fe9",
                        "id": 27,
                        "gmtCreate": "2013-06-08 21:47:33",
                        "gmtModified": "2021-12-15 13:32:44",
                        "isActive": false
                    },
                    "userCategoryDto": {
                        "code": 53,
                        "name": "test_dbc041776a31",
                        "description": "test_e1acbb4ac557",
                        "id": 65,
                        "gmtCreate": "2028-07-22 13:27:05",
                        "gmtModified": "2016-03-04 15:40:31",
                        "isActive": false
                    },
                    "lastActiveTime": "2016-03-28 08:15:39",
                    "isAdmin": false,
                    "id": 93,
                    "gmtCreate": "2027-02-09 08:47:49",
                    "gmtModified": "2021-02-02 05:58:36",
                    "isActive": true
                },
                "newsCategoryDto": {
                    "name": "test_682407cf967f",
                    "description": "test_8fcf4f9eb818",
                    "id": 69,
                    "gmtCreate": "2027-05-29 20:24:54",
                    "gmtModified": "2026-07-25 02:29:56",
                    "isActive": false
                },
                "verifyDto": {
                    "bizType": 93,
                    "bizId": 93,
                    "status": 90,
                    "statusDesc": "test_75f21230561e",
                    "message": "test_b8226fc0ebeb",
                    "createUserUserDto": {
                        "userName": "test_dda7d33e7634",
                        "passWord": "test_d4ac715e8f31",
                        "birthday": "2025-07-05 10:27:02",
                        "sex": 70,
                        "phone": "test_4e840b88a033",
                        "email": "test_ee1f832ac5d7",
                        "photoFileDto": {
                            "fileName": "test_1d4e536abc95",
                            "filePath": "test_20145c59cec0",
                            "userId": 67,
                            "fileType": 7,
                            "id": 15,
                            "gmtCreate": "2022-07-03 14:20:03",
                            "gmtModified": "2022-06-27 19:16:32",
                            "isActive": true
                        },
                        "cityDto": {
                            "province": "test_3891f2ac3139",
                            "city": "test_f28a7e804a1a",
                            "county": "test_b616735ccd6b",
                            "id": 23,
                            "gmtCreate": "2014-03-11 00:29:55",
                            "gmtModified": "2024-09-06 22:23:17",
                            "isActive": false
                        },
                        "userCategoryDto": {
                            "code": 75,
                            "name": "test_55abfb2c23c8",
                            "description": "test_c54b5d992b10",
                            "id": 39,
                            "gmtCreate": "2019-07-21 15:47:50",
                            "gmtModified": "2017-07-28 05:20:03",
                            "isActive": false
                        },
                        "lastActiveTime": "2031-01-27 00:59:11",
                        "isAdmin": false,
                        "id": 87,
                        "gmtCreate": "2029-05-31 01:37:15",
                        "gmtModified": "2026-05-18 11:48:52",
                        "isActive": true
                    },
                    "verifyUserDto": {
                        "userName": "test_d5e71dfed9e9",
                        "passWord": "test_05fb1f1733b5",
                        "birthday": "2025-04-21 03:53:31",
                        "sex": 44,
                        "phone": "test_b7b8c5db2276",
                        "email": "test_0b48a0f61f70",
                        "photoFileDto": {
                            "fileName": "test_5e7c7ecbd362",
                            "filePath": "test_a515600e7fb8",
                            "userId": 73,
                            "fileType": 13,
                            "id": 83,
                            "gmtCreate": "2019-04-01 08:30:40",
                            "gmtModified": "2027-04-27 01:03:32",
                            "isActive": true
                        },
                        "cityDto": {
                            "province": "test_50fe0043f745",
                            "city": "test_a267c459740d",
                            "county": "test_125f12f05ddd",
                            "id": 7,
                            "gmtCreate": "2014-12-23 23:23:11",
                            "gmtModified": "2018-04-14 12:56:56",
                            "isActive": false
                        },
                        "userCategoryDto": {
                            "code": 98,
                            "name": "test_514190aeb145",
                            "description": "test_e5dc34195c70",
                            "id": 30,
                            "gmtCreate": "2032-09-10 12:20:18",
                            "gmtModified": "2023-10-05 08:50:33",
                            "isActive": true
                        },
                        "lastActiveTime": "2015-12-19 03:25:41",
                        "isAdmin": true,
                        "id": 43,
                        "gmtCreate": "2027-01-25 20:08:10",
                        "gmtModified": "2033-03-06 10:21:23",
                        "isActive": false
                    },
                    "id": 69,
                    "gmtCreate": "2018-08-22 08:49:07",
                    "gmtModified": "2013-09-22 05:25:29",
                    "isActive": false
                },
                "id": 75,
                "gmtCreate": "2025-10-23 00:52:38",
                "gmtModified": "2015-09-01 22:54:12",
                "isActive": false
            }
        ]
    }
})

