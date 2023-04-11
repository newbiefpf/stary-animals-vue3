import Mock from 'mockjs'

Mock.mock(/\/endpoint\/v1\/seek\/list_by_user_id/, 'post', {
    code: 200,
    success: true,
    data: {
        'content|5-13': [
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
                    "province": "test_d6a8561d3a20",
                    "city": "test_ce35ebf15929",
                    "county": "test_5350f032ffe6",
                    "id": 54,
                    "gmtCreate": "2030-02-16 04:16:57",
                    "gmtModified": "2023-11-12 16:03:01",
                    "isActive": true
                },
                "userDto": {
                    "userName": "test_5434fb551aa9",
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
                "status": 60,
                "description": "@ctitle(10,20)",
                "imgFiles": [
                    {
                        "fileName": "test_c43d7314f5d2",
                        "filePath": "test_62cdcd4dea5e",
                        "userId": 69,
                        "fileType": 87,
                        "id": 26,
                        "gmtCreate": "2031-11-12 04:28:58",
                        "gmtModified": "2032-07-19 13:30:54",
                        "isActive": false
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
                            "province": "四川省",
                            "city": "成都市",
                            "county": "武侯区",
                            "id": 5,
                            "gmtCreate": "2026-02-11 09:24:32",
                            "gmtModified": "2016-05-12 14:00:03",
                            "isActive": false
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
Mock.mock(/\/endpoint\/v1\/seek\/list/, 'post', {
    code: 200,
    success: true,
    data: {
        'content|5-13': [
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
                    "province|1": [null, "@ctitle(3)"],
                    "city": "@ctitle(3,4)",
                    "county": "@ctitle(4)",
                    "id": 54,
                    "gmtCreate": "2030-02-16 04:16:57",
                    "gmtModified": "2023-11-12 16:03:01",
                    "isActive": true
                },
                "userDto": {
                    "userName": "test_5434fb551aa9",
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
                "status|1": [0,1,2,3,4],
                "description": "@ctitle(30,100)",
                "imgFiles": [
                    {
                        "fileName": "test_c43d7314f5d2",
                        "filePath": "https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304",
                        "userId": 69,
                        "fileType": 87,
                        "id": 26,
                        "gmtCreate": "2031-11-12 04:28:58",
                        "gmtModified": "2032-07-19 13:30:54",
                        "isActive": false
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
                            "province": "四川省",
                            "city": "成都市",
                            "county": "武侯区",
                            "id": 5,
                            "gmtCreate": "2026-02-11 09:24:32",
                            "gmtModified": "2016-05-12 14:00:03",
                            "isActive": false
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


Mock.mock(/\/endpoint\/v1\/seek\/get/, 'post', {
    code: 200,
    success: true,
    data: {
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
})


Mock.mock(/\/endpoint\/v1\/common\/animal_category_list/, 'post', {
    code: 200,
    success: true,
    data: {
        "content|20": [
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
