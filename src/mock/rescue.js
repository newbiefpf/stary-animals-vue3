import Mock from 'mockjs'

Mock.mock(/\/endpoint\/v1\/rescue\/list_by_user_id/, 'post', {
    code: 200,
    success: true,
    data: {
        'content|5-13': [
            {
                "userDto": {
                    "userName": "test_6abd8054959e",
                    "passWord": "test_4ff02be8bd90",
                    "birthday": "2032-12-29 22:44:13",
                    "sex": 86,
                    "phone": "test_5fa908d9df2c",
                    "email": "test_2c25da8d4f7e",
                    "photoFileDto": {
                        "fileName": "test_5557b30d08be",
                        "filePath": "test_b6d786bf9724",
                        "userId": 21,
                        "fileType": 95,
                        "id": 3,
                        "gmtCreate": "2014-09-07 08:50:02",
                        "gmtModified": "2024-05-12 23:57:12",
                        "isActive": false
                    },
                    "cityDto": {
                        "province": "test_a3172cd75f7e",
                        "city": "test_6ddc6c15e638",
                        "county": "test_fbe79d48834b",
                        "id": 31,
                        "gmtCreate": "2018-05-07 12:06:20",
                        "gmtModified": "2030-09-12 22:04:57",
                        "isActive": false
                    },
                    "userCategoryDto": {
                        "code": 68,
                        "name": "test_27c854ac87a7",
                        "description": "test_e0165398a02e",
                        "id": 63,
                        "gmtCreate": "2029-11-09 01:01:53",
                        "gmtModified": "2014-07-11 04:27:46",
                        "isActive": false
                    },
                    "lastActiveTime": "2014-04-18 08:51:44",
                    "isAdmin": false,
                    "id": 67,
                    "gmtCreate": "2023-02-28 18:43:49",
                    "gmtModified": "2029-06-20 04:11:52",
                    "isActive": false
                },
                "title": "test_ec445bedc4f9",
                "status": 25,
                "animalCategoryDto": {
                    "name": "test_f9f79ea27fbb",
                    "bindCount": 66,
                    "id": 80,
                    "gmtCreate": "2021-03-24 04:21:22",
                    "gmtModified": "2017-04-29 14:20:39",
                    "isActive": true
                },
                "introduction": "test_8b23cf9f7103",
                "description": "test_dbac108c9ca6",
                "imgFiles": [
                    {
                        "fileName": "test_217b7e39d5d4",
                        "filePath": "test_2839738a3141",
                        "userId": 39,
                        "fileType": 63,
                        "id": 50,
                        "gmtCreate": "2015-06-16 02:15:57",
                        "gmtModified": "2022-09-14 17:33:13",
                        "isActive": true
                    }
                ],
                "cityDto": {
                    "province": "test_187ff1300121",
                    "city": "test_052d3dc24d39",
                    "county": "test_dbcbade26118",
                    "id": 73,
                    "gmtCreate": "2027-06-20 11:17:55",
                    "gmtModified": "2013-08-13 09:26:14",
                    "isActive": false
                },
                "address": "test_58b199d7a12f",
                "payImgFileDto": {
                    "fileName": "test_bbdc237944f0",
                    "filePath": "test_7ba7b15e7234",
                    "userId": 99,
                    "fileType": 69,
                    "id": 20,
                    "gmtCreate": "2019-09-02 01:50:22",
                    "gmtModified": "2019-10-19 08:10:11",
                    "isActive": false
                },
                "money": 90,
                "verifyDto": {
                    "bizType": 44,
                    "bizId": 79,
                    "status": 64,
                    "statusDesc": "test_b08ba2834424",
                    "message": "test_cc6e350fdf2e",
                    "createUserUserDto": {
                        "userName": "test_e7be14acd282",
                        "passWord": "test_a0c63116be3d",
                        "birthday": "2024-02-03 10:39:10",
                        "sex": 60,
                        "phone": "test_cc220845a709",
                        "email": "test_59e45198f08a",
                        "photoFileDto": {
                            "fileName": "test_bc0594b1ce34",
                            "filePath": "test_5eab2c654977",
                            "userId": 28,
                            "fileType": 52,
                            "id": 38,
                            "gmtCreate": "2028-06-21 03:29:12",
                            "gmtModified": "2015-03-28 12:31:41",
                            "isActive": true
                        },
                        "cityDto": {
                            "province": "test_7d6a64363136",
                            "city": "test_5949ec2203f0",
                            "county": "test_eb8e12a519ed",
                            "id": 38,
                            "gmtCreate": "2020-08-21 11:04:13",
                            "gmtModified": "2027-02-04 03:56:17",
                            "isActive": false
                        },
                        "userCategoryDto": {
                            "code": 88,
                            "name": "test_5b84128d2a11",
                            "description": "test_47f8ab9a1f16",
                            "id": 61,
                            "gmtCreate": "2016-09-02 22:38:19",
                            "gmtModified": "2027-05-09 06:34:17",
                            "isActive": false
                        },
                        "lastActiveTime": "2017-12-14 15:19:59",
                        "isAdmin": true,
                        "id": 76,
                        "gmtCreate": "2014-02-07 09:44:55",
                        "gmtModified": "2020-06-18 11:01:25",
                        "isActive": false
                    },
                    "verifyUserDto": {
                        "userName": "test_6b5ffb62cbe4",
                        "passWord": "test_8f5a2d0dd3e3",
                        "birthday": "2032-03-19 20:42:20",
                        "sex": 35,
                        "phone": "test_8a2024bba678",
                        "email": "test_6e4d948fbaa2",
                        "photoFileDto": {
                            "fileName": "test_5b9383039231",
                            "filePath": "test_0829c9fef72c",
                            "userId": 22,
                            "fileType": 76,
                            "id": 59,
                            "gmtCreate": "2017-04-01 14:24:26",
                            "gmtModified": "2028-02-11 05:03:35",
                            "isActive": true
                        },
                        "cityDto": {
                            "province": "test_92989bd2e473",
                            "city": "test_913952c7e17b",
                            "county": "test_90c13e5e9511",
                            "id": 93,
                            "gmtCreate": "2017-07-03 11:04:47",
                            "gmtModified": "2027-08-07 04:07:04",
                            "isActive": true
                        },
                        "userCategoryDto": {
                            "code": 84,
                            "name": "test_7ae6aec42e8f",
                            "description": "test_87b15db4ade5",
                            "id": 35,
                            "gmtCreate": "2020-11-04 03:24:23",
                            "gmtModified": "2025-11-14 06:59:19",
                            "isActive": false
                        },
                        "lastActiveTime": "2013-06-20 15:28:28",
                        "isAdmin": false,
                        "id": 16,
                        "gmtCreate": "2031-02-27 16:18:49",
                        "gmtModified": "2017-10-21 03:52:04",
                        "isActive": true
                    },
                    "id": 55,
                    "gmtCreate": "2022-01-31 16:15:08",
                    "gmtModified": "2025-08-18 14:29:15",
                    "isActive": true
                },
                "id": 16,
                "gmtCreate": "2027-06-17 00:00:40",
                "gmtModified": "2025-07-18 19:25:51",
                "isActive": true
            }
        ]
    }
})


