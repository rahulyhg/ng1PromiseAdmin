/**
 * Created by mr.whg on 2017/6/13.
 */
//
//var departments = [
//    {
//        id: 1,
//        name: '总裁办',
//        upper: '',
//        position: [
//            {
//                id: 1,
//                name: '总裁',
//                upper: '',
//                description: '暂无描述。'
//            }, {
//                id: 2,
//                name: '副总裁',
//                upper: 1,
//                description: '暂无描述。'
//            }
//        ],
//        description: '暂无描述。'
//    },
//    {
//        id: 2,
//        name: '总经办',
//        upper: 1,
//        position: [
//            {
//                id: 1,
//                name: '总经理',
//                upper: '',
//                description: '暂无描述。'
//            }, {
//                id: 2,
//                name: '副总经理',
//                upper: 1,
//                description: '暂无描述。'
//            }
//        ],
//        description: '暂无描述。'
//    },
//    {
//        id: 3,
//        name: '行政处',
//        upper: 1,
//        position: [
//            {
//                id: 1,
//                name: '行政主任',
//                upper: '',
//                description: '暂无描述。'
//            }
//        ],
//        description: '暂无描述。'
//    },
//    {
//        id: 4,
//        name: '销售部',
//        upper: 2,
//        position: [
//            {
//                id: 1,
//                name: '销售主管',
//                upper: '',
//                description: '暂无描述。'
//            },
//            {
//                id: 2,
//                name: '销售组长',
//                upper: 1,
//                description: '暂无描述。'
//            },
//            {
//                id: 3,
//                name: '员工',
//                upper: 2,
//                description: '暂无描述。'
//            }
//        ],
//        description: '暂无描述。'
//    },
//    {
//        id: 5,
//        name: '人事部',
//        upper: 2,
//        position: [
//            {
//                id: 1,
//                name: '人事主管',
//                upper: '',
//                description: '暂无描述。'
//            },
//            {
//                id: 2,
//                name: '员工',
//                upper: 1,
//                description: '暂无描述。'
//            }
//        ],
//        description: '暂无描述。'
//    },
//    {
//        id: 6,
//        name: '技术部',
//        upper: 2,
//        position: [
//            {
//                id: 1,
//                name: '项目主管',
//                upper: '',
//                description: '暂无描述。'
//            },
//            {
//                id: 2,
//                name: '产品经理',
//                upper: 1,
//                description: '暂无描述。'
//            },
//            {
//                id: 3,
//                name: '开发组长',
//                upper: 2,
//                description: '暂无描述。'
//            },
//            {
//                id: 4,
//                name: '前端开发',
//                upper: 3,
//                description: '暂无描述。'
//            },
//            {
//                id: 5,
//                name: '后端开发',
//                upper: 3,
//                description: '暂无描述。'
//            }
//        ],
//        description: '暂无描述。'
//    }
//];
//
//var systemPermissions = [
//    {
//        id: 0,
//        name: '部门学习浏览权',
//        description: '查看所属部门的员工学习记录'
//    },
//    {
//        id: 1,
//        name: '部门浏览权',
//        description: '查看所属部门的员工信息'
//    }, {
//        id: 2,
//        name: '部门考勤浏览权',
//        description: '查看所属部门的员工考勤记录'
//    },
//    {
//        id: 3,
//        name: '部门日志浏览权',
//        description: '查看所属部门的员工日志记录'
//    },
//    {
//        id: 4,
//        name: '部门日志评论权',
//        description: '评论所属部门的员工日志'
//    },
//    {
//        id: 5,
//        name: '部门考勤权',
//        description: '所属部门的员工的考勤工作'
//    },
//    {
//        id: 6,
//        name: '部门审批权',
//        description: '审批所属部门的员工的工作进度'
//    },
//    {
//        id: 7,
//        name: '上传代码',
//        description: '提交代码'
//    },
//    {
//        id: 8,
//        name: '提交各种各样的申请',
//        description: '提交各种各样的申请'
//    }
//];
//
//var users = [
//    {
//        id: '0001',
//        loginName:'',
//        userName: 'Tom',
//        tel: '110',
//        email: 'tom@sina.com',
//        job: [{
//            department: 6,
//            position: 5
//        }],
//        userRole: 2,
//        otherInfo: {}
//    }, {
//        id: '0022',
//        userName: 'Alice',
//        tel: '11022',
//        email: 'alice@sina.com',
//        job: [{
//            department: 2,
//            position: 1
//        }],
//        userRole: 2,
//        otherInfo: {
//            intro: 'to be No.1'
//        }
//    }, {
//        id: '1022',
//        userName: 'Amy',
//        tel: '112',
//        email: 'amy@sina.com',
//        job: [{
//            department: 2,
//            position: 1
//        }, {
//            department: 3,
//            position: 1
//        }, {
//            department: 6,
//            position: 4
//        }],
//        userRole: 1,
//        otherInfo: {
//            intro: 'to be No.2'
//        }
//    }
//];

