Component({
    data: {
        mysrc: "https://static.smartisanos.cn/os/assets/images/onestep-logo@2x.e035bc6a7fbf6f6a5986c4349a6c9a7e.png",
        sHeight: "",
        sWidth: ""
    },
    ready() {
        const that = this;
        // 下载图片
        wx.downloadFile({
            url: that.data.mysrc,
            success: function (sres) {
                console.log(sres);
                that.setData({
                    mysrc: sres.tempFilePath
                })
            }, fail: function (fres) {
            }
        });
        const ctx = wx.createCanvasContext('myCanvas', this);
        ctx.drawImage(that.data.mysrc, 10, 20, 200, 200, 0, 0, 200, 200)
        ctx.draw();
    },
    methods: {
        test(x, y) {
        },
        onChange(e) {

        },
        bindtouchmove(e){
            console.log(e)
        },
        bindtouchstart(e){
            console.log(e)
        }
    }
})
