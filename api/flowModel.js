//部门代码：财务部0，人事部1，研发部2，市场部3，后勤4
//职位代码，兼职使用数组存放：经理0，人事1，后勤2，产品经理为3，开发组长为4，开发人员为5

//var positions = ['经理', '人事', '后勤', '产品经理', '开发组长', '开发人员'];
//var departments = ['财务部', '人事部', '研发部', '市场部', '后勤'];

var users = [
    {
        id: '0001',
        userName: 'Tom',
        tel: '110',
        email: 'tom@sina.com',
        job: [{
            department: 2,
            position: 5
        }],
        userRole: 2,
        otherInfo: {}
    }, {
        id: '0022',
        userName: 'Alice',
        tel: '11022',
        email: 'alice@sina.com',
        job: [{
            department: 2,
            position: 4
        }],
        userRole: 2,
        otherInfo: {
            intro: 'to be No.1'
        }
    }, {
        id: '1022',
        userName: 'Amy',
        tel: '112',
        email: 'amy@sina.com',
        job: [{
            department: 2,
            position: 3
        }, {
            department: 3,
            position: 0
        }, {
            department: 3,
            position: 3
        }],
        userRole: 1,
        otherInfo: {
            intro: 'to be No.2'
        }
    }
];

//用户在网站系统中的角色【userRole】：超级管理员为0，管理员为1，用户为2
//用户本次在流程中的角色【userLevel】：项目主管为0，开发组长为1，开发人员为2
//系统权限控制：系统所有权限如下：
var systemPermission = [
    {
        id: 0,
        name: '部门学习浏览权',
        description: '查看所属部门的员工学习记录'
    },
    {
        id: 1,
        name: '部门浏览权',
        description: '查看所属部门的员工信息'
    }, {
        id: 2,
        name: '部门考勤浏览权',
        description: '查看所属部门的员工考勤记录'
    },
    {
        id: 3,
        name: '部门日志浏览权',
        description: '查看所属部门的员工日志记录'
    },
    {
        id: 4,
        name: '部门日志评论权',
        description: '评论所属部门的员工日志'
    },
    {
        id: 5,
        name: '部门考勤权',
        description: '所属部门的员工的考勤工作'
    },
    {
        id: 6,
        name: '部门审批权',
        description: '审批所属部门的员工的工作进度'
    },
    {
        id: 7,
        name: '上传代码',
        description: '提交代码'
    },
    {
        id: 8,
        name: '提交各种各样的申请',
        description: '提交各种各样的申请'
    }
];
//管理员和普通用户在系统中的权限分布：
var rolePermission = [
    {
        //超级管理员
        role: 0,
        permission: []
    },
    {
        //管理员
        role: 1,
        permission: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
        role: 2,
        permission: [1, 2, 3, 4, 5, 6, 7, 8]
    }
];
//各个部门的权限分布：
var departments = [
    {
        //财务部
        id: 0,
        name: '财务部',
        permission: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        //人事部
        id: 1,
        name: '人事部',
        permission: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        //研发部
        id: 2,
        name: '研发部',
        permission: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
        //市场部
        id: 3,
        name: '市场部',
        permission: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
        //后勤
        id: 4,
        name: '后勤',
        permission: [1, 2, 3, 4, 5, 6, 7, 8]
    }
]
//各个职位的权限如下：
var positions = [
    {
        //这是一个`经理`的权限
        id: 0,
        name: '经理',
        permission: []
    },
    {
        //这是一个`人事`的权限
        id: 1,
        name: '人事',
        permission: [5, 6, 7, 8]
    },
    {
        //这是一个`后勤`的权限
        id: 2,
        name: '后勤',
        permission: [1, 2, 6]
    },
    {
        //这是一个`项目主管`的权限
        id: 3,
        name: '项目主管',
        permission: [1, 2, 4, 5, 7, 8]
    },
    {
        //这是一个`开发组长`的权限
        id: 4,
        name: '开发组长',
        permission: [2, 3, 4, 5, 8]
    },
    {
        //这是一个`开发者`的权限
        id: 5,
        name: '开发者',
        permission: [8]
    }
]


//本次流程中的用户权限:
//项目主管：各组项目开发进度浏览、审批权限。发布公告。
//开发组长：向项目主管提交本组开发进度。小组成员开发进度浏览、审批。提交开发过程中遇到的问题。
//开发人员：向开发组长提交开发进度、开发过程中遇到的问题。


/**
 * *流程控制数据示例:
 * **/
var data=[{

}]