var departments = [{
    did: 1101,
    name: '总经办',
    children: [1102, 1103, 1104, 1105],
    position: [901, 902],
    description: '暂无描述。'
}, {
    did: 1102,
    name: '行政处',
    children: [],
    position: [903, 904],
    description: '暂无描述。'
}, {
    did: 1103,
    name: '销售部',
    children: [],
    position: [905, 906, 907],
    description: '暂无描述。'
}, {
    did: 1104,
    name: '人事部',
    children: [],
    position: [908, 909],
    description: '暂无描述。'
}, {
    did: 1105,
    name: '技术部',
    children: [],
    position: [910, 911, 912, 913, 914],
    description: '暂无描述。'
}];
var systemPermissions = [{
    spid: 801,
    name: '部门学习浏览权',
    description: '查看所属部门的员工学习记录'
}, {
    spid: 802,
    name: '部门浏览权',
    description: '查看所属部门的员工信息'
}, {
    spid: 803,
    name: '部门考勤浏览权',
    description: '查看所属部门的员工考勤记录'
}, {
    spid: 804,
    name: '部门日志浏览权',
    description: '查看所属部门的员工日志记录'
}, {
    spid: 805,
    name: '部门日志评论权',
    description: '评论所属部门的员工日志'
}, {
    spid: 806,
    name: '部门考勤权',
    description: '所属部门的员工的考勤工作'
}, {
    spid: 807,
    name: '部门审批权',
    description: '审批所属部门的员工的工作进度'
}, {
    spid: 808,
    name: '上传代码',
    description: '提交代码'
}, {
    spid: 809,
    name: '提交各种各样的申请',
    description: '提交各种各样的申请'
}];
var positions = [{
    pid: 901,
    name: '总经理',
    children: [902],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 902,
    name: '副总经理',
    children: [],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 903,
    name: '行政主任',
    children: [904],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 904,
    name: '后勤',
    children: [],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 905,
    name: '销售主管',
    children: [906],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 906,
    name: '销售组长',
    children: [907],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 907,
    name: '销售',
    children: [],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 908,
    name: '人事主管',
    children: [909],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 909,
    name: '人事',
    children: [],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 910,
    name: '项目主管',
    children: [911],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 911,
    name: '产品经理',
    children: [912],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 912,
    name: '开发组长',
    children: [913, 914],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 913,
    name: '前端开发',
    children: [],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}, {
    pid: 914,
    name: '后端开发',
    children: [],
    permission: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    description: '暂无描述。'
}];
var users = [{
    userId: '0001',
    loginName: '',
    userName: 'Tom',
    tel: '110',
    email: 'tom@sina.com',
    job: [{
        department: 1102,
        position: 904
    }],
    userRole: 2,
    otherInfo: {}
}, {
    userId: '0022',
    userName: 'Alice',
    tel: '11022',
    email: 'alice@sina.com',
    job: [{
        department: 1101,
        position: 902
    }],
    userRole: 2,
    otherInfo: {
        intro: 'to be No.1'
    }
}, {
    userId: '1022',
    userName: 'Amy',
    tel: '112',
    email: 'amy@sina.com',
    job: [{
        department: 1104,
        position: 909
    }, {
        department: 1103,
        position: 907
    }, {
        department: 1105,
        position: 910
    }],
    userRole: 1,
    otherInfo: {
        intro: 'to be No.2'
    }
}];