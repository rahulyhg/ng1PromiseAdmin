/**
 * Created by mr.whg on 2017/6/16.
 */
var applyDetail = {
    "data": [{
        "businessId": "201706151537000221003",
        "createTime": 1497512243000,
        "finishTime": 1497512337000,
        "formData": {
            "instTitle": "小黄的请假",
            "user": {
                "orgId": "dingb3e7ec6f033f799f35c2f4657eb6378f"
            },
            "classify": {
                "value": "请假",
                "extendValue": "年假"
            },
            "holidayField": ["2016.06.16-2017.06.26", "999天"],
            "reason": "小黄车，呜呜呜~跑得快。",
            "files": ""
        },
        "approvalType": "custom",
        "approval": ["0229480724102868920", "0119480724102869966"],
        "copyTo": ["0119480724102542326"]
    },
        {
            "businessId": "201706151537000221123",
            "createTime": 1497512243000,
            "finishTime": 1497512337000,
            "formData": {
                "instTitle": "小蓝的请假",
                "user": {
                    "orgId": "dingb3e7ec6f033f799f35c2f4657eb6444r"
                },
                "classify": {
                    "value": "外出",
                    "extendValue": "出差。"
                },
                "holidayField": ["2016.06.16-2017.06.26", "999天"],
                "reason": "小黄车需要我们出差去帮助他。。",
                "files": ""
            },
            "approvalType": "custom",
            "approval": ["0119480724102868920", "0119480724102869966"],
            "copyTo": ["0119480724102542326"]
        }]
};
/**
 * 流程控制的services
 * */
console.log(applyDetail.data);

//正在审核中的申请的结果
var approving = {
    data: [{
        "businessId": "201706151537000221003",
        "approvalStatus":"completed",//completed,running,error
        "currentOperator":"0119480724102869966",
        "operators":[{
            "userId": "0119480724102868920",
            "time":"1497512335000",
            "remark":"世界那么大，你就去看看吧。",
            "files":[],
            "action":"agree",//agree,refuse,

        }]
    }]
}


