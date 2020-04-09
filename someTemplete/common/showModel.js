
const model = (info) => {
    var input = {
        title: info.title ? info.title : '提示',
        content: info.content? info.content:'这是内容',
		confirmText:info.confirmText? info.confirmText:'确认',
		cancelText:info.cancelText? info.cancelText:'取消',
		confirmColor:info.confirmColor? info.confirmColor:'#007AFF',
		cancelColor:info.cancelColor? info.cancelColor:'#007AFF',
    }
    const modelDiv = '<div id="popDivMine" style="width: 100%;position: fixed;top: 0;left: 0;bottom: 0;background-color: rgba(0,0,0,0.5);">' +
        '<div style="width: 80%;background-color: #FFFFFF; border-radius: 10px;overflow: hidden;margin: 0 auto;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);padding-top: 10px;">' +
        '<p style="text-align: center; font-size: 15px;">' + input.title + '</p>' +
        '<div style="font-size: 10px;width: 90%;margin: 10px auto;">' +
        input.content +
        '</div>' +
        '<div style="width: 100%;border-top: 1px solid rgb(233,233,233);">' +
        '<div id="confirmClick" style="border-right: 1px solid rgb(233,233,233);width: 49.5%;float: left;line-height: 40px;font-size: 10px;text-align: center;color: ' + input.confirmColor + ';">' +
        input.confirmText +
        '</div>' +
        '<div id="cancelClick" style="width: 49.5%;float: left;line-height: 40px;font-size: 10px;text-align: center;color: ' + input.cancelText + ';">' +
        '取消' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    var popdiv = document.createElement('div')
    popdiv.innerHTML = modelDiv
    document.getElementsByTagName("body").item(0).appendChild(popdiv);
    document.getElementById('confirmClick').addEventListener( 'click', function (){
        info.callBack('confirm')
        popdiv.remove()
    })
    document.getElementById('cancelClick').addEventListener( 'click', function (){
        info.callBack('cancel')
        popdiv.remove()
    })

}
export default{
    model
}