Mock.mock(/\/endpoint\/v1\/rescue\/get/, 'post', {
    code: 200,
    success: true,
    data: {
        "userDto": {
            "userName": "@ctitle(3,5)",
            "passWord": "test_4ff02be8bd90",
            "birthday": "2032-12-29 22:44:13",
            "sex": 86,
            "phone": "test_5fa908d9df2c",
            "email": "test_2c25da8d4f7e",
            "photoFileDto": {
                "fileName": "test_5557b30d08be",
                "filePath": "test_b6d786bf9724",
                "userId": 21,
                "fileType": 95,
                "id": 3,
                "gmtCreate": "2014-09-07 08:50:02",
                "gmtModified": "2024-05-12 23:57:12",
                "isActive": false
            },
            "cityDto": {
                "province": "test_a3172cd75f7e",
                "city": "test_6ddc6c15e638",
                "county": "test_fbe79d48834b",
                "id": 31,
                "gmtCreate": "2018-05-07 12:06:20",
                "gmtModified": "2030-09-12 22:04:57",
                "isActive": false
            },
            "userCategoryDto": {
                "code": 68,
                "name": "test_27c854ac87a7",
                "description": "test_e0165398a02e",
                "id": 63,
                "gmtCreate": "2029-11-09 01:01:53",
                "gmtModified": "2014-07-11 04:27:46",
                "isActive": false
            },
            "lastActiveTime": "2014-04-18 08:51:44",
            "isAdmin": false,
            "id": 67,
            "gmtCreate": "2023-02-28 18:43:49",
            "gmtModified": "2029-06-20 04:11:52",
            "isActive": false
        },
        "title": "希望好心人帮帮忙",
        "status": 0,
        "animalCategoryDto": {
            "name": "狗狗",
            "bindCount": 66,
            "id": 80,
            "gmtCreate": "2021-03-24 04:21:22",
            "gmtModified": "2017-04-29 14:20:39",
            "isActive": true
        },
        "introduction": "@csentence(30)",
        "description": "@csentence(200)",
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
        "cityDto": {
            "province": "四川省",
            "city": "眉山市",
            "county": "第一区",
            "id": 73,
            "gmtCreate": "2027-06-20 11:17:55",
            "gmtModified": "2013-08-13 09:26:14",
            "isActive": false
        },
        "address": "@csentence(30)",
        "payImgFileDto": {
            "fileName": "test_bbdc237944f0",
            "filePath": "https://img1.baidu.com/it/u=1410611840,1889651514&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=304",
            "userId": 99,
            "fileType": 69,
            "id": 20,
            "gmtCreate": "2019-09-02 01:50:22",
            "gmtModified": "2019-10-19 08:10:11",
            "isActive": false
        },
        "money": 90,
        "verifyDto": {
            "bizType": 44,
            "bizId": 79,
            "status": 64,
            "statusDesc": "test_b08ba2834424",
            "message": "test_cc6e350fdf2e",
            "createUserUserDto": {
                "userName": "test_e7be14acd282",
                "passWord": "test_a0c63116be3d",
                "birthday": "2024-02-03 10:39:10",
                "sex": 60,
                "phone": "test_cc220845a709",
                "email": "test_59e45198f08a",
                "photoFileDto": {
                    "fileName": "test_bc0594b1ce34",
                    "filePath": "test_5eab2c654977",
                    "userId": 28,
                    "fileType": 52,
                    "id": 38,
                    "gmtCreate": "2028-06-21 03:29:12",
                    "gmtModified": "2015-03-28 12:31:41",
                    "isActive": true
                },
                "cityDto": {
                    "province": "test_7d6a64363136",
                    "city": "test_5949ec2203f0",
                    "county": "test_eb8e12a519ed",
                    "id": 38,
                    "gmtCreate": "2020-08-21 11:04:13",
                    "gmtModified": "2027-02-04 03:56:17",
                    "isActive": false
                },
                "userCategoryDto": {
                    "code": 88,
                    "name": "test_5b84128d2a11",
                    "description": "test_47f8ab9a1f16",
                    "id": 61,
                    "gmtCreate": "2016-09-02 22:38:19",
                    "gmtModified": "2027-05-09 06:34:17",
                    "isActive": false
                },
                "lastActiveTime": "2017-12-14 15:19:59",
                "isAdmin": true,
                "id": 76,
                "gmtCreate": "2014-02-07 09:44:55",
                "gmtModified": "2020-06-18 11:01:25",
                "isActive": false
            },
            "verifyUserDto": {
                "userName": "test_6b5ffb62cbe4",
                "passWord": "test_8f5a2d0dd3e3",
                "birthday": "2032-03-19 20:42:20",
                "sex": 35,
                "phone": "test_8a2024bba678",
                "email": "test_6e4d948fbaa2",
                "photoFileDto": {
                    "fileName": "test_5b9383039231",
                    "filePath": "test_0829c9fef72c",
                    "userId": 22,
                    "fileType": 76,
                    "id": 59,
                    "gmtCreate": "2017-04-01 14:24:26",
                    "gmtModified": "2028-02-11 05:03:35",
                    "isActive": true
                },
                "cityDto": {
                    "province": "test_92989bd2e473",
                    "city": "test_913952c7e17b",
                    "county": "test_90c13e5e9511",
                    "id": 93,
                    "gmtCreate": "2017-07-03 11:04:47",
                    "gmtModified": "2027-08-07 04:07:04",
                    "isActive": true
                },
                "userCategoryDto": {
                    "code": 84,
                    "name": "test_7ae6aec42e8f",
                    "description": "test_87b15db4ade5",
                    "id": 35,
                    "gmtCreate": "2020-11-04 03:24:23",
                    "gmtModified": "2025-11-14 06:59:19",
                    "isActive": false
                },
                "lastActiveTime": "2013-06-20 15:28:28",
                "isAdmin": false,
                "id": 16,
                "gmtCreate": "2031-02-27 16:18:49",
                "gmtModified": "2017-10-21 03:52:04",
                "isActive": true
            },
            "id": 55,
            "gmtCreate": "2022-01-31 16:15:08",
            "gmtModified": "2025-08-18 14:29:15",
            "isActive": true
        },
        "id": 16,
        "gmtCreate": "2027-06-17 00:00:40",
        "gmtModified": "2025-07-18 19:25:51",
        "isActive": true
    }
})
