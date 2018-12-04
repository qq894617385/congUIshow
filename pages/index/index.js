
Page({
    data: {
        index: 0,
        Arr: [
            {
            name: "组件3"
        },
        {
            name: "组件4"
        },
        {
            name: "组件5"
        },
        {
            name: "组件6"
        },
        {
            name: "组件7"
        }
        ],
        show: false,
        text: {
            text: "输入错误",
            icon: "success"
        },
        checkArr: [{
            name: "标题一",
            value: "123",
            // detail: "1321321"
        },
        {
            name: "标题二",
            value: "123",
        },
        {
            name: "标题三",
            value: "123",
        },
        {
            name: "标题四",
            value: "123",
        },
        {
            name: "标题五",
            value: "123",
        },
        {
            name: "标题一",
            value: "123",
        },
        {
            name: "标题二",
            value: "123",
        },
        {
            name: "标题三",
            value: "123",
        },
        {
            name: "标题四",
            value: "123",
        },
        {
            name: "标题五",
            value: "123",
        }, {
            name: "标题一",
            value: "123",
        },
        {
            name: "标题二",
            value: "123",
        },
        {
            name: "标题三",
            value: "123",
        },
        {
            name: "标题四",
            value: "123",
        },
        {
            name: "标题五",
            value: "123",
        },
        {
            name: "标题一",
            value: "123",
        },
        {
            name: "标题二",
            value: "123",
        },
        {
            name: "标题三",
            value: "123",
        },
        {
            name: "标题四",
            value: "123",
        },
        {
            name: "标题五",
            value: "123",
        }
        ],
        step:
            [{
                name: "步骤一",
                done: true
            },
            {
                name: "步骤二",
                done: true
            },
            {
                name: "步骤三",
                done: true
            },
            {
                name: "步骤四",
                done: false
            }]


    },
    onLoad: function () {
        var that = this
        // 初始化组件数据和绑定事件
        // cropper.init.apply(that, [W, H]);
        console.log(that.data)
    },
    selectTap(e) {
        let that = this;
        let mode = e.currentTarget.dataset.mode
        console.log(e)
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success(res) {
                // 获取路径
                const tempFilePath = res.tempFilePaths[0]
                console.log(tempFilePath)
                let img = {
                    src: tempFilePath,
                    mode: mode,
                    sizeType: ['original', 'compressed'],   //'original'(default) | 'compressed'
                    maxLength: 1000, //默认2000，允许最大长宽，避免分辨率过大导致崩溃
                }
                that.setData({
                    img: img
                })
            }
        })
    },
    index(e) {
        this.setData({
            index: e.detail.val
        })
    },
    showToast() {
        cong.toast(this)
    },
    change(e) {
        console.log(e.detail.val)
    },
    checkSelect(e) {
        console.log(e.detail.val);
    },
    // 普通点击事件
    click() {
        console.log("点击回调函数");
    }